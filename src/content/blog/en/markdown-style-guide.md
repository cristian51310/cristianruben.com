---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 'Jul 01 2022'
heroImage: '/blog-placeholder-1.webp'
lang: 'en'
---

This is a simple sample of basic markdown syntax that can be used when writing markdown content

## Headings

The following HTML syntax `<h1>`—`<h6>` represents six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

## Paragraphs

This is a paragraph. It's quite long. But that's fine because line breaks are ignored in long paragraphs. You can also use *italics* or **bold** text style, but not much more.

## Imagenes

Markdown syntax for images is similar to the syntax for links. You need to specify an alternative text for the image if it doesn't display, and optionally, you can add a title to show when the user hovers the mouse over the image.

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.webp)

## Blockquote

The `blockquote` element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Simple blockquote

#### Syntax

```markdown
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with author

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

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash


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
