import { Card, Col, Row } from "react-bootstrap"
import Info from "./info";
import Episodes from "./episodes";

function Index(props) {
  const dataApi = props.data

  return(
    <>
      <div style={ { marginTop: '50px', marginBottom: '50px' } }>
        <Row xs={1} md={2} lg={3} className="g-4">
          {dataApi.results.map((character) => (
            <Col key={character.id}>
              <Card style={ { width: '20rem' } } >
                  <Card.Header> { character.name } </Card.Header>
                  <Card.Img variant="top" src={ character.image } alt={ character.name }/>
                  <Card.Body>
                    <Card.Title>Status: {character.status}</Card.Title>
                    <Card.Text>Species: {character.species}</Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Info character={ character }/>
                    <Episodes character={ character }/>
                  </div>
                  </Card.Body>
                  <Card.Footer>Episodes: {(Object.values(character.episode).length)}</Card.Footer>
              </Card>
            </Col>
            )
          )}
        </Row>
      </div>
    </>
  )

}
  
export default Index