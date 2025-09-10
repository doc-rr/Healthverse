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
                },               
{
    keywords: ["water", "8 glasses", "hydration", "daily", "drink"],
    response: "Here's the truth about hydration! 💧 You don't need exactly 8 glasses of water daily. Your water needs depend on your activity level, climate, overall health, and body size. Plus, you get water from food (especially fruits and veggies) and other beverages too! The best indicator? Listen to your thirst and check your urine color - light yellow means you're well hydrated. 🌟"
},
{
    keywords: ["brain", "10 percent", "10%", "use only", "brain power"],
    response: "Myth busted! 🧠 We absolutely do NOT use only 10% of our brains - that's completely false! Brain imaging shows we use virtually all of our brain, even during simple tasks. Even during sleep, many brain areas remain active. This myth has been thoroughly debunked by neuroscience. Every part of your brain has a function, and damage to any area can have noticeable effects. Your brain is amazing and you're using way more than 10%! ✨"
},
{
    keywords: ["hair", "fingernails", "grow", "death", "after death", "corpse"],
    response: "That's a spooky myth! 👻 Hair and fingernails do NOT continue growing after death. What actually happens is that skin dehydrates and shrinks after death, making hair and nails appear longer. It's an optical illusion! All cell growth, including hair and nail growth, stops when the heart stops pumping blood. Science shows that cellular activity ceases at death. So no zombie-like nail growth happening! 🔬"
},
{
    keywords: ["reading", "dim light", "dark", "eyesight", "ruin eyes", "damage vision"],
    response: "Good news for late-night readers! 📚 Reading in dim light won't permanently damage your eyesight or 'ruin' your vision. It might cause temporary eye strain, fatigue, or headaches, but no permanent harm. Your eyes are pretty resilient! That said, good lighting is more comfortable and reduces strain. So while you won't go blind, your eyes will thank you for decent lighting! 💡"
},
{
    keywords: ["turkey", "drowsy", "sleepy", "thanksgiving", "tryptophan", "tired"],
    response: "Turkey gets a bad rap! 🦃 While turkey contains tryptophan (an amino acid that can promote sleepiness), it doesn't have more than chicken, eggs, or cheese. The real reason you feel sleepy after Thanksgiving dinner? You probably ate a large meal with lots of carbohydrates, which can make anyone feel drowsy. Plus, you might be relaxing with family after a big day. It's the feast, not just the turkey! 😴"
},
{
    keywords: ["sweat", "toxins", "detox", "sauna", "sweating"],
    response: "Let's clear this up! 💦 Sweating doesn't eliminate significant toxins from your body - that's your liver and kidneys doing the heavy lifting 24/7! Sweat is mostly water and salt, with tiny traces of other substances. Your body's natural detox system (liver, kidneys, lungs) is incredibly efficient. Save your money on 'detox' saunas and support your real detox organs with water, good nutrition, and adequate sleep! 🌟"
},
{
    keywords: ["fat", "bad", "avoid fat", "low fat", "no fat"],
    response: "Not all fats are villains! 🥑 Your body actually NEEDS healthy fats for brain function, hormone production, and absorbing vitamins A, D, E, and K. The key is choosing the right types: olive oil, nuts, seeds, avocados, and fatty fish provide beneficial fats. Trans fats and excessive saturated fats are the ones to limit. So don't fear all fats - embrace the healthy ones! Your brain will thank you! 🧠✨"
},
{
    keywords: ["natural", "safe", "herbal", "supplements", "always safe"],
    response: "Natural doesn't always mean safe! 🌿 Many natural substances can be powerful and potentially harmful, especially when combined with medications or taken in large amounts. For example, St. John's Wort can interfere with birth control and antidepressants. Even something 'natural' like poison ivy isn't safe! Always research natural remedies and consult healthcare providers, especially if you take medications. Nature is powerful - respect it! ⚠️"
},
{
    keywords: ["sleep", "catch up", "weekend", "sleep debt", "make up sleep"],
    response: "Sorry, but sleep doesn't work like a bank account! 😴 You can't just 'catch up' on lost sleep over the weekend. While sleeping in might help you feel temporarily better, it can't fully reverse the effects of chronic sleep deprivation on your immune system, memory, and metabolism. Consistent, quality sleep (7-9 hours nightly) is what your body needs. Try to stick to a regular sleep schedule even on weekends! 🌙"
},
{
    keywords: ["breakfast", "most important", "meal", "skipping breakfast"],
    response: "The breakfast story is more nuanced! 🍳 While breakfast can be beneficial, especially for children and active people, it's not necessarily the 'most important meal' for everyone. Some people do great with intermittent fasting, while others need morning fuel. What matters most is your overall daily nutrition and eating pattern. If you're hungry in the morning, eat something nutritious. If not, that's okay too! Listen to your body! 🌟"
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
                },
                
{
    keywords: ["nuts", "seeds", "almonds", "walnuts", "healthy fats"],
    response: "Go nuts for nuts! 🥜 Nuts and seeds are nutritional powerhouses packed with healthy fats, protein, fiber, vitamin E, and magnesium. Research shows they can reduce heart disease risk and support brain health. Sprinkle them on salads, yogurt, or oatmeal. Try almonds, walnuts, pumpkin seeds, or sunflower seeds. A small handful daily is perfect - they're calorie-dense but incredibly nutritious! 💪"
},
{
    keywords: ["processed", "ultra-processed", "packaged", "junk food", "avoid"],
    response: "Choose real food over processed! 🥗 Ultra-processed foods (like packaged snacks, sugary drinks, and ready meals) are linked to higher rates of obesity, heart disease, and diabetes. They're often high in salt, sugar, and unhealthy fats while lacking nutrients. Try to eat foods that look like they did when they grew - fresh fruits, vegetables, whole grains, and lean proteins. Your body knows how to use real food! 🌱"
},
{
    keywords: ["protein", "adequate", "muscle", "amino acids", "daily"],
    response: "Protein is your body's building material! 💪 Adequate protein helps maintain muscle mass, supports immune function, and keeps you feeling full. Aim for protein at each meal from sources like lean meats, fish, eggs, beans, lentils, nuts, and Greek yogurt. Adults generally need about 0.8-1 gram per kilogram of body weight daily, more if you're very active. Spread it throughout the day for best results! 🏃‍♀️"
},
{
    keywords: ["stress", "management", "mindfulness", "meditation", "anxiety"],
    response: "Stress management is health management! 🧘‍♀️ Chronic stress affects everything from your immune system to your heart health. Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. Other great stress-busters include regular exercise, spending time in nature, connecting with loved ones, and practicing gratitude. Even 10 minutes of daily mindfulness can make a real difference! 🌿"
},
{
    keywords: ["social", "connections", "friends", "family", "community", "loneliness"],
    response: "Relationships are medicine! 👥 Strong social connections are as important for health as exercise and good nutrition. They boost immune function, reduce stress hormones, and even help you live longer! Make time for friends and family, join community groups, volunteer, or try new activities where you'll meet people. Quality matters more than quantity - even one close relationship makes a difference! ❤️"
},
{
    keywords: ["checkups", "doctor", "preventive", "screening", "regular"],
    response: "Prevention is the best medicine! 🏥 Regular check-ups help catch health issues early when they're most treatable. Even if you feel fine, screenings for blood pressure, cholesterol, diabetes, and certain cancers can be life-saving. Your doctor can also provide personalized advice for your age and risk factors. Most adults should see their primary care provider annually. Don't wait until something hurts! 📋"
},
{
    keywords: ["sleep", "quality", "7-9 hours", "rest", "bedtime"],
    response: "Sleep is when magic happens! 😴 During quality sleep, your brain cleans itself, your immune system strengthens, and your body repairs itself. Most adults need 7-9 hours nightly. Create a sleep sanctuary: cool, dark, and quiet room. Avoid screens for an hour before bed, and try to keep consistent sleep and wake times. Good sleep isn't lazy - it's essential for health! 🌙"
},
{
    keywords: ["exercise", "physical activity", "movement", "daily", "30 minutes"],
    response: "Movement is medicine! 🏃‍♀️ Just 30 minutes of moderate activity most days can reduce your risk of heart disease, diabetes, depression, and many cancers. You don't need a gym - walking, dancing, gardening, playing with kids, or taking the stairs all count! Start small and build gradually. The key is finding activities you enjoy so you'll stick with them. Every step counts! 💃"
},
{
    keywords: ["hygiene", "handwashing", "clean", "germs", "bacteria"],
    response: "Clean hands, healthy you! 🧼 Simple hygiene practices are your first line of defense against illness. Wash your hands with soap for 20 seconds (about as long as singing 'Happy Birthday' twice), especially before eating and after using the bathroom. Brush and floss daily, shower regularly, and avoid touching your face with unwashed hands. These simple habits prevent countless infections! ✨"
},
{
    keywords: ["fruits", "vegetables", "colorful", "nutrients", "antioxidants"],
    response: "Eat the rainbow! 🌈 Colorful fruits and vegetables are packed with vitamins, minerals, fiber, and antioxidants that fight disease and keep you healthy. Different colors provide different nutrients - think red tomatoes, orange carrots, green spinach, purple berries! Aim to fill half your plate with fruits and veggies at each meal. Frozen counts too - they're picked at peak ripeness and super convenient! 🥕🍓"
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
                    response: "🚨 CALL 112 IMMEDIATELY for: chest pain or pressure, difficulty breathing, severe bleeding, loss of consciousness, stroke symptoms (face drooping, arm weakness, speech difficulty), severe allergic reactions, or serious injuries. Don't drive yourself - call for emergency services! For ambulance call: 108. Remember: it's better to seek emergency care and be safe than to wait and risk your health! 🏥"
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
