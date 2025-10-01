import './App.css';
import Desktop from './Components/Desktop';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Frame } from '@react95/core'
import { Button } from '@react95/core'



function App() {
  return (
    <>

    <Frame w="1080px" h="500px" bgColor="$material" boxShadow="$out" padding="$4" margin='0 auto'>
    <Desktop />
    </Frame>

    <Frame display="flex" w="1080px" h="24px" bgColor="$material" boxShadow="$out" >
      <Button padding='$0' w='15px' display='flex' justifyContent='center'>TEXT</Button>
    </Frame>
    </>
  );
}

//<Button padding='$0' w='15px' display='flex' justifyContent='center'></Button>

export default App;
