import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
  <Container height='100vh'>
    <Header />
    <Hero />
    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
