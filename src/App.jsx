import './App.css';
import { useState, useEffect } from 'react';
import { RenderDesktop } from './screens/desktop/home/render';
import { RenderMobile } from './screens/mobile/renderMobile';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela e definir o estado
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768); // Definindo 768px como o limite para mobile
    };

    // Chama a função ao carregar a página
    handleResize();

    // Adiciona o listener de redimensionamento para ajustar se a tela mudar de tamanho
    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileDevice ? (
        <RenderMobile /> // Renderiza para mobile
      ) : (
        <RenderDesktop /> // Renderiza para desktop
      )}
    </>
  );
}

export default App;
