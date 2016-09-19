# little-demo

1606脱产小demo


git init 初始化

git status 检查上传文件

git add .   添加上传文件

git commit -m'备注'  添加备注

git push   上传文件


git checkout -b idea   创建分支

git branch  检查分支

git checkout idea  切换分支

git branch -D  idea 删除分支本地

git push origin idea   发布分支

git push origin :idea 删除分支网上

git merge idea  合并分支




要想直接网页上运行文件，创建分支gh-pages上面只需要留下build  .gitignore index.html 就可以
https://zhangmeng000.github.io/demo 写下类似地址即可 姓名+github.io+文件名

需要在webpack 里面的outPath 加上publicPath:"./build/"
index.html 里面的也要相应改变

引用网上库里的相应东西要用相应的raw网址

要想md在网页中能够读出，需要下载marked包
npm install marked --save
可以去npmjs.com 里面搜marked ,也可以去react里面去找
数据库axios详见helpers.js 要下载axios包

table 回车出来表格

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

```js


import marked from 'marked';
class Marked extends React.Component {
  render () {
    let cont = marked('# hello')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: marked('# hello')}} />
      </div>
    )
  }
}

export default Marked;



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
