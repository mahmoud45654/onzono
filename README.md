# Onzono SkyConnect

[![Project Status](https://img.shields.io/badge/Status-In%20Development-blue)](https://github.com/your-repo-link) [![License](https://img.shields.io/badge/License-MIT-green)](LICENSE) A professional-grade flight and lounge search platform, inspired by leading travel aggregators like Skyscanner. Built with **Next.js**, styled using **Tailwind CSS**, and fully equipped with **i18n** (internationalization) support for a global user base.

## ✨ Features

* **🌐 Multilingual Support (i18n):** Seamlessly switch between English (en), Arabic (ar), Spanish (es), Portuguese (pt), and German (de) to provide a localized user experience.
* **🚀 Modern Stack:** Leverages the power of Next.js for server-side rendering (SSR), static site generation (SSG), and optimized performance.
* **🎨 Responsive & Modern UI:** Designed with Tailwind CSS to ensure a beautiful and adaptive user interface across all devices (mobile, tablet, desktop).
* **✈️ Flight Search Functionality:** Intuitive interface for searching flights based on origin, destination, and dates.
* **🏨 Lounge Details:** Dedicated sections and cards to display information about airport lounges.
* **📦 Component-Based Architecture:** Organized and reusable React components for maintainability and scalability.
* **⚙️ Professional Tooling:** Integrated ESLint for code quality and Prettier for consistent code formatting.
* **☁️ Vercel Deployment Ready:** Optimized for easy deployment to Vercel, ensuring fast and reliable performance.

## 🛠️ Technologies Used

* **Next.js 14+:** React framework for production.
* **React 18+:** JavaScript library for building user interfaces.
* **Tailwind CSS 3+:** A utility-first CSS framework for rapid UI development.
* **next-i18next 15+:** Internationalization library for Next.js.
* **ESLint:** Pluggable JavaScript linter.
* **Prettier:** Code formatter.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/onzono-skyconnect.git](https://github.com/your-username/onzono-skyconnect.git) # Replace with your actual repo URL
    cd onzono-skyconnect
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

1.  **Build the application for production:**
    ```bash
    npm run build
    ```
2.  **Start the production server:**
    ```bash
    npm start
    ```

### Internationalization (i18n)

To add or modify translations:

1.  Navigate to the `public/locales` directory.
2.  Inside each language folder (e.g., `en`, `ar`), you'll find JSON files (e.g., `common.json`, `home.json`, `search.json`, `lounges.json`, `whatsapp.json`, `results.json`).
3.  Add your translation keys and values to the respective JSON files.
4.  Ensure that `next-i18next.config.js` includes all supported locales.

## 🧹 Code Quality

* **Linting:**
    ```bash
    npm run lint
    ```
* **Formatting:**
    ```bash
    npm run format
    ```

## 🤝 Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` (if exists) for guidelines on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📧 Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
