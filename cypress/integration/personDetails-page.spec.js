/* eslint-disable no-undef */
let personId = null
let person;

describe("Actor Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                return response.results[2].id;
            })
            .then((arbitraryPersonIdignored) => {
                personId = arbitraryPersonIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}`
                    )
                    .its("body");
            })
            .then((personDetails) => {
                person = personDetails;
                return personDetails.id;
            })
    });
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(2000);
        cy.get("button").contains("Actors").get("#dropdown-basic3").click().get(".dropdown-item").contains("Popular Actors").click();
        cy.get(".card").eq(2).find("img").click();
        cy.wait(2000);
    });

    it("should display actor's name in the page header", () => {
        cy.get("h2").contains(person.name);
    });

    it("should display the actor's details", () => {
        // cy.get("h4").contains("Biography");
        // cy.get("h4").next().contains(person.biography);
        cy.get("ul")
            .eq(1)
            .within(() => {
                cy.get("li").eq(0).contains("Name");
                cy.get("li").eq(1).contains(person.name);

                cy.get("li").eq(2).contains("Birthday");
                cy.get("li").eq(3).contains(person.birthday);

                cy.get("li").eq(4).contains("Gender");
                cy.get("li").eq(5).contains(person.gender);

                cy.get("li").eq(6).contains("Place of Birth");
                cy.get("li").eq(7).contains(person.place_of_birth);

            });
    });
    // it("should display the Home icon with the correct URL value", () => {
    //     cy.get(".fa-home")
    //         .parent()
    //         .should("have.attr", "href")
    //         .should("include", person.homepage);
    // });
    it("should display an actor's profile picture on the page", () => {
        cy.get("img").should('be.visible');
    });
});