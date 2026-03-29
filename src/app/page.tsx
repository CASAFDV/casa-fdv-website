'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  Users, 
  Video, 
  TreeDeciduous, 
  BookOpen, 
  Trophy, 
  Heart, 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare,
  Play,
  ChevronRight,
  Star,
  Crown,
  Medal,
  Gift,
  Send,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Sparkles,
  Cross,
  Flame,
  CloudSun
} from 'lucide-react'
import Image from 'next/image'

// Secciones de la página
const secciones = [
  { id: 'inicio', nombre: 'Inicio', icon: HomeIcon },
  { id: 'sobre-fdv', nombre: 'Sobre FDV', icon: Users },
  { id: 'predicas', nombre: 'Prédicas', icon: Video },
  { id: 'ramas', nombre: 'Ramas', icon: TreeDeciduous },
  { id: 'discipulado', nombre: 'Discipulado', icon: BookOpen },
  { id: 'ranking', nombre: 'Ranking Semanal', icon: Trophy },
  { id: 'voluntariado', nombre: 'Voluntariado', icon: Heart },
  { id: 'casa-hogar', nombre: 'Casa Hogar', icon: Building2 },
  { id: 'contactanos', nombre: 'Contáctanos', icon: Phone },
]

// Información de las Ramas
const ramas = [
  {
    nombre: 'Hombría 101',
    descripcion: 'Es el primer nivel de crecimiento para los jóvenes de nuestra congregación. Aquí los varones aprenden los fundamentos de la fe cristiana desde una perspectiva masculina, desarrollando su identidad en Cristo como futuros esposos, padres y líderes.',
    actividades: ['Estudios bíblicos para jóvenes', 'Grupos de accountability', 'Retiros masculinos', 'Mentoría personalizada', 'Actividades deportivas'],
    horario: 'Viernes 8:00 PM',
    imagen: '/images/hteens.png',
    color: 'from-blue-600 to-blue-800'
  },
  {
    nombre: 'Hombría al Máximo',
    descripcion: 'Nivel avanzado para hombres que desean profundizar su relación con Dios y maximizar su potencial. Este programa desarrolla líderes masculinos íntegros que impactan su familia, trabajo y comunidad con principios bíblicos.',
    actividades: ['Liderazgo avanzado', 'Coaching de vida', 'Proyectos de servicio comunitario', 'Conferencias de liderazgo', 'Networking cristiano'],
    horario: 'Jueves 7:00 PM',
    imagen: '/images/hombria.png',
    color: 'from-blue-700 to-indigo-900'
  },
  {
    nombre: 'Women - Adultas',
    descripcion: 'Un espacio dedicado a las mujeres adultas donde encuentran comunidad, apoyo y crecimiento espiritual. Las mujeres crecen juntas en fe, compartiendo experiencias y fortaleciendo su identidad en Cristo.',
    actividades: ['Estudios bíblicos femeninos', 'Talleres de desarrollo personal', 'Eventos de belleza interior', 'Grupos de oración', 'Conferencias de mujeres'],
    horario: 'Martes 3:00 PM',
    imagen: '/images/women.png',
    color: 'from-rose-500 to-pink-700'
  },
  {
    nombre: 'Women - Teens',
    descripcion: 'Diseñado especialmente para adolescentes mujeres, este programa guía a las jóvenes en su desarrollo espiritual y personal. Abordamos temas relevantes para su etapa de vida con un enfoque bíblico y contemporáneo.',
    actividades: ['Grupos de estudio para teens', 'Actividades recreativas', 'Mentoría joven a joven', 'Talleres de autoestima', 'Retiros de jóvenes'],
    horario: 'Miércoles 4:00 PM',
    imagen: '/images/teens.png',
    color: 'from-purple-500 to-fuchsia-600'
  },
  {
    nombre: 'Kids - FDV',
    descripcion: 'Nuestro ministerio infantil donde los niños experimentan el amor de Dios de manera divertida y segura. A través de juegos, canciones y enseñanzas apropiadas para su edad, los pequeños crecen en su fe.',
    actividades: ['Ministerio Kids', 'Clases de arte y manualidades', 'Canciones y alabanza infantil', 'Títeres y obras', 'Eventos especiales para niños'],
    horario: 'Sábado 4:00 PM',
    imagen: '/images/kids.png',
    color: 'from-amber-400 to-orange-500'
  }
]

// Información de Discipulado
const discipulado = [
  {
    nombre: 'Discipulado I',
    descripcion: 'El primer paso en tu camino de crecimiento espiritual. Aquí aprenderás los fundamentos de la fe cristiana, cómo estudiar la Biblia, la importancia de la oración y cómo establecer una relación personal con Dios.',
    duracion: '12 semanas',
    requisitos: 'Haber asistido regularmente a los servicios',
    nivel: 'Principiante'
  },
  {
    nombre: 'Liderazgo',
    descripcion: 'Desarrolla tus habilidades de liderazgo cristiano. Aprende a guiar a otros con integridad, sabiduría y amor. Este nivel te prepara para servir en diferentes áreas del ministerio con excelencia.',
    duracion: '16 semanas',
    requisitos: 'Haber completado Discipulado I',
    nivel: 'Intermedio'
  },
  {
    nombre: 'ADN',
    descripcion: 'Conoce profundamente la identidad, visión y valores de CASA FDV. Este curso te sumerge en el corazón de nuestra iglesia, entendiendo nuestro propósito y cómo puedes contribuir a la misión.',
    duracion: '8 semanas',
    requisitos: 'Haber completado Liderazgo',
    nivel: 'Avanzado'
  },
  {
    nombre: 'Graduación',
    descriptor: 'Celebración de tu camino de formación. Los discípulos que han completado el proceso de formación son reconocidos oficialmente y enviados a servir con propósito y preparación.',
    duracion: '1 evento',
    requisitos: 'Haber completado ADN',
    nivel: 'Certificación'
  },
  {
    nombre: 'Pastorado',
    descripcion: 'El nivel más alto de formación para aquellos llamados al pastorado. Prepara a futuros pastores con las herramientas teológicas, pastorales y de liderazgo necesarias para guiar congregaciones.',
    duracion: '24 semanas',
    requisitos: 'Graduación y llamado pastoral confirmado',
    nivel: 'Ministerial'
  }
]

// Datos del Ranking (ejemplo)
const rankingData = [
  { posicion: 1, nombre: 'García López, María José', nota: 98, avatar: '👑' },
  { posicion: 2, nombre: 'Rodríguez Pérez, Carlos Alberto', nota: 96, avatar: '🥈' },
  { posicion: 3, nombre: 'Martínez Ruiz, Ana Lucía', nota: 94, avatar: '🥉' },
  { posicion: 4, nombre: 'Hernández Gómez, Pedro Antonio', nota: 92, avatar: '4' },
  { posicion: 5, nombre: 'López Fernández, Isabel Cristina', nota: 90, avatar: '5' },
  { posicion: 6, nombre: 'Díaz Morales, Juan Carlos', nota: 88, avatar: '6' },
  { posicion: 7, nombre: 'Moreno Vega, Laura Patricia', nota: 86, avatar: '7' },
  { posicion: 8, nombre: 'Jiménez Torres, Roberto Enrique', nota: 84, avatar: '8' },
  { posicion: 9, nombre: 'Álvarez Castillo, Carmen Elena', nota: 82, avatar: '9' },
  { posicion: 10, nombre: 'Romero Flores, Diego Alejandro', nota: 80, avatar: '10' },
  { posicion: 11, nombre: 'Sánchez Herrera, Patricia María', nota: 78, avatar: '11' },
  { posicion: 12, nombre: 'González Rivas, Miguel Ángel', nota: 76, avatar: '12' },
]

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('inicio')
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const seccionesElements = secciones.map(s => document.getElementById(s.id))
      const scrollPosition = window.scrollY + 100

      for (let i = seccionesElements.length - 1; i >= 0; i--) {
        const element = seccionesElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setSeccionActiva(secciones[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuAbierto(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    setEnviando(false)
    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' })
    alert('¡Mensaje enviado! Te contactaremos pronto.')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/images/logo-fdv.png" 
                  alt="CASA FDV Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">CASA FDV</h1>
                <p className="text-xs text-white/80">Iglesia Fuente de la Vida</p>
              </div>
            </div>

            {/* Navegación Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {secciones.map((seccion) => (
                <button
                  key={seccion.id}
                  onClick={() => scrollToSection(seccion.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    seccionActiva === seccion.id 
                      ? 'bg-white text-blue-600 shadow-lg' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {seccion.nombre}
                </button>
              ))}
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            >
              {menuAbierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-3 space-y-2">
              {secciones.map((seccion) => (
                <button
                  key={seccion.id}
                  onClick={() => scrollToSection(seccion.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    seccionActiva === seccion.id 
                      ? 'bg-white text-black' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <seccion.icon size={20} />
                  <span className="font-medium">{seccion.nombre}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Contenido principal */}
      <main className="flex-1 pt-16">
        
        {/* SECCIÓN INICIO */}
        <section id="inicio" className="min-h-screen relative overflow-hidden">
          {/* Fondo con efecto de partículas */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7f1d1d] via-[#1e3a5f] to-[#92400e] opacity-95"></div>
          <div className="absolute inset-0 bg-[url('/images/congregacion.png')] bg-cover bg-center opacity-30"></div>
          
          {/* Decoraciones */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-700 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-30 animate-float"></div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
            {/* Símbolos del Pacto */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0s' }}>
                <Flame className="w-16 h-16 text-red-500 drop-shadow-lg" />
                <span className="text-sm mt-2 font-medium">Papito Dios</span>
              </div>
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Cross className="w-16 h-16 text-blue-400 drop-shadow-lg" />
                <span className="text-sm mt-2 font-medium">Jesús</span>
              </div>
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
                <CloudSun className="w-16 h-16 text-amber-500 drop-shadow-lg" />
                <span className="text-sm mt-2 font-medium">Espíritu Santo</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              <span className="inline-block animate-pulse-slow">CASA</span>{' '}
              <span className="text-amber-300">FDV</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-white/90">Iglesia Cristiana</p>
            <p className="text-2xl md:text-3xl font-light mb-8 text-amber-200">
              «Iglesia Fuente de la Vida»
            </p>

            {/* Imagen animada de la congregación */}
            <div className="relative w-full max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
              <Image 
                src="/images/congregacion.png" 
                alt="Congregación CASA FDV" 
                width={1344} 
                height={768}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white text-lg font-medium">Una comunidad de fe, amor y esperanza</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl px-8 py-6 text-lg"
                onClick={() => scrollToSection('sobre-fdv')}
              >
                Conoce Más <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-900 border border-white/30 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contactanos')}
              >
                Únete a Nosotros
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* SECCIÓN SOBRE FDV */}
        <section id="sobre-fdv" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Sobre FDV</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Conoce nuestra historia, misión y visión como familia de fe
              </p>
            </div>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                <div className="h-2 gradient-pacto"></div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Flame className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-red-700">Nuestra Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Somos una Iglesia que llevamos a las personas a vivir en plenitud con Jesús. Para que puedan soltar su cultura y lograr que día a día puedan vivir como en el cielo y no como en la tierra, que se traduce a vivir netamente para Dios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Cross className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-700">Nuestra Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    No queremos Iglesias llenas, queremos Familias felices y para llegar a ello se levantan discípulos de cristo, entrenados para obedecer lo que el cielo está diciendo (Así como en el Cielo sea en la Tierra-Mateo 6:10)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Pastoras */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-2">Nuestras Pastoras</h3>
              <p className="text-gray-600">Liderazgo femenino guiado por Dios</p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image 
                src="/images/pastoras.png" 
                alt="Pastoras de CASA FDV" 
                width={1344} 
                height={768}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { nombre: 'Pastora Tavita Muñoz', rol: 'Pastora Principal', descripcion: 'Fundadora y líder espiritual de CASA FDV. Con más de 20 años de ministerio, ha dedicado su vida a guiar al pueblo de Dios con amor, sabiduría y pasión por las almas.' },
                { nombre: 'Pastora Abigail Muñoz', rol: 'Pastora Asociada', descripcion: 'Directora del ministerio de Alabanzas y Adoración (KIDS-FDV). Con su talento musical y corazón de adoradora, guía a la congregación en encuentros profundos con Dios.' },
                { nombre: 'Pastora Débora Muñoz', rol: 'Pastora Asociada', descripcion: 'Lidera al ministerio de Women Teens. Su corazón está enfocado en la formación de las próximas mujeres Diamante, con propósito y pasión por Cristo.' }
              ].map((pastora, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 overflow-hidden group" style={{ borderTopColor: index === 0 ? '#dc2626' : index === 1 ? '#2563eb' : '#d97706' }}>
                  <CardContent className="pt-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-12 h-12 text-gray-500" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{pastora.nombre}</h4>
                    <Badge variant="secondary" className="mb-4">{pastora.rol}</Badge>
                    <p className="text-gray-600 text-sm">{pastora.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN PRÉDICAS */}
        <section id="predicas" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-amber-400">Prédicas</span>
              </h2>
              <p className="text-gray-400 text-lg">Alimenta tu espíritu con la Palabra de Dios</p>
            </div>

            <div className="relative group cursor-pointer" onClick={() => window.open('https://youtube.com/@CasaFDV', '_blank')}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/predicaciones.png" 
                  alt="Predicaciones CASA FDV" 
                  width={1344} 
                  height={768}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Botón de play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-800 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white ml-2" />
                  </div>
                </div>

                {/* Texto inferior */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <Youtube className="w-12 h-12 text-red-500" />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Mira nuestras prédicas en YouTube</h3>
                      <p className="text-gray-300">Haz clic para visitar nuestro canal oficial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Borde brillante */}
              <div className="absolute inset-0 rounded-3xl border-4 border-red-500/50 group-hover:border-red-500 transition-colors pointer-events-none"></div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { titulo: 'Última Prédica', desc: 'El Poder de la Fe' },
                { titulo: 'Serie Actual', desc: 'Los Colores del Pacto' },
                { titulo: 'Próximo Estudio', desc: 'Génesis Capítulo 12' }
              ].map((item, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-amber-500/50 transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-amber-400 mb-2">{item.titulo}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN RAMAS */}
        <section id="ramas" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Nuestras Ramas</span>
              </h2>
              <p className="text-gray-600 text-lg">Ministerios para cada etapa de tu vida</p>
            </div>

            <div className="grid gap-8">
              {ramas.map((rama, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                  <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/3 relative">
                      <Image 
                        src={rama.imagen} 
                        alt={rama.nombre} 
                        width={400} 
                        height={400}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${rama.color} opacity-30`}></div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className={`bg-gradient-to-r ${rama.color} text-white`}>{rama.horario}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{rama.nombre}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{rama.descripcion}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {rama.actividades.map((act, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DISCIPULADO */}
        <section id="discipulado" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Discipulado</span>
              </h2>
              <p className="text-gray-600 text-lg">Tu camino de crecimiento espiritual</p>
            </div>

            <div className="relative mb-12">
              <Image 
                src="/images/discipulado.png" 
                alt="Discipulado CASA FDV" 
                width={1344} 
                height={768}
                className="w-full h-auto object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">Camino de Formación</h3>
                <p className="text-gray-200">De discípulo a líder, de líder a pastor</p>
              </div>
            </div>

            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 via-blue-700 to-amber-600 transform -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-8">
                {discipulado.map((nivel, index) => (
                  <div key={index} className={`relative md:flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <Card className={`hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}
                              style={{ 
                                background: index === 0 ? '#dc2626' : index === 1 ? '#2563eb' : index === 2 ? '#7c3aed' : index === 3 ? '#059669' : '#d97706'
                              }}>
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-xl">{nivel.nombre}</CardTitle>
                              <Badge variant="outline" className="mt-1">{nivel.nivel}</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{nivel.descripcion}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {nivel.duracion}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:flex w-8 justify-center">
                      <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg`}
                        style={{ 
                          background: index === 0 ? '#dc2626' : index === 1 ? '#2563eb' : index === 2 ? '#7c3aed' : index === 3 ? '#059669' : '#d97706'
                        }}>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN RANKING SEMANAL */}
        <section id="ranking" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-amber-400">🏆 Ranking Semanal</span>
              </h2>
              <p className="text-gray-400 text-lg">Los más destacados de nuestra congregación</p>
            </div>

            {/* Flyer estilo pelea de box */}
            <div className="relative mb-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-4 border-amber-500/50">
                {/* VS Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-9xl font-black text-white">VS</span>
                </div>

                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <Badge className="bg-amber-600 text-white text-lg px-6 py-2">⚔️ BATALLA DE LA SEMANA ⚔️</Badge>
                  </div>

                  {/* Top 2 enfrentados */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    {/* Primer lugar */}
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 animate-pulse-slow">
                          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                            <Crown className="w-16 h-16 md:w-20 md:h-20 text-amber-400" />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                          1
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-1">
                        {rankingData[0].nombre.split(',')[0]}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{rankingData[0].nombre.split(',')[1]}</p>
                      <Badge className="bg-amber-500/20 text-amber-400 text-lg px-4 py-1">
                        <Star className="w-4 h-4 mr-1" /> {rankingData[0].nota} pts
                      </Badge>
                    </div>

                    {/* VS */}
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center animate-glow">
                        <span className="text-4xl md:text-5xl font-black text-white">VS</span>
                      </div>
                    </div>

                    {/* Segundo lugar */}
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 p-1">
                          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                            <Medal className="w-14 h-14 md:w-18 md:h-18 text-gray-300" />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                          2
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-1">
                        {rankingData[1].nombre.split(',')[0]}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{rankingData[1].nombre.split(',')[1]}</p>
                      <Badge className="bg-gray-500/20 text-gray-300 text-lg px-4 py-1">
                        <Star className="w-4 h-4 mr-1" /> {rankingData[1].nota} pts
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lista del 3 al 12 */}
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-300">Clasificación General</h3>
              <div className="grid gap-3">
                {rankingData.slice(2).map((persona, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      index === 0 ? 'bg-amber-700 text-amber-200' : 
                      index === 1 ? 'bg-gray-600 text-gray-200' : 
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {index + 3}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{persona.nombre}</p>
                    </div>
                    <Badge variant="secondary" className="bg-amber-500/20 text-amber-400">
                      {persona.nota} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN VOLUNTARIADO */}
        <section id="voluntariado" className="py-20 px-4 bg-gradient-to-b from-white to-red-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Voluntariado</span>
              </h2>
              <p className="text-gray-600 text-lg">Sirviendo con amor a nuestra comunidad</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/voluntariado.png" 
                  alt="Voluntariado Servolution" 
                  width={672} 
                  height={768}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-red-800 text-white text-lg px-4 py-2">SERVOLUTION</Badge>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  <Heart className="inline w-10 h-10 text-red-500 mr-2" />
                  Servolution
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Servolution es más que un programa de voluntariado, es un movimiento de amor en acción. Cada voluntario de CASA FDV se convierte en las manos y pies de Jesús, llevando esperanza, comida, ropa y sobre todo, el mensaje de salvación a quienes más lo necesitan.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestros equipos de servicio trabajan en comunidades vulnerables, hospitales, orfanatos, y dondequiera que haya una necesidad. Creemos que servir es la mejor forma de demostrar el amor de Dios al mundo.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: Gift, label: 'Donaciones', desc: 'Ropa y alimentos' },
                    { icon: Heart, label: 'Misiones', desc: 'Comunidades remotas' },
                    { icon: Users, label: 'Apoyo Social', desc: 'Familias necesitadas' },
                    { icon: Building2, label: 'Albergues', desc: 'Personas sin hogar' }
                  ].map((item, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all border-red-200">
                      <CardContent className="p-4 text-center">
                        <item.icon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                        <h4 className="font-bold text-gray-800">{item.label}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button className="w-full md:w-auto bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg mt-6">
                  Únete como Voluntario <ChevronRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CASA HOGAR */}
        <section id="casa-hogar" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Casa Hogar</span>
              </h2>
              <p className="text-gray-600 text-lg">Más que una iglesia, una familia</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 md:order-1 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">CASA FDV</h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-amber-600">CASA FDV es más que una iglesia, es una familia que da vida.</strong> Abrimos nuestros corazones y nuestras puertas para brindar vivienda, amor y esperanza a niños, jóvenes y señoritas que carecen de recursos económicos y de un hogar digno.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestra misión es que cada persona que llega a Casa Hogar crezca en un ambiente de amor, fe en Dios, y oportunidades para un futuro mejor. No solo proveemos techo y comida, sino que formamos personas de bien con valores cristianos sólidos.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Aquí cada niño y joven encuentra una familia que los ama incondicionalmente, educación, apoyo emocional y espiritual, y sobre todo, la oportunidad de conocer el amor de Papito Dios a través de sus representantes en la tierra.
                </p>
              </div>

              <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/casa-hogar.png" 
                  alt="Casa Hogar CASA FDV" 
                  width={672} 
                  height={768}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>
              </div>
            </div>

            {/* Sección de donaciones */}
            <Card className="bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="md:flex items-center justify-between gap-8">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <Gift className="w-10 h-10" />
                      ¡Ayúdanos a Dar Vida!
                    </h3>
                    <p className="text-white/90 text-lg max-w-xl">
                      Tu donación hace posible que sigamos transformando vidas. Cada aporte nos ayuda a proporcionar alimento, educación, vivienda y esperanza a quienes más lo necesitan.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl">
                      Donar Ahora
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-amber-600 hover:bg-white/20 px-8 py-6 text-lg">
                      Más Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { valor: '50+', label: 'Niños y Jóvenes' },
                { valor: '15', label: 'Años de Servicio' },
                { valor: '100%', label: 'Amor Incondicional' },
                { valor: '∞', label: 'Esperanza Eterna' }
              ].map((stat, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-amber-600 mb-2">{stat.valor}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTANOS */}
        <section id="contactanos" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-pacto">Contáctanos</span>
              </h2>
              <p className="text-gray-600 text-lg">Estamos aquí para ti</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="space-y-8">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Teléfono</p>
                          <p className="text-lg font-medium text-gray-800">+51 977 435 983</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Correo Electrónico</p>
                          <p className="text-lg font-medium text-gray-800">casa.fdv@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Dirección</p>
                          <p className="text-lg font-medium text-gray-800">Calle Chinchaysuyo #810, El Porvenir-Trujillo</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Horarios de Servicio</p>
                          <p className="text-lg font-medium text-gray-800">Domingos 10:00 AM y 3:00 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Redes sociales */}
                    <div className="mt-8 pt-6 border-t">
                      <p className="text-sm text-gray-500 mb-4">Síguenos en redes sociales</p>
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-blue-300 hover:bg-blue-50">
                          <Facebook className="w-5 h-5 text-blue-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-pink-300 hover:bg-pink-50">
                          <Instagram className="w-5 h-5 text-pink-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-red-300 hover:bg-red-50">
                          <Youtube className="w-5 h-5 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulario de contacto */}
              <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Envíanos un Mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos pronto</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Nombre</label>
                      <Input 
                        type="text" 
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Correo Electrónico</label>
                      <Input 
                        type="email" 
                        placeholder="tu@correo.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({...formData, correo: e.target.value})}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Asunto</label>
                      <Input 
                        type="text" 
                        placeholder="¿Sobre qué quieres hablar?"
                        value={formData.asunto}
                        onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Mensaje</label>
                      <Textarea 
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                        required
                        className="border-gray-300 focus:border-blue-500 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg"
                      disabled={enviando}
                    >
                      {enviando ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          Enviar Mensaje <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo-fdv.png" 
                  alt="CASA FDV Logo" 
                  width={60} 
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">CASA FDV</h3>
                  <p className="text-gray-400">Iglesia Fuente de la Vida</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Una iglesia que transforma vidas con el amor de Dios, representado en los colores del Pacto: 
                Rojo (Papito Dios), Azul (Jesús) y Dorado (Espíritu Santo).
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                {['Inicio', 'Sobre FDV', 'Prédicas', 'Ramas', 'Contacto'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ministerios</h4>
              <ul className="space-y-2 text-gray-400">
                {['Hombría 101', 'Women', 'Kids FDV', 'Discipulado', 'Servolution'].map((min) => (
                  <li key={min} className="hover:text-white transition-colors cursor-pointer">
                    {min}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CASA FDV - Iglesia Cristiana. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">Hecho con ❤️ para la gloria de Dios</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
