import { Box } from '@mui/material';
import ButtonTemplate from '../components/ui/button/ButtonTemplate';

const AboutMe = () => {
  return (
    <Box
      id="about"
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
          width: '100%',
          backgroundImage: 'url(PR-SittingPose.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'backgroundPosition',
          height: { sm: 500, xs: 340 },
        }}
      ></Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyItems: 'center',
          justifyContent: 'center',
          minHeight: 340,
          ml: 5,
        }}
      >
        <Box sx={{ width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          <Box
            component={'h1'}
            sx={{
              fontWeight: 300,
              wordSpacing: 5,

              fontSize: {
                lg: '2.5rem',
                md: '1.5rem',
                xs: '1rem',
                color: '#000000',
              },
            }}
          >
            Hi, Everyone!
            <br></br>My Name is Prashant Rana
          </Box>
          <Box
            component={'h2'}
            sx={{
              lineHeight: 1.4,
              pt: 1,

              fontSize: {
                lg: '1.2rem',
                md: '1rem',
                xs: '.7rem',
                color: '#555555',
              },
              fontWeight: 200,
            }}
          >
            A tumultuous journey starts with a tumultuous mind. It took Prashant
            Rana - coordinator of thoughts - five years to complete the book.
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
          >
            {/* <Link
              href="#"
              underline="none"
              color="black"
              fontWeight={500}
              sx={{
                p: 2,
                borderRadius: 15,
                bgcolor: 'orange',
                width: '20%',
                textAlign: 'center',
              }}
            >
              View All
            </Link> */}
            <Box
              sx={{
                width: '100%',
                // bgcolor: 'orange',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'left' },
                // pt: -15,
              }}
            >
              <ButtonTemplate
                buttonType="normal"
                variant="contained"
                sx={{ backgroundColor: 'orange', borderRadius: 10, mt: 2 }}
              >
                View All
              </ButtonTemplate>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

//     <Box sx={{ position: 'relative', display: 'flex' }}>
//       <CardMedia
//         component="img"
//         sx={{
//           width: '736px',
//           height: '600px',
//           marginTop: '3%',
//         }}
//         image="PR-SittingPose.png"
//       />
//       <Box
//         sx={{
//           fontSize: '36px',
//           fontWeight: '400px',
//           width: '566px',
//           height: '112px',
//           color: '#000000',
//           marginTop: '15%',
//         }}
//       >
//         {''}
//         Hi, Everyone! My Name Is Prashant Rana
//       </Box>
//     </Box>
//   );
// };

export default AboutMe;
