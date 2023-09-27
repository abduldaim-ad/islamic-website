import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Calendar = () => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/pc_ver_1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolorum tenetur consectetur veritatis modi, facilis quidem hic
            doloremque error? Beatae eius fuga obcaecati maiores aspernatur? Eum
            praesentium nulla sed distinctio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Calendar;
