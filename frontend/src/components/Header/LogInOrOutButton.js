import { Button } from "@material-ui/core";
const LogInOrOutButton = (props) => {
    if (props.isLogin) {
        return (
            <Button
                className="ch"
                variant="contained"
                onClick={() => {
                    console.log(props.isLogin);
                }}
                href="/logout"
                size="small"
            >
                登出
            </Button>
        )
    }
    else {
        return (
            <Button
                className="ch"
                variant="contained"
                onClick={() => {
                    console.log(props.isLogin);
                }}
                href="/login"
                size="small"
            >
                登入
            </Button>
        )
    }
}

export default LogInOrOutButton;