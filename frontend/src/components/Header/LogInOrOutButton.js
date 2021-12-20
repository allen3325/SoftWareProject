import { Button } from "@material-ui/core";
const LogInOrOutButton = (props) => {
    if (props.isLogin) {
        return (
            <Button
                variant="contained"
                onClick={() => {
                    console.log(props.isLogin);
                }}
                href="/logout"
            >
                登出
            </Button>
        )
    }
    else {
        return (
            <Button
                variant="contained"
                onClick={() => {
                    console.log(props.isLogin);
                }}
                href="/login"
            >
                登入
            </Button>
        )
    }
}

export default LogInOrOutButton;