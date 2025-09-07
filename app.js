// Healthverse Chatbot Application
class HealthverseChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.quickActions = document.getElementById('quickActions');

        // Chat data
        this.data = {
            welcomeMessage: "Hi there! 👋 I'm Healthverse, your friendly health companion. I'm here to help bust medical myths and share evidence-based health tips for better living. What would you like to know about today?",
            
            medicalMyths: [
                {
                    keywords: ["vaccine", "vaccination", "autism", "mercury", "myth", "myths"],
                    response: "That's a common myth! 🧬 Vaccines do NOT cause autism. Multiple large-scale studies involving millions of children have consistently shown no link between vaccines and autism. The original study claiming this connection was fraudulent and retracted. Vaccines are one of the safest and most effective ways to prevent serious diseases. If you have concerns, discuss them with your healthcare provider who can provide personalized guidance. 💉✨"
                },
                {
                    keywords: ["cracking", "knuckles", "arthritis", "joints"],
                    response: "Good news! 🙌 Cracking your knuckles does NOT cause arthritis. The popping sound comes from gas bubbles in your joint fluid, not damage to your joints. Multiple studies have found no connection between knuckle cracking and arthritis. However, excessive cracking might cause temporary swelling or reduced grip strength, so moderation is key! 🤲"
                },
                {
                    keywords: ["cold", "weather", "flu", "illness", "vitamin c", "sick"],
                    response: "Here's the truth about colds! ❄️ Cold weather itself doesn't make you sick - viruses do! We get more colds in winter because we spend more time indoors in close contact with others. While vitamin C supports immune function, mega-doses won't prevent colds. The best prevention? Wash your hands frequently, get enough sleep, eat nutritious foods, and maintain social distance when people are sick! 🧼✨"
                },
                {
                    keywords: ["sweat", "toxins", "detox", "cleanse"],
                    response: "Let me clear this up! 💦 Sweat is primarily water and salt - it doesn't eliminate significant toxins from your body. Your liver and kidneys are your body's amazing detox system, working 24/7 to filter waste. 'Detox' products and extreme cleanses aren't necessary and can sometimes be harmful. Support your natural detox system with plenty of water, nutritious foods, adequate sleep, and regular exercise! 🏃‍♀️"
                },
                {
                    keywords: ["sugar", "hyperactive", "hyperactivity", "kids", "children"],
                    response: "Surprise! 🍭 Multiple controlled studies show that sugar doesn't actually cause hyperactivity in children. This persistent myth likely comes from observing excited kids at birthday parties and other sugary celebrations. The real culprits for hyperactivity are usually excitement, lack of routine, or underlying conditions like ADHD. That said, limiting sugar is still important for dental health and overall nutrition! 🦷"
                }
            ],
            
            healthTips: [
                {
                    keywords: ["hydration", "water", "drink", "thirsty", "tips", "health", "daily"],
                    response: "💧 Stay hydrated! Aim for about 8 glasses of water daily, but listen to your body - thirst is a good indicator. Your urine should be light yellow. Water helps with everything from brain function to joint lubrication. Add slices of lemon, cucumber, or mint for variety! Remember: coffee and tea count toward hydration too (despite what you might have heard)! ☕"
                },
                {
                    keywords: ["sleep", "rest", "tired", "insomnia"],
                    response: "😴 Quality sleep is crucial! Most adults need 7-9 hours nightly. Create a bedtime routine: dim lights 1 hour before bed, keep your room cool and dark, and avoid screens. Your brain literally cleans itself during sleep, removing toxins and consolidating memories. Poor sleep affects everything from immunity to weight management. Sweet dreams are made of good sleep hygiene! 🌙"
                },
                {
                    keywords: ["exercise", "workout", "fitness", "movement"],
                    response: "🏃‍♀️ Move your body daily! Even 30 minutes of moderate activity (like brisk walking) can reduce disease risk and boost mood. You don't need a gym - dancing, gardening, taking stairs, or playing with pets all count! Start small and build gradually. Exercise is like a magic pill for your brain, heart, bones, and mental health. Find activities you enjoy - consistency beats intensity! 💪"
                },
                {
                    keywords: ["stress", "anxiety", "mental health", "overwhelmed"],
                    response: "🧘‍♀️ Managing stress is vital for health! Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, out for 8. Other stress-busters include regular exercise, connecting with loved ones, spending time in nature, and practicing gratitude. Chronic stress affects your immune system, heart, and mental health. Don't hesitate to seek professional help if stress feels overwhelming! 🌿"
                },
                {
                    keywords: ["nutrition", "food", "diet", "eating", "fruits", "vegetables"],
                    response: "🥗 Eat the rainbow! Fill half your plate with colorful fruits and vegetables - each color provides different nutrients. Choose whole foods over processed when possible. Include healthy fats (like avocados, nuts), lean proteins, and whole grains. Remember: no single food is magic, and no food is completely 'bad' - it's about overall patterns. Enjoy your food and eat mindfully! 🌈"
                }
            ],
            
            whenToSeeDoctor: [
                {
                    keywords: ["doctor", "physician", "medical help", "sick", "symptoms", "see"],
                    response: "🏥 You should see a healthcare provider if you experience: persistent fever over 101°F (38.3°C), severe or worsening pain, difficulty breathing, chest pain, sudden severe headache, persistent vomiting, signs of dehydration, or any symptom that worries you or interferes with daily life. Trust your instincts - you know your body best! When in doubt, call your doctor's office for guidance. 📞"
                }
            ],
            
            emergencyInfo: [
                {
                    keywords: ["emergency", "911", "urgent", "help", "chest pain", "breathing", "situations"],
                    response: "🚨 CALL 911 IMMEDIATELY for: chest pain or pressure, difficulty breathing, severe bleeding, loss of consciousness, stroke symptoms (face drooping, arm weakness, speech difficulty), severe allergic reactions, or serious injuries. Don't drive yourself - call for emergency services! For poison control: 1-800-222-1222. Remember: it's better to seek emergency care and be safe than to wait and risk your health! 🏥"
                }
            ],
            
            fallbackResponses: [
                "I'm not sure I understood that completely. Could you try rephrasing your question? I'm great at discussing medical myths, daily health tips, and when to seek professional care! 🤔",
                "That's an interesting question! While I can help with common health topics and myth-busting, for specific medical concerns, I'd recommend speaking with a healthcare professional who can give you personalized advice. Is there anything else about general health I can help with? 💬",
                "I want to make sure I give you accurate information! For that particular topic, it's best to consult with a healthcare provider. But I'm here to help with medical myths, healthy lifestyle tips, and general wellness questions! 🌟"
            ]
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.displayWelcomeMessage();
        this.updateSendButtonState();
        setTimeout(() => this.focusInput(), 1500);
    }

    setupEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        // Send message on Enter key (but not Shift+Enter)
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });

        // Quick action buttons
        this.quickActions.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-btn')) {
                const action = e.target.getAttribute('data-action');
                this.handleQuickAction(action);
            }
        });

        // Update send button state on input
        this.chatInput.addEventListener('input', () => {
            this.updateSendButtonState();
        });
    }

    displayWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(this.data.welcomeMessage, 'bot');
            setTimeout(() => {
                this.addDisclaimer();
            }, 800);
        }, 500);
    }

    addMessage(text, sender, showTime = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message--${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = sender === 'bot' ? '🏥' : '👤';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.className = 'message-text';
        messageText.textContent = text;
        
        content.appendChild(messageText);
        
        if (showTime) {
            const time = document.createElement('div');
            time.className = 'message-time';
            time.textContent = new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            content.appendChild(time);
        }
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
        
        return messageDiv;
    }

    addDisclaimer() {
        const disclaimerText = "⚠️ Important: I'm here to provide general health information and bust common myths, but I'm not a replacement for professional medical advice. Always consult with a qualified healthcare provider for personalized medical guidance, diagnosis, or treatment decisions.";
        this.addMessage(disclaimerText, 'bot', false);
    }

    showTypingIndicator() {
        this.typingIndicator.classList.remove('hidden');
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.typingIndicator.classList.add('hidden');
    }

    handleSendMessage() {
        const message = this.chatInput.value.trim();
        if (message === '') return;

        // Add user message
        this.addMessage(message, 'user');
        
        // Clear input and update button state
        this.chatInput.value = '';
        this.updateSendButtonState();
        
        // Show typing indicator and generate response
        this.showTypingIndicator();
        
        // Generate response with realistic delay
        const delay = 1000 + Math.random() * 1500; // 1-2.5 seconds
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, delay);
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase().trim();
        
        // Check for greetings first
        if (this.isGreeting(lowerMessage)) {
            return "Hello! 👋 Great to see you! I'm here to help with health questions, bust medical myths, and share wellness tips. What's on your mind today?";
        }

        // Check for thanks
        if (this.isThanking(lowerMessage)) {
            return "You're very welcome! 😊 I'm happy to help! Feel free to ask me anything else about health and wellness. Stay healthy! 🌟";
        }

        // Check all categories for keyword matches
        const categories = [
            ...this.data.medicalMyths,
            ...this.data.healthTips,
            ...this.data.whenToSeeDoctor,
            ...this.data.emergencyInfo
        ];

        // Find matching responses
        for (const item of categories) {
            if (this.hasMatchingKeywords(lowerMessage, item.keywords)) {
                return item.response;
            }
        }

        // Return random fallback response
        const randomIndex = Math.floor(Math.random() * this.data.fallbackResponses.length);
        return this.data.fallbackResponses[randomIndex];
    }

    hasMatchingKeywords(message, keywords) {
        return keywords.some(keyword => {
            // Check for exact word matches to avoid partial matches
            const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, 'i');
            return regex.test(message) || message.includes(keyword.toLowerCase());
        });
    }

    isGreeting(message) {
        const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
        return greetings.some(greeting => message.includes(greeting));
    }

    isThanking(message) {
        const thanks = ['thank', 'thanks', 'thx', 'appreciate'];
        return thanks.some(thank => message.includes(thank));
    }

    handleQuickAction(action) {
        let response = '';
        
        // Directly generate responses for quick actions
        switch (action) {
            case 'myths':
                response = "Here are some common medical myths I can help bust! 🔍\n\n• Vaccines cause autism (FALSE!)\n• Cracking knuckles causes arthritis (FALSE!)\n• Cold weather makes you sick (FALSE!)\n• Sweat detoxifies your body (FALSE!)\n• Sugar makes kids hyperactive (FALSE!)\n\nAsk me about any of these or other health myths you've heard!";
                break;
            case 'tips':
                response = "Here are some daily health tips for better living! 💡\n\n• Stay hydrated with 8 glasses of water daily 💧\n• Get 7-9 hours of quality sleep 😴\n• Move your body for 30 minutes daily 🏃‍♀️\n• Manage stress with breathing exercises 🧘‍♀️\n• Eat colorful fruits and vegetables 🌈\n\nAsk me about any of these topics for more detailed advice!";
                break;
            case 'doctor':
                response = this.data.whenToSeeDoctor[0].response;
                break;
            case 'emergency':
                response = this.data.emergencyInfo[0].response;
                break;
            default:
                response = "I'm not sure what you're looking for. Try asking about medical myths, health tips, when to see a doctor, or emergency situations!";
        }

        if (response) {
            // Show typing indicator first
            this.showTypingIndicator();
            
            setTimeout(() => {
                this.hideTypingIndicator();
                this.addMessage(response, 'bot');
            }, 800);
        }
    }

    updateSendButtonState() {
        const hasText = this.chatInput.value.trim() !== '';
        this.sendButton.disabled = !hasText;
        this.sendButton.style.opacity = hasText ? '1' : '0.5';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 50);
    }

    focusInput() {
        this.chatInput.focus();
    }
}

// Initialize the chatbot when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new HealthverseChatbot();
    
    // Add some accessibility improvements
    document.addEventListener('keydown', (e) => {
        // Alt + 1-4 for quick actions (accessibility shortcut)
        if (e.altKey && e.key >= '1' && e.key <= '4') {
            e.preventDefault();
            const quickButtons = document.querySelectorAll('.quick-btn');
            const index = parseInt(e.key) - 1;
            if (quickButtons[index]) {
                quickButtons[index].click();
            }
        }
    });

    // Add visual feedback for interactive elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe messages for smooth animations
    const messagesContainer = document.getElementById('chatMessages');
    const observeNewMessages = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('message')) {
                    // Initially hide new messages for animation
                    node.style.opacity = '0';
                    node.style.transform = 'translateY(10px)';
                    node.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    // Animate in
                    setTimeout(() => {
                        node.style.opacity = '1';
                        node.style.transform = 'translateY(0)';
                    }, 50);
                }
            });
        });
    });

    observeNewMessages.observe(messagesContainer, { childList: true });
});