import Header from "./Header";
import Footer from "./Footer";
import TemplateCard from "./TemplateCard";
import templateData from "../Datas/templatesData";

const Templates = () => {
  return (
    <>
      <Header />
      <div className="free-templates-container">
        <div className="template-sectionone">
          <h1 className="header1">Free Templates</h1>
        </div>
        <div className="templatesCards"> {/* This wraps your cards */}
          {templateData.map(template => (
            <TemplateCard 
              key={template.id} 
              title={template.title} 
              document={template.document}
              flag={template.flag}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Templates;
