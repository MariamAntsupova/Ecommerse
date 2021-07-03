import DrawerLayout from "../Layouts/DrawerLayout/DrawerLayout";
import Cards from "../Layouts/Cards/Cards";
import FooterLayout from "../Layouts/FooterLayout/FooterLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";

function MainPage() {

    return (
      <div>
          <MainLayout> 
              {/* <DrawerLayout/> */}
              <Cards/>
          </MainLayout>
          <FooterLayout/>

      </div>
    );
  }
  
  export default MainPage;
  