'use client';

export default function Home() {
  const runRecommender = async () => {
    try {
      const response = await fetch("/api/run-recommender");
      const data = await response.json();
      alert(data.output); // Show the output from Python
    } catch (err) {
      console.error("Error calling recommender:", err);
      alert("Something went wrong. Check console for details.");
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:cursor-pointer hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          onClick={runRecommender}
        >
          Call Recommender
        </button>
      </main>
    </div>
  );
}
