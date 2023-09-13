import { Box } from '@mui/material';
import { constants } from '../../../../utils/constants';
import SideNavLayout from '../sidenav/SideNavLayout';

const HeaderLayout = () => {
  const common: Array<constants['listItems']> = [
    {
      id: 'cli-1',
      text: 'About Me',
      hasDivider: false,
      url: 'aboutMe',
    },
    {
      id: 'cli-2',
      text: 'Books',
      hasDivider: false,
      url: 'books',
    },
    {
      id: 'cli-3',
      text: 'Stories',
      hasDivider: false,
      url: 'stories',
    },
    {
      id: 'cli-4',
      text: 'Random Thoughts',
      hasDivider: false,
      url: 'randomThoughts',
    },
    {
      id: 'cli-5',
      text: 'Poems',
      hasDivider: false,
      url: 'poems',
    },
    {
      id: 'cli-6',
      text: 'Character',
      hasDivider: false,
      url: 'character',
    },
    {
      id: 'cli-7',
      text: 'Contacts',
      hasDivider: false,
      url: 'contact',
    },
  ];

  let listItems: Array<constants['listItems']> = [
    ...common,
    // ...masters,
    // ...supervisor,
    // ...user,
  ];

  return (
    // <div>
    //
    // </div>

    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        zIndex: 10,
        width: '100%',
      }}
    >
      <Box sx={{ width: '20%' }}>
        <Box
          component="img"
          sx={{
            width: '300px',
            height: '47.73px',
            content: `url('PrashantRanalogo.svg')`,
          }}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        {/* <ListTemplate
          listType={'clickable'}
          listItems={listItems}
          listDirection="row"
        /> */}
        <SideNavLayout direction={'row'} justifyContent={'center'} />
      </Box>
    </Box>
  );
};
export default HeaderLayout;
