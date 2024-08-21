import { Box } from "@chakra-ui/react"

const ItemListContainer = ({ greeting }) => {
    return (
        <Box
        width={"100vw"}
        height={"90vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"1.5rem"}
        >
            {greeting}
        </Box>
    )
};

export default ItemListContainer;