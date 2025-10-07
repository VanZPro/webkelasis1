import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AOS from "aos"
import "aos/dist/aos.css"

// --- Impor Halaman untuk Konten Tab ---
import StrukturKelas from "./StrukturKelas"
import Schedule from "./Schedule"
import Tugas from "./Tugas"; // <-- TAMBAHKAN IMPOR INI

function TabPanel(props) {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    }
}

export default function FullWidthTabs() {
    const theme = useTheme()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    const commonTabStyles = {
        fontWeight: "medium",
        color: "white",
        fontSize: ["1.3rem", "1.5rem"], // Ukuran font responsif (mobile, desktop)
        textTransform: "capitalize",
        fontFamily: '"Poppins", sans-serif',
        padding: "0.5rem",
        minWidth: 'auto',
    };

    return (
        <div className="md:px-[10%] md:mt-5 mt-8" id="Tabs" data-aos="fade-up" data-aos-duration="800" >
            <Box sx={{ width: "100%" }}>
                <AppBar
                    position="static"
                    sx={{ bgcolor: "transparent", boxShadow: "none" }}
                    className="px-4 md:px-[10%]" // Sesuaikan padding untuk mobile
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="inherit"
                        variant="fullWidth" // Ganti menjadi fullWidth agar rapi di semua layar
                        sx={{
                            "& .MuiTabs-indicator": {
                                borderBottom: "2px solid white",
                            },
                        }}
                    >
                        {/* === TAB 1: STRUCTURE === */}
                        <Tab
                            label="Structure"
                            {...a11yProps(0)}
                            sx={commonTabStyles}
                            id="Glow"
                        />

                        {/* === TAB 2: SCHEDULE === */}
                        <Tab
                            label="Schedule"
                            {...a11yProps(1)}
                            sx={commonTabStyles}
                            id="Glow"
                        />

                        {/* === TAB 3: TUGAS (BARU) === */}
                        <Tab
                            label="Tugas"
                            {...a11yProps(2)}
                            sx={commonTabStyles}
                            id="Glow"
                        />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}>
                    
                    {/* --- KONTEN TAB 1 --- */}
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <StrukturKelas />
                    </TabPanel>
                    
                    {/* --- KONTEN TAB 2 --- */}
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Schedule />
                    </TabPanel>

                    {/* --- KONTEN TAB 3 (BARU) --- */}
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Tugas />
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    )
}