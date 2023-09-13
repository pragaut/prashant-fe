import CommentIcon from '@mui/icons-material/Comment';
import Avatar from '@mui/material/Avatar';
import { constants } from '../../../utils/constants';
import { IListTemplate } from './ListTemplate';

const listItems: Array<constants['listItems']> = [
  {
    id: 'li-1',
    text: 'Item 1',
    avatar: <Avatar src="/user.jpg" />,
    hasDivider: true,
  },
  {
    id: 'li-2',
    text: 'Item 2',
    icon: <CommentIcon />,
    hasDivider: true,
  },
  {
    id: 'li-3',
    text: 'Item 3',
    hasDivider: true,
  },
  {
    id: 'li-4',
    text: 'Item 4',
    endIcon: <CommentIcon />,
    hasDivider: true,
  },
];

const List: IListTemplate = {
  listType: 'clickable',
  listItems: listItems,
};

export const mockListTemplateProps = {
  List,
};
