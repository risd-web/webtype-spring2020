drafts

http://artflx.uchicago.edu/images/encyclopedie/V19/plate_19_19_1.jpeg
https://www.ibm.com/ibm/history/ibm100/us/en/icons/selectric/
http://www.designhistory.org/Digital_Revolution_pages/EarlyDigType.html
http://oldcomputers.net/macintosh.html
https://www.emigre.com/Designer/ZuzanaLicko
https://en.wikipedia.org/wiki/Verdana#/media/File:VerdanaSpecimen.svg
https://en.wikipedia.org/wiki/Georgia_(typeface)#/media/File:GeorgiaSpecimenAIB.svg
https://en.wikipedia.org/wiki/Core_fonts_for_the_Web
https://www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5091.Design_MM_Fonts.pdf
https://en.wikipedia.org/wiki/Multiple_master_fonts
https://en.wikipedia.org/wiki/OpenType
https://www.typenetwork.com/brochure/opentype-font-variations/

http://fontbureau.typenetwork.com/news/article/jump-in-the-water-is-warm



## Advanced Selectors
There are many ways to target elements that use the DOM, or the structure of HTML, rather than specific element names, assigned classes or ids.

### Relationship selectors
Certain selectors can target elements based on how they are nested (parent-child, descendant, and sibling relationships). More on selectors on slide 23.

Selector
Description
Sample Syntax
child (>)
matches an element that is a direct child of another
li>a { }
descendant ( )
matches an element that is a descendent of another, not just a direct child
p a { }
adjacent sibling selector (+)
matches only the specified element that immediately follows the former specified element
h1+p { }
general sibling selector (~)
matches the second element only if it is preceded by the first, and both share a common parent
h1~p { }

### Attribute Selectors
If you want to select elements based on their attributes, you can use an attribute selector. 
See full list of attribute selectors.
selector[attribute] {
	property: value;
}
Selector
Description
existence [attr]

ex:a[target]
matches a specific attribute (regardless of value)
equality [attr="value"]
ex:a[target="_blank"]

matches a specific attribute with a specific value (needs to match exactly)
substring [attr*="value"]

ex:img[alt*="art"]
matches a specific attribute whose value contains a specific substring (the specified string of letters appears somewhere in the value)
Note: The difference between  h1#page-title and h1[id="page-title"] is that the latter is more specific; with conflicting rules, the latter will override the former.	

Pseudo-Classes
A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. 
The most popular use of pseudo selectors are in links. Browsers typically show text links in blue with an underline text decoration; visited links are purple. To customize this, you can target those elements using pseudo-classes. 
```
selector:pseudo-class {
	property: value;
}
```

```
a:link {
	color: red;
	text-decoration: underline;
}
a:visited {
	color: black;
}
a:hover {
	color: green;
	text-decoration: none;
}
a:active {
	color: blue;
	text-decoration: underline;
} 
```

Note: The :hover class can be applied to any element, but will not work in mobile. 

## Structural Pseudo-classes

You can use pseudo selectors to target specific children of parent elements.
More on pseudo classes.
A common use is to style alternate rows in a table:
```
tr:nth-child(even){
  background: #EEE;
}
```

Selector
Description
First child element:first-childli:first-child
matches the first child element, regardless of type, in a parent element
Last child element:last-childli:last-child
matches the last child element, regardless of type, in a parent element
Nth child element:nth-child( )li:nth-child(2)
matches a child element in relation to its position within the parent element — accepts numerals, formulas, and keywords
Table Header
cell
cell
cell
cell
cell
cell
cell
cell
cell
cell
cell
cell

### Pseudo-Elements
Pseudo-elements allow you to style specific parts of an element or generate content around an element. More on pseudo-elements and things you can do with them.
```
p.note::after {
content: url(images/icons/nemo.png);
}

p.note::before {
content: "Note: ";
font-weight: bold;
}
selector::pseudo-element {
	property: value;
}
```

```
<p class="note">This is a paragraph with a “note” class. </p>			
```

<div class="output">
Note: This is a paragraph with a “note” class. 	
</div>


## CSS: Review
You should now have an understanding of how to
- Write CSS rules
- Use external CSS stylesheets
- Leverage how styles “cascade”
- Target elements with selectors
- Specify color and text properties
- Use the box model
- Target elements with advanced selectors
- Use pseudo-classes and pseudo-elements


## “User Experience”

###The 5Es Experience Framework, [Keetra Dean Dixon](https://fromkeetra.com/)
While the 5Es is a method for experiential design, it applies well to designing a web experience. It helps us consider:
- How would you like people to move through the experience?
- How can you attract them and keep them engaged?

1. Entice
- How are visitors invited to participate?
- How are they invited to the space in the first place?

2. Enter
- What is the threshold moment where a visitor transitions from their world to yours?

3. Engage
- How do visitors interact? How do they know how to interact? How do they engage with one another?

4. Exit
- How do visitors know when they are done? What is the second threshold– the transition back into the real world?

5. Extend
- How do guests continue to participate? Is there a take-home or social opportunity?

Closing the circle
- This cycle can span an entire event, a whole space, or just a single piece of an interaction.



{{< vimeo 65248695 >}}

> By writing directly into a mechanical form rather than a manuscript (as we’re doing right now) the writer would be working closer to the nature of the multiplied result, and through an increasing awareness and gradual mastery of the form’s new limitations and possibilities \*the writing itself would evolve;\* the shorter the distance between the raw material of words and their processed output, the more entwined the content and form from the outset. This line of thinking was more famously expounded by Benjamin in his 1936 essay “The Work of Art in the Age of Mechanical Reproduction,” which more broadly argues that an authentic, pertinent art is the result of engagement with the latest technological innovations.







- [Dexter Sinister: LETTER & Spirit](http://www.servinglibrary.org/journal/3/letter-and-spirit)

- [Bruno Latour: How to do Words with Things](http://www.servinglibrary.org/journal/3/how-to-do-words-with-things)

- [Dexster Sinister: A Note on Time](http://www.servinglibrary.org/journal/1/a-note-on-the-time)

### Remote vs. Local

### Protocols
Protocols are standardized ways in which information (data & documents) can be passed from one computer to another.
- Email (POP, SMTP, IMAP)
- FTP (File Transfer Protocol)
- IP (Internet Protocol)
- HTTP (HyperText Transfer Protocol)

### Hypertext Protocol
`http://www.mywebsite.com`

- HTTP is the most common protocol for transferring web content from server to client on the world wide web (www.)
- `https://`  is used for secure connections, whenever information should be encrypted in transit
- URLS often begin with “www” but should not be necessary if the server is properly configured
- The web client, or browser, uses its rendering engine to translate marked up content (such as HTML, XML, image files, etc.) and formatting information (such as CSS, XSL, etc.) to what you see on the screen


### Directories 
When building a website, it is best to organize your files into appropriate structures by using folders. 
Root	top level folder
index.html	main homepage 
File names: best practice to use lowercase, numbers, hyphens ( - ), underscores ( _ ) and no spaces
Establish a consistent naming convention

### Traversing Paths

You can reach a location in 3 different ways:
Absolute Path: exact location ( http://www… )
Relative Path: directions relative to where you currently are
(foldername/) 	“down” or “forward” a folder
( ../) 	“up” or “back” a folder
Root relative Path: directions relative to your home
(/path) path from root folder. This will only work properly if you have a local server setup.

Stay organized! Use folders and appropriate file names
Avoid using spaces or special characters in file and folder names. Easiest to just use lowercase.
Make sure you understand where your files are located within your computer
Save and close out of files first, before moving them.




### IP (Internet Protocol) & DNS (Domain Name Server)
- 198.7.247.225
  IP : Internet Protocol is a machine-readable specific identification number assigned to a device (computer, printer, etc) within a particular computer network.

- risd.edu
  DNS : The Domain Name Server provides the human-readable version of the IP, mapping domain names to IP addresses.

### URL (Uniform Resource Locator)
`https://github.com/risd-web/webtype-spring2020`

Webpage can be identified either by  URL (Uniform Resource Locator), containing the following:

- An indication of the communication protocol, such as HTTP or HTTPS
- The domain name of the resource. There may be subdomains preceding the TLD (i.e. “.com” or top-level domain.)
The port number, indicating over which port the connection to the server should be attempted. By default this is 80 and is omitted in the URL (http://risdweb17.motsuka.com:80/resources/)
Any additional locating information, such as the path of the requested file, or any query parameters

### Subdomains
Subdomains are extensions of the main domain. Once you’ve registered and purchased a domain name, it is usually free to add additional subdomain addresses. This is useful when you’d like to create multiple websites under one domain.
risd.gd, for example, uses subdomains for its more specific websites





- [Pointer Pointer](http://pointerpointer.com/)
- [Mouse Pointer](http://mousepointer.name/)
- [Akihiko Taniguchi](http://okikata.org/)
- [Welcome.js](http://booktwo.org/notebook/welcome-js/)
# Projects 

## Compilation
* Compile all of your work into a single website. These should all be linked from an index.html file living at your repository root.
* Be sure to organize your files into appropriate folders (avoid spaces and capitals)
* Be consistent in your naming
* Every Project and Exercise should be in their own respective folder. For online exercises, simply include a screenshot image in the folder. Include any process images (sketches, etc.) in a process folder, but please do not include raw psd files. For section 2, be sure to include a link to your in-class presentation as well. Below is a sample folder structure:

```
repository-name(root)
├── index.html
├── style.css
├── script.js
│
├── projects
│   ├── project1
│   │    ├── index.html
│   │    ├── style.css
│   │    └── images
│   │           ├── img1.jpg
│   │           ├── img2.jpg
│   │           └── img3.jpg
│   ├──project2
│   │    ├── index.html
│   │    └── style.css
│   .
│   .
│   .
├── exercises
│   ├── exercise1
│   │    ├── index.html
│   │
│   ├──exercise2
│   │    ├── index.html
│   │    └── style.css
│   .
│   .
│   .
├── presentation
│   .
│   .
│   .
└── process
    .
    .
    .
```



## Project 4: Final
>Determine your own final project. You may begin a new project from scratch, or choose to expand upon a previous project or exercise. Your decisions in how to organize the content, format it, navigate through it, and interact with it should carefully reflect your concept. 

1. Plan (Sketch a sitemap, categorize your content)
2. Design (Consider your layout, typography, and palette)
3. Develop (Leverage your combined knowledge of HTML, CSS and JavaScript)
4. Test your website (Design the responsive behavior of the site and test across devices, including phones)


## Project 3: A Record
>Choose a span of time to represent as a multi-page website. This might be your personal history (every year of your life), your activities over a 7 day week, or a 24-hour period. 
* Gather data and contents (imagery, etc.) Consider different forms of media.
* Determine a navigational system suitable for your framework: is it linear or modular? How do you build a sequence?
* How do you express the passage or experience of time? What is the website about?
* Pay close attention to the user experience. What information orients / disorients?
* Incorporate at least one interactive element using jQuery / JavaScript.
* Due **Tuesday January 23**

## Project 2: (De)design Systemsj
>Choose and study a “default” of the web and either enhance it or subvert it. Whether you are subverting or enhancing the behavior, be deliberate; the site should demonstrate self-consciousness in its mode of construction.
* Pick a system, convention, or trend of the web (either past or present.) Study its iterations.
* What is / is not communicated with this? What audiences does it assume? What systems does it support / not support?
* Determine an approach to illustrate your findings.
* Develop your site in HTML & CSS. How does the visual and interactive language support the content?
* Due **Wednesday January 17.**

## Project 1: Styling Lyrics
>Choose a text and use web technologies as an expressive platform for it using HTML & CSS 
* Pick an expressive piece of text: song lyrics, a poem, a manifesto, etc.
* Combine with imagery and sketch out a design for this text.
* Translate this sketch into HTML & CSS
* Reference on designing for the screen: [What Screens Want](https://www.frankchimero.com/writing/what-screens-want/)
* Due **Tuesday January 9.**

