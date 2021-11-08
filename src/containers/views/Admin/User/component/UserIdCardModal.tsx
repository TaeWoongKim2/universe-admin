import React from 'react';

import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1999;
  top: 2em;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  modalStyles: {
    bgcolor: 'white',
    border: '2px solid #333',
    p: 0.5,
    pb: 0,
    '& img': {
      height: '100%',
      maxHeight: '600px',
    },
  },
};

export default function UserIdCardModal({ student, visible, onClose }: any) {
  // useEffect(() => {
  //   onReload();
  // }, [student]);
  const studentIdCardImage = student?.universeCertiImg || 'empty.png';

  return (
    <StyledModal
      aria-labelledby="student-id-card"
      aria-describedby="student-id-card-modal"
      open={visible}
      onClose={onClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style.modalStyles}>
        <img alt="학생증" src={studentIdCardImage} />
      </Box>
    </StyledModal>
  );
}
