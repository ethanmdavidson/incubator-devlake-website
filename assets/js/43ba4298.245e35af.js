"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[73470],{2716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Using Advanced Mode",sidebar_position:6,description:"Using the advanced mode of Config-UI\n"},s=void 0,l={unversionedId:"UserManuals/ConfigUI/AdvancedMode",id:"version-v0.12/UserManuals/ConfigUI/AdvancedMode",title:"Using Advanced Mode",description:"Using the advanced mode of Config-UI\n",source:"@site/versioned_docs/version-v0.12/UserManuals/ConfigUI/AdvancedMode.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/AdvancedMode",permalink:"/docs/v0.12/UserManuals/ConfigUI/AdvancedMode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/UserManuals/ConfigUI/AdvancedMode.md",tags:[],version:"v0.12",sidebarPosition:6,frontMatter:{title:"Using Advanced Mode",sidebar_position:6,description:"Using the advanced mode of Config-UI\n"},sidebar:"docsSidebar",previous:{title:"Configuring Jenkins",permalink:"/docs/v0.12/UserManuals/ConfigUI/Jenkins"},next:{title:"Grafana User Guide",permalink:"/docs/v0.12/UserManuals/Dashboards/GrafanaUserGuide"}},r={},d=[{value:"Why advanced mode?",id:"why-advanced-mode",level:2},{value:"How to use advanced mode to create pipelines?",id:"how-to-use-advanced-mode-to-create-pipelines",level:2},{value:"Examples",id:"examples",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-advanced-mode"},"Why advanced mode?"),(0,i.kt)("p",null,"Advanced mode allows users to create any pipeline by writing JSON. This is useful for users who want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitHub/GitLab repos or Jira projects within a single pipeline"),(0,i.kt)("li",{parentName:"ol"},"Have fine-grained control over what entities to collect or what subtasks to run for each plugin"),(0,i.kt)("li",{parentName:"ol"},"Orchestrate a complex pipeline that consists of multiple stages of plugins.")),(0,i.kt)("p",null,"Advanced mode gives the most flexibility to users by exposing the JSON API."),(0,i.kt)("h2",{id:"how-to-use-advanced-mode-to-create-pipelines"},"How to use advanced mode to create pipelines?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click on "+ New Blueprint" on the Blueprint page.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(96371).Z,width:"2746",height:"448"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'In step 1, click on the "Advanced Mode" link.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(83684).Z,width:"1450",height:"548"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The pipeline editor expects a 2D array of plugins. The first dimension represents different stages of the pipeline and the second dimension describes the plugins in each stage. Stages run in sequential order and plugins within the same stage runs in parallel. We provide some templates for users to get started. Please also see the next section for some examples.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(87850).Z,width:"918",height:"845"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule. After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitLab repos sequentially.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When there're multiple collection tasks against a single data source, we recommend running these tasks sequentially since the collection speed is mostly limited by the API rate limit of the data source.\nRunning multiple tasks against the same data source is unlikely to speed up the process and may overwhelm the data source.")),(0,i.kt)("p",null,"Below is an example for collecting 2 GitLab repos sequentially. It has 2 stages, each contains a GitLab task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 15238074\n      }\n    }\n  ],\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 11624398\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Collect a GitHub repo and a Jira board in parallel")),(0,i.kt)("p",null,"Below is an example for collecting a GitHub repo and a Jira board in parallel. It has a single stage with a GitHub task and a Jira task. Since users can configure multiple Jira connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for Jira task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "github",\n      "Options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    },\n    {\n      "Plugin": "jira",\n      "Options": {\n        "connectionId": 1,\n        "boardId": 76\n      }\n    }\n  ]\n]\n')))}p.isMDXComponent=!0},96371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode1-b57f41fff7e23f19c2af911e2adaddcf.png"},83684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode2-3dd7ce37847a5d866cad6d9a45779830.png"},87850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode3-9194e51e02f239171d9f920cb9d3dd6c.png"}}]);