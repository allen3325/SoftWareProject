import { Button, ButtonGroup } from "@material-ui/core";
import styled from "@emotion/styled";


const MyThemeComponent = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    // borderRadius: theme.shape.borderRadius,
    borderBlockColor:theme.palette.primary.main,
    borderColor:theme.palette.primary.main,
    fontSize:'1rem',
}));

const SmallHeader = () => {
    return (
        <div>
            <ButtonGroup sx={{paddingLeft: "20px;"}} className="ButtonGroup" variant="text">
                <MyThemeComponent href="/newDiary"><p>new diary</p></MyThemeComponent>
                <MyThemeComponent href="/calenderSearch"><p>calender</p></MyThemeComponent>
                <MyThemeComponent href="/folderPage"><p>folder</p></MyThemeComponent>
                <MyThemeComponent href="/test"><p>test</p></MyThemeComponent>
                {/* <MyThemeComponent href="/">outline page</MyThemeComponent> */}
            </ButtonGroup>
        </div>
    )
}

export default SmallHeader;