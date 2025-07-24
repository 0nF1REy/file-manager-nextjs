# Stardust Sparkle Files

Um gerenciador de arquivos moderno e elegante construído com Next.js 15, onde seus arquivos brilham com estilo.

## 📝 Descrição

O Stardust Sparkle Files é uma aplicação web para upload, visualização e gerenciamento de arquivos. A aplicação oferece uma interface intuitiva e responsiva para organizar arquivos por tipo (imagens, vídeos, áudios, documentos) com funcionalidades de upload seguro, preview e download.

## ✨ Funcionalidades

- 📤 **Upload de Arquivos**: Suporte a múltiplos tipos de arquivo com validação de tamanho e tipo
- 🗂️ **Organização por Categoria**: Arquivos organizados automaticamente por tipo (Imagens, Vídeos, Áudios, Documentos, Outros)
- 👁️ **Preview de Arquivos**: Visualização prévia para imagens com modal ampliado
- 📥 **Download Seguro**: Sistema de download com controle de cache e segurança
- 🗑️ **Exclusão de Arquivos**: Remoção de arquivos com confirmação
- ⬆️ **Scroll to Top**: Botão flutuante para navegação rápida
- 🔒 **Validação de Segurança**: Sanitização de nomes de arquivo e validação de tipos MIME

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: React 19
- **Gerenciamento de Estado**: React Hooks
- **Upload de Arquivos**: FormData API
- **Sistema de Arquivos**: Node.js fs promises
- **Validação**: Validação customizada de MIME types

## 📁 Estrutura do Projeto

```
file-manager/
├── src/
│   └── app/
│       ├── _components/          # Componentes React
│       │   ├── form.tsx         # Formulário de upload
│       │   ├── list.tsx         # Lista de arquivos
│       │   └── layout/          # Componentes de layout
│       │       ├── header/      # Cabeçalho
│       │       └── footer/      # Rodapé
│       ├── api/
│       │   └── download/
│       │       └── [fileName]/  # API route para download
│       ├── actions.ts           # Server Actions
│       ├── constants.ts         # Constantes da aplicação
│       ├── utils.ts            # Utilitários
│       ├── layout.tsx          # Layout principal
│       ├── page.tsx            # Página inicial
│       └── globals.css         # Estilos globais
├── uploads/                     # Diretório de arquivos
├── public/                      # Arquivos estáticos
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/0nF1REy/file-manager-nextjs.git
   cd file-manager-nextjs/file-manager
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

## ⚙️ Configurações

### Tipos de Arquivo Suportados

A aplicação suporta os seguintes tipos de arquivo:

- **Imagens**: PNG, JPG, JPEG, GIF, WebP, SVG
- **Vídeos**: MP4, WebM, AVI, MOV
- **Áudios**: MP3, WAV, OGG, FLAC
- **Documentos**: PDF, DOC, DOCX, TXT, RTF

### Limitações

- **Tamanho máximo**: Configurável via constante `MAX_FILE_SIZE`
- **Tipos permitidos**: Definidos em `ALLOWED_TYPES` no arquivo de constantes
- **Validação**: Verificação de MIME type e extensão de arquivo

## 🔧 Configuração Personalizada

### Alterando o Tamanho Máximo de Upload

Edite o arquivo `src/app/constants.ts`:

```typescript
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
```

### Adicionando Novos Tipos de Arquivo

Modifique o objeto `ALLOWED_TYPES` em `src/app/constants.ts`:

```typescript
export const ALLOWED_TYPES = {
  // tipos existentes...
  "application/zip": { category: "document", extensions: [".zip"] },
};
```

## 🌐 API Routes

### Download de Arquivos

```
GET /api/download/[fileName]
```

- **Parâmetros**: `fileName` - Nome do arquivo a ser baixado
- **Resposta**: Stream do arquivo com headers apropriados
- **Segurança**: Validação de tamanho e sanitização de nome

## 🎨 Personalização de Tema

O projeto utiliza Tailwind CSS com um esquema de cores baseado em azul:

- **Cor principal**: `#2563eb` (blue-600)
- **Cor hover**: `#1d4ed8` (blue-700)
- **Background**: Configurável via CSS custom properties

## 🔒 Segurança

- **Sanitização de Nomes**: Remoção de caracteres perigosos dos nomes de arquivo
- **Validação MIME**: Verificação dupla de tipo de arquivo
- **Controle de Tamanho**: Limitação de tamanho de upload
- **Headers de Segurança**: CSP e outras proteções para downloads

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é destinado para fins educacionais e de aprendizado.

## 🙏 Agradecimentos

- Next.js team pelo excelente framework
- Tailwind CSS pela facilidade de estilização
- Comunidade open source pelas inspirações

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
