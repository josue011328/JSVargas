
# JSVargas Store

Site estático com produtos afiliados (Shopee, Amazon, Mercado Livre, Temu). Hospede grátis no Netlify.

## Como usar

1. **Edite seus links de afiliado** em `data/products.json` (campo `link`).
2. Faça upload/commit do projeto no seu repositório GitHub (público).
3. Conecte o repositório ao Netlify (ou faça `netlify init` via CLI).
4. Configure o domínio gratuito `jsvargas.tk` apontando para o site no Netlify.
5. Pronto! Compartilhe o link e comece a vender. 🎉

## Estrutura de Pastas

```
|-- index.html
|-- assets
    |-- css
        |-- style.css
    |-- js
        |-- app.js
|-- data
    |-- products.json
```

## Personalização

- **Cores**: ajuste em `assets/css/style.css`
- **Produtos**: edite `data/products.json`
- **Popup Promo**: mensagem em `<div id="promo-popup">`
- **WhatsApp**: altere o número no link do botão flutuante
