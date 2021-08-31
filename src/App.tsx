import AppRouter from './AppRouter';
import Header from './components/common/Header';
function App() {
  let hello = '';
  console.log(hello);

  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
}

export default App;
