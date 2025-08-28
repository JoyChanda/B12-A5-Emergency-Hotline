
## Readme

#### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById :
The getElementById method can access only one element at a time, which is the element with the ID that is specified.

getElementsByClassName: 
method returns an object containing all with the specified class name, as a collection of HTML Collection object representing a collection of the nodes. The elements returned can be accessed using its index starting from zero.

querySelector: The querySelector() method returns the first element within the document that matches a specified CSS selector(s). If multiple elements occurs, then it returns the result for only the first matching element.


querySelectorAll : 
The querySelectorAll() method returns all the elements within the document which matches the specified CSS selector(s). It returns all the elements that matches with the selector in the form of a static NodeList object which is a collection of nodes. 
#### How do you create and insert a new element into the DOM?

Here are the basic steps. Create and populate the element:

    createElement() — create a new element
    setAttribute() — set any needed attributes, such as ID's or classes
    createTextNode() — create any needed content
    appendChild() — attach the new text node to the element
Then add the element to the document, using one of the following methods:

    appendChild()
    insertBefore()
    replaceChild()

example: 
let newDiv = document.createElement("div"); 
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);


#### What is Event Bubbling and how does it work? 

Event Bubbling is a term in the DOM, where the event an element receives the bubbled (transmitted) to its parent and ancestors, upward in the DOM tree, until it gets to the root.



#### What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of code. 

Especially, dealing with dynamic content or a large number of elements. By leveraging event bubbling, which helps reduce the number of event listeners and streamlines the code.

#### What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting. 

stopPropagation(): stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.
