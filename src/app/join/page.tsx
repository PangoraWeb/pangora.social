import { Spacer } from "@nextui-org/spacer";
import SiteList from "@/components/SiteList";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-default-600">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Site Selection</h1>
        <h2>What Content do you primarily look at?</h2>
        <Spacer y={5} />
        <SiteList />
      </div>
    </div>
  );
}
