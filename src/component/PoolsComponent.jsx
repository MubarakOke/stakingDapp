import { Box, Card, Flex, Text } from "@radix-ui/themes";
import {ethers} from "ethers"
import StakeComponent from "./StakeComponent";

const PoolsComponent = ({ pool, poolId }) => {

    return (
        <Card size="2" style={{ width: 250 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Text as="div" color="gray">
                        totalStakers: {parseInt(pool[0])}
                    </Text>
                    <Text as="div" color="gray">
                        totalStaked: {ethers.formatUnits(pool[1], 18)} RTK
                    </Text>
                    <Text as="div" color="gray">
                        rewardReserve: {ethers.formatUnits(pool[2], 18)} RTK
                    </Text>
                    <Text as="div" color="gray">
                        rewardRate: {parseInt(pool[3])}
                    </Text>
                        <StakeComponent poolId={poolId}/>
                        <button className="text-white bg-blue-600 py-1 px-4 rounded-md mt-5" >
                            Unstake
                        </button>
                </Box>
            </Flex>
        </Card>
    );
};

export default PoolsComponent;
