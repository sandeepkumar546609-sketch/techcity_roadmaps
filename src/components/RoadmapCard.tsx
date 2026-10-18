
type RoadmapCardProps = {
  title: string;
  slug: string;
  description: string;
  icon: string;
};

export default function RoadmapCard({
  title,
  slug,
  description,
  icon,
}: RoadmapCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-xl">
      {/* Icon Banner */}
      <div className="mb-5 flex items-center justify-between rounded-xl bg-blue-50 p-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-xl font-bold text-blue-700">↗</span>
      </div>

      {/* Roadmap Title */}
      <h2 className="mb-3 text-xl font-bold leading-snug text-slate-900">
        {title}
      </h2>

      {/* Description */}
      <p className="mb-6 text-sm leading-6 text-slate-600">
        {description}
      </p>

      {/* Explore Button */}
      <a
        href={`/students/roadmaps/${slug}`}
        className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white no-underline transition-colors duration-200 hover:bg-blue-800"
      >
        Explore Roadmap →
      </a>
    </article>
  );
}
