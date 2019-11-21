import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MomentJS from 'moment';
import 'moment-timezone';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            minWidth: 100
        },
        title: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            fontFamily: 'BlinkMacSystemFont',
            fontWeight: 'bold'
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
    const initialDt = 946799999000;
    const initialTs = MomentJS(initialDt).format("YYYY-MM-DD HH:mm:ss");
    const classes = useStyles();
    const [ts, setTs] = useState(initialTs);
    debugger
    const [tsInputField, setTsInputField] = useState(946799999000);

    function handleTsChange(e) {
        let num = e.target.value;
        let d = MomentJS(parseInt(num, 10)).format("YYYY-MM-DD HH:mm:ss");
        debugger
        setTsInputField(num);
        setTs(d);
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Box m={3}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-number"
                            label="Unix timestamp milliseconds"
                            type="number"
                            value={tsInputField}
                            onChange={handleTsChange}
                            color={"secondary"}
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
                    {ts}
                </Typography>
            </CardContent>
        </Card>
    );
}
