import CardContainer from "./cards/CardContainer";
const Main = () => {
  return (
    <main>

      <div className="mainContainer wrapper">
        <div className="heading">
          <h2 className="bold poppins">Welcome, Rebecca.</h2>
          <p className="completeProfile bold">Complete profile</p>
        </div>

        <CardContainer />

      </div>
    </main>
  )
}

export default Main;