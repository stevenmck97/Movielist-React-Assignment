/* eslint-disable no-undef */
let tvId = null
let tv;

describe("TV Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                return response.results[2].id;
            })
            .then((arbitraryTvIdignored) => {
                tvId = arbitraryTvIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}`
                    )
                    .its("body");
            })
            .then((tvDetails) => {
                tv = tvDetails;
                return tvDetails.id;
            })
    });
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(2000);
        cy.get("button").contains("TV Shows").get("#dropdown-basic2").click().get(".dropdown-item").contains("Discover TV Shows").click();
        cy.get(".card").eq(2).find("img").click();
        cy.wait(2000);
      });

    it("should display tv show title in the page header", () => {
        cy.get("h2").contains(tv.name);
    });

    it("should display the tv show's details", () => {
        cy.get("h4").contains("Overview");
        cy.get("h4").next().contains(tv.overview);
        cy.get("ul")
            .eq(1)
            .within(() => {
                cy.get("li").eq(2).contains("Release Date");
                cy.get("li").eq(3).contains(tv.first_air_date);
        // cy.get("ul")
        // .eq(2)
        // .within(() => {
        //     cy.get("li").eq(0).contains("Genres");
        //     cy.get("li").eq(1).contains(tv.genres);
              
                // cy.get("li").each(($li, movie) => {
                //     cy.wrap($li)
                //         .find("Genres")
                //         .should("have.text", movie.genre);
                // });
            });
    });
    it("should display the Home icon with the correct URL value", () => {
        cy.get(".fa-home")
            .parent()
            .should("have.attr", "href")
            .should("include", tv.homepage);
    });
    it("should display a tv show poster on the page", () => {
        cy.get("img").should('be.visible');
    });
});