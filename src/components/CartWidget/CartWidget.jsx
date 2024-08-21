import { Flex, Text } from "@chakra-ui/react"
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
    return(
        <Flex>
            <IoCartOutline size={30} />
            <Text fontSize={"1.5rem"}>0</Text>
        </Flex>
    );
};

export default CartWidget;