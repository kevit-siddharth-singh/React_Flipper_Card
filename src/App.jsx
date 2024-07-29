import Cards from "./components/Cards";

const App = () => {
  const quotes = [
    "Spread love everywhere you go.",
    "if you love someone give them infinite space.",
    "The happiest people are the givers not the takers.",
    "The journey of a thousand miles begins with one step.",
  ];

  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col gap-5 sm:gap-10 ">
        <p
          className="
    pt-5 font-semibold text-4xl text-center sm:text-6xl "
        >
          Flip Card Effect
        </p>

        <p className="text-center">Click on any card to do side-flip</p>
        <div
          className="cards grid gap-[2rem] grid-cols-1 pt-5 pb-5 sm:grid-cols-2 sm:gap-4 md:gap-4 md:grid-cols-3 lg:gap-10 lg:grid-cols-4  ">
          {quotes.map((quote, i) => {
            return <Cards quote={quote} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
