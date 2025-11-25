import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the "Carpet Corner Smart Assistant". 
      You are an expert in interior design and flooring materials (Hardwood, Carpet, Tile, Luxury Vinyl, Laminate, Sheet Vinyl).
      The Carpet Corner is a family-owned business since 1974, located in Mundelein, Illinois, serving Mundelein, Libertyville, Lake Forest and surrounding areas.
      We carry brands including Mohawk, Shaw, Dream Weaver, Dixie, Royal Dutch by Stanton, and more.
      We offer free estimates and professional installation services.
      Your goal is to help customers choose the right flooring for their specific needs (pets, kids, moisture, budget).
      Keep answers concise, friendly, and encouraging.
      If asked about store location, mention we're located at 907 Diamond Lake Road, Mundelein, IL 60060, near Diamond Lake.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to our design database. Please try again later.";
  }
};