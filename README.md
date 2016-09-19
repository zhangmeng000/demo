# little-demo
1606脱产小demo

```js

import axios from 'axios';
function searchGit(add){
  let address = `https://api.github.com/users/${add}`
  return axios.get(address)
  .then((res) => (
    {  getData:res.data }
  ))
  .catch(function (error) {
    alert(error);
  });
}
export { searchGit }

```
