import { getRelatedVideos } from "../../utils/yt";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const {videoId} = await req.json()
        console.log(videoId);
        
        const videoIds = await getRelatedVideos(videoId);
        console.log(videoIds);

        return NextResponse.json({
        success: true,
        videoIds
        });
    } catch (error) {
      return NextResponse.json(
        console.log(error),
        {
          success: false,
          error: error,
        },
        { status: 500 }
      );
    }
  }