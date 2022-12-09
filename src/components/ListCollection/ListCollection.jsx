import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"

import ListCard from "../ListCard/ListCard"



const ListCollection = ({ lists }) => {

    const { user } = useContext(AuthContext)

    // console.log(user._id, 'id del usuario')

    return (
        <Row>
            {lists.map(list => {
                // console.log(list.owner)

                return (

                    (list.public || (user?._id === list.owner)) &&
                    <Col sm={{ span: 4 }} key={list._id} >
                        <ListCard {...list} />
                    </Col>

                )

            })}
        </Row>


        // || user._id === list.owner

    )
}


export default ListCollection