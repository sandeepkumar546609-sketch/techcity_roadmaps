
import Navbar from "@/components/Navbar";
import RoadmapCard from "@/components/RoadmapCard";

const roadmaps = [
  {
    title: "Data Structures & Algorithms",
    slug: "dsa",
    description: "Learn coding step by step and improve problem-solving.",
    icon: "🧩",
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Explore AI and learn how smart applications work.",
    icon: "🤖",
  },
  {
    title: "Data Science & Analytics",
    slug: "data-science",
    description: "Learn to understand data and find useful insights.",
    icon: "📊",
  },
  {
    title: "MERN Stack Development",
    slug: "mern-stack",
    description: "Learn to build websites from start to finish.",
    icon: "🌐",
  },
  {
    title: "Python Web Development",
    slug: "python",
    description: "Learn Python and create your own websites.",
    icon: "🐍",
  },
  {
    title: "Java Full-Stack Development",
    slug: "java",
    description: "Learn Java and build complete web applications.",
    icon: "☕",
  },
];

export default function RoadmapsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-6 font-sans text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-7xl py-6">
        <p className="mb-2 text-center text-xs font-extrabold tracking-[2px] text-blue-600">
          YOUR LEARNING JOURNEY STARTS HERE
        </p>

        <h1 className="mb-3 text-center text-3xl font-extrabold sm:text-4xl">
          Explore Your Roadmap
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-center text-base leading-7 text-slate-500">
          Choose a learning path, build your skills, and move closer to your
          career goals.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <RoadmapCard
              key={roadmap.slug}
              title={roadmap.title}
              slug={roadmap.slug}
              description={roadmap.description}
              icon={roadmap.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
