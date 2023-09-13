import { Box } from '@mui/material';

const Slider = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(Slider-Image.png)',
        height: { xs: '20rem', md: '100vh' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        pt: 10,
      }}
    >
      <Box sx={{ width: '60%', ml: 1 }}>
        <Box
          component={'h1'}
          sx={{
            fontSize: {
              lg: '14rem',
              md: '9rem',
              xs: '3.5rem',
              lineHeight: '1',
            },
          }}
        >
          PRASHANT RANA
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: 'url(PRStandingPose.png)',
          width: '40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
        }}
      ></Box>
    </Box>
    // <Box sx={{ position: 'relative' }}>
    //   <CardMedia
    //     component="img"
    //     sx={{
    //       width: '100%',
    //       height: '710px',
    //     }}
    //     image="Slider-Image.png"
    //   />
    //   <Box
    //     sx={{
    //       transform: 'translateY(-500%)',
    //       //   bgcolor: 'white',
    //       position: 'absolute',
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         fontSize: '196px',
    //         fontWeight: 600,
    //         height: '100px',
    //         width: '200px',
    //         lineHeight: '180px',
    //         color: '#818285',
    //       }}
    //     >
    //       {' '}
    //       PRASHANT RANA
    //       <Box sx={{}}>
    //         <Box
    //           component="img"
    //           sx={{
    //             display: 'flex',
    //             width: '756px',
    //             height: '647px',
    //             marginLeft: '400%',
    //             marginTop: '-507px',
    //             content: `url('PRStandingPose.png')`,
    //           }}
    //         />
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Slider;
