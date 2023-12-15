import lastVisitedIcon from '../../assets/last-visited-icon.png';

const Continue = () => {
  return (
      <div className="cards continueContainer">
      <h3>Continue</h3>
      <p>Start your PreprLabs journey now!</p>

      <div className='lastVisitedIcon'>
        <img src={lastVisitedIcon} alt="" />
        <a href='https://preprlabs.org/explore' className='exploreMore'>Explore more</a>
      </div>




      </div>
  )
}

export default Continue;