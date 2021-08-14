import {setToken, setUser} from "./userActionCreator";

export const loginUser = (email, password) =>  (dispatch, getState) => {
    fetch('http://159.65.126.180/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({email, password}),
    }).then((res) => {
        console.log(res.json());
        if (res.ok) {
                console.log(res)
                dispatch(setUser(res.user))
                dispatch(setToken(res.token.access_token))
                return res.json()
            } else {
                console.log('problem');
            }
        })

}