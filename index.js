const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card-profile'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img'
      />
      <h2 className='person-name'>Kiran V</h2>
      <p className='msg'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
