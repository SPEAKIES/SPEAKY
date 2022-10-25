import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom:1px solid;
`;

const Content =styled.textarea`
  width: 100%;
  height: 200px;
`
const Boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 1,
};
const Buttonstyle={
    position: 'absolute',
    right:100,
    bottom:100,
}


export default function WirteModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  });
  const [checkImg, setCheckImg ] = useState('none');

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if(e.target.files[0]){
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => (
        {
          image_file: e.target.files[0],
          preview_URL: preview_URL
        }
      ))
      setCheckImg('block');
    }
  }

  const deleteImage = () => {
    // createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: "",
    });
    setCheckImg('none');
  }
  useEffect(()=> {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL)
    }
  }, [image])


  const sendToServer = async () => {
    if (image.image_file) {
      const formData = new FormData()
      formData.append('file', image.image_file);
      console.log(formData);
    //   await axios.post('/api/image/upload', formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        preview_URL: "",
      });
      handleClose();
      setCheckImg('none');
    } else {
      alert("사진없이 등록하는부분구현!")
    }
  }

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
          
          <Content>
          </Content>
          <input type="file" accept="image/*"
             onChange={saveImage}
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
             onClick={(e) => e.target.value = null}
             ref={refParam => inputRef = refParam}
             style={{display: "none"}}
          />
          <div style={{display:checkImg,position:'relative',width:'480px',height:'auto'}}>
            <div>
              <img style={{width:'100%',height:'350px'}} src={image.preview_URL} alt='이미지'/>
            </div>
            <Button style={{position:'absolute', top:10, right:0}} onClick={deleteImage}>
              <CloseIcon/>
            </Button>
            </div>

          <div>
          <Button type="primary" variant="contained" onClick={() => inputRef.click()}>
            사진 넣기
          </Button>
          </div>
          <Button sx={{width:'100%'}} variant="contained" onClick={sendToServer}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
