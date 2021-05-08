import { Box, Container, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useConfig } from '../runtime/config/ConfigContext';
import ProgramList from '../features/program/ProgramList';
import { useHistory } from 'react-router';
import { opPage } from '../routes';

const useStyles = makeStyles((theme) => createStyles({
  subtitle: {
    color: theme.palette.primary.dark
  }
}));

export default function ProgramsScreen() {
  const classes = useStyles();
  const history = useHistory();
  const { programs } = useConfig();
  return (
    <Container maxWidth={'md'}>
      <Box my={2} textAlign={'center'}>
        <Typography component={'h1'} variant={'h2'} color={'primary'}>Liquidity Mining Programs</Typography>
        <Typography variant={'subtitle1'} className={classes.subtitle}>Select a program to stake, unstake or claim your
          rewards.</Typography>
      </Box>
      <ProgramList
        programs={programs}
        onProgramSelect={(t) => {
          history.push(opPage(t));
        }} />

    </Container>);
}
