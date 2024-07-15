import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Videos, Sidebar } from '../../components';
import { Videos as VideosConstant } from '../../utils/Videos';
import { Images } from '@video-cv/assets';
import { Button } from '@video-cv/ui-components';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <Stack className="flex flex-col">
      <Box
        className="min-h-[230px] px-10 border flex py-10 flex-col gap-1"
        style={{
          backgroundImage: `url(${Images.HeaderBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3 className="font-bold text-[72px] leading-[66px] md:leading-[72px] text-TColor-100 mt-6">
          Search for Job Listings{' '}
        </h3>
        <p className="text-lg text-TColor-100 mt-3">
          Looking for Jobs? Browse our latest job openings to view and apply to
          best jobs today !
        </p>
        <div className="flex items-center gap-6 mt-10">
          {/* <Button label="Post a Job" /> */}
          <p className="">
            Reach <span className="text-TColor-150 font-bold">50K+</span>{' '}
            Individuals
          </p>
        </div>
      </Box>

      <Box py={2} className="px-3 md:px-10">
        <Box className="mt-10">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'black' }}
            className="font-bold text-5xl my-5"
          >
            LATEST VIDEOS
          </Typography>

          <Videos videos={VideosConstant.slice(0, 10)} />
        </Box>
        <Box className="mt-20 ">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'black' }}
            className="font-bold text-5xl my-5"
          >
            VIDEOS
          </Typography>

          <Videos videos={VideosConstant.slice(20, 30)} />
        </Box>
        {/* LAtest jobs section */}
        <Box className="mt-20 w-full md:w-9/12 mx-auto">
          <h2 className="font-bold text-5xl my-5">LATEST JOBS</h2>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((val) => (
              <Paper
                elevation={4}
                // variant="outlined"
                square={false}
                className="bg-white p-4 md:p-10"
                key={val}
              >
                <div className="flex justify-between">
                  <h4 className="font-bold">Job Title</h4>
                  <div className="flex flex-col gap-2">
                    <h5 className="font-bold text-black">
                      <LocationOnIcon
                        sx={{ fontSize: '17px', color: 'gray', mr: '2px' }}
                      />
                      Location
                    </h5>
                    <p className="font-light text-gray-500">
                      Posted 5 mins ago
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dolorem maiores consectetur consequuntur ad recusandae rerum
                  sapiente quam doloribus accusantium aliquam repellat
                  distinctio eum.
                </div>
                <div className="flex justify-end">
                  <Link
                    className="text-base hover:underline"
                    to="/job-board/12345"
                  >
                    Read More...
                  </Link>
                </div>
              </Paper>
            ))}
          </div>
        </Box>

        <Box className="mt-20">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'black' }}
            className="font-bold text-5xl my-5"
          >
            EXPERIENCED PROFESSIONAL
          </Typography>

          <Videos videos={VideosConstant.slice(10, 20)} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
