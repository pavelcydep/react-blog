function UserData(props) {

    const { persons } = props

    if (!persons || persons.length === 0) return <p>Нет данных.</p>

    return (
        persons.map((person) =>
        <div key={person.id}>
        
           <div  className="place-card__image" style={{ backgroundImage: `url(${person.link})` }}>
        <button className="place-card__delete-icon" ></button>
        </div>
        <div className="place-card__description">
          <h3 className="place-card__name">{person.title}</h3>
          <div className="place-card__like-container">
            <button>
           
            </button>
          
          </div>
        </div>
      </div>)
        
   
    )
}

export default UserData