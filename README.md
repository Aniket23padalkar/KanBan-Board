# Kanban Board – React

## 🔗 Links

**Live Demo**
[https://kan-ban-board-kappa.vercel.app/]

**GitHub Repository**
[https://github.com/Aniket23padalkar/KanBan-Board.git]

A simple but powerful Kanban Board built with React to manage tasks across different stages using drag & drop.  
This project helped me understand state flow, component structure, and real-world CRUD logic better.

---

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Drag & Drop tasks between columns
- Search tasks in real-time
- Data persistence using `localStorage`
- Clean and responsive UI

---

## 🧠 What I Practiced & Learned

This project wasn’t about just making it look good. It was about logic:

- How to structure data in React
- How to lift and share state using Context API
- How drag & drop actually works (mouse events + data transfer)
- How re-rendering works in React
- How to manage filtered vs original data
- How to avoid unnecessary state updates
- How to persist data using `localStorage`

It forced me to debug real problems instead of watching tutorials.

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- Context API
- Local Storage
- React Icons

---

## 🧩 How Drag & Drop Works (In Simple Words)

1. When dragging starts, I store the task id and column name
2. When I drop it on another column:
   - I remove it from the original column
   - I push it into the new column
3. State updates and UI updates automatically

---
