const youtubeApiKey = process.env.YOUTUBE_API_KEY;

interface IgetListMusics {
  search?: string;
  nextPageToken?: string;
  itemsPerPage?: number;
}
const getListMusics = async ({
  search,
  nextPageToken,
  itemsPerPage,
}: IgetListMusics) => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&part=snippet&q=${search || ''}&id=${10}&maxResults=${itemsPerPage || 10}&pageToken=${nextPageToken || ''}&type=video&relevanceLanguage=en`;
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

export { getListMusics };
