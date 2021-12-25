import Hero from '../components/Hero/Hero';
import HomeInfoBox from '../components/HomeInfoBox/HomeInfoBox';
import NewsletterInput from '../components/NewsletterInput/NewsletterInput';
import '../css/Hero.css'

export default function Home() {
    return (
        <main className="container">
            <Hero/>
            {/* Text Box */}
            <p className="heroTextBox">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nesciunt pariatur consectetur in? Corrupti nihil ullam molestiae 
                facilis sequi cumque illum et culpa ut rem quisquam ab odio, magni suscipit recusandae quae officiis nulla necessitatibus! Quia, 
                officia quos harum beatae ex culpa provident expedita facere, veniam quaerat sunt ipsa nisi. Consequuntur incidunt dolorum provident 
                ullam voluptatibus excepturi, amet distinctio fuga obcaecati. 
            </p>
            <HomeInfoBox/>
            <NewsletterInput/>
        </main>
    )
}
