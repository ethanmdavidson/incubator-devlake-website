"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7546],{7085:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(7462),a=(i(7294),i(3905));i(1839);const o={title:"Requirement Lead Time",description:"Requirement Lead Time\n",sidebar_position:4},n=void 0,s={unversionedId:"Metrics/RequirementLeadTime",id:"version-v0.13/Metrics/RequirementLeadTime",title:"Requirement Lead Time",description:"Requirement Lead Time\n",source:"@site/versioned_docs/version-v0.13/Metrics/RequirementLeadTime.md",sourceDirName:"Metrics",slug:"/Metrics/RequirementLeadTime",permalink:"/zh/docs/v0.13/Metrics/RequirementLeadTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/RequirementLeadTime.md",tags:[],version:"v0.13",sidebarPosition:4,frontMatter:{title:"Requirement Lead Time",description:"Requirement Lead Time\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Requirement Delivery Rate",permalink:"/zh/docs/v0.13/Metrics/RequirementDeliveryRate"},next:{title:"Requirement Granularity",permalink:"/zh/docs/v0.13/Metrics/RequirementGranularity"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The amount of time it takes a requirement to deliver."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Analyze key projects and critical points, identify good/to-be-improved practices that affect requirement lead time, and reduce the risk of delays"),(0,a.kt)("li",{parentName:"ol"},"Focus on the end-to-end velocity of value delivery process; coordinate different parts of R&D to avoid efficiency shafts; make targeted improvements to bottlenecks.")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jira"),(0,a.kt)("li",{parentName:"ul"},"GitHub"),(0,a.kt)("li",{parentName:"ul"},"Community Experience")),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"This metric equals to ",(0,a.kt)("inlineCode",{parentName:"p"},"resolution_date")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"created_date"),' of issues in type "REQUIREMENT".'),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on the 'type-requirement' configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"p"},"Requirements"),"."),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Analyze the trend of requirement lead time to observe if it has improved over time."),(0,a.kt)("li",{parentName:"ol"},"Analyze and compare the requirement lead time of each project/team to identify key projects with abnormal lead time."),(0,a.kt)("li",{parentName:"ol"},"Drill down to analyze a requirement's staying time in different phases of SDLC. Analyze the bottleneck of delivery velocity and improve the workflow.")))}u.isMDXComponent=!0}}]);