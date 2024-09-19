import { getRelatedVideos } from "../../utils/yt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { videoId } = await req.json();
    console.log("Received videoId:", videoId);

    // Fetch related videos using the utility function
    const videoIds = await getRelatedVideos(videoId);
    console.log("Related videoIds:", videoIds);

    // Return the list of videoIds as a JSON response
    return NextResponse.json({
      success: true,
      videoIds,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
