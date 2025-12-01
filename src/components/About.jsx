import React from 'react'
import WaterEffects from './WaterEffects'

const About = ({onNavigate}) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden water-wave-bg water-surface">
      <WaterEffects variant="waves" />
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for reliable water solutions
            </p> */}
            {/* SEO added */}

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Borewell Contractors With 18+ Years Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted Borewell Contractor in Vadodara, Gujarat for Reliable Water Solutions
          </p>

          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Amidhara Borewell?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With years of experience in the industry, Amidhara Borewell has established itself as a 
                leading provider of borewell services. We combine technical expertise with a commitment 
                to quality and customer satisfaction.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of skilled professionals uses state-of-the-art equipment and follows industry 
                best practices to deliver reliable and efficient water solutions for both residential 
                and commercial clients.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Experienced and certified professionals</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Modern equipment and technology</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Transparent pricing with no hidden costs</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">24/7 customer support and emergency services</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">100% customer satisfaction guaranted</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg water-shimmer water-reflection relative z-10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">1300+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">18+</div>
                  <div className="text-gray-700">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div> <br /><br />
        <div className='text-center'>
          <p className="text-gray-700 mt-6">
          Learn more about our <a href="#services" className="text-blue-600 font-semibold underline">Services</a> 
          &nbsp;or view completed borewell projects in our&nbsp;
          <a onClick={() => onNavigate("gallery")} className="text-blue-600 font-semibold underline cursor-pointer">
              Gallery
            </a>
          &nbsp;For pricing and consultation, <a href="#contact" className="text-blue-600 font-semibold underline">Contact Us Today</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About