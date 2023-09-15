import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export interface IButtonTemplate {
  buttonType: 'normal' | 'icon' | 'loading' | 'upload' | 'image' | 'navigation';
  iconType?: 'delete' | 'send';
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: any;
  height?: number;
  action?: any;
  url?: any;
  sx?: any;
  imageProperties?: any[];
  target?: string;
  fullWidth?: boolean;
  id?: string;
  width?: any;
  justifyContent?: any;
}

export interface IStyle {
  height?: number;
}

const ImageButton = styled(ButtonBase)<IStyle>(({ theme, height }) => ({
  position: 'relative',
  height: height ? height : 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const ButtonTemplate: React.FC<IButtonTemplate> = (props) => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const url = process.env.FILE_UPLOAD_API_ENDPOINT;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      //setSelectedFile(event.target.files[0]);
      //alert(selectedFile);
      handleSubmit(event.target.files[0]);
    }
  };

  const handleSubmit = async (selectedFile: any) => {
    //alert(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        //alert(process.env.FILE_UPLOAD_API_ENDPOINT);
        const requestOptions = {
          method: 'POST',
          body: formData,
          headers: {
            Origin: '' + process.env.NEXT_PUBLIC_DEV_ORIGIN_URL,
          },
        };
        const response = await fetch(
          '' + process.env.NEXT_PUBLIC_FILE_UPLOAD_API_ENDPOINT,
          requestOptions
        );
        if (response.ok) {
          console.log('File uploaded successfully.');
          //console.log(response.json());
          // Redirect to a success page or handle accordingly
          response.json().then((res) => {
            props.action(res.data);
          });
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('File upload failed.', error);
      }
    }
  };

  return (
    <>
      {props.buttonType == 'normal' && (
        <Button
          variant={props.variant}
          color={props.color}
          disabled={props.disabled}
          size={props.size}
          onClick={props.action}
          // sx={props.sx}
          sx={{
            ...props.sx,
            width: props.width,
            justifyContent: props.justifyContent,
          }}
          disableRipple={true}
          disableFocusRipple={true}
          disableTouchRipple={true}
          fullWidth={props.fullWidth}
        >
          {props.children}
        </Button>
      )}
      {props.buttonType == 'navigation' && (
        <Button
          variant={props.variant}
          component={Link}
          color={props.color}
          disabled={props.disabled}
          size={props.size}
          href={props.url ? props.url : ''}
          target={props.target ? props.target : '_self'}
          sx={props.sx}
        >
          {props.children}
        </Button>
      )}
      {props.buttonType == 'icon' && (
        <IconButton color={props.color} size={props.size}>
          {props.children}
        </IconButton>
      )}
      {props.buttonType == 'loading' && (
        <LoadingButton
          color={props.color}
          loading
          variant={props.variant}
        ></LoadingButton>
      )}
      {props.buttonType == 'upload' && (
        <Button variant={props.variant} component="label" sx={props.sx}>
          {props.children}
          <input
            hidden
            // accept="image/*"
            type="file"
            onChange={handleFileChange}
          />
        </Button>
      )}
      {props.buttonType == 'image' &&
        props.imageProperties?.map((image) => (
          <Button
            sx={{
              position: 'relative',
              height: props.height ? props.height : 200,
              width: { xs: '100%', md: '50%', xl: '33.3%' },
              '&:hover, &.Mui-focusVisible': {
                zIndex: 1,
                '& .MuiImageBackdrop-root': {
                  opacity: 0.15,
                },
                '& .MuiImageMarked-root': {
                  opacity: 0,
                },
                '& .MuiTypography-root': {
                  border: '4px solid currentColor',
                },
              },
            }}
            key={image.url}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </Button>
        ))}
    </>
  );
};

export default ButtonTemplate;
