import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//movie imports
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import GenresContextProvider from "../src/contexts/genresContext";

//tv imports
import TvCard from "../src/components/tvCard";
import TvShowHeader from "../src/components/headerTvList";
import TvList from "../src/components/tvList";
import TvDetails from "../src/components/tvDetails";
import TvHeader from "../src/components/headerTv";
// import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import TvGenresContextProvider from "../src/contexts/genresContext";

//people imports
import PersonCard from "../src/components/personCard";
import PeopleHeader from "../src/components/headerPersonList";
import PersonList from "../src/components/personList";
import PersonDetails from "../src/components/personDetails";
import PersonHeader from "../src/components/headerPerson";
// import AddFavoriteButton from "../src/components/buttons/addToFavorites";



import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

const movieSample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const tvSample = {
  "backdrop_path": "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
  "created_by": [
    {
      "id": 9813,
      "credit_id": "5256c8c219c2956ff604858a",
      "name": "David Benioff",
      "gender": 2,
      "profile_path": "/xvNN5huL0X8yJ7h3IZfGG4O2zBD.jpg"
    },
    {
      "id": 228068,
      "credit_id": "552e611e9251413fea000901",
      "name": "D. B. Weiss",
      "gender": 2,
      "profile_path": "/2RMejaT793U9KRk2IEbFfteQntE.jpg"
    }
  ],
  "episode_run_time": [
    60
  ],
  "first_air_date": "2011-04-17",
  "genres": [
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 9648,
      "name": "Mystery"
    }
  ],
  "homepage": "http://www.hbo.com/game-of-thrones",
  "id": 1399,
  "in_production": false,
  "languages": [
    "en"
  ],
  "last_air_date": "2019-05-19",
  "last_episode_to_air": {
    "air_date": "2019-05-19",
    "episode_number": 6,
    "id": 1551830,
    "name": "The Iron Throne",
    "overview": "In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors.",
    "production_code": "806",
    "season_number": 8,
    "still_path": "/3x8tJon5jXFa1ziAM93hPKNyW7i.jpg",
    "vote_average": 4.8,
    "vote_count": 106
  },
  "name": "Game of Thrones",
  "next_episode_to_air": null,
  "networks": [
    {
      "name": "HBO",
      "id": 49,
      "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      "origin_country": "US"
    }
  ],
  "number_of_episodes": 73,
  "number_of_seasons": 8,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "Game of Thrones",
  "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  "popularity": 369.594,
  "poster_path": "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  "production_companies": [
    {
      "id": 76043,
      "logo_path": "/9RO2vbQ67otPrBLXCaC8UMp3Qat.png",
      "name": "Revolution Sun Studios",
      "origin_country": "US"
    },
    {
      "id": 12525,
      "logo_path": null,
      "name": "Television 360",
      "origin_country": ""
    },
    {
      "id": 5820,
      "logo_path": null,
      "name": "Generator Entertainment",
      "origin_country": ""
    },
    {
      "id": 12526,
      "logo_path": null,
      "name": "Bighead Littlehead",
      "origin_country": ""
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "GB",
      "name": "United Kingdom"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "seasons": [
    {
      "air_date": "2010-12-05",
      "episode_count": 64,
      "id": 3627,
      "name": "Specials",
      "overview": "",
      "poster_path": "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
      "season_number": 0
    },
    {
      "air_date": "2011-04-17",
      "episode_count": 10,
      "id": 3624,
      "name": "Season 1",
      "overview": "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.",
      "poster_path": "/zwaj4egrhnXOBIit1tyb4Sbt3KP.jpg",
      "season_number": 1
    },
    {
      "air_date": "2012-04-01",
      "episode_count": 10,
      "id": 3625,
      "name": "Season 2",
      "overview": "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron Throne is occupied by the cruel Joffrey, counseled by his conniving mother Cersei and uncle Tyrion. But the Lannister hold on the Throne is under assault on many fronts. Meanwhile, a new leader is rising among the wildings outside the Great Wall, adding new perils for Jon Snow and the order of the Night's Watch.",
      "poster_path": "/5tuhCkqPOT20XPwwi9NhFnC1g9R.jpg",
      "season_number": 2
    },
    {
      "air_date": "2013-03-31",
      "episode_count": 10,
      "id": 3626,
      "name": "Season 3",
      "overview": "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two seasons come to a brutal head. Meanwhile, the Lannisters maintain their hold on King's Landing, though stirrings in the North threaten to alter the balance of power; Robb Stark, King of the North, faces a major calamity as he tries to build on his victories; a massive army of wildlings led by Mance Rayder march for the Wall; and Daenerys Targaryen--reunited with her dragons--attempts to raise an army in her quest for the Iron Throne.",
      "poster_path": "/7d3vRgbmnrRQ39Qmzd66bQyY7Is.jpg",
      "season_number": 3
    },
    {
      "air_date": "2014-04-06",
      "episode_count": 10,
      "id": 3628,
      "name": "Season 4",
      "overview": "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
      "poster_path": "/dniQ7zw3mbLJkd1U0gdFEh4b24O.jpg",
      "season_number": 4
    },
    {
      "air_date": "2015-04-12",
      "episode_count": 10,
      "id": 62090,
      "name": "Season 5",
      "overview": "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the realm implodes, like a corpse making a feast for crows.",
      "poster_path": "/527sR9hNDcgVDKNUE3QYra95vP5.jpg",
      "season_number": 5
    },
    {
      "air_date": "2016-04-24",
      "episode_count": 10,
      "id": 71881,
      "name": "Season 6",
      "overview": "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.",
      "poster_path": "/zvYrzLMfPIenxoq2jFY4eExbRv8.jpg",
      "season_number": 6
    },
    {
      "air_date": "2017-07-16",
      "episode_count": 7,
      "id": 81266,
      "name": "Season 7",
      "overview": "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
      "poster_path": "/3dqzU3F3dZpAripEx9kRnijXbOj.jpg",
      "season_number": 7
    },
    {
      "air_date": "2019-04-14",
      "episode_count": 6,
      "id": 107971,
      "name": "Season 8",
      "overview": "The Great War has come, the Wall has fallen and the Night King's army of the dead marches towards Westeros. The end is here, but who will take the Iron Throne?",
      "poster_path": "/39FHkTLnNMjMVXdIDwZN8SxYqD6.jpg",
      "season_number": 8
    }
  ],
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Ended",
  "tagline": "Winter Is Coming",
  "type": "Scripted",
  "vote_average": 8.3,
  "vote_count": 11504
}

const personSample = {
  "birthday": "1963-12-18",
  "known_for_department": "Acting",
  "deathday": null,
  "id": 287,
  "name": "Brad Pitt",
  "also_known_as": [
    "برد پیت",
    "Бред Питт",
    "Бред Пітт",
    "Buratto Pitto",
    "Брэд Питт",
    "畢·彼特",
    "ブラッド・ピット",
    "브래드 피트",
    "براد بيت",
    "แบรด พิตต์"
  ],
  "gender": 2,
  "biography": "William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
  "popularity": 10.647,
  "place_of_birth": "Shawnee, Oklahoma, USA",
  "profile_path": "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
  "adult": false,
  "imdb_id": "nm0000093",
  "homepage": null
}

//home page
storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={movieSample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const movieSampleNoPoster = { ...movieSample, poster_path: undefined };
    return (
      <MovieCard
        movie={movieSampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [movieSample, movieSample, movieSample, movieSample, movieSample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={movieSample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={movieSample} />);



  //tv pages
storiesOf("Discover Page/TvCard", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <TvCard
    tv={tvSample}
    action={tv => <button className="btn w-100 btn-primary">Test</button>}
  />
))
.add("exception", () => {
  const tvSampleNoPoster = { ...tvSample, poster_path: undefined };
  return (
    <TvCard
      tv={tvSampleNoPoster}
      action={tv => (
        <button className="btn w-100 btn-primary">Test</button>
      )}
    />
  );
});

storiesOf("Discover Page/FilterControls", module)
  .addDecorator(story => (
    <TvGenresContextProvider>{story()}</TvGenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numTvShows={10} />
  ));

storiesOf("Discover Page/TvHeader", module).add("default", () => (
  <TvShowHeader name="All Tv Shows" numTvShows={10} />
));

storiesOf("Discover Page/TvList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const tvShows = [tvSample, tvSample, tvSample, tvSample, tvSample];
    return (
      <TvList
      tvShows={tvShows}
        action={tv => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Tv Details Page/TvDetails", module).add("default", () => (
  <TvDetails tv={tvSample} />
));

storiesOf("Tv Details Page/TvHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <TvHeader tv={tvSample} />);


  //popular actor pages
storiesOf("Popular Actor Page/PersonCard", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <PersonCard
    person={personSample}
    action={person => <button className="btn w-100 btn-primary">Test</button>}
  />
))
.add("exception", () => {
  const personSampleNoPoster = { ...personSample, profile_path: undefined };
  return (
    <PersonCard
      person={personSampleNoPoster}
      action={person => (
        <button className="btn w-100 btn-primary">Test</button>
      )}
    />
  );
});

storiesOf("Popular Actor Page/FilterControls", module)
  .addDecorator(story => (
    <TvGenresContextProvider>{story()}</TvGenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numTvShows={10} />
  ));

storiesOf("Popular Actor Page/PersonHeader", module).add("default", () => (
  <PeopleHeader name="All Popular Actors" numPeople={10} />
));

storiesOf("Popular Actor Page/PersonList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const popular = [personSample, personSample, personSample, personSample, personSample];
    return (
      <PersonList
      popular={popular}
        action={person => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Popular Actor Page/PersonDetails", module).add("default", () => (
  <PersonDetails person={personSample} />
));

storiesOf("Popular Actor Page/PersonHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonHeader person={personSample} />);