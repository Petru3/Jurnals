import {useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import {SetAuthToken} from "./utils/token/token"


// pages
import Cultural from "./pages/culturalJurnal/cultural.page"
import Activity from "./pages/ActivityJurnal/activity.page"

function App(){

    useEffect(() => {
        if(localStorage.token){
            SetAuthToken(localStorage.token);
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Activity />}/>
                    <Route path={"/1"} element={<Cultural />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
