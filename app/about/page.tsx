import { ModeToggle } from "../../components/ui/theme-toggle";

export default function Page() {
  return (
    <div className="container mx-auto">
      <ModeToggle />
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-100"></div>
        <div className="h-32 rounded-lg bg-gray-100"></div>
      </main>
    </div>
  );
}
