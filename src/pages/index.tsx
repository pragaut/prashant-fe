import type { NextPage } from 'next';
import PrimaryLayout from '../components/templates/layouts/primary/PrimaryLayout';
import { withAuth } from '../utils/withAuth';

export interface IPage {
  setTitle: any;
  setRole: any;
}

const Home: NextPage<IPage> = (props) => {
  return (
    <>
      <PrimaryLayout
        pageTitle={''}
        role={''}
        snackbar={{
          state: false,
          duration: 0,
          message: '',
          color: '',
        }}
        dialog={{
          title: '',
          content: '',
          actions: undefined,
          state: false,
          form: undefined,
        }}
      />
    </>
  );
};

export default withAuth(Home);
