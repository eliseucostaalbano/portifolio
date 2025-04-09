import React from "react";
import { CgGames } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";

const ServicesData = [
  {
    nome: "Desenvolvimento Games",
    descrição: "Usando meus Conhecimentos Em Unity e C# crio jogos 2D e 3D com a Game engine Da Unity.",
    icone: <CgGames className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    nome: "Criação de Sites",
    descrição: "Usando Meus conhecimentos em HTML, CSS ,JS e React Crio Sites Dinamicos E responsivos.",
    icone: <FaComputer className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    nome: "Desenvolvimento Web",
    descrição: "Crio Varios Tipos de Projetos para Web que vão de um site simples há jogos em 2d Usando Todos Meus Conhecimentos em HTML, CSS e JS.",
    icone: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
   
  {
    nome: "Banco de Dados",
    descrição: "Crio Banco De dados usando meu conhecimentos em BackEnd e outras ferramentas como PostMan MongoDB e SQL.",
    icone: <FaServer className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];

const CaixaServiços = () => {
  return(
    <div  className="h-full mt-10 text-white">
    <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({nome ,descrição ,icone ,bgColor}, index)=>(
            <div key={index} className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
                <div className="py-3 space-y-3">
                    {icone}
                    <h1>{nome}</h1>
                    <p className="text-sm">{descrição}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
};

export default CaixaServiços;
