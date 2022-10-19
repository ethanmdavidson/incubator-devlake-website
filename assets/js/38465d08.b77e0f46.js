"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7644],{3156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const s={slug:"how-DevLake-is-up-and-running",title:"How DevLake is Up and Running",authors:"warren",tags:["devlake","apache"]},o=void 0,r={permalink:"/blog/how-DevLake-is-up-and-running",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-17-How DevLake is up and running/index.md",source:"@site/blog/2022-06-17-How DevLake is up and running/index.md",title:"How DevLake is Up and Running",description:"Apache DevLake is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model.",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"devlake",permalink:"/blog/tags/devlake"},{label:"apache",permalink:"/blog/tags/apache"}],readingTime:3.466666666666667,hasTruncateMarker:!0,authors:[{name:"Warren Chen",title:"Apache DevLake PPMC",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"how-DevLake-is-up-and-running",title:"How DevLake is Up and Running",authors:"warren",tags:["devlake","apache"]},prevItem:{title:"Compatibility of Apache DevLake with PostgreSQL",permalink:"/blog/compatibility-of-apache-devLake-with-postgreSQL"},nextItem:{title:"Apache Incubator Welcomes DevLake, A Dev-Data Platform Serving Developers",permalink:"/blog/apache-welcomes-devlake"}},l={authorsImageUrls:[void 0]},p=[{value:"Apache DevLack Architecture Overview",id:"apache-devlack-architecture-overview",level:3},{value:"Start the system",id:"start-the-system",level:3},{value:"The execution principle of DevLake",id:"the-execution-principle-of-devlake",level:3},{value:"Important interfaces in DevLake",id:"important-interfaces-in-devlake",level:2},{value:"Further Plan",id:"further-plan",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model."),(0,i.kt)("h3",{id:"apache-devlack-architecture-overview"},"Apache DevLack Architecture Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The left side of the following screenshot is an ",(0,i.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"integrative DevOps data plugin"),", the existing plugins include Github, GitLab, JIRA, Jenkins, Tapd, Feishu, and the most featured analysis engine in the Simayi platform."),(0,i.kt)("li",{parentName:"ul"},"The main framework in the middle of the following screenshot, completes data collection, expansion, and conversion to the domain layer by running subtasks in the plugins. The user can trigger the tasks by config-UI or all API."),(0,i.kt)("li",{parentName:"ul"},"RMDBS currently supports Mysql and PostgresSQL, more databases will be supported in the future."),(0,i.kt)("li",{parentName:"ul"},"Grafana can generate different types of needed data by using SQL.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(6377).Z,width:"567",height:"310"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Then let\u2019s move on to how to start running DevLake.")),(0,i.kt)("h3",{id:"start-the-system"},"Start the system"),(0,i.kt)("p",null,"Before the Golang program runs, it will automatically call the init() method in the package. We need to focus on the loading of the services package. The following code has detailed comments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\nvar err error\n// get initial config information\ncfg = config.GetConfig()\n// get Database\ndb, err = runner.NewGormDb(cfg, logger.Global.Nested("db"))\n// configure time zone\nlocation := cron.WithLocation(time.UTC)\n// create scheduled task manager\ncronManager = cron.New(location)\nif err != nil {\npanic(err)\n}\n// initialize the data migration\nmigration.Init(db)\n// register the framework\'s data migration scripts\nmigrationscripts.RegisterAll()\n// load plugin, loads all .so files in the folder cfg.GetString("PLUGIN_DIR")\uff0cin th LoadPlugins method()\uff0cspecifically, LoadPlugins stores the pluginName:PluginMeta key-value pair into core.plugins by calling runner.\nerr = runner.LoadPlugins(\ncfg.GetString("PLUGIN_DIR"),\ncfg,\nlogger.Global.Nested("plugin"),\ndb,\n)\nif err != nil {\npanic(err)\n}\n// run data migration scripts to complete the initializztion work of tables in the databse framework layer.\nerr = migration.Execute(context.Background())\nif err != nil {\npanic(err)\n}\n\n// call service init\npipelineServiceInit()\n}\n\n')),(0,i.kt)("h3",{id:"the-execution-principle-of-devlake"},"The execution principle of DevLake"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The running process of the pipeline"),"\nBefore we go through the pipeline process, we need to know the ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Glossary#blueprints"},"Blueprint")," first."),(0,i.kt)("p",null,"Blueprint is a timed task that contains all the subtasks and plans that need to be executed. Each execution record of Blueprint is a historical run, AKA Pipeline. Which presents a trigger for DevLack to complete one or more data collection transformation tasks through one or more plugins."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(4832).Z,width:"567",height:"263"})),(0,i.kt)("p",null,"The following is the pipeline running flow chart."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(9257).Z,width:"664",height:"1106"})),(0,i.kt)("p",null,"A pipeline contains a two-dimensional array of tasks, mainly to ensure that a series of tasks are executed in a preset order. Like the following screenshot if the plugin of Stage 3 needs to rely on the other plugin to prepare the data(eg: the operation of refdiff needs to rely on gitextractor and Github, for more information on data sources and plugins, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"documentation"),", then when Stage 3 starts to execute, it needs to ensure that its dependencies have been executed in Stage 1 and Stage 2."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(7942).Z,width:"567",height:"238"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Task running process")),(0,i.kt)("p",null,"The plugin tasks in stage1, stage2, and stage3 are executed in parallel:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(5662).Z,width:"664",height:"1036"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The next step is to execute the subtasks in the plugin sequentially.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(1074).Z,width:"760",height:"1294"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The work before the RunTask is to prepare the params for the RunTask method to call, like logger, db, context and etc."),(0,i.kt)("li",{parentName:"ol"},"The main method of RunTask is mainly to update the tasks in the Database, at the same time prepare to run the options of the plugins task."),(0,i.kt)("li",{parentName:"ol"},"RunpluginTask will obtain the corresponding  ",(0,i.kt)("a",{parentName:"li",href:"#pm"},"PluginMeta")," through core.Getplugin(pluginName), then obtains the ",(0,i.kt)("a",{parentName:"li",href:"#pt"},"PluginTask")," via PluginMeta, and then executes RunPluginSubTasks.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The running process of each plugin subtask(the relevant interface and func will be explained in the next section)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generated",src:a(655).Z,width:"1586",height:"600"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all available subtasks subtaskMeta of all th4e plugins by calling SubTaskMetas()."),(0,i.kt)("li",{parentName:"ol"},"Use options","[\u2018task\u2019]"," and subtaskMeta to form a set of subtasks to be executed subtaskMetas."),(0,i.kt)("li",{parentName:"ol"},"Calculate how many subtasks in total"),(0,i.kt)("li",{parentName:"ol"},"Build taskCtx via helper.NewDefaultTaskContext."),(0,i.kt)("li",{parentName:"ol"},"Build taskData via call pluginTask.PrepareTaskData."),(0,i.kt)("li",{parentName:"ol"},"Iterate over all subtasks in subtaskMetas.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Get subtaskCtx of subtask via call taskCtx.SubTaskContext(subtaskMeta.Name)."),(0,i.kt)("li",{parentName:"ol"},"Run subtaskMeta.EntryPoint(subtaskCtx)")))),(0,i.kt)("h2",{id:"important-interfaces-in-devlake"},"Important interfaces in DevLake"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"pm"},"PluginMeta"),": Contains the two basic methods of plugins, which all plugins need to implement. And stored in core.plugins when the system starts. And obtained through core.GetPlugin when executing plugin tasks.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type PluginMeta interface {\n   Description() string\n   //PkgPath information will be lost when compiled as plugin(.so), this func will return that info\n   RootPkgPath() string\n}\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"pt"},"PluginTask"),": It can be obtained by PluginMeta, after the plugin implemented this method, Framework can run the subtask directly, instead of letting the plugin itself run it, the biggest benefit of this is that the subtasks of the plugin are easier to implement, and we can more easily leverage(such as adding logs, etc.) during the operation of the plugin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type PluginTask interface {\n   // return all available subtasks, framework will run them for you in order\n   SubTaskMetas() []SubTaskMeta\n   // based on task context and user input options, return data that shared among all subtasks\n   PrepareTaskData(taskCtx TaskContext, options map[string]interface{}) (interface{}, error)\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Every plugin has a ",(0,i.kt)("a",{id:"td"},"taskData"),", which contains configuration options, apiClient, and other properties of plugins.(like the github has repo information)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"stm"},"SubTaskMeta"),":: the meta data of a subtask, every subtask will define a SubTaskMeta.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var CollectMeetingTopUserItemMeta = core.SubTaskMeta{\n   Name: "collectMeetingTopUserItem",\n   EntryPoint: CollectMeetingTopUserItem,\n   EnabledByDefault: true,\n   Description: "Collect top user meeting data from Feishu api",\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"ec"},"ExecContext"),": defines all resources needed to execute (sub)tasks."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"stc"},"SubTaskContext"),": defines all resources need to execute subtask(including ExecContext)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"tc"},"TaskContext"),": defines all resources need to execute tasks(including ExecContext). The difference with SubTaskContext is the TaskContext() method in SubTaskContext can retire TaskContext, but SubTaskContext(subtask string) method in TaskContext can return SubTaskContext, which means the subtask belongs to the plugin task, so we use the different contexts to distinguish this."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{id:"step"},"SubTaskEntryPoint"),": all the subtasks in the plugin have to implement this function so that they can be coordinated and arranged by the framework layer.")),(0,i.kt)("h2",{id:"further-plan"},"Further Plan"),(0,i.kt)("p",null,"This blog introduced the basics of the DevLack framework and how it starts and runs, there are 3 more contexts api","_","collector, api","_","extractor, and data","_","convertor will be explained in the next blog."))}u.isMDXComponent=!0},6377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001-9fe996eee294ce1843bc3f126a1a7b89.png"},4832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.002-40065677c2b00df89eeaac1d9512f286.png"},9257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.003-74567cb3674a6e2d6c980cc4c4182217.png"},7942:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.004-a6a550c4f00b232abc7b28e30738be09.png"},5662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.005-d300a6d714d498f9097b571e386d4acf.png"},1074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.006-7ad36df1d8f947cba6e34c8e3c54cf25.png"},655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.007-f26dbf5692430e807fb782d9233f53f3.png"}}]);