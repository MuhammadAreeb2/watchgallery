import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import img1 from "./galleryComponent/img(1).jpg"
import img4 from "./galleryComponent/img(4).jpg"
import img2 from "./galleryComponent/img(2).jpg"
import img3 from "./galleryComponent/img(3).jpg"
import img5 from "./galleryComponent/img(5).jpg"
import img6 from "./galleryComponent/img(6).jpg"
import img7 from "./galleryComponent/img(7).jpg"
import img9 from "./galleryComponent/img(9).jpg"
import img8 from "./galleryComponent/img(8).jpg"

import img10 from "./galleryComponent/img(10).jpg"
import img11 from "./galleryComponent/img(11).jpg"
import img12 from "./galleryComponent/img(12).jpg"

import Navbar from "./homeComponent/navbar"
export default function Images() {

  return (
    <>
      <Navbar />
      <div className='container'>

        <h1 className='text-center mt-4 mb-5' > Gallery </h1>
        <Box sx={{ width: 1000, height: 450 }} justifyContent={"center"} margin={"auto"} textAlign={"center"}>

          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Watch1',
    author: 'swabdesign',
  },
  {
    img: img2,
    title: 'Watch1',
    author: 'Pavel Nekoranec',
  },
  {
    img: img3,
    title: 'Watch1',
    author: 'Charles Deluvio',
  },
  {
    img: img4,
    title: 'Watch1',
    author: 'Christian Mackie',
  },
  {
    img: img10,
    title: 'Watch1',
    author: 'Darren Richardson',
  },
  {
    img: img11,
    title: 'Watch1',
    author: 'Taylor Simpson',
  },
  {
    img: img9,
    title: 'Watch1',
    author: 'Ben Kolde',
  },
  {
    img: img8,
    title: 'Watch1',
    author: 'Philipp Berndt',
  },
  {
    img: img7,
    title: 'Watch1',
    author: 'Jen P.',
  },
  {
    img: img5,
    title: 'Watch1',
    author: 'Douglas Sheppard',
  },
  {
    img: img6,
    title: 'Watch1',
    author: 'Fi Bell',
  },
  {
    img: img12,
    title: 'Watch1',
    author: 'Hutomo Abrianto',
  },
];
