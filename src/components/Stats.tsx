
const stats = [
  { value: '20k+', label: 'Active Users' },
  { value: '500+', label: 'Courses' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support' },
];

const Stats = () => {
  return (
    <div className="bg-purple-600">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold leading-9 tracking-tight text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-purple-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
