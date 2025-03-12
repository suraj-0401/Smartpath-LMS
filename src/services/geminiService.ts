import { GoogleGenerativeAI } from '@google/generative-ai';

interface KnowledgeBase {
    [key: string]: string;
}

export class GeminiService {
    private genAI: GoogleGenerativeAI;
    private knowledgeBase: KnowledgeBase;
    private contextPrompt: string;

    constructor(apiKey: string) {
        if (!apiKey) {
            console.error('API key is undefined or empty');
            throw new Error('API key is missing. Please check your environment variables.');
        }

        this.genAI = new GoogleGenerativeAI(apiKey);
        
        // Initialize knowledge base with specific answers
        this.knowledgeBase = {
            'what is smartpath?': `SmartPath is an innovative Learning Management System (LMS) that revolutionizes education management for schools and institutions.

🔸 Core Purpose
- A comprehensive digital platform designed to streamline education management
- Facilitates seamless interaction between educators, students, and parents
- Transforms traditional learning into an engaging digital experience

🔸 Key Features
- Student Information Management
- Course and Curriculum Planning
- Real-time Progress Tracking
- Interactive Learning Tools
- Parent-Teacher Communication Portal
- Assessment and Grading System
- Attendance Management
- Resource Library

🔸 Benefits
- Reduces administrative burden
- Enhances learning outcomes
- Provides data-driven insights
- Enables remote and hybrid learning
- Improves communication between stakeholders



Visit our website: https://smartpath.in
For support: support@smartpath.in

SmartPath is committed to making education more accessible, efficient, and effective through technology.`,

            'how can i contact smartpath?': `You can reach SmartPath through multiple channels.

🔸 Contact Information
- Email: support@smartpath.in
- Website: https://smartpath.in/contact

🔸 Office Hours
- Monday to Friday: 9:00 AM - 6:00 PM (IST)
- Saturday: 9:00 AM - 2:00 PM (IST)
- Sunday: Closed

Our support team typically responds within 24 hours on business days.`,

            'tell me about smartpath pricing': `SmartPath offers flexible pricing plans to suit different institutional needs.

🔸 Basic Plan
- Essential LMS features
- Up to 500 students
- Basic support
- Core reporting

🔸 Professional Plan
- Advanced LMS features
- Up to 2000 students
- Priority support
- Advanced analytics
- Custom branding

🔸 Enterprise Plan
- Full feature access
- Unlimited students
- 24/7 priority support
- Custom integration
- Dedicated account manager

For detailed pricing information and custom quotes
- Visit: https://smartpath.in/pricing
- Email: sales@smartpath.in
- Contact: +91 (Support Phone Number)

🔸 All plans include
- Free updates
- Basic training
- Security features
- Mobile access`,

            'what support does smartpath provide?': `SmartPath offers comprehensive support to ensure your success.

🔸 Technical Support
- Email support: support@smartpath.in
- Online ticketing system
- Knowledge base access
- Video tutorials

🔸 Training Resources
- Getting started guides
- Video tutorials
- Regular webinars
- Documentation library

🔸 Implementation Support
- Setup assistance
- Data migration help
- Integration support
- Custom configuration

🔸 Ongoing Assistance
- Regular check-ins
- System updates
- Performance optimization
- Best practices guidance

Support Portal: https://smartpath.in/support
Help Center: https://help.smartpath.in`,

            'what makes smartpath different?': `SmartPath stands out in the education technology space for several key reasons.

🔸 Innovation Focus
- AI-powered learning analytics
- Predictive performance insights
- Adaptive learning paths
- Real-time collaboration tools

🔸 User-Centric Design
- Intuitive interface
- Mobile-first approach
- Accessibility features
- Customizable dashboards

🔸 Integration Capabilities
- Seamless third-party integrations
- API access
- Custom plugin support
- Data import/export tools

🔸 Security & Compliance
- End-to-end encryption
- GDPR compliance
- Regular security audits
- Data backup & recovery

🔸 Local Support
- India-based support team
- Regional language support
- Understanding of local education system
- Customization for Indian schools

Learn more at: https://smartpath.in/why-smartpath`,

            'what is js': `Let me explain how JavaScript makes SmartPath interactive and user-friendly.

🔸 Frontend Features
- Real-time Dashboard Updates
- Interactive Visualizations
- Smart Forms
- Smooth Navigation

🔸 Key Benefits
- Live Updates: See changes instantly as they happen
- Better Performance: Fast and responsive interface
- Mobile-Friendly: Works great on all devices
- Offline Support: Access key features even without internet

Want to see these features in action? Try
- Opening your dashboard to see real-time updates
- Using the interactive grade calculator
- Checking the attendance tracker
- Exploring the progress visualization tools

Have questions about any specific feature? I'm here to help!`,

            'tell me about javascript': `Let me show you how JavaScript makes your SmartPath experience amazing.

🔸 Interactive Learning Tools
- Dynamic Quizzes
- Questions adapt based on your answers
- Get instant feedback on your responses
- See explanations in real-time

🔸 Live Progress Tracking
- Watch your progress bar update as you learn
- Get celebratory animations for achievements
- See instant grade calculations

🔸 Real-time Communication
- Chat with teachers instantly
- Get notifications as they happen
- Join live discussion groups

Cool Features You Can Try
- Open a quiz and see dynamic questions
- Submit an assignment and watch your progress update
- Use the chat feature to connect with others
- Try the interactive calculator tools

Want to explore any of these features? Just let me know which one interests you!`,

            'explain javascript features': `Let me walk you through the cool interactive features you can use in SmartPath.

🔸 Smart Interface
- Click the theme switcher to change colors
- Resize your window to see responsive design
- Use touch gestures on mobile devices

🔸 Quick Search
- Type to see instant search results
- Use filters that update in real-time
- Get smart suggestions as you type

🔸 Live Data
- Watch your grades update instantly
- See attendance records in real-time
- Track assignment progress live

🔸 Interactive Elements
- Drag and drop files to upload
- Use the rich text editor for assignments
- Try the interactive calendar

Popular Features to Try
- Calendar scheduling tool
- Grade calculator
- File sharing system
- Discussion boards

Which feature would you like to explore first?`
        };

        // Set up context for Gemini AI fallback
        this.contextPrompt = `You are the SmartPath Support Assistant. Here's the essential information about SmartPath.

🔸 Basic Information
Website: https://smartpath.in
Support Email: support@smartpath.in

SmartPath is an educational Learning Management System (LMS) designed to
- Streamline education management
- Connect teachers, students, and parents
- Provide comprehensive learning tools
- Enable data-driven decision making
- Facilitate remote and hybrid learning

🔸 Key Differentiators
- India-focused solution
- AI-powered analytics
- Mobile-first approach
- Local support team
- Custom integration options

Please provide helpful, accurate responses about educational technology and learning management systems. If you're unsure about specific SmartPath features, provide general guidance while staying within the educational technology domain.`;
    }

    private findBestMatch(userQuestion: string): string | null {
        const normalizedQuestion = userQuestion.toLowerCase().trim();
        
        // Navigation related keywords mapping
        const navigationMap: { [key: string]: string } = {
            'home': '/',
            'pricing': '/pricing',
            'features': '/features',
            'about': '/about',
            'contact': '/contact',
            'support': '/support',
            'login': '/login',
            'register': '/register',
            'dashboard': '/dashboard',
            'privacy': '/privacy',
            'terms': '/terms',
            'cookie': '/cookie-policy'
        };

        // Check for navigation intent
        const navigationKeywords = ['go to', 'take me to', 'navigate to', 'show me', 'open', 'visit'];
        const isNavigationRequest = navigationKeywords.some(keyword => normalizedQuestion.includes(keyword));

        if (isNavigationRequest) {
            for (const [page, path] of Object.entries(navigationMap)) {
                if (normalizedQuestion.includes(page)) {
                    return `I'll help you navigate to the ${page} page. Here's the direct link: https://smartpath.in${path}

You can also use the navigation menu at the top of the website to access this and other pages.

Is there anything specific you'd like to know about the ${page} page?`;
                }
            }
        }

        // Direct match from knowledge base
        if (this.knowledgeBase[normalizedQuestion]) {
            return this.knowledgeBase[normalizedQuestion];
        }

        // Add navigation-specific responses to knowledge base
        const navigationResponses: KnowledgeBase = {
            'where can i find pricing': `You can find our pricing information at: https://smartpath.in/pricing

Our pricing page provides detailed information about:
- Different plan options
- Feature comparisons
- Student capacity limits
- Support levels
- Custom enterprise solutions

Would you like me to explain our pricing plans in detail?`,

            'how do i access the dashboard': `To access the SmartPath dashboard:

1. Visit: https://smartpath.in/login
2. Enter your credentials
3. Click "Login"

If you're having trouble accessing your dashboard:
- Check your login credentials
- Make sure your account is activated
- Contact support at support@smartpath.in

Need help with something specific in the dashboard?`,

            'where is the support page': `You can access our support resources in several ways:

1. Main Support Portal: https://smartpath.in/support
2. Help Center: https://help.smartpath.in
3. Knowledge Base: https://smartpath.in/kb

Our support page provides:
- Troubleshooting guides
- Video tutorials
- FAQs
- Contact options

Need immediate assistance? Email us at support@smartpath.in`,

            'show me features': `You can explore all our features at: https://smartpath.in/features

Our features page showcases:
- Student Management Tools
- Course Management System
- Communication Platform
- Analytics Dashboard
- Assessment Tools

Would you like me to explain any specific feature in detail?`
        };

        // Add navigation responses to main knowledge base
        Object.assign(this.knowledgeBase, navigationResponses);

        // Fuzzy match for questions containing key phrases
        for (const [key, value] of Object.entries(this.knowledgeBase)) {
            if (normalizedQuestion.includes(key.replace('?', ''))) {
                return value;
            }
        }

        return null;
    }

    private isSmartPathRelated(question: string): boolean {
        const smartpathKeywords = [
            'smartpath', 'lms', 'platform', 'dashboard', 'course', 'student',
            'teacher', 'school', 'institution', 'education', 'learning',
            'assessment', 'grade', 'attendance', 'curriculum', 'pricing',
            'support', 'features', 'login', 'register'
        ];
        
        const normalizedQuestion = question.toLowerCase();
        return smartpathKeywords.some(keyword => normalizedQuestion.includes(keyword));
    }

    private getGeneralKnowledge(question: string): string | null {
        const generalKnowledge: KnowledgeBase = {
            'what is javascript': `JavaScript is a versatile programming language that powers modern web interactions.

🔸 Key Points
- Programming language for web development
- Runs in all modern browsers
- Creates interactive website features
- Handles both frontend and backend

🔸 Common Uses
- Adding interactivity to websites
- Creating web applications
- Building mobile apps
- Developing server applications

🔸 Popular Features
- Event handling
- DOM manipulation
- AJAX requests
- Animations and effects

Want to learn more about a specific JavaScript topic?`,

            'what is js': `JS (JavaScript) is the programming language that makes websites interactive.

🔸 Main Uses
- Making websites dynamic
- Handling user interactions
- Processing data in real-time
- Creating animations

🔸 Why It's Popular
- Easy to learn
- Works everywhere
- Huge community
- Lots of resources

🔸 What You Can Build
- Interactive websites
- Web applications
- Mobile apps
- Games

Interested in learning more about what JS can do?`,

            'explain javascript features': `Here are the key features that make JavaScript powerful:

🎯 Core Features
- Variables & Data Types
- Functions & Objects
- Arrays & Loops
- Event Handling

🔄 Modern Capabilities
- Async/Await
- Promises
- Modules
- Classes

💡 Cool Things You Can Do
- Create animations
- Handle user input
- Make API calls
- Build applications

Want to learn about any specific feature?`,

            'what is html': `HTML is the foundation of web pages.

🔸 Basics
- Markup language for web pages
- Creates structure and content
- Uses tags like <div>, <p>, <header>
- Works with CSS for styling

🔸 Common Elements
- Text content
- Images and media
- Links
- Forms

🔸 Key Concepts
- Semantic structure
- Accessibility
- Document flow
- Meta information

Need more specific HTML information?`,

            'what is css': `CSS makes web pages look beautiful.

🎨 Main Purpose
- Styles web pages
- Controls layout
- Handles animations
- Makes sites responsive

🔸 Key Features
- Colors and typography
- Box model
- Flexbox and Grid
- Transitions

🔸 Styling Options
- Layouts
- Animations
- Responsive design
- Visual effects

Want to know more about specific CSS techniques?`,

            'what is react': `React is a popular JavaScript library for building user interfaces.

🔸 Core Concepts
- Components
- Virtual DOM
- JSX syntax
- State management

🔸 Key Features
- Reusable components
- Fast rendering
- Easy to learn
- Great ecosystem

🔸 Benefits
- Better organization
- Faster development
- Efficient updates
- Strong community

Want to explore specific React topics?`,

            'what is nodejs': `Node.js lets you run JavaScript on servers and computers.

🔸 Main Features
- Server-side JavaScript
- Fast performance
- Large package ecosystem
- Event-driven architecture

🔸 Common Uses
- Web servers
- API development
- Command line tools
- Real-time applications

🔸 Advantages
- Easy to learn
- Great for scaling
- Active community
- Rich package library

Interested in learning more about Node.js capabilities?`
        };

        const normalizedQuestion = question.toLowerCase().trim();
        return generalKnowledge[normalizedQuestion] || null;
    }

    async generateResponse(prompt: string): Promise<string> {
        if (!prompt.trim()) {
            throw new Error('Please type a message to continue.');
        }

        try {
            // First check if it's a general knowledge question
            const generalResponse = this.getGeneralKnowledge(prompt);
            if (generalResponse) {
                return generalResponse;
            }

            // If it's SmartPath related, check knowledge base
            if (this.isSmartPathRelated(prompt)) {
                const knowledgeBaseResponse = this.findBestMatch(prompt);
                if (knowledgeBaseResponse) {
                    return knowledgeBaseResponse;
                }

                // Use Gemini AI with SmartPath context for SmartPath-related questions
                const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const fullPrompt = `${this.contextPrompt}

User Question: ${prompt}

Please provide a response following these guidelines:
1. Do not use any Markdown symbols (*, **, ##, etc.)
2. Use emojis (🔸) for section headers
3. Use simple dashes (-) for list items
4. Keep sentences clear and concise
5. Organize information in clear sections
6. Use line breaks between sections for readability

Response:`;
                const result = await model.generateContent(fullPrompt);
                return this.formatResponse(result.response.text());
            }

            // For other questions, use Gemini AI without SmartPath context
            const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const formattingPrompt = `${prompt}

Please provide a response following these guidelines:
1. Do not use any Markdown symbols (*, **, ##, etc.)
2. Use emojis (🔸) for section headers
3. Use simple dashes (-) for list items
4. Keep sentences clear and concise
5. Organize information in clear sections
6. Use line breaks between sections for readability

Response:`;
            const result = await model.generateContent(formattingPrompt);
            return this.formatResponse(result.response.text());

        } catch (error) {
            console.error('Error generating response:', error);
            if (error instanceof Error) {
                if (error.message.includes('404')) {
                    throw new Error('Model not found. Please check the model name or API configuration.');
                }
                if (error.message.includes('API_KEY_INVALID')) {
                    throw new Error('Invalid API key. Please verify it at https://makersuite.google.com/app/apikey');
                }
                throw new Error(`Failed to generate response: ${error.message}`);
            }
            throw new Error('Failed to generate response. Please try again.');
        }
    }

    private formatResponse(response: string): string {
        // Remove any remaining Markdown symbols
        return response
            .replace(/[*#`]/g, '')  // Remove Markdown symbols
            .replace(/\n\s*\n\s*\n/g, '\n\n')  // Normalize multiple line breaks
            .replace(/^[-_]\s/gm, '- ')  // Standardize list items
            .trim();  // Remove extra whitespace
    }
}