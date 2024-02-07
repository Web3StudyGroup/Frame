import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<Response> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';
  const apiSecret = process.env.KEY;
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.input) {
    text = message.input;
  }

  // if (message?.button === 2) {
  //   return NextResponse.redirect(
  //     'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
  //     { status: 302 },
  //   );
  // }

  const svgText = `
            <svg width="${100}" height="${50}">
                <style>
                    .title { fill: #fff; font-size: ${10}px; font-family: Arial; }
                </style>
                <rect width="100%" height="100%" fill="#333" />
                <text x="50%" y="50%" class="title" dominant-baseline="middle" text-anchor="middle">${text}</text>
            </svg>
        `;

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `🌲 Text: ${text}, isValid:${isValid}, by ${accountAddress}, liked:${message?.liked}`,
        },
      ],
      // image: `${NEXT_PUBLIC_URL}/robot.jpg`,
      image:svgText,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
