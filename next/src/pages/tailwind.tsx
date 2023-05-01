import ProfilForm from 'components/Layouts/Forms/DefaultProfilForm';
import {NextPage} from 'next';
import React, {useEffect, useState} from 'react';
import animations2 from '../../tailwind/hover-names';
import animations from '../../tailwind/vivify-names';

const Stylesheet: NextPage = () => {
  useEffect(() => {
    if (process.browser) {
      const doc = document.querySelector('footer');
      if (doc)
        doc.innerHTML += `<style>#__next {display: inherit !important;}</style>`;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  const [magic, setMagic] = useState('pulsate');
  const [vivify, setVivify] = useState('puffin');
  return (
    <>
      {/**
       * NAV
       * */}
      <section className="fixed z-50 flex-wrap justify-center w-full uppercase top-none left-none spaced p-2xl bg-gray-darkest">
        <a className="text-white " href="#colors">
          colors
        </a>
        <a className="text-white" href="#text">
          text
        </a>
        <a className="text-white" href="#padding">
          padding
        </a>
        <a className="text-white" href="#margin">
          margin
        </a>
        <a className="text-white" href="#elements">
          elements
        </a>
        <a className="text-white" href="#shadow">
          shadows
        </a>
        <a className="text-white" href="#colors">
          colors
        </a>
        <a className="text-white" href="#containers">
          Container
        </a>
        <a className="text-white" href="#animations">
          Animations
        </a>
      </section>

      {/**
       * COLORS
       * */}
      <section
        id="colors"
        className="grid max-w-full grid-cols-2 overflow-hidden pt-7xl bg-gray-lightest gap-lg p-4xl sm:p-xl sm:pt-7xl sm:mt-6xl sm:grid-cols-1 xl:grid-cols-3"
      >
        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">Primary</p>
          <div className="grid grid-cols-5">
            <div className=" bg-primary-lightest p-xl py-4xl"></div>
            <div className=" bg-primary-light p-xl py-4xl"></div>
            <div className=" bg-primary p-xl py-4xl"></div>
            <div className=" bg-primary-dark p-xl py-4xl"></div>
            <div className=" bg-primary-darkest p-xl py-4xl"></div>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">Secondary</p>
          <div className="grid grid-cols-5 ">
            <div className=" bg-secondary-lightest p-xl py-4xl"></div>
            <div className=" bg-secondary-light p-xl py-4xl"></div>
            <div className=" bg-secondary p-xl py-4xl"></div>
            <div className=" bg-secondary-dark p-xl py-4xl"></div>
            <div className=" bg-secondary-darkest p-xl py-4xl"></div>
          </div>
        </div>

        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">Gray</p>
          <div className="grid grid-cols-5 ">
            <div className="bg-gray-lightest p-xl py-4xl"></div>
            <div className="bg-gray-light p-xl py-4xl"></div>
            <div className="bg-gray p-xl py-4xl"></div>
            <div className=" bg-gray-dark p-xl py-4xl"></div>
            <div className=" bg-gray-darkest p-xl py-4xl"></div>
          </div>
        </div>

        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">Green</p>
          <div className="grid grid-cols-5">
            <div className=" bg-green-lightest p-xl py-4xl"></div>
            <div className="bg-green-light p-xl py-4xl"></div>
            <div className=" bg-green p-xl py-4xl"></div>
            <div className=" bg-green-dark p-xl py-4xl"></div>
            <div className="o bg-green-darkest p-xl py-4xl"></div>
          </div>
        </div>

        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">Red</p>
          <div className="grid grid-cols-5">
            <div className=" bg-red-lightest p-xl py-4xl"></div>
            <div className="bg-red-light p-xl py-4xl"></div>
            <div className="bg-red p-xl py-4xl"></div>
            <div className=" bg-red-dark p-xl py-4xl"></div>
            <div className=" bg-red-darkest p-xl py-4xl"></div>
          </div>
        </div>

        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">blue</p>
          <div className="grid grid-cols-5">
            <div className=" bg-blue-lightest p-xl py-4xl"></div>
            <div className=" bg-blue-light p-xl py-4xl"></div>
            <div className=" bg-blue p-xl py-4xl"></div>
            <div className="bg-blue-dark p-xl py-4xl"></div>
            <div className=" bg-blue-darkest p-xl py-4xl"></div>
          </div>
        </div>

        <div className="border-2 shadow-xl bg-gray-light p-sm">
          <p className="text-center uppercase">yellow</p>
          <div className="grid grid-cols-5 ">
            <div className=" bg-yellow-lightest p-xl py-4xl"></div>
            <div className="bg-yellow-light p-xl py-4xl"></div>
            <div className="bg-yellow p-xl py-4xl"></div>
            <div className="bg-yellow-dark p-xl py-4xl"></div>
            <div className="bg-yellow-darkest p-xl py-4xl"></div>
          </div>
        </div>
      </section>

      {/**
       * TEXT
       * */}
      <section
        id="text"
        className="grid items-center justify-center grid-cols-2 sm:p-xl sm:grid-cols-1 md:gap-3xl md:py-3xl md:px-3xl sm:gap-lg gap-4xl p-4xl bg-secondary-light"
      >
        <article>
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h2>Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
        </article>
        <article>
          <h3>Garlic bread with cheese: What the science tells us</h3>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h4>Garlic bread with cheese: What the science tells us</h4>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h5>Garlic bread with cheese: What the science tells us</h5>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </section>

      {/**
       * PADDING
       * */}
      <section
        id="padding"
        className="flex flex-wrap items-center justify-center sm:p-xl bg-primary-light p-4xl"
      >
        <div className="self-center border-2 shadow-xl bg-primary p-none m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-none</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-xs m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-xs</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-sm m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-sm</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-md m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-md</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-lg m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-lg</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-2xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-2xl</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-3xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-3xl</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-4xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-4xl</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-5xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-5xl</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-6xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-6xl</p>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-7xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">p-7xl</p>
          </div>
        </div>
      </section>

      {/**
       * MARGIN
       * */}
      <section
        id="margin"
        className="flex flex-wrap items-center justify-center sm:p-xl bg-secondary-light p-4xl"
      >
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-none bg-gray-lightest">
            <p className="text-center p-md m-none">m-none</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-xs bg-gray-lightest">
            <p className="text-center p-md m-none">m-xs</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-sm bg-gray-lightest">
            <p className="text-center p-md m-none">m-sm</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-md bg-gray-lightest">
            <p className="text-center p-md m-none">m-md</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-lg bg-gray-lightest">
            <p className="text-center p-md m-none">m-lg</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-xl min-h-100 bg-gray-lightest">
            <p className="text-center p-md m-none">m-xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-2xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-2xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-3xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-3xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-4xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-4xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-5xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-5xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-6xl</p>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-7xl bg-gray-lightest">
            <p className="text-center p-md m-none">m-7xl</p>
          </div>
        </div>
      </section>

      {/**
       * ELEMENTS
       * */}
      <section
        id="elements"
        className="items-center grid-cols-2 sm:p-xl bg-primary-light md:grid lg:grid xl:grid gap-x-lg gap-y-6xl p-4xl"
      >
        <section className="">
          <ProfilForm user={{userName: 'Ich'}} updateState={() => 'a'} />
        </section>

        <section>
          <div className="spaced min-h-75 m-sm">
            <div className="text-white bg-secondary-dark w-50">
              <p className="text-center p-xl">spaced</p>
            </div>
            <div className="text-white bg-secondary-darkest w-50">
              <p className="text-center p-xl">spaced</p>
            </div>
          </div>
          <div className="spaced-lg min-h-75 m-sm">
            <div className="text-white bg-secondary-dark w-50">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
            <div className="text-white bg-secondary-darkest w-50">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
          </div>
        </section>
        <section className="modal demo">
          <h4 className="uppercase pl-none ml-none p-md">Headline</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque saepe repudiandae magnam sequi laboriosam sint explicabo
            voluptas autem ipsa!
          </p>
        </section>
        <section className="p-4xl">
          <div className="items-center justify-center spaced">
            <button className="btn-primray">Button</button>
            <button className="btn-secondary">Button</button>
            <button className="btn-success">Button</button>
          </div>
        </section>
      </section>

      {/**
       * SHADOWS
       * */}
      <section
        id="shadow"
        className="flex flex-wrap items-center justify-center sm:p-xl bg-secondary-light min-h-75 p-4xl"
      >
        <div className="border-2 shadow-sm bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-sm</p>
        </div>
        <div className="border-2 shadow bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow</p>
        </div>
        <div className="border-2 shadow-md bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-md</p>
        </div>
        <div className="border-2 shadow-lg bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-lg</p>
        </div>
        <div className="border-2 shadow-xl bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-xl</p>
        </div>
        <div className="border-2 shadow-2xl bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-2xl</p>
        </div>
        <div className="border-2 shadow-inner bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-inner</p>
        </div>
        <div className="border-2 shadow-primary bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-primary</p>
        </div>
        <div className="border-2 shadow-secondary bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-secondary</p>
        </div>
        <div className="border-2 shadow-container bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-container</p>
        </div>
        <div className="border-2 shadow-none bg-secondary p-4xl m-7xl">
          <p className="text-center text-white p-md m-6xl">shadow-none</p>
        </div>
      </section>

      {/**
       * CONTAINERS
       * */}
      <section
        id="containers"
        className="items-center bg-gray-lightest min-h-75 py-4xl"
      >
        <div className="flex items-center justify-center pb-2xl container-md my-6xl bg-primary min-h-50">
          <article>
            <h2>container-md</h2>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf htmlFor Halloween.
            </p>
          </article>
        </div>

        <div className="flex items-center justify-center pb-2xl container-lg my-6xl bg-primary min-h-50">
          <article>
            <h2>container-lg</h2>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf htmlFor Halloween.
            </p>
          </article>
        </div>

        <div className="flex items-center justify-center pb-2xl container-xl my-6xl bg-primary min-h-50">
          <article>
            <h2>container-xl</h2>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf htmlFor Halloween.
            </p>
          </article>
        </div>

        <div className="flex items-center justify-center pb-2xl container-full my-6xl bg-primary min-h-50">
          <article>
            <h2>container-full</h2>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf htmlFor Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>
      </section>

      {/**
       * ANIMATIONS
       * */}
      <section
        id="animations"
        className="items-center sm:p-xl bg-primary-light gap-lg p-4xl"
      >
        <div className="flex flex-row flex-wrap">
          <div
            style={{height: '150px', width: '150px', flex: '1 1 150px'}}
            className={`border-2 border-primary flex-1 m-xs`}
          >
            <div
              style={{width: '100%', height: '100%'}}
              className={`animate-${vivify} bg-primary text-white text-center flex-1 p-lg`}
            >
              {vivify}
            </div>
          </div>
          {Object.keys(animations).map(animation => (
            <div key={animation} className={`flex-1 m-xs p-lg`}>
              <button
                onClick={() => setVivify(animation)}
                className="text-center text-white bg-primary"
              >
                {animation}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/**
       * ANIMATIONS
       * */}
      <section className="items-center sm:p-xl bg-primary-light gap-lg p-4xl">
        <div className="flex flex-row flex-wrap">
          <div
            style={{height: '150px', width: '150px', flex: '1 1 150px'}}
            className={`border-2 border-primary flex-1 m-xs`}
          >
            <div
              style={{width: '100%', height: '100%'}}
              className={`animate-${magic} bg-primary text-white text-center flex-1 p-lg`}
            >
              {magic}
            </div>
          </div>
          {Object.keys(animations2).map(animation => (
            <div key={animation} className={`flex-1 m-xs p-lg`}>
              <button
                onClick={() => setMagic(animation)}
                className="text-center text-white bg-primary"
              >
                {animation}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer></footer>
    </>
  );
};

export default Stylesheet;
