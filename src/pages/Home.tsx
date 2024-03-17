import React, { useState } from 'react';
import Intro from '../Sections/Intro/index.tsx';
import About from '../Sections/About/index.tsx';
import Skills from '../Sections/Skills/index.tsx';
import Projects from '../Sections/Projects/index.tsx';
import Contact from '../Sections/Contact/index.tsx';
import Header from '../components/Header/index.tsx';
import Footer from '../components/Footer/index.tsx';
import Modal from '../components/Modal/index.tsx';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default Home;
