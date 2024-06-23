# ff_and_ll
# 2021
问题1.
如何将vue项目打包？
解答
命令行进入到项目目录中，输入命令
npm run build
等待完成后，在项目目录中会出现一个dist文件夹。这个就是打包好的项目
其中会包含一个静态资源文件和一个网页文件


问题2
如何将打包好的vue项目，放到github.io上做成静态网页？
解答
在github上创建一个仓库
在本地将仓库克隆下来
将dist中的文件（static和index.html）复制到本地仓库
之后输入命令
git add .
git commit -m “1.0”
git push -u origin master
进入到github网页中，进入到刚才创建的仓库，点击设置


下滑到git pages选项处，修改成主分支，并且刷新，在git page下方就会出现连接，就可以访问了。

问题3
如何将本地的项目上传到GitHub仓库上
解答
在github上创建一个仓库
进入到放git仓库的文件夹
右键git bush
之后将github上仓库克隆到本地
git clone 仓库地址
会产生一个以你仓库名字命名的文件夹，进入到文件夹
将你的项目复制到文件夹中
右键 git bush
通过git add把项目添加到仓库
git add .
其中add后边的点代表将所有文件夹添加到仓库，如果想添加单个文件，就把 . 换成文件名
通过git commit 把项目提交到仓库
git commit -m “注释内容”
最后通过git push -u origin master把本地仓库的项目推送到远程仓库（也就是Github）上
git push -u origin master
由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后，下次再从本地库上传内容的时候就不需要加了
在本地将仓库克隆下来
