export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "राम प्रसाद शर्मा",
      location: "उत्तर प्रदेश",
      text: "लक्ष्मी का feed से मेरी गायों का दूध production 30% बढ़ गया है। बहुत अच्छी quality है।",
      english: "My cows' milk production increased by 30% with Lakshmi Ka feed. Excellent quality!",
      rating: 5,
      image: "🧑‍🌾"
    },
    {
      name: "सुनीता देवी",
      location: "पंजाब",
      text: "मुर्गियों के लिए इससे बेहतर feed नहीं मिला। अंडे का production और size दोनों बेहतर हुए।",
      english: "Haven't found better feed for chickens. Both egg production and size improved.",
      rating: 5,
      image: "👩‍🌾"
    },
    {
      name: "विकास पटेल",
      location: "गुजरात",
      text: "25 सालों से खेती कर रहा हूं, लेकिन इतना अच्छा result पहली बार देखा है।",
      english: "Been farming for 25 years, but seeing such good results for the first time.",
      rating: 5,
      image: "👨‍🌾"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-xl text-gray-600">
            हमारे किसानों की राय - Customer Testimonials
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-orange-600 font-medium">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              <p className="text-sm text-gray-500">
                {testimonial.english}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
