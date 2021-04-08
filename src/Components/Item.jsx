import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Item() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      First list of products:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product One </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product Two</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product Three</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product Four</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Product Five</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Product Six</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        Second list of products:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>Product Seven</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>Product Eight</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
        <Paper className={classes.paper}>Product Nine</Paper>
      </div>
      <div style={{ gridColumnEnd: 'span 3' }}>
        <Paper className={classes.paper}>Product Ten</Paper>
      </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>Product Eleven</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>Product Twelve</Paper>
        </div>
      </div>
    </div>
  );
}
