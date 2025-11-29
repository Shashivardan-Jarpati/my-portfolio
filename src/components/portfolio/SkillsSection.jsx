import React from 'react';
import { Code2, Database, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "violet",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "purple",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 65 }
    ]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "pink",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "GitHub", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "cyan",
    skills: [
      { name: "Adaptability", level: 90 },
      { name: "Team Work", level: 95 },
      { name: "Time Management", level: 85 },
      { name: "Critical Thinking", level: 88 },
      { name: "Communication", level: 90 }
    ]
  }
];

const colorMap = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    bar: "bg-gradient-to-r from-violet-600 to-violet-400"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    bar: "bg-gradient-to-r from-purple-600 to-purple-400"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    bar: "bg-gradient-to-r from-pink-600 to-pink-400"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    bar: "bg-gradient-to-r from-cyan-600 to-cyan-400"
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900/50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diverse skill set combining programming languages, databases, tools, and essential soft skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            return (
              <div 
                key={catIndex}
                className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className={`text-sm ${colors.text} opacity-0 group-hover/skill:opacity-100 transition-opacity`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'growWidth 1.5s ease-out forwards'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Tags */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Machine Learning", "Deep Learning", "Data Science", "Cloud Computing", "AWS", "Oracle Cloud", "Federated Learning", "Data Privacy"].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-sm hover:text-violet-400 hover:border-violet-500/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes growWidth {
          from { width: 0; }
        }
      `}</style>
    </section>
  );
}