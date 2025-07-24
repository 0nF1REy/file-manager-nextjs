import { Form } from "@/app/_components/form";
import { List } from "@/app/_components/list";
import { Header } from "@/app/_components/layout/header";
import { Footer } from "@/app/_components/layout/footer";
import { ScrollToTop } from "@/app/_components/ui/scroll-to-top";

const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <Form />
        <div className="my-12">
          <List />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export { dynamic };
export default Page;
