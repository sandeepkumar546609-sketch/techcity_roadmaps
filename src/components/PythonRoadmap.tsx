"use client";
import { useState } from "react";
import Link from "next/link";

export default function PythonRoadmap() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const topics = [
    {
      title: "01. Python Fundamentals",
      subtopics: [
        "Variables and data types",
        "Conditions and loops",
        "Lists, tuples and dictionaries",
        "Functions and modules",
        "Exception and file handling",
      ],
      tasks: [
        "Build a Python calculator",
        "Create a student marks program",
      ],
    },
    {
      title: "02. Object-Oriented Programming",
      subtopics: [
        "Classes and objects",
        "Constructors and self",
        "Inheritance and polymorphism",
        "Encapsulation and abstraction",
      ],
      tasks: [
        "Create a student class",
        "Practice OOP examples",
      ],
    },
    {
      title: "03. HTML, CSS and JavaScript",
      subtopics: [
        "HTML forms and semantic tags",
        "CSS Flexbox and responsive design",
        "JavaScript functions and events",
        "HTTP and client-server basics",
      ],
      tasks: [
        "Build a registration page",
        "Create a responsive website",
      ],
    },
    {
      title: "04. Django or Flask",
      subtopics: [
        "Project setup and routing",
        "Views and templates",
        "Forms and user input",
        "Static files and configuration",
      ],
      tasks: [
        "Build a multi-page website",
        "Create a contact form",
      ],
    },
    {
      title: "05. SQL and Database",
      subtopics: [
        "Tables and database relationships",
        "SQL CRUD operations",
        "Primary and foreign keys",
        "ORM and database migrations",
      ],
      tasks: [
        "Save student records in a database",
        "Build edit and delete features",
      ],
    },
    {
      title: "06. REST APIs and Authentication",
      subtopics: [
        "REST and JSON",
        "HTTP methods and status codes",
        "Request validation",
        "Login, sessions and permissions",
      ],
      tasks: [
        "Create student CRUD APIs",
        "Build a protected dashboard",
      ],
    },
    {
      title: "07. Testing and Security",
      subtopics: [
        "Debugging and error handling",
        "Unit testing basics",
        "Input validation",
        "Environment variables",
      ],
      tasks: [
        "Test application features",
        "Fix validation errors",
      ],
    },
    {
      title: "08. Deployment and Projects",
      subtopics: [
        "Git and GitHub",
        "Production configuration",
        "Application deployment",
        "Documentation and maintenance",
      ],
      tasks: [
        "Build a blog or job portal",
        "Deploy the project to the web",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/students/roadmaps"
          className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 no-underline shadow-sm hover:bg-blue-50 hover:text-blue-700"
        >
          ← Back to Roadmaps
        </Link>

        <header className="py-10">
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Complete Learning Path
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            Python Web Development Roadmap
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Learn Python, web frameworks, databases, REST APIs and deployment
            through practical projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
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
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4 p-5">
                <h2 className="font-bold text-slate-800 group-hover:text-blue-700 sm:text-lg">
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
                        <h3 className="mb-3 font-bold">Sub-topics</h3>
                        <ul className="space-y-2 text-sm leading-6 text-slate-600">
                          {topic.subtopics.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 font-bold">Practice Tasks</h3>
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
