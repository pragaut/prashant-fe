import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const Podcasts = () => {
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
        // backgroundColor: 'yellow',
        // flexDirection: 'column',
      }}
    >
      {/* <Box>Latest Articles</Box>
        <Box></Box> */}

      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          //   justifyItems: 'center',
          flexDirection: 'row',
          // backgroundColor: 'yellow',
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
            backgroundColor: '#EFEFEF',
          }}
        >
          <Box
            sx={{
              width: '85%',
              height: '45%',
              // backgroundImage: 'url(LatestArticle-Image1.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              justifyItems: 'center',
              backgroundColor: 'black',
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
                md: '1.2rem',
                xs: '0.6rem',
              },
              color: '#000000',

              lineHeight: '3rem',
            }}
          >
            The Zeitgeist Audio...
          </Box>
          <Box
            component={'h6'}
            width={'80%'}
            sx={{
              lineHeight: '1rem',
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
            Prashant Rana
          </Box>
          <Box
            component={'h6'}
            width={'80%'}
            sx={{
              lineHeight: '1.5rem',
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
              pt: 3,
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'left',
            }}
          >
            <Box
              sx={{
                width: '90%',
                bgcolor: 'orange',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 15,
                p: 1,
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="text"
                color="secondary"
              >
                The Latest Episode
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: '50%',
            bgcolor: '#E3E3E3',
            pl: '2%',
            pt: '6%',
          }}
        >
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '2rem',
            }}
          >
            Today . 28min
          </Box>
          <Box
            component={'h6'}
            width={'80%'}
            sx={{
              lineHeight: 1.2,
              pt: 1,

              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            _____________________________
          </Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '2rem',
            }}
          >
            Today . 28min
          </Box>
          <Box
            component={'h6'}
            width={'80%'}
            sx={{
              lineHeight: 1.2,
              pt: 1,

              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            _____________________________
          </Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '2rem',
            }}
          >
            Today . 28min
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            _____________________________
          </Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '2rem',
            }}
          >
            Today . 28min
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            _____________________________
          </Box>
          {/* <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '2rem',
            }}
          >
            Today . 28min
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
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
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            _____________________________
          </Box> */}
          <Box
            component={'h6'}
            width={'80%'}
            sx={{
              lineHeight: 3,
              pt: 2,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#000000',
              },
              fontWeight: 100,
            }}
          >
            See More Episodes
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
          // backgroundColor: '#EFEFEF',
        }}
      >
        <Box
          sx={{
            width: '85%',
            height: '35%',
            alignItems: 'center',
            display: 'flex',
            // justifyContent: 'center',
            // justifyItems: 'center',
            // flexDirection: 'column',
            backgroundColor: '#EFEFEF',
            ml: '10%',
          }}
        >
          <Box
            sx={{
              width: '40%',
              height: '80%',
              // backgroundImage: 'url(LatestArticle-Image1.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              justifyItems: 'center',
              backgroundColor: 'black',
              ml: '3%',
            }}
          ></Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
              },
              color: '#818285',
              lineHeight: '2rem',
              mt: '.8%',
              ml: '3%',
            }}
          >
            12 May 2023
            <Box
              component={'h6'}
              width={'80%'}
              sx={{
                lineHeight: 1,
                pt: 1,

                fontSize: {
                  lg: '1rem',
                  md: '1rem',
                  xs: '0.5rem',
                },
                color: '#000000',
                fontWeight: 100,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing
            </Box>
            <Box
              component={'h6'}
              width={'80%'}
              sx={{
                pt: 1,
                fontSize: {
                  lg: '1rem',
                  md: '1rem',
                  xs: '0.5rem',
                },
                color: '#555555',
                fontWeight: 300,
              }}
            >
              Prashant Rana
            </Box>
            <Box
              sx={{
                width: '70%',
                // height: '15%',

                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  bgcolor: 'orange',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  // pt: '2',
                }}
              >
                <ButtonTemplate
                  buttonType="normal"
                  variant="text"
                  color="secondary"
                >
                  Play
                </ButtonTemplate>
              </Box>
              <Box
                component={'h6'}
                width={'100%'}
                sx={{
                  pl: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: {
                    lg: '1rem',
                    md: '1rem',
                    xs: '0.5rem',
                    color: '#000000',
                  },

                  textAlign: 'center',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  fontWeight: 200,
                }}
              >
                See More
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: '85%',
            height: '35%',
            alignItems: 'center',
            display: 'flex',
            // justifyContent: 'center',
            // justifyItems: 'center',
            // flexDirection: 'column',
            backgroundColor: '#EFEFEF',
            ml: '10%',
            mt: '5%',
          }}
        >
          <Box
            sx={{
              width: '40%',
              height: '80%',
              // backgroundImage: 'url(LatestArticle-Image1.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              justifyItems: 'center',
              backgroundColor: 'black',
              ml: '3%',
            }}
          ></Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '1rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '1rem',

              mt: '.8%',
              ml: '3%',
            }}
          >
            12 May 2023
            <Box
              component={'h6'}
              width={'80%'}
              sx={{
                lineHeight: 1.2,
                pt: 1,
                fontSize: {
                  lg: '1rem',
                  md: '1rem',
                  xs: '0.5rem',
                  color: '#000000',
                },
                fontWeight: 100,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing
            </Box>
            <Box
              component={'h6'}
              width={'80%'}
              sx={{
                lineHeight: 1.2,
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
              Prashant Rana
            </Box>
            <Box
              sx={{
                width: '70%',
                // height: '15%',
                pt: 1,
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
              }}
            >
              <Box
                sx={{
                  width: '100%',
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
                  Play
                </ButtonTemplate>
              </Box>
              <Box
                component={'h6'}
                width={'80%'}
                sx={{
                  lineHeight: 1.4,
                  // pt: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: {
                    lg: '1rem',
                    md: '1rem',
                    xs: '0.5rem',
                    color: '#000000',
                  },
                  // ml: '12%',
                  textAlign: 'center',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  fontWeight: 100,
                }}
              >
                See More
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '85%',
            height: '35%',
            alignItems: 'center',
            display: 'flex',
            // justifyContent: 'center',
            // justifyItems: 'center',
            // flexDirection: 'column',
            backgroundColor: '#EFEFEF',
            ml: '10%',
            mt: '5%',
          }}
        >
          <Box
            sx={{
              width: '40%',
              height: '80%',
              // backgroundImage: 'url(LatestArticle-Image1.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              justifyItems: 'center',
              backgroundColor: 'black',
              ml: '3%',
            }}
          ></Box>
          <Box
            component={'h2'}
            width={'80%'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,
              fontSize: {
                lg: '1rem',
                md: '.7rem',
                xs: '0.5rem',
                color: '#818285',
              },
              lineHeight: '3rem',
              mt: '-6%',
              ml: '3%',
            }}
          >
            12 May 2023
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
                  color: '#000000',
                },
                fontWeight: 100,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing
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
              Prashant Rana
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
                  width: '60%',
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
                  Play
                </ButtonTemplate>
              </Box>
              <Box
                component={'h6'}
                width={'80%'}
                sx={{
                  lineHeight: 1.4,
                  // pt: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: {
                    lg: '1rem',
                    md: '1rem',
                    xs: '0.5rem',
                    color: '#000000',
                  },
                  // ml: '12%',
                  textAlign: 'center',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  fontWeight: 100,
                }}
              >
                See More
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Podcasts;
