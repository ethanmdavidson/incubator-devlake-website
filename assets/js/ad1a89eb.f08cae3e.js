"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[972],{5464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(1839);const l={title:"Kubernetes Setup",description:"The steps to install Apache DevLake in Kubernetes\n",sidebar_position:2},r=void 0,o={unversionedId:"QuickStart/KubernetesSetup",id:"version-v0.11/QuickStart/KubernetesSetup",title:"Kubernetes Setup",description:"The steps to install Apache DevLake in Kubernetes\n",source:"@site/versioned_docs/version-v0.11/QuickStart/KubernetesSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/KubernetesSetup",permalink:"/docs/v0.11/QuickStart/KubernetesSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/QuickStart/KubernetesSetup.md",tags:[],version:"v0.11",sidebarPosition:2,frontMatter:{title:"Kubernetes Setup",description:"The steps to install Apache DevLake in Kubernetes\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Local Setup",permalink:"/docs/v0.11/QuickStart/LocalSetup"},next:{title:"Grafana User Guide",permalink:"/docs/v0.11/UserManuals/GrafanaUserGuide"}},p={},s=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2}],d={toc:s};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We provide a sample ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/blob/main/k8s-deploy.yaml"},"k8s-deploy.yaml")," for users interested in deploying Apache DevLake on a k8s cluster."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/blob/main/k8s-deploy.yaml"},"k8s-deploy.yaml")," will create a namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," on your k8s cluster, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePort 30004")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePort 30002")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana")," dashboards. If you would like to use certain version of Apache DevLake, please update the image tag of ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," services to specify versions like ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.10.1"),"."),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/k8s-deploy.yaml"},"k8s-deploy.yaml")," to local machine"),(0,i.kt)("li",{parentName:"ol"},"Some key points:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")," deployment:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRAFANA_ENDPOINT"),": FQDN of grafana service which can be reached from user's browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEVLAKE_ENDPOINT"),": FQDN of devlake service which can be reached within k8s cluster, normally you don't need to change it unless namespace was changed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_USER"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_PASS"),": Not required, but highly recommended"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devlake-config")," config map:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_ROOT_PASSWORD"),": set root password for ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql"),"  service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," deployment:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": update this value if  ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE")," were changed"))))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," deployment store its configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/.env"),". In our sample yaml, we use ",(0,i.kt)("inlineCode",{parentName:"li"},"hostPath")," volume, so please make sure directory ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/devlake")," exists on your k8s workers, or employ other techniques to persist ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/.env")," file. Please do NOT mount the entire ",(0,i.kt)("inlineCode",{parentName:"li"},"/app")," directory, because plugins are located in ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/bin")," folder."),(0,i.kt)("li",{parentName:"ol"},"Finally, execute the following command, Apache DevLake should be up and running:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"```sh\nkubectl apply -f k8s-deploy.yaml\n```\n")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))))}k.isMDXComponent=!0}}]);