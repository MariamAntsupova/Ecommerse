import { Grid } from "@material-ui/core";
import Cards from "../Layouts/CardsLayout/CardsLayout";
import useStyles from "../Layouts/CardsLayout/CardsLayoutStyles";
import FooterLayout from "../Layouts/FooterLayout/FooterLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Sidebar from "../Layouts/SidebarLayout/SidebarLayout";

function MainPage() {
  const classes = useStyles();

    return (
      <div>
          <MainLayout className={classes.main}> 
            <Grid container direction="row" wrap>
                <Grid item sm={4} xs={12}>
                   <Sidebar />
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Cards />
                </Grid>
            </Grid>

          </MainLayout>
          <FooterLayout/>

      </div>
    );
  }
  
  export default MainPage;
  