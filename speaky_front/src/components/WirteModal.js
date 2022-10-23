import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import InputContent from './InputContent';
import styled from 'styled-components';
const Title = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  
`;

const Boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};
const Buttonstyle={
    position: 'absolute',
    right:20,
    bottom:20,
}

export default function WirteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
             
        <Fab sx={Buttonstyle} color="secondary" aria-label="edit" onClick={handleOpen}>
            <EditIcon />
        </Fab>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={Boxstyle}>
          <Title >
            게시물 만들기
          </Title>
          <div>
            <InputContent/>
            <Button sx={{width:'100%'}} variant="contained">Submit</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}