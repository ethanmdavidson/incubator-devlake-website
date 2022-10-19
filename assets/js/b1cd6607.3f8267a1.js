"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5],{3827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));n(1839);const l={title:"GitHub",description:"GitHub Plugin\n"},o=void 0,r={unversionedId:"Plugins/github",id:"Plugins/github",title:"GitHub",description:"GitHub Plugin\n",source:"@site/docs/Plugins/github.md",sourceDirName:"Plugins",slug:"/Plugins/github",permalink:"/docs/Plugins/github",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/github.md",tags:[],version:"current",frontMatter:{title:"GitHub",description:"GitHub Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitExtractor",permalink:"/docs/Plugins/gitextractor"},next:{title:"GitLab",permalink:"/docs/Plugins/gitlab"}},u={},s=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Screenshot",id:"screenshot",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Sample Request",id:"sample-request",level:2}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin gathers data from ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," to display information to the user in ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana"),". We can help tech leaders answer such questions as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is this month more productive than last?"),(0,a.kt)("li",{parentName:"ul"},"How fast do we respond to customer requirements?"),(0,a.kt)("li",{parentName:"ul"},"Was our quality improved or not?")),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Here are some examples metrics using ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avg Requirement Lead Time By Assignee"),(0,a.kt)("li",{parentName:"ul"},"Bug Count per 1k Lines of Code"),(0,a.kt)("li",{parentName:"ul"},"Commit Count over Time")),(0,a.kt)("h2",{id:"screenshot"},"Screenshot"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(9777).Z,width:"1229",height:"431"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring GitHub via ",(0,a.kt)("a",{parentName:"li",href:"/docs/UserManuals/ConfigUI/GitHub"},"config-ui"),".")),(0,a.kt)("h2",{id:"sample-request"},"Sample Request"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "github",\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,a.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "github 20211126",\n    "tasks": [[{\n        "plugin": "github",\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')))}d.isMDXComponent=!0},9777:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-demo-79e8e82fb6d7778e8ea342d81182e46e.png"}}]);