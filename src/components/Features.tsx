
import { BookOpen, Heart, Video } from "lucide-react";

const features = [
  {
    name: 'Educational Content',
    description: 'Access high-quality educational resources curated by experts.',
    icon: BookOpen,
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    name: 'Health & Wellness',
    description: 'Stay informed with the latest health and wellness insights.',
    icon: Heart,
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    name: 'Video Learning',
    description: 'Engage with interactive video content for enhanced learning.',
    icon: Video,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our comprehensive platform designed to support your learning journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <div className={`rounded-lg p-2 ${feature.bg}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
