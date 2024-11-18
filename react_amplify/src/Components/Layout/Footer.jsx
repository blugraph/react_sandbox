
function Footer() {
    return (
      
            <footer className="footer-admin mt-auto footer-light">
                <div className="container-xl px-4">
                    <div className="row">
                        <div className="col-md-6 small"></div>
                        <div className="col-md-6 text-md-end small">
                        Copyright &copy;{(new Date().getFullYear())} <a href="http://blugraph.com/"> blugraph.com</a> . All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
    )
}
export default Footer