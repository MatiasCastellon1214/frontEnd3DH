

const Records = () => {

    const records = [
        {id: 1, bandName: "King Crimson", recordName: "In The Court Of The Crimson King", release: "1969", img: "https://www.discogs.com/master/406634-King-Crimson-In-The-Court-Of-The-Crimson-King-An-Observation-By-King-Crimson/image/SW1hZ2U6NDg4NTMzMjU="},
        {id: 2, bandName: "Tool", recordName: "Aenima", release: "1996", img: "https://www.discogs.com/es/master/1402-Tool-%C3%86nima/image/SW1hZ2U6MjMxMTY5Ng=="},
        {id: 3, bandName: "Tool", recordName: "Lateralus", release: "2001", img: "https://www.discogs.com/es/master/1517-Tool-Lateralus/image/SW1hZ2U6ODM3MzcwODg="},
        {id: 4, bandName: "Luis Alberto Spinetta", recordName: "Artoud Para Millones", release: "1973", img: "https://es.wikipedia.org/wiki/Artaud_(%C3%A1lbum)#/media/Archivo:Pescado_Rabioso-Spinetta_-_Artaud.png"},
        {id: 5, bandName: "Ska-P", recordName: "Incontrolable", release: "2003", img: "https://m.media-amazon.com/images/I/61vexYA0mdL._UXNaN_FMjpg_QL85_.jpg"}
    ]


  return (
    <div>
        <h1>Records List</h1>
        <div className="list-container">
        {/*{records.map((item)=>)}  */}      

        </div>
    </div>
  )
}

export default Records