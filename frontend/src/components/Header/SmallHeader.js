import { Button, ButtonGroup } from "@material-ui/core";
import styled from "@emotion/styled";


const MyThemeComponent = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    // borderRadius: theme.shape.borderRadius,
    borderBlockColor:theme.palette.primary.main,
    borderColor:theme.palette.primary.main,
    fontSize:'1.5rem',
}));

const SmallHeader = () => {
    return (
        <div>
            <ButtonGroup className="ButtonGroup" variant="text">
                <MyThemeComponent href="/newDiary">new diary</MyThemeComponent>
                <MyThemeComponent href="/calenderSearch">calender</MyThemeComponent>
                <MyThemeComponent href="/folderPage">folder</MyThemeComponent>
                {/* <MyThemeComponent href="/">outline page</MyThemeComponent> */}
            </ButtonGroup>
        </div>
    )
}

export default SmallHeader;