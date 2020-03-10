---
title: "JavaScript"
date: 2020-03-07
summary: "Writing instructions"
reference:
draft: true
---

Unlike HTML and CSS, Javascript is a programming language and can perform all sorts of actions. JavaScript is list of instructions to be interpreted and executed by your computer, either by a browser or other JavaScript interpreter (in the command line.) 

- content, HTML
- form, CSS
- **behavior, JavaScript**

Javascript can add interactivity to a page by manipulating the DOM (Document Object Model).
- Access the content of the page
- Modify the content of the page
- Program rules or instructions the browser can follow
- React to events triggered by the user or browser
- Use an API via HTTP(S)


## Setup
Like CSS, JavaScript can be included within your `html` file as well as linked as an external file.

```HTML
<!-- Internal JavaScript -->
<script language="javascript" type="text/javascript">
  JavaScript code 
</script>


<!-- External JavaScript -->
<script language="javascript" src="js/filename.js"></script>
```

## Output
When you instruct Javascript to perform a task, it will usually give you some output, but it won’t automatically display it anywhere. You can verify your result by using the Console of your browser.
```JS
<script language="javascript" type="text/javascript">
	console.log("Hello World!");
</script>
```

## Comments
Comments are important to keep your code legible — they help you execute the program in your head.  They’re a great tool to keep track of the purpose of each line of your script. They also help future you (and others) read and understand your code.

```JS
<script language="javascript" type="text/javascript">
      
      // ”//” starts a single line comment.

      /* “/*” opens a multiline comment,
         and “*/” closes it. */

</script>
```

## Syntax
A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a *statement*. Statements should end with a semicolon (`;`) Statements are composed of *values*, *operators*, *expression*, *keywords*, and *comments*. Semicolons are not needed after curly brackets `}` (except when it is an expression.)

|type|description|example|
|---|---|---|
|values| Fixed values are called *literals*, such as numbers or texts (strings). Variable values are called *variables*.|`"Hello!"` `23`|
|operators| Operators determine the relationship between the left and right side of the operand. There are different categories of operators|`var x = 5;` `(5 + 6) * 9;`|
|expression| An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation.| `(5 + 6) * 9;` `"Web" + " " + "Design";` `x * 10;`|
|keywords | Keywords are used to identify actions to be performed.| `let x = 5;`|


```JS
<script language="javascript" type="text/javascript">

      alert("hi");

      if (…) {
       …
      } else {
       …
      }

      function foo() {
        return true;
      }

      let foo = function() {
        return true;
      }; // this is an expression

      for (let i=0; i < 10; i++) {
         // actions 
      } 

</script>
```

## Data types

### Strings
In programming languages, any textual content that is not part of the programming instructions must be surrounded in single or double quotes (just make sure they match, and that they’re not curly quotes.) 

```JS
"Hello World";   // works
'Hi';            // works
"This';          // won’t work
```

### Numbers
Numbers do not need to be surrounded in quotes `""`. 

```JS
1    // integers
0.5  // non-integers with decimal digits are called floats
```

### Boolean
A binary value of either `true` or `false`. These are useful for [conditionals](#conditionals).

```JS
let x = false;
if (x) {
  // this code is not executed
}
```

### Variables
A variable is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name; it can serve as a container for anything (numbers, strings, booleans, arrays, other variables.)

```JS
let x = 9;
let school = "RISD";
```

### Variable naming conventions
You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.
- Avoid underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
- Avoid numbers at the start of variables.
- A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. `camelCase`
- Make variable names intuitive, so they describe the data they contain. Avoid single letters/numbers, or big long phrases.
- Variables are case sensitive — so myage is a different variable from myAge.
- Avoid using JavaScript [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) as your variable names — like `var`, `function`, `let`, and `for` — since browsers recognize them as code.


### Arrays
An array is a data type that contains a group of values. This can be a list of anything—strings, integers, variables. An array is defined by a comma-separated list of items in square brackets `[]`.

```JS
let colors = ["red","green","blue"];
````

You can access array items by their *index,* or numerical label, inserted between square brackets`[]`. The starting position is `0`, not `1.`  The `length` property will give you the number of items in an array. 

```JS
colors[0] // red
colors[1] // green
colors.length // 3
```

### Objects
An object is a collection of data, where each data in the collection has a unique name that identifies it. An object is defined by a comma-separated list of `key: value` pairs in curly brackets `{}`.

```JS
let numbers = {e: 2.7183, pi: 3.1416};
```

Each item in the object has a *key* and a *value.* You use the key to get at the value! You can access the value either by a `.` before the key or by inserting the key within square brackets `[]`. If using square brackets, make sure to surround the key in quotes `''`. 
```JS
numbers.e // 2.7183
numbers['pi'] // 3.1416
```

## Operators
### Assignment operators
The assignment operator `=` assigns the right-hand value to the left-hand operand.
```JS
let name = "Beatrice"; // assigns Beatrice to the name variable
name = "Betty"; // updates the value of name to Betty

let count = 5; //assigns 5 to the variable count
count = count + 3; // updates the count variable by adding 3 to itself. count is now 8. 
```

There is a shorthand for variables to assign new values to itself.
```JS
count += 3; // same as count = count + 3
count ++; // same as count += 1, or count = count + 1
```

### String operators
The concatenation operator (`+`) concatenates two string values together, returning another string that is the union of the two operand strings. 
```JS
var mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

### Comparison operators
Comparison evaluates an expression, returning a boolean, `true` or `false`.
Below are some examples — these are **strict** comparison formats, meaning they will check both the data type and the value.

|operator|description|
|---|---|
|`===`| checks whether they are equal
|`!==`| checks whether they are NOT equal
|`<` or `>`| checks that the number on the left is less than or greater than the right

### Logical operators
Logical operators combine multiple conditions

|operator|description|
|---|---|
|`&&`| logical AND `3 < 5 && 2 > 9 //evaluates to false`
|`||`| logical OR `3 < 5 || 2 > 9 //evaluates to true`


## Conditionals
Conditionals allow you to declare different actions based on different conditions. You can use simple If/Then/Else logic to define your scenarios.
```JS
let x = 2
if (x === 2) {
  console.log("x is 2");
}
else if (x === 3){
  console.log("x is 3");
}
else {
  console.log("x is neither 2 nor 3");
}
```



## Functions
## Loops

## The Document Object

JavaScript works with objects, which are containers for named values (properties and methods.) The most important object in JavaScript is the Document Object. It represents an HTML web page. 
- *Properties* describe characteristics of the current web page (such as the title of the page).
- *Methods* perform tasks associated with the document currently loaded in the browser (such as getting information from a specified element or adding new content).
- *Events*, such as a user clicking or tapping on an element, can be used as triggers for methods




