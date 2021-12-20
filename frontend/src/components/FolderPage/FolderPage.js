import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import FolderList from "./FolderList";
import AddIcon from '@mui/icons-material/Add';

const FolderPage = (props) => {
  const folder = [
    { folderName: "folder1" },
    { folderName: "folder2" },
    { folderName: "folder3" },
    { folderName: "folder4" },
  ];
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {folder.map((folder, index) => {
          return (
            <>
              <FolderList key={index} folderName={folder.folderName} />
              <Divider />
            </>
          );
        })}
        <ListItem>
          <ListItemButton inset>
            <ListItemIcon><AddIcon/></ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default FolderPage;
