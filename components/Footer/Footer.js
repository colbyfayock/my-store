import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section className={styles.footerSection}>
        <Container>
          <p className={styles.footerLegal}>
            &copy; { new Date().getFullYear() }, <a href="https://spacejelly.dev">Space Jelly</a>
          </p>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;