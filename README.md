# Ellty Assignment

## Overview

This React application allows users to select and view pages. It utilizes Vite for development, React for the frontend, and jQuery for a popup message. The application enables users to select individual pages or all pages and view the selected pages in a different view.

## Features

- **Page Selection**: Choose individual pages or select all pages using checkboxes.
- **View Selected Pages**: Navigate to a page that displays the selected pages.
- **Popup Instructions**: A jQuery-based popup appears on page load, providing user instructions.

## Getting Started

To set up and run the project locally, follow these instructions:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Saurabhrajput1234/Ellty-assignment.git
    cd Ellty-assignment
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm run dev
    ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Selecting Pages**:
    - On the home page, use the checkboxes next to each page title to select or deselect pages.
    - Use the "All pages" checkbox to select or deselect all pages at once.

2. **Viewing Selected Pages**:
    - Click the "Done" button to navigate to a view that displays the pages you selected.

3. **Popup Instructions**:
    - A popup will appear for 2 seconds when the page loads, giving you initial instructions on how to use the application.

## Components

### PageSelector

- **File**: `src/components/pageSelector/PageSelector.js`
- **Description**: Allows users to select pages. Manages page selection state and displays a jQuery popup on page load.

**CSS**: `src/components/pageSelector/pageSelector.css`

### SelectedPages

- **File**: `src/components/selectedPages/SelectedPages.js`
- **Description**: Displays the content of the pages that were selected by the user.

**CSS**: `src/components/selectedPages/selectedPages.css`


## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Provides navigation and routing for the React application.
- **jQuery**: Used for DOM manipulation and creating the popup.
