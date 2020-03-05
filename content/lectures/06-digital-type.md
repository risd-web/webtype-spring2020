---
title: "Letterforms over time"
date: 2020-03-05
summary: "How we came to variable fonts"
reference:
 - title: "Hanzi"
   link: https://www.hanzithemovie.com/
 - title: "Punch cutter"
   link: "http://artflx.uchicago.edu/images/encyclopedie/V19/plate_19_19_1.jpeg"
 - title: "Early Digital Type"
   link: "http://www.designhistory.org/Digital_Revolution_pages/EarlyDigType.html"
 - title: "Old Computers"
   link: "http://oldcomputers.net/macintosh.html"
 - title: "Core fonts for the Web"
   link: "https://en.wikipedia.org/wiki/Core_fonts_for_the_Web"
 - title: "Jörg Piringer: Unicode"
   link: "https://player.vimeo.com/video/36132600"
---

> “By writing directly into a mechanical form rather than a manuscript (as we’re doing right now) the writer would be working closer to the nature of the multiplied result, and through an increasing awareness and gradual mastery of the form’s new limitations and possibilities \*the writing itself would evolve;\* the shorter the distance between the raw material of words and their processed output, the more entwined the content and form from the outset. This line of thinking was more famously expounded by Benjamin in his 1936 essay “The Work of Art in the Age of Mechanical Reproduction,” which more broadly argues that an authentic, pertinent art is the result of engagement with the latest technological innovations.” — [Dexter Sinister: Letter & Spirit](http://www.servinglibrary.org/journal/3/letter-and-spirit)



# A Brief history

## The evolving concept of a type family
- 1500s Venetian type paired [Roman & Italic letterforms](https://abagond.files.wordpress.com/2007/10/aldine.jpg?w=201&zoom=2") styles — Aldus Manutius is known for his [work in typography](https://www.prepressure.com/images/Hypnerotomachia-Poliphili-trophy-Roman-arms.jpg)
- 1900s Bold weight is [paired for emphasis](https://en.wikipedia.org/wiki/Clarendon_(typeface)#/media/File:Fann_Street_Foundry_Clarendon_image_with_text_for_emphasis.jpg)
- Superfamilies designed for specific purposes, i.e. [Cheltenham, 1903](http://idsgn.org/posts/know-your-type-cheltenham/)
- Series designed as variations on a theme, i.e. [Univers, 1957](https://archive.org/details/ATFFoundryUniversDebernyPeignotIP1968/page/n9/mode/2up)
- Concept of [Metafont, 1982](http://visiblelanguagejournal.com/issue/61/article/748)
- [The Stroke, 1985](https://www.typotheque.com/books/the_stroke) and the [Noordzij Cube](https://typetr.typenetwork.com/news/article/The-Gerrit-Noordzij-Cube) and a [digitized demo](https://www.axis-praxis.org/playground/noordzij-cube/)
is a theoretical model that indicated how a designer could think about shapes, the degrees of change: a **design space**.

## The evolution of digital technology
- Bi Sheng in China invents “movable type” in 1040 from a material similar to porcelain. Wang Zhen is credited with the introduction of wooden movable type, a more durable option, around 1297.
- Johannes Gutenberg invents “movable type” pieces from lead, tin, and antimony, with the Gutenberg Bible in 1398.
- Hot Metal Typesetting
- Photo typesetting (Cold)
- Typewriters
	- [Typewriter/Typefaces](https://typographica.org/on-typography/typewriter-typeface-the-legacy-of-the-writing-machine-in-type-design/)
	- [IBM Selectric](https://www.youtube.com/watch?v=kLySMIzASNE) had a [ball](https://www.google.com/search?q=ibm+selectric+typewriter+ball&tbm=isch&ved=2ahUKEwjlq7Pq3YPoAhXKAt8KHaBcAqgQ2-cCegQIABAA&oq=ibm+selectric+typewriter+ball&gs_l=img.3..0.60635.61083..61249...0.0..0.98.358.5......0....1..gws-wiz-img.......0i30j0i5i30j0i8i30j0i24.1lQgXebjO5g&ei=8iVhXuXqM8qF_AaguYnACg&bih=709&biw=1076) that could be interchanged to modify the font on a typewriter.
- Bitmap Fonts
	- [Digi Grotesk, 1968](http://luc.devroye.org/fonts-25449.html)
 	- Susan Kare, [fonts](https://en.wikipedia.org/wiki/Chicago_(typeface)) and [icons](https://qz.com/1666437/mac-icon-designer-susan-kare-explains-the-inspiration-for-her-designs/)
 	- [Zuzana Licko](https://www.emigre.com/Designer/ZuzanaLicko)
- Vector Fonts
	- Adobe Postscript, 1985 (bezier curves)
	- Apple Truetype, late 1980s (quadratic curves)
	- Matthew Carter’s [Georgia, 1993](https://en.wikipedia.org/wiki/Georgia_(typeface)) and [Verdana, 1996](https://en.wikipedia.org/wiki/Verdana#/media/File:VerdanaSpecimen.svg)
- Multiple Master, 1991
	- Adobe Multiple Masters. [Multiple Master](https://en.wikipedia.org/wiki/Multiple_master_fonts)
	- [Multiple Master Specs](https://www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5091.Design_MM_Fonts.pdf) 
- Open Type, 1997
	- Microsoft’s [Open Type](https://en.wikipedia.org/wiki/OpenType) format allowed for [variations](https://www.typenetwork.com/brochure/opentype-font-variations/)
- SVG and Color font support
	- [Unicode Emoji, 2010—](http://www.unicode.org/reports/tr51)
- Variable Fonts: Open Type Format, v.1.8, September 14, 2016
	- Read [the specs](https://docs.microsoft.com/en-gb/typography/opentype/spec/dvaraxisreg)


## Variable Fonts
A single font file contains many different variations of a typeface, instead of having a separate font file for every width, weight, or style. This format was developed in collaboration by Adobe, Apple, Google, and Microsoft.

### Advantages of variable fonts
- Font loading
	- HTTP requests
	- KB of data (depends on character set and design space)
- Purer expression of type design process
- Options

### Disadvantages of variable fonts
- Lack of support
- [Souless clone armies](https://vimeo.com/251494096)


## Variable Fonts and CSS
The properties of variable fonts can be set by CSS, as with any other CSS property. You can serve a variable font in the same way [as any other typeface]({{<ref "/lectures/02-css.md#typefaces" >}}); although currently there are still few commercially available variable fonts. 

```css
@font-face {
  font-family: 'Magmatic';
  src: url('../fonts/MagmaticVF.ttf') format('truetype-variations');
}

p{
  font-family: 'Magmatic', sans-serif;
  font-variation-settings: 'wght' 200,'wdth' 600; 👈
}
```

The `font-variation-settings` is the CSS propety for variable fonts. - Values for multiple axes, are separated by `,`
- Each axes is in in between `''`, with the value after it
- Standard axes for variation are in lowercase,  custom axes are in uppercase.

### Standard (registered) axes
|syntax| description | Non-VF equivalent 
|---|---| ---
|wght| weight | `font-weight` 
|wdth| width | `font-stretch`
|opsz| optical sizing | `font-optical-sizing`
|ital| italicization | `font-style: italic` 
|slnt| slant | `font-style: oblique ` 

- Read a [caveat for italics](https://rwt.io/typography-tips/getting-bent-current-state-italics-variable-font-support)