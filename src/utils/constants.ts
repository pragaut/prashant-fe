export type constants = {
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  poVerticalDirection: 'top' | 'bottom' | 'center';
  poHorizontalDirection: 'left' | 'right' | 'center';
  menuItems: {
    id: string;
    value: string;
    hasDivider?: boolean;
    action?: any;
    icon?: React.ReactNode;
  };
  selectItems: {
    id: string;
    value: string;
    hasDivider?: boolean;
    action?: any;
    icon?: React.ReactNode;
  };
  listItems: {
    id: string;
    width?: any;
    text: string;
    url?: string;
    displayUrl?: string;
    icon?: React.ReactNode;
    action?: any;
    hasDivider?: boolean;
    endIcon?: React.ReactNode;
    avatar?: React.ReactNode;
    childItems?: Array<{
      id: string;
      text: string;
      url?: string;
      displayUrl?: string;
      icon?: React.ReactNode;
      action?: any;
      hasDivider?: boolean;
      endIcon?: React.ReactNode;
      avatar?: React.ReactNode;
    }>;
  };

  autoCompleteListItems: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  };

  dialogListItems: {
    id: string;
    onClick: any;
    avatar?: React.ReactNode;
    icon?: React.ReactNode;
    itemHeading: string;
    itemSubHeading?: string;
  };

  formItems: {
    id: string;
    label: string;
  };
};

export const h2Style = {
  fontSize: {
    xs: '1.4rem',
  },
  fontWeight: 500,
  mt: {
    xs: 0.375,
  },
};

export const h3Style = {
  fontSize: {
    xs: '1.2rem',
  },
  fontWeight: 400,
  mt: {
    xs: 0.375,
  },
};

export const badgeCircularStyle = {
  width: 50,
  height: 50,
  backgroundColor: '#e5e5e5',
  borderRadius: '1.5rem',
  padding: 0.8,
};

export const menuIconCircularStyle = {
  width: 36,
  height: 36,
  backgroundColor: '#e5e5e5',
  borderRadius: '1.5rem',
  alignItems: 'center',
  marginRight: 1,
  zIndex: 11,
};

export const masterFormInputStyle = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  minHeight: 100,
  flexWrap: 'wrap',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
};

export const inputTextfieldStyle = {
  mt: 3,
  pl: {
    md: 2,
  },
};

export const buttonTemplateStyle = {
  mt: 1.3,
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',

  pl: 1,
};

export const datePickerStyle = {
  mt: 3,
  pl: 1,
};

export const dataTableBoxStyle = {
  m: 5,
};

export const vCardStyle = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  minHeight: 100,
  flexWrap: 'wrap',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
};

export const qrCodeStyle = {
  width: '100px',
  height: '100px',
  border: '1px dotted black',
};

export const inputStyle = {
  mt: 3,

  mb: 5,
  pl: {
    md: 2,
  },
  width: '350px',
};

export const inputSelectStyle = {
  mt: 3,
  mb: 5,
  pl: {
    md: 2,
  },
  width: '350px',
};
