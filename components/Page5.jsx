import React from "react";
import styles from "./page5.module.css";
import Image from "next/image";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Page5(data) {
  return (
    <div className={styles.container}>
      <h1>Kobayashi Yui Translated Blogs</h1>
      <h3 style={{ marginBottom: "20px" }}>@Sakuzaka Central</h3>
      <div className={styles.cardContainer}>
        {data.data.map((blogs, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 345 }} className={styles.card}>
              <CardActionArea>
                <CardMedia className={styles.cardMedia} title={blogs.title}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      key={index}
                      alt={index}
                      src={blogs.cover}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CardMedia>
              </CardActionArea>
              <CardContent>
                <CardActionArea>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    onClick={() => window.open(blogs.linkSaku)}
                  >
                    {blogs.title}
                  </Typography>
                </CardActionArea>

                <CardActionArea>
                  <Typography variant="body2" color="text.secondary">
                    {blogs.spoiler}
                  </Typography>
                </CardActionArea>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{ color: "#6b8f7a" }}
                  onClick={() => window.open(blogs.linkSaku)}
                >
                  Read More..
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
