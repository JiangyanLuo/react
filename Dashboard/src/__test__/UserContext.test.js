import {expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {StaticRouter} from "react-router-dom/server";
import Header from "../components/layout/Header";
import { UserContext } from "../client/context/UserContext";

test("displays the correct Context Value", async function(){
    const wrapper = function ({children}){
        const user = {
            storeNumber: '003',
            location: "Brooklyn, NY"
        }

        return <UserContext.Provider value={user}>{children}</UserContext.Provider>
    };

    render(
        <StaticRouter>
            <Header />
        </StaticRouter>,
        {wrapper});
    
    const welcomeUser = await screen.getByText(/^Store/).textContent;

    expect(welcomeUser).toBe("Store 003");
})

