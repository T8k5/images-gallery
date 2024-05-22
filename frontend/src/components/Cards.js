import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';

const Cards = ({ images, setImages }) => {
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={3}>
        {images.map((image, i) => (
          <Col key={i} className="pb-3">
            <ImageCard image={image} deleteImage={handleDeleteImage} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
