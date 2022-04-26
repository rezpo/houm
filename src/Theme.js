import { createTheme } from "@mui/material/styles";

const colors = {
    primary: {
        main: "#FF452B",
        light: "#ffdbd0",
        dark: "#b2301e",
    },
    tertiary: {
        main: "#424242",
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main,
            light: colors.primary.light,
            dark: colors.primary.dark,
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        color: colors.primary.main,
        fontWeight: 400,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
        h5: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "0.875rem",
        },
        body1: {
            fontSize: "1rem",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 200,
        }
    },
});

export default theme;