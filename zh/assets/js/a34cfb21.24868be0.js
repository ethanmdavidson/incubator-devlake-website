"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1219],{26042:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));i(61839);const a={title:"GitExtractor",description:"GitExtractor Plugin\n"},r=void 0,l={unversionedId:"Plugins/gitextractor",id:"version-v0.11/Plugins/gitextractor",title:"GitExtractor",description:"GitExtractor Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/gitextractor.md",sourceDirName:"Plugins",slug:"/Plugins/gitextractor",permalink:"/zh/docs/v0.11/Plugins/gitextractor",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/gitextractor.md",tags:[],version:"v0.11",frontMatter:{title:"GitExtractor",description:"GitExtractor Plugin\n"},sidebar:"docsSidebar",previous:{title:"Gitee(WIP)",permalink:"/zh/docs/v0.11/Plugins/gitee"},next:{title:"GitHub",permalink:"/zh/docs/v0.11/Plugins/github"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Steps to make this plugin work",id:"steps-to-make-this-plugin-work",level:2},{value:"Sample Request",id:"sample-request",level:2},{value:"Standalone Mode",id:"standalone-mode",level:2},{value:"Development",id:"development",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin extracts commits and references from a remote or local git repository. It then saves the data into the database or csv files."),(0,o.kt)("h2",{id:"steps-to-make-this-plugin-work"},"Steps to make this plugin work"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the Git repo extractor to retrieve data about commits and branches from your repository."),(0,o.kt)("li",{parentName:"ol"},"Use the GitHub plugin to retrieve data about Github issues and PRs from your repository.\nNOTE: you can run only one issue collection stage as described in the Github Plugin README."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Plugins/refdiff"},"RefDiff")," plugin to calculate version diff, which will be stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"refs_commits_diffs")," table.")),(0,o.kt)("h2",{id:"sample-request"},"Sample Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "git repo extractor",\n    "tasks": [\n        [\n            {\n                "Plugin": "gitextractor",\n                "Options": {\n                    "url": "https://github.com/merico-dev/lake.git",\n                    "repoId": "github:GithubRepo:384111310"\n                }\n            }\n        ]\n    ]\n}\n\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the location of the git repository. It should start with ",(0,o.kt)("inlineCode",{parentName:"li"},"http"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"https")," for a remote git repository and with ",(0,o.kt)("inlineCode",{parentName:"li"},"/")," for a local one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repoId"),": column ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of  ",(0,o.kt)("inlineCode",{parentName:"li"},"repos"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proxy"),": optional, http proxy, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://your-proxy-server.com:1080"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"privateKey"),": optional, for SSH cloning, base64 encoded ",(0,o.kt)("inlineCode",{parentName:"li"},"PEM")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"passphrase"),": optional, passphrase for the private key")),(0,o.kt)("h2",{id:"standalone-mode"},"Standalone Mode"),(0,o.kt)("p",null,"You call also run this plugin in a standalone mode without any DevLake service running using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'go run plugins/gitextractor/main.go -url https://github.com/merico-dev/lake.git -id github:GithubRepo:384111310 -db "merico:merico@tcp(127.0.0.1:3306)/lake?charset=utf8mb4&parseTime=True"\n')),(0,o.kt)("p",null,"For more options (e.g., saving to a csv file instead of a db), please read ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/gitextractor/main.go"),"."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"This plugin depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 in order to run and debug this plugin on your local\nmachine. ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.11/Plugins/refdiff#Development"},"Click here")," for a brief guide."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);