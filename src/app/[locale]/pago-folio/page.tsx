"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import { useCart } from "@/context/CartContext";
import { ArrowRight } from "lucide-react";

export default function PagoFolioPage() {
  const router = useRouter();
  const locale = useLocale();
  const { addToCart } = useCart();
  
  // Estados
  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [folio, setFolio] = useState("");
  const [fecha, setFecha] = useState("");

  const btnConfirmar = useT("Añadir al carrito");

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, ''); 
    setMonto(val);
  };

  const isFormValid = 
    parseFloat(monto) > 0 && 
    nombre.trim().length > 0 && 
    email.includes("@") && 
    folio.trim().length > 0 && 
    fecha !== "";

  const handleConfirmarReserva = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const montoNumerico = parseFloat(monto);

    const customExperienceItem = {
      packageId: 0,
      experience: {
        id: 0,
        title: "Aventura Personalizada",
        slug: "aventura-personalizada",
        description: `Pago de folio: ${folio}`,
        location: "Múltiples Destinos",
        images: ["https://images.unsplash.com/photo-1682687982562-47422046ca96?q=80&w=1200&auto=format&fit=crop"],
        category_id: 0
      },
      levelName: "Personalizado",
      date: fecha,
      people: 1, 
      pricePerPerson: montoNumerico,
      totalPrice: montoNumerico
    };

    addToCart(customExperienceItem);
    sessionStorage.setItem("explonix_temp_contact", JSON.stringify({ nombre, email, folio }));
    router.push(`/${locale}/checkout`);
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  // Nuevos estilos Explonix: Minimalismo radical, líneas gruesas inferiores, sin bordes laterales
  const inputClass = "border-0 border-b-2 border-zinc-200 focus-visible:border-zinc-900 bg-transparent p-0 text-base font-medium text-zinc-900 focus-visible:ring-0 rounded-none shadow-none h-10 transition-colors w-full";
  const labelClass = "text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Usamos pt-20 para evadir el header, pero el contenido se expande a las orillas */}
      <main className="flex-1 flex flex-col lg:flex-row pt-20">
        
        {/* COLUMNA IZQUIERDA: Visual Edge-to-Edge */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-[calc(100vh-5rem)] bg-black">
          <img 
            src="https://images.unsplash.com/photo-1682687982562-47422046ca96?q=80&w=1200&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
            alt="Explonix Experiencia" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 lg:p-16 text-white z-10 w-full">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-white"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]"><T>Servicios Privados</T></span>
             </div>
             <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4 leading-[1.1]">
               <T>Aventura</T> <br/>
               <span className="text-white/80 font-light"><T>Personalizada</T></span>
             </h1>
             <p className="text-sm lg:text-base text-white/70 max-w-md font-medium leading-relaxed mt-6">
               <T>Procesamiento seguro para itinerarios a la medida y servicios exclusivos de Explonix. Tu viaje inicia aquí.</T>
             </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario Vanguardista Centrado */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="w-full max-w-lg">
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-3"><T>Reserva tu lugar</T></h2>
              <p className="text-zinc-500 font-medium text-sm"><T>Ingresa los detalles de tu folio para proceder al pago seguro y confirmar tu itinerario.</T></p>
            </div>

            <form onSubmit={handleConfirmarReserva} className="space-y-10">
              
              {/* Monto - Estilo tipográfico grande */}
              <div className="space-y-1">
                <label className={labelClass}><T>Monto Acordado (MXN + IVA)</T></label>
                <div className="flex items-end border-b-2 border-zinc-200 focus-within:border-zinc-900 transition-colors pb-1">
                  <span className="text-xl font-bold text-zinc-300 mr-2 mb-1">$</span>
                  <Input 
                    type="text" 
                    value={monto}
                    onChange={handleMontoChange}
                    placeholder="0.00"
                    required
                    className="border-0 bg-transparent p-0 text-3xl font-black text-zinc-900 focus-visible:ring-0 rounded-none shadow-none h-auto placeholder:text-zinc-200 tracking-tighter"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}><T>Nombre</T></label>
                  <Input 
                    type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    placeholder="Nombre completo"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}><T>Correo</T></label>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="correo@ejemplo.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}><T>Folio</T></label>
                  <Input 
                    type="text" 
                    value={folio}
                    onChange={(e) => setFolio(e.target.value.toUpperCase())}
                    required
                    placeholder="Ej: EXP-001"
                    className={`${inputClass} uppercase font-bold tracking-wider`}
                  />
                </div>

                <div>
                  <label className={labelClass}><T>Fecha</T></label>
                  <Input 
                    type="date" 
                    value={fecha}
                    min={minDateStr}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className="w-full h-14 bg-zinc-900 text-white hover:bg-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">
                    {btnConfirmar}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
            </form>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}