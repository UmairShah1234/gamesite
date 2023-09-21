import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const EventCards = ({ place, side }) => {
  // if (side === 'left') {
  //     return (
  //         <Card elevation={20} sx={{ display: "flex" }}>

  //             <CardMedia
  //                 className='w-3/4 h-52 hover:w-1/2'
  //                 component={'img'}
  //                 sx={{ width: 250 }}
  //                 src='https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  //             />
  //             {/* <Box sx={{ flex: "1 0 auto" }}>
  //                 <CardContent>

  //                 </CardContent>
  //             </Box> */}
  //         </Card>
  //     )
  // }
  return (
    <Card className="relative overflow-hidden  " elevation={20} sx={{ display: "flex" }}>
      {/* <Box sx={{ flex: "1 0 auto" }} >
                <CardContent>

                </CardContent>
            </Box> */}
     
      
      <Typography
          className="absolute  flex items-center justify-center transition ease-in-out duration-600 "
          variant="h6"
          component="div"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderit eaque sed commodi voluptatem sit!
        </Typography>
        <CardMedia
        component={"img"}
        // hover:w-1/2  w-3/4
        className="transition ease-in-out duration-500 translate-x-0 hover:translate-x-[-100%] h-52"
        src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
        
    </Card>
  );
};

export default EventCards;
