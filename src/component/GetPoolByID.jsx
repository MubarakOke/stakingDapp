import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon} from '@radix-ui/react-icons'
import { useState } from "react";
import useProposals from "../hooks/useProposals";
import Proposal from "./Proposal"

const GetPoolByID = () => {
    const [poolId, setPoolId] = useState(null);

    return (
        <>
            <TextField.Root>
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input 
                    value={rewardRate}
                    onChange={(e) => setRewardRate(e.target.value)} 
                    placeholder="Search the pool…" />
            </TextField.Root>
        </>
    );
};

export default GetPoolByID;
