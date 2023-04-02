import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoice from "./scenes/invoice";
import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calender from "./scenes/calender";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Layout />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoice />} />
                            <Route path="/form" element={< Form/>} />
                            {/* <Route path="/bar" element={< Bar/>} /> */}
                            {/* <Route path="/pie" element={< Pie/>} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geograpghy" element={<Geography />} /> */}
                            {/* <Route path="/calender" element={<Calender />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
