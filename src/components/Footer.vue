<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h2 class="footer-title">Game Opinion</h2>
          <p class="footer-description">Tu fuente confiable para reseñas y valoraciones de juegos. Descubre, opina y comparte tu pasión por los videojuegos.</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-subtitle">Síguenos</h3>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><facebook-icon :size="24" /></a>
            <a href="#" aria-label="Twitter"><twitter-icon :size="24" /></a>
            <a href="#" aria-label="Instagram"><instagram-icon :size="24" /></a>
            <a href="#" aria-label="Youtube"><youtube-icon :size="24" /></a>
          </div>
        </div>
        <div class="footer-section">
          <h3 class="footer-subtitle">Boletín</h3>
          <p class="newsletter-description">Suscríbete para recibir las últimas noticias y reseñas.</p>
          <form @submit.prevent="submitNewsletter" class="newsletter-form">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Tu email" 
              required
            />
            <button type="submit">
              <send-icon :size="18" />
              <span class="sr-only">Suscribirse</span>
            </button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Game Opinion. Todos los derechos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  import { FacebookIcon, InstagramIcon, SendIcon, TwitterIcon, YoutubeIcon } from 'lucide-vue';
  
  export default {
    name: 'Footer-comp',
    components: {
      FacebookIcon,
      TwitterIcon,
      InstagramIcon,
      YoutubeIcon,
      SendIcon
    },
    data() {
      return {
        email: ''
      }
    },
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    },
    methods: {
      submitNewsletter() {
        // Aquí iría la lógica para manejar la suscripción al boletín
        console.log('Email suscrito:', this.email)
        this.email = '' // Limpiar el campo después de enviar
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #1a202c;
    color: #a0aec0;
    padding: 2rem 1rem;
  }
  
  .footer-content {
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    
  }
  
  .footer-section {
    margin-bottom: 1.5rem;
  }
  
  .footer-title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .footer-subtitle {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: semibold;
    margin-bottom: 1rem;
  }
  
  .footer-description,
  .newsletter-description {
    font-size: 0.9rem;
    line-height: 1.5;
    justify-items: left;
  }
  
  .footer-links {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.5rem;
  }
  
  .footer-links a {
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #ffffff;
  }
  
  .social-icons {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
  }
  
  .social-icons a {
    color: #a0aec0;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #ffffff;
  }
  
  .newsletter-form {
    display: flex;
    margin-top: 1rem;
  }
  
  .newsletter-form input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #4a5568;
    background-color: #2d3748;
    color: #ffffff;
    border-radius: 4px 0 0 4px;
  }
  
  .newsletter-form button {
    padding: 0.5rem 1rem;
    background-color: #4a5568;
    color: #ffffff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-form button:hover {
    background-color: #718096;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
    padding-top: 1rem;
    border-top: 1px solid #4a5568;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
  </style>