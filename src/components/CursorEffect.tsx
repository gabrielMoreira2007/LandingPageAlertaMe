import { useEffect, useState } from 'react';

// Cor principal para o efeito de luz/sombra
const WHITE_GLOW_COLOR = 'rgba(255, 255, 255, 1)'; // Branco puro

const BrighterBackgroundLightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Verifica se está sobre elementos interativos
      const target = e.target as HTMLElement;
      // Seletor para links, botões e elementos interativos
      const isInteractive = target.closest('a, button, [role="button"], [tabindex]:not([tabindex="-1"])');
      setIsHoveringLink(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringLink(false);
    };

    // Adiciona event listeners
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Função de limpeza
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  // Tamanhos (os mesmos da versão anterior)
  const glowSize = isHoveringLink ? 120 : 80;
  const auraSize = isHoveringLink ? 250 : 200;

  // Opacidade ajustada para ser 25% mais forte
  const auraOpacity = 0.10; // Antes 0.08
  const glowOpacity = isHoveringLink ? 0.31 : 0.19; // Antes 0.25/0.15

  return (
    <>
      {/* 1. Aura de Fundo (A luz mais desfocada e maior) */}
      <div
        className="pointer-events-none fixed z-40 transition-all duration-500 ease-out"
        style={{
          // Posição
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',

          // Dimensões e Efeito
          width: `${auraSize}px`,
          height: `${auraSize}px`,
          borderRadius: '50%',
          opacity: auraOpacity, // Mais forte
          backgroundColor: WHITE_GLOW_COLOR,
          filter: 'blur(50px)', // Desfoque máximo
        }}
      />

      {/* 2. Brilho Principal (O centro da luz, mais forte e responsivo) */}
      <div
        className="pointer-events-none fixed z-50 transition-all duration-300 ease-out"
        style={{
          // Posição
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',

          // Dimensões e Efeito
          width: `${glowSize}px`,
          height: `${glowSize}px`,
          borderRadius: '50%',
          opacity: glowOpacity, // Mais forte
          backgroundColor: WHITE_GLOW_COLOR,
          filter: 'blur(35px)',
        }}
      />
    </>
  );
};

export default BrighterBackgroundLightCursor;