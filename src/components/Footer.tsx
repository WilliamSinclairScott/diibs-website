import { styled } from '../stitches.config';

const StyledFooter = styled('footer', {
  width: '100%',
  backgroundColor: '$offWhite',
  padding: '1rem',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled('img', {
  height: '40px',
});

const InstagramLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
});

const InstagramIcon = styled('img', {
  width: '24px',
  height: '24px',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Logo 
        src="DIIBS_logo_black.png" 
        alt="logo"
      />
      <InstagramLink href="https://www.instagram.com/got_diibs/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
          alt="Instagram"
        />
      </InstagramLink>
    </StyledFooter>
  );
};

export default Footer;