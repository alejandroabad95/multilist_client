import './ListCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

function ListCard({ imageUrl, title }) {
    return (
        <Card className="mb-4 CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm">Volver a página de inicio</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ListCard;