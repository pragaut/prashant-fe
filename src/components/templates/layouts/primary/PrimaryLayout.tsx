import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AboutMe from '../../../../pages/aboutMe';
import FeaturedBooks from '../../../../pages/featuredBooks';
import LatestArticle from '../../../../pages/latestArticles';
import LatestBook from '../../../../pages/latestBook';
import MyInstagram from '../../../../pages/myInstagram';
import Podcasts from '../../../../pages/podcasts';
import Review from '../../../../pages/review';
import Slider from '../../../../pages/slider';
import VideoSlider from '../../../../pages/videoSlider';
import FooterLayout from '../footer/FooterLayout';
import HeaderLayout from '../header/HeaderLayout';

export interface IPrimaryLayout {
  layout_name?: string;
  pageTitle: string;
  role: string;
  children?: React.ReactNode;
  snackbar: {
    state: boolean;
    duration: number;
    message: string;
    color: string;
  };
  dialog: {
    title: string;
    content: string;
    actions: React.ReactNode;
    state: boolean;
    form: React.ReactNode;
  };
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (props) => {
  const router = useRouter();

  const [alertMessage, setAlertMessage] = useState({
    snackbarState: props.snackbar.state ? props.snackbar.state : false,
    snackbarDuration: props.snackbar.duration ? props.snackbar.duration : 3000,
    snackbarMessage: props.snackbar.message ? props.snackbar.message : '',
    alertColor: props.snackbar.color ? props.snackbar.color : 'success',
  });

  const [dialog, setDialog] = useState({
    dialogTitle: props.dialog.title ? props.dialog.title : '',
    dialogContent: props.dialog.content ? props.dialog.content : '',
    dialogActions: props.dialog.actions ? props.dialog.actions : <></>,
    dialogState: props.dialog.state ? props.dialog.state : false,
    dialogForm: props.dialog.form ? props.dialog.form : <></>,
  });

  useEffect(() => {
    setAlertMessage({
      snackbarState: props.snackbar.state ? props.snackbar.state : false,
      snackbarDuration: props.snackbar.duration
        ? props.snackbar.duration
        : 3000,
      snackbarMessage: props.snackbar.message ? props.snackbar.message : '',
      alertColor: props.snackbar.color ? props.snackbar.color : 'success',
    });
    if (alertMessage.snackbarState == false) {
      setDialog({
        dialogTitle: props.dialog.title ? props.dialog.title : '',
        dialogContent: props.dialog.content ? props.dialog.content : '',
        dialogActions: props.dialog.actions ? props.dialog.actions : <></>,
        dialogState: props.dialog.state ? props.dialog.state : false,
        dialogForm: props.dialog.form ? props.dialog.form : <></>,
      });
    }
  }, [props.snackbar, props.dialog]);

  return (
    <Box>
      <Box>
        <HeaderLayout></HeaderLayout>
      </Box>

      <Slider></Slider>
      <AboutMe></AboutMe>
      <VideoSlider></VideoSlider>
      <LatestBook></LatestBook>
      <FeaturedBooks />
      <Review></Review>
      <Podcasts></Podcasts>
      <LatestArticle />
      <MyInstagram></MyInstagram>

      <FooterLayout></FooterLayout>
    </Box>
  );
};

export default PrimaryLayout;
