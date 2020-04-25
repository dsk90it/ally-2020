## 🎖️Frontend Challenge [![Netlify Status](https://api.netlify.com/api/v1/badges/402c1cf7-83ce-43c7-ae11-0a2680639f2b/deploy-status)](https://app.netlify.com/sites/ally2020/deploys)
Create a Single Page Application to display OKRs (Objectives & Key Results) with filters

## 🚀 Demo
https://ally2020.netlify.app/

## ❗Requirements [Completed : 6/6]
- ✅ You have to make an AJAX request to fetch OKRs.
- ✅ Note: (Refer fetched json)
    - Any object without `parent_objective_id` is an Objective (parent objective)
    - Any object with `parent_objective_id` is a Key Result (child objective). So, design UI like accordion.
- ✅ Create filters to filter OKRs based on category
- ✅ Well written & modular JS code (Following industry standards & splitting UI into components)
- ✅ Well written CSS
- ✅ Responsive site

## 👨‍💻Tech Stack
- HTML
- CSS
- Vanilla JS
- Webpack

## ⚙ Installation
1. Fork this repository to your GitHub account
2. Clone your fork to your development machine
3. Install the package dependencies by running `npm install` (or yarn if you prefer)
4. Start the application server by running `npm run dev-server`
5. For production build run `npm run build`
