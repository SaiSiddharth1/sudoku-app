# 🧩 Sudoku Solver & Generator (React)

A fully functional **Sudoku web application** built with **React (JSX)** that allows users to play Sudoku, validates moves in real time, visually highlights solver-filled cells, and generates new puzzles automatically.

This project was built incrementally with **daily GitHub commits** to simulate real-world product development.

---

## 🚀 Features

* 🎲 **Sudoku Puzzle Generator** (Easy–Medium difficulty)
* 🧠 **Backtracking Sudoku Solver**
* ✅ **Real-time Move Validation**
* 🎨 **Visual Highlighting of Solver-Filled Cells**
* 🔒 **Locked Pre-filled Cells** (cannot be edited)
* ⌨️ **Keyboard Input Support**
* 🌙 **Dark Theme UI**
* 🔁 **New Game & Solve Buttons**

---

## 🛠 Tech Stack

* **Frontend:** React (JSX)
* **Language:** JavaScript
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Algorithm:** Backtracking (DFS)
* **Styling:** Inline CSS (Dark Theme)

---

## 📂 Project Structure

```
src/
│── components/
│   └── Cell.jsx
│
│── utils/
│   ├── solver.js        # Backtracking Sudoku solver
│   ├── generator.js     # Puzzle generator
│   └── validators.js    # Move validation logic
│
│── App.jsx
│── main.jsx
```

---

## ▶️ How to Run Locally

```bash
git clone https://github.com/your-username/sudoku-react.git
cd sudoku-react
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🧠 How It Works (High Level)

1. A valid Sudoku board is generated using a solver
2. Numbers are removed to create a playable puzzle
3. User inputs are validated in real time
4. On clicking **Solve**, the solver fills remaining cells
5. Solver-filled cells are visually highlighted

---

## 📸 Screenshots

## Creating a Game

---
<img width="697" height="748" alt="Screenshot 2026-01-04 234140" src="https://github.com/user-attachments/assets/ed010f5f-ae72-4fce-b01d-c27ae699616e" />

---
## Solving the Game

---
<img width="704" height="746" alt="Screenshot 2026-01-04 234052" src="https://github.com/user-attachments/assets/6e41a495-3d96-4afd-91f9-cb7e98e92a8d" />

---

## 🎯 Learning Outcomes

* Practical React state management
* Integrating algorithms with UI
* Handling complex UI logic
* Writing clean, explainable frontend code

---

## 👨‍💻 Author

Built by **Kalavala Sai Siddharth**

---

⭐ If you like this project, consider starring the repository!
