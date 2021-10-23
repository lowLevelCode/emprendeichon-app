import './home.css';

const Home = (props: any) => {
    return (
        <div>        
            <header 
            style={{ display: "flex", justifyContent: "space-between" }}
            className="container-fluid py-4 shadow mb-5 rounded">
                <div>icono y/o nombre de la pagina</div>
                <div style={{ display: "flex", gap:12 }}>
                    <a>Become a Seller</a>
                    <a>Sign In</a>
                    <a>Join</a>
                </div>
            </header>

            <div className="container-fluid">
                <div className="banner-own">
                    <h1 style={{ color: "white" }}>Find the perfect freelance services for your business</h1>
                    {/* <Search placeholder="input search text" style={{ width: "50%" }} onSearch={() => { alert("busca") }} enterButton /> */}
                    <input type="text" />
                    <br />
                    <br />
                </div>
            </div>

            <br />
            <div>
                <h1>Popular professional services</h1>

                <div className="row p-5" >
                    {
                        [1, 2, 3, 4].map((d, i) => (
                            <div>card</div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;