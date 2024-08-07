# Production Level Folder Structure for React Apps

## List of folders : 

1. Components Folder
1. Context Folder
1. Hooks Folder
1. Services Folder
1. Utils Folder
1. Assets Folder
1. Config Folder
1. Styles Folder

Command to make them in one go : 
```
mkdir ( "components", "hooks", "services", "utils", "assets", "config", "styles" )
```

## Usages of Folders: 

1. components  : for all of our components 
2. pages : in these files where all the components of the page are brought together to make the actual pages of the website.
3. context/store : for managing our global object usig React Context API or for Housing the store of Redux Toolkit (RTK).
4. hooks : For all our hooks which  allows you to use state and other React features without writing a class.
5. services : files responsible for handling API calls and other services
6. utils : for functions are typically used across multiple components or modules and serve to centralize commonly used logic.
7. assets : images , icons, fonts 
8. config : for maintaining all the configurations of the file (eg: .env variables)
9. styles : for housing all the files related to styling.


## Additional Tips

1. When making `components` folder, make a `index.js` file where you import all the components and export all of the them. 


## Common Dependencies Paackages 

1. @reduxjs/toolkit
2. axios
2. react-hook-form
2. react-redux
2. react-router-dom

Command to install them all at once : 
```
npm i @redixjs/toolkit react-redux axios react-hook-form react-router-dom
```

## Tailwindcss 

1. Install : (with Vite, might be a little different for others)
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Config File (Change teh content part)
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...
}
```

3. Add the directives to main css file (index.css generally)
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```