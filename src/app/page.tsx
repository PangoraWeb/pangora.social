import ConstellationParticles from "@/components/ConstellationParticles";
import MovingBackground from "@/components/MovingBackground";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import MessagesIcon from "@/icons/MessagesIcon";
import PHexagonIcon from "@/icons/PHexagonIcon";
import InfoCircleIcon from "@/icons/InfoCircleIcon";
import NextLink from "next/link";
import CodeIcon from "@/icons/CodeIcon";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-7 text-center">
          <div className="flex gap-3 items-center">
            <PHexagonIcon width={32} />
            <h1 className="text-4xl">Pangora</h1>
          </div>
          <h2>A fediverse compatible forum and link aggregator.</h2>

          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              as={NextLink}
              href="/join"
              variant="bordered"
              startContent={
                <div className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-blue-500">
                  <MessagesIcon />
                </div>
              }
              className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
            >
              <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-blue-500">
                Start Chatting
              </p>
            </Button>
            <Button
              as={NextLink}
              href="#info"
              variant="bordered"
              startContent={
                <div className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-blue-500">
                  <InfoCircleIcon />
                </div>
              }
              className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
            >
              <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-blue-500">
                More Info
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-col gap-3">
          <Card isBlurred>
            <CardBody>
              <div className="flex gap-3">
                <InfoCircleIcon width={32} />
                <h2 id="info" className="text-3xl">
                  General Info
                </h2>
              </div>
              <p className="text-default-500">
                Pangora is a decentralized forum and link aggregator that is
                completely free and open, and not controlled by any company.
                Different sites that use pangora are each hosted by different
                people but users on one site are still capable of seeing content
                on other pangora sites (as well as other sites on the
                activitypub protocol such as Lemmy, Kbin, and Mastodon).
              </p>
            </CardBody>
          </Card>
          <Card isBlurred>
            <CardBody>
              <div className="flex gap-3">
                <CodeIcon width={32} />
                <h2 id="open-source" className="text-3xl">
                  Open Source
                </h2>
              </div>
              <p className="text-default-500">
                Pangora is open source with the main repositories under a
                copyleft AGPL-3.0 license. You can find all of the related
                repositories{" "}
                <a
                  href="https://github.com/PangoraWeb"
                  className="text-blue-500"
                >
                  here
                </a>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Spacer y={10} />
    </div>
  );
}
