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
      <h1 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">IORDACHE MIHAI BOGDAN</h1>
      <p className="text-center mb-8 text-sm sm:text-base">Founding Full-Stack Engineer & Technical Architect | DevSecOps</p>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Education</h2>
        <div>
          <h3 className="text-xl font-medium">Delft University of Technology (TU Delft) — The Netherlands</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">B.Sc. Computer Science and Engineering | Minor: Tech-Based Entrepreneurship</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Core: Algorithms & Data Structures, Machine Learning & AI, Secure & Distributed Systems, Embedded Software, Mathematics for Computing</p>
        </div>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Experience</h2>
        {[
          {
            title: "Founding Full-Stack Engineer & Technical Architect",
            company: "Verde Industries — EU",
            date: "Apr 2024 – Present",
            bullets: [
              "Conceived, built, pentested, and launched an enterprise SaaS with B2C operations; 40k+ LOC across backend/frontend.",
              "Shipped 50+ REST APIs, background jobs, and webhooks; Dockerized; Supabase (Auth/Postgres/Storage/Edge Functions) plus Capacitor.",
              "Achieved 99.9% availability with blue/green deployments, feature flags, automated rollbacks (GitHub Actions).",
              "Implemented secure login/payment: OAuth2/JWT, RBAC, RLS, SSO (OIDC/SAML), MFA; end-to-end Stripe orchestration.",
              "Directed technical and business strategy: client meetings, partnerships, product planning, go-to-market."
            ]
          },
          {
            title: "Software Engineer Intern",
            company: "VISA — Warsaw",
            date: "Jul – Sep 2025",
            bullets: [
              "Built Java 17 GraphQL gateway aggregating 4 microservices; delivered production REST APIs with JPA/Hibernate.",
              "Solved client-reported backlog items; strict Agile and Jira workflows.",
              "Automated CI/CD (GitHub Actions, Maven); containerized with Docker; added Splunk observability and tests to cut MTTR.",
              "Secured a full-time return offer for Jul 2026 based on internship performance."
            ]
          },
          {
            title: "Software Engineer Intern",
            company: "VISA — Warsaw",
            date: "Jul – Sep 2024",
            bullets: [
              "Refactored legacy Java into Spring Boot microservices; introduced REST APIs with Swagger/OpenAPI.",
              "Optimized PostgreSQL (indexes, plans, pooling) for CPU efficiency.",
              "Raised automated test coverage with JUnit 5, Mockito, Playwright, Testcontainers; CI gates (GitHub Actions/Jenkins, SonarQube).",
              "Built dev tooling: mock Java env, reusable API clients; onboarded interns and supported Scrum ceremonies."
            ]
          },
          {
            title: "IT Consultant",
            company: "DentalMed Clinic — Bucharest",
            date: "Jul 2025 – Present",
            bullets: [
              "Ongoing IT & security consulting across web, infrastructure, and operations.",
              "Built and supported the online shop and internal systems; advised on tooling, processes, vendors, and rollouts."
            ]
          },
          {
            title: "Full-Stack Developer & Team Lead",
            company: "Digital Lights (Wiser Technologies) — TU Delft Collaboration",
            date: "Apr – Jun 2024",
            bullets: [
              "Led a 6-person Agile squad; shipped a geospatial analytics platform 2 weeks early (React + Django + GDAL).",
              "Processed 1.2TB Sentinel-2 data with GDAL/Python for NDVI/NDWI/segmentation; interactive heatmaps at sub-second response."
            ]
          }
        ].map((job, index) => (
          <div key={index} className="mb-6 bg-white/10 dark:bg-gray-800/10 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-blue-500 dark:text-blue-300">{job.title}</h3>
            <p className="text-lg font-semibold">{job.company} · <span className="text-purple-500 dark:text-purple-300">{job.date}</span></p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Past Experience</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Owner & Frontend Developer — webworks-bucharest.com (Sep 2024 – Present): Websites for HoReCa and webstores.</li>
          <li>Computer Science & Math Teacher — Upgrade Education (Dec 2023 – Jun 2024).</li>
          <li>Full-Stack Developer (Summer) — YAROOMS (Jun – Aug 2023): Java & PHP/Symfony with React; performance tuning.</li>
          <li>QA Engineer (Automation) — YAROOMS (Jun – Aug 2022): Cypress, JsMockito for Java & PHP services.</li>
          <li>Software QA Tester — casadeidei.ro (Mar 2019 – Aug 2020): Manual/regression testing.</li>
          <li>Web Developer — Colegiul Național Sfântul Sava (Nov 2019 – Jun 2020): Led official high-school website build.</li>
          <li>QA Engineer (Intern) — BRD — Groupe Société Générale (Jun – Aug 2018): Mobile banking QA and defect triage.</li>
        </ul>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Languages & Frontend", skills: "Java, Python, C/C++, TypeScript, SQL, Bash, React, Tailwind CSS, Capacitor" },
            { title: "Backend & Architecture", skills: "Spring Boot, Microservices, JPA, Node.js, Django, GraphQL, REST, Webhooks, Stripe Orchestration, System Design" },
            { title: "Cloud, DevOps & AI", skills: "Git, AWS, Docker, Supabase, Firebase, CI/CD, Linux, iOS/Android Deployment, LLM APIs, Agentic AI Frameworks" },
            { title: "Database & Messaging", skills: "PostgreSQL tuning, Kafka, Redis" },
            { title: "Security", skills: "OWASP ZAP, Burp Suite, Kali, Nmap, Metasploit, Wireshark, OAuth2/OIDC, RSA" },
            { title: "Testing & QA", skills: "JUnit, Mockito, Jest, Cypress, Playwright, Selenium, Vitest, Postman, TDD" },
            { title: "Embedded Systems", skills: "FPGA (VHDL/Verilog), STM32 (Bare-metal), RTOS, Arduino" },
            { title: "Professional Skills", skills: "Agile/Scrum, Tech Leadership, Mentorship, Stakeholder Management, Splunk, Technical Writing" },
          ].map((category, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/10 p-3 rounded-lg">
              <h3 className="font-medium text-blue-500 dark:text-blue-300">{category.title}</h3>
              <p className="text-sm">{category.skills}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Projects</h2>
        <ul className="list-disc list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li><span className="font-semibold">Redboar</span> — FOSS exploitation tool unifying Nmap, Gobuster, SQLMap, Nikto with AI assistant. (Python, Docker)</li>
          <li><span className="font-semibold">Conway’s Game of Life Encryption</span> — Novel cellular automata-based encryption (live demo + research).</li>
          <li><span className="font-semibold">Advanced Ray Tracer & 3D Visualizer</span> — C++ path tracer (BVH, PBR, photon mapping).</li>
          <li><span className="font-semibold">Machine Learning & Data Insights Hub</span> — React ML portal with dashboards/model training.</li>
          <li><span className="font-semibold">MindKey</span> — Android mental mapping/notetaking app.</li>
        </ul>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Authored Technical Guides</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://github.com/bogdansys/Book-On-Machine-Learning" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Machine Learning Maths for Dummies</a></li>
          <li><a href="https://github.com/bogdansys/Book-On-Algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Algorithms on the Run</a></li>
        </ul>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Competitions</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <li>AMD Open Hardware Competition (2025) — LiDAR/Radar FPGA fusion in VHDL.</li>
          <li>TU Delft Capture-The-Flag (2024) — Exploited CVE-2023-23397.</li>
        </ul>
      </section>

      <section className={`mb-6 ${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Courses & Certifications</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <li>AI Engineer Associate — DataCamp (2025)</li>
          <li>ISO/IEC 27001 Lead Auditor — Mastermind (2025)</li>
          <li>Offensive Penetration Testing — LinkedIn (2024)</li>
          <li>Pen Testing with Metasploit — LinkedIn (2024)</li>
          <li>OSCP — OffSec (studying)</li>
          <li>AWS Solutions Architect Associate — AWS (studying)</li>
        </ul>
      </section>

      <section className={`${sectionBg} rounded-lg p-6`}>
        <h2 className={`text-2xl font-semibold mb-4 border-b ${borderColor} pb-2`}>Selected Academic Projects</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <li>NP Hard Solver — Modular Java solver (A*, IDA*, WalkSAT, ILP, CSP).</li>
          <li>Racket Interpreter — Scala: parsing, type checking, mutation handling.</li>
          <li>Autonomous Mobile Robot — Bare-metal STM32 control system with custom RTOS scheduler.</li>
          <li>FPGA System Design for AC — Safety-critical digital systems on Altera FPGAs optimized for gate efficiency.</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
