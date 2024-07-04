import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #eef4f7;
  padding: 30px;
`

export const MainHeading = styled.h1`
  width: 200px;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  color: #334155;
  border-bottom: 3px solid #52bbf0;
  padding-left: 10px;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const TravelList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const EachList = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 45%;
  margin-right: 20px;
  margin-bottom: 50px;
  background-color: #ffffff;
`
export const Image = styled.img`
  height: 60%;
  width: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  color: #475569;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #64748b;
`
