import { useForm } from "react-hook-form";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  styled,
} from "@mui/material";
import useNotify from "../hooks/useNotify";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { useChangeMode } from "../hooks";
import { TitleBox } from "../themes";

interface DataValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection = () => {
  let { ToastContainer } = useNotify();
  const [mode] = useChangeMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataValues>();

  const onSubmit = (data: DataValues) => {
    toast
      .promise(
        emailjs.send(
          "service_asq1jr9",
          "template_fq3cldx",
          data as any,
          "pPvI55oTnmo827Wf4"
        ),
        {
          pending: "Sending",
          success: "Sent successfully",
          error: "Something went wrong. Try again",
        }
      )
      .then(() => {
        reset();
      });
  };

  return (
    <Box component="section" id="Contact" sx={{ my: 8 }}>
      <ToastContainer position="bottom-left" theme={mode} />
      <TitleBox>
        <Typography variant="h2" component="h2">
          Contact
        </Typography>
      </TitleBox>

      <form id="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="Name"
              label="Your Name"
              variant="outlined"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name ? "Make sure to write your name" : ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="Email"
              label="Your Email"
              variant="outlined"
              type="email"
              {...register("email", { required: true })}
              error={!!errors.email}
              helperText={errors.email ? "Make sure to write your email" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Subject"
              label="Subject"
              variant="outlined"
              {...register("subject", { required: true })}
              error={!!errors.subject}
              helperText={errors.subject ? "Make sure to write subject" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Message"
              label="Message For Me"
              variant="outlined"
              multiline
              rows={4}
              {...register("message", { required: true })}
              error={!!errors.message}
              helperText={
                errors.message ? "Make sure to write your message" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
