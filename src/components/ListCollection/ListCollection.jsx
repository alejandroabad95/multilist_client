import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"

import ListCard from "../ListCard/ListCard"





const ListCollection = ({ lists, setRefresh }) => {


    const { user } = useContext(AuthContext)

    // console.log(user._id, 'id del usuario')

    return (
        <Row>
            {lists.map(list => {

                return (

                    (list.isPublic || (user?._id === list.owner)) &&

                    <Col sm={{ span: 4 }} key={list._id} >
                        <ListCard list={list} setRefresh={setRefresh} />
                    </Col>

                )

            })}
        </Row>


        // || user._id === list.owner

    )
}


export default ListCollection