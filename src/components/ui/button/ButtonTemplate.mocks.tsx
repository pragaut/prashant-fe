import { IButtonTemplate } from './ButtonTemplate';

const images = [
  {
    url: 'https://media.istockphoto.com/id/533645537/photo/breakfast-with-bacon-eggs-pancakes-and-toast.jpg?s=612x612&w=0&k=20&c=TumrEwImmLi4TIVeirgynvTpHhyvt9LeiDXLci45NWg=',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Camera',
    width: '30%',
  },
];

const Button: IButtonTemplate = {
  buttonType: 'image',
  variant: 'text',
  color: 'primary',
  children: 'submit',
  imageProperties: images,
  height: 200,
};

export const mockButtonTemplateProps = {
  Button,
};
