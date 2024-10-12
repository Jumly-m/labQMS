import Header from "./components/Header"
import Footer from "./components/Footer"
import CourseCard from "./components/Card"
import { Analytics } from "@vercel/analytics/react"



function App() {
return (
    <>
    <Header/>
    <div className="homepage">
    <div className="intro-text">
    <h1 className="header1">MEDICAL LAB QMS </h1>
    <p >Do you want to be expert in Medical Laboratory ? pick up free course now.</p>                                   
    </div>
      
      <div className="cardsContainer">
       <CourseCard
        src="https://picsum.photos/300/200"
        cardSubtitle ='Card subtitle'
        cardText ='Some quick example text to build on the card title and make up the bulk of the card content'
        buttonText='Take Course'
        />
         <CourseCard
        src="https://picsum.photos/300/200"
        cardSubtitle ='Card subtitle'
        cardText ='Some quick example text to build on the card title and make up the bulk of the card content'
        buttonText='Take Course'
        />
       <CourseCard
        src="https://picsum.photos/300/200"
        cardSubtitle ='Card subtitle'
        cardText ='Some quick example text to build on the card title and make up the bulk of the card content'
        buttonText='Take Course'
        />
         <CourseCard
        src="https://picsum.photos/300/200"
        cardSubtitle ='Card subtitle'
        cardText ='Some quick example text to build on the card title and make up the bulk of the card content'
        buttonText='Take Course'
        />

      </div>
    </div>
    <Footer/>
    <Analytics />
  
    </>
  )
}

export default App
