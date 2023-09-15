import { Box } from '@mui/material';

const MyInstagram = () => {
  return (
    <Box
      id="my Instagram"
      sx={{
        height: { xs: '300', sm: '400' },

        width: '100%',
        m: '1',
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
            xs: '2rem',
          },
          color: '#000000',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          textAlign: 'center',
          fontFamily: 'IBM Plex Sans',
        }}
      >
        My Instagram
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '100%',

          // bgcolor: 'yellow',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            width: { sx: 300, sm: 400 },
            backgroundImage: 'url(Insta-Post1.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'pink',
            height: 340,
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: { sx: 300, sm: 400 },
            backgroundImage: 'url(Insta-Post2.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'White',
            height: 340,
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: { sx: 300, sm: 400 },
            backgroundImage: 'url(Insta-Post3.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'Grey',
            height: 340,
            m: 1,
          }}
        ></Box>
        <Box
          sx={{
            width: { sx: 300, sm: 400 },
            backgroundImage: 'url(Insta-post4.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'Yellow',
            height: 340,
            m: 1,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default MyInstagram;
