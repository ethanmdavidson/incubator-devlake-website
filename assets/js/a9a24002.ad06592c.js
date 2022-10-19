"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7307],{4605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var o=a(7462),i=(a(7294),a(3905));a(1839);const l={title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},r=void 0,n={unversionedId:"GettingStarted/TemporalSetup",id:"version-v0.13/GettingStarted/TemporalSetup",title:"Install via Temporal",description:"The steps to install DevLake in Temporal mode.\n",source:"@site/versioned_docs/version-v0.13/GettingStarted/TemporalSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/TemporalSetup",permalink:"/docs/v0.13/GettingStarted/TemporalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/GettingStarted/TemporalSetup.md",tags:[],version:"v0.13",sidebarPosition:6,frontMatter:{title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},sidebar:"docsSidebar",previous:{title:"Install via Helm",permalink:"/docs/v0.13/GettingStarted/HelmSetup"},next:{title:"User Manuals",permalink:"/docs/v0.13/UserManuals"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Temporal Demo",id:"temporal-demo",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to setup",id:"how-to-setup",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Normally, DevLake would execute pipelines on a local machine (we call it ",(0,i.kt)("inlineCode",{parentName:"p"},"local mode"),"), it is sufficient most of the time. However, when you have too many pipelines that need to be executed in parallel, it can be problematic, as the horsepower and throughput of a single machine is limited."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"temporal mode")," was added to support distributed pipeline execution, you can fire up arbitrary workers on multiple machines to carry out those pipelines in parallel to overcome the limitations of a single machine."),(0,i.kt)("p",null,"But, be careful, many API services like JIRA/GITHUB have a request rate limit mechanism. Collecting data in parallel against the same API service with the same identity would most likely hit such limit."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DevLake Server and Workers connect to the same temporal server by setting up ",(0,i.kt)("inlineCode",{parentName:"li"},"TEMPORAL_URL")),(0,i.kt)("li",{parentName:"ol"},"DevLake Server sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"pipeline")," to the temporal server, and one of the Workers pick it up and execute it")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT: This feature is in early stage of development. Please use with caution")),(0,i.kt)("h2",{id:"temporal-demo"},"Temporal Demo"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio"))),(0,i.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone and fire up the ",(0,i.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio")," services"),(0,i.kt)("li",{parentName:"ol"},"Clone this repo, and fire up DevLake with command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose -f deployment/temporal/docker-compose-temporal.yml up -d"))))}d.isMDXComponent=!0}}]);