interface bebopConfigProps {
  mediaApiKey: string | undefined;
}

const bebopConfig: bebopConfigProps = {
  mediaApiKey: process.env.NEXT_PUBLIC_MEDIA_API_KEY,
};

export default bebopConfig;
