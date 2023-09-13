import MailIcon from '@mui/icons-material/Mail';
import { IBadgeTemplate } from './BadgeTemplate';

const badge: IBadgeTemplate = {
  badgeContent: 20,
  color: 'primary',
  variant: 'standard',
  showZero: false,
  maxContent: 102,
  overlap: 'circular',
  anchorHorizontalPosition: 'left',
  anchorVerticalPostion: 'bottom',
  sx: {
    padding: '5px',
    '&:hover': {
      backgroundColor: '#cdcdcd',
      borderRadius: '16px',
    },
  },
  children: <MailIcon color="success" />,
};

export const mockBadgeTemplateProps = {
  badge,
};
