"use client";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#111499]">
            Principal’s Message
          </h2>
          <div className="mt-3 h-1 w-24 bg-[#111499] mx-auto rounded-full"></div>
        </div>

        {/* Card Wrapper */}
        <div className="bg-white shadow-xl rounded-2xl p-10 md:p-14 border border-gray-100 grid md:grid-cols-2 gap-12 items-center hover:shadow-2xl transition-shadow duration-300">

          {/* Principal Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/durbar-principal.jpg" // update your image path
                alt="Principal Teresa Shah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Message Text */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Teresa Shah (PhD Scholar)
            </h3>
            <p className="text-[#111499] font-medium text-sm">Principal</p>

            <p className="text-gray-700 leading-relaxed">
              Dear Students, Parents, Teachers and Well-wishers,
            </p>

            <p className="text-gray-700 leading-relaxed">
              Warm greetings from our school family. Our institution is committed 
              to providing quality education that shapes responsible, confident, 
              and compassionate individuals. We believe that every child carries 
              unique potential, and it is our responsibility to guide them with 
              care, discipline, and meaningful learning experiences.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With the joint efforts of students, parents and teachers, we aim to 
              create an environment where curiosity grows, values strengthen, and 
              dreams turn into achievements.
            </p>

            <div className="border-l-4 border-[#111499] pl-4 italic text-gray-800">
              “Let us continue working together for excellence, integrity, and the 
              bright future of our students.”
            </div>

            <p className="text-gray-700 leading-relaxed">
              Thank you for your continuous trust and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
