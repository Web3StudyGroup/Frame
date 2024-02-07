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
  image: `${NEXT_PUBLIC_URL}/robot.jpg`,
  input: {
    text: 'Tell me a robot story!',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'web3.study',
  description: 'LFG',
  openGraph: {
    title: 'web3.study',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/robot.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Only available in Warpcast. Powered by Blast.</h1>
    </>
  );
}
