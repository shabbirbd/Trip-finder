import { FaCartFlatbedSuitcase, FaSmoking, FaSpa } from "react-icons/fa6";
import { GoKey } from "react-icons/go";
import { IoSnow } from "react-icons/io5";
import { LiaSwimmingPoolSolid, LiaUmbrellaBeachSolid } from "react-icons/lia";
import { LuShowerHead } from "react-icons/lu";
import { PiSuitcaseRollingDuotone, PiTelevisionLight } from "react-icons/pi";
import { RiSuitcaseLine } from "react-icons/ri";



export const amenities = [
    {
        title: "Key",
        icon: <GoKey/>
    },
    {
        title: "Luggage-cart",
        icon: <FaCartFlatbedSuitcase/>
    },
    {
        title: "Shower",
        icon: <LuShowerHead/>
    },
    {
        title: "Smoking",
        icon: <FaSmoking/>
    },
    {
        title: "Snowflake",
        icon: <IoSnow/>
    },
    {
        title: "Spa",
        icon: <FaSpa/>
    },
    {
        title: "Suitcase",
        icon: <RiSuitcaseLine/>
    },
    {
        title: "Suitcase-rolling",
        icon: <PiSuitcaseRollingDuotone/>
    },
    {
        title: "Swimming-pool",
        icon: <LiaSwimmingPoolSolid/>
    },
    {
        title: "TV",
        icon: <PiTelevisionLight/>
    },
    {
        title: "Umbrella-beach",
        icon: <LiaUmbrellaBeachSolid/>
    }
]