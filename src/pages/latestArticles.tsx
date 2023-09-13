import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const LatestArticle = () => {
  return (
    <Box
      id="article"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        mt: '10%',
        backgroundColor: '#EFEFEF',
        // flexDirection: 'column',
      }}
    >
      {/* <Box>Latest Articles</Box>
      <Box></Box> */}

      <Box
        sx={{
          width: '33.3%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '50%',
            backgroundImage: 'url(LatestArticle-Image1.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            justifyItems: 'center',
            // backgroundColor: 'pink',
          }}
        ></Box>
        <Box
          component={'h2'}
          width={'80%'}
          sx={{
            fontWeight: 300,
            wordSpacing: 5,
            fontSize: {
              lg: '1.5rem',
              md: '1.4rem',
              xs: '0.6rem',
              color: '#000000',
            },
            lineHeight: '1.4rem',
          }}
        >
          Lorem Ipsum is simply dummy text and typesetting industry.
        </Box>

        <Box
          component={'h6'}
          width={'80%'}
          sx={{
            lineHeight: 1.6,
            pt: 1,
            fontSize: {
              lg: '1rem',
              md: '1rem',
              xs: '0.5rem',
            },
            color: '#555555',
            fontWeight: 100,
          }}
        >
          Cras mattis iudicium purus sit amet fermentum at nos hinc posthac,
        </Box>
        <Box
          sx={{
            width: '80%',
            // height: '15%',
            pt: 2,
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
          }}
        >
          <Box
            sx={{
              width: '50%',
              bgcolor: 'orange',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              md: '1.4rem',
              p: 1,
            }}
          >
            <ButtonTemplate
              buttonType="normal"
              variant="text"
              color="secondary"
            >
              Read More
            </ButtonTemplate>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '33.3%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '50%',
            backgroundImage: 'url(LatestArticle-Image2.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            justifyItems: 'center',
            // backgroundColor: 'pink',
          }}
        ></Box>
        <Box
          component={'h2'}
          width={'80%'}
          sx={{
            fontWeight: 300,
            wordSpacing: 5,
            fontSize: {
              lg: '1.5rem',
              md: '1rem',
              xs: '0.6rem',
              color: '#000000',
            },
            lineHeight: '1.6rem',
          }}
        >
          Lorem Ipsum is simply dummy text and typesetting industry.
        </Box>

        <Box
          component={'h6'}
          width={'80%'}
          sx={{
            lineHeight: 1.4,
            pt: 1,
            fontSize: {
              lg: '1rem',
              md: '1rem',
              xs: '0.5rem',
              color: '#555555',
            },
            fontWeight: 100,
          }}
        >
          Cras mattis iudicium purus sit amet fermentum at nos hinc posthac,
        </Box>
        <Box
          sx={{
            width: '80%',
            // height: '15%',
            pt: 2,
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
          }}
        >
          <Box
            sx={{
              width: '50%',
              bgcolor: 'orange',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              md: '1.4rem',
              p: 1,
            }}
          >
            <ButtonTemplate
              buttonType="normal"
              variant="text"
              color="secondary"
            >
              Read More
            </ButtonTemplate>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '33.3%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '50%',
            backgroundImage: 'url(LatestArticle-Image3.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            justifyItems: 'center',
            // backgroundColor: 'pink',
          }}
        ></Box>
        <Box
          component={'h2'}
          width={'80%'}
          sx={{
            fontWeight: 300,
            wordSpacing: 5,
            fontSize: {
              lg: '1.5rem',
              md: '1rem',
              xs: '0.6rem',
              color: '#000000',
            },
            lineHeight: '1.6rem',
          }}
        >
          Lorem Ipsum is simply dummy text and typesetting industry.
        </Box>

        <Box
          component={'h6'}
          width={'80%'}
          sx={{
            lineHeight: 1.4,
            pt: 1,
            fontSize: {
              lg: '1rem',
              md: '1rem',
              xs: '0.5rem',
              color: '#555555',
            },
            fontWeight: 100,
          }}
        >
          Cras mattis iudicium purus sit amet fermentum at nos hinc posthac,
        </Box>
        <Box
          sx={{
            width: '80%',
            // height: '15%',
            pt: 2,
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
          }}
        >
          <Box
            sx={{
              md: '1rem',
              width: '50%',
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
              Read More
            </ButtonTemplate>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestArticle;
