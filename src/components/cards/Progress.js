import leaf1 from '../../assets/leaf1.png';
import leaf2 from '../../assets/leaf2.png';
import leaf3 from '../../assets/leaf3.png';
import leaf4 from '../../assets/leaf4.png';

const Progress = () => {
  return (
      <div className="cards progressContainer">
        <h3>Progress</h3>
        <p>You joined Preprlabs on Nov 9, 2023, here is your Challenge journey. </p>

        <div className='progressStats bold'>
          <div><img src={leaf4} alt="" />  Project Submitted: 16</div>
          <div><img src={leaf3} alt="" />  Project Created: 16</div>
          <div><img src={leaf2} alt="" />  Invited: 16</div>
          <div><img src={leaf1} alt="" />  Followed: 0</div>
        </div>
      </div>
  )
}

export default Progress;