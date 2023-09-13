import { Box } from '@mui/material';

const MyInstagram = () => {
  return (
    <Box
      id="my Instagram"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        // backgroundColor: 'red',
      }}
    >
      <Box
        component={'h1'}
        width={'100%'}
        textAlign={'center'}
        sx={{
          fontWeight: 300,
          wordSpacing: 5,
          fontSize: {
            lg: '4rem',
            md: '3rem',
            xs: '0.6rem',
          },
          color: '#000000',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          fontFamily: 'IBM Plex Sans',
          // ml: '35%',
          // mt: '-35%',
        }}
      >
        My Instagram
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '70%',
          // bgcolor: 'yellow',
        }}
      >
        <Box
          sx={{
            width: '25%',
            backgroundImage: 'url(Insta-Post1.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'pink',
            height: '100%',
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: '25%',
            backgroundImage: 'url(Insta-Post2.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'White',
            height: '100%',
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: '25%',
            backgroundImage: 'url(Insta-Post3.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'Grey',
            height: '100%',
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: '25%',
            backgroundImage: 'url(Insta-post4.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'Yellow',
            height: '100%',
            m: 1,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default MyInstagram;
