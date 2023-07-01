import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";

import Contacts from "./scenes/contacts";



import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import RedemptionWithDialog from "./scenes/redemption";
import RedemptionWithGold from "./scenes/redemption/redemptionGold";
import RedemptionWithCash from "./scenes/redemption/redemptionCash";
import Redemption from "./scenes/redemption/redemption";
import GoldRateHistory from "./scenes/dashboard/GoldRateHistory";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/redemption" element={<RedemptionWithDialog/>} />
      
              <Route path="/redemption/redeem" element={<Redemption/>} />
              <Route path="/redemption/withGold" element ={<RedemptionWithGold/>}/>
              <Route path="/redemption/withCash" element ={<RedemptionWithCash/>}/>
              <Route path="/Dashboard/GoldrateHistory" element ={<GoldRateHistory/>}/>
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
