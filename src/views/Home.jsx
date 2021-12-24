import HomeImage from '../assets/images/HomeImage.jpg';
import NewsletterInput from '../components/ui/NewsletterInput/NewsletterInput';
import '../css/Hero.css'

export default function Home() {
    return (
        <main>
            {/* Hero Image with hover effect */}
            <div className="heroContainer">
                <img className="heroImage"
                    src={HomeImage}
                    alt="Welcome" />
                <div className="heroEffect">
                    <p className="heroText">
                        Bienvenido a BirdyView
                    </p>
                </div>
            </div>

            {/* Text Box */}
            <p className="heroTextBox">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nesciunt pariatur consectetur in? Corrupti nihil ullam molestiae 
                facilis sequi cumque illum et culpa ut rem quisquam ab odio, magni suscipit recusandae quae officiis nulla necessitatibus! Quia, 
                officia quos harum beatae ex culpa provident expedita facere, veniam quaerat sunt ipsa nisi. Consequuntur incidunt dolorum provident 
                ullam voluptatibus excepturi, amet distinctio fuga obcaecati. 
            </p>

            <NewsletterInput/>
        </main>
    )
}
