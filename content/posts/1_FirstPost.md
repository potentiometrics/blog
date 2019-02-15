---
title: "Neural Nets are rad"
date: "2019-02-20"
template: "post"
draft: false
slug: "/posts/a-brief-history-of-typography/"
category: "Technical"
tags:
  - "Linotype"
  - "Monotype"
  - "History of typography"
  - "Helvetica"
description: "On the evolution of neural nets, blah blah"
---

Hello there. This is the first test of this cool framework called Gatsby.js. Use as a reference for syntax. But there's more functionality out there. Hello there. This is the first test of this cool framework called Gatsby.js. Use as a reference for syntax. But there's more functionality out there.

Hello there. This is the first test of this cool framework called Gatsby.js. Use as a reference for syntax. But there's more functionality out there.

## Latex

$x^2 + 5 +k^5$

$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$

Inline latex $x^2 + 5$ yoyoyo. Inline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyoInline latex $x^2 + 5$ yoyoyo

## Custom components

This takes some coding, but you can basically create any javascript functionality you want inside this markdown. Here's an example of an interactive counter:

```html
<interactive-counter></interactive-counter>
```

You'll end up with an interactive component:

<interactive-counter></interactive-counter>

## There are 6 levels of header size

#### Teeny header

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

<a name="emphasis"></a>

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

- Unordered list can use asterisks

* Or minuses

- Or pluses

1.  First ordered list item
2.  Another item
    - Unordered sub-list.
3.  Actual numbers don't matter, just that it's a number
    1.  Ordered sub-list
4.  And another item.

## Links

[I'm an inline-style link](https://www.google.com)

## Images

![42-line-bible.jpg](/media/42-line-bible.jpg)

Let's add a YouTube video to show off responsive iFrames real quick:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hbjR5N6IhDU" frameborder="0" allowfullscreen></iframe>

## Tables

Tables aren't part of the core Markdown spec, but they are part of this website's version.

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Footnotes

Footnotes are also not a core feature of markdown, but they're a common
extension feature. The footnote syntax looks like this:

```markdown
This line has a footnote [^1]. Scroll down or click the link to see it.
```

That renders like this:

This line has a footnote [^1]. Scroll down or click the link to see it[^2].

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part
> of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh
> boy let's keep writing to make sure this is long enough to actually wrap for
> everyone. Oh, you can _put_ **Markdown** into a blockquote.

<figure>
	<blockquote>
		<p>Knowledge of the quality of a typeface is of the greatest importance for the functional, aesthetic and psychological effect.</p>
		<footer>
			<cite>— Josef Mueller-Brockmann</cite>
		</footer>
	</blockquote>
</figure>

## Code

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

It works for most languages, like javascript:

```javascript{1-2,22}{numberLines: true}
// In your gatsby-config.js
// Let's make this line very long so that our container has to scroll its overflow…
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756
          }
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`
          }
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-prismjs`
      ]
    }
  }
];
```

[^1]: The footnote appears at the bottom of the page
[^2]: http://remark.js.org/
