import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/Card";
import { Analytics } from "@vercel/analytics/react";
import data from './data';
import { Button } from "reactstrap";
import PopoverCard from "./components/Popover";
import Subscribe from "./components/subscribe";
function App() {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="intro-text">
          <h1 className="header1">MEDICAL LAB QMS</h1>
          <p><em>Do you want to be an expert in Medical Laboratory? Pick up a free course,books & presentations now.</em></p>
          <div>
          <div className="communitybtnContainer">
          <Button href='https://whatsapp.com/channel/0029VaPXm9O5K3zYHrwpaa3E' color="primary">Join Lab Academy </Button>
         </div>
          </div>
        </div>
        <PopoverCard />

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
