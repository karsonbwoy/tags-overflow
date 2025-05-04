# Tags Overflow App

Tags Overflow App fetches and displays tags from the Stack Overflow API. The application is built using React, Material-UI, Zustand for state management, and Storybook for UI component development.

## Features

- **Tag Display**: Fetch and display tags from the Stack Overflow API.
- **Pagination**: Navigate through pages of tags.
- **Sorting**: Sort tags in ascending or descending order.
- **Page Size Selection**: Choose the number of tags displayed per page.
- **Loading State**: Show a loading spinner while fetching data.
- **Error Handling**: Display an error message if data fetching fails.
- **Storybook Integration**: View and test UI components in isolation.

## Project Structure

```
src/
├── components/         # Reusable React components
│   ├── Fail/           # Error message component
│   ├── Filter/         # Sorting and page size controls
│   ├── Loading/        # Loading spinner component
│   ├── PageSelect/     # Pagination component
│   ├── PageSizeSelect/ # Page size selection component
│   ├── SortSelect/     # Sorting control component
│   ├── TagCard/        # Individual tag card component
│   └── Tags/           # Tag-related components
├── stories/            # Storybook stories for components
├── App.tsx             # Main application component
├── store.ts            # Zustand store for state management
├── index.tsx           # Application entry point
├── setupTests.ts       # Test setup file
├── index.css           # Global styles
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/tags-overflow.git
    cd tags-overflow
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Start the Development Server

Run the application locally:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Run Storybook

View and test UI components in isolation:
```bash
npm run storybook
```
Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Run Tests

Execute unit tests:
```bash
npm test
```

## Components

- **Tags**: Displays a grid of tags with their respective post counts.
- **TagCard**: A card component to display individual tag details.
- **Filter**: Contains sorting and page size selection controls.
- **PageSelect**: Pagination component to navigate through pages.
- **Loading**: Displays a loading spinner.
- **Fail**: Displays an error message when data fetching fails.

## State Management

The app uses Zustand for state management. The `useFilterStore` manages:

- `isAscending`: Sorting order.
- `pageSize`: Number of tags per page.
- `page`: Current page number.

## API Integration

The app fetches tags from the Stack Overflow API using Axios. The API endpoint is dynamically constructed based on the current state (page, page size, sorting order).

## Storybook

Storybook is used to document and test UI components. Stories are located in the `src/stories/` directory.

## Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the app for production.
- `npm test`: Run tests.
- `npm run storybook`: Start Storybook.
- `npm run build-storybook`: Build Storybook for production.

## Dependencies

- React
- Material-UI
- Zustand
- Axios
- Storybook

### Linting

The project uses ESLint with Storybook recommendations.

## License

This project is licensed under the MIT License.