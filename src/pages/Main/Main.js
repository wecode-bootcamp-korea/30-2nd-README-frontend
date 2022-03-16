import React from 'react';
import Slide from './Slide/Slide';
import BestSellerList from './BestSellerList.js';
import TitleBar from './TitleBar';
import Category from './CategoryBookList';
import MdPickList from './MdPickList';
import RecommendList from './RecommendList';

const Main = () => {
  return (
    <>
      <TitleBar />
      <Slide />
      <Category />
      <BestSellerList />
      <MdPickList />
      <RecommendList />
    </>
  );
};

export default Main;
