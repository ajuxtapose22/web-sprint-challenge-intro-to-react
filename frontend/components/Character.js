import React, {useState} from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  
  return (
    <div className='character'>
      <h3>{character.name}</h3>
      <button onClick={toggleHomeworld}> Toggle Homeworld</button>
      {/* Use the same markup with the same attributes as in the mock */}

    </div>
  )
}

export default Character
