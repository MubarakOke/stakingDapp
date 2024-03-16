import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import GetPoolByID from "./component/GetPoolByIDComponet"
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "./utils";
import { getProvider } from "./constants/providers";
import { getProposalsContract } from "./constants/contracts";
import PoolsComponent from "./component/PoolsComponent";
import useGetAllPools from "./hooks/useGetAllPools";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

configureWeb3Modal();

function App() {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const [pools, setPools] = useState({data: []})
    const [poolId, setPoolId] = useState("");

    const getAllPool = useGetAllPools()

    useEffect(()=>{
        if (!poolId){ setPools((prev) => ({...prev, data: [...getAllPool]}))}
    }, [getAllPool, poolId])

    const displayPools= (pools)=>{
        return pools.map((data, index)=>{
            return (<PoolsComponent key={index} pool={data} poolId={poolId||index} />)
        })
    }

    return (
        <Container>
            <Header />
            <main className="mt-6">
                <div>
                    <GetPoolByID setPools={setPools} poolId={poolId} setPoolId={setPoolId} />
                </div>
                <div>
                    <Text className="my-6" as="p" size="6">Pools</Text>
                </div>
                <Flex wrap={"wrap"} gap={"6"}>
                    {
                        pools.data.length > 0? (displayPools(pools.data)) : ( <Text>Loading...</Text> )
                    }
                </Flex>
            </main>
            <Toaster />
        </Container>
    );
}

export default App;
