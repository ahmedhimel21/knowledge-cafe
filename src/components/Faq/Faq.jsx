import React from "react";

const Faq = () => {
  return (
    <>
      <div className="mt-5 border-1 border-[#6047EC] bg-violet-100 text-center p-3 rounded-lg font-semibold text-xl text-[#6047EC] w-full shadow-lg">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-5">
        <article className="shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-semibold mb-2 border-t-2 border-slate-200">
            Props vs state
          </h1>
          <p className="text-xl mt-2">
            <span className="text-lg font-medium">Props:</span> When we want to
            send any properties from parent component to child component then we
            send properties as props, and child component received data as
            props. Props are immutable, properties of props can't be changed.{" "}
            <br />
            <span className="text-lg font-medium">useState:</span> If there is a
            property that can be changed, then the value of that property is
            kept in useState() and if something changes the state, then the
            previous value of the property is updated with the updated value of
            the state. useState are mutable.
          </p>
        </article>
        <article className="shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-semibold mb-2 border-t-2 border-slate-200">
            How does useState work?
          </h1>
          <p className="text-xl mt-2">
            If the properties of component is kept in the setter function of
            useState() and if the properties of the component changes then the
            component changed the state.
          </p>
        </article>
        <article className="shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-semibold mb-2 border-t-2 border-slate-200">
            Purpose of useEffect other than fetching data.
          </h1>
          <p className="text-xl mt-2">
            A side effect can be perform on a component withe the help of
            UseEffect(). UseEffect can be use for further work by retrieving the
            data. The second parameter of useEffect (dependency) is optional. If
            dependency is used, only useEffect() will work if dependency is
            found with this value.
          </p>
        </article>
        <article className="shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-semibold mb-2 border-t-2 border-slate-200">
            How Does React work?
          </h1>
          <p className="text-xl mt-2">
            With the help of react JS, we can divided the user interface into
            multiple isolated reusable parts called components.React components
            work similarly to JavaScript functions. if we want to send any
            properties from parent component to child component then we send
            properties as props. useState() hooks are used to change something
            value with an updated value that can be changeable. useEffect() hook
            are used to perform side effect on a component. Curly brace {} are
            used to dynamically render any data. React JS is used above
            methodology to work.
          </p>
        </article>
      </div>
    </>
  );
};

export default Faq;
