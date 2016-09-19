import axios from 'axios';
import marked from 'marked';
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

function searchCard(){
  let address = `https://raw.githubusercontent.com/zhangmeng000/demodata/master/Card.json?${Math.random()}`
  return axios.get(address)
  .then((res) => (
    {  getCard:res.data }
  ))
  .catch(function (error) {
    alert(error);
  });
}

function searchMd(add){
  let address = `https://raw.githubusercontent.com/zhangmeng000/demodata/master/blog/${add}.md`;
  return axios.get(address)
  .then((res) => (
    {  getMd:res.data }
  ))
  .catch(function (error) {
    alert(error);
  });
}
export { searchGit,searchCard,searchMd }
