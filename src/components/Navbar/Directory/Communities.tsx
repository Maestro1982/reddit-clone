import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      <MenuItem
        width='100%'
        fontSize='10pt'
        _hover={{ bg: 'gray.100' }}
        onClick={() => setIsOpen(true)}
      >
        <Flex alignItems='center'>
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
