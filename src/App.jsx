import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import currentThreadExecute from './common/current';
import backgroundThreadExecute from './common/background';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [currData, setCurrData] = useState({ result: '', computeTime: '' });
  const [backgroundData, setBackgroundData] = useState({ result: '', computeTime: '' });
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ display: 'block', margin: '0 auto', width: 300 }}
            onClick={async () => {
              const startTime = new Date();
              const { result } = await currentThreadExecute();
              const endTime = new Date();
              setCurrData({ result, computeTime: endTime.getTime() - startTime.getTime() });
              setMessage('');
            }}
          >
            click to start computing in current thread
          </Button>
          <Paper>
            <Typography component="h3">
              <p>result: {currData.result}</p>
            </Typography>
            <Typography component="h3">
              <p>compite time (ms): {currData.computeTime}</p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ display: 'block', margin: '0 auto', width: 300 }}
            onClick={async () => {
              const startTime = new Date();
              const { result } = await backgroundThreadExecute();
              const endTime = new Date();
              setBackgroundData({ result, computeTime: endTime.getTime() - startTime.getTime() });
              setMessage('');
            }}
          >
            click to start computing in background thread
          </Button>
          <Paper>
            <Typography component="h3">
              <p>result: {backgroundData.result}</p>
            </Typography>
            <Typography component="h3">
              <p>compite time (ms): {backgroundData.computeTime}</p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="secondary"
            style={{ display: 'block', margin: '20px auto', width: 400 }}
            onClick={() => {
              setMessage('');
              setBackgroundData({ result: '', computeTime: '' });
              setCurrData({ result: '', computeTime: '' });
            }}
          >
            clear data
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ display: 'block', margin: '0 auto', width: 400 }}
            onClick={() => {
              setMessage(`button clicked at: ${Date.now()}`);
            }}
          >
            <div>
              <p>click to test ui</p>
              <p><small>(computation in currect thread will be blocking)</small></p>
            </div>
          </Button>
          <p style={{ textAlign: 'center', color: 'purple' }}>{message}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
