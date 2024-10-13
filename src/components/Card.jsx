
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const CourseCard = (props) => {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <img className='cardImage'  alt="Sample" src={props.src} />
      <CardBody className='cardBody'>
        <CardTitle className='courseTitle' tag="h4"><b>{props.title}</b></CardTitle>
        <CardSubtitle className="mb-2 text-muted topic" tag="h6">
        <em>Topic :{props.topic}</em> 
        </CardSubtitle>
        <CardText>
         {props.cardText}
        </CardText>
        <Button href={props.link} color='primary'className='cardButton' outline = 'True' block='True'>{props.buttonText}</Button>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
