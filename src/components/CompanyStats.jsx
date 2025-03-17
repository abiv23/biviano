import React from 'react';

export default function CompanyStats({
  backgroundColor = "bg-violet-600",
  title = "By The Numbers",
  subtitle = "BIV web designs has established a record of excellence in the industry.",
  stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "100", label: "Page Speed Score" },
    { value: "10+", label: "Years of Web Development" },
    { value: "1.2m", label: "Daily Users on largest project" },
  ]
}) {
  return (
    <section className={`${backgroundColor} py-16 md:py-20`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-white/80">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div className="text-center" key={index}>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}