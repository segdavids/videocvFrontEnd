import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from '../utils/constants';
import { Button } from '@video-cv/ui-components';
import { useCart } from '../context/CartProvider';

const VideoCard = ({ video }: any) => {
  const { url, name, id, imageSrc, price, link = '/video/cV2gBU6hKfY' } = video;
  const { cartState, dispatch } = useCart();

  const handleAddToCart = () => {
    const value = {
      name: name,
      id: id,
      imageSrc: imageSrc,
      price: price,
    };
    dispatch({
      type: 'ADD_TO_CART',
      payload: value,
    });
  };

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: '100%' },
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <Link to={link}>
        <CardMedia
          image={url || demoThumbnailUrl}
          title={'Title'}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {demoVideoTitle.slice(0, 30)}{' '}
            <CheckCircleIcon
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
        {/* <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </Link> */}
        <div className="flex justify-end mt-2">
          <Button onClick={handleAddToCart} label="Add to cart " />
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
