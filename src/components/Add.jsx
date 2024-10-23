import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Box, Fab, styled, Tooltip, Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom:"20px"
  })

export const Add = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e=>setOpen(true)}>
                <Fab 
                    color="primary" 
                    aria-label="add" 
                    sx={{ 
                        position: 'fixed', 
                        bottom: 20, 
                        left: { 
                            xs: "calc(50% - 25px)", 
                            md: 30 
                        },
                        bgcolor: "blue" 
                    }}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
    <Typography variant="h6" color="gray" textAlign='center'>Create Post</Typography>
    <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="" />
          <Typography variant="span">Rose</Typography>
        </UserBox>
        <TextField
        sx={{width:"100%"}}
        multiline
        rows={3}
        placeholder="What's on your mind?"
        variant='standard'
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth sx={{bgcolor:"blue"}} variant='contained'>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRange/>
            </Button>
        </ButtonGroup>
  </Box>
</StyledModal>
        </>
    );
};
