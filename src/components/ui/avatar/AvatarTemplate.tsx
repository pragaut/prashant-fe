import { Avatar } from '@mui/material';

export interface IAvatarTemplate {
  avatarType: 'image' | 'letter' | 'icon';
  variant?: 'square' | 'rounded' | 'circular';
  children?: any;
}

const AvatarTemplate: React.FC<IAvatarTemplate> = (props) => {
  return (
    <>
      {props.avatarType == 'letter' && (
        <Avatar variant={props.variant ? props.variant : 'circular'}>PR</Avatar>
      )}
    </>
  );
};

export default AvatarTemplate;
