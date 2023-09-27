import { Spacer } from "@nextui-org/spacer";
import SiteList from "@/components/SiteList";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-default-600 w-full">
      <div className="flex flex-col items-center w-full">
        <SiteList />
      </div>
    </div>
  );
}
