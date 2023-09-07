import {
    Container,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";

const Animals = () => {
    const [animals, setAnimals] = React.useState([]);

    const fetchAnimals = async () => {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const data = await response.data;
        console.log(data);

        setAnimals(data);
        return data.message;
    };
    useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <Container maxWidth="sm">
            <ImageList variant="masonry" cols={3} gap={20}>
                {animals.map((item: any) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${item.url}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt="s"
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title="cat"
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about cat`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default Animals;
