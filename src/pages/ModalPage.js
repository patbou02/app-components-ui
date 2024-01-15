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
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid cumque distinctio eum explicabo fugit hic libero magnam magni modi nesciunt nobis officia, officiis omnis quasi quidem recusandae sequi sunt.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis debitis, dolores eius error ex excepturi explicabo id labore odit pariatur quos rem reprehenderit temporibus voluptas. Harum nihil numquam ratione.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ea excepturi ipsa molestias officia, rem repudiandae suscipit vero? Animi deserunt dicta hic non odit, officiis quibusdam ratione reiciendis voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi unde? Ad aliquid corporis et fugiat ipsam nesciunt quis tempora totam! Cupiditate, ipsa maiores. Blanditiis ducimus eius ex laboriosam tempora!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores cum et expedita fugit inventore, ipsum itaque iusto laboriosam, maxime minus nemo, obcaecati perspiciatis sit vitae voluptatem! Dicta, nisi!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur deserunt dolorem doloribus hic inventore ipsam iure magni nesciunt nisi placeat quod repellat reprehenderit rerum similique unde ut, voluptatem.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem culpa doloremque ducimus, earum excepturi in magnam maxime, modi neque pariatur quae quidem similique voluptatum. Laboriosam molestiae quia quibusdam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolores, eum in quidem quod similique tempora totam. Animi illo libero magnam necessitatibus numquam quam quisquam reprehenderit soluta tempora voluptatem.</p>
    </div>
  );
}

export default ModalPage;