# Projeto_Clientes_Mocha_js


# Siga esses Passos para executar o projeto
Abra a pasta do projeto

Clique Terminal

Clique em New Terminal

Digite: npm init -y

Pressione ENTER

Crie uma pasta “src”

Crie uma pasta “test”

Abra o arquivo package.json

Altere o valor da propriedade “type” de “commonjs” para “module”

Instale o package “mocha” no seu projeto digitando npm i mocha no Terminal

Para executar o projeto, execute npx mocha

## 🚀 Integração Contínua (CI/CD) com GitHub Actions

Este projeto possui integração automatizada com o **GitHub Actions** para garantir a qualidade do código a cada execução.

### 🔄 Como Executar a Pipeline Manualmente

1. Acesse a aba **Actions** no menu superior do repositório.
2. Na barra lateral esquerda, selecione o workflow **"Pipeline Mocha - Manual e Agendada"**.
3. Clique no botão **Run workflow**, selecione a branch desejada (ex: `main`) e clique no botão verde para iniciar.

Além da execução manual, este workflow está configurado com um gatilho agendado (**Schedule**) para rodar testes periódicos de forma automatizada.

---

## 📊 Relatórios de Testes

A pipeline está configurada para gerar e armazenar dois tipos de relatórios detalhados a cada execução, garantindo visibilidade total sobre os testes que passaram ou falharam.

### 1. Relatório Visual (Mochawesome) e Gráficos Nativos (JUnit) no GitHub Actions

Para coletar, processar e exibir os resultados dos testes (mesmo em caso de falhas), os seguintes passos foram integrados ao arquivo `.github/workflows/pipeline.yml`:

```yaml
      # 1. Armazena o relatório visual do Mochawesome como artefato para download
      - name: Armazenar Relatório de Testes (HTML)
        uses: actions/upload-artifact@v4
        if: always() # Garante o upload mesmo se algum teste falhar
        with:
          name: relatorio-execucao-mocha
          path: mochawesome-report/
          retention-days: 20

      # 2. Publica um sumário interativo e nativo com gráficos na aba Summary do GitHub
      - name: Publicar Relatório de Testes Nativo
        uses: dorny/test-reporter@v1
        if: always()
        with:
          name: Relatório de Testes Mocha
          path: test-results.xml
          reporter: java-junit