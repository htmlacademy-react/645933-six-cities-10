import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  offersNumber: number;
}

function App({ offersNumber }: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersNumber={offersNumber} />
  );
}

export default App;
