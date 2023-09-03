import { Box, Button } from '@chakra-ui/react';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { FcPrevious, FcNext } from 'react-icons/fc';

const SwiperArrows: FC<{
  setPrevEl: Dispatch<SetStateAction<HTMLElement | null>>;
  setNextEl: Dispatch<SetStateAction<HTMLElement | null>>;
}> = ({ setNextEl, setPrevEl }) => {
  return (
    <Box
      position={'absolute'}
      justifyContent="space-between"
      w={'100%'}
      display="flex"
      zIndex={2}
      marginTop={[100]}
      paddingLeft={[3, 5]}
      paddingRight={[3, 5]}
    >
      <Button
        size={['sm', 'lg']}
        borderColor={'gray'}
        borderWidth={2}
        backgroundColor={'white'}
        ref={(node) => setPrevEl(node)}
      >
        <FcPrevious />
      </Button>
      <Button
        size={['sm', 'lg']}
        borderColor={'gray'}
        borderWidth={2}
        backgroundColor={'white'}
        ref={(node) => setNextEl(node)}
      >
        <FcNext />
      </Button>
    </Box>
  );
};

export default SwiperArrows;
