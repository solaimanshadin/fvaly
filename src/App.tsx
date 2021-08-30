import SideMenu from 'components/SideMenu/SideMenu';
import AppRouter from './AppRouter';
import Header from './components/common/Header';
function App() {
  let hello = '';
  console.log(hello);

  return (
    <>
      <AppRouter>
        <Header />
        <SideMenu />
      </AppRouter>
    </>
  );
}

export default App;
