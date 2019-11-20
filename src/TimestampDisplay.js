import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import 'moment-timezone';
import Moment from 'moment';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            minWidth: 100
        },
        title: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 150,
        },
    }));

export default function TimestampDisplay(props) {
    const classes = useStyles();
    const dateObj = new Date();

    const [year, setYear] = useState(dateObj.getUTCFullYear());
    const [month, setMonth] = useState(dateObj.getUTCMonth() + 1);
    const [day, setDay] = useState(dateObj.getUTCDate());
    const [hour, setHour] = useState(dateObj.getUTCHours());
    const [minute, setMinute] = useState(dateObj.getUTCMinutes());
    const [second, setSecond] = useState(dateObj.getUTCSeconds());
    const [ts, setTs] = useState(dateObj.getTime());
    const [copied, setCopied] = useState(false);

    function handleChange(e, name) {
        debugger
        if (name === 'year') {
            setYear(e.target.value);
        } else if (name === 'month')
            setMonth(e.target.value);
        else if (name === 'day')
            setDay(e.target.value);
        else if (name === 'hour')
            setHour(e.target.value);
        else if (name === 'minute')
            setMinute(e.target.value);
        else if (name === 'second')
            setSecond(e.target.value);
    }

    useEffect(() => {
        let d = (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second).toString();
        let m = Moment(d, "YYYY-MM-DD HH:mm:ss");
        setTs(m.valueOf());
        setCopied(false);
    }, [year, month, day, hour, minute, second]);

    return (
        <Card className={classes.card}>
            <CardContent>
                <Box m={3}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-number"
                            label="Year - yyyy"
                            value={year}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'year')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Month - 1-12"
                            value={month}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'month')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Day - 1-31"
                            value={day}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'day')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Hour - hh (0-23)"
                            value={hour}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'hour')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Minute - mm (0-59)"
                            value={minute}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'minute')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Second - ss (0-59)"
                            value={second}
                            type="number"
                            className={classes.textField}
                            onChange={(e) => handleChange(e, 'second')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </form>
                </Box>


                <Typography className={classes.title} gutterBottom>
                    Timestamp in milliseconds (UTC)
                </Typography>
                <Typography className={classes.title} variant="h5" component="h2">
                    {ts} &nbsp;
                    <Link component="button" variant="body2" title="Copy timestamp">
                    <CopyToClipboard text={ts}
                                     onCopy={() => setCopied(true)}>
                        <FileCopyIcon fontSize='small'/>
                    </CopyToClipboard>
                    </Link>
                    {copied && (
                        <Typography variant="body2" gutterBottom>
                            Copied!
                        </Typography>
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
}
