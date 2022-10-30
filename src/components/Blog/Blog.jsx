import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';
import officeImg from '../../images/office2.png';
import femaleIng from '../../images/female2.png';
import fileImg from '../../images/files.png';
import chandlierImg from '../../images/chand.png';
import rachealImg from '../../images/rachel.png';
import monicaImg from '../../images/monica.png';
import BlogList1 from './BlogList1';
import Button from './Button';

export const blogs = [
  {
    id: 1,
    title: 'Category',
    content: 'Pitch termsheet backing validation focus release.',
    date: 'November 22, 2021',
    postImg: officeImg,
    postBy: 'Chandler Bing',
    userImg: chandlierImg,
  },
  {
    id: 2,
    title: 'Category',
    content:
      'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    date: 'November 22, 2021',
    postImg: femaleIng,
    postBy: 'Rachel Green',
    userImg: rachealImg,
  },
  {
    id: 3,
    title: 'Category',
    content:
      'Beta prototype sales iPad gen-z marketing network effects value proposition',
    date: 'November 22, 2021',
    postImg: fileImg,
    postBy: 'Monica Geller',
    userImg: monicaImg,
  },
];
const Blog = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/blog');
  };

  return (
    <div className={styles.blogcontainer}>
      <h2>Our blog</h2>
      <h3>Value proposition accelerator product management venture</h3>
      <BlogList1 blogs={blogs} />
      <Button handleNavigation={handleNavigation} />
    </div>
  );
};

export default Blog;
