import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const LatestBook = () => {
  return (
    <Box
      id="latestBooks"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          width: { sx: 100, sm: 500 },
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyItems: 'center',
          justifyContent: 'center',
          m: '5%',
        }}
      >
        <Box sx={{ width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          <Box
            component={'h2'}
            sx={{
              fontWeight: 300,

              fontSize: {
                lg: '1.2rem',
                md: '2rem',
                xs: '1.2rem',
                color: '#000000',
              },
            }}
          >
            Jason -<br></br> The Guardian of Cygnus
          </Box>
          <Box
            component={'h3'}
            sx={{
              lineHeight: 1.2,
              wordSpacing: '5',
              pt: 2,
              fontSize: {
                lg: '1.2rem',
                md: '1.2rem',
                xs: '.9rem',
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
            }}
          >
            <Box
              sx={{
                width: '100%',

                display: 'flex',
                justifyContent: { xs: 'center', sm: 'left' },
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="contained"
                sx={{ backgroundColor: 'orange', borderRadius: 10, mt: 2 }}
              >
                Read Excerpt
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          backgroundImage: 'url(PR-JasonBook.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: { sm: 350, xs: 340 },

          m: '5%',
        }}
      ></Box>
    </Box>
  );
};

export default LatestBook;
