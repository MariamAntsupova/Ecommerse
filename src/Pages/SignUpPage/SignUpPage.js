import useStyles from '../Details/DetailsPageStyles';
import {Toolbar, Typography,AppBar ,Container,Box} from "@material-ui/core";
import AppBarCollapse from '../../Components/AppBar/appBarCollapse/AppBarCollapse';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import {HomePage} from '../../Routes/Routes'
import LogIn from '../../Components/LogIn/LogIn';
import SignUp from '../../Components/SignUp/SignUp';

function SignUpPage() {
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
        <Container style={{marginTop:'120px' , textAlign:'center'}}>
            <Typography variant = 'h2'>Sign Up</Typography>
            <SignUp/>
        </Container>  
        <Footer/>
      </>
    );
  }
  
  export default SignUpPage;
  