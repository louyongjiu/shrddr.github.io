import{_ as r,o as c,c as h,a as t,r as d,F as v,b as e,d as i,w as a,e as p,f as m,p as g,g as w}from"./index.c75c3c3a.js";const f={},k={class:"q"},y=e(" Q: "),_=e(" A: ");function b(n,u){return c(),h(v,null,[t("div",k,[y,d(n.$slots,"q",{},void 0,!0)]),t("div",null,[_,d(n.$slots,"default",{},void 0,!0)])],64)}const l=r(f,[["render",b],["__scopeId","data-v-02dd3424"]]),o=n=>(g("data-v-c5905055"),n=n(),w(),n),x={class:"about"},j=o(()=>t("h2",null,"Q&A",-1)),C=e(" What is the purpose of this project? "),q=e(" Optimise your "),z=o(()=>t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),W=e(" to bring more silver. "),A=e(" Is there any video or guide? "),P=e(" Don't think so, the basic steps are: "),I=o(()=>t("li",null,"go to Settings, select your server and tax, select what items you keep instead of selling",-1)),S=o(()=>t("li",null,"go to Home, select a town, configure lodging, hire a worker, send to whatever node gives highest M$/day/CP, repeat",-1)),M=e(" ...or, if it seems too daunting, forget everything and just look at Plantzones page, it shows what nodes are good with no user input "),$=e(" What does "),T=o(()=>t("strong",null,"+efficiency",-1)),E=e(" column say in Send Worker dialog and why is it always negative for me? "),V=e(" It shows the change in total M$/day/CP of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),B=e(" Why are node connections so bad? When building path from town "),H=o(()=>t("strong",null,"A",-1)),U=e(" to node "),L=o(()=>t("strong",null,"B",-1)),N=e(", it ignores the fact that there is already taken node "),R=o(()=>t("strong",null,"C",-1)),Y=e(" on the way. "),F=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),G=o(()=>t("strong",null,"B",-1)),O=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),Q=o(()=>t("strong",null,"C",-1)),X=e(". "),D=e(" Where does the drop data come from and how old? "),K=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good. Unlucky drops in Eternal Winter: observed by me in mid 2022. Lucky drops: observed by me in june 2023 "),J=o(()=>t("span",{class:"warning"},"(not exact yet, more observations needed)",-1)),Z=e(" Why are some lucky yields empty in Plantzones table? "),ee=e(" Means luck is disabled on this node, all cycles will be unlucky. Also shown by [\u{1F340}1.00x] indicator in Home page node details, which is relative silver value of lucky vs unlucky cycle "),te=p(`<h2 data-v-c5905055>Tips &amp; tricks</h2><li data-v-c5905055>Anywhere you see a \u25B6, click to expand. Also hover over <abbr title="i am useful" data-v-c5905055>\u2139\uFE0F</abbr>&#39;s and other dot-underlined things to see useful info</li><li data-v-c5905055>Spend some time on item valuation: set <strong data-v-c5905055>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-c5905055>Use <strong data-v-c5905055>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-c5905055>revert</strong> back</li><li data-v-c5905055>If you have nodes invested for grinding, mark them with <strong data-v-c5905055>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-c5905055><li data-v-c5905055>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (see tooltip in Total CP pane: Crypt before Olun = bad, Olun before Crypt = good)</li></ul><li data-v-c5905055>Use <strong data-v-c5905055>import</strong> and <strong data-v-c5905055>export</strong> buttons in <strong data-v-c5905055>All towns/workers list</strong> to: <ul data-v-c5905055><li data-v-c5905055>compare different builds</li><li data-v-c5905055>restore to a known state when messed up</li><li data-v-c5905055>share your setup with other people</li><li data-v-c5905055>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-c5905055><li data-v-c5905055>download and install <a href="https://www.python.org/" data-v-c5905055>Python</a> 3.9+</li><li data-v-c5905055>download the <a href="https://pastebin.com/d4xUtw4Y" data-v-c5905055>Import Script</a>, unzip, run it through Python</li><li data-v-c5905055>now head back to Workerman Home page and import the json file you just created by running the script</li></ul></ul></li><li data-v-c5905055>Workloads (and therefore profits) depend on Modifiers. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-c5905055><li data-v-c5905055>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-c5905055>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-c5905055><li data-v-c5905055>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle</li><li data-v-c5905055>Workloads shown in ~XXX format refer to median (50% chance) value</li><li data-v-c5905055>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-c5905055>Changelog</h2><li data-v-c5905055>darkmode buttons!</li><li data-v-c5905055>[2023-05-31 patch] luck changes (v1 - assuming same droprates across a whole node kind)</li><ul data-v-c5905055><li data-v-c5905055>all nodes of kind 4 (plant growing) and 6 (plant gathering): all luck drops replaced with 0.26x item 1024</li><li data-v-c5905055>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-c5905055>all nodes of kind 8 (lumbering): all luck drops replaced with 1x item 5005, 0.43x 5006, 0.11x 5007, 2.1x item 5008, 1x item 5011</li><li data-v-c5905055>all nodes of kind 11 (dried fish): all luck drops replaced with 0.15x item 1027, 0.5x item 6501</li><li data-v-c5905055>all nodes of kind 15 (excavation): all luck drops replaced with 4x item 1026</li><li data-v-c5905055>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-c5905055>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-c5905055>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-c5905055><li data-v-c5905055>item 1024 = equal chance of 1x any fruit</li><li data-v-c5905055>item 1025 = equal chance of 1x any gem</li><li data-v-c5905055>item 1026 = equal chance of 1x any trace</li><li data-v-c5905055>item 1027 = equal chance of 1x any coral</li></ul><li data-v-c5905055>[2023-05-31 patch] humans got +3 luck</li><li data-v-c5905055>you don&#39;t buy houses anymore, lodging &amp; storage provided automatically</li><ul data-v-c5905055><li data-v-c5905055>for easier prototyping, only working workers consume lodging</li></ul><li data-v-c5905055>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-c5905055>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-c5905055><li data-v-c5905055>each house can be set up in <strong data-v-c5905055>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-c5905055>previously assigned <strong data-v-c5905055>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-c5905055>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-c5905055>on town/node click, map pans to its location</li><li data-v-c5905055>removed 13 nodes that are invisible ingame</li><li data-v-c5905055>added a ranking of untaken nodes in Empire pane</li><li data-v-c5905055>[2023-02-21 patch] updated node CP costs</li><li data-v-c5905055>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-c5905055><li data-v-c5905055>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-c5905055>added more worker types + seamless transition between</li><li data-v-c5905055>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-c5905055>individual plantzone efficiency via cashflow</li><ul data-v-c5905055><li data-v-c5905055>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-c5905055>added farming and workshop job types in Send Worker dialog</li><li data-v-c5905055>/plantzones page tweaks</li><ul data-v-c5905055><li data-v-c5905055>node name link navigates to its map location (upd: with permalinks)</li><li data-v-c5905055>item link navigates to its settings price row</li><li data-v-c5905055>shows item names to allow in-browser search</li><li data-v-c5905055>selects nearest town by CP instead of distance</li></ul><li data-v-c5905055>removed Blue Maned Lion&#39;s Manor</li><li data-v-c5905055>~floating modifiers support</li><li data-v-c5905055>selecting a node highlights connection path</li><li data-v-c5905055>worker job assignment moves to the end of connection queue</li><li data-v-c5905055>worker editor: added button to suggest 7 best skills for current job</li><li data-v-c5905055>map: color active/inactive links</li><li data-v-c5905055>updated connection algorithm to encourage existing paths reuse</li><li data-v-c5905055>[2022-10-26 patch] updated house CP costs</li><li data-v-c5905055>worker revert button, plantzone luck effect indicator</li><li data-v-c5905055>configurable default worker for hire</li><li data-v-c5905055>send worker dialog: show worker stats</li><li data-v-c5905055>worker editor: when on job, show profit changes while editing</li><li data-v-c5905055>node info: show/edit the workload modifier</li><li data-v-c5905055>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-c5905055>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-c5905055>added total daily items summary</li><li data-v-c5905055>added workers+lodging import/export to json file</li><li data-v-c5905055>[2022-09-21 patch] updated several node distances</li><li data-v-c5905055>added worker management</li><li data-v-c5905055>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-c5905055>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-c5905055>Todo</h2><li data-v-c5905055>[2023-05-31 patch]</li><ul data-v-c5905055><li data-v-c5905055>giants +62.2% yield for some (which??) items</li><li data-v-c5905055>level cap 40, +2 skill slots</li><li data-v-c5905055>output redirection (activated at lvl 40)</li></ul><li data-v-c5905055>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-c5905055>remote town workshop job should require connection</li><li data-v-c5905055>when connection node selected, sort shared job list by %</li><li data-v-c5905055>split out personal items storage CP in totals</li><li data-v-c5905055>enforce daily shipbuilding limit</li><li data-v-c5905055>add lodgage cost to untaken ranking</li><li data-v-c5905055>+1/+3 pack_xxx skills should improve profit when packing</li><li data-v-c5905055>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-c5905055>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-c5905055><li data-v-c5905055>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-c5905055>find a consistent fast way to build optimal connections (orderless)</li><li data-v-c5905055>workshop support for lodgage</li><li data-v-c5905055>on item icon hover: show name and price</li><li data-v-c5905055>workerlist: show drops instead of pzname</li><li data-v-c5905055>grade towns/workers graphically with bar charts</li><li data-v-c5905055>map tweaks <ul data-v-c5905055><li data-v-c5905055>node hover: highlight potential path to town</li><li data-v-c5905055>save zoom too in addition to pos</li><li data-v-c5905055>deal with missing tiles</li><li data-v-c5905055>a setting to hide all inactive elements</li></ul></li><li data-v-c5905055>profit calculation: include feed cost, AFK time</li><li data-v-c5905055>smart worker-job rearrangement within a town</li><ul data-v-c5905055><li data-v-c5905055>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-c5905055>show RegionGroups on the map</li><li data-v-c5905055>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><ul data-v-c5905055><li data-v-c5905055>workbenches got renamed to worshops, need english .loc file</li></ul><li data-v-c5905055>introduce skill roll chances somehow</li><ul data-v-c5905055><li data-v-c5905055>help decide which skills should and should not be rerolled?</li><li data-v-c5905055>ex: for existsing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-c5905055>do something smart using current market offers divided by lifetime volume</li><li data-v-c5905055>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-c5905055>show market fetch timestamp</li><h2 data-v-c5905055>Notes</h2><pre class="fsxs" data-v-c5905055>1-5-2 / hk=2557     
cal 278 (s curve, left, down)
efer 2223
val 16808

1-1-3 / hk=2603    
cal 43 (right next to town centre)
efer 2031
val 16617

2-4-1 / hk=3012
val 150
cal 16535
efer 17949</pre><h2 data-v-c5905055>Misc</h2>`,87),ae=e("All Towns Lodging (deprecated)"),oe=e("House Usage"),ie=e("HouseCraft Viewer"),ne=e("Droprates"),le={__name:"AboutView",setup(n){return(u,se)=>{const s=m("RouterLink");return c(),h("div",x,[j,i(l,null,{q:a(()=>[C]),default:a(()=>[q,z,W]),_:1}),i(l,null,{q:a(()=>[A]),default:a(()=>[P,I,S,M]),_:1}),i(l,null,{q:a(()=>[$,T,E]),default:a(()=>[V]),_:1}),i(l,null,{q:a(()=>[B,H,U,L,N,R,Y]),default:a(()=>[F,G,O,Q,X]),_:1}),i(l,null,{q:a(()=>[D]),default:a(()=>[K,J]),_:1}),i(l,null,{q:a(()=>[Z]),default:a(()=>[ee]),_:1}),te,t("p",null,[i(s,{to:"/lodging"},{default:a(()=>[ae]),_:1})]),t("p",null,[i(s,{to:"/workshops"},{default:a(()=>[oe]),_:1})]),t("p",null,[i(s,{to:"/housecraft"},{default:a(()=>[ie]),_:1})]),t("p",null,[i(s,{to:"/droprates"},{default:a(()=>[ne]),_:1})])])}}},re=r(le,[["__scopeId","data-v-c5905055"]]);export{re as default};
