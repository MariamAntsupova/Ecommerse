import {setToken, setUser} from "./userActionCreator";

export const loginUser = (body) =>  (dispatch, getState) => {
    console.log(body)
    fetch('http://159.65.126.180/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body),
    }).then((res) => {
        if (res.ok) {
                console.log(res)
                return res.json()
            } else {
                console.log('problem');
            }
        }).then(data => {
            console.log(data)
            dispatch(setUser(data.user))
            dispatch(setToken(data.token.access_token))
        })

}