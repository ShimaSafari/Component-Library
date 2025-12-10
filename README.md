# Mini Component Library – React + TypeScript + Tailwind

This project is a small reusable component library built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS (v4)**.  
It was created as a technical assignment and demonstrates component design, type-safety, clean, reusable UI patterns.


## Features

### Technologies
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide Icon

### Implemented Components
#### **1. Button**
- Variants: `primary`, `secondary`, `outline`
- Sizes: `sm`, `md`, `lg`
- `loading` state with spinner
- `disabled` state
- Fully typed with TypeScript
- Reusable & customizable via `className`

#### **2. Input**
- `label`, `description`, and `error` states
- Disabled state
- Works as controlled
- Reusable & clean
- Type-safe and easy to extend

#### **3. Select**
- Controlled component
- Placeholder support
- Keyboard navigation: ↑ ↓ Enter Esc
- Disabled select state
- Reusable option list
- Type-safe and easy to extend

---

## Installation & Running the Project

```bash
npm install
npm run dev
```
Project will run at: http://localhost:5173

## Project Structure
```bash
src/
  components/
    Button/
      Button.tsx
      buttonType.ts
    Input/
      Input.tsx
      inputType.ts
    Select/
      Select.tsx
      selectType.ts
  App.tsx
  main.tsx
```