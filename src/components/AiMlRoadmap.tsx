"use client";
import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "01. Python Fundamentals",
    subtopics: [
      "Variables, data types and operators",
      "Conditions and loops",
      "Functions and modules",
      "Lists, tuples, sets and dictionaries",
    ],
    questions: [
      "Reverse a String",
      "Find the Largest Element",
      "Count Character Frequency",
      "Check Palindrome",
    ],
  },
  {
    title: "02. Mathematics for AI",
    subtopics: [
      "Linear algebra and vectors",
      "Matrices and matrix operations",
      "Probability and statistics",
      "Derivatives and gradients",
    ],
    questions: [
      "Calculate Mean, Median and Mode",
      "Compute Vector Dot Product",
      "Calculate Variance and Standard Deviation",
    ],
  },
  {
    title: "03. Data Handling",
    subtopics: [
      "NumPy arrays and operations",
      "Pandas Series and DataFrames",
      "Data cleaning and preprocessing",
      "Handling missing values",
    ],
    questions: [
      "Load and Explore a Dataset",
      "Handle Missing Values",
      "Filter and Group Data",
      "Detect Duplicate Records",
    ],
  },
  {
    title: "04. Machine Learning Basics",
    subtopics: [
      "Supervised and unsupervised learning",
      "Classification and regression",
      "Training and testing datasets",
      "Overfitting and underfitting",
    ],
    questions: [
      "Build a Linear Regression Model",
      "Train a Classification Model",
      "Compare Model Accuracy",
    ],
  },
  {
    title: "05. Model Training and Evaluation",
    subtopics: [
      "Scikit-learn fundamentals",
      "Feature selection and scaling",
      "Cross-validation",
      "Evaluation metrics",
    ],
    questions: [
      "Evaluate a Model Using Accuracy",
      "Calculate Precision and Recall",
      "Compare Multiple ML Models",
    ],
  },
  {
    title: "06. Deep Learning and AI Projects",
    subtopics: [
      "Neural network fundamentals",
      "Introduction to TensorFlow or PyTorch",
      "Computer vision and NLP basics",
      "Model deployment fundamentals",
    ],
    questions: [
      "Build a Simple Neural Network",
      "Create an Image Classifier",
      "Build a Text Classification Project",
      "Develop an End-to-End AI Project",
    ],
  },
];

export default function AiMlRoadmap() {
    const [openTopic, setOpenTopic] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/students/roadmaps"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 no-underline shadow-sm transition hover:bg-blue-50 hover:text-blue-700"
        >
          ← Back to Roadmaps
        </Link>

        <header className="py-10">
          <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
            Complete Learning Path
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            AI & Machine Learning Roadmap
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Learn Python, understand machine learning algorithms, and build
            practical AI projects step by step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-800">
              6 Learning Topics
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Beginner to Advanced
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Practical Projects
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
                        <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide">
                          Sub-topics
                        </h3>
                        <ul className="space-y-2">
                          {topic.subtopics.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-6 text-slate-600"
                            >
                              <span className="text-blue-600">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide">
                          Practice Tasks
                        </h3>
                        <ul className="space-y-2">
                          {topic.questions.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-6 text-slate-600"
                            >
                              <span className="text-emerald-600">✓</span>
                              {item}
                            </li>
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
