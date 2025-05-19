import { render, screen, waitFor } from "@testing-library/react";
import SwapiPage from "./SwapiPage.jsx";
import { vi } from "vitest";
import React from "react";

beforeEach(() => {
    vi.resetAllMocks();
});

test("відображає заголовок", () => {
    render(<SwapiPage />);
    expect(screen.getByText(/Star Wars Characters/i)).toBeInTheDocument();
});

test("показує індикатор завантаження", () => {
    render(<SwapiPage />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});

test("отримує і відображає персонажів", async () => {
    vi.stubGlobal("fetch", () =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        id: 1,
                        name: "Luke Skywalker",
                        image: "https://example.com/luke.jpg",
                        species: "human",
                        gender: "male",
                    },
                ]),
        })
    );

    render(<SwapiPage />);

    await waitFor(() => {
        expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
        expect(screen.getByText(/Species: human/i)).toBeInTheDocument();
    });
});

test("показує повідомлення про помилку, якщо запит не вдався", async () => {
    vi.stubGlobal("fetch", () => Promise.reject("API error"));

    render(<SwapiPage />);

    await waitFor(() => {
        expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
        expect(screen.getByText(/не вдалося завантажити персонажів/i)).toBeInTheDocument();
    });
});
