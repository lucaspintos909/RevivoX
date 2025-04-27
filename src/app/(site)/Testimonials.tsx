import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "María G.",
      rating: 5,
      text: "Excelente servicio y atención. La laptop que compré funciona perfectamente y el proceso de compra fue muy sencillo. ¡Recomiendo totalmente!",
      role: "Estudiante",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Carlos R.",
      rating: 5,
      text: "Increíble la calidad de las laptops reacondicionadas. Compré una MacBook y parece nueva. El soporte post-venta es excelente.",
      role: "Desarrollador",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Laura M.",
      rating: 5,
      text: "La mejor decisión que pude tomar. La laptop que compré superó mis expectativas y el precio fue muy accesible. ¡Gracias RevivoX!",
      role: "Diseñadora",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div id="wall-of-love" className="bg-[#212121] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre las experiencias de quienes han confiado en nosotros para darle una segunda vida a su tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-800 border-none p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-[#FF8806] fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
