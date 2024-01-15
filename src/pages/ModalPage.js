import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium harum iure labore, nesciunt quia quisquam repellendus reprehenderit sapiente sed ullam. Iste nam neque numquam veniam? Eius laborum nesciunt quisquam voluptate.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;