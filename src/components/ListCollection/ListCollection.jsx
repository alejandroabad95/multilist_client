import { Col, Row } from "react-bootstrap"

import ListCard from "../ListCard/ListCard"


const ListCollection = ({ lists, estado }) => {

    // let todas = true
    // let publica = list.public
    // let privada = !list.public

    let condition



    return (
        <Row>
            {lists.map(list => {
                let state
                if (estado === 'publicas') {
                    state = list.public
                } else if (estado === 'privadas') {
                    state = !list.public
                } else {
                    state = true
                }
                return (


                    state &&
                    <Col sm={{ span: 4 }} key={list._id} >
                        <ListCard {...list} />
                    </Col>
                )



            })}
        </Row>
    )
}


export default ListCollection