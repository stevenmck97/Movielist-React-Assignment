import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MovieWatchListPage from './pages/movieWatchListPage';
//tv pages
import AddTvReviewPage from './pages/addTvReviewPage';
import FavoriteTvShowsPage from './pages/tvFavoritesPage';
import TvPage from './pages/tvDetailsPage';
import TvListPage from './pages/tvDiscoverPage';
import AiringTvShowsPage from './pages/tvAiringPage';
import TopRatedTvShowsPage from './pages/tvTopRatedPage';
import TvReviewPage from './pages/tvReviewPage';
import TvWatchListPage from './pages/tvWatchListPage';
import TvShowsContextProvider from "./contexts/tvShowsContext";
import TvGenresContextProvider from "./contexts/tvGenresContext";
//people pages
import PersonPopularPage from './pages/personPopularPage';
import FavoritePeoplePage from './pages/personFavoritesPage';
import PersonPage from './pages/personDetailsPage';
import PeopleContextProvider from "./contexts/peopleContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>
            <TvShowsContextProvider>
              <GenresContextProvider>
                <TvGenresContextProvider>
                  <PeopleContextProvider>
                    <Switch>
                      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                      <Route path="/reviews/:id" component={MovieReviewPage} />
                      <Route exact path="/tvReviews/form" component={AddTvReviewPage} />
                      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                      <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
                      <Route path="/movies/watchList" component={MovieWatchListPage} />
                      <Route exact path="/tv/favorites" component={FavoriteTvShowsPage} />
                      <Route exact path="/tv/watchList" component={TvWatchListPage} />
                      <Route exact path="/tv/airing" component={AiringTvShowsPage} />
                      <Route exact path="/tv/topRated" component={TopRatedTvShowsPage} />
                      <Route exact path="/tv/discover" component={TvListPage} />
                      <Route exact path="/person/popular" component={PersonPopularPage} />
                      <Route exact path="/person/favorites" component={FavoritePeoplePage} />
                      <Route path="/reviews/:id" component={MovieReviewPage} />
                      <Route path="/tvReviews/:id" component={TvReviewPage} />
                      <Route path="/movies/:id" component={MoviePage} />
                      <Route path="/tv/:id" component={TvPage} />
                      <Route path="/person/:id" component={PersonPage} />
                      <Route path="/" component={HomePage} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </PeopleContextProvider>
                </TvGenresContextProvider>
              </GenresContextProvider>
            </TvShowsContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));