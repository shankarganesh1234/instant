import React from 'react';
import 'typeface-roboto';
import './App.css';
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Divider from "@material-ui/core/Divider";
import TimestampDisplay from "./TimestampDisplay";
import DateDisplay from "./DateDisplay";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2019,
            month: 1,
            day: 1,
            hour: 59,
            minute: 59,
            second: 59,
            ts: 1574220389
        }
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
            <Container>
                <Header/>
                <Divider/>
                <br/>
                <TimestampDisplay/>
                <br/>
                <DateDisplay/>
            </Container>
            </ThemeProvider>
        )
    }
}

export default App;
