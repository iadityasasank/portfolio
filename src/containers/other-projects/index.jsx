import React, { useState } from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const portfolioData = [
    {
        id: 2,
        name: "SOC Toolkit",
        image: "SOC Toolkit",
        link: "",
        description:
            "Tools and scripts for SOC analysts and engineers: log parsing and analysis, threat intelligence integrations, incident response automation, network traffic analysis, basic malware utilities, automated reporting, and shared helpers. Layout: log_analysis/, threat_intel/, incident_response/, network_monitoring/, malware_analysis/, reporting/, utils/.",
    },
    {
        id: 2,
        name: "Ecommerce Website",
        image: "Ecommerce Website",
        link: "",
        description:
            "E-commerce website built using Cursor and Claude Code.",
    },
];

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Design'
    }
]

const Otherprojects=()=>{

    const [filteredvalue,setFilteredValue]= useState(1);
    const [hoveredValue,setHoveredValue]= useState(null);

    function handleFilter(currentId){
        setFilteredValue(currentId);
    }

    function handleHover(index){
        setHoveredValue(index);
    }

    const filteredItems = filteredvalue === 1 ? portfolioData:
    portfolioData.filter(item=>item.id === filteredvalue);

    return (
        <section id="otherprojects" className="otherprojects">
            <PageHeader
                headerText = "Other Projects"
                icon={<BsInfoCircleFill size={40}/>}
            />
            <div className="otherprojects__content">
                <ul className="otherprojects__content__filter">
                    {
                        filterData.map(item=>(
                            <li className={item.filterId == filteredvalue ? 'active': ''} key={item.filterId} onClick={()=>handleFilter(item.filterId)}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="otherprojects__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div className="otherprojects__content__cards__item"
                                 key={`cardItem${item.name.trim()}`}
                                 onMouseEnter={()=>handleHover(index)}
                                 onMouseLeave={()=>handleHover(null)}>
                                <div className="otherprojects__content__cards__item__img-wrapper">
                                    <a>
                                        <h3>{item.image}</h3>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                {item.description && (
                                                    <p style={{
                                                        fontSize: '11px',
                                                        lineHeight: 1.35,
                                                        color: '#181818',
                                                        margin: '0 8px 10px',
                                                        maxHeight: '120px',
                                                        overflow: 'auto',
                                                        textAlign: 'left',
                                                    }}>
                                                        {item.description}
                                                    </p>
                                                )}
                                                <button type="button">Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Otherprojects;
