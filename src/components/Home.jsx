import Header from "./Header";
import Footer from "./Footer";
import CourseCard from "./Card";
import { Analytics } from "@vercel/analytics/react";
import data from "../Datas/data";
import { Button } from "reactstrap";
import PopoverCard from "./Popover";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
   <>
     <Header />
      <div className="homepage">
      <Helmet>
        <title>LabQMS</title>
        <meta name="description" content="become expert in medical laboratory through Labqms materials,presentations and free courses" />
        <link rel="canonical" href="https://labqms.online" />
        <meta name="keywords" content="ISO 15189, medical lab, haematology, lab qms,quality indicators,clinical research" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://labqms.online",
              "@type": "labqms",
              "url": "https://labqms.online",
              "name": "Lab qms ",
              "description": "become expert in medical laboratory through Labqms materials,presentations and free courses"
            }
          `}
        </script>
      </Helmet>
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
              link={course.link}    
              isNew={true}    // Link for the course
            />
          ))}
    
        </div>
      </div>
      <Footer />
      <Analytics />
   </>
  )
}

export default Home