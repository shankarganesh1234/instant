import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Moment from "react-moment";
import 'moment-timezone';
import MomentJS from 'moment';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            minWidth: 100
        },
        title: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            fontFamily: 'BlinkMacSystemFont'
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 350
        },
    }));


export default function DateDisplay() {
    const classes = useStyles();
    const [ts, setTs] = useState(Date.now()/1000 | 0 );
    const [tsInputField, setTsInputField] = useState(MomentJS.valueOf());

    function handleTsChange(e) {
        let numberOfdigits = e.target.value.toString().length;
        let num = e.target.value;
        // milliseconds
        if(numberOfdigits === 13) {
            num = num/1000;
        }
        setTsInputField(e.target.value);
        setTs(num);
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Box m={3}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-number"
                            label="Unix timestamp seconds or milliseconds"
                            type="number"
                            value={tsInputField}
                            onChange={handleTsChange}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </form>
                </Box>
                <Typography className={classes.title} gutterBottom>
                    Date and Time (UTC)
                </Typography>
                <Typography variant="h5" component="h2" className={classes.title}>
                    <Moment unix tz="utc" format="YYYY/MM/DD h:mm:ss a">{ts}</Moment>
                </Typography>
            </CardContent>
        </Card>
    );
}
