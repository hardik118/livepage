import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });


export const FirstSubHeading=()=>{
    return(
        <h1 className={`${josefin.className}`}>th</h1>
    )

}
