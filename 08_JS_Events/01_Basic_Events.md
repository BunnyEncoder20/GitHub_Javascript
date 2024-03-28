# Events in JavaScript

- JS is mostly a sequentially run languages (execution will happen line by line in order)
- Hence events also occur sequentially.
- There might be some exceptions (discussed in this tutorial)

<br>

- Browser `Events` can be thought of something similar to async `callbacks`.
- They are evoked when something happens on the page (clicks, hover, etc).

---

## Adding Events to HTML elements

- There are many ways to add events to HTML elements
- We could use the `onclick` attribute to add events. 

```html
<li><img 
        id="m5" 
        width="200px"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="blue bmw"
        onclick="alert('I love bmw')">  <!-- click event -->
</li>
```
- **NOTE** that this is not a optimized approach when using **pure JS**. It will cause issues when we try to scale the project. 
- However it doesn't affect that much when we do the same thing in **React or Angular**. In those frameworks, adding events in inline style is optimized and scalable.

<br>

- Another approach can be fetching the element using selectors and then assign it an onclick event to it.

```js
<script>
    document.getElementById('r8').onclick = function(){
        alert('Audi r8 comes in electric also');
    }
</script>
```
- This approach, thought looks better, is still not recommended. 
- This is because onclick events do not give much information and cause problems when we want to propagate events
- It is recommended to use **Event Listeners**.
- They not only give more features but also allow for event propagation.

```js
<script>
    document.querySelector('#huracan').addEventListener('click', function(e){
        console.log(e)
        alert('Huracan is actually the most affordable Lambo');
    }, false)
</script>
```
- **Look** at the syntax carefully. There are actually 3 arguments.
  - First one is the type of event (click, Hover, etc)
  - Second is the callback function
  - Third one is for enabling and disabling **event capturing** (default is false, hence overlooked most of the time)(PS: false = event bubbling ; true = event capturing)
- The Items which are **important** are listed below:

1. Type: 
2. timestamp:
3. defaultPrevented:
4. target
5. toEvent
6. srcElement
7. currentTarget
8. clientX, clientY, screenX, screenY
9. altkey, ctrlkey, shiftkey, keyCode

<br>

---

## Event Propagation (Bubbling VS Capturing)

- Consider the following events : 

```js
document.querySelector('#huracan').addEventListener('click',(e)=>{
    console.log('Clicked on Huracan')
}, false)   // false =  bubbling

document.querySelector('.images').addEventListener('click',(e)=>{
    console.log('Clicked on Image List')
})  // default false = bubbling
```
- Now, when we click on the Huracan Image, it'll trigger 2 events.
  - Click on Huracan
  - Click on Image list
- **Note** that the click on Huracan event logs first, and then the Image list one is logged. 
- This property of events is know as **event bubbling**
- The event is propagated from the smallest element to the biggest (child to parent)

<br>

- Another way of propagation of events is **event capturing** 
- It basically get's the events in a order opposite of bubbling.

```js 
document.querySelector('#huracan').addEventListener('click',(e)=>{
    console.log('Clicked on Huracan')
}, true)    // true = capturing

document.querySelector('.images').addEventListener('click',(e)=>{
    console.log('Clicked on Image List')
}, true)    // true = capturing
```
- Hence in capturing, the largest element's event will be logged first and then the smaller element (parent to child).
  - Click on Image List
  - Click on Huracan
- Both are just 2 ways of propagation of events and what to use will depend on the use case of the application.

<br>

- we can prevent the bubbling (propagation) of events from a child element to the parent element by using `.stopPropagation()` similar to `.preventDefault()`

```js
document.querySelector('#huracan').addEventListener('click',(e)=>{
    console.log('Clicked on Huracan')
    e.stopPropagation()
}) 

document.querySelector('.images').addEventListener('click',(e)=>{
    console.log('Clicked on Image List')
})
```
- Now this code will not allow the click event to reach the second parent element event listener. We will only see 
  - Click on Huracan
- This is because the event propagation was stopped at the child element itself. 
- This is useful when the parent element is trying to listen for some other event. 

<br>

- As mentioned, `.preventDefault()` is used to prevent the default behavior of the event or any element.
- Eg: by default when we click on a link on our html page, it opens that link.
- We can prevent this behavior by using `.preventDefault()` as seen below 

```js
 document.querySelector('#google').addEventListener('click',(e)=>{
    console.log('Google Link Clicked')
    e.preventDefault()
    e.stopPropagation()
})
```
- In this code, though we click on the google link, which event is logged in the console, the link doesn't open
- Also we stopped the propagation and hence there is no log of Image List click event also.

<br>

---

## Mini Task : Image Vanisher.

- First attempt:

```js 
document.querySelector('.images').addEventListener('click',(e)=>{
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.parentNode)    // selects <li> of that image
    let toDelete = e.target.parentNode

    toDelete.remove()       // approach 1
    // toDelete.parentNode.removeChild(toDelete)    // approach 2
}, false)
```
- This a very simple approach. 
- Notice the 2 approached we can remove the image
- However there is a flaw with this approach. It only works when we precisely click on the Image element only. 
- If by mistake we click on the li element or link element in the end, it'll make the whole ul disappear. (because the `e.target.parentNode` of `<li>` is `<ul>`)
- This is called `event spill over` which is an unwanted event behaviors.
- We can use tagName property to know which html tag was clicked exactly and put simple checks in place : 

```js
document.querySelector('.images').addEventListener('click',(e)=>{
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.tagName)       // helps us know what tag was clicked

    if (e.target.tagName === 'IMG'){
        let toDelete = e.target.parentNode
        toDelete.remove()
    }
    
}, false)
```