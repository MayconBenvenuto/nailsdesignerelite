# Design Responsivo Mobile-First

## Visão Geral

O site foi refatorado para usar a abordagem **Mobile-First**, onde os estilos base são definidos para dispositivos móveis e depois expandidos para telas maiores usando media queries.

## Estrutura de Breakpoints

```css
:root {
  --mobile: 320px;      /* Base (Mobile First) */
  --tablet: 768px;      /* Tablet */
  --desktop: 1024px;    /* Desktop */
  --large-desktop: 1440px; /* Large Desktop */
}
```

## Media Queries Utilizadas

### 1. Mobile (Base - 320px+)
- Estilos padrão aplicados sem media query
- Layout em coluna única
- Espaçamentos menores
- Fontes menores

### 2. Tablet (768px+)
```css
@media (min-width: 768px) {
  /* Estilos para tablet */
}
```
- Grid de 2 colunas para módulos e testimonials
- Header em linha horizontal
- Espaçamentos médios

### 3. Desktop (1024px+)
```css
@media (min-width: 1024px) {
  /* Estilos para desktop */
}
```
- Grid de 3 colunas onde aplicável
- Espaçamentos maiores
- Fontes maiores

### 4. Large Desktop (1440px+)
```css
@media (min-width: 1440px) {
  /* Estilos para telas grandes */
}
```
- Containers com largura máxima maior
- Refinamentos de espaçamento

## Componentes Responsivos

### Header
- **Mobile**: Navegação em coluna, logo centralizado
- **Tablet+**: Navegação em linha, logo à esquerda

### Hero
- **Mobile**: Texto centralizado, botão full-width
- **Tablet+**: Botão com largura automática

### Modules
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

### Testimonials
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

### FAQ
- Sempre 1 coluna para melhor legibilidade
- Espaçamentos adaptativos

## Sistema de Container

```css
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px; /* Mobile */
}

@media (min-width: 768px) {
  .container {
    max-width: 750px;
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 0 32px;
  }
}
```

## Variáveis CSS

```css
:root {
  /* Cores */
  --primary-color: #e91e63;
  --secondary-color: #f8bbd9;
  --accent-color: #ad1457;
  --text-dark: #222;
  --text-light: #666;
  --background: #fff;
  --background-light: #f9f9f9;
  
  /* Breakpoints */
  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1024px;
  --large-desktop: 1440px;
}
```

## Classes Utilitárias

```css
/* Utilitários responsivos */
.mobile-only { display: block; }
.tablet-only, .desktop-only { display: none; }

@media (min-width: 768px) {
  .mobile-only { display: none; }
  .tablet-only { display: block; }
}

@media (min-width: 1024px) {
  .tablet-only { display: none; }
  .desktop-only { display: block; }
}
```

## Benefícios da Abordagem Mobile-First

1. **Performance**: Carrega estilos essenciais primeiro
2. **Manutenibilidade**: Código mais limpo e organizado
3. **Escalabilidade**: Fácil adição de novos breakpoints
4. **Acessibilidade**: Melhor experiência em dispositivos móveis
5. **SEO**: Google favorece sites mobile-friendly

## Testando a Responsividade

Para testar o site em diferentes tamanhos:

1. **Chrome DevTools**: F12 → Toggle device toolbar
2. **Testes de breakpoints**:
   - 320px (Mobile pequeno)
   - 375px (Mobile médio)
   - 768px (Tablet)
   - 1024px (Desktop)
   - 1440px (Desktop grande)

## Estrutura de Arquivos

```
src/
  styles/
    global.css        # Estilos globais e variáveis
    Header.css        # Header responsivo
    Hero.css          # Hero responsivo
    About.css         # About responsivo
    Modules.css       # Modules responsivo
    Instructor.css    # Instructor responsivo
    Testimonials.css  # Testimonials responsivo
    FAQ.css           # FAQ responsivo
    CTA.css           # CTA responsivo
    Footer.css        # Footer responsivo
```

## Melhores Práticas Implementadas

1. **Mobile-First**: Estilos base para mobile, expansão para desktop
2. **Flexbox/Grid**: Layouts modernos e flexíveis
3. **Variáveis CSS**: Consistência de cores e valores
4. **Transições**: Animações suaves para interações
5. **Acessibilidade**: Focus states e contraste adequado
6. **Performance**: CSS otimizado sem redundâncias

## Futuras Melhorias

1. **Menu hambúrguer**: Implementar para mobile
2. **Lazy loading**: Para imagens
3. **Dark mode**: Suporte a tema escuro
4. **Micro-interações**: Animações mais sofisticadas
