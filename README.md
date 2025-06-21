# Personal Portfolio - Brijesh

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Modern UI with advanced animations and effects
- ✅ Fully responsive design for all device sizes
- ✅ Dark/Light theme mode
- ✅ Portfolio project showcase
- ✅ Resume section
- ✅ Contact form with maintenance mode
- ✅ Clean and optimized codebase

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Getting Started

### Prerequisites

- Node.js (v16.8.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Deployment

### Deploying to Vercel

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your site will be deployed to a production URL

### Deploying to GitHub Pages

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

2. Add the following to your `package.json` file:

```json
"scripts": {
  "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
}
```

3. Run the deploy command:

```bash
npm run deploy
# or
yarn deploy
```

## Customization

- Update your personal information in the relevant components
- Modify styles in the Tailwind configuration
- Add your projects in the projects directory
- Customize the theme colors in the theme provider

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/) 