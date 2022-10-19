"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1994],{4064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));n(1839);const o={title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:20},r=void 0,s={unversionedId:"Metrics/MTTR",id:"Metrics/MTTR",title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",source:"@site/docs/Metrics/MTTR.md",sourceDirName:"Metrics",slug:"/Metrics/MTTR",permalink:"/docs/Metrics/MTTR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/MTTR.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"DORA - Lead Time for Changes",permalink:"/docs/Metrics/LeadTimeForChanges"},next:{title:"DORA - Change Failure Rate",permalink:"/docs/Metrics/CFR"}},l={},m=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:m};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The time to restore service after service incidents, rollbacks, or any type of production failure happened."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"This metric is essential to measure the disaster control capability of your team and the robustness of the software."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"DORA dashboard. See ",(0,a.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"MTTR = Total ",(0,a.kt)("a",{parentName:"p",href:"/docs/Metrics/IncidentAge"},"incident age")," (in hours)/number of incidents."),(0,a.kt)("p",null,"If you have three incidents that happened in the given data range, one lasting 1 hour, one lasting 2 hours and one lasting 3 hours. Your MTTR will be: (1 + 2 + 3) / 3 = 2 hours."),(0,a.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's median time to restore service is ",(0,a.kt)("inlineCode",{parentName:"p"},"between one week and six months"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,a.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less one day"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,a.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,a.kt)("td",{parentName:"tr",align:null},"More than one week")))),(0,a.kt)("p",null,(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,a.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Bug or Service Monitoring tools such as PagerDuty, Sentry, etc."),(0,a.kt)("li",{parentName:"ul"},"CI pipelines that marked the 'failed' deployments.")))),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,a.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"If you want to measure the monthly trend of median time to restore service as the picture shown below, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(518).Z,width:"1354",height:"602"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"with _incidents as (\n-- get the incident count each month\n    SELECT\n        date_format(created_date,'%y/%m') as month,\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues\n    WHERE\n        type = 'INCIDENT'\n),\n\n_find_median_mttr_each_month as (\n    SELECT \n        x.*\n    from _incidents x join _incidents y on x.month = y.month\n    WHERE x.lead_time_minutes is not null and y.lead_time_minutes is not null\n    GROUP BY x.month, x.lead_time_minutes\n    HAVING SUM(SIGN(1-SIGN(y.lead_time_minutes-x.lead_time_minutes)))/COUNT(*) > 0.5\n),\n\n_find_mttr_rank_each_month as (\n    SELECT\n        *,\n        rank() over(PARTITION BY month ORDER BY lead_time_minutes) as _rank \n    FROM\n        _find_median_mttr_each_month\n),\n\n_mttr as (\n    SELECT\n        month,\n        lead_time_minutes as med_time_to_resolve\n    from _find_mttr_rank_each_month\n    WHERE _rank = 1\n),\n\n_calendar_months as(\n-- deal with the month with no incidents\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month,\n    case \n        when m.med_time_to_resolve is null then 0 \n        else m.med_time_to_resolve/60 end as med_time_to_resolve_in_hour\nFROM \n    _calendar_months cm\n    left join _mttr m on cm.month = m.month\nORDER BY 1\n")),(0,a.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5213).Z,width:"672",height:"378"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'with _incidents as (\n-- get the incidents created within the selected time period in the top-right corner\n    SELECT\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues\n    WHERE\n        type = \'INCIDENT\'\n        and $__timeFilter(created_date)\n),\n\n_median_mttr as (\n    SELECT \n        x.lead_time_minutes as med_time_to_resolve\n    from _incidents x, _incidents y\n    WHERE x.lead_time_minutes is not null and y.lead_time_minutes is not null\n    GROUP BY x.lead_time_minutes\n    HAVING SUM(SIGN(1-SIGN(y.lead_time_minutes-x.lead_time_minutes)))/COUNT(*) > 0.5\n    LIMIT 1\n)\n\nSELECT \n    case\n        WHEN med_time_to_resolve < 60  then "Less than one hour"\n    WHEN med_time_to_resolve < 24 * 60 then "Less than one Day"\n    WHEN med_time_to_resolve < 7 * 24 * 60  then "Between one day and one week"\n    ELSE "More than one week"\n    END as med_time_to_resolve\nFROM \n    _median_mttr\n')),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use automated tools to quickly report failure"),(0,a.kt)("li",{parentName:"ul"},"Prioritize recovery when a failure happens"),(0,a.kt)("li",{parentName:"ul"},"Establish a go-to action plan to respond to failures immediately"),(0,a.kt)("li",{parentName:"ul"},"Reduce the deployment time for failure-fixing")))}h.isMDXComponent=!0},518:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mttr-monthly-71f037b867c1f94523aa18ca7cd2e497.jpeg"},5213:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mttr-text-d8b5e6799ddda9c692bd6a8fbdf05b0f.jpeg"}}]);