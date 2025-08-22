import { useEffect, useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  Users,
  Target,
  Award,
  Star,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5591999999999"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos da DoctorFit Umarizal";

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-doctorfit.png" 
                alt="DoctorFit Belém" 
                className="h-12 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="hover:text-yellow-400 transition-colors">Início</a>
              <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre Nós</a>
              <a href="#modalidades" className="hover:text-yellow-400 transition-colors">Modalidades</a>
              <a href="#estrutura" className="hover:text-yellow-400 transition-colors">Estrutura</a>
              <a href="#planos" className="hover:text-yellow-400 transition-colors">Planos</a>
              <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
            </nav>

            <button
              onClick={() => openWhatsApp()}
              className="hidden md:block bg-custom-green hover:bg-custom-green-dark text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-custom-green/30"
            >
              Matricule-se no WhatsApp
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#inicio" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
                <a href="#sobre" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
                <a href="#modalidades" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Modalidades</a>
                <a href="#estrutura" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Estrutura</a>
                <a href="#planos" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Planos</a>
                <a href="#contato" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
                <button
                  onClick={() => {
                    openWhatsApp();
                    setIsMenuOpen(false);
                  }}
                  className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full"
                >
                  Matricule-se no WhatsApp
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Sua Melhor Versão na
            <span className="text-custom-green block">DoctorFit Umarizal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Treine com os melhores profissionais em Belém do Pará
          </p>
          <button
            onClick={() => openWhatsApp("Olá! Quero agendar um treino experimental na DoctorFit Umarizal")}
            className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-custom-green/40 animate-bounce-subtle"
          >
            Fale Agora no WhatsApp
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-custom-green">DoctorFit Belém</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Mais que uma academia, somos um estilo de vida dedicado à transformação pessoal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-custom-green">Nossa História</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A DoctorFit Umarizal nasceu com o propósito de revolucionar o fitness na capital paraense. 
                Com equipamentos de última geração e profissionais altamente qualificados, oferecemos 
                uma experiência única de treinamento.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa missão é transformar vidas através do movimento, promovendo saúde, bem-estar 
                e autoestima para todos os nossos alunos.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipe DoctorFit" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-custom-green/20 hover:border-custom-green/40 transition-all duration-300 shadow-lg">
              <Target className="w-16 h-16 text-custom-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-custom-green">Saúde</h3>
              <p className="text-gray-300">
                Promovemos o bem-estar físico e mental através de treinos personalizados e orientação profissional.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-custom-green/20 hover:border-custom-green/40 transition-all duration-300 shadow-lg">
              <Award className="w-16 h-16 text-custom-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-custom-green">Disciplina</h3>
              <p className="text-gray-300">
                Cultivamos hábitos saudáveis e consistência para alcançar objetivos de longo prazo.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-custom-green/20 hover:border-custom-green/40 transition-all duration-300 shadow-lg">
              <Users className="w-16 h-16 text-custom-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-custom-green">Resultados</h3>
              <p className="text-gray-300">
                Nosso foco está em entregar resultados concretos e duradouros para cada aluno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalidades" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="text-custom-green">Modalidades</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diversas opções de treino para todos os perfis e objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Musculação",
                description: "Equipamentos de última geração para hipertrofia e fortalecimento muscular",
                image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Cross Training",
                description: "Treinos funcionais intensos para condicionamento físico completo",
                image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Funcional",
                description: "Exercícios que melhoram a funcionalidade do corpo no dia a dia",
                image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Lutas",
                description: "Boxe, Muay Thai e outras artes marciais com instrutores especializados",
                image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Dança",
                description: "Zumba, ritmos e dança fitness para queimar calorias se divertindo",
                image: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Personal Trainer",
                description: "Acompanhamento individual com profissionais qualificados",
                image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((modality, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={modality.image} 
                    alt={modality.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-custom-green">{modality.title}</h3>
                  <p className="text-gray-400 mb-4">{modality.description}</p>
                  <button
                    onClick={() => openWhatsApp(`Olá! Gostaria de saber mais sobre ${modality.title} na DoctorFit Umarizal`)}
                    className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="estrutura" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="text-custom-green">Estrutura</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ambiente moderno, equipamentos de última geração e espaços pensados para seu conforto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Área de Musculação",
                image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Studio de Funcional",
                image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Área Cardio",
                image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Vestiários",
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Área de Lutas",
                image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Recepção",
                image: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-custom-green/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita para conhecer a estrutura da DoctorFit Umarizal")}
              className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-custom-green/40"
            >
              Agende uma Visita
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-custom-green">Planos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Escolha o plano ideal para começar sua transformação hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Plano Mensal",
                price: "R$ 89",
                period: "/mês",
                features: [
                  "Acesso completo à academia",
                  "Todas as modalidades inclusas",
                  "Avaliação física",
                  "Suporte dos instrutores",
                  "Flexibilidade total"
                ],
                highlighted: false
              },
              {
                name: "Plano Trimestral",
                price: "R$ 69",
                period: "/mês",
                originalPrice: "R$ 89",
                features: [
                  "Acesso completo à academia",
                  "Todas as modalidades inclusas",
                  "Avaliação física mensal",
                  "Suporte dos instrutores",
                  "Acompanhamento nutricional básico",
                  "3 meses de compromisso"
                ],
                highlighted: true,
                badge: "Mais Popular"
              },
              {
                name: "Plano Anual",
                price: "R$ 59",
                period: "/mês",
                originalPrice: "R$ 89",
                features: [
                  "Acesso completo à academia",
                  "Todas as modalidades inclusas",
                  "Avaliação física mensal",
                  "Suporte dos instrutores",
                  "Acompanhamento nutricional completo",
                  "2 sessões de personal trainer",
                  "12 meses de compromisso"
                ],
                highlighted: false,
                badge: "Melhor Custo-Benefício"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                plan.highlighted 
                  ? 'border-custom-green bg-gradient-to-b from-custom-green/10 to-gray-900 shadow-2xl shadow-custom-green/20' 
                  : 'border-gray-700 bg-gray-800 hover:border-custom-green/50'
              }`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-custom-green text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-custom-green">{plan.name}</h3>
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-gray-500 text-lg line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-custom-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsApp(`Olá! Tenho interesse no ${plan.name} da DoctorFit Umarizal. Gostaria de mais informações!`)}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-custom-green hover:bg-custom-green-dark text-gray-900 shadow-lg hover:shadow-custom-green/30'
                      : 'bg-gray-700 hover:bg-custom-green text-white hover:text-gray-900'
                  }`}
                >
                  Matricule-se pelo WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
             O que nossos <span className="text-custom-green">alunos dizem</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Histórias reais de transformação na DoctorFit Umarizal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "32 anos",
                result: "Perdeu 15kg em 6 meses",
                text: "A DoctorFit mudou minha vida! Os professores são incríveis e me ajudaram a alcançar resultados que nunca imaginei. Ambiente motivador e equipamentos excelentes.",
                rating: 5
              },
              {
                name: "João Santos",
                age: "28 anos", 
                result: "Ganhou 8kg de massa muscular",
                text: "Melhor academia de Belém! Estrutura top, profissionais qualificados e preço justo. Recomendo para quem quer resultados de verdade.",
                rating: 5
              },
              {
                name: "Ana Costa",
                age: "25 anos",
                result: "Melhorou condicionamento físico",
                text: "Adoro treinar na DoctorFit! As aulas de funcional são sensacionais e me sinto cada dia mais forte e confiante. Equipe nota 10!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-custom-green/20 hover:border-custom-green/40 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-custom-green fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-bold text-custom-green">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.age}</p>
                  <p className="text-custom-green text-sm font-semibold mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openWhatsApp("Olá! Vi os depoimentos dos alunos e gostaria de começar minha transformação na DoctorFit Umarizal!")}
              className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-custom-green/40"
            >
              Comece sua Transformação
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="text-custom-green">Localização</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Encontre-nos no coração de Belém do Pará
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-custom-green/20">
                <h3 className="text-2xl font-bold mb-6 text-custom-green">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-custom-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Endereço</h4>
                      <p className="text-gray-400">
                        Av. Presidente Vargas, 1000 - Centro<br />
                        Belém - PA, 66017-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-custom-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                      <p className="text-gray-400">(91) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-custom-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Horário de Funcionamento</h4>
                      <div className="text-gray-400 space-y-1">
                        <p>Segunda a Sexta: 05h00 às 23h00</p>
                        <p>Sábado: 06h00 às 20h00</p>
                        <p>Domingo: 08h00 às 18h00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-custom-green hover:bg-custom-green-dark rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 transform hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-custom-green hover:bg-custom-green-dark rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 transform hover:scale-110">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp("Olá! Gostaria de agendar um treino experimental na DoctorFit Umarizal")}
                  className="w-full mt-6 bg-custom-green hover:bg-custom-green-dark text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-custom-green/30"
                >
                  Agende um Treino Experimental
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819739120636!2d-48.50394638524628!3d-1.4557833986214626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c3cd5c5a5ab%3A0x4b5e4c7b8d2a1c3f!2sAv.%20Pres.%20Vargas%2C%201000%20-%20Campina%2C%20Bel%C3%A9m%20-%20PA%2C%2066017-000!5e0!3m2!1spt-BR!2sbr!4v1642783456789!5m2!1spt-BR!2sbr"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo-doctorfit.png" 
                  alt="DoctorFit Umarizal" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Transformando vidas através do movimento e do bem-estar em Belém do Pará.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-custom-green hover:bg-custom-green-dark rounded-full flex items-center justify-center text-gray-900 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-custom-green hover:bg-custom-green-dark rounded-full flex items-center justify-center text-gray-900 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-custom-green transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-custom-green transition-colors">Sobre Nós</a></li>
                <li><a href="#modalidades" className="hover:text-custom-green transition-colors">Modalidades</a></li>
                <li><a href="#planos" className="hover:text-custom-green transition-colors">Planos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Modalidades</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#modalidades" className="hover:text-custom-green transition-colors">Musculação</a></li>
                <li><a href="#modalidades" className="hover:text-custom-green transition-colors">Cross Training</a></li>
                <li><a href="#modalidades" className="hover:text-custom-green transition-colors">Funcional</a></li>
                <li><a href="#modalidades" className="hover:text-custom-green transition-colors">Personal Trainer</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-custom-green" />
                  <span>(91) 99999-9999</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-custom-green mt-1 flex-shrink-0" />
                  <span className="text-sm">Av. Presidente Vargas, 1000<br />Centro - Belém - PA</span>
                </div>
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-custom-green hover:bg-custom-green-dark text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 DoctorFit Umarizal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 w-16 h-16 bg-custom-green hover:bg-custom-green-dark rounded-full flex items-center justify-center text-gray-900 shadow-2xl hover:shadow-custom-green/50 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      >
        <Phone className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;