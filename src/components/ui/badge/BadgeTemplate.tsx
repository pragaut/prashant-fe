import Badge from '@mui/material/Badge';
import { constants } from '../../../utils/constants';
import styles from './BadgeTemplate.module.css';

export interface IBadgeTemplate {
  badgeContent: number;
  color?: constants['color'];
  variant?: 'dot' | 'standard';
  showZero?: boolean;
  maxContent?: number;
  overlap?: 'circular' | 'rectangular';
  anchorHorizontalPosition?: 'left' | 'right';
  anchorVerticalPostion?: 'top' | 'bottom';
  sx?: any;
  children?: any;
}

const BadgeTemplate: React.FC<IBadgeTemplate> = (props) => {
  return (
    <div className={styles.container}>
      <Badge
        badgeContent={props.badgeContent}
        color={props.color}
        variant={props.variant}
        showZero={props.showZero ? props.showZero : false}
        max={props.maxContent ? props.maxContent : 99}
        overlap={props.overlap}
        anchorOrigin={{
          vertical: props.anchorVerticalPostion
            ? props.anchorVerticalPostion
            : 'top',
          horizontal: props.anchorHorizontalPosition
            ? props.anchorHorizontalPosition
            : 'right',
        }}
        sx={props.sx}
      >
        {props.children}
      </Badge>
    </div>
  );
};

export default BadgeTemplate;
