import * as React from "react";
import styled from "styled-components";

import Colors from "./colors.js";
import {MAX_WIDTH} from "./grid.js";

const BasePage = styled.div`
    background-color: ${Colors.offWhite};
    color: ${Colors.offBlack};
    min-height: 100vh;
`;

const Page = styled.main`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    margin: 0 auto;
    max-width: ${MAX_WIDTH}px;
`;

const App = () => (
    <BasePage>
        <Page>
            Kairui Wang
        </Page>
    </BasePage>
);

export default App;
