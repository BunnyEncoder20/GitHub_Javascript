# Editing and Removing DOM Elements

<br>

## Adding Initial Elements

Consider the Following Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai Aur Code</title>
    <style>
        .bg-dark{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body>
    <ul class='languagesList'>
        <li class='language'>Javascript</li>
    </ul>
</body>
<script>
    
</script>
</html>
```
- Now we want to add new items (languages) into the list.
- Instead of directly adding each language, we can create a function to create new list items and keep adding into the DOM.

```js
function addLanguages(lang){
    const li = document.createElement('li');
    li.textContent = `${lang}`;
    li.class = 'language';
    document.querySelector('.languagesList').appendChild(li);
}

addLanguages('Python');
addLanguages('Java');
addLanguages('C++');
addLanguages('TypeScript');
```
- The above approach is good for small scale projects, but it is not optimized way of adding elements 
- Because the querySelector has to traverse the whole DOM to find the element `ul` each time the function is called.
- For large scale projects, or when adding elements in the thousands, a  more optimized way should be used.
- Eg:

```js
const addLanguages = (langName) => {
    const li = document.createElement('li');
    li.className = "language"
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.languagesList').appendChild(li);
}
```
- appendChild is a more optimized approach instead of innerHTML.
- This is because innerHTML traverses the entire DOM tree. Whereas appendChild doesn't.

<br>

---

## Editing Elements of DOM

- we can fetch the element by using the `element:nth-Child(n)` property with `.querySelector()`.
- Eg:

```js
const secondLang = document.querySelector('li:nth-child(2)');
```
- Now we can change the properties of the element 
- use the `.replaceWith(element)` method to replace one node with another.
- Eg:

```js 
const secondLang = document.querySelector('li:nth-child(2)');   //python
// secondLang.innerHTML = 'Python3';   // not optimized
const new_li = document.createElement('li');
new_li.className = 'language';
new_li.appendChild(document.createTextNode('Python3'));
secondLang.replaceWith(new_li);
```
- **Careful** while replacing the elements because secondLang holds the text and html tags of the element.
- Hence if we just replace the innerText or textContent, the tags might get overwritten, causing errors in the page.
- We can also use the `.outerHTML` tag to edit the elements
- Eg:

```js
const firstLang = document.querySelector('li:first-child')  // Javascript
firstLang.outerHTML = '<li class="language">JS</li>';
```

<br>

---

## Removing DOM elements 

- We can remove an DOM elements easily by using the `.remove()` method
- Eg:

```js 
const lastLang = document.querySelector('li:last-child');
lastLang.remove();
```