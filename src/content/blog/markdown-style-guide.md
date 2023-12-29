---
title: 'Guia de estilo Markdown'
description: 'Aqui esta una muestra de alguna sintaxis básica del Markdown que puede ser usada al escribir contenido Markdown en Astro.'
pubDate: 'Jul 01 2022'
heroImage: '/blog-placeholder-1.webp'
lang: 'es'
---

Esta es una simple muestra de la sintaxis básica de Markdown que puede ser usada al escribir contenido Markdown 

## Encabezados

La siguiente sintaxis de HTML `<h1>`—`<h6>` representa seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto mientras que `<h6>` es el más bajo.

## Parráfos

Este es un párrafo. Es bastante largo. Pero eso está bien porque los saltos de línea se ignoran en los párrafos largos. También puedes usar *cursiva* o **negrita** en el estilo de texto, pero no mucho más.

## Imagenes

La sintaxis de Markdown para imágenes es similar a la sintaxis para enlaces. Se necesita especificar un texto alternativo para la imagen si no se muestra, y opcionalmente, se puede agregar un título para mostrar cuando el usuario pasa el mouse sobre la imagen.

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Salida

![blog placeholder](/blog-placeholder-about.webp)

## Cita de bloque

El elemento `blockquote` representa contenido que se cita de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Cita de bloque simple

#### Syntax

```markdown
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> **Note** that you can use _Markdown syntax_ within a blockquote.

### Cita de bloque con autor

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

podemos usar 3 acentos invertidos ``` en una nueva línea y escribir fragmentos y cerrar con 3 acentos invertidos en una nueva línea y para resaltar la sintaxis específica del lenguaje, escriba una palabra del nombre del lenguaje después de los primeros 3 acentos invertidos, por ejemplo. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!doctype html>
<html lang="en">
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
```

#### Output

1. First item
2. Second item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
```

#### Output

- List item
- Another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
- Dairy
  - Milk
  - Cheese
