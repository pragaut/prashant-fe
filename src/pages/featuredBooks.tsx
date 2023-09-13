import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const FeaturedBooks = () => {
  return (
    <Box
      id="latest"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        backgroundColor: '#EFEFEF',
        // justifyContent: 'center',
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
        Featured Books
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '65%',
          // bgcolor: 'yellow',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
            // bgcolor: 'blue',
          }}
        >
          <Box
            sx={{
              width: '100%',
              backgroundImage: 'url(PR-ZeitGeist.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '55%',
              // bgcolor: 'yellow',
            }}
          ></Box>
          <Box
            sx={{
              width: '100%',
              height: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              flexDirection: 'column',
              // bgcolor: 'red',
            }}
          >
            <Box
              component={'h6'}
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                width: '100%',
                pt: 15,
                textAlign: 'center',
              }}
            >
              The Zeitgeist
            </Box>
            <Box
              component={'h6'}
              sx={{
                fontSizemd: '.8rem',
                fontWeight: 200,
                width: '50%',
                textAlign: 'center',
                pb: 2,
              }}
            >
              Cras mattis iudicium purus sit amet fermentum at nos hinc posthac,
            </Box>
            <Box
              sx={{
                width: '35%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                bgcolor: 'orange',
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="text"
                color="secondary"
              >
                Buy the book
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
            // bgcolor: 'pink',
          }}
        >
          <Box
            sx={{
              width: '100%',
              backgroundImage: 'url(PR-JasonBook.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '55%',
              // bgcolor: 'orange',
            }}
          ></Box>
          <Box
            sx={{
              width: '100%',
              height: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              flexDirection: 'column',
              // bgcolor: 'black',
            }}
          >
            <Box
              component={'h6'}
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                width: '100%',
                pt: 15,
                textAlign: 'center',
              }}
            >
              Jason - The Guardian of Cygnus
            </Box>
            <Box
              component={'h6'}
              sx={{
                fontSize: '0.8rem',
                fontWeight: 200,
                width: '50%',
                textAlign: 'center',
                pb: 2,
              }}
            >
              Cras mattis iudicium purus sit amet fermentum at nos hinc posthac,
            </Box>
            <Box
              sx={{
                width: '35%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                bgcolor: 'orange',
                // p: 1,
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="text"
                color="secondary"
              >
                Buy the book
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedBooks;
