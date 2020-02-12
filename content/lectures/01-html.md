---
title: "HTML"
date: 2020-02-10
draft: true
reference:
 - title: "The World Wide Web Project"
   link: "http://info.cern.ch/hypertext/WWW/TheProject.html"
 - title: "Submarine Cable Map"
   link: "https://www.submarinecablemap.com/"
 - title: "Trevor Paglen: Undersea Cables"
   link: "https://www.tba21.org/journals/article/trevorpaglen"
 - title: "Jodi: IDN"
   link: "http://xn--9l7a.com/"
 - title: "Zuzana Licko"
   link: "https://www.emigre.com/Designer/ZuzanaLicko"
 - title: "What is Code"
   link: "https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/"
 - title: "Jörg Piringer: Unicode"
   link: "https://vimeo.com/36132600"
---


Semantic Markup
HTML

HTML
HTML is the language of web pages interpreted by web browsers.

HTML = 

HyperText Markup Language
HTML defines web content by organizing text
Comprised of a series of nested tags
HTML can be created with any simple text editor.
`<p>`
Left-Angle Bracket(Less-than Sign)
Right-Angle Bracket(More-than Sign)
Character

Semantic Markup
Semantic: relating to meaning in language or logic 
Semantic markup establishes the hierarchy and structure of information
heading
paragraph
list

An HTML page
browser view
text editor view

Viewing the Source Code
You can see the HTML and structure of any webpage by right-clicking and selecting View Page Source or Inspect in your browser.
View source (⌘+Option+U) displays the original source file (usually html file) that is rendered in the browser.
Inspect (⌘+Option+I or ⌘+Shift+C) displays the HTML structure that the browser determined from the source file. This is often an easier tool to use, as the semantic structure is clearer with the collapsed tags. You can also hover over elements to see what they correspond to on your screen.

HTML Tags
Tags are always between two angle brackets, used to mark-up content. 
All content is surrounded  between opening and closing tags. A closing tag is indicated with a forward slash “/”. Here’s what happens when you don’t close tags.



```<h1>headline</h1>```



opening tag
closing tag
HTML element = content + markup
content

Nested structures
An element nested within another is called a child element. Conversely, an element containing another is called its parent. A child element must be closed before its parent element. 
This is incorrect syntax:
```
<p>All these must be eaten <em>today.</p></em>
<ul>	<li>Croissant</ul>
<h2>French Bakery</h2>
<p>All goods must be eaten <em>today</em>.</p>
<ul>
	<li>Baguettes</li>	
<li>Pastries
<ul>
	<li>Croissant</li>	
	<li>Mille-feuille</li>	
	<li>Palmier</li>	
	<li>Profiterole</li>	
	</ul>	
	</li>	
	<li>Tarts</li>	
	</ul> 	
	missing </li>	
	should be before </p>
```

All HTML elements flow from the top to the bottom.
Inline vs. Block elements
An inline element continues along the same line as its neighboring elements and occupies as much space (width) as its content. i.e.: <a>, <b>, <em>, <img>, and <span>.
A block element always appears on a new line; by default,  it’s as wide as its parent (containing) elements i.e.<section>,<article>, <h1>, <p>, <ul>, <li>, and <div>.

Elements and Attributes
```<a href="index.html">home</a>```
Attributes provide additional information about the contents of an element
appear with the opening tag of an element
consist a name and a value, separated by an equals sign
values must be wrapped in quotation marks


attribute name
attribute value
opening tag

Links
Use it to link to:
```Local / Relative links: Other pages in your site <a href="about.html">learn more</a>```
```Anchor links: Other locations within the same webpage <a href="#up">go back up</a>```
```Absolute links: Other webpages outside your site <a href="https://www.google.com/">search ```stuff</a>
```Any file for users to download <a href="docs/resume.pdf">view a PDF</a>```
```<a href="https://www.google.com/">Google</a>```
the location / path to where the link takes you
tag for links
the text that the user clicks on (the link text)

A list of common HTML elements
Basic elements
```<html> ... </html>```

Document metadata
```<head> ... </head>```
```<title> ... </title>```

Content sectioning
```<header> ... </header>```
```<nav> ... </nav>```
```<section> ... </section>```
```<footer> ... </footer>```
```<h1> ... </h1>```
```<h2> ... </h2>```

Consult the Mozilla Developer Network for a list of common elements
* these elements are self-closing and do not have opening/closing tag pairs. You may see them with or without the /
Text content
```<ul> ... </ul>```
```<li> ... </li>```
```<p> ... </p>```
<br />*

Flow content
<img />*

Inline text semantics
```<em> ... </em>```
```<strong> ... </strong> ```
