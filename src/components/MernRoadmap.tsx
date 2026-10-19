"use client";
import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "01. HTML, CSS and JavaScript",
    subtopics: [
      "HTML tags, forms and semantic elements",
      "CSS selectors, Flexbox and Grid",
      "Responsive design and media queries",
      "JavaScript variables, functions and arrays",
      "DOM, events, promises and async/await",
    ],
    tasks: [
      "Create a responsive personal portfolio",
      "Build a form with JavaScript validation",
    ],
  },
  {
    title: "02. Git and GitHub",
    subtopics: [
      "Git init, add, commit and status",
      "Branches and merging",
      "Push and pull from GitHub",
      "Working with a shared repository",
    ],
    tasks: [
      "Upload a frontend project to GitHub",
      "Practice creating and merging a branch",
    ],
  },
  {
    title: "03. React Fundamentals",
    subtopics: [
      "Components, JSX and props",
      "State and event handling",
      "Conditional rendering and lists",
      "useState and useEffect",
      "Forms and component reusability",
    ],
    tasks: [
      "Build a reusable card component",
      "Create a simple task manager",
    ],
  },
  {
    title: "04. Node.js and Express.js",
    subtopics: [
      "Node.js and npm basics",
      "Create an Express server",
      "Routes and middleware",
      "Request and response handling",
      "REST API and error handling",
    ],
    tasks: [
      "Create CRUD APIs for students",
      "Test APIs using Postman",
    ],
  },
  {
    title: "05. MongoDB and Mongoose",
    subtopics: [
      "Databases, collections and documents",
      "CRUD operations",
      "MongoDB Atlas connection",
      "Mongoose schemas and models",
      "Validation and relationships",
    ],
    tasks: [
      "Store and retrieve student records",
      "Connect Express APIs to MongoDB",
    ],
  },
  {
    title: "06. Full-Stack Integration",
    subtopics: [
      "Connect React with Express APIs",
      "Fetch and display backend data",
      "Loading states and error messages",
      "Environment variables",
      "CORS and API configuration",
    ],
    tasks: [
      "Build a complete CRUD application",
      "Connect frontend forms to the database",
    ],
  },
  {
    title: "07. Authentication and Security",
    subtopics: [
      "Registration and login",
      "Password hashing",
      "Authentication with JWT",
      "Protected routes",
      "Input validation and secure configuration",
    ],
    tasks: [
      "Build a login and registration system",
      "Create a protected dashboard",
    ],
  },
  {
    title: "08. Projects and Deployment",
    subtopics: [
      "Project structure and clean code",
      "Frontend and backend deployment",
      "Production environment variables",
      "Testing and debugging",
      "README and GitHub portfolio",
    ],
    tasks: [
      "Build a full-stack job portal",
      "Deploy a project and add it to your resume",
    ],
  },
];

export default function MernRoadmap() {
    const [openTopic, setOpenTopic] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/students/roadmaps"
          className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 no-underline shadow-sm transition hover:bg-blue-50 hover:text-blue-700"
        >
          ← Back to Roadmaps
        </Link>

        <header className="py-10">
          <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
            Complete Learning Path
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            MERN Stack Development Roadmap
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Learn frontend, backend and database development step by step.
            Practice every stage and build real-world full-stack projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              Beginner Friendly
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              8 Learning Stages
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Project Based
            </span>
          </div>
        </header>

        <section className="space-y-4">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4 p-5">
                <h2 className="font-bold leading-6 text-slate-800 transition-colors group-hover:text-blue-700 sm:text-lg">
                  {topic.title}
                </h2>

                <button
  type="button"
  onClick={() =>
    setOpenTopic(
      openTopic === topic.title ? null : topic.title
    )
  }
  className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 hover:bg-blue-100"
>
  {openTopic === topic.title ? "Hide Topics −" : "View Topics +"}
</button>
              </div>

             <div
  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
    openTopic === topic.title ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  }`}
>
                <div className="overflow-hidden">
                 <div
  className={`border-t border-slate-100 px-5 pb-6 pt-5 transition-opacity duration-300 ${
    openTopic === topic.title ? "opacity-100" : "opacity-0"
  }`}
>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 font-bold text-slate-800">
                          Sub-topics
                        </h3>
                        <ul className="space-y-2 text-sm leading-6 text-slate-600">
                          {topic.subtopics.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 font-bold text-slate-800">
                          Practice Tasks
                        </h3>
                        <ul className="space-y-2 text-sm leading-6 text-slate-600">
                          {topic.tasks.map((task) => (
                            <li key={task}>✓ {task}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
