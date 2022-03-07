import React from 'react'
import { HeaderImages } from './HeaderImage'
import { MainGenres } from './MainGenres'
import { MainGenresList } from './MainGenresList'
import { MainPlans } from './MainPlans'
import { MainSummary } from './MainSummary'
import Image from 'next/image'
import searchRock from './assets/searchRock.jpg'
import searchPop from './assets/searchPop.jpg'
import { MainSearch } from './MainSearch'
const genres = [
  {
    tittle: "Rock",
    content: "Enjoy your favorite songs",
    src:searchRock
  },
  {
    tittle: "Pop",
    content: "Enjoy your favorite songs",
    src:searchPop
  },
  {
    tittle: "Indie",
    content: "Enjoy your favorite songs",
    src:searchRock
  }
]
export default function Home() {
  const [genresValue, setGenresValue] = React.useState(genres);
  const [searchGenres, setSearchGenres] = React.useState('');

  let searchedGenres = [];

  if(!searchGenres >= 1) {
    searchedGenres = genres;
  }else{
    searchedGenres = genres.filter( genre => {
      const genreText = genre.tittle.toLocaleLowerCase();
      const searchText = searchGenres.toLocaleLowerCase();

      return genreText.includes(searchText)
    })
  }

  return (
    <React.Fragment>
      <HeaderImages></HeaderImages>
      <MainSummary></MainSummary>
      <MainPlans></MainPlans>
      <MainSearch
      searchGenres={searchGenres}
      setSearchGenres={setSearchGenres}></MainSearch>
      <MainGenresList>
        {searchedGenres.map( genre => (
          <MainGenres
          key={genre.tittle}
          tittle={genre.tittle}
          content={genre.content}
          src={genre.src}
          />)
          )}
      </MainGenresList>
    </React.Fragment>
  )
}
