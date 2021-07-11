import useStyles from './DetailsPageStyles';
import {Toolbar, Typography,AppBar ,Container,Box} from "@material-ui/core";
import AppBarCollapse from '../../Layouts/MainLayout/appBarCollapse/AppBarCollapse';
import FooterLayout from '../../Layouts/FooterLayout/FooterLayout';
import DetailsMainLayout from '../../Layouts/DetailsMainLayout/DetailsMainLayout';
import { Link } from 'react-router-dom';
import {HomePage} from '../../Routes/Routes'

function DetailsPage() {
  const classes = useStyles();

    return (
      <>
        <Container>
          <AppBar 
              position="fixed" 
              wrap
              elevation={0}
              className={classes.appBarScrolled}
              xs={12} sm={3}
              wrap
          >
              <Toolbar wrap>
                  <Typography className={classes.title} variant="h3" edge="start" noWrap>
                      <Link to={HomePage}  style={{textDecoration: 'none',color:'black'}}><i class="fab fa-mdb"></i></Link>
                  </Typography>
                  <AppBarCollapse/>
              </Toolbar>
          </AppBar> 
        </Container>
            <Box component="div" height={200} style={{backgroundColor:"#F8F8F8" , textAlign: 'center',}}>
                  <Typography className={classes.typography} variant="h4">Product page</Typography>
            </Box>
        <Container style={{marginTop:'40px'}}>
          <DetailsMainLayout/>
        </Container>  
        <FooterLayout/>
      </>
    );
  }
  
  export default DetailsPage;
  