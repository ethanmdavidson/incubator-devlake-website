"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[45766],{34334:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=t(87462),n=(t(67294),t(3905));t(61839);const r={},i="DevLake Release Guide",p={unversionedId:"DeveloperManuals/Release-SOP",id:"version-v0.16/DeveloperManuals/Release-SOP",title:"DevLake Release Guide",description:"Please make sure your public key was included in the https://downloads.apache.org/incubator/devlake/KEYS , if not, please update this file first.",source:"@site/versioned_docs/version-v0.16/DeveloperManuals/Release-SOP.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Release-SOP",permalink:"/docs/v0.16/DeveloperManuals/Release-SOP",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/DeveloperManuals/Release-SOP.md",tags:[],version:"v0.16",frontMatter:{},sidebar:"docsSidebar",previous:{title:"E2E Test Guide",permalink:"/docs/v0.16/DeveloperManuals/E2E-Test-Guide"},next:{title:"UnitTest Test Guide",permalink:"/docs/v0.16/DeveloperManuals/UnitTest"}},s={},o=[{value:"How to update KEYS",id:"how-to-update-keys",level:2},{value:"ASF Release Policy",id:"asf-release-policy",level:2},{value:"Tools:",id:"tools",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Pack",id:"pack",level:2},{value:"Upload",id:"upload",level:2},{value:"Vote",id:"vote",level:2},{value:"Release",id:"release",level:2},{value:"Apache",id:"apache",level:3},{value:"GitHub",id:"github",level:3}],c={toc:o};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"devlake-release-guide"},"DevLake Release Guide"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please make sure your public key was included in the ",(0,n.kt)("a",{parentName:"strong",href:"https://downloads.apache.org/incubator/devlake/KEYS"},"https://downloads.apache.org/incubator/devlake/KEYS")," , if not, please update this file first.")),(0,n.kt)("h2",{id:"how-to-update-keys"},"How to update KEYS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the svn repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/incubator/devlake\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Append your public key to the KEYS file\ncd devlake"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check if your public key is in the KEYS file"),(0,n.kt)("li",{parentName:"ul"},"If it does not, create a new ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key"},"GPG key"),", and then run the following command to see if it was successful.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-sigs <your name>\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Append your publick key")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"    gpg --armor --export <your name> >> KEYS\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'svn add KEYS\nsvn commit -m "update KEYS"\nsvn cp https://dist.apache.org/repos/dist/dev/incubator/devlake/KEYS https://dist.apache.org/repos/dist/release/incubator/devlake/ -m "update KEYS"\n')),(0,n.kt)("p",{parentName:"li"},"We will use ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.14.0")," as an example to demonstrate the release process."))),(0,n.kt)("h2",{id:"asf-release-policy"},"ASF Release Policy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"https://www.apache.org/legal/release-policy.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://incubator.apache.org/guides/releasemanagement.html"},"https://incubator.apache.org/guides/releasemanagement.html"))),(0,n.kt)("h2",{id:"tools"},"Tools:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gpg")," creating and verifying the signature"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shasum")," creating and verifying the checksum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git")," checkout and pack the codebase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"svn")," uploading the code to the Apache code hosting server")),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check against the Incubator Release Checklist"),(0,n.kt)("li",{parentName:"ul"},"Create folder ",(0,n.kt)("inlineCode",{parentName:"li"},"releases/lake-v0.14.0")," and put the two files ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example")," in there."),(0,n.kt)("li",{parentName:"ul"},"Update the file ",(0,n.kt)("inlineCode",{parentName:"li"},".github/ISSUE_TEMPLATE/bug-report.yml")," to include the version ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.14.0"))),(0,n.kt)("h2",{id:"pack"},"Pack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Checkout to the branch/commit")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/incubator-devlake.git\ncd incubator-devlake\ngit checkout b268d53a48edb26d3c9b73b782798703f068f655\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tag the commit and push to origin"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git tag v0.14.0-rc1\ngit push origin v0.14.0-rc1\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pack the code"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git archive --format=tar.gz --output="<the-output-dir>/apache-devlake-0.14.0-incubating-src.tar.gz" --prefix="apache-devlake-0.14.0-incubating-src/" v0.14.0-rc1\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Before proceeding to the next step, please make sure your public key was included in the ",(0,n.kt)("a",{parentName:"p",href:"https://downloads.apache.org/incubator/devlake/KEYS"},"https://downloads.apache.org/incubator/devlake/KEYS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create signature and checksum"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd <the-output-dir>\ngpg -s --armor --output apache-devlake-0.14.0-incubating-src.tar.gz.asc --detach-sig apache-devlake-0.14.0-incubating-src.tar.gz\nshasum -a 512  apache-devlake-0.14.0-incubating-src.tar.gz > apache-devlake-0.14.0-incubating-src.tar.gz.sha512\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify signature and checksum"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify apache-devlake-0.14.0-incubating-src.tar.gz.asc apache-devlake-0.14.0-incubating-src.tar.gz\nshasum -a 512 --check apache-devlake-0.14.0-incubating-src.tar.gz.sha512\n")))),(0,n.kt)("h2",{id:"upload"},"Upload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clone the svn repository",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/incubator/devlake\n"))),(0,n.kt)("li",{parentName:"ul"},"Copy the files into the svn local directory",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd devlake\nmkdir -p 0.14.0-incubating-rc1\ncp <the-output-dir>/apache-devlake-0.14.0-incubating-src.tar.gz* 0.14.0-incubating-rc1/\n"))),(0,n.kt)("li",{parentName:"ul"},"Upload local files",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'svn add 0.14.0-incubating-rc1\nsvn commit -m "add 0.14.0-incubating-rc1"\n')))),(0,n.kt)("h2",{id:"vote"},"Vote"),(0,n.kt)("p",null,"You can check ",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"Incubator Release Checklist")," before voting."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Devlake community vote:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Start the vote by sending an email to ",(0,n.kt)("a",{parentName:"li",href:"mailto:dev@devlake.apache.org"},"dev@devlake.apache.org"),(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/s6jj2tl5mlyb8jpdd88jmo5woydzhp54"},"[VOTE] Release Apache DevLake (Incubating) v0.14.0-rc1")),(0,n.kt)("li",{parentName:"ul"},"Announce the vote result:\n",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/mb5sxdopprqksf1ppfggkvkwxs6110zk"},"[RESULT][VOTE] Release Apache DevLake (Incubating) v0.14.0-rc1")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apache incubator community vote:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Start the vote by sending an email to ",(0,n.kt)("a",{parentName:"li",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org"),(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/lgfrsv0ymfk1c19ngnkkn46cspkf76lg"},"[VOTE] Release Apache DevLake (Incubating) v0.14.0-rc1")),(0,n.kt)("li",{parentName:"ul"},"Announce the vote result:\n",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/2xoqzymgvnrvrbn9dwsby39olotvt6oj"},"[RESULT][VOTE] Release Apache DevLake (Incubating) v0.14.0-rc1"))))),(0,n.kt)("h2",{id:"release"},"Release"),(0,n.kt)("h3",{id:"apache"},"Apache"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Move the release to the ASF content distribution system",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/devlake/0.14.0-incubating-rc1 https://dist.apache.org/repos/dist/release/incubator/devlake/0.14.0-incubating -m "transfer packages for 0.14.0-incubating-rc1"\n'))),(0,n.kt)("li",{parentName:"ul"},"Wait until the directory ",(0,n.kt)("inlineCode",{parentName:"li"},"https://downloads.apache.org/incubator/devlake/0.14.0-incubating/")," was created"),(0,n.kt)("li",{parentName:"ul"},"Remove the last release from ",(0,n.kt)("inlineCode",{parentName:"li"},"https://downloads.apache.org/")," (according the Apache release policy, this link should be pointing to the current release)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'svn rm https://dist.apache.org/repos/dist/release/incubator/devlake/0.11.0-incubating -m "remove 0.11.0-incubating"\n'))),(0,n.kt)("li",{parentName:"ul"},"Announce release by sending an email to ",(0,n.kt)("a",{parentName:"li",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org"),(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/401p8xm8tcp9tplh2sdht7dnrbs03rht"},"[ANNOUNCE] Release Apache Devlake(incubating) 0.14.0-incubating"))),(0,n.kt)("h3",{id:"github"},"GitHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create tag v0.14.0 and push",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout v0.14.0-rc1\ngit tag v0.14.0\ngit push origin v0.14.0\n"))),(0,n.kt)("li",{parentName:"ul"},"Open the URL ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/apache/incubator-devlake/releases/"),", draft a new release, fill in the form and upload two files ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example"))))}u.isMDXComponent=!0}}]);