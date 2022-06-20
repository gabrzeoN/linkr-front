import styled from "styled-components";

const TrendingBox = styled.div`
  width: 90%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  
  background-color: #171717;
  color: #fff;
  position: sticky;
  top: 215px;
  left: 60vw;
  &> span {
    width: 100%;
    text-align: left;
    padding: 8px 16px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    cursor: pointer;
  }
  &> span:first-of-type {
    margin-top: 18px;
  }
  &> span:last-of-type {
    margin-bottom: 18px;
  }
  @media (min-width: 912px) {
        width: 72%
  }
`

const Title = styled.p`
  width: 100%;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  text-align: left;
  padding: 12px 16px;
 
  color: #fff;
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #484848;
`

export {
  TrendingBox,
  Title,
  Separator
}