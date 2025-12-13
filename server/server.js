import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

/*  
-------------------------------------------------------------
   PORTFOLIO DATA (copied from your index.ts safely)
-------------------------------------------------------------
*/

const HERO_CONTENT = `
I'm a beginner full-stack web developer with a strong interest in building interactive and user-friendly web applications. I recently developed a DSA (Data Structures and Algorithms) quiz app as my first project...
`;

const ABOUT_TEXT = `
I am a passionate and curious full-stack web development learner with a strong interest in building modern, user-friendly web applications...
`;

const EDUCATION = [
  {
    year: "2023 - 2027",
    role: "B.Tech Electronics & Computer Engineering",
    company: "SRM Institute Of Science & Technology, Kattankulathur",
    description:
      "Currently pursuing a B.Tech degree at SRMIST with a CGPA of 8.9.",
  },
  {
    year: "2022 - 2023",
    role: "12th Class",
    company: "PSBB Learning Leadership Academy, Bangalore",
    description: "Passed with 76% in 12th Board exams",
  },
  {
    year: "2020 - 2021",
    role: "10th Class",
    company: "PSBB Learning Leadership Academy, Bangalore",
    description: "Passed with 94% in 10th Board exams",
  },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing experience, education, skills, and contact information.",
    technologies: [
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot that answers user queries.",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Claude 3 Haiku API",
    ],
  },
];

// Bundle into one knowledge string
const PORTFOLIO_DATA = `
=== ABOUT ADITYA ===
${ABOUT_TEXT}

=== HERO INTRO ===
${HERO_CONTENT}

=== EDUCATION ===
${EDUCATION.map(
  (e) => `• ${e.year}: ${e.role} at ${e.company}. ${e.description}`
).join("\n")}

=== PROJECTS ===
${PROJECTS.map(
  (p) => `
TITLE: ${p.title}
DESCRIPTION: ${p.description}
TECH: ${p.technologies.join(", ")}
`
).join("\n")}

=== SKILLS ===
HTML, CSS, JavaScript, React, Node.js, MongoDB, Tailwind, Python, C, C++,
Frontend Development, Full-Stack Basics
`;

/*
-------------------------------------------------------------
                     CHAT ENDPOINT
-------------------------------------------------------------
*/

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
You are Aditya’s Portfolio AI Assistant.

Rules:
• Answer ONLY questions about Aditya, his skills, projects, education, and portfolio.
• If the question is unrelated, reply: “I can only answer questions about Aditya and his portfolio.”
• Be friendly, accurate, short, and clear.
• Never say “I don’t have enough info”—you already have all info below.

=== PORTFOLIO KNOWLEDGE START ===
${PORTFOLIO_DATA}
=== PORTFOLIO KNOWLEDGE END ===

User question: "${message}"

Give your answer now:
`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const reply = result.response.text();

    res.json({ reply });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ reply: "⚠️ Server error. Try again later." });
  }
});

/*
-------------------------------------------------------------
                     START SERVER
-------------------------------------------------------------
*/
app.listen(process.env.PORT || 5000, () =>
  console.log(`Backend running on port ${process.env.PORT || 5000}`)
);
