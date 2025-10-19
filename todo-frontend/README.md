# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





























Awesome question. Let’s quickly **break down the full stack flow** you just built — step by step — so you understand **what happened and how everything connects.**

---

## 🧠 Your Full Stack Todo App Flow (React → Node.js → MongoDB)

### 🔹 1. **Frontend: React (`todo-frontend`)**

* You built a form with an input field (`AddTodo.js`)
* User types a todo and clicks **“Add Todo”**
* React calls `fetch("http://localhost:3005/add-todo")` to send a `POST` request

🟢 **Data sent:** `{ title: "Adnan" }`

---

### 🔹 2. **Backend: Node.js + Express (`server.js`)**

* Receives the request at `/add-todo`
* Extracts the `title` from `req.body`
* Uses Mongoose to save it to MongoDB:

  ```js
  const newTodo = new Todo({ title });
  await newTodo.save();
  ```
* Sends a JSON response back to React:

  ```json
  {
    "message": "Todo saved successfully",
    "todo": { ... }
  }
  ```

✅ **Backend validates, saves, and responds.**

---

### 🔹 3. **Database: MongoDB Atlas**

* Receives the data from your backend via Mongoose
* Creates a new document in your `todos` collection
* Auto-generates fields like:

  * `_id`
  * `createdAt`
  * `completed` (default: false)
  * `completedAt` (default: null)

🟢 **You confirmed the data is saved in MongoDB.**

---

### 🔁 Request / Response Flow Overview

```
User types todo → React → Express API → MongoDB → ✅ Saved
                             ↓
                         Responds → React logs → "Todo saved"
```

---

### ✅ Tools You Used

| Layer         | Tech Used                    |
| ------------- | ---------------------------- |
| Frontend      | React (JSX, useState, fetch) |
| Backend       | Node.js, Express             |
| Database      | MongoDB Atlas (via Mongoose) |
| Communication | REST API (JSON over HTTP)    |

---

### 🧩 What’s Working Now

* [x] Form input and submit in React
* [x] API call with `fetch` to Express backend
* [x] Express receiving and parsing JSON body
* [x] Saving todo in MongoDB Atlas
* [x] Console logs confirming everything works

---

### 🚀 Next Step?

Here are options:

1. 🔁 **Display todos on screen**
   → Fetch from `/get-todos` and show in a list

2. ✅ **Mark as completed**
   → Add checkbox or button to toggle `completed`

3. 🗑️ **Delete a todo**
   → Add delete button to remove a todo

Just tell me which one you want, and I’ll drop the code immediately.
Let’s keep building! 💻🔥
