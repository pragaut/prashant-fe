import { Box } from '@mui/material';

const Review = () => {
  return (
    <Box
      id="review"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        mt: '10%',
        backgroundImage: 'url(ReviewImage.png)',
        // backgroundColor: 'yellow',
        // flexDirection: 'column',
      }}
    >
      {/* <Box>Latest Articles</Box>
        <Box></Box> */}

      <Box
        sx={{
          width: '20%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: '2em',
          boxShadow: '0 0 2em rgba(0, 0, 0, .2em)',
          margin: '0 2em',
        }}
      >
        <Box
          component={'h2'}
          width={'70%'}
          sx={{
            fontWeight: 500,

            fontSize: {
              lg: '1.5rem',
              md: '.7rem',
              xs: '0.5rem',
              color: 'black',
            },
            textAlign: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            lineHeight: '3rem',
            // mt: '-6%',
            // ml: '3%',
          }}
        >
          Mark
          <Box
            component={'h2'}
            width={'100%'}
            sx={{
              fontWeight: 500,

              fontSize: {
                lg: '1rem',
                md: '.7rem',
                xs: '0.5rem',
                color: 'black',
              },

              lineHeight: '3rem',
              // mt: '-6%',
              // ml: '3%',
            }}
          >
            Actress & TV Host
            <Box
              component={'h2'}
              width={'100%'}
              sx={{
                fontWeight: 500,
                wordSpacing: 0.8,
                fontSize: {
                  lg: '.8rem',
                  md: '.7rem',
                  xs: '0.5rem',
                  color: 'black',
                },

                lineHeight: '1rem',

                // mt: '-6%',
                // ml: '3%',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos standard dummy
              text ever . Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '30%',
          height: '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'yellow',
          borderRadius: '2em',
          boxShadow: '0 0 2em rgba(0, 0, 0, .2em)',
          margin: '0 2em',
        }}
      >
        <Box
          component={'h2'}
          width={'80%'}
          sx={{
            fontWeight: 500,

            fontSize: {
              lg: '1.5rem',
              md: '.7rem',
              xs: '0.5rem',
              color: 'black',
            },
            textAlign: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            lineHeight: '3rem',
            // mt: '-6%',
            // ml: '3%',
          }}
        >
          Olive Yew
          <Box
            component={'h2'}
            width={'100%'}
            sx={{
              fontWeight: 500,

              fontSize: {
                lg: '1rem',
                md: '.7rem',
                xs: '0.5rem',
                color: 'black',
              },

              lineHeight: '3rem',
              // mt: '-6%',
              // ml: '3%',
            }}
          >
            Actress & TV Host
            <Box
              component={'h2'}
              width={'100%'}
              sx={{
                fontWeight: 500,
                wordSpacing: 0.8,
                fontSize: {
                  lg: '.8rem',
                  md: '.7rem',
                  xs: '0.5rem',
                  color: 'black',
                },

                lineHeight: '1rem',

                // mt: '-6%',
                // ml: '3%',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos standard dummy
              text ever . Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '20%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: '2em',
          boxShadow: '0 0 2em rgba(0, 0, 0, .2em)',
          margin: '0 2em',
        }}
      >
        <Box
          component={'h2'}
          width={'70%'}
          sx={{
            fontWeight: 500,

            fontSize: {
              lg: '1.5rem',
              md: '.7rem',
              xs: '0.5rem',
              color: 'black',
            },
            textAlign: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            lineHeight: '3rem',
            // mt: '-6%',
            // ml: '3%',
          }}
        >
          Alex
          <Box
            component={'h2'}
            width={'100%'}
            sx={{
              fontWeight: 500,

              fontSize: {
                lg: '1rem',
                md: '.7rem',
                xs: '0.5rem',
                color: 'black',
              },

              lineHeight: '3rem',
              // mt: '-6%',
              // ml: '3%',
            }}
          >
            Actress & TV Host
            <Box
              component={'h2'}
              width={'100%'}
              sx={{
                fontWeight: 500,
                wordSpacing: 0.8,
                fontSize: {
                  lg: '.8rem',
                  md: '.7rem',
                  xs: '0.5rem',
                  color: 'black',
                },

                lineHeight: '1rem',

                // mt: '-6%',
                // ml: '3%',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos standard dummy
              text ever . Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
