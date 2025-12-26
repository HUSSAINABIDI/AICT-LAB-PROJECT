import React from 'react'
import { useEffect, useState } from "react"
import { getAllProducts } from "../Config/firebase";

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Menu = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])
    async function getProducts() {
        const res = await getAllProducts()
        setProducts(res)
    }

    return (
        <div>
            {products.length > 0 ?
                <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>

                    {products.map(item => {
                        const { name, Description, amount, image } = item;
                        return (
                            <Card sx={{ maxWidth: '390px', m: 2 }}>
                                <CardActionArea>
                                    <CardMedia sx={{ minHeight: '400px' }} component={"img"}
                                        src={image}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {name}
                                    </Typography>
                                    <Typography variant="paragraph">
                                        {Description}
                                    </Typography>
                                    <br /><br />
                                    <Typography variant="h6">
                                        {amount}{" RS"}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box> :
                <Typography sx={{ textAlign: "center", m: 2 }} variant='h2'>  No    Menu Add</Typography>}
        </div>
    )
}

export default Menu
