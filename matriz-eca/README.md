# Matriz Curricular — ECA/UEA

Ferramenta web para acompanhamento da grade curricular do curso de **Engenharia de Controle e Automação** da Universidade do Estado do Amazonas (UEA). Roda 100% no navegador — sem servidor, sem login, nenhum dado sai do computador.

![Grade 2014](https://img.shields.io/badge/Grade-2014-a29bfe) ![Grade 2023](https://img.shields.io/badge/Grade-2023-45aaf2) ![Vanilla JS](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-fdcb6e) ![Sem build](https://img.shields.io/badge/build-nenhum-26de81)

---

## Funcionalidades

### Grade interativa
- Duas grades completas: **2014** e **2023**, alternáveis por abas
- Colunas por período (1º–10º), cores por período ou por status
- Orientação **horizontal** (padrão) ou **vertical**
- Tamanho de card e espaçamento configuráveis

### Rastreamento de status
Clique em qualquer disciplina para abrir o modal e marcar:

| Status | Significado |
|--------|-------------|
| ⬜ Pendente | Ainda não cursou |
| ▶ Cursando | Matriculado no semestre atual |
| ✓ Concluída | Aprovado |
| ↺ Reprovei | Já tentou, não passou |

O modal também salva professores, materiais/links e anotações pessoais por disciplina.

### Setas de pré-requisitos
- Setas SVG animadas ligando dependências entre disciplinas
- Ao passar o mouse sobre uma disciplina, ilumina toda a **cadeia para frente** (o que ela libera) e para **trás** (o que é necessário)
- Estilos configuráveis: curva, reta ou escada; animação fluindo, pulso ou sem; espessura fina/normal/grossa
- Modo hover (setas só aparecem ao passar o mouse) ou sempre visíveis

### Importação do histórico escolar (PDF)
- Arraste ou selecione o PDF do **Histórico Escolar Parcial** emitido pela UEA
- Extração 100% local via [PDF.js](https://mozilla.github.io/pdf.js/) — nenhum arquivo é enviado a servidores
- Detecta: código da disciplina, status (Aprovado/Reprovado/Matriculado/Cancelado/Trancado), nota final, semestre cursado e turma
- **Múltiplas tentativas**: se a mesma disciplina aparece em semestres diferentes (reprovação → aprovação), todas as tentativas são salvas e exibidas no modal em ordem cronológica
- **Disciplinas optativas**: identificadas pelo catálogo oficial e distribuídas nos slots da grade em ordem cronológica; a nota e o semestre ficam visíveis no card
- **Equivalências**: cobre códigos alternativos que a UEA usa em diferentes períodos para a mesma disciplina (ex: `ESTEEL012` → Sinais e Sistemas)
- **Anti-contaminação**: o parser analisa a linha exata do código antes de expandir para linhas vizinhas, evitando que um "Trancado" adjacente descarte uma disciplina aprovada

### Exportação
| Formato | Opções | Uso |
|---------|--------|-----|
| PNG Raster | 2× (Normal), 3× (Alta Definição), 4× (Ultra HD) | Compartilhar imagem |
| SVG Vetorial | — | Editar no Figma ou Inkscape |

O SVG é gerado programaticamente a partir do DOM (não é screenshot): inclui cards, textos posicionados, setas e cabeçalhos de período, com suporte a todos os temas. Fonte Space Grotesk embarcada para uso standalone.

### Outras
- **Busca** em tempo real por nome ou código
- **Destacar próximas disponíveis**: ilumina disciplinas que você já pode cursar (todos os pré-requisitos concluídos)
- **Ocultar concluídas**: foca no que ainda falta
- **Filtro por período**: exibe só os períodos selecionados
- **Agrupar por tipo**: separa obrigatórias, laboratórios e optativas dentro de cada período
- **Temas**: Dark (padrão), Light, Alto Contraste
- **Progresso**: barra e contadores no topo (concluídas / cursando / reprovadas / pendentes)
- Persistência via `localStorage` — o estado é preservado entre sessões no mesmo navegador

---

## Como usar

Nenhuma instalação necessária. Abra `matriz-eca/index.html` diretamente no navegador (Chrome/Edge/Firefox).

> Para importar o PDF do histórico, o arquivo precisa ser o **Histórico Escolar Parcial** em PDF gerado pelo portal da UEA. PDFs escaneados (imagem) não funcionam — é necessário o PDF digital com texto selecionável.

---

## Estrutura de arquivos

```
matriz-eca/
├── index.html          # Ponto de entrada, modais, painel de configurações
├── css/
│   └── styles.css      # Todos os estilos (temas, cards, setas, painel)
└── js/
    ├── data.js         # Dados das grades, catálogo OPT14, mapa EQUIV14, CM
    ├── storage.js      # Wrapper de localStorage com cache em memória
    ├── settings.js     # Objeto CFG, funções de tema/layout/setas
    ├── render.js       # Renderização da grade + patchOptSlots()
    ├── arrows.js       # Setas SVG + hlChain (highlight de cadeia)
    ├── modal.js        # Modal de detalhes, troca de status
    ├── import.js       # Parsing do PDF, matching OPT14/EQUIV14/CM
    ├── export.js       # Exportação PNG (html2canvas) e SVG vetorial
    └── main.js         # init(), busca, limpar, toast
```

### Estrutura de dados (`data.js`)

Cada disciplina é um objeto:

```js
{
  id:       'cont1',            // identificador interno único
  name:     'Controle I',       // nome exibido
  code:     'ESTEMT003',        // código oficial UEA
  period:   5,                  // período na grade (0 = optativa sem slot)
  hours:    '60h',              // carga horária
  pre:      ['fis1'],           // pré-requisitos (ids)
  unlocks:  ['cont2','lab_cont1','lab_cont2'], // o que esta disciplina libera
  optional: true,               // presente apenas em slots de optativa
}
```

**`OPT14`** — catálogo com todas as 42 optativas oficiais da grade 2014, incluindo nomes e pré-requisitos em código UEA. Usado durante a importação para identificar optativas no histórico.

**`EQUIV14`** — mapa de equivalências: códigos paralelos/alternativos que a UEA atribui à mesma disciplina em diferentes turmas ou períodos históricos.

**`CM`** — mapa principal código → id, usado para as disciplinas obrigatórias.

### `patchOptSlots()` (`render.js`)

Chamada no início de cada renderização. Lê do `localStorage` quais optativas estão salvas nos slots (`opt1_14`…`opt10_14`), resolve os pré-requisitos do `OPT14` para IDs internos e injeta em `DATA[G]` em runtime — assim as setas e o highlight de cadeia funcionam corretamente para optativas importadas.

---

## Dependências externas (CDN)

| Biblioteca | Versão | Uso |
|-----------|--------|-----|
| [PDF.js](https://mozilla.github.io/pdf.js/) | 3.11.174 | Leitura local do PDF do histórico |
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | Exportação PNG |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Fonte principal |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Fonte dos títulos/logo |

Nenhuma dependência de build (npm, webpack, etc.).

---

## Dados verificados

Os códigos e pré-requisitos da **grade 2014** foram conferidos contra os documentos oficiais da UEA:
- *Todas as Matérias Obrigatórias* (EMA_2014 — 10 períodos, 55 disciplinas)
- *Todas as Matérias Optativas* (42 optativas com fórmulas de pré-requisito)

Inconsistências encontradas e corrigidas: 11 códigos errados, 4 pré-requisitos incorretos, 7 inconsistências nos `unlocks`.

---

## Contribuindo

O projeto usa **Conventional Commits** (`feat:`, `fix:`, `refactor:`, etc.).

Para adicionar suporte a outra grade:
1. Adicionar o array em `DATA["XXXX"]` em `data.js` seguindo o mesmo schema
2. Adicionar o botão de aba em `index.html`
3. Popular o `CM` com os mapeamentos de código → id para a nova grade
