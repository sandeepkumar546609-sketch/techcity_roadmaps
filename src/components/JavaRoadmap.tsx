"use client";
import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "01. Core Java Fundamentals",
    subtopics: [
      "Variables, data types and operators",
      "Conditions, loops and methods",
      "Classes, objects and constructors",
      "Inheritance, polymorphism and abstraction",
      "Exception handling and strings",
    ],
    tasks: [
      "Build a student management program",
      "Practice OOP-based Java problems",
    ],
  },
  {
    title: "02. Collections and Advanced Java",
    subtopics: [
      "List, Set, Map and Queue",
      "ArrayList, HashSet and HashMap",
      "Generics and iterators",
      "File handling and Java I/O",
      "Multithreading fundamentals",
    ],
    tasks: [
      "Create a contact management application",
      "Practice collection-based problems",
    ],
  },
  {
    title: "03. SQL, JDBC and Maven",
    subtopics: [
      "SQL queries and database design",
      "Joins, keys and relationships",
      "JDBC connection and CRUD operations",
      "PreparedStatement and transactions",
      "Maven dependencies and project structure",
    ],
    tasks: [
      "Connect Java to a MySQL database",
      "Build a database-backed student system",
    ],
  },
  {
    title: "04. Web Fundamentals",
    subtopics: [
      "HTML forms and semantic elements",
      "CSS and responsive design",
      "JavaScript fundamentals",
      "HTTP methods and status codes",
      "Client-server architecture",
    ],
    tasks: [
      "Create a responsive login page",
      "Build a form for collecting user data",
    ],
  },
  {
    title: "05. Spring and Spring Boot",
    subtopics: [
      "Dependency Injection and IoC",
      "Beans and Spring configuration",
      "Spring Boot project setup",
      "Controllers, services and repositories",
      "REST APIs and request validation",
    ],
    tasks: [
      "Create REST APIs for student records",
      "Test endpoints using Postman",
    ],
  },
  {
    title: "06. Hibernate and Spring Data JPA",
    subtopics: [
      "ORM fundamentals",
      "Entities and repository interfaces",
      "One-to-one and one-to-many relationships",
      "CRUD operations with JPA",
      "Pagination, sorting and transactions",
    ],
    tasks: [
      "Connect Spring Boot to MySQL",
      "Build complete database CRUD APIs",
    ],
  },
  {
    title: "07. Spring Security and Testing",
    subtopics: [
      "Authentication and authorization",
      "Password hashing",
      "JWT-based authentication",
      "JUnit and Mockito fundamentals",
      "Logging and exception handling",
    ],
    tasks: [
      "Build login and registration APIs",
      "Write unit tests for service classes",
    ],
  },
  {
    title: "08. Full-Stack Integration",
    subtopics: [
      "React or Next.js fundamentals",
      "Components, props and state",
      "Connecting frontend to Spring Boot APIs",
      "CORS and environment variables",
      "Loading states and error handling",
    ],
    tasks: [
      "Build a full-stack job portal",
      "Create a dashboard connected to your APIs",
    ],
  },
  {
    title: "09. Deployment and Portfolio",
    subtopics: [
      "Git and GitHub workflow",
      "Build and production configuration",
      "Docker fundamentals",
      "Cloud deployment basics",
      "README, documentation and interview preparation",
    ],
    tasks: [
      "Deploy a full-stack project",
      "Publish project documentation on GitHub",
    ],
  },
];

export default function JavaRoadmap() {
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
            Java Full-Stack Development Roadmap
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Master Java, build backend applications with Spring Boot, work
            with databases, and connect your APIs to a modern frontend.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              Beginner Friendly
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              9 Learning Stages
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
