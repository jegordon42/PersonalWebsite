import * as config from "./Config"

const handleChatResponse = async (message, currentMessages, addMessage, setIsTyping) => {
  const newMessage = {
    message,
    direction: 'outgoing',
    sender: "user",
  };
  //generateImage()

  addMessage(newMessage);
  setIsTyping(true);

  try {
    const response = await processMessageToChatGPT([...currentMessages, newMessage]);
    if(response.error){
      const chatGPTResponse = {
          message: "There was an error:\n" + response.error.message,
          sender: "assistant",
        };
      addMessage(chatGPTResponse);
    }else{
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "assistant",
        };
        addMessage(chatGPTResponse);
      }
    }
    
  } catch (error) {
    console.error("Error processing message:", error);
  } finally {
    setIsTyping(false);
  }
};

const formatMessage = (message) => {
  for(let nickname in config.nicknames){
      message = message.replaceAll(nickname, config.name);
  }
  message = message.replaceAll(" him", config.name).replaceAll(" his", config.name + "'s").replaceAll(" he", config.name).replaceAll(config.name + "s", config.name + "'s"); 
  return message;
}

const processMessageToChatGPT = async (chatMessages) => {
  const apiMessages = chatMessages.filter((messageObject) => messageObject.sender != "default").map((messageObject) => {
    return { 
      role: messageObject.sender, 
      content: formatMessage(messageObject.message)
    };
  });

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {role: 'system', content: config.chatBotRole},
      ...apiMessages,
    ],
  };
  console.log(apiRequestBody);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + config.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  });

  return response.json();
}


const generateImage = async () => {
  const image = await fetch('https://firebasestorage.googleapis.com/v0/b/lifemap-418201.appspot.com/o/original%20(1).png?alt=media&token=b6533612-7146-4ff6-95c4-0b6ab9d72bf9').then(function(response) {
    return response.blob();
  }).then(blob=>{
    return new File([blob], "ariel.png")
  });
  const mask = await fetch('https://firebasestorage.googleapis.com/v0/b/lifemap-418201.appspot.com/o/mask%20(2).png?alt=media&token=47943ac8-703c-4cd2-8078-399d92f689c5').then(function(response) {
    return response.blob();
  }).then(blob=>{
    return new File([blob], "mask.png")
  });
  
  const formData  = new FormData();
  formData.append("image", image);
  formData.append("mask", mask)
  formData.append("n", 2);
  formData.append("size", "1024x1024");
  formData.append("prompt", "Man in the rain")
  console.log(formData);
  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + config.API_KEY,
    },
    body: formData,
  }).then(response=>{
    return response.json()
  });;
  console.log(response.data);
}

export default handleChatResponse;