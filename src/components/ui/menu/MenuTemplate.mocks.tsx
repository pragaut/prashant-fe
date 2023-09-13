import { constants } from '../../../utils/constants';
import { IMenuTemplate } from './MenuTemplate';

const mItems: Array<constants['menuItems']> = [
  {
    id: 'item-1',
    value: 'Profile',
    hasDivider: true,
  },
  {
    id: 'item-2',
    value: 'Settings Settings',
    hasDivider: true,
  },
  {
    id: 'item-3',
    value: 'Logout',
  },
];

const menu: IMenuTemplate = {
  menuType: 'icobtn',
  tootltipTitle: 'Open Menu',
  buttonText: 'Menu',
  showEndIcon: false,
  imageUrl: '/user.jpg',
  imageAlt: 'User Profile Image',
  menuId: 'popup-settings-menu',
  aoVertical: 'bottom',
  aoHorizontal: 'right',
  toVertical: 'top',
  toHorizontal: 'right',
  menuItems: mItems,
};

export const mockMenuTemplateProps = {
  menu,
};
