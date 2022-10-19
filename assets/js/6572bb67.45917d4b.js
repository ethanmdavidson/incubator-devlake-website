"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4615],{7255:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>n,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(7462),s=(t(7294),t(3905));t(1839);const r={title:"PR Review Time",description:"PR Review Time\n",sidebar_position:2},a=void 0,l={unversionedId:"Metrics/ReviewTime",id:"version-v0.13/Metrics/ReviewTime",title:"PR Review Time",description:"PR Review Time\n",source:"@site/versioned_docs/version-v0.13/Metrics/ReviewTime.md",sourceDirName:"Metrics",slug:"/Metrics/ReviewTime",permalink:"/docs/v0.13/Metrics/ReviewTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/ReviewTime.md",tags:[],version:"v0.13",sidebarPosition:2,frontMatter:{title:"PR Review Time",description:"PR Review Time\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"PR Review Depth",permalink:"/docs/v0.13/Metrics/ReviewDepth"},next:{title:"PR Time To Merge",permalink:"/docs/v0.13/Metrics/TimeToMerge"}},n={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function c(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"The time it takes to complete a code review of a PR before it gets merged. "),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("p",null,"Code review should be conducted almost in real-time and usually take less than two days. Abnormally long PR Review Time may indicate one or more of the following problems:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The PR size is too large that makes it difficult to review."),(0,s.kt)("li",{parentName:"ol"},"The team is too busy to review code.")),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time"),(0,s.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time - Team View")),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This metric is the time frame between when the first comment is added to a PR, to when the PR is merged."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on PR/MRs collected from GitHub or GitLab."),(0,s.kt)("b",null,"Transformation Rules Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,s.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,s.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,s.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}c.isMDXComponent=!0}}]);