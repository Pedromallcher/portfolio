import './App.css';
import { useState, useEffect } from 'react';
import { RenderDesktop } from './screens/desktop/home/render';
import { RenderMobile } from './screens/mobile/renderMobile';
import { NavbarMobile } from './components/mobile/navbar/navbar';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela e a orientação para definir o estado
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Verifica se está entre 481px e 767px e em modo retrato (altura maior que largura)
      const isMobile = width >= 481 && width <= 767 && height > width;
      setIsMobileDevice(isMobile);
    };

    // Chama a função ao carregar a página para definir o estado corretamente
    handleResize();

    // Adiciona os listeners para resize e orientação
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Remove os listeners quando o componente desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileDevice ? (
        <RenderMobile /> // Renderiza para dispositivos móveis extra pequenos
      ) : (
        <RenderDesktop /> // Renderiza para desktop ou outros tamanhos
      )}
    </>
  );
}

export default App;
