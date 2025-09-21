import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cut our due diligence time by 80%.",
      author: "Sarah Chen",
      role: "Managing Partner",
      company: "Venture Capital Partners",
      rating: 5,
      avatar: "SC"
    },
    {
      quote: "Found risks we would have missed manually.",
      author: "Michael Rodriguez",
      role: "Investment Director",
      company: "Growth Equity Fund",
      rating: 5,
      avatar: "MR"
    },
    {
      quote: "The benchmarking feature completely changed how we evaluate startups.",
      author: "Lisa Zhang",
      role: "Principal",
      company: "Tech Investors LLC",
      rating: 5,
      avatar: "LZ"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ai-surface/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Investors
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our users say about transforming their investment process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-ai-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ai-warning text-ai-warning" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ai-primary to-ai-secondary flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;