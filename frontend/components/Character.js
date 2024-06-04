import React, {useState} from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
 
  
  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{character.name}</h3>
      {showHomeworld && (
        <p>
            Planet: 
          <span className="character-planet">{character.homeworldName}</span>
        </p>
      )}
    </div>
  )
}

export default Character
