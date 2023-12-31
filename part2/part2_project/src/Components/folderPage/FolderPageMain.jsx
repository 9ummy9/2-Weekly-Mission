import styled from 'styled-components';
import SearchBox from '../sharing/SearchBox';
import CardsList from '../sharing/Card/CardsList';
import SortButton from './SortButton';
import '../../css/folderButtons.css';

export const NoneText = styled.p`
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
`;

export default function FolderPageMain({
  isModal,
  handleModal,
  buttons,
  cardData,
  handleShowAll,
  yourPick,
  littleTitle,
  handleSelet,
  handleKebab,
  isSelected,
  isKebab,
}) {
  return (
    <main>
      {cardData ? (
        <>
          <SearchBox />

          <SortButton
            handleModal={handleModal}
            isModal={isModal}
            buttons={buttons}
            handleShowAll={handleShowAll}
            yourPick={yourPick}
            littleTitle={littleTitle}
          />
          <CardsList
            handleModal={handleModal}
            isModal={isModal}
            buttons={buttons}
            handleShowAll={handleShowAll}
            cardData={cardData}
            handleSelet={handleSelet}
            isSelected={isSelected}
            handleKebab={handleKebab}
            isKebab={isKebab}
          />
        </>
      ) : (
        <>
          <SearchBox />
          <NoneText>저장된 링크가 없습니다</NoneText>
        </>
      )}
    </main>
  );
}
