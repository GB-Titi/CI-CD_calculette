// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            "results": [
              {
                "gender": "female",
                "name": {
                  "title": "Mrs",
                  "first": "Fatma",
                  "last": "Tekelioğlu"
                },
                "location": {
                  "street": {
                    "number": 1062,
                    "name": "Istiklal Cd"
                  },
                  "city": "Erzurum",
                  "state": "Şırnak",
                  "country": "Turkey",
                  "postcode": 92022,
                  "coordinates": {
                    "latitude": "68.8361",
                    "longitude": "176.3722"
                  },
                  "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                  }
                },
                "email": "fatma.tekelioglu@example.com",
                "login": {
                  "uuid": "6c8a174e-e8c4-4b1f-b681-5ded99376ab8",
                  "username": "biggoose831",
                  "password": "kisskiss",
                  "salt": "FWrRh97x",
                  "md5": "0eade9d73dcd9e1f6d15c1d059c17317",
                  "sha1": "87486aa21f8a8a7b2a56b43c0bcd2ca0a995438d",
                  "sha256": "c46cfbba9d537f362fd20b63c751b40b23b65737e346498780d1f2e7c96c202d"
                },
                "dob": {
                  "date": "1994-11-12T04:59:29.964Z",
                  "age": 28
                },
                "registered": {
                  "date": "2016-08-29T08:01:26.648Z",
                  "age": 6
                },
                "phone": "(514)-466-5811",
                "cell": "(089)-931-8983",
                "id": {
                  "name": "",
                  "value": null
                },
                "picture": {
                  "large": "https://randomuser.me/api/portraits/women/55.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
                },
                "nat": "TR"
              }
            ],
            "info": {
              "seed": "0b4e1544e2a80dd8",
              "results": 1,
              "page": 1,
              "version": "1.3"
            }
          }
        )
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load randomuser mock", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText(/Fatma/i));
    expect(container.getElementsByTagName("img").length).toBe(1);
    // expect(container.getElementsByTagName("p").length).toBe(1);
  });