This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Homework 

Build a todo list with Next.js.

## Instructions

1. **Setup the Project**:
   - Ensure you have Node.js installed.
   - Run `npm install` to install dependencies.
   - Start the development server with `npm run dev`.

2. **Todo List Implementation**:
   - The todo list is implemented in `src/app/components/TodoList.tsx`.
   - It includes the following features:
     - Display a list of tasks.
     - Add new tasks using the input field and the "Ajouter" button.
     - Delete tasks using the "Supprimer" button next to each task.

3. **Key Components**:
   - The `todos` state array stores the list of tasks.
   - The `handleAdd` function adds a new task to the list and clears the input field.
   - The `handleDelete` function removes a task from the list based on its index.

4. **Accessibility**:
   - The component includes ARIA attributes for better accessibility, such as `role="region"`, `aria-label`, and `role="list"`.

5. **Testing**:
   - Test the application to ensure that adding and deleting tasks work as expected.

6. **Deployment**:
   - Once satisfied with the implementation, build the project using `npm run build` and deploy it to your preferred hosting service.

Happy coding!
