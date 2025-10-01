import React from 'react'

const About = () => {
  return (
    <section className="min-h-[80vh]">
      <h1 className="font-amatic text-8xl text-center mt-16">About</h1>
      <div className="grid place-content-center mt-8">
        <div>
          <img
            src="/img/about.png"
            alt="About"
            className="w-[95vw] h-[75vh] object-cover object-center rounded-2xl"
          />
        </div>
        <p className="mt-12 text-justify text-lg text-gray-800  leading-relaxed">
          Founded in 2002 in Himmatnagar, Sabarkantha, Dinkar Seeds Limited has been at the forefront of agricultural innovation in Gujarat. What started as a small seed distribution business has grown into a trusted name serving thousands of farmers across the state. For over two decades, we've been committed to providing high-quality, certified seeds that deliver superior yield and disease resistance. Our research-driven approach ensures our products meet the unique challenges of Gujarat's diverse agricultural landscape.
        </p>
      </div>
    </section>
  )
}

export default About
