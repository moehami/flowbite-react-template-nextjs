import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
          <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
      <DarkThemeToggle />
    </main>
  );
}
