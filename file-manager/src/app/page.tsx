import { Form } from "@/app/_components/form";
import { List } from "@/app/_components/list";

const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="min-h-screen bg-background bg-marble-texture font-sans text-foreground">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-primary/20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-primary">Florentine Files</h1>
          <p className="text-sm text-foreground/70 mt-1">Your personal space for elegant uploads.</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <Form />
        <div className="my-12">
          <List />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 mt-8 border-t border-primary/10">
          <div className="max-w-6xl mx-auto text-center">
              <p className="text-sm text-foreground/60">
                Crafted with care in a digital Tuscany.
              </p>
          </div>
      </footer>
    </div>
  );
};

export { dynamic };
export default Page;