import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AyushLogo from "../../Assets/logo.png";

const Chatbot = () => {
  const [chatExpanded, setChatExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Ayush, your Ayurvedic health assistant. What do you need help with?",
      sender: "bot",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Diabetes treatment",
    "Best yoga for BP",
    "Remedy for acidity",
    "How to gain weight",
    "Best herbs for skin",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const responses = {
    // General health
    immunity: "**Causes:** Weak immunity can be caused by poor diet, lack of sleep, stress, and sedentary lifestyle.\n**Solution:** Boost immunity with herbs like Giloy (Guduchi), Tulsi (Holy Basil), and Amla. Drink Kadha and practice daily yoga and meditation. Include citrus fruits, nuts, and green leafy vegetables in your diet.",
    
    digestion: "**Causes:** Poor digestion results from overeating, improper food combinations, stress, and eating too quickly.\n**Solution:** For better digestion, take Jeera (Cumin), Ajwain (Carom Seeds), and Hing (Asafoetida). Eat light meals, chew food properly, and avoid heavy, oily foods at night. Practice Vajrasana after meals.",
    
    energy: "**Causes:** Low energy can be due to poor diet, lack of sleep, dehydration, or stress.\n**Solution:** To boost energy, consume Ashwagandha, Shilajit, and dates (Khajoor). Practice Surya Namaskar, stay hydrated, and get proper sleep. Include nuts and seeds in your diet.",
    
    hairfall: "**Causes:** Hair fall can be caused by stress, nutritional deficiencies, hormonal imbalance, or improper hair care.\n**Solution:** For hair fall, massage scalp with Bhringraj oil. Use Amla and Hibiscus powder. Eat protein-rich foods, stay hydrated, and manage stress through meditation.",
    
    detox: "**Causes:** Toxin buildup occurs due to poor diet, stress, environmental pollutants, and unhealthy lifestyle.\n**Solution:** Detox your body with Triphala, warm lemon water, and light fasting. Panchakarma therapy is highly recommended. Drink plenty of water and eat fiber-rich foods.",
    
    ayurveda: "**Causes:** Imbalance in the body's doshas (Vata, Pitta, Kapha) leads to health issues.\n**Solution:** Ayurveda focuses on balance using diet, herbs, and lifestyle. It's based on the 5 elements and 3 Doshas. Follow a dinacharya (daily routine) and ritucharya (seasonal routine) for optimal health.",
    
    // Digestive Issues
    stomachpain: "**Causes:** Stomach pain can be due to gas, indigestion, infections, or food intolerances.\n**Solution:** For stomach pain, drink warm water with Ajwain and Hing. Apply gentle heat to the abdomen. Avoid heavy meals and rest the digestive system with light khichdi.",
    
    vomiting: "**Causes:** Vomiting can result from food poisoning, infections, motion sickness, or overeating.\n**Solution:** For vomiting, sip ginger-lemon tea, take cardamom powder with honey, and keep the stomach calm. Drink small amounts of water frequently and avoid solid foods initially.",
    
    diarrhea: "**Causes:** Diarrhea can be caused by infections, food poisoning, or digestive disorders.\n**Solution:** For diarrhea, drink buttermilk with roasted cumin, take pomegranate juice, and stay hydrated with ORS or coconut water. Eat light, easily digestible foods like bananas and rice.",
    
    gas: "**Causes:** Gas is often caused by swallowing air, certain foods, or digestive issues.\n**Solution:** For gas and bloating, take Ajwain with warm water, use Hing in food, and avoid carbonated and fried items. Practice yoga poses like Pawanmuktasana.",
    
    indigestion: "**Causes:** Overeating, eating too quickly, or consuming fatty/spicy foods can cause indigestion.\n**Solution:** For indigestion, drink warm lemon water, take fennel seeds after meals, and avoid overeating. Practice mindful eating and don't lie down immediately after meals.",
    
    foodpoisoning: "**Causes:** Consuming contaminated food or water leads to food poisoning.\n**Solution:** For food poisoning, take ORS, consume fresh coconut water, and use ginger or basil to soothe the stomach. Rest the digestive system and avoid solid foods initially.",
    
    // Medical Emergencies
    burn: "**Causes:** Burns can be caused by heat, chemicals, electricity, or radiation.\n**Solution:** For minor burns, apply aloe vera gel or cold water immediately. Cover with a clean, dry cloth. Avoid applying ice directly or using toothpaste. Seek medical help for severe burns.",
    
    cut: "**Causes:** Cuts occur from sharp objects or accidents.\n**Solution:** For small cuts, clean the wound with water, apply turmeric for its antibacterial properties, and cover with a clean bandage. Change dressing daily.",
    
    bleeding: "**Causes:** Bleeding can result from injuries, cuts, or medical conditions.\n**Solution:** For bleeding, apply firm pressure with a clean cloth and elevate the area. Use a sterile bandage. Seek medical help if bleeding doesn't stop within 10-15 minutes.",
    
    fainting: "**Causes:** Fainting can be due to low blood pressure, dehydration, or sudden stress.\n**Solution:** For fainting, let the person lie down, keep legs slightly elevated, and ensure fresh air. Loosen tight clothing. Give water once they regain consciousness.",
    
    dehydration: "**Causes:** Inadequate fluid intake, excessive sweating, or illness can cause dehydration.\n**Solution:** For dehydration, drink ORS, coconut water, or lemon water with salt and sugar. Sip small amounts frequently. Avoid direct sun and rest in a cool place.",
    
    heatstroke: "**Causes:** Prolonged exposure to high temperatures leads to heatstroke.\n**Solution:** For heatstroke, move to a cool place immediately. Drink water or ORS, and apply cold wet cloths on the head, neck, and armpits. Seek medical help if severe.",
    
    choking: "**Causes:** Food or objects blocking the airway cause choking.\n**Solution:** For choking, encourage coughing. If breathing stops, perform the Heimlich maneuver and call emergency services immediately. Learn basic first aid for choking.",
    
    nosebleed: "**Causes:** Nosebleeds can be due to dry air, nose picking, or injury.\n**Solution:** For nosebleeds, sit upright and lean forward slightly. Pinch the soft part of the nose for 10 minutes. Breathe through your mouth. Avoid lying down or tilting head back.",
    
    lowbp: "**Causes:** Low BP can be due to dehydration, heart problems, or nutritional deficiencies.\n**Solution:** For low BP, drink salt-sugar water, eat a banana or dates, and lie down with legs raised. Increase fluid and salt intake after consulting a doctor.",
    
    highbp: "**Causes:** High BP can be caused by stress, poor diet, lack of exercise, or genetics.\n**Solution:** For sudden high BP, rest, breathe deeply, and avoid salt and stress. Practice regular exercise and meditation. Seek medical attention if symptoms persist.",
    
    asthmaattack: "**Causes:** Asthma attacks can be triggered by allergens, exercise, or stress.\n**Solution:** For asthma attacks, use the inhaler immediately, sit upright, and practice slow breathing. Avoid triggers like dust and smoke. Seek emergency help if breathing doesn't improve.",
    
    allergicreaction: "**Causes:** Allergic reactions occur when the immune system overreacts to a substance.\n**Solution:** For allergies, take warm water, avoid the triggering food or environment, and take prescribed antihistamines. Seek immediate help if breathing becomes difficult.",
    
    // Common Ailments
    fever: "**Causes:** Fever is often a sign of infection or illness.\n**Solution:** For fever, drink Tulsi-Kadha, take Giloy, and stay hydrated with warm water. Rest well, eat light foods, and monitor temperature. Consult a doctor if fever is high or persistent.",
    
    cold: "**Causes:** Colds are caused by viruses and spread through contact.\n**Solution:** For cold, use steam inhalation, drink ginger-tulsi tea, and consume honey with warm water. Rest well and keep the body warm. Wash hands frequently.",
    
    cough: "**Causes:** Coughs can be due to colds, allergies, or irritants.\n**Solution:** For cough relief, take Mulethi (Licorice), warm honey, and ginger juice. Stay hydrated and avoid cold drinks. Use a humidifier if air is dry.",
    
    sorethroat: "**Causes:** Sore throats can be caused by viruses, bacteria, or irritants.\n**Solution:** For sore throat, gargle with warm salt water, use turmeric milk, and drink herbal tea with ginger and clove. Rest your voice and stay hydrated.",
    
    viral: "**Causes:** Viral infections are caused by viruses and spread through contact.\n**Solution:** For viral infections, use Giloy, Amla, and Tulsi to boost immunity. Rest, hydrate, and follow a light diet. Isolate to prevent spreading.",
    
    flu: "**Causes:** Influenza is a viral infection affecting the respiratory system.\n**Solution:** For flu symptoms, take warm soups, ginger tea, and steam inhalation. Rest, stay hydrated, and avoid contact with others. Get annual flu vaccination.",
    
    headache: "**Causes:** Headaches can be due to stress, dehydration, or eye strain.\n**Solution:** For headaches, apply peppermint oil, practice deep breathing, and ensure proper hydration. Maintain good posture and take screen breaks.",
    
    sinus: "**Causes:** Sinus issues can be due to infections, allergies, or structural problems.\n**Solution:** For sinus relief, use steam inhalation with eucalyptus, practice Neti, and stay hydrated. Avoid dairy if it worsens congestion.",
    
    throatinfection: "**Causes:** Throat infections can be bacterial or viral.\n**Solution:** For throat infection, use honey-turmeric mix, warm water gargles, and stay hydrated. Rest your voice and avoid irritants like smoke.",
    
    bodypain: "**Causes:** Body pain can result from overexertion, stress, or illness.\n**Solution:** For body pain, take warm oil massage, turmeric milk, and light stretching. Ensure adequate rest and stay hydrated.",
    
    // Doshas
    pitta: "**Causes:** Pitta imbalance can be caused by excessive heat, spicy foods, or stress.\n**Solution:** Pitta Dosha is related to fire. Eat cooling foods like cucumber, coconut, and mint. Avoid spicy food, excessive sun exposure, and overexertion.",
    
    vata: "**Causes:** Vata imbalance can be caused by cold, dry weather, stress, or irregular routine.\n**Solution:** Vata Dosha is linked to air. Keep warm, eat moist, grounding foods, and use sesame oil for massage. Maintain a regular routine and avoid cold, dry, or raw foods.",
    
    kapha: "**Causes:** Kapha imbalance can be caused by lack of exercise, heavy foods, or cold weather.\n**Solution:** Kapha Dosha relates to water and earth. Stay active, eat light, warm foods, and use ginger tea. Avoid dairy, sweets, and excessive sleep.",
    
    // Conditions
    diabetes: "**Causes:** Diabetes is caused by insulin resistance or inadequate insulin production.\n**Solution:** For Diabetes (Madhumeha), consume Fenugreek (Methi), Bitter Gourd (Karela), and Turmeric (Haldi). Exercise regularly, maintain healthy weight, and monitor blood sugar levels.",
    
    bp: "**Causes:** High blood pressure can be due to stress, poor diet, or genetics.\n**Solution:** For High Blood Pressure, use Garlic (Lahsun), Ashwagandha, and Arjuna Bark. Reduce salt intake, exercise regularly, and manage stress through meditation.",
    
    obesity: "**Causes:** Obesity results from excess calorie intake and insufficient physical activity.\n**Solution:** For weight loss, take Triphala, drink warm water, and exercise regularly. Eat balanced meals, control portion sizes, and avoid processed foods.",
    
    acidity: "**Causes:** Acidity is caused by excessive stomach acid production.\n**Solution:** For Acidity (Amlapitta), drink cold milk, Amla juice, and chew Fennel (Saunf) after meals. Eat smaller, more frequent meals and avoid lying down after eating.",
    
    constipation: "**Causes:** Constipation can be due to low fiber intake, dehydration, or lack of exercise.\n**Solution:** For Constipation (Kabz), take Psyllium Husk (Isabgol), Triphala, and warm water. Eat fiber-rich foods and stay hydrated.",
    
    arthritis: "**Causes:** Arthritis is inflammation of the joints, often due to wear and tear or autoimmune conditions.\n**Solution:** For Joint Pain (Gathiya), massage with Sesame (Til) oil, take Ashwagandha, and do gentle exercises. Maintain healthy weight and avoid cold, damp conditions.",
    
    // Body systems
    eye: "**Causes:** Eye strain can be due to screens, poor lighting, or nutritional deficiencies.\n**Solution:** For eye health, use Triphala, apply rose water, and practice Trataka meditation. Take regular screen breaks and eat vitamin A-rich foods.",
    
    dental: "**Causes:** Dental issues arise from poor oral hygiene, sugary foods, and infrequent check-ups.\n**Solution:** Practice oil pulling, use clove oil for pain relief, and clean teeth twice daily. Floss regularly and limit sugary snacks.",
    
    cardiac: "**Causes:** Heart issues can be due to poor diet, stress, or lack of exercise.\n**Solution:** For heart health, consume Arjuna bark, garlic, and flaxseeds. Exercise regularly, manage stress, and avoid smoking.",
    
    cancer: "**Causes:** Cancer can have genetic, environmental, or lifestyle causes.\n**Solution:** Complementary care includes herbs like Tulsi and Ashwagandha. Eat antioxidant-rich foods, manage stress, and follow medical advice.",
    
    orthopedic: "**Causes:** Orthopedic issues can be due to injury, aging, or poor posture.\n**Solution:** For bone and joint health, use Hadjod, Ashwagandha, and warm oil massage. Practice gentle stretching and maintain healthy weight.",
    
    ent: "**Causes:** ENT issues can be due to infections, allergies, or environmental factors.\n**Solution:** For ENT issues, practice steam inhalation, Nasya therapy, and use Tulsi-Ginger remedies. Keep nasal passages moist and avoid allergens.",
    
    skin: "**Causes:** Skin issues can be due to diet, stress, or environmental factors.\n**Solution:** For healthy skin, use Neem, Turmeric, and Aloe Vera. Stay hydrated, eat a balanced diet, and protect skin from excessive sun.",
    
    neurology: "**Causes:** Neurological issues can be due to stress, poor sleep, or nutritional deficiencies.\n**Solution:** For nerve health, use Brahmi, Shankhpushpi, and Ashwagandha. Maintain a regular sleep schedule and manage stress.",
    
    // Lifestyle
    exercise: "**Causes:** Sedentary lifestyle leads to various health issues.\n**Solution:** Recommended Exercises: **Pranayama**, **Surya Namaskar**, **Walking**, and **Stretching**. Aim for at least 30 minutes of moderate activity daily.",
    
    general: "**Causes:** Poor lifestyle choices affect overall health.\n**Solution:** General wellness includes balanced meals, daily exercise, herbal tonics, proper sleep, and stress management for optimal health.",
    
    psychiatric: "**Causes:** Mental health issues can be due to stress, trauma, or chemical imbalances.\n**Solution:** For mental wellness, practice meditation, use calming herbs like Brahmi and Jatamansi, maintain social connections, and seek professional help when needed.",
    
    maternity: "**Causes:** Pregnancy requires special care and nutrition.\n**Solution:** Maternity care includes gentle yoga, iron-rich foods, ghee, and Ayurvedic tonics. Get regular check-ups, stay hydrated, and avoid stress.",
    
    // System
    doctor: "You should consult an **Ayurvedic doctor**, **General Physician**, or **Specialist** based on your condition.",
    close: "Goodbye! Reach out whenever you need health advice.",
    default: "You can ask me about Ayurvedic remedies for **Immunity, Digestion, Skin, Hair Fall, Doshas (Vata, Pitta, Kapha)**, and more.",
  };
  

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setChatExpanded((prevState) => !prevState);
  };

  const closeChat = () => {
    setChatExpanded(false);
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (input.includes(key)) {
        return value;
      }
    }
    return responses.default;
  };

  const addMessage = (message, sender) => {
    const newMessage = { text: message, sender: sender };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const sendMessage = (message) => {
    const userMessage = message || userInput.trim();
    if (!userMessage) return;

    addMessage(userMessage, "user");
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMessage = getBotResponse(userMessage);
      addMessage(botMessage, "bot");

      // Updated suggestions
      setSuggestions([
        "Ayurvedic herbs for immunity",
        "Diet for healthy skin",
        "Best yoga for digestion",
        "How to boost energy naturally",
        "Remedy for hair fall",
      ]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="z-50">
      {/* Floating button */}
      <motion.div
        className="fixed bottom-8 right-8 cursor-pointer z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="rounded-full shadow-lg bg-gradient-to-br from-green-400 to-green-600 p-1">
          <div className="bg-white rounded-full p-2">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <img src={AyushLogo} alt="Ayush Virtual Assistant" className="w-10 h-10" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {chatExpanded && (
          <motion.div
            className="fixed bottom-8 right-8 w-80 md:w-96 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                  <img src={AyushLogo} alt="Ayush Virtual Assistant" className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-semibold">Ayush Virtual Assistant</h2>
              </div>
              <motion.button 
                onClick={closeChat} 
                className="text-white-500 hover:text-white-500 text-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>
            </div>

            {/* Messages area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 bg-opacity-60">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-green-100 mr-2 flex-shrink-0 flex items-center justify-center">
                        {/* <img src="Frontend\src\Assets\logo.png" alt="Bot" className="w-6 h-6" /> */}
                     🤖 </div>
                    )}
                    <div
                      className={`p-3 rounded-lg max-w-3/4 shadow-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-br-none"
                          : "bg-white text-gray-700 rounded-bl-none border border-gray-200"
                      }`}
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                    ></div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-green-500 ml-2 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-sm">You</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 mr-2 flex-shrink-0 flex items-center justify-center">
                    {/* <img src="Frontend\src\Assets\logo.png" alt="Bot" className="w-6 h-6" /> */}
🤖</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="p-2 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 max-h-16 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs hover:bg-green-600 hover:text-white transition"
                    onClick={() => sendMessage(suggestion)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 flex items-center bg-white border-t border-gray-200">
              <motion.input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.button
                onClick={() => sendMessage()}
                className="ml-3 p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;