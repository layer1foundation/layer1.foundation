// import { NextRequest, NextResponse } from 'next/server';
// import FormData from 'form-data';

// export async function POST(req: NextRequest) {
//   const formData = new FormData();
//   const { image } = await req.json();
  
//   formData.append('image', Buffer.from(image, 'base64'), 'image.jpg');

//   try {
//     const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
//       method: 'POST',
//       body: formData as unknown as BodyInit,
//       headers: formData.getHeaders(),
//     });

//     if (!response.ok) {
//       return NextResponse.json({ error: `Failed to upload image: ${response.statusText}` }, { status: 500 });
//     }

//     const responseData = await response.json();
//     return NextResponse.json({ url: responseData.data.url });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
