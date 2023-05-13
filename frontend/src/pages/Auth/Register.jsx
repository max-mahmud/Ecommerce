import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import WHiteSpace from "../../components/whitespac/WHiteSpace";
import { registerUserAction } from "../../redux/actions/UserAction";
import { notify } from "../../utils/helper";

export default function Register() {
  const navigate = useNavigate();
const { error, isAuth, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value
    ) {
      return notify("Please filled all fields", "error");
    }
    dispatch(
      registerUserAction({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        image: avatar,
      })
    );
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  return (
    <div>
      <Stack>
        <Stack
          sx={{
            width: "40%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            borderRadius: "5px",
            my: 4,
            boxShadow: 2,
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "60%",
              textAlign: "center",
            }}
            pt={5}
          >
            <h2>Register</h2>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              inputRef={nameRef}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              inputRef={emailRef}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              inputRef={passwordRef}
            />
            <Button variant="contained" component="label" color="warning">
              Upload Avatar
              <input
                type="file"
                hidden
                onChange={(e) => {
                  setAvatar(e.target.files[0]);
                  const reader = new FileReader();
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onload = () => {
                    setImage(reader.result);
                  };
                }}
              />
            </Button>
            {image && (
              <img
                src={image}
                alt="avatar"
                width="100px"
                height="100px"
                style={{ borderRadius: "50%", objectFit:"cover", objectPosition: "top" }}
              />
            )}
            <WHiteSpace height={2} />
            <Button variant="contained" onClick={handleSubmit}>
              {isLoading ? (
                <CircularProgress style={{color:"#fcfcfc"}} size={22} />
              ) : (
                "Register"
              )}
            </Button>
            <Typography variant="p">
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
            <WHiteSpace height={40} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
