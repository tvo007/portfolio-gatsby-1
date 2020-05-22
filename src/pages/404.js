import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'gatsby-theme-material-ui';
//import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import Layout from '../layouts/Layout';

export default function Index () {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            404{' '}
          </Typography>
          <Link to="/" color="secondary">
            Go back to index.
          </Link>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
