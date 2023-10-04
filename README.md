# Sankshep AI 

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Contributing](#contributing)
- [License](#license)

## About

Sankshep AI is a web-based AI content summarizer designed to quickly extract key insights from articles and webpages. Users can paste the URL of a target article or webpage, and Sankshep AI will provide a concise summary in a single paragraph. The application also features a history section for easy access to previously summarized links.

## Features

- **Content Summarization**: Leverages AI to provide concise summaries from article URLs.
- **User-friendly Interface**: A clean and intuitive interface for a seamless user experience.
- **History Tracking**: Maintains a history of previously pasted links for quick access.
- **Copy to Clipboard**: Allows users to copy summarized content to the clipboard.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A state management library for React applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **RapidAPI**: Utilized for external API calls to perform content summarization.

## Getting Started

### Prerequisites

Before you start, ensure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/imambujshukla7/sankshepai.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd sankshepai
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your web browser and go to sankshepai.site.**

3. **In Sankshep AI:**
   - Paste the URL of the article or webpage you want to summarize.
   - Click the "Send" button to receive a one-paragraph summary.
   - Access previously summarized links in the history section.
   - Click the "Copy" button to copy summarized content to the clipboard.

## State Management

Sankshep AI utilizes Redux Toolkit for state management, ensuring a predictable and efficient way to handle data and UI updates.

## Contributing

Contributions are welcome! If you have improvements or bug fixes, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
