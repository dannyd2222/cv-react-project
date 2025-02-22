import {
  Box,
  Container,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import AppBar from "../../components/Appbar";
import Head from "next/head";
import plants from "./data/db";
import { useTheme } from "@mui/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#bb8954" : "#7f5235",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#4c633c" : "#8ba974",
  },
}));

export default function Joy() {
  // get app theme
  const theme = useTheme();
  console.log("theme", theme.palette.mode);
  const today = new Date();
  const items = plants;
  console.log(items);
  return (
    <div>
      <Head>
        <title>DDN Joy</title>
      </Head>
      <AppBar parent="/" />
      <Container maxWidth={false}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1800,
            mx: "auto", // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundImage: "url(/texture_grass.jpg)",
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        >
          {items.map((item, index) => {
            console.log(
              "value",
              (((today.getTime() - item.start_date.getTime()) /
                (1000 * 60 * 60 * 24)) *
                100) /
                63
            );
            const progressValue =
              (((today.getTime() - item.start_date.getTime()) /
                (1000 * 60 * 60 * 24)) *
                100) /
              63;
            return (
              <div
                key={`${item.name}-${index}`}
                style={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  padding: "20px",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr 4fr",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" align="left">
                  <strong>{item.name}</strong>
                </Typography>
                <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={progressValue > 100 ? 100 : progressValue}
                  />
                </Stack>
                <Typography
                  variant="h6"
                  align="center"
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0.5}
                >
                  <strong>Settimana</strong>
                  <span style={{ fontSize: "26px", fontWeight: "bold" }}>
                    {Math.floor(
                      (today.getTime() - item.start_date.getTime()) /
                        (1000 * 60 * 60 * 24) /
                        7
                    )}
                  </span>
                </Typography>
                {/* <Typography variant="h6" align="left">
                  {item.umidity}%
                </Typography> */}
              </div>
            );
          })}
        </Box>
      </Container>
    </div>
  );
}
