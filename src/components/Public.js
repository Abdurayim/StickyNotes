import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">BrB Repairs</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Near Tashkent Sea, BrB Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    BrB. Repairs<br />
                    149 AvZ Street<br />
                    OQ. district, POST N: 12345<br />
                    <a href="tel:+15555555555">(+90) 813-12-99</a>
                </address>
                <br />
                <p>Owner: Abdurayim Hamidjon</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public