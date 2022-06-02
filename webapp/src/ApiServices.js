
const apiurl = 'https://c10wlapi-test.govsg.blugraph.services' //- Noor-added-for -testing-use this url for non databse setup
//getting stations from kvddb and shadow to display data in administration/stations
function GetStations(token) {
    return fetch(`${apiurl}/station/administration`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
  }

  function getStationsStatus(token) {
    return fetch(`${apiurl}/station/all`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
  }

  export{
    GetStations,getStationsStatus
  }