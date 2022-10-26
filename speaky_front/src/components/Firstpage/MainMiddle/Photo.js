import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 370,
        background: "linear-gradient(to right top,  #6190E8, #A7BFE8)",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          // backgroundColor: 'pink',
          marginLeft: "47vw",
          backgroundImage:
            "url(https://vivaling.com/wp-content/uploads/2021/05/image-accueil-VivaLing.png)",
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: "3.8vw",
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
}
