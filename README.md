# Repanda Upload

Pagina web simples para envio de fotos. O usuario digita o nome, escolhe uma foto e ela e enviada automaticamente para a nuvem (Cloudinary).

As fotos ficam salvas com o nome da pessoa e a data, por exemplo: `sergio_andrade-13-03-26.jpg`

---

## O que voce precisa ter instalado no computador

Antes de tudo, voce precisa ter o **Node.js** instalado. Ele e o programa que roda o projeto no seu computador.

### Como instalar o Node.js

1. Acesse: https://nodejs.org/
2. Clique no botao verde que diz **LTS** (versao recomendada)
3. Baixe e instale normalmente (Next, Next, Finish)
4. Para confirmar que instalou, abra o **Terminal** (Mac) ou **Prompt de Comando** (Windows) e digite:

```bash
node --version
```

Se aparecer um numero tipo `v20.11.0`, esta tudo certo.

---

## Como rodar o projeto pela primeira vez

1. Abra o **Terminal** na pasta do projeto
2. Instale as dependencias (so precisa fazer isso uma vez):

```bash
npm install
```

3. Rode o projeto:

```bash
npm run dev
```

4. Vai aparecer algo assim:

```
  VITE v8.0.0  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

5. Abra o navegador e acesse: **http://localhost:5173/**
6. Para parar o servidor, volte no terminal e aperte **Ctrl + C**

---

## Como configurar o Cloudinary (passo a passo)

O Cloudinary e o servico na nuvem onde as fotos ficam guardadas. Voce precisa criar uma conta gratuita e configurar duas coisas: o **Cloud Name** e o **Upload Preset**.

### Passo 1 — Criar uma conta no Cloudinary

1. Acesse: https://cloudinary.com/
2. Clique em **Sign Up Free**
3. Preencha seus dados e crie a conta
4. Confirme o email que eles vao enviar

### Passo 2 — Encontrar o seu Cloud Name

1. Apos fazer login, voce vai cair no **Dashboard**
2. Logo no topo da pagina, voce vai ver algo assim:

```
Cloud name: meu_cloud_name
```

3. **Copie esse valor** — voce vai precisar dele daqui a pouco

### Passo 3 — Criar um Upload Preset (isso permite o envio de fotos)

O Upload Preset e como uma "chave" que permite o site enviar fotos para o Cloudinary sem precisar de senha.

1. No menu lateral do Cloudinary, clique em **Settings** (icone de engrenagem)
2. Clique em **Upload** no menu da esquerda
3. Role a pagina ate encontrar a secao **Upload presets**
4. Clique em **Add upload preset**
5. No campo **Signing Mode**, selecione: **Unsigned**
6. (Opcional) No campo **Folder**, voce pode digitar `uploads` para as fotos irem para uma pasta organizada — mas o codigo ja faz isso automaticamente
7. Clique em **Save**
8. **Copie o nome do preset** que aparece na lista (geralmente e algo como `ml_default` ou um nome que voce escolheu)

### Passo 4 — Colocar os dados no projeto

1. Na pasta do projeto, existe um arquivo chamado `.env`
2. Abra esse arquivo com qualquer editor de texto (Cursor, VS Code, Bloco de Notas...)
3. Voce vai ver isso:

```
VITE_CLOUD_NAME=YOUR_CLOUD_NAME
VITE_UPLOAD_PRESET=YOUR_UNSIGNED_UPLOAD_PRESET
```

4. Substitua pelos seus valores reais. Exemplo:

```
VITE_CLOUD_NAME=dxkj4abcd
VITE_UPLOAD_PRESET=ml_default
```

5. Salve o arquivo
6. Se o projeto ja estava rodando, pare (Ctrl + C) e rode de novo:

```bash
npm run dev
```

Pronto! Agora o site ja consegue enviar fotos para o seu Cloudinary.

---

## Como funciona o envio da foto

1. O usuario digita o **nome** no campo
2. Escolhe uma **foto** do celular ou computador
3. Aparece um **preview** da foto (e da pra descartar clicando no X se quiser trocar)
4. Clica em **Enviar Foto**
5. A foto e enviada para o Cloudinary com o nome no formato: `nome-DD-MM-AA`
   - Exemplo: `sergio_andrade-13-03-26`
6. Se deu certo, aparece a tela de sucesso com a foto enviada
7. Da pra clicar em **Enviar outra foto** para voltar ao formulario

---

## Onde ficam as fotos no Cloudinary

Todas as fotos vao para a pasta `uploads/` dentro do seu Cloudinary.

Para ver as fotos:

1. Acesse https://console.cloudinary.com/
2. Clique em **Media Library** no menu lateral
3. Abra a pasta **uploads**
4. Todas as fotos enviadas pelo site estarao la

---

## Se algo der errado

### "Erro ao enviar a imagem"
- Verifique se o `.env` tem os valores corretos (Cloud Name e Upload Preset)
- Verifique se o Upload Preset esta como **Unsigned** no Cloudinary
- Verifique se voce tem internet

### O site nao abre
- Certifique-se de que rodou `npm install` antes
- Certifique-se de que rodou `npm run dev`
- Tente acessar http://localhost:5173/ no navegador

### O arquivo `.env` nao aparece
- Arquivos que comecam com ponto (`.`) podem ficar escondidos no sistema operacional
- No Mac/Linux: no Terminal, digite `ls -la` para ver arquivos ocultos
- No Windows: no Explorador de Arquivos, ative "Mostrar itens ocultos"
- Voce tambem pode abrir a pasta no VS Code/Cursor que ele mostra tudo

---

## Estrutura do projeto (para referencia)

```
repanda-upload/
├── index.html              # Pagina HTML principal
├── src/
│   ├── main.ts             # Ponto de entrada do app
│   ├── upload.ts           # Codigo que envia a foto pro Cloudinary
│   ├── style.css           # Estilos (Tailwind CSS)
│   ├── images/
│   │   └── logo.jpg        # Logo que aparece no topo
│   ├── views/
│   │   ├── form.ts         # Tela do formulario
│   │   └── success.ts      # Tela de sucesso
│   └── utils/
│       └── date.ts         # Gera a data no nome do arquivo
├── .env                    # Suas credenciais do Cloudinary (NAO compartilhe!)
├── .env.example            # Modelo do .env (pode compartilhar)
├── package.json            # Lista de dependencias do projeto
├── tsconfig.json           # Configuracao do TypeScript
└── vite.config.ts          # Configuracao do Vite
```

---

## Publicar o site (opcional)

Se quiser colocar o site online, voce pode usar o **Vercel** (gratuito):

1. Acesse https://vercel.com/ e crie uma conta
2. Suba o projeto para o GitHub
3. No Vercel, clique em **Import Project** e selecione o repositorio
4. Na tela de configuracao, adicione as variaveis de ambiente:
   - `VITE_CLOUD_NAME` = seu cloud name
   - `VITE_UPLOAD_PRESET` = seu upload preset
5. Clique em **Deploy**
6. Pronto! Voce vai receber um link tipo `https://seu-projeto.vercel.app`
