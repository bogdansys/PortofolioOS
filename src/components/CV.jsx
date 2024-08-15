import React from 'react';
import { useTheme } from './ThemeProvider';

const CV = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'from-gray-800 to-blue-900' : 'from-blue-100 to-purple-200';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';
  const sectionBg = theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50';

  return (
    <div className={`bg-gradient-to-br ${bgColor} ${textColor} p-8 rounded-lg shadow-xl max-w-4xl mx-auto overflow-auto max-h-[80vh] custom-scrollbar`}>
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">IORDACHE MIHAI BOGDAN</h1>
      
      <section className={`mb-8 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Education</h2>
        <div>
          <h3 className="text-xl font-medium">Delft University of Technology (TU Delft)</h3>
          <p>Delft, The Netherlands</p>
          <p>Computer Science and Engineering Bachelor 2025</p>
          <p>Minor: Tech-Based Entrepreneurship</p>
        </div>
      </section>
      
      <section className={`mb-8 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Experience</h2>
        {[
          {
            title: "Software Engineer",
            company: "VISA",
            date: "Jul. 2024 - Sept. 2024",
            location: "Warsaw, Poland · On-site",
            description: "Java engineering role focusing on backend software development and system improvements. Responsibilities included testing using Cypress, Playwright, and React development, along with deployment using Kruiser.",
            technologies: "Java, Cypress, React, Playwright, Kruiser"
          },
          {
            title: "Full Stack Developer",
            company: "Digital Lights Bulgaria",
            date: "Apr. 2024 - Jun. 2024",
            location: "Remote",
            description: "Developed a web application for visualizing satellite imagery from the Copernicus Sentinel 2 Satellite, using ReactJS, Django and GDAL."
          },
          {
            title: "Computer Science and Mathematics Mentor",
            company: "Upgrade Education",
            date: "Dec. 2023 - Jun. 2024",
            location: "Bucharest, Romania · Remote",
            description: "Taught computer science and mathematics, including SAT preparation, to students."
          },
          {
            title: "Full Stack Software Developer",
            company: "YAROOMS",
            date: "June 2023 - Aug. 2023",
            location: "Bucharest, Romania",
            description: "Contributed to Agile development, migrated Zend to Symfony PHP framework, enhancing software efficiency.",
            technologies: "PHP, Zend, Symfony, Docker, MariaDB, AngularJs, Redis, Jira"
          },
          {
            title: "Quality Assurance Engineer (Automation)",
            company: "YAROOMS",
            date: "Aug. 2022",
            location: "Bucharest, Romania",
            description: "Conducted extensive testing on frontend and backend components, improving YAROOMS software reliability.",
            technologies: "JavaScript, Cypress, JsMockito, Selenium"
          },
          {
            title: "Quality Assurance Tester",
            company: "BRD Group Societe General Bank",
            date: "June 2019 - Aug. 2019",
            location: "Bucharest, Romania",
            description: "Worked with senior developers, performing manual and software testing for a mobile banking app."
          },
          {
            title: "Quality Assurance Tester",
            company: "Casa de idei",
            date: "Jan. 2018 - Oct. 2019",
            location: "Bucharest, Romania",
            description: "Performed manual testing, ensuring optimal website performance post updates."
          }
        ].map((job, index) => (
          <div key={index} className="mb-6 bg-white/10 dark:bg-gray-800/10 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-blue-500 dark:text-blue-300">{job.title}</h3>
            <p className="text-lg font-semibold">{job.company} · <span className="text-purple-500 dark:text-purple-300">{job.date}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
            {job.technologies && <p className="text-sm italic text-gray-600 dark:text-gray-400">Technologies: {job.technologies}</p>}
            <p className="mt-2">{job.description}</p>
          </div>
        ))}
      </section>
      
      <section className={`mb-8 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>University Software Projects</h2>
        {[
          {
            title: "Java + Spring Boot: Food Ordering Backend",
            date: "Winter 2022 - 2023",
            role: "Software Developer",
            location: "Delft, Netherlands",
            technologies: "Java, Spring, Spring Boot",
            description: "Developed a backend for an \"Uber Eats\" like system using Java Spring, featuring authentication and a microservice architecture."
          },
          {
            title: "Java + Spring Boot: Online Multiplayer Game",
            date: "Mar. 2022",
            role: "Software Developer",
            location: "Delft, Netherlands",
            technologies: "Java, Spring Framework, JavaFX, H2 database",
            description: "Created a multiplayer quiz game \"QUIZZZZ\" with competitive arenas, lobbies, and real-time interactions."
          }
        ].map((project, index) => (
          <div key={index} className="mb-6 bg-white/10 dark:bg-gray-800/10 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-blue-500 dark:text-blue-300">{project.title}</h3>
            <p>{project.role} · <span className="text-purple-500 dark:text-purple-300">{project.date}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.location}</p>
            <p className="text-sm italic text-gray-600 dark:text-gray-400">Technologies: {project.technologies}</p>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </section>
      
      <section className={`${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Software Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Languages", skills: "C++, C, Java, JavaScript, Python, PHP, SQL" },
            { title: "Web", skills: "React, NodeJS, Express, Socket.io, Angular, HTML, CSS" },
            { title: "Backend", skills: "Spring (Boot, Security), Zend, Gradle, Django" },
            { title: "Testing & QA", skills: "Selenium, Cypress, JsMockito, JUnit, Playwright" },
            { title: "Databases", skills: "SQL, PostgreSQL, MongoDB, MariaDB" },
            { title: "Collab Tools", skills: "Git, Jira, BitBucket" },
            { title: "Security", skills: "Kali & Blackarch Linux, RAT, MITM, Metasploit, Nmap" },
            { title: "Cloud", skills: "Google Cloud API, Azure API" },
            { title: "Practices", skills: "Agile Development, SCRUM" },
            { title: "Containerization", skills: "Docker" },
            { title: "CI/CD", skills: "Jenkins Pipelines, GitLab Pipelines, Kruiser" }
          ].map((category, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/10 p-3 rounded-lg">
              <h3 className="font-medium text-blue-500 dark:text-blue-300">{category.title}</h3>
              <p className="text-sm">{category.skills}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className={`mt-8 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Penetration Testing Essential Training (LinkedIn, Aug 2024)</li>
          <li>Penetration Testing with Metasploit (LinkedIn, Aug 2024)</li>
        </ul>
      </section>

      <section className={`mt-8 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Written Works</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://github.com/bogdansys/Book-On-Algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Algorithms on the Run: A comprehensive crash course on algorithms and data structures
            </a>
          </li>
          <li>
            <a href="https://github.com/bogdansys/Book-On-Machine-Learning" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Machine Learning Maths for Dummies: An introductory guide to the mathematics behind Machine Learning models
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;