import { Box } from '@mui/material';
import { constants } from '../../../../utils/constants';
import ButtonTemplate from '../../../ui/button/ButtonTemplate';
import SideNavLayout from '../sidenav/SideNavLayout';

const Footer = () => {
  const common: Array<constants['listItems']> = [
    {
      id: 'cli-1',
      text: 'Upcoming',
      hasDivider: false,
      url: '',
    },
    {
      id: 'cli-2',
      text: 'News & Events',
      hasDivider: false,
      url: 'books',
    },
    {
      id: 'cli-3',
      text: 'Terms of Use',
      hasDivider: false,
      url: 'stories',
    },

    {
      id: 'cli-4',
      text: 'Privacy policy',
      hasDivider: false,
      url: 'poems',
    },
  ];

  let listItems: Array<constants['listItems']> = [
    ...common,
    // ...masters,
    // ...supervisor,
    // ...user,
  ];
  return (
    <Box
      id="footer"
      sx={{
        height: { xs: '20rem', md: '100vh' },
        display: 'flex',
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // justifyItems: 'center',
        // flexDirection: 'column',
        backgroundColor: 'black',
        // flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '25%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          justifyItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '80%',
            backgroundImage: 'url(PrashantRanalogo.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'pink',
            height: '10%',
            // display: 'flex',
          }}
        ></Box>

        <Box
          component={'h4'}
          width={'80%'}
          sx={{
            fontWeight: 200,
            wordSpacing: 1,
            fontSize: {
              lg: '1rem',
              md: '0.8rem',
              xs: '0.6rem',
              color: 'white',
            },
            // mt: '-9%',
            lineHeight: '2rem',
          }}
        >
          © Prashant Rana 2023
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',

          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          justifyItems: 'center',
          // backgroundColor: 'yellow',
        }}
      >
        <Box sx={{ width: '60%', height: '50vh', ml: '20%' }}>
          <SideNavLayout direction={'column'} justifyContent={'left'} />
        </Box>

        <Box
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            // bgcolor: 'Pink',
            height: '50vh',
          }}
        >
          {listItems.map((listItems: any) => (
            <ButtonTemplate
              key={listItems.id}
              buttonType={'normal'}
              variant="text"
              color="info"
              size="large"
              // width={}
              justifyContent={'left'}
            >
              {listItems.text}
            </ButtonTemplate>
          ))}
        </Box>
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            // backgroundColor: 'red',
            flexDirection: 'column',
            height: '50vh',
          }}
        >
          <Box
            component={'h4'}
            width={'100%'}
            sx={{
              fontWeight: 200,
              wordSpacing: 1,
              fontSize: {
                lg: '1.5rem',
                md: '0.8rem',
                xs: '0.6rem',
                // color: 'white',
              },

              lineHeight: '2rem',
            }}
          >
            Follow Us On
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '60%',
              height: '50%',
              // bgcolor: 'white',
            }}
          >
            <Box
              sx={{
                width: '5%',
                backgroundImage: 'url(Facebook-icon.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // mt: '5%',
                m: '.6rem',

                // backgroundColor: 'pink',
                height: '19%',
                // display: 'flex',
              }}
            ></Box>
            <Box
              sx={{
                width: '8%',
                backgroundImage: 'url(Linkedin-icon.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // mt: '5%',
                m: '.6rem',

                // backgroundColor: 'pink',
                height: '20%',
                // display: 'flex',
              }}
            ></Box>
            <Box
              sx={{
                width: '10%',
                backgroundImage: 'url(Twitter-icon.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // backgroundColor: 'pink',
                height: '20%',
                // mt: '5%',
                m: '.6rem',

                // display: 'flex',
              }}
            ></Box>
            <Box
              sx={{
                width: '8%',
                backgroundImage: 'url(Instagram-icon.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

                height: '20%',

                // mt: '5%',
                m: '.6rem',
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
