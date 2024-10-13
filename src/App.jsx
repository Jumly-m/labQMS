import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/Card";
import { Analytics } from "@vercel/analytics/react";
import data from './data';

function App() {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="intro-text">
          <h1 className="header1">MEDICAL LAB QMS</h1>
          <p><em>Do you want to be an expert in Medical Laboratory? Pick up a free course now.</em></p>
        </div>

        {/* Mapping through the data array and passing course details to CourseCard */}
        <div className="cardsContainer">
          {data.map((course) => (
            <CourseCard
              key={course.id}    
              title ={course.title}      // Ensures each CourseCard has a unique key
              src={course.image}        // Image URL for the course
              topic={course.topic}  // Subtitle of the course
              cardText={course.description}   // Course description text
              buttonText="Take Course"  // Static button text
              link={course.link}        // Link for the course
            />
          ))}
        </div>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
