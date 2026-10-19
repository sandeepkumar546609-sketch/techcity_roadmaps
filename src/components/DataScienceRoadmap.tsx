"use client";
import { useState } from "react";

import Link from "next/link";

const topics = [
  {
    title: "01. Python for Data Science",
    subtopics: [
      "Python syntax and data types",
      "Lists, dictionaries and functions",
      "List comprehensions",
      "Working with files",
    ],
    questions: [
      "Count Word Frequency",
      "Find Duplicate Values",
      "Process a CSV File",
      "Calculate Summary Statistics",
    ],
  },
  {
    title: "02. NumPy and Pandas",
    subtopics: [
      "NumPy arrays and vectorised operations",
      "Pandas Series and DataFrames",
      "Filtering and sorting data",
      "Grouping and aggregation",
    ],
    questions: [
      "Create and Manipulate Arrays",
      "Filter Rows in a DataFrame",
      "Group Data by Category",
      "Merge Two DataFrames",
    ],
  },
  {
    title: "03. SQL and Databases",
    subtopics: [
      "SELECT, WHERE and ORDER BY",
      "GROUP BY and aggregate functions",
      "INNER, LEFT and RIGHT JOIN",
      "Subqueries and CTEs",
      "Window functions",
    ],
    questions: [
      "Find the Second Highest Salary",
      "Calculate Department-wise Averages",
      "Find Duplicate Records",
      "Rank Employees by Salary",
    ],
  },
  {
    title: "04. Data Cleaning and Preparation",
    subtopics: [
      "Missing value treatment",
      "Duplicate and inconsistent records",
      "Outlier detection",
      "Data type conversion",
      "Feature preparation",
    ],
    questions: [
      "Clean a Messy Dataset",
      "Handle Missing Values",
      "Detect and Treat Outliers",
      "Prepare Data for Analysis",
    ],
  },
  {
    title: "05. Statistics and Data Visualisation",
    subtopics: [
      "Mean, median, mode and variance",
      "Probability and distributions",
      "Matplotlib and Seaborn",
      "Charts and visual storytelling",
    ],
    questions: [
      "Analyse a Sales Dataset",
      "Create a Correlation Heatmap",
      "Visualise Monthly Trends",
      "Compare Categories with Charts",
    ],
  },
  {
    title: "06. Exploratory Data Analysis (EDA)",
    subtopics: [
      "Understand dataset structure",
      "Univariate and bivariate analysis",
      "Correlation and relationships",
      "Identify patterns and trends",
    ],
    questions: [
      "Perform EDA on Sales Data",
      "Analyse Customer Behaviour",
      "Identify Important Data Patterns",
    ],
  },
  {
    title: "07. Dashboards and Portfolio Projects",
    subtopics: [
      "Power BI or Tableau fundamentals",
      "KPIs and interactive dashboards",
      "Business reporting",
      "Presenting insights and recommendations",
    ],
    questions: [
      "Build a Sales Dashboard",
      "Create a Customer Analytics Report",
      "Analyse an E-commerce Dataset",
      "Publish an End-to-End Portfolio Project",
    ],
  },
];

export default function DataScienceRoadmap() {
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
            Data Science & Analytics Roadmap
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Learn Python, SQL, statistics, data visualisation and analytics to
            turn raw data into meaningful insights.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-800">
              7 Learning Topics
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Data Analysis
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Portfolio Projects
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
