
import DsaRoadmap from "@/components/DsaRoadmap";
import AiMlRoadmap from "@/components/AiMlRoadmap";
import DataScienceRoadmap from "@/components/DataScienceRoadmap";
import MernRoadmap from "@/components/MernRoadmap";
import PythonRoadmap from "@/components/PythonRoadmap";
import JavaRoadmap from "@/components/JavaRoadmap";
import Link from "next/link";
type Roadmap = {
  title: string;
  description: string;
  topics: string[];
};

const roadmapData: Record<string, Roadmap> = {
  dsa: {
    title: "Data Structures & Algorithms",
    description:
      "Build problem-solving skills and prepare for coding interviews step by step.",
    topics: [
      "Programming Basics",
      "Arrays and Strings",
      "Searching and Sorting",
      "Linked Lists",
      "Stacks and Queues",
      "Trees and Graphs",
      "Dynamic Programming",
    ],
  },

  "ai-ml": {
    title: "AI & Machine Learning",
    description:
      "Learn the fundamentals of artificial intelligence and machine learning.",
    topics: [
      "Python Basics",
      "Mathematics for AI",
      "Data Handling",
      "Machine Learning Basics",
      "Model Training",
      "AI Projects",
    ],
  },

  "data-science": {
    title: "Data Science & Analytics",
    description:
      "Learn how to analyse data and turn it into useful insights.",
    topics: [
      "Python Basics",
      "NumPy and Pandas",
      "Data Cleaning",
      "Data Visualisation",
      "Statistics",
      "Data Analysis Projects",
    ],
  },

  "mern-stack": {
    title: "MERN Stack Development",
    description:
      "Learn to build full-stack web applications using modern web technologies.",
    topics: [
      "HTML and CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Full-Stack Projects",
    ],
  },

  python: {
    title: "Python Web Development",
    description:
      "Learn Python and use it to develop dynamic web applications.",
    topics: [
      "Python Fundamentals",
      "Object-Oriented Programming",
      "SQL and Databases",
      "Django or Flask",
      "REST APIs",
      "Web Development Projects",
    ],
  },

  java: {
    title: "Java Full-Stack Development",
    description:
      "Learn Java backend development and build complete web applications.",
    topics: [
      "Core Java",
      "Object-Oriented Programming",
      "SQL and JDBC",
      "Spring Boot",
      "REST APIs",
      "Frontend Basics",
      "Full-Stack Projects",
    ],
  },
};

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = roadmapData[slug];
  if (slug === "dsa") {
  return <DsaRoadmap />;
}
if (slug === "ai-ml") {
  return <AiMlRoadmap />;
}
if (slug === "data-science") {
  return <DataScienceRoadmap />;
}
if(slug === "mern-stack"){
    return <MernRoadmap/>
}
if (slug === "python") {
  return <PythonRoadmap />;
}
if (slug === "java") {
  return <JavaRoadmap />;
}
  if (!roadmap) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Roadmap Not Found
          </h1>
         
<Link
  href="/students/roadmaps"
  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 no-underline shadow-sm transition-all duration-200 hover:-translate-x-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
>
  <span className="text-lg">←</span>
  Back to Roadmaps
</Link>

           
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl">
       
<Link
  href="/students/roadmaps"
  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 no-underline shadow-sm transition-all duration-200 hover:-translate-x-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
>
  <span className="text-lg">←</span>
  Back to Roadmaps
</Link>

        <section className="mt-6 rounded-2xl bg-white p-8 shadow-md sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Learning Roadmap
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {roadmap.title}
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            {roadmap.description}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Learning Path</h2>

            <ol className="mt-5 space-y-3">
              {roadmap.topics.map((topic, index) => (
                <li
                  key={topic}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="font-semibold">{topic}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
