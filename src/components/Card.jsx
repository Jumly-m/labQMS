
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const CourseCard = (props) => {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <img alt="Sample" src={props.src} />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.cardSubtitle}
        </CardSubtitle>
        <CardText>
         {props.cardText}
        </CardText>
        <Button color='primary' outline = 'True' block='True'>{props.buttonText}</Button>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
