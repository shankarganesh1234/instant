import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function Header() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Typography variant="h1" component="h2" gutterBottom>
                    Timestamp.fyi <AccessTimeIcon/>
                </Typography>
                <Typography gutterBottom>
                    Date and Timestamp conversion tools
                </Typography>
            </Container>
        </React.Fragment>
    );
}
