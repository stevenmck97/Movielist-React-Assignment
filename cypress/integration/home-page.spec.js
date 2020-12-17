/* eslint-disable no-undef */
let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));


describe("Home Page ", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                movies = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000);
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h2").contains("Discover Movies");
            cy.get(".badge").contains(20);
        });

        describe("Filtering", () => {
            describe("By movie title", () => {
                it("should display movies with 'p ' in the title", () => {
                    const searchString = 'p'
                    const matchingMovies = filterByTitle(movies, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingMovies.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingMovies[index].title);
                    });
                })
                it("should display movies with 'o' in the title", () => {
                    const searchString = "o";
                    const matchingMovies = filterByTitle(movies, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingMovies.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingMovies[index].title);
                    })
                })
                it("should display movies with 'xyz' in the title", () => {
                    const searchString = "xyz";
                    const matchingMovies = filterByTitle(movies, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingMovies.length);
                    cy.get(".card").should('not.exist')
                })
            })
            describe("By movie genre", () => {
                it("should display movies with the specified genre only", () => {
                    const selectedGenreId = 35;
                    const selectedGenreText = "Comedy";
                    const matchingMovies = filterByGenre(movies, selectedGenreId);
                    cy.get("select").select(selectedGenreText);
                    cy.get(".card").should("have.length", matchingMovies.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingMovies[index].title);
                    });
                });
                it("should display movies with the specified genre and title", () => {
                    const searchString = "o";
                    const selectedGenreId = 35;
                    const selectedGenreText = "Comedy";
                    const matchingGenres = filterByGenre(movies, selectedGenreId);
                    const matchingMovies = filterByTitle(matchingGenres, searchString)
                    cy.get("input").clear().type(searchString);
                    cy.get("select").select(selectedGenreText);
                    cy.get(".card").should("have.length", matchingMovies.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingMovies[index].title);
                    });
                });
            });

            describe("Adding movie to favourites", () => {
                it("should add 3 cards to favorite movies", () => {
                    cy.get(".card").eq(0).get("button").contains("Add to Favorites").click();
                    cy.get(".card").eq(1).get("button").contains("Add to Favorites").click();
                    cy.get(".card").eq(2).get("button").contains("Add to Favorites").click();
                    cy.get("button").contains("Movies").get("#dropdown-basic").click().get(".dropdown-item").contains("Favorite Movies").click();
                    cy.get(".badge").contains(3);
                });
            });
        });
    });
});


