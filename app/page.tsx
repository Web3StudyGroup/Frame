import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'RobotDAO1',
    },
    {
      label: 'Settings',
    },
    {
      label: 'Connect',
    },
    {
      label: 'Mint',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/api/image`,
  input: {
    text: 'Tell me a robot story!',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

// export const metadata: Metadata = {
//   title: 'web3.study',
//   description: 'LFG',
//   openGraph: {
//     title: 'web3.study',
//     description: 'LFG',
//     images: [`${NEXT_PUBLIC_URL}/robot.jpg`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eventcaster RSVP test",
    description: "Test event",
    openGraph: {
      title: "Eventcaster RSVP test",
      images: [`${NEXT_PUBLIC_URL}/api/image`],
    },
    other: {
      "fc:frame": "vNext",
      // "fc:frame:image": `${NEXT_PUBLIC_URL}/api/image`,
      "fc:frame:image": `${NEXT_PUBLIC_URL}/bg.jpeg`,
      "fc:frame:button:1": "RobotDAO",
      "fc:frame:button:2": "Settings",
      "fc:frame:button:3": "Connect",
      "fc:frame:button:4": "Mint",
      "fc:frame:post_url": `${NEXT_PUBLIC_URL}/api/frame`,
    },
    metadataBase: new URL(NEXT_PUBLIC_URL ?? ""),
  };
}

export default function Page() {
  return (
    <>
      <h1>Only available in Warpcast. Powered by Blast.</h1>
    </>
  );
}
