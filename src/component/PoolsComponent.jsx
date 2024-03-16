import { Box, Card, Flex, Text } from "@radix-ui/themes";
import {ethers} from "ethers"
import StakeComponent from "./StakeComponent";
import UnstakeComponent from "./UnstakeComponent";
import useGetStakeBalance from "../hooks/useGetStakeBalance";
import ClaimRewardComponent from "./ClaimRewardComponent";



const PoolsComponent = ({ pool, poolId }) => {
    const stakeBalance= useGetStakeBalance(poolId)
    return (
        <Card size="2" style={{ width: 300 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Text as="div" color="gray">
                        totalStakers: {parseInt(pool[0])}
                    </Text>
                    <Text as="div" color="gray">
                        totalStaked: {ethers.formatUnits(pool[1], 18)} RTK
                    </Text>
                    <Text as="div" color="gray">
                        rewardReserve: {parseInt(ethers.formatUnits(pool[2], 18))} RTK
                    </Text>
                    <Text as="div" color="gray">
                        rewardRate: {parseInt(pool[3])}
                    </Text>
                    {stakeBalance? <ClaimRewardComponent poolId={poolId} /> : <StakeComponent poolId={poolId}/>}
                    <UnstakeComponent poolId={poolId} />
                    {stakeBalance? <div className="mt-3">
                        Balance: {parseInt(ethers.formatUnits(stakeBalance, 18))} RTK
                    </div>: ""
                    }
                </Box>
            </Flex>
        </Card>
    );
};

export default PoolsComponent;
