import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Backdrop,
    Box,
    Button,
    Fade,
    IconButton,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {modalBigStyle} from "@/assets/themes/modalStyle";
import {closeModal, openModal} from "@/services/utils/modalUtils/modalUtils";
import {ModalUserEditProfileProps} from "@/components/userMain/interfaces/modalUserEditProfile/modalUserEditProfile";
import {PhotoCamera} from "@mui/icons-material";
import ChangePassword from "@/components/userMain/changePassword/changePassword";
import {changeAvatar} from "@/services/utils/UserUtils/userMainUtils";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import ModalDeleteAvatar from "@/components/userMain/modalDeleteAvatar/modalDeleteAvatar";

const ModalUserEditProfile = (props:ModalUserEditProfileProps) => {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordToChange, setPasswordToChange] = useState(false);
    const [DeleteAvatar, setDeleteAvatar] = useState(false)
    useEffect(() => {
        // kiedy zadanie zostanie załadowane, ustawiamy jego wartość w stanie
        setFirstName(props.firstName);
    }, [props.firstName]);

    useEffect(() => {
        // kiedy zadanie zostanie załadowane, ustawiamy jego wartość w stanie
        setLastName(props.lastName);
    }, [props.lastName]);
    useEffect(() => {
        // kiedy zadanie zostanie załadowane, ustawiamy jego wartość w stanie
        setEmail(props.email);
    }, [props.email]);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.files){
            const file = event.target.files[0];
            const image = new FormData();
            image.append('avatarImage', file)
            changeAvatar(
                props.userId,
                image,
                props.setActiveUser
            )
        }
    }

    return (
        <Modal
            style={{zIndex:'5'}}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.modalEdit}
            onClose={() => closeModal(props.setModalEdit)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={props.modalEdit}>
                <Stack sx={modalBigStyle} spacing={2}>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >

                            <Avatar
                                src={props.avatarPath && props.avatarPath}
                                sx={{
                                    bgcolor:props.avatarColor
                                }}
                            >
                                <Typography variant={"body1"}>
                                    {props.firstName[0].toUpperCase() + props.lastName[0].toUpperCase()}
                                </Typography>
                            </Avatar>
                        <Tooltip
                            title={"Upload your avatar"}
                            placement={"top"}
                        >
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
                                <input hidden accept="image/*" type="file" onChange={handleFileUpload}/>
                                <PhotoCamera />
                            </IconButton>
                    </Tooltip>
                        {props.avatarPath != null && (
                            <Tooltip
                                title={"Delete avatar"}
                                placement={"top"}
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="Delete avatar"
                                    component="label"
                                    onClick={() => openModal(setDeleteAvatar)}
                                >
                                    <NoPhotographyIcon />
                                </IconButton>
                            </Tooltip>
                        )}

                        <Typography
                            color={'textPrimary'}
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Edit Profile
                        </Typography>
                    </Box>
                    <Box
                        display={'flex'}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            width={'50%'}
                            paddingX={1}
                        >
                            <TextField
                                sx={{margin:'0 0 8px 0'}}
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={firstName}
                                onChange={handleNameChange}
                            />
                            <TextField
                                sx={{margin:'0 0 8px 0'}}
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                value={lastName}
                                onChange={handleDescChange}
                            />
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            width={'50%'}
                            paddingX={1}
                        >
                            <TextField
                                sx={{margin:'0 0 8px 0'}}
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            <ChangePassword
                                password={password}
                                repeatPassword={repeatPassword}
                                handlePasswordChange={handlePasswordChange}
                                handleRepeatPasswordChange={handleRepeatPasswordChange}
                                passwordToChange={passwordToChange}
                                setPasswordToChange={setPasswordToChange}
                            />

                        </Box>
                    </Box>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <Button
                            sx={{maxHeight:'50px', width:'100px'}}
                            variant="contained"
                        >
                            Edit
                        </Button>
                    </Box>
                    <ModalDeleteAvatar userId={props.userId} modalDeleteAvatar={DeleteAvatar} setModalDeleteAvatar={setDeleteAvatar} setActiveUser={props.setActiveUser}/>
                </Stack>
            </Fade>
        </Modal>
    );
}

export default ModalUserEditProfile