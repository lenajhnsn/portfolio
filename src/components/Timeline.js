// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import './Timeline.css';  // Import the CSS file with the timeline styles

// Timeline data
const timelineData = [
    {
        title: 'Foundations in Psychology',
        description: "My Bachelor's degree in Psychology helps me understand the user: what motivates behavior, drives adoption, and shapes experiences. This helps me design software that connects with people.",
    },
    {
        title: 'Experimental Design',
        description: "Earning a Master’s degree in Experimental Psychology sharpened my analytical thinking and problem-solving skills. Through rigorous training in experimental design, statistics, and critical analysis, I developed a methodical approach to tackling complex challenges."
    },
    {
        title: 'Information Systems',
        description: 'Completing another Master’s degree in Information Systems introduced me to programming, database design, networking, and system management. My role as a product owner for my capstone project added practical experience in project management and user-focused design.',
    },
    {
        title: 'Experience in EdTech',
        description: 'My experience in ed tech immersed me in the world of software engineering, helping me support and guide aspiring developers. This role taught me what it takes to succeed in the field, from essential skills to mindsets, and gave me years of experience talking tech.',
    },
    {
        title: 'Full Stack Development',
        description: 'At Tech Elevator, I learned Java, JavaScript, and full-stack development, bridging my theoretical knowledge with practical coding experience. I created full-stack applications, strengthened my understanding of the development lifecycle, and built a strong technical foundation.',
    },
    {
        title: 'Creating the Memo Archive',
        description: 'My latest full-stack application, Memo Archive, brings everything together. This full-stack application showcases my coding skills, problem-solving, and design abilities.',
    }
];

// Timeline component
const Timeline = () => {
  const itemsRef = useRef([]);

  // Add each item to the ref array
  useEffect(() => {
    const callbackFunc = () => {
      itemsRef.current.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        } 
      });
    };

    // Check if element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Add scroll and load event listeners
    window.addEventListener("scroll", callbackFunc);
    window.addEventListener("load", callbackFunc);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", callbackFunc);
      window.removeEventListener("load", callbackFunc);
    };
  }, []);

  return (
    <section className="timeline">
      {/* Add an H2 header and paragraph */}
      <header className="timeline-header">
        <h2>My Professional Journey</h2>
        <p>
        This timeline highlights the key milestones in my career and education, showcasing my growth and journey into software engineering.
        </p>
      </header>

      <ul>
        {timelineData.map((item, index) => (
          <li key={index} ref={(el) => itemsRef.current[index] = el}>
            <div>
              <div className="discovery">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
