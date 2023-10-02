import { ImYoutube2 } from "react-icons/im";

export default function Home() {
  const slogan = ["Record in your time", "Publish on the go"];

  return (
    <main className="flex flex-col justify-start items-center p-24 gap-20">
      <section
        id="hero"
        className="flex flex-col justify-start items-center my-28"
      >
        <h1 className="flex flex-col items-center justify-center text-7xl tracking-tighter">
          <span className="bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent pb-4">
            {slogan[0]}
          </span>
          <span className="bg-gradient-to-b from-red-500 to-prime bg-clip-text text-transparent pb-4">
            {slogan[1]}
          </span>
        </h1>
        <p className="text-center bg-gradient-to-br from-slate-400 to-slate-200 bg-clip-text text-transparent text-xl w-2/3">
          <em className="text-prime">Galaxync</em> is an open-source online
          collaboration workspace for{" "}
          {/* <strong className="text-white font-medium"> YouTube </strong> */}
          <ImYoutube2 className="text-white inline text-6xl" />
          <em className="text-prime"> creators </em> and their team of{" "}
          <em className="text-prime">editors.</em>
        </p>
      </section>
      {Array(20)
        .fill(0)
        .map((n, i) => (
          <p className="text-justify" key={i}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            rerum aliquam voluptatem quo reiciendis temporibus expedita
            distinctio. Ratione vel incidunt fugit cupiditate. Repudiandae
            molestiae doloremque dolorum labore iusto, soluta et sapiente
            facilis ea illo pariatur aut, praesentium dolore? Ut magni natus
            sunt molestiae harum esse sed alias asperiores ad velit, unde optio
            doloremque dolorem animi eum repellendus tempora numquam! Voluptates
            aut libero animi placeat minima rerum ab sint assumenda cumque totam
            fuga at repellat iusto rem quos omnis qui nihil magnam explicabo
            ipsum perspiciatis officia, adipisci natus impedit? Velit eius
            doloribus nisi vel placeat dicta quos, iusto maiores consectetur
            doloremque dolorum quam qui excepturi delectus eveniet ab sequi
            dolores fugit ipsam, eum porro. Sed facere esse, quasi nesciunt ex
            molestias impedit excepturi earum distinctio maxime tempore, nostrum
            perspiciatis. Animi dolorem, vero ratione numquam asperiores quas
            facere facilis tempora similique obcaecati voluptatum culpa, a
            beatae atque vel fugiat illum minus perspiciatis sapiente
            consequuntur, accusamus repellat suscipit aspernatur. Officia omnis
            minus expedita, ducimus vitae alias explicabo veniam ullam numquam
            nihil cum ex? Pariatur, qui! Quibusdam suscipit commodi sit facere
            eveniet debitis, minima officiis maxime eum et ea molestias, odit
            porro a quisquam! Est minima, iste voluptatibus ipsa impedit odit?
            Velit, animi reiciendis!
          </p>
        ))}
    </main>
  );
}
