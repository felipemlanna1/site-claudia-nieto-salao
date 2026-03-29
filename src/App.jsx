import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Scissors, Star,
  InstagramLogo, ArrowRight, CalendarBlank, Sparkle,
  Heart, Drop, FlowerLotus, User
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548991848790?text=Ola Claudia! Gostaria de agendar um horario.'
const PHONE = '(48) 99184-8790'
const ADDRESS = 'R. Dr. Joao de Oliveira, 172 — Canasvieiras, Florianopolis/SC'
const INSTAGRAM = 'https://instagram.com/claudianietosalao'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Servicos', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand">
          <img src="./images/logo-oficial.png" alt="Claudia Nieto" />
          <span className="navbar-brand-text">Claudia Nieto</span>
        </a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            <WhatsappLogo size={14} weight="fill" /> Agendar
          </a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}>
          <WhatsappLogo size={18} weight="fill" /> Agendar Horario
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-salon.jpg" alt="Salao Claudia Nieto" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />Salao de Beleza em Canasvieiras</div></Reveal>
        <Reveal delay={0.1}><h1>Sua beleza merece<br />cuidado de <em>verdade</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Ha mais de 10 anos cuidando da beleza das mulheres de Canasvieiras. Cortes, coloracao, escova, manicure e pedicure com atendimento personalizado.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Agendar Horario</a>
            <a href="#servicos" className="btn-outline">Ver Servicos<ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Canasvieiras — Floripa</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.7 — 50 avaliacoes</span></div>
            <div className="hero-info-item"><Clock size={16} weight="duotone" /><span>Ter-Sab 10h as 20h</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/coloracao.jpg" alt="Coloracao profissional" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Sobre Claudia</div><h2 className="section-title">Mais de uma decada<br />de <em>dedicacao</em></h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">Claudia Nieto e uma profissional com mais de 10 anos de experiencia em beleza feminina. Especialista em cortes, coloracao e tratamentos capilares, ela conquistou uma clientela fiel em Canasvieiras pela qualidade do atendimento e pelo carinho com cada cliente.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Reconhecida como a melhor cabeleireira de Canasvieiras por suas clientes, Claudia une tecnica apurada com atencao aos desejos de cada mulher. O salao e um espaco acolhedor onde voce se sente em casa.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><CalendarBlank size={18} weight="duotone" />Agendar Visita</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const servicos = [
    { title: 'Corte Feminino', desc: 'Cortes modernos e classicos que valorizam seu tipo de rosto e personalidade. Consultoria de estilo incluida.', image: './images/escova.jpg' },
    { title: 'Coloracao & Mechas', desc: 'Coloracao profissional, mechas, luzes e balayage. Produtos de qualidade para um resultado vibrante e duradouro.', image: './images/coloracao.jpg' },
    { title: 'Escova & Penteados', desc: 'Escova modelada, escova progressiva e penteados para eventos. Fios alinhados e com movimento natural.', image: './images/hero-salon.jpg' },
    { title: 'Manicure & Pedicure', desc: 'Cuidado completo das unhas com esmaltacao impecavel. Atencao aos detalhes para maos e pes perfeitos.', image: './images/manicure.jpg' },
    { title: 'Design de Sobrancelha', desc: 'Modelagem precisa que harmoniza com seu rosto. Sobrancelhas definidas que emolduram o olhar.', image: './images/escova.jpg' },
    { title: 'Depilacao', desc: 'Depilacao com cera de qualidade. Rapidez, higiene e conforto para pele macia e lisinha.', image: './images/hero-salon.jpg' },
  ]
  return (
    <section className="cardapio" id="servicos">
      <div className="container">
        <Reveal><div className="section-label">Servicos</div><h2 className="section-title">Cuidados completos para<br />sua <em>beleza</em></h2></Reveal>
        <div className="cardapio-grid">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={s.image} alt={s.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{s.title}</div>
                  <p className="cardapio-card-desc">{s.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const features = [
    { icon: Heart, title: 'Atendimento com Carinho', desc: 'Cada cliente e unica. Ouvimos seus desejos e entregamos com dedicacao e atencao aos detalhes.' },
    { icon: Sparkle, title: 'Produtos de Qualidade', desc: 'Trabalhamos com as melhores marcas do mercado para garantir resultados bonitos e duradouros.' },
    { icon: User, title: 'Profissional Experiente', desc: 'Mais de 10 anos de experiencia. Claudia e reconhecida como a melhor cabeleireira de Canasvieiras.' },
    { icon: FlowerLotus, title: 'Ambiente Acolhedor', desc: 'Salao confortavel e higienizado. Um espaco onde voce relaxa e cuida da sua beleza com tranquilidade.' },
  ]
  return (
    <section className="experience" id="diferenciais">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Diferenciais</div><h2 className="section-title">Por que nossas clientes<br /><em>voltam sempre</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/escova.jpg" alt="Resultados profissionais" />
              <div className="experience-image-badge"><span className="number">10+</span><span className="label">Anos de experiencia</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-salon.jpg', alt: 'Salao de beleza' },
    { src: './images/coloracao.jpg', alt: 'Coloracao' },
    { src: './images/escova.jpg', alt: 'Escova' },
    { src: './images/manicure.jpg', alt: 'Manicure' },
    { src: './images/hero-salon.jpg', alt: 'Ambiente' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Galeria</div><h2 className="section-title">Nosso <em>espaco</em></h2></Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => <Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function Treatments() {
  return (
    <section className="experience" id="tratamentos" style={{ background: 'var(--plum)' }}>
      <div className="container">
        <div className="experience-grid">
          <Reveal delay={0.1}>
            <div className="experience-image">
              <img src="./images/manicure.jpg" alt="Tratamentos" />
              <div className="experience-image-badge" style={{ background: 'var(--rose)' }}>
                <span className="number">100%</span><span className="label">Recomendacao</span>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><div className="section-label">Tratamentos</div><h2 className="section-title">Cuidados especiais para<br />cabelos <em>saudaveis</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Alem dos servicos tradicionais, oferecemos tratamentos capilares para nutricao, hidratacao e reconstrucao dos fios. Cada tratamento e personalizado de acordo com as necessidades do seu cabelo.</p></Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                {['Hidratacao', 'Nutricao', 'Reconstrucao', 'Progressiva', 'Botox Capilar'].map(v => (
                  <span key={v} style={{ padding: '8px 16px', border: '1px solid rgba(219, 112, 147, 0.25)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 500 }}>{v}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><WhatsappLogo size={18} weight="fill" />Agendar Tratamento</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Sou muito bem atendido pela proprietaria Claudia. Excelente profissional. Cuida do meu cabelo ha anos e nunca me decepcionou. O salao e agradavel e acolhedor.', author: 'L. G. P.', rating: 5 },
    { text: 'A Claudia e a melhor cabeleireira de Canasvieiras. Excelente atendimento, preco justo e resultado sempre perfeito. Super recomendo para quem busca qualidade.', author: 'C. V.', rating: 5 },
    { text: 'Super profissional. Amo o seu trabalho. Cuida dos meus cabelos ha 6 anos e cada vez fica melhor. Confianca total na Claudia.', author: 'P. R.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliacoes</div><h2 className="section-title">O que dizem nossas <em>clientes</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.7</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight={i < 4 ? 'fill' : 'duotone'} />)}</div>
                <div className="reviews-count">50 avaliacoes no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div>
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">{r.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const days = [
    { day: 'Segunda-feira', hours: '15h as 20h', note: '' },
    { day: 'Terca a Sabado', hours: '10h as 20h', note: 'Agende com antecedencia' },
    { day: 'Domingo', hours: 'Fechado', note: '' },
  ]
  return (
    <section className="experience" id="horarios" style={{ background: 'var(--plum-light)' }}>
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Horarios</div><h2 className="section-title">Agende seu <em>horario</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Atendemos com hora marcada para garantir que voce tenha toda a atencao e cuidado que merece. Agende pelo WhatsApp ou telefone.</p></Reveal>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {days.map((d, i) => (
                <Reveal key={d.day} delay={0.1 + i * 0.08}>
                  <div className="schedule-row">
                    <div><div className="schedule-day">{d.day}</div>{d.note && <div className="schedule-note">{d.note}</div>}</div>
                    <div className="schedule-hours">{d.hours}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.5}>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Agendar Agora</a>
                <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" />{PHONE}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/coloracao.jpg" alt="Servicos do salao" />
              <div className="experience-image-badge"><span className="number">50</span><span className="label">Clientes satisfeitas</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Pronta para se sentir<br /><em>incrivel</em>?</h2>
          <p>Agende seu horario e venha cuidar da sua beleza com a Claudia. Atendimento personalizado em Canasvieiras.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Agendar pelo WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" />Ligar: {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereco', text: ADDRESS },
    { icon: Clock, title: 'Horario', text: 'Seg 15h-20h | Ter-Sab 10h-20h' },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: Scissors, title: 'Agendamento', text: 'WhatsApp ou telefone' },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localizacao</div><h2 className="section-title">Venha nos <em>visitar</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item">
                  <div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div>
                  <div><h4>{item.title}</h4><p>{item.text}</p></div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" />Agendar Horario</a></Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.0!2d-48.4620!3d-27.4260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzMzLjYiUyA0OMKwMjcnNDMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Localizacao Claudia Nieto" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-text">Claudia Nieto</div>
            <p className="footer-brand-desc">Salao de beleza em Canasvieiras, Florianopolis. Cortes, coloracao, escova, manicure e pedicure com atendimento personalizado.</p>
          </div>
          <div>
            <div className="footer-title">Navegacao</div>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre</a></li><li><a href="#servicos">Servicos</a></li>
              <li><a href="#galeria">Galeria</a></li><li><a href="#avaliacoes">Avaliacoes</a></li><li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Contato</div>
            <ul className="footer-links">
              <li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a>{ADDRESS}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Claudia Nieto Salao de Beleza</span>
          <div className="footer-social">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a>
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Services /><Differentials /><Gallery /><Treatments /><Reviews /><Schedule /><CtaSection /><Contact />
      </main>
      <Footer /><WhatsAppFloat />
    </>
  )
}
