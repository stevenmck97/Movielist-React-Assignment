import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";    // CHANGED
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
//tv pages
import AddTvReviewPage from './pages/addTvReviewPage';
import FavoriteTvShowsPage from './pages/tvFavoritesPage';
import TvPage from './pages/tvDetailsPage';
import TvListPage from './pages/tvDiscoverPage';
import AiringTvShowsPage from './pages/tvAiringPage';
import TvReviewPage from './pages/tvReviewPage';
import TvShowsContextProvider from "./contexts/tvShowsContext";
import TvGenresContextProvider from "./contexts/tvGenresContext";

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
                  <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route exact path="/tvReviews/form" component={AddTvReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route path="/tvReviews/:id" component={TvReviewPage} />
                    <Route exact path="/tv/favorites" component={FavoriteTvShowsPage} />       
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route exact path="/tv/airing" component={AiringTvShowsPage} />
                    <Route exact path="/tv/discover" component={TvListPage} />
                    <Route path="/tv/:id" component={TvPage} />
                
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
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