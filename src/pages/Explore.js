import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { products } from "../products";

const Explore = () => {
  const theme = useTheme();
  const colors = theme.palette.mode;
  return (
    <>
      {products.map((product) => {
        return (
          <div className="flex items-center justify-center">
            {product.id % 2 === 0 ? (
              <Card
                key={product.id}
                className="m-2 overflow-hidden flex items-center justify-center  "
                elevation={20}
                sx={{ width: "70%" }}
              >
                <CardMedia
                  component={"img"}
                  // hover:w-1/2  w-3/4
                  sx={{ width: 300 }}
                  // className="h-80 "
                  src={product.img}
                />
                <CardContent>
                  <Typography
                    className="flex items-center justify-center"
                    component="div"
                    variant="h5"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    className="  flex items-center justify-center  "
                    variant="h6"
                    component="div"
                  >
                    {product.desc}
                  </Typography>
                  <button
                      className={`border hover:bg-${
                        colors === "dark" ? "stone-600" : "stone-300"
                      } p-3 border-${colors === "dark" ? "white" : "black"}`}
                      variant="outlined"
                    >
                      Rent VR
                    </button>
                  </CardContent>
                 
                    
                
              </Card>
            ) : (
              <Card
                key={product.id}
                className="m-2 overflow-hidden flex items-center justify-center  "
                elevation={20}
                sx={{ width: "70%" }}
              >
                <CardContent>
                  <Typography
                    className="flex items-center justify-center"
                    component="div"
                    variant="h5"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    className="  flex items-center justify-center  "
                    variant="h6"
                    component="div"
                  >
                    {product.desc}
                  </Typography>
                  <button
                      className={`border hover:bg-${
                        colors === "dark" ? "stone-600" : "stone-300"
                      } p-3 border-${colors === "dark" ? "white" : "black"}`}
                      variant="outlined"
                    >
                      Rent VR
                    </button>
                </CardContent>
                <CardMedia
                  component={"img"}
                  // hover:w-1/2  w-3/4
                  sx={{ width: 300 }}
                  // className="h-80 "
                  src={product.img}
                />
              </Card>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Explore;
