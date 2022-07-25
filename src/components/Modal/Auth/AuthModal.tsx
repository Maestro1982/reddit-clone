import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AuthModalState } from '../../../atoms/AuthModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import ResetPassword from './ResetPassword';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(AuthModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleOnClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // This will run everytime something changes with the user
  useEffect(() => {
    if (user) handleOnClose();
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            {modalState.view === 'login' && 'Log In'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pb={6}
          >
            <Flex
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              width='70%'
            >
              {modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                  <OAuthButtons />
                  <Text color='gray.500' fontWeight={700}>
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
