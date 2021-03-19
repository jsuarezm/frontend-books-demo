import { useState, useEffect } from "react"
import { Auth, API } from 'aws-amplify'
import { Router, useRouter } from 'next/router'
import '../configureAmplify'

export default function Protected() {

    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
            console.log({ user })
        } catch (err) {
            setUser(null)
            router.push('/profile')
        }
    }

    async function getData() {
        const apiName = 'books-backend';
        const path = '/Prod/books';
        const myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
        };

        const authToken = await Auth.currentSession().then(data => {
            return data.idToken.jwtToken;
        });

        const authHeader = {
            Authorization: authToken
        };
      
        const res = await API.get(apiName, path, {headers: authHeader}).then( resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
      }

        if (!user) return null
    return (
        <div>
            <p>Protected route</p>
            <button onClick={getData} >get data</button>
        </div>
    )

}