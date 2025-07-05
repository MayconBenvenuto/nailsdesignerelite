import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import certificado1 from '../assets/certificados/1-certificado.jpg';
import certificado2 from '../assets/certificados/2-certificado.jpg';
import certificado3 from '../assets/certificados/3-certificado.jpg';
import certificado4 from '../assets/certificados/4-certificado.jpg';
import certificado5 from '../assets/certificados/5-certificado.jpg';

import './Certificates.css';

const certificates = [
  { id: 1, image: certificado1, alt: 'Certificado 1' },
  { id: 2, image: certificado2, alt: 'Certificado 2' },
  { id: 3, image: certificado3, alt: 'Certificado 3' },
  { id: 4, image: certificado4, alt: 'Certificado 4' },
  { id: 5, image: certificado5, alt: 'Certificado 5' },
];

const Certificates = () => {
  return (
    <section className="certificates">
      <h2 className="certificates-title">Nossas Alunas</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {certificates.map(cert => (
          <SwiperSlide key={cert.id}>
            <img src={cert.image} alt={cert.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
