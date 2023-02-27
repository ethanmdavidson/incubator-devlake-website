"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3491],{79792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=a(87462),n=(a(67294),a(3905));a(61839);const r={title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},i=void 0,p={unversionedId:"GettingStarted/HelmSetup",id:"version-v0.15/GettingStarted/HelmSetup",title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",source:"@site/versioned_docs/version-v0.15/GettingStarted/HelmSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/HelmSetup",permalink:"/docs/GettingStarted/HelmSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/GettingStarted/HelmSetup.md",tags:[],version:"v0.15",sidebarPosition:2,frontMatter:{title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Install via Docker Compose",permalink:"/docs/GettingStarted/DockerComposeSetup"},next:{title:"Security and Authentication",permalink:"/docs/GettingStarted/Authentication"}},s={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"You can also check https://github.com/apache/incubator-devlake-helm-chart to make contribution",id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution",level:4},{value:"Install",id:"install",level:3},{value:"Tips:",id:"tips",level:4},{value:"Update",id:"update",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Some example deployments",id:"some-example-deployments",level:2},{value:"Deploy with NodePort",id:"deploy-with-nodeport",level:3},{value:"Deploy with Ingress",id:"deploy-with-ingress",level:3},{value:"Deploy with Ingress (Https)",id:"deploy-with-ingress-https",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:o};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm >= 3.6.0"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes >= 1.19.0")),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("h4",{id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution"},"You can also check ",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/apache/incubator-devlake-helm-chart"},"https://github.com/apache/incubator-devlake-helm-chart")," to make contribution"),(0,n.kt)("h3",{id:"install"},"Install"),(0,n.kt)("p",null,"To install the chart with release name ",(0,n.kt)("inlineCode",{parentName:"p"},"devlake"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nhelm install devlake devlake/devlake --version=0.15.1-beta5\n")),(0,n.kt)("p",null,"And visit your devlake from the node port (32001 by default)."),(0,n.kt)("p",null,"http://YOUR-NODE-IP:32001"),(0,n.kt)("h4",{id:"tips"},"Tips:"),(0,n.kt)("p",null,"If you are using minikube inside your mac, please use the following command to forward the port:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-ui  30090:4000\n")),(0,n.kt)("p",null,"and open another terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-grafana  30091:3000\n")),(0,n.kt)("p",null,"Then you can visit:\nconfig-ui by url ",(0,n.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30090"),"\ngrafana by url ",(0,n.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30091")),(0,n.kt)("h3",{id:"update"},"Update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm upgrade --install devlake devlake/devlake --version=0.15.1-beta5\n")),(0,n.kt)("h3",{id:"uninstall"},"Uninstall"),(0,n.kt)("p",null,"To uninstall/delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"devlake")," release:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall devlake\n")),(0,n.kt)("h2",{id:"some-example-deployments"},"Some example deployments"),(0,n.kt)("h3",{id:"deploy-with-nodeport"},"Deploy with NodePort"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IP Address of Kubernetes node: 192.168.0.6"),(0,n.kt)("li",{parentName:"ul"},"Want to visit devlake with port 30000.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install devlake . --set service.uiPort=30000\n")),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"http://192.168.0.6:30000"},"http://192.168.0.6:30000")),(0,n.kt)("h3",{id:"deploy-with-ingress"},"Deploy with Ingress"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I have already configured default ingress for the Kubernetes cluster"),(0,n.kt)("li",{parentName:"ul"},"I want to use ",(0,n.kt)("a",{parentName:"li",href:"http://devlake.example.com"},"http://devlake.example.com")," for visiting devlake")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'helm install devlake . --set "ingress.enabled=true,ingress.hostname=devlake.example.com"\n')),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"http://devlake.example.com"},"http://devlake.example.com"),", and grafana at ",(0,n.kt)("a",{parentName:"p",href:"http://devlake.example.com/grafana"},"http://devlake.example.com/grafana")),(0,n.kt)("h3",{id:"deploy-with-ingress-https"},"Deploy with Ingress (Https)"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I have already configured ingress(class: nginx) for the Kubernetes cluster, and the https using 8443 port."),(0,n.kt)("li",{parentName:"ul"},"I want to use ",(0,n.kt)("a",{parentName:"li",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443")," for visiting devlake."),(0,n.kt)("li",{parentName:"ul"},"The https certificates are generated by letsencrypt.org, and the certificate and key files: ",(0,n.kt)("inlineCode",{parentName:"li"},"cert.pem")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"key.pem"))),(0,n.kt)("p",null,"First, create the secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl create secret tls ssl-certificate --cert cert.pem --key secret.pem\n")),(0,n.kt)("p",null,"Then, deploy the devlake:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'helm install devlake . \\\n    --set "ingress.enabled=true,ingress.enableHttps=true,ingress.hostname=devlake-0.example.com" \\\n    --set "ingress.className=nginx,ingress.httpsPort=8443" \\\n    --set "ingress.tlsSecretName=ssl-certificate"\n')),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443"),", and grafana at ",(0,n.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443/grafana"},"https://devlake-0.example.com:8443/grafana")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"Some useful parameters for the chart, you could also check them in values.yaml"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"replicaCount"),(0,n.kt)("td",{parentName:"tr",align:null},"Replica Count for devlake, currently not used"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.useExternal"),(0,n.kt)("td",{parentName:"tr",align:null},"If use external mysql server, currently not used"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.externalServer"),(0,n.kt)("td",{parentName:"tr",align:null},"External mysql server address"),(0,n.kt)("td",{parentName:"tr",align:null},"127.0.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.externalPort"),(0,n.kt)("td",{parentName:"tr",align:null},"External mysql server port"),(0,n.kt)("td",{parentName:"tr",align:null},"3306")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.username"),(0,n.kt)("td",{parentName:"tr",align:null},"username for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"merico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.password"),(0,n.kt)("td",{parentName:"tr",align:null},"password for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"merico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.database"),(0,n.kt)("td",{parentName:"tr",align:null},"database for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"lake")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.rootPassword"),(0,n.kt)("td",{parentName:"tr",align:null},"root password for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.storage.class"),(0,n.kt)("td",{parentName:"tr",align:null},"storage class for mysql's volume"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.storage.size"),(0,n.kt)("td",{parentName:"tr",align:null},"volume size for mysql's data"),(0,n.kt)("td",{parentName:"tr",align:null},"5Gi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"mysql")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"image tag for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"IfNotPresent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for grafana's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake-dashboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"image tag for grafana's image"),(0,n.kt)("td",{parentName:"tr",align:null},"latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for grafana's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.storage.class"),(0,n.kt)("td",{parentName:"tr",align:null},"storage class for lake's volume"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.storage.size"),(0,n.kt)("td",{parentName:"tr",align:null},"volume size for lake's data"),(0,n.kt)("td",{parentName:"tr",align:null},"100Mi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for lake's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"image tag for lake's image"),(0,n.kt)("td",{parentName:"tr",align:null},"latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for lake's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.loggingDir"),(0,n.kt)("td",{parentName:"tr",align:null},"the root logging directory of Devlake"),(0,n.kt)("td",{parentName:"tr",align:null},"/app/logs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for ui's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake-config-ui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"image tag for ui's image"),(0,n.kt)("td",{parentName:"tr",align:null},"latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for ui's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.type"),(0,n.kt)("td",{parentName:"tr",align:null},"Service type for exposed service"),(0,n.kt)("td",{parentName:"tr",align:null},"NodePort")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.uiPort"),(0,n.kt)("td",{parentName:"tr",align:null},"Service port for config ui"),(0,n.kt)("td",{parentName:"tr",align:null},"32001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"If enable ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.enableHttps"),(0,n.kt)("td",{parentName:"tr",align:null},"If enable https"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.className"),(0,n.kt)("td",{parentName:"tr",align:null},"The class name for ingressClass. If leave empty, the default IngressClass will be used"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname/domainname for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"localhost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.prefix"),(0,n.kt)("td",{parentName:"tr",align:null},"The prefix for endpoints, currently not supported due to devlake's implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.tlsSecretName"),(0,n.kt)("td",{parentName:"tr",align:null},"The secret name for tls's certificate, required when https enabled"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.httpPort"),(0,n.kt)("td",{parentName:"tr",align:null},"The http port for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.httpsPort"),(0,n.kt)("td",{parentName:"tr",align:null},"The https port for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.localtime"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostpath for mount as /etc/localtime"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/localtime")))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into any problem, please check the ",(0,n.kt)("a",{parentName:"p",href:"/docs/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0}}]);