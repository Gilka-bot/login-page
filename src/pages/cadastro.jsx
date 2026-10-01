import { Link } from "react-router-dom";

export default function Cadastro(){
    return (
        <div className="w-full h-scree">
            <header className="w-full h-[100px] flex items-cente px-[40px] justify-between border-b border-gray-300">
                <img src="/Logo_Netflix.svg" width={"200px"} alt="" />
                <Link to="/cadastro" style={
                    {
                        color: "black", 
                        fontWeight: "bold"
                    }
                }>Entrar</Link>
            </header>
        </div>
    )
}
