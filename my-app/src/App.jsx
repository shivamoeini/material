import React from "react";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import SaveIcon from '@material-ui/icons/Save';
// import Checkbox from "@material-ui/core/CheckBox";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from "@material-ui/core/TextField";
// import { green, orange } from "@material-ui/core/colors";
// import 'fontscoure-roboto';
// import Paper from "@material-ui/core/Paper";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  shiva: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    margin: theme.spacing(16, 32, 5),
    textAlign: 'center',

  },
  mgbuton: {
    padding: '60 35px',
    margin: theme.spacing(4, 1, 3),
    fontSize: 17,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7, 0, 6),

  }, cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))




const theme = createMuiTheme({
  typography: {
    // h2: {
    //   fontSize: 70,
    // },
    h4: {
      fontSize: 30,
    }
  },
})



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const shivaa = useStyles();
  return (

    <ThemeProvider theme={theme}>
      <Container >
        <div className={shivaa.root}>
         
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary">Something Short and leading about the collection below-its contents, the creator,etc.Make it short and sweet, but too short so folks don&apos;t simply skip over it entirely.</Typography>
          <div>
            <Button className={shivaa.mgbuton} variant="contained" color="primary">
              Main call to action
            </Button>
            <Button className={shivaa.mgbuton} variant="outlined" color="primary">
              Secondary action
            </Button>
          </div>
        </div>
      </Container>
      <Container className={shivaa.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia className={shivaa.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={shivaa.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>


            </Grid>
          ))}
        </Grid>
      </Container>

      {/* footer */}
      <footer className={shivaa.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Someting here to give the footer a purpose!
        </Typography>
      </footer>
    </ThemeProvider>
  );
}

export default App;