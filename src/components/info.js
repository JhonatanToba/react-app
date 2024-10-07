import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Info({ character }) {

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  
  return (
    <>
      <Button variant="outline-primary" onClick={openModal}>
        More Information
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Type: {character.type ? character.type : "Unknown"}</p>
          <p>Origin: {Object.values(character.origin)[0]}</p>
          <p>Location: {Object.values(character.location)[0]}</p>
          <img src={character.image} alt={character.name} style={{ width: '100%' }} />
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

export default Info;
