import FolderItem, { FolderData } from "./FolderItem";

interface FolderListProps {
  folders: FolderData[];
  openFolderIds: string[];
  toggleFolder: (id: string) => void;
  icon?: React.ReactNode;
}

const FolderList = ({
  folders,
  openFolderIds,
  toggleFolder,
  icon,
}: FolderListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {folders.slice(0, 5).map((folder) => (
        <FolderItem
          key={folder.id}
          data={folder}
          icon={icon}
          isOpen={openFolderIds.includes(folder.id)}
          onToggle={() => toggleFolder(folder.id)}
        />
      ))}
    </div>
  );
};

export default FolderList;
