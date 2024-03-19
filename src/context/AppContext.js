import React, { useState, createContext } from 'react';
export const AppDataContext = createContext(null);
const { Provider } = AppDataContext;

const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [pifModalOpen, setPifModalOpen] = useState(false);
  const handlePifModalOpen = () => setPifModalOpen(true);
  const handlePifModalClose = () => setPifModalOpen(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const handleClaimTicketClick = () => {
    setClaimModalOpen(true);
  };
  const handleBookModalOpen = () => {
    setPifModalOpen(false);
    setBookModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeClaimModal = () => {
    setClaimModalOpen(false);
  };

  return (
    <Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        toggleModal,
        claimModalOpen,
        handleClaimTicketClick,
        setClaimModalOpen,
        closeClaimModal,
        error,
        setError,
        successMessage,
        setSuccessMessage,
        pifModalOpen,
        setPifModalOpen,
        handlePifModalOpen,
        handlePifModalClose,
        bookModalOpen,
        setBookModalOpen,
        handleBookModalOpen,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppContextProvider;
