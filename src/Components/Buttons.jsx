import { useEffect, useState } from "react";
import { getButtonData } from "./Api";
import AddFolder from "./AddFolder";
import ButtonSelect from "./ButtonSelect";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";

const ButtonsField = styled.div`
  margin: 0 auto;
  width: 1060px;
  display: flex;
  justify-content: space-between;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  row-gap: 12px;
  ${mediaQuery.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }
  ${mediaQuery.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
const Button = styled.button`
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color);
  ${({ selectedButtonId }) => {
    return selectedButtonId === null
      ? `background: var(--Linkbrary-primary-color);
  color: var(--white);`
      : `background: var(--white);
  color: var(--black);`;
  }}
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
  ${mediaQuery.mobile} {
    padding: 6px 10px;
    font-size: 14px;
  }
`;
const NoneData = styled.div`
  padding: 41px 15px 35px 16px;
  color: var(--black);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

function Buttons({
  setSelectedButtonId,
  selectedButtonId,
  setSelectedButtonTitle,
}) {
  const [buttonData, setButtonData] = useState(null);
  const ButtonDataLoad = async () => {
    try {
      let result = await getButtonData();
      result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setButtonData(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSelectedId = () => {
    setSelectedButtonId(null);
    setSelectedButtonTitle("");
  };
  useEffect(() => {
    ButtonDataLoad();
  }, []);
  return (
    <ButtonsField>
      {buttonData && buttonData.data.length !== 0 ? (
        <>
          <ButtonsContainer>
            <Button
              onClick={handleSelectedId}
              selectedButtonId={selectedButtonId}
            >
              전체
            </Button>
            {buttonData.data.map((data) => (
              <ButtonSelect
                key={data.id}
                id={data.id}
                name={data.name}
                selectedButtonId={selectedButtonId}
                setSelectedButtonId={setSelectedButtonId}
                setSelectedButtonTitle={setSelectedButtonTitle}
              />
            ))}
          </ButtonsContainer>
          <AddFolder />
        </>
      ) : (
        <NoneData>저장된 링크가 없습니다</NoneData>
      )}
    </ButtonsField>
  );
}
export default Buttons;
