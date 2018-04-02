# Demonstração de Angular

## Pré-requisitos

* `node`
* `npm`

Para instalar sem precisar de `sudo` para instalar pacotes, pode-se utilizar algum dos métodos descritos [aqui](https://gist.github.com/isaacs/579814).

## Instalação do Angular CLI

```bash
npm install -g @angular/cli
```

## Execução

```bash
ng serve
```

Depois, acesse `http://localhost:4200/`. A página recarregará automaticamente caso algum código seja modificado.

## Teoria

Uma aplicação em Angular divide-se nas seguintes partes:

### Componente

Um componente define uma tag HTML customizada. Eles são compostos normalmente por 4 arquivos que contém ".component" em seu nome:

* `html` e `css`:  definem os aspectos visuais do componente;
* `ts`: define uma classe que determina o comportamento do componente. A tag correspondente a este componente é indicada na propriedade `selector` da anotação `@Component` presente acima da classe. Atributos definidos na classe podem ser utilizados diretamente no `html` do componente utilizando interpolação, por exemplo:
```<h2>{{name}}</h2>```
O valor do atributo `name` da classe é exibido no lugar de `{{name}}`. Alterações no valor do atributo atualizam automaticamente sua representação na interface;
* `spec.ts`: define os testes unitários do componente. Pode-se executar `ng test` para executar todos os testes.

Assim, supondo que haja um componente com seletor `user-info`, pode-se utilizar a tag `<user-info></user-info>` em outros componentes para exibí-lo.

#### Renderização condicional
Caso exista uma condição para que um elemento HTML seja exibido (por exemplo, somente exibir uma certa `div` se um atributo `showLanguages` da classe do componente for verdadeira), pode-se utilizar uma diretiva do Angular chamada `*ngIf`, por exemplo:
```html
<div *ngIf="showLanguages">Languages here</div>
```

#### Renderização de arrays

Para exibir elementos de uma lista, o Angular possui uma diretiva `*ngFor`. Digamos que um componente possua um atributo `languages` do tipo `string[]`, isto é, um array de strings. Pode-se exibir uma lista com o conteúdo desse array da seguinte forma:
```html
<ul>
	<li *ngFor="let language of languages">
		{{language}}
	</li>
</ul>
```

Este código indica que para cada elemento `language` do array `languages`, uma tag `<li>` deve ser criada com o conteúdo de `language`. Assim como dito anteriormente, alterar este array automaticamente atualiza a lista.

#### Eventos

Para chamar métodos da classe do componente, utiliza-se o nome do evento entre parênteses no HTML. Por exemplo:
```html
<button (click)="loadPosts()">Load posts</button>
```

Pode-se associar uma variável a um campo de texto para referenciá-lo em chamadas de eventos:
```html
<form (submit)="addLanguage(language.value); language.value = ''">
    <label>Add language:</label> <input type="text" #language>
</form>
```

#### Criação de um novo componente

Pode-se utilizar o seguinte comando para criar a estrutura básica de um componente automaticamente (`g c` é uma abreviação de `generate component`):
```bash
ng g c nome-do-componente
```

### Módulo

Um módulo é um agrupamento de componentes. Pode ser usado para aumentar a reusabilidade de um conjunto relacionado de componentes. Para gerar a estrutura básica de um módulo, pode-se utilizar o comando ( `g m` = `generate module`):
```bash
ng g m nome-do-módulo
```

### Serviço

Um serviço representa uma funcionalidade que não é relacionada a um componente específico. Um exemplo comum é um serviço que realiza uma requisição REST. Serviços podem ser utilizados por quaisquer componentes que os importem. Eles são compostos por dois arquivos, ambos com ".service" em seu nome:

* `ts`: classe que representa o serviço em si;
* `spec.ts`: testes unitários do serviço.

Para criar um novo serviço, pode-se utilizar o comando (`g s` = `generate service`):
```bash
ng g s nome-do-serviço
```

### Roteamento

Roteamento é utilizado para simular diversas páginas na aplicação. Ele é definido por um mapa que associa sufixos na URL (por exemplo, "about") a componentes (por exemplo, um componente que exibe informações da aplicação). Para exibir o componente correspondente à URL atual, utiliza-se a tag especial `<router-outlet></router-outlet>`. Para criar links internos de redirecionamento, pode-se utilizar o atributo `routerLink` nas âncoras, por exemplo:
```html
<ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About</a></li>
</ul>
```
