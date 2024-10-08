import { describe, expect, test } from "vitest";

import { overrideOnce, render, screen } from "app/test/unit";

import { ElectionProvider } from "@kiesraad/api";
import { electionMock, electionMockResponse } from "@kiesraad/api-mocks";

import { InputHomePage } from "./InputHomePage";

describe("InputHomePage", () => {
  overrideOnce("get", "/api/elections/1", 200, electionMockResponse);
  test("Election name", async () => {
    render(
      <ElectionProvider electionId={1}>
        <InputHomePage />
      </ElectionProvider>,
    );

    expect(await screen.findByText(electionMock.name));
  });
});
