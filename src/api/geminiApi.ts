import { GoogleGenerativeAI } from "@google/generative-ai";
import ts from "typescript";

const API_KEY = "AIzaSyBx5spi7mTDS5cYjy6vMhcH-8MATMVsUWQ";

const genAI = new GoogleGenerativeAI(API_KEY);

const generateLessonPlan = async (data: any) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  console.log("hellooooooo........ gemini called")
  const prompt = `Create a lesson plan for ${data.subject} for grade ${data.grade}. Objective: ${data.objective}`;
  
  const response = await model.generateContent(prompt);
  console.log("response..........", response);
  //@ts-ignore
  const text = response.response.candidates[0]?.content.parts[0]?.text || "Error: No response";
  console.log("donee............")
  return text;
};

export default generateLessonPlan;
