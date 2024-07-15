import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from '.';

// TODO: Rename component
const Videos = ({ videos }: any) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {videos.map((item: any, idx: number) => (
        <Box key={idx}>{item.url && <VideoCard video={item} />}</Box>
      ))}
    </div>
  );
};

export default Videos;
