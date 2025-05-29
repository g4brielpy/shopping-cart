import TitleCustom from "../components/TitleCustom";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Home</TitleCustom>
      <section
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div className="w-full max-w-xs bg-dark-surface rounded-2xl shadow-md p-4">
          <div className="w-full h-40 bg-border-muted rounded-lg ">
            <img
              src={"src/assets/images/produto.jpg"}
              alt={"produto.name"}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          <h2 className="text-lg font-semibold text-text-primary mt-2">
            produto
          </h2>
          <p className="text-sm text-text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-primary-btn font-bold text-base mt-2">R$ 89,90</p>
        </div>
      </section>
    </main>
  );
}
