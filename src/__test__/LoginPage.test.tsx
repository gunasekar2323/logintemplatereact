import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/AuthPage/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
const renderLoginPage = () => {
    render(<Router><LoginPage /></Router>);
  };
describe('loginpage',()=>{
    test('check if email field is present', () => {
      renderLoginPage();
      const linkElement = screen.getByPlaceholderText('Enter email');
      expect(linkElement).toBeInTheDocument();
    });
    test('check if password field is present', () => {
        renderLoginPage();
        const linkElement = screen.getByPlaceholderText('Enter password');
        expect(linkElement).toBeInTheDocument();
      });
      test('check if create account is present', () => {
        renderLoginPage();
        const linkElement = screen.getByText(/Create an account?/i);
        expect(linkElement).toBeInTheDocument();
      });
      test('check if register redirect link is present', () => {
        renderLoginPage();
        const linkElement = screen.getByRole('link',{name:"Register here"});
        expect(linkElement).toBeInTheDocument();
      });
      test('check if the login button is present',()=>{
        renderLoginPage();
        const linkElement = screen.getByRole('button',{name:'Login'});
        expect(linkElement).toBeInTheDocument();
      })
})