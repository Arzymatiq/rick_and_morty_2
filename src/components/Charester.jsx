import React, { useEffect, useState } from "react";
import "../index.css";

const Charester = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => setUsers(data.results));
    }, []);
    return (
        <div className="charester_block">
            <h1>MAIN CHARESTER</h1>
            <div className="charesterBlock" style={{ display: "flex" }}>
                {users.map((item) => (
                    <div style={{ margin: "20px" }}>
                        <img src={item.image} alt="" width="100px" />
                        <h5>{item.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Charester;

// :
// created
// :
// "2017-11-04T18:48:46.250Z"
// episode
// :
// (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender
// :
// "Male"
// id
// :
// 1
// image
// :
// "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location
// :
// name
// :
// "Citadel of Ricks"
// url
// :
// "https://rickandmortyapi.com/api/location/3"
// [[Prototype]]
// :
// Object
// name
// :
// "Rick Sanchez"
// origin
// :
// name
// :
// "Earth (C-137)"
// url
// :
// "https://rickandmortyapi.com/api/location/1"
// [[Prototype]]
// :
// Object
// species
// :
// "Human"
// status
// :
// "Alive"
// type
// :
// ""
// url
// :
// "https://rickandmortyapi.com/api/character/1"
