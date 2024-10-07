import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Episodes( { character } ){

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  
  const getEpisodeNumber = ( url ) => {
    const parts = url.split('/');
    return parts[parts.length -1]
  }
  

  return (
    <>
      <Button variant="outline-primary" onClick={openModal}>
        Episodes
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {character.episode.map((episodeUrl, i) => (
              <li key={i}>Episode {getEpisodeNumber(episodeUrl)}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Episodes