async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=476923b3-d0da-484e-b5e2-3c5ea7adaea9&offset=0")
        .then(data => data.json())
        .then(data => {

            if(data.status != "success") return;
            const matchesList = data.data;

            if(!matchesList) return [];

            const relevantData = matchesList.filter(match => match.series_id == "bd830e89-3420-4df5-854d-82cfab3e1e04"
            ).map(match => `${match.name}, ${match.status}`)

            console.log({relevantData}); 

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

            return relevantData;
        })

}

getMatchData(); 