import random

responses = {
    "hey neon": ["how's your adobo recipe", "what's cooking, Neon?", "adobo time!"],
    "tell me about python": [
        "Python is a high-level programming language known for its simplicity and versatility.",
        "Python is great for beginners and experts alike!",
        "Python is used in web development, data science, and more."
    ],
    "bye": ["Goodbye! Have a great day!", "See you later!", "Bye! Take care!"],
    "default": ["I'm sorry, I don't understand that. Can you please rephrase?", "Hmm, I'm not sure what you mean.", "Could you clarify that?"],
    "im running out of energy": ["runnin low", "need a boost?", "energy levels critical!"]
}

def get_bot_response(user_message):
    user_message = user_message.lower()
    if user_message in responses:
        # Shuffle the list of responses for the given key
        random.shuffle(responses[user_message])
        return responses[user_message][0]  # Return the first item after shuffling
    else:
        # Shuffle the default responses
        random.shuffle(responses["default"])
        return responses["default"][0]

def main():
    print("Welcome to the Valorant Chatbot")

    while True:
        user_input = input("You: ")
        
        if user_input.lower() == "bye":
            # Shuffle the bye responses
            random.shuffle(responses["bye"])
            print("Chatbot: " + responses["bye"][0])
            break
        else:
            response = get_bot_response(user_input)
            print("Chatbot: " + response)

if __name__ == "__main__":
    main()