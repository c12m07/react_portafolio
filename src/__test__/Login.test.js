import { render, screen } from '@testing-library/react';
import Login from '../components/login';

let login;
let email;
let id;

describe('Login component ', () => {

  beforeEach(() => {
    login = render(<Login />);
    email = screen.getByTestId('email');
    id = screen.getByTestId('discordId');
  })

  test('Comprobar label ', () => {
    
  })
})