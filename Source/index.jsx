// const { Component } = require("react");

/**
 * React avec l'outil Parcel
 * 
 * Quelques commandes utiles:
 * npm init -y "Permet d'initialiser notre projet en créant un fichier package.Json"
 * npm install react & react-dom "Pour installer les librariries react et react-dom"
 * npm install -D parcel-bundler "-D : permet d'installer une dépendence en mode dévelopement" 
 * npx : node package execute
 * npx -v :"Voir la version de l'outil NPX"
 * 
 * npx parcel public/index.html "Permet de lancer le serveur de dévelopement"
 * npx parcel build public/index.html "Permet de compresser tout les fichiers en un seul fichier executable"
 * 
 * Dans "package.json" on peut des raccourcis de commmande d'éxecution dans la clé "scripts":
 *  "start" : "permet PubliC/index.html" //Lancer le serveur => npm start
 *  "build" : "permet build PubliC/index.html" // Compresser touts les fichier => npm run build
 * 
 * 
 */
import React, {Component} from "react";
import {render} from "react-dom";
import "./style.css"
class ParcelHome extends Component{
    render(){
        return <>
        <div>
            <h1>Parcel Home: First Parcel Test with React</h1>
            <h4>Hello Univers</h4>
        </div>
        </>
}
}

render(<ParcelHome/>, document.getElementById("root"))
