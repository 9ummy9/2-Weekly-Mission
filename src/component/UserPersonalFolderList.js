import UserPersonalFolder from "./UserPersonalFolder";
import "./UserPersonalFolder.css";

function UserPersonalFolderList({ psFolderData }) {
  return (
    <div className="personal-folder-container">
      <div>
        <button className="personal-folder-button">전체</button>
        {psFolderData.map((data) => (
          <UserPersonalFolder key={data.id} data={data} />
        ))}
      </div>
      <button className="personal-folder-addBtn">폴더 추가 +</button>
    </div>
  );
}

export default UserPersonalFolderList;
