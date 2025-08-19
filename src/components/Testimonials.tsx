import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "SaaS Startup",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
      content: "The content strategy completely transformed our social media presence. Our engagement rates went through the roof, and we're finally attracting the right customers.",
      rating: 5,
      metric: "450% engagement increase"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "E-commerce Brand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The guerilla marketing campaign was genius. We got more brand awareness in 3 months than we had in the previous 2 years. The ROI speaks for itself.",
      rating: 5,
      metric: "$340K additional revenue"
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "Digital Agency",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "The psychological insights in the content strategy were spot-on. Our conversion rates improved dramatically, and client satisfaction is at an all-time high.",
      rating: 5,
      metric: "78% conversion increase"
    },
    {
      name: "David Park",
      role: "VP of Sales",
      company: "B2B Software",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The LinkedIn content series generated more qualified leads than our entire previous quarter. The psychological triggers they used are incredibly effective.",
      rating: 5,
      metric: "200% more qualified leads"
    },
    {
      name: "Lisa Thompson",
      role: "CMO",
      company: "HealthTech",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Working with them was like having a marketing psychology expert on our team. The insights and strategies they provided were game-changing for our campaigns.",
      rating: 5,
      metric: "35% shorter sales cycle"
    },
    {
      name: "James Mitchell",
      role: "Creative Director",
      company: "Fashion Brand",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "The script writing for our video campaigns was exceptional. Every piece of content felt authentic yet persuasive. Our video engagement rates tripled.",
      rating: 5,
      metric: "3x video engagement"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about the results we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>

              <div className="px-3 py-2 bg-primary/10 rounded-lg text-center">
                <div className="text-sm font-semibold text-primary">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;