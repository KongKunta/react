function Layout({ children}) {
    return (
        <div className="container">
            <div className="row row-col-3 mt-5">
                <div className="col-3 align-self-left"></div>
                <div className="col-6 align-self-center">{children}</div>
            </div>
        </div>
    )
}

export default Layout;
