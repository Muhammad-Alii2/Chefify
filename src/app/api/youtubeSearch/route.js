import { searchYouTube } from "../../utils/yt";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const {searchQuery} = await req.json()
        console.log(searchQuery);
        
        const videoIds = await searchYouTube(searchQuery);
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