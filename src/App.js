import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

import {
  LoaderContainer,
  MainContainer,
  MainHeading,
  TravelList,
  EachList,
  Image,
  ContentContainer,
  Name,
  Description,
} from './styledComponents'

const activeStatus = {
  initial: 'Initial',
  inProgress: 'In_Progress',
  success: 'Success',
}

// Replace your code here
class App extends Component {
  state = {
    travelList: [],
    travelApiStatus: activeStatus.initial,
  }

  componentDidMount() {
    this.getTravelListDetails()
  }

  getTravelListDetails = async () => {
    this.setState({travelApiStatus: activeStatus.inProgress})
    const options = {
      method: 'GET',
    }
    const response = await fetch(`https://apis.ccbp.in/tg/packages`, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.packages.map(eachList => ({
        id: eachList.id,
        imageUrl: eachList.image_url,
        name: eachList.name,
        description: eachList.description,
      }))

      this.setState({
        travelList: updatedData,
        travelApiStatus: activeStatus.success,
      })
    }
  }

  renderLoading = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTravelApiSuccessView = () => {
    const {travelList} = this.state
    return (
      <>
        <MainHeading>Travel Guide</MainHeading>
        <TravelList>
          {travelList.map(eachList => (
            <EachList key={eachList.id}>
              <Image src={eachList.imageUrl} alt={eachList.name} />
              <ContentContainer>
                <Name>{eachList.name}</Name>
                <Description>{eachList.description}</Description>
              </ContentContainer>
            </EachList>
          ))}
        </TravelList>
      </>
    )
  }

  renderTravelDetails = () => {
    const {travelApiStatus} = this.state
    switch (travelApiStatus) {
      case activeStatus.inProgress:
        return this.renderLoading()
      case activeStatus.success:
        return this.renderTravelApiSuccessView()
      default:
        return null
    }
  }

  render() {
    return <MainContainer>{this.renderTravelDetails()}</MainContainer>
  }
}

export default App
