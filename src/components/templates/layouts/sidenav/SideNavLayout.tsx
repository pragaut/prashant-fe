import Box from '@mui/material/Box';
import { constants } from '../../../../utils/constants';
import ButtonTemplate from '../../../ui/button/ButtonTemplate';

export interface ISideNavLayout {
  direction?: any;
  justifyContent?: any;
}

const SideNavLayout: React.FC<ISideNavLayout> = (props) => {
  const listItems: Array<constants['listItems']> = [
    {
      id: 'cli-1',
      text: 'About Me',
      hasDivider: false,
      url: 'aboutMe',
      width: '15%',
    },
    {
      id: 'cli-2',
      text: 'Books',
      hasDivider: false,
      url: 'books',
      width: '15%',
    },
    {
      id: 'cli-3',
      text: 'Stories',
      hasDivider: false,
      url: 'stories',
      width: '15%',
    },
    {
      id: 'cli-4',
      text: 'Random Thoughts',
      hasDivider: false,
      url: 'randomThoughts',
      width: '15%',
    },
    {
      id: 'cli-4',
      text: 'Poems',
      hasDivider: false,
      url: 'poems',
      width: '15%',
    },
    {
      id: 'cli-4',
      text: 'Character',
      hasDivider: false,
      url: 'character',
      width: '15%',
    },
    {
      id: 'cli-4',
      text: 'Contacts',
      hasDivider: false,
      url: 'contact',
      width: '15%',
    },
  ];

  return (
    <Box
      className="main-menu"
      sx={{ width: 'inherit', display: 'flex', flexDirection: props.direction }}
    >
      {listItems.map((listItems: any) => (
        <ButtonTemplate
          key={listItems.id}
          buttonType={'normal'}
          variant="text"
          color="info"
          size="large"
          width={listItems.width}
          justifyContent={props.justifyContent}
        >
          {listItems.text}
        </ButtonTemplate>
      ))}
    </Box>
  );
};

export default SideNavLayout;
