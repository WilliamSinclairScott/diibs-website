import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';
import { useState, useEffect } from 'react';

const StyledNav = styled(NavigationMenu.Root, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '$offWhite',
});

const StyledList = styled(NavigationMenu.List, {
  display: 'flex',
  listStyle: 'none',
  gap: '1rem',
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const StyledLink = styled(NavigationMenu.Link, {
  textDecoration: 'none',
  color: '$black',
  fontFamily: '$overpass',
  fontSize: '$tags',
  fontWeight: '$light',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Logo = styled('img', {
  height: '40px',
});

const MenuButton = styled('button', {
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '$h3',
  cursor: 'pointer',
  color: '$black',
  '@media (max-width: 768px)': {
    display: 'block',
  },
});

const StyledDropdownContent = styled(DropdownMenu.Content, {
  backgroundColor: '$white',
  borderRadius: '4px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  padding: '0.5rem',
  margin: '0.5rem',
  zIndex: '10',
  border: '1px solid $black',
});

const StyledDropdownItem = styled(DropdownMenu.Item, {
  padding: '0.5rem',
  cursor: 'pointer',
  fontFamily: '$overpass',
  fontSize: '$tags',
  fontWeight: '$light',
  color: '$black',
  '&:hover': {
    backgroundColor: '$lightGray',
  },
});

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/venues', label: 'Venues' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <StyledNav>
      <Link to="/">
        <Logo 
          src="DIIBS_logo_black.png" 
          alt="logo"
        />
      </Link>
      {!isMobile ? (
        <NavigationMenu.List asChild>
          <StyledList>
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.href}>
                <StyledLink href={item.href}>{item.label}</StyledLink>
              </NavigationMenu.Item>
            ))}
          </StyledList>
        </NavigationMenu.List>
      ) : (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <MenuButton>
              <HamburgerMenuIcon />
            </MenuButton>
          </DropdownMenu.Trigger>
          <StyledDropdownContent>
            {navItems.map((item) => (
              <StyledDropdownItem key={item.href}>
                <a href={item.href}>{item.label}</a>
              </StyledDropdownItem>
            ))}
          </StyledDropdownContent>
        </DropdownMenu.Root>
      )}
    </StyledNav>
  );
}

export default Navbar;