import { Auth, API } from 'aws-amplify'
import '../configureAmplify'

export default function Protected() {

    async function getData() {
        const apiName = 'books-backend';
        const path = '/Prod/ubooks';
        const myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
        };
      
        const res = await API.get(apiName, path, myInit).then( resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
      }

      async function getData2() {
        const apiName = 'books-backend';
        const path = '/Prod/books';
        const myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
        };
      
        const res = await API.get(apiName, path, myInit).then( resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
      }

    return (
        <div>
            <p>UnProtected route</p>
            <button onClick={getData} >get data</button>
            <button onClick={getData2} >get protected data</button>
        </div>
    )

}