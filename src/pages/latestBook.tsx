import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const LatestBook = () => {
  return (
    <Box
      id="latest"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '65%' }}>
          <Box
            component={'h2'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '3rem',
                md: '1.5rem',
                xs: '1rem',
                color: '#000000',
              },
            }}
          >
            Jason - The Guardian of Cygnus
          </Box>
          <Box
            component={'h6'}
            sx={{
              lineHeight: 1.2,
              pt: 6,
              fontSize: {
                lg: '1.25rem',
                md: '1rem',
                xs: '1rem',
                color: '#555555',
              },
              fontWeight: 200,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos standard dummy
          </Box>

          <Box
            sx={{
              width: '100%',
              // height: '15%',
              pt: 5,
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'left',
            }}
          >
            <Box
              sx={{
                width: '65%',
                bgcolor: 'orange',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                p: 1,
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="text"
                color="secondary"
              >
                Read Excerpt
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '50%',
          backgroundImage: 'url(PR-JasonBook.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '70%',
        }}
      ></Box>
    </Box>
  );
};

export default LatestBook;
