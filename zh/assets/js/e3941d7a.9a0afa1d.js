"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6650],{55743:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(61839);const o={title:"DORA - Lead Time for Changes(WIP)",description:"DORA - Lead Time for Changes\n",sidebar_position:19},l=void 0,r={unversionedId:"Metrics/LeadTimeForChanges",id:"version-v0.13/Metrics/LeadTimeForChanges",title:"DORA - Lead Time for Changes(WIP)",description:"DORA - Lead Time for Changes\n",source:"@site/versioned_docs/version-v0.13/Metrics/LeadTimeForChanges.md",sourceDirName:"Metrics",slug:"/Metrics/LeadTimeForChanges",permalink:"/zh/docs/v0.13/Metrics/LeadTimeForChanges",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/LeadTimeForChanges.md",tags:[],version:"v0.13",sidebarPosition:19,frontMatter:{title:"DORA - Lead Time for Changes(WIP)",description:"DORA - Lead Time for Changes\n",sidebar_position:19},sidebar:"docsSidebar",previous:{title:"DORA - Deployment Frequency(WIP)",permalink:"/zh/docs/v0.13/Metrics/DeploymentFrequency"},next:{title:"DORA - Mean Time to Restore Service",permalink:"/zh/docs/v0.13/Metrics/MTTR"}},m={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],s={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The median amount of time for a commit to be deployed into production."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("p",null,"This metric measures the time it takes to commit code to the production environment and reflects the speed of software delivery. A lower average change preparation time means that your team is efficient at coding and deploying your project."),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric can be calculated in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a deployment can be linked to PRs, then the lead time for changes of a deployment is the average cycle time of its associated PRs. For instance,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compared to the previous deployment ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-2")," deployed three new commits ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-3"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"commit-1")," is linked to ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-2")," is linked to ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-3"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-3")," is not linked to any PR. Then, ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-2")," is associated with ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-3"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Deploy-2"),"'s lead time for changes = average cycle time of ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"pr-3"),"."))),(0,n.kt)("li",{parentName:"ul"},"If a deployment can't be linked to PRs, then the lead time for changes is computed based on its associated commits. For instance,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compared to the previous deployment ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-2")," deployed three new commits ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-3"),"."),(0,n.kt)("li",{parentName:"ul"},"None of ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-3")," is linked to any PR. "),(0,n.kt)("li",{parentName:"ul"},"Calculate each commit's lead time for changes, which equals to ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy-2"),"'s deployed_at - commit's authored_date"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Deploy-2"),"'s Lead time for changes = average lead time for changes of ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"commit-3"),".")))),(0,n.kt)("p",null,"Below are the benchmarks for different development teams:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Groups"),(0,n.kt)("th",{parentName:"tr",align:null},"Benchmarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,n.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"High performers"),(0,n.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,n.kt)("td",{parentName:"tr",align:null},"Between one month and six months")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,n.kt)("td",{parentName:"tr",align:null},"More than six months")))),(0,n.kt)("p",null,(0,n.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,n.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,n.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Break requirements into smaller, more manageable deliverables"),(0,n.kt)("li",{parentName:"ul"},"Optimize the code review process"),(0,n.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,n.kt)("li",{parentName:"ul"},"Integrate CI/CD tools to automate the deployment process")))}p.isMDXComponent=!0}}]);