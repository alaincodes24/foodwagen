import Button from "../Button";
import CenterContent from "./CenterContent";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="p-4">

      <CenterContent className="flex justify-between items-center">
        <Image src="/images/logo.png" alt="FoodWagen logo" width={200} height="200" />
        <Button>Add Meal</Button>
      </CenterContent>
    </header>
  )
}

export default Navbar
