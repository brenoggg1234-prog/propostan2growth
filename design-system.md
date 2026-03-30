# N2 Growth Design System

Este documento define os padrões visuais e técnicos para manter a consistência da marca N2 Growth em todo o site.

## 1. Paleta de Cores
- **Primary (Accent):** `#eab308` (Yellow 500) - Usado para destaques, ícones ativos e elementos N2.
- **Background (Light):** `#ffffff` (White) - Fundo principal da Hero e seções claras.
- **Background (Dark):** `#0a0a0a` (Rich Black) - Fundo de seções de destaque e rodapé.
- **Typography:**
  - `zinc-900`: Títulos principais e texto de alto contraste.
  - `zinc-600`: Subtítulos e corpos de texto secundários.
  - `zinc-400`: Textos mudos e labels discretas.
  - `white`: Texto sobre fundos escuros.

## 2. Tipografia (Inter Sans)
*Diretriz Fundamental: Zero fontes serifadas. Zero itálicos.*

### Escala de Fontes (Foco: Hero Section)
- **H1 (Hero Main):** 
  - Desktop: `72px` | Weight: `Medium` (500) | Leading: `1` | Tracking: `tighter`
  - Tablet: `58px`
  - Mobile: `38px` / `48px`
- **H2 (Section Titles):**
  - Desktop: `50px` - `60px` | Weight: `Medium` (500) | Tracking: `tight`
- **Badges / Labels:**
  - Size: `10px` - `11px` | Weight: `Black` (900) ou `Bold`
  - Tracking: `0.4em` a `0.6em` (Extreme tracking)
  - Case: `UPPERCASE`
- **Body Text:**
  - Size: `15px` - `16px` | Weight: `Light` (300) | Leading: `1.6` | Tracking: `wide`

## 3. Efeitos e Sombras
- **Studio Lighting (Blobs):** 
  - Yellow: `rgba(234, 179, 8, 0.15)`
  - Blur: `120px` a `160px`
  - Blend Mode: `soft-light`
- **Borders:**
  - Light Mode: `1px solid rgba(0,0,0,0.05)`
  - Dark Mode: `1px solid rgba(255,255,255,0.1)`
- **Border Radius:**
  - Cards: `rounded-3xl` (24px) a `rounded-[2.5rem]` (40px)
- **Transitions:**
  - Ease Soft: `cubic-bezier(0.16, 1, 0.3, 1)` (Framer Motion Standard)

## 4. Padrões de Layout
- **Section Spacing:** 
  - Padding Y: `24 (96px)` a `48 (192px)` no desktop.
- **Container Max-Width:** `1440px`.
- **Bento Grid:** Mistura de colunas `1/3` e `2/3` com gaps amplos (`10` a `14`).
