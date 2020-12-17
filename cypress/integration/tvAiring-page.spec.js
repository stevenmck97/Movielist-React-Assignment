/* eslint-disable no-undef */
let tvShows;    // List of tv shows from TMDB

// Utility functions
const filterByTitle = (tvList, string) =>
    tvList.filter((t) => t.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
    tvList.filter((t) => t.genre_ids.includes(genreId));


describe("Airing TV Page ", () => {
    before(() => {
        // Get tv shows from TMDB and store in tvShows variable.
        cy.request(
            `https://api.themoviedb.org/3/tv/on_the_air?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                tvShows = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000);
        cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Airing TV Shows").click();
        cy.wait(2000);
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.wait(2000);
            cy.get("h2").contains("Airing Tv Shows");
            cy.wait(2000);
            cy.get(".badge").contains(20);
        });

        describe("Filtering", () => {
            describe("By tv show title", () => {
                it("should display tv shows with 'p ' in the title", () => {
                    const searchString = 'p'
                    const matchingTvShows = filterByTitle(tvShows, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingTvShows.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingTvShows[index].name);
                    });
                })
                it("should display tv shows with 'o' in the title", () => {
                    const searchString = "o";
                    const matchingTvShows = filterByTitle(tvShows, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingTvShows.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingTvShows[index].name);
                    })
                })
                it("should display tv shows with 'xyz' in the title", () => {
                    const searchString = "xyz";
                    const matchingTvShows = filterByTitle(tvShows, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingTvShows.length);
                    cy.get(".card").should('not.exist')
                })
            })
            describe("By tv show genre", () => {
                it("should display tv shows with the specified genre only", () => {
                    const selectedGenreId = 35;
                    const selectedGenreText = "Comedy";
                    const matchingTvShows = filterByGenre(tvShows, selectedGenreId);
                    cy.get("select").select(selectedGenreText);
                    cy.get(".card").should("have.length", matchingTvShows.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingTvShows[index].name);
                    });
                });
                it("should display tv shows with the specified genre and name", () => {
                    const searchString = "o";
                    const selectedGenreId = 35;
                    const selectedGenreText = "Comedy";
                    const matchingGenres = filterByGenre(tvShows, selectedGenreId);
                    const matchingTvShows = filterByTitle(matchingGenres, searchString)
                    cy.get("input").clear().type(searchString);
                    cy.get("select").select(selectedGenreText);
                    cy.get(".card").should("have.length", matchingTvShows.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingTvShows[index].name);
                    });
                });
            });

            describe("Adding tv show to watch list", () => {
                it("should add 2 cards to tv watch list", () => {
                    cy.get(".card").eq(0).get("button").contains("Add to Watch List").click();
                    cy.get(".card").eq(1).get("button").contains("Add to Watch List").click();
                    cy.get(".card").eq(2).get("button").contains("Add to Watch List").click();
                    cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Watchlist TV Shows").click();
                    cy.get(".badge").contains(2);
                });
            });
        });
    });
});


