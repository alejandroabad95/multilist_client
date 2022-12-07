import { Col, Row } from "react-bootstrap"

import ListCard from "../ListCard/ListCard"


const ListCollection = ({ lists }) => {

    return (
        <Row>
            {lists.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <ListCard {...elm} />
                    </Col>
                )



            })}
        </Row>
    )
}


export default ListCollection