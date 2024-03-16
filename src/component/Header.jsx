import { Flex } from "@radix-ui/themes";
import CreateStakeComponent from "./CreateStakeComponent";
import useIsChairPerson from "../hooks/useIsChairPerson";

export default function Header() {
    const isChairPerson = useIsChairPerson();
    return (
        <div className="flex justify-between items-center">
            <div>Staking</div>
            <Flex gap={"4"} align={"center"}>
                {<CreateStakeComponent />}
                <w3m-button />
            </Flex>
        </div>
    );
}
