# little-demo
<<<<<<< HEAD
1606脱产小demo

```js

=======
1606脱产小dem

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
