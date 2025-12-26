import React from 'react'
import "../styles/About.css"

import { Box, Typography } from "@mui/material";

const AboutUs = () => {
    return (
        <div>
            <Box sx={{
                my: 15,
                textAlign: "center",
                mx: 2,
                mt: { xs: 0, sm: 10 },
                //    pt:'40px'
            }
            }>
                <Typography variant="h3" sx={{ my: 2, fontSize: '40px' }}>
                    Welcome To My Restaurant
                </Typography>
                <Typography className="paragraph" variant="paragraph">
                    At [Restaurant Name], we have been serving the community with exquisite [Cuisine Type] since [Year Established]. Our founder, [Founder’s Name], envisioned a place where people could experience the rich flavors and traditions of [Country/Region] right here in [Location]. Each dish on our menu is crafted with the finest ingredients and authentic recipes passed down through generations. From our signature [Dish Name] to our mouthwatering [Dish Name], every bite is a celebration of our heritage and passion for exceptional food.
                </Typography>
                <br />
                <br />
                <Typography className="paragraph" variant="paragraph">
                    Lorem ipsum dolor sit  consectetur  elit. Presenting repudiate, dignissimos eius iste quos impedit a pariatur labore velit nesciunt dicta excepturi adipisci, quae numquam. Fugiat assumenda repellendus inventore. Distinctio nostrum, nobis quas ullam, cum recusandae necessitatibus deserunt similique, at modi consectetur molestias doloribus temporibus dicta aut eaque nihil accusamus quam aperiam doloremque rerum. Nobis deleniti repellat quis ab sed placeat aut officiis eveniet ea libero modi dolor dolores alias aliquam, voluptatum cupiditate quas perspiciatis! Consectetur iure veritatis quaerat obcaecati aspernatur saepe quisquam eveniet nemo tenetur voluptate iste expedita veniam, consequuntur facere minima pariatur ab provident minus illo culpa incidunt.
                </Typography>
            </Box>
        </div>
    )
}

export default AboutUs


