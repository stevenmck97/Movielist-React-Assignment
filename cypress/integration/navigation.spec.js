/* eslint-disable no-undef */
let movies;
let tvShows;
let popular;
const movieId = 531219; // Enola Holmes movie id
const tvId = 71712; // The Good Doctor tv id
let reviews;

describe("Navigation", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
        cy.request(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
                "TMDB_KEY"
            )}`
        )
            .its("body")
            .then((response) => {
                console.log(response);
                reviews = response.results;
            });
        cy.request(
            `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                tvShows = response.results;
            });
    });

    describe("From the home page", () => {
        beforeEach(() => {
            cy.visit("/");
            cy.wait(2000)
        });
        it("should navigate to the movie details page and change browser URL", () => {
            cy.get(".card").eq(1).find("img").click();
            cy.wait(2000)
            cy.url().should("include", `/movies/${movies[1].id}`);
            cy.wait(2000)
            cy.get("h2").contains(movies[1].title);
        });
        it("should allow navigation from site header to movie dropdown pages", () => {
            cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Favorite Movies").click();
            cy.url().should("include", `movies/favorites`);
            cy.wait(2000)
            cy.get("h2").contains("Favorite Movies");

            cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Upcoming Movies").click();
            cy.url().should("include", `movies/upcoming`);
            cy.wait(2000)
            cy.get("h2").contains("Upcoming Movies");

            cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Watchlist Movies").click();
            cy.url().should("include", `movies/watchList`);
            cy.wait(2000)
            cy.get("h2").contains("Movies Watch List");

            cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Discover Movies").click();
            cy.url().should("include", `/`);
            cy.wait(2000)
            cy.get("h2").contains("Discover Movies");
        });
        it("should allow navigation from site header to tv shows dropdown pages", () => {
            cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Favorite TV Shows").click();
            cy.url().should("include", `tv/favorites`);
            cy.wait(2000)
            cy.get("h2").contains("Favorite Tv Shows");

            cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Airing TV Shows").click();
            cy.url().should("include", `tv/airing`);
            cy.wait(2000)
            cy.get("h2").contains("Airing Tv Shows");

            cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Top Rated TV Shows").click();
            cy.url().should("include", `tv/topRated`);
            cy.wait(2000)
            cy.get("h2").contains("Top Rated Tv Shows");

            cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Watchlist TV Shows").click();
            cy.url().should("include", `tv/watchList`);
            cy.wait(2000)
            cy.get("h2").contains("Tv Show Watch List");

            cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Discover TV Shows").click();
            cy.url().should("include", `tv/discover`);
            cy.wait(2000)
            cy.get("h2").contains("Discover Tv Shows");
        });
        it("should allow navigation from site header to Actors dropdown pages", () => {
            cy.get("button").contains("Actors").get("#dropdown-basic3").click().get(".dropdown-item").contains("Popular Actors").click();
            cy.url().should("include", `person/popular`);
            cy.wait(2000)
            cy.get("h2").contains("Popular Actors");

            cy.get("button").contains("Actors").get("#dropdown-basic3").click().get(".dropdown-item").contains("Favorite Actors").click();
            cy.url().should("include", `person/favorites`);
            cy.wait(2000)
            cy.get("h2").contains("Favorite Actors");
        });


        describe("From the Movie Details page ", () => {
            beforeEach(() => {
                cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Discover Movies").click();
                cy.wait(2000);
                cy.visit(`/movies/${movieId}`);
                cy.wait(2000)
            });
            it("should change browser URL when show/hide reviews is clicked", () => {
                cy.contains("Show Reviews").click();
                cy.url().should("include", `/movies/${movieId}/reviews`);
                cy.contains("Hide Reviews").click();
                cy.url().should("not.include", `/movies/${movieId}/reviews`);
            });
            it("navigate to the full review page when a 'Full Review' link is clicked", () => {
                cy.contains("Show Reviews").click();
                cy.url().should("include", `/movies/${movieId}/reviews`);
                cy.get("tbody").find("a").eq(0).click();
                cy.url().should("include", `/reviews`);
            });
        });

        describe("From the TV Show Details page ", () => {
            beforeEach(() => {
                cy.visit(`/tv/${tvShows[0].id}`);
                cy.wait(2000)
            });
            it("should change browser URL when show/hide reviews is clicked", () => {
                cy.contains("Show Reviews").click();
                cy.url().should("include", `/tv/${tvShows[0].id}/reviews`);
                cy.contains("Hide Reviews").click();
                cy.url().should("not.include", `/tv/${tvShows[0].id}/reviews`);
                
            });
            it("navigate to the full review page when a 'Full Review' link is clicked", () => {
                cy.contains("Show Reviews").click();
                cy.url().should("include", `/tv/${tvShows[0].id}/reviews`);
                cy.get("tbody").find("a").eq(0).click();
                cy.url().should("include", `/tvReviews`);
            });
        });

        describe("From the Favorites page", () => {
            beforeEach(() => {
                cy.visit("/");
                cy.wait(2000)
                cy.get(".card").eq(0).find("button").click();
                cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Favorite Movies").click();
            });
            it("should navigate to the movies detail page and change the browser URL", () => {
                cy.get(".card").eq(0).find("img").click();
                cy.wait(2000)
                cy.url().should("include", `/movies/${movies[0].id}`);
                cy.wait(2000)
                cy.get("h2").contains(movies[0].title);
            });
        });

        describe("From the TV Favorites page", () => {
            beforeEach(() => {
                cy.visit("/tv/discover/");
                cy.wait(2000)
                cy.get(".card").eq(0).find("button").click();
                cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Favorite TV Shows").click();
            });
            it("should navigate to the tv details page and change the browser URL", () => {
                cy.get(".card").eq(0).find("img").click();
                cy.wait(2000)
                cy.url().should("include", `/tv/${tvShows[0].id}`);
                cy.wait(2000)
                cy.get("h2").contains(tvShows[0].name);
            });
        });

        describe("The Go Back button", () => {
            beforeEach(() => {
                cy.visit("/");
                cy.wait(2000)
            });
            it("should navigate from home page to movie details and back", () => {
                cy.get(".card").eq(1).find("img").click();
                cy.wait(2000)
                cy.get("svg[data-icon=arrow-circle-left]").click();
                cy.url().should("not.include", `/movies`);
                cy.wait(2000)
                cy.get("h2").contains("Discover Movies");
            });
            it("should navigate from favorites page to movie details and back", () => {
                cy.get(".card").eq(0).find("button").click();
                cy.wait(2000)
                cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Favorite Movies").click();
                cy.wait(2000)
                cy.get(".card").eq(0).find("img").click();
                cy.get("svg[data-icon=arrow-circle-left]").click();
                cy.url().should("include", `/movies/favorites`);
                cy.wait(2000)
                cy.get("h2").contains("Favorite Movies");
            });
        });
    });
});


