export async function searchYouTube(searchQuery) {
    searchQuery = searchQuery.replaceAll(" ", "+");
    console.count("youtube search");
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${searchQuery}&videoEmbeddable=true&type=video&maxResults=2`,
      {
        method: "GET",
      }
    );
    console.log(response.status);
    const json = await response.json();
    if (!json) {
      console.log("youtube fail");
      return null;
    }
    if (json.items[0] == undefined) {
      console.log("youtube fail");
      return null;
    }
    const videoIds = json.items.map(item => item.id.videoId);

    return videoIds;
  }

export async function getRelatedVideos(videoId) {
    const url = `https://youtube-v31.p.rapidapi.com/search?&videoEmbeddable=true&relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const videoIds = result.items.map(item => item.id.videoId);
        return videoIds
    } catch (error) {
        console.error(error);
        return null
    }
}