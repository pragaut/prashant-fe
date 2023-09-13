import { Box } from '@mui/material';

const VideoSlider = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(PR-image1.png)',
        height: { xs: '20rem', md: '100vh' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        width: '100%',
        alignItems: 'center',
      }}
    ></Box>
  );
};

export default VideoSlider;
