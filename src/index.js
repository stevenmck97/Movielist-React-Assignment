import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//movie imports
const HomePage = lazy(() => import("./pages/homePage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const MovieWatchListPage = lazy(() => import("./pages/movieWatchListPage"));

//tv imports
const AddTvReviewPage = lazy(() => import("./pages/addTvReviewPage"));
const FavoriteTvShowsPage = lazy(() => import("./pages/tvFavoritesPage"));
const TvPage = lazy(() => import("./pages/tvDetailsPage"));
const TvListPage = lazy(() => import("./pages/tvDiscoverPage"));
const AiringTvShowsPage = lazy(() => import("./pages/tvAiringPage"));
const TopRatedTvShowsPage = lazy(() => import("./pages/tvTopRatedPage"));
const TvReviewPage = lazy(() => import("./pages/tvReviewPage"));
const TvWatchListPage = lazy(() => import("./pages/tvWatchListPage"));
const TvShowsContextProvider = lazy(() => import("./contexts/tvShowsContext"));
const TvGenresContextProvider = lazy(() => import("./contexts/tvGenresContext"));

//people imports
const PersonPopularPage = lazy(() => import("./pages/personPopularPage"));
const FavoritePeoplePage = lazy(() => import("./pages/personFavoritesPage"));
const PersonPage = lazy(() => import("./pages/personDetailsPage"));
const PeopleContextProvider = lazy(() => import("./contexts/peopleContext"));


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <Suspense fallback={<h2>Loading page....</h2>}>
          <SiteHeader />
          <div className="container-fluid">
            <MoviesContextProvider>
              <TvShowsContextProvider>
                <GenresContextProvider>
                  <TvGenresContextProvider>
                    <PeopleContextProvider>
                      <Switch>
                        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
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
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));