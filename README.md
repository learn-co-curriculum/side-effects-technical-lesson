Page: Technical Lesson: React Side Effects

* * * * *


## Introduction

In this lesson, we're going to focus on how to handle side effects in a React application using the **useEffect** hook. You'll follow along and build a small application that demonstrates some common side effects:

- Updating the document title when the user's name changes  
- Fetching user data when the component mounts  
- Listening for a click event and cleaning up that event listener  

We'll also walk through a Git workflow, making small, descriptive commits that capture each feature as we develop it.

---

## Scenario

We have a basic React application that greets a user by name. Currently, it only displays a default user name and some static text. We want to add the following side effects to make it more dynamic and interactive:

1. **Document Title Effect**: Whenever the user's name changes, the browser tab should display `Welcome, {userName}`.  
2. **Data Fetching**: When the component first mounts, it should fetch additional user data from an external API and store it in state.  
3. **Event Listener**: We'll attach a listener to the `window` object to detect clicks, then remove this listener when the component unmounts to avoid memory leaks.

---

## Task 1: Define the Problem

The user should be able to:

1. See their name reflected in the document title when it changes.  
2. Retrieve user data from an external source and display it when the component mounts.  
3. Execute custom logic when the user clicks anywhere on the page, and stop tracking clicks when the component is removed.

---

## Task 2: Determine the Design

1. We only need **one main component** to handle the user's name, the fetched data, and the event listener.  
2. We'll use **multiple `useEffect` hooks**, each handling a different side effect (title update, data fetch, event subscription).  
3. We'll create **separate pieces of state** for the user's name and for fetched data. We’ll also use a simple boolean or placeholder to confirm that our event listener is working.

---

## Task 3: Develop the Code

We'll start from a GitHub repository or a local React setup. Here's the **process** we'll follow:

1. **When X event occurs**  
   - `userName` changes  
   - Component mounts  
   - User clicks  

2. **Implement Y side effect**  
   - Update the document title  
   - Fetch user data  
   - Log a message (or any logic you want)

3. **Clean up Z effect**  
   - For event listeners, remove them in a cleanup function to prevent memory leaks.

---

## Task 4: Test and Refine

1. **Check** that the document title updates when you change `userName`.  
2. **Verify** that the data is fetched upon mount, and the user data appears on the screen.  
3. **Ensure** the click event is logged to the console whenever you click on the page. Remove the component (by unmounting it or navigating away) and confirm there are no further logs.

---

## Task 5: Document and Maintain

Use **Git** to track each step. Make small commits with clear messages. This ensures a helpful history that documents your development process.

---

## Tools and Resources

- **GitHub Repository** (you can create your own or use an online editor like CodeSandbox)  
- **React** (with `useState` and `useEffect` hooks)  
- **Local Development Environment** or an online sandbox  
- **Git** for branching, committing, and merging your code

---

## Instructions

### Step 1: Fork, Clone, and Create a New Git Branch

1. **Fork** and **clone** the repository https://github.com/learn-co-curriculum/side-effects-technical-lesson.git (or create a new React app locally).  
2. **Open** your terminal and navigate into the project folder.  
3. **Create** and switch to a new branch:
```bash
git  checkout  -b  feature-side-effects
```

1.  This separate branch will contain all your changes related to side effects.

* * * * *

### Step 2: Update the Document Title with useEffect

1.  Open the component file where you want to manage state (App.js).

Import the necessary hooks:

```jsx
import  React,  {  useState,  useEffect  }  from  "react";```

Initialize your state for the user's name:

```jsx
const  [userName,  setUserName]  =  useState("Guest");```

Add a useEffect hook to update the document title:

```jsx
useEffect(()  =>  {

  document.title  =  `Welcome, ${userName}`;

},  [userName]);

This effect runs whenever userName changes.

Render an input field to change userName:

return  (

  <div>

    <h1>Hello,  {userName}!</h1>

    <input

      type="text"

      value={userName}

      onChange={(e)  =>  setUserName(e.target.value)}

    />

  </div>

); 
```

Commit your changes:

```bash
git  add  .

git  commit  -m  "Update document title using useEffect"

```
* * * * *

### Step 3: Fetch Data on Component Mount

Create another piece of state to store fetched data:

```jsx
const  [userData,  setUserData]  =  useState(null);

```
Add another useEffect with an empty dependency array, so it runs only once on mount:
```jsx

useEffect(()  =>  {

  fetch("https://jsonplaceholder.typicode.com/users/1")

    .then(response  =>  response.json())

    .then(data  =>  {

      setUserData(data);

    })

    .catch(error  =>  console.error("Error fetching user:",  error));

},  []);

```

Display the fetched data in your return statement:
```jsx

return  (

  <div>

    <h1>Hello,  {userName}!</h1>

    <input

      type="text"

      value={userName}

      onChange={(e)  =>  setUserName(e.target.value)}

    />

    {userData  &&  (

      <div>

        <h2>User  Info</h2>

        <p>Name:  {userData.name}</p>

        <p>Email:  {userData.email}</p>

      </div>

    )}

  </div>

);

```

Commit your changes:

```bash
git  commit  -am  "Fetch user data on component mount"
```

* * * * *

### Step 4: Set Up an Event Listener and Cleanup

Add a new useEffect for subscribing to window clicks:

```jsx
useEffect(()  =>  {

  const  handleWindowClick  =  ()  =>  {

    console.log("Window was clicked!");

  };

  // Add event listener

  window.addEventListener("click",  handleWindowClick);

  // Cleanup to remove the listener on unmount

  return  ()  =>  {

    window.removeEventListener("click",  handleWindowClick);

  };

},  []);

```

This effect demonstrates how to clean up a subscription or event listener.

Commit your changes:

```bash

git  commit  -am  "Add event listener with cleanup in useEffect"

```
* * * * *

### Step 5: Push to GitHub and Merge Changes

Push your local branch to GitHub:

```bash

git  push  origin  feature-side-effects

```

1.  Create a Pull Request:

-   Go to your repository on GitHub.

-   Click "Compare & pull request."

-   Make sure you're merging into the correct branch (e.g. main).

3.  Review and merge your PR when ready. After merging, you can delete the feature-side-effects branch on GitHub.

* * * * *

### Step 6: Pull the Merged main Branch Locally

```bash
git  checkout  main

git  pull  origin  main
```
1.

* * * * *

Considerations
--------------

-   Multiple useEffect Hooks: It's often clearer to use separate hooks for logically distinct side effects rather than combining everything into one.

-   Dependency Array:

-   Always list all state and props that should trigger the effect to re-run.

-   Leaving the array empty ([]) makes the effect run once on mount (and on unmount for cleanup).

-   Error Handling: Gracefully handle any failures in your fetch calls or other side effects.

-   Performance: Avoid unnecessary side effects in your code to prevent performance issues.

-   Git Best Practices: Keep commits small and well-labeled to maintain an understandable project history.

With these steps, you'll have a working example that demonstrates several types of side effects in a single React component. You can expand these examples to cover any other side effects your application needs.

* * * * *

Finished Code Example
---------------------

Below is what your final App.js file might look like after completing all the steps and implementing each side effect:

```jsx
// src/App.js

import  React,  {  useState,  useEffect  }  from  "react";

function  App()  {

  // 1. State for user's name

  const  [userName,  setUserName]  =  useState("Guest");

  // 2. State for fetched user data

  const  [userData,  setUserData]  =  useState(null);

  // 3. Update document title whenever userName changes

  useEffect(()  =>  {

    document.title  =  `Welcome, ${userName}`;

  },  [userName]);

  // 4. Fetch data once on component mount

  useEffect(()  =>  {

    fetch("https://jsonplaceholder.typicode.com/users/1")

      .then(response  =>  response.json())

      .then(data  =>  {

        setUserData(data);

      })

      .catch(error  =>  console.error("Error fetching user:",  error));

  },  []);

  // 5. Set up window click listener & cleanup on unmount

  useEffect(()  =>  {

    const  handleWindowClick  =  ()  =>  {

      console.log("Window was clicked!");

    };

    window.addEventListener("click",  handleWindowClick);

    return  ()  =>  {

      window.removeEventListener("click",  handleWindowClick);

    };

  },  []);

  return  (

    <div  style={{  margin:  "2rem"  }}>

      <h1>Hello,  {userName}!</h1>

      <input

        type="text"

        value={userName}

        onChange={(e)  =>  setUserName(e.target.value)}

      />

      {userData  &&  (

        <div  style={{  marginTop:  "1rem"  }}>

          <h2>User  Info</h2>

          <p>Name:  {userData.name}</p>

          <p>Email:  {userData.email}</p>

        </div>

      )}

    </div>

  );

}

export  default  App;

```

Use this as a reference to confirm your final implementation. Each side effect is handled in its own useEffect hook, making the code organized, easy to read, and straightforward to maintain.