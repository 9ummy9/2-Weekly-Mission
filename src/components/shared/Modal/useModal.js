import { useRef } from 'react';

const useModal = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return [modalRef, openModal, closeModal];
};

export default useModal;
