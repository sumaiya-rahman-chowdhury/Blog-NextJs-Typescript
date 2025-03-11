import Slider from "@/components/ui/slide";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col gap-8 items-center sm:items-start
   space-y-10 z-0
    "
    >
      <Box 
      maxW={["100%", "90%", "80%", "1200px"]} 
      margin="auto" 
      h="100vh"
      >
        <Slider />
      </Box>
    </main>
  );
}
