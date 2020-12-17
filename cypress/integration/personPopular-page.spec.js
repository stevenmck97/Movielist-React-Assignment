/* eslint-disable no-undef */
let popular;    // List of actors from TMDB

// Utility functions
const filterByName = (personList, string) =>
    personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("Popular Actors page ", () => {
    before(() => {
        // Get Popular actors from TMDB and store in popular variable.
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                popular = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000);
        cy.get("button").contains("Actors").get("#dropdown-basic3").click().get(".dropdown-item").contains("Popular Actors").click();
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h2").contains("Popular Actors");
            cy.get(".badge").contains(20);
        });

        describe("Filtering", () => {
            describe("By actor name", () => {
                it("should display actors with 'p ' in their name", () => {
                    const searchString = 'p'
                    const matchingActors = filterByName(popular, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingActors.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingActors[index].name);
                    });
                })
                it("should display actors with 'o' in their name", () => {
                    const searchString = "o";
                    const matchingActors = filterByName(popular, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingActors.length);
                    cy.get(".card").each(($card, index) => {
                        cy.wrap($card)
                            .find(".card-title")
                            .should("have.text", matchingActors[index].name);
                    })
                })
                it("should display actors with 'xyz' in their name", () => {
                    const searchString = "xyz";
                    const matchingActors = filterByName(popular, searchString);
                    cy.get("input").clear().type(searchString);
                    cy.get(".card").should("have.length", matchingActors.length);
                    cy.get(".card").should('not.exist')
                })
            })
           
            describe("Adding actor to favourites", () => {
                it("should add 3 cards to favorite actors", () => {
                    cy.get(".card").eq(0).get("button").contains("Add to Favorites").click();
                    cy.get(".card").eq(1).get("button").contains("Add to Favorites").click();
                    cy.get(".card").eq(2).get("button").contains("Add to Favorites").click();
                    cy.get("button").contains("Actors").get("#dropdown-basic3").click().get(".dropdown-item").contains("Favorite Actors").click();
                    cy.get(".badge").contains(3);
                });
            });
        });
    });
});


