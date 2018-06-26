import React from 'react'

const Otsikko = (props) =>
    <h2> {props.kurssi} </h2>         


const Osa = (props) =>
    <p> {props.name} {props.number} </p>

const Sisalto = ({osat}) => {
    var content = []
    for (var osa in osat){
        content.push(<Osa key = {osat[osa].id} name = {osat[osa].nimi} number = {osat[osa].tehtavia} />)
    }

    return (
        <div>
            {content}
        </div>
    )
}

const Yhteensa = ({osat}) => {
    var initial = 0
    var total = osat.reduce((accumulator, osa) => accumulator + osa.tehtavia, initial)
    
    return (
        <p>Yhteensä {total} tehtävää</p>
    )
}

const Kurssi = ({kurssi}) =>
    <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
    </div>

export default Kurssi