interface bebopConfigProps {
  mediaApiKey: string | undefined;
  bookApiKey?: string | undefined;
  musicApiKey?: string | undefined;
}

const bebopConfig: bebopConfigProps = {
  mediaApiKey: process.env.NEXT_PUBLIC_MEDIA_API_KEY,
  bookApiKey: process.env.NEXT_PUBLIC_BOOK_API_KEY,
  musicApiKey: process.env.NEXT_PUBLIC_MUSIC_API_KEY,
};

export default bebopConfig;
