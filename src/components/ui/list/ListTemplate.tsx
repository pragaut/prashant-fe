import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import router from 'next/router';
import { useState } from 'react';
import { constants } from '../../../utils/constants';

export interface IListTemplate {
  listType: 'simple' | 'clickable';
  listDirection?: 'row' | 'column';
  listItems: Array<constants['listItems']>;
  dense?: boolean;
  hasCheckbox?: boolean;
  children?: any;
  routeAction?: any;
}

const ListTemplate: React.FC<IListTemplate> = (props) => {
  const [itemSelectedIndex, setItemSelectedIndex] = useState(-1);
  const [childItemSelectedIndex, setChildItemSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(true);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    collapsibleDiv: boolean,
    url: string,
    displayUrl: string
  ) => {
    setItemSelectedIndex(index);
    if (collapsibleDiv) setOpen(!open);
    else setOpen(false);
    setChildItemSelectedIndex(-1);
    if (url != '') {
      const dUrl = displayUrl != '' ? displayUrl : url;
      router.push(url, dUrl);
      props.routeAction();
    }
  };

  const handleChildListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    url: string,
    displayUrl: string
  ) => {
    event.stopPropagation();
    setChildItemSelectedIndex(index);
    if (url != '') {
      props.routeAction();
      const dUrl = displayUrl != '' ? displayUrl : url;
      router.push(url, dUrl);
    }
  };

  const items = props.listItems?.map((item, index) => {
    const childItems = item.childItems?.map((childItem, i) => {
      const chItm = [
        props.hasCheckbox ? <Checkbox key={childItem.id + '-cb-' + i} /> : '',
        childItem.avatar ? (
          <ListItemAvatar key={childItem.id + '-lia-' + i}>
            {childItem.avatar}
          </ListItemAvatar>
        ) : (
          ''
        ),
        childItem.icon ? (
          <ListItemIcon key={childItem.id + '-lii-' + i}>
            {childItem.icon}
          </ListItemIcon>
        ) : (
          ''
        ),
        <ListItemText key={childItem.id + '-lit-' + i}>
          {childItem.text}
        </ListItemText>,
      ];

      return props.listType == 'clickable' ? (
        <ListItemButton
          id={childItem.id}
          key={childItem.id + '-lib-' + i}
          selected={childItemSelectedIndex === i}
          onClick={(event) =>
            handleChildListItemClick(
              event,
              i,
              childItem.url ? childItem.url : '',
              childItem.displayUrl ? childItem.displayUrl : ''
            )
          }
          divider={childItem.hasDivider}
        >
          {chItm}
        </ListItemButton>
      ) : (
        <ListItem
          id={childItem.id}
          divider={childItem.hasDivider}
          component="li"
          key={childItem.id + '-li-' + i}
          secondaryAction={childItem.endIcon ? childItem.endIcon : ''}
        >
          {chItm}
        </ListItem>
      );
    });

    const itm = [
      props.hasCheckbox ? <Checkbox key={item.id + '-cb-' + index} /> : '',
      item.avatar ? (
        <ListItemAvatar key={item.id + '-lia-' + index}>
          {item.avatar}
        </ListItemAvatar>
      ) : (
        ''
      ),
      item.icon ? (
        <ListItemIcon key={item.id + '-lii-' + index}>{item.icon}</ListItemIcon>
      ) : (
        ''
      ),
      <ListItemText key={item.id + '-lit-' + index}>{item.text}</ListItemText>,
    ];

    const chItems = item.childItems ? (
      <Collapse
        in={itemSelectedIndex === index && open}
        timeout="auto"
        unmountOnExit
        key={item.id + '-clp-' + index}
        sx={{
          width: '100%',
        }}
      >
        <List
          component="div"
          dense={props.dense}
          sx={{ width: '100%', bgcolor: 'primary', padding: 0.5 }}
          key={item.id + '-list-' + index}
        >
          {childItems}
        </List>
      </Collapse>
    ) : (
      ''
    );

    return props.listType == 'clickable'
      ? [
          <ListItemButton
            id={item.id}
            key={item.id + '-lib-' + index}
            selected={itemSelectedIndex === index}
            onClick={(event) =>
              handleListItemClick(
                event,
                index,
                chItems ? true : false,
                item.url ? item.url : '',
                item.displayUrl ? item.displayUrl : ''
              )
            }
            divider={item.hasDivider}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'flex-start',
            }}
            disableRipple
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              {itm}
              {chItems ? (
                itemSelectedIndex == index && open ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                ''
              )}
            </Box>
            {chItems}
          </ListItemButton>,
        ]
      : [
          <ListItem
            id={item.id}
            divider={item.hasDivider}
            component="li"
            key={item.id + '-li-' + index}
            secondaryAction={item.endIcon ? item.endIcon : ''}
            sx={{ width: '100%' }}
          >
            {itm}
          </ListItem>,
          chItems,
        ];
  });

  return (
    <List
      dense={props.dense}
      sx={{
        width: '100%',
        bgcolor: 'white',
        padding: 0.5,
        display: 'flex',
        flexDirection: props.listDirection ? props.listDirection : 'column',
        alignItems: 'flex-start',
      }}
    >
      {items}
    </List>
  );
};

export default ListTemplate;
