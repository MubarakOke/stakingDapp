import { ethers } from "ethers";
import Abi from "./abi.json";
import AbiStaking from "./abiStaking.json";
import AbiERC20 from "./abiERC20.json"

export const getProposalsContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_ballot_contract_address,
        Abi,
        providerOrSigner
    );

export const getStakingContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_staking_contract_address,
        AbiStaking,
        providerOrSigner
    );

export const getERC20RewardContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_erc20_reward_contract_address,
        AbiERC20,
        providerOrSigner
    );

export const getERC20StakingContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_erc20_staking_contract_address,
        AbiERC20,
        providerOrSigner
    );
