import monitorImage from "../assets/image-computer.png";
const Snippets = () => {
  return (
    <section className="snippets py-16 px-8">
      <header className="snippets flow-content--m text-center mb-8">
        <h2 className="title snippets__title text-4xl font-bold">
          Keep track of your snippets
        </h2>
        <p className="snippets__description  description max-w-[850px] mx-auto text-center">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          IOS apps will help you organize everything.
        </p>
      </header>
      <div className="snippets__wrapper grid md:grid-cols-2 gap-8 items-center">
        <div className="img-wrapper">
          <img className="width-full" src={monitorImage} alt="" />
        </div>
        <div className="text-content-wrapper flow-content--xl text-center md:text-left">
          <div className="flow-content--m">
            <h3 className="title">Quick Search</h3>
            <p className="description max-w-[450px] mx-auto md:mx-0">
              Easily search your snippet by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flow-content--m">
            <h3 className="title">Icloud Sync</h3>
            <p className="description max-w-[450px] mx-auto md:mx-0">Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className="flow-content--m">
            <h3 className="title">Complete History</h3>
            <p className="description max-w-[450px] mx-auto md:mx-0">Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snippets;
