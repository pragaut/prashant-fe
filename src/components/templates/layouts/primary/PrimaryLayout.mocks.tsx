import { IPrimaryLayout } from './PrimaryLayout';

const base: IPrimaryLayout = {
  pageTitle: '',
  role: 'Admin',
  dialog: {
    title: '',
    state: false,
    actions: <></>,
    content: '',
    form: <></>,
  },
  snackbar: {
    color: 'success',
    duration: 3000,
    message: '',
    state: false,
  },
};

export const mockPrimaryLayoutProps = {
  base,
};
