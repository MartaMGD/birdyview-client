import Hero from '../components/Hero/Hero';
import HomeInfoBox from '../components/HomeInfoBox/HomeInfoBox';
import NewsletterInput from '../components/NewsletterInput/NewsletterInput';

export default function Home() {
    return (
        <main className="container">
            <Hero/>
            {/* Text Box */}
            <p className="heroTextBox">
                Descubre la diversa fauna ornitológica de Andalucía a través de nuestro buscador personalizado, 
                entérate de las últimas noticias sobre observación de aves y entérate de los últimos avistamientos realizados por otros aficionados.
            </p>
            <HomeInfoBox/>
            <NewsletterInput/>
        </main>
    )
}
