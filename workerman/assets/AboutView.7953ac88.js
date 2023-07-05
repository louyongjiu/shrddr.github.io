import{_ as d,o as r,c as h,a as t,r as s,F as v,b as e,d as i,w as o,e as p,f as g,p as m,g as f}from"./index.a944f196.js";const w={},k={class:"q"},_=e(" Q: "),y=e(" A: ");function b(n,u){return r(),h(v,null,[t("div",k,[_,s(n.$slots,"q",{},void 0,!0)]),t("div",null,[y,s(n.$slots,"default",{},void 0,!0)])],64)}const l=d(w,[["render",b],["__scopeId","data-v-02dd3424"]]),a=n=>(m("data-v-c330e9c4"),n=n(),f(),n),x={class:"about"},j=a(()=>t("h2",null,"Q&A",-1)),q=e(" What is the purpose of this project? "),C=e(" Optimise your "),z=a(()=>t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),M=e(" to bring more silver. "),W=e(" Is there any video or guide? "),A=e(" Don't think so, the basic steps are: "),I=a(()=>t("li",null,"go to Settings, select your server and tax, select what items you keep instead of selling",-1)),S=a(()=>t("li",null,"go to Home, select a town, configure lodging, hire a worker, send to whatever node gives highest M$/day/CP, repeat",-1)),P=e(" ...or, if it seems too daunting, forget everything and just look at Plantzones page, it shows what nodes are good with no user input "),L=e(" What does "),$=a(()=>t("strong",null,"+efficiency",-1)),N=e(" column say in Send Worker dialog and why is it always negative for me? "),T=e(" It shows the change in total M$/day/CP of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),E=e(" Why are node connections so bad? When building path from town "),B=a(()=>t("strong",null,"A",-1)),V=e(" to node "),H=a(()=>t("strong",null,"B",-1)),R=e(", it ignores the fact that there is already taken node "),U=a(()=>t("strong",null,"C",-1)),Y=e(" on the way. "),D=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),F=a(()=>t("strong",null,"B",-1)),G=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),O=a(()=>t("strong",null,"C",-1)),Q=e(". "),X=e(" Where does the drop data come from and how old? "),J=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),Z=a(()=>t("br",null,null,-1)),K=e(" Unlucky drops in Eternal Winter: observed by me in mid 2022."),ee=a(()=>t("br",null,null,-1)),te=e(" Lucky drops: observed by me in june 2023 - "),ae=a(()=>t("span",{class:"note"},"not exact yet, more observations needed",-1)),oe=a(()=>t("br",null,null,-1)),ie=e(" Morning Land drops: observed by me in june 2023 - regular nodes are fine, "),ne=a(()=>t("span",{class:"warning"},"excavations use tentative values",-1)),le=e(", reasonably accurate measurements are going to take a while "),ce=p(`<h2 data-v-c330e9c4>Tips &amp; tricks</h2><li data-v-c330e9c4>Anywhere you see a \u25B6, click to expand. Also hover over <abbr title="water is wet" data-v-c330e9c4>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-c330e9c4>dot-underlined</abbr> things to see useful info</li><li data-v-c330e9c4>Spend some time on item valuation on Settings page: set <strong data-v-c330e9c4>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-c330e9c4>Use <strong data-v-c330e9c4>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-c330e9c4>revert</strong> back</li><ul data-v-c330e9c4><li data-v-c330e9c4>you can also change the type of worker any time and it will recalculate the stats as if levelled from scratch with same stat rolls</li></ul><li data-v-c330e9c4>If you have nodes invested for grinding, mark them with <strong data-v-c330e9c4>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-c330e9c4><li data-v-c330e9c4>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-c330e9c4>Total CP</strong> pane</li></ul><li data-v-c330e9c4>Use <strong data-v-c330e9c4>import</strong> and <strong data-v-c330e9c4>export</strong> buttons in <strong data-v-c330e9c4>All towns/workers list</strong> to: <ul data-v-c330e9c4><li data-v-c330e9c4>compare different builds</li><li data-v-c330e9c4>restore to a known state when messed up</li><li data-v-c330e9c4>share your setup with other people</li><li data-v-c330e9c4>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-c330e9c4><li data-v-c330e9c4>download and install <a href="https://www.python.org/" data-v-c330e9c4>Python</a> 3.9+</li><li data-v-c330e9c4>download the <a href="https://pastebin.com/ZHMC7fkE" data-v-c330e9c4>Import Script</a>, unzip, run it through Python</li><li data-v-c330e9c4>now head back to Workerman Home page and import the json file you just created by running the script</li></ul></ul></li><li data-v-c330e9c4>Workloads (and therefore profits) depend on <strong data-v-c330e9c4>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-c330e9c4><li data-v-c330e9c4>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-c330e9c4>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-c330e9c4><li data-v-c330e9c4>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-c330e9c4>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-c330e9c4>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-c330e9c4>Changelog</h2><li data-v-c330e9c4>[2023-06-05 patch] added node 1833</li><li data-v-c330e9c4>[2023-05-31 patch] big rework</li><ul data-v-c330e9c4><li data-v-c330e9c4>level cap 40, +2 skill slots</li><li data-v-c330e9c4>humans got +3 luck</li><li data-v-c330e9c4>giants got +68.4% yield of <s data-v-c330e9c4>all</s> all unlucky drops, rounded down</li></ul><li data-v-c330e9c4>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-c330e9c4>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-c330e9c4>in darkmode, buttons are now actually dark</li><li data-v-c330e9c4>[2023-05-31 patch] new luck drops (v4 - assuming same droprates across a whole node kind; lotml sacks reduced)</li><ul data-v-c330e9c4><li data-v-c330e9c4>all nodes of kind 4 (plant growing) and 6 (plant gathering): all luck drops replaced with 0.25x item 1024 (0.17x for LotML)</li><li data-v-c330e9c4>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-c330e9c4>all nodes of kind 8 (lumbering): all luck drops replaced with 0.91x item 5005, 0.5x 5006, 0.13x item 5007, 2.14x item 5008, 0.93x item 5011</li><li data-v-c330e9c4>all nodes of kind 11 (dried fish): all luck drops replaced with 0.24x item 1027, 0.64x item 6501</li><li data-v-c330e9c4>all nodes of kind 15 (excavation): all luck drops replaced with 3.96x item 1026</li><li data-v-c330e9c4>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-c330e9c4>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-c330e9c4>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-c330e9c4><li data-v-c330e9c4>item 1024 = equal chance of 1x any fruit</li><li data-v-c330e9c4>item 1025 = equal chance of 1x any gem</li><li data-v-c330e9c4>item 1026 = equal chance of 1x any trace</li><li data-v-c330e9c4>item 1027 = equal chance of 1x any coral</li></ul><li data-v-c330e9c4>you don&#39;t buy houses anymore, lodging &amp; storage provided automatically</li><ul data-v-c330e9c4><li data-v-c330e9c4>be careful to not exceed the town limits, profits will show <strong data-v-c330e9c4>NaN</strong>&#39;s and <strong data-v-c330e9c4>?</strong>&#39;s if you do</li><li data-v-c330e9c4>for easier prototyping, only working workers consume lodging</li></ul><li data-v-c330e9c4>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-c330e9c4>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-c330e9c4><li data-v-c330e9c4>each house can be set up in <strong data-v-c330e9c4>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-c330e9c4>previously assigned <strong data-v-c330e9c4>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-c330e9c4>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-c330e9c4>on town/node click, map pans to its location</li><li data-v-c330e9c4>removed 13 nodes that are invisible ingame</li><li data-v-c330e9c4>added a ranking of untaken nodes in Empire pane</li><li data-v-c330e9c4>[2023-02-21 patch] updated node CP costs</li><li data-v-c330e9c4>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-c330e9c4><li data-v-c330e9c4>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-c330e9c4>added more worker types + seamless transition between</li><li data-v-c330e9c4>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-c330e9c4>individual plantzone efficiency via cashflow</li><ul data-v-c330e9c4><li data-v-c330e9c4>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-c330e9c4>added farming and workshop job types in Send Worker dialog</li><li data-v-c330e9c4>/plantzones page tweaks</li><ul data-v-c330e9c4><li data-v-c330e9c4>node name link navigates to its map location (upd: with permalinks)</li><li data-v-c330e9c4>item link navigates to its settings price row</li><li data-v-c330e9c4>shows item names to allow in-browser search</li><li data-v-c330e9c4>selects nearest town by CP instead of distance</li></ul><li data-v-c330e9c4>removed Blue Maned Lion&#39;s Manor</li><li data-v-c330e9c4>~floating modifiers support</li><li data-v-c330e9c4>selecting a node highlights connection path</li><li data-v-c330e9c4>worker job assignment moves to the end of connection queue</li><li data-v-c330e9c4>worker editor: added button to suggest best skills for current job</li><li data-v-c330e9c4>map: color active/inactive links</li><li data-v-c330e9c4>updated connection algorithm to encourage existing paths reuse</li><li data-v-c330e9c4>[2022-10-26 patch] updated house CP costs</li><li data-v-c330e9c4>worker revert button, plantzone luck effect indicator</li><li data-v-c330e9c4>configurable default worker for hire</li><li data-v-c330e9c4>send worker dialog: show worker stats</li><li data-v-c330e9c4>worker editor: when on job, show profit changes while editing</li><li data-v-c330e9c4>node info: show/edit the workload modifier</li><li data-v-c330e9c4>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-c330e9c4>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-c330e9c4>added total daily items summary</li><li data-v-c330e9c4>added workers+lodging import/export to json file</li><li data-v-c330e9c4>[2022-09-21 patch] updated several node distances</li><li data-v-c330e9c4>added worker management</li><li data-v-c330e9c4>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-c330e9c4>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-c330e9c4>Todo</h2><li data-v-c330e9c4>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-c330e9c4>on first run, pick server using geoip</li><li data-v-c330e9c4>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-c330e9c4>[2023-05-31 patch]</li><ul data-v-c330e9c4><li data-v-c330e9c4>implement species-restricted plantzones/workshops</li><li data-v-c330e9c4>output redirection (available for any worker at lvl 40)</li></ul><li data-v-c330e9c4>Active Jobs Ranking sorting can get janky when NaNs/Infs are involved</li><li data-v-c330e9c4>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-c330e9c4>remove mspdBase from export, it&#39;s redundant</li><li data-v-c330e9c4>remote town workshop job should require connection</li><li data-v-c330e9c4>when connection node selected, sort shared job list by %</li><li data-v-c330e9c4>split out personal items storage CP in totals</li><li data-v-c330e9c4>enforce daily shipbuilding limit</li><li data-v-c330e9c4>add lodgage cost to untaken ranking</li><li data-v-c330e9c4>+1/+3 pack_xxx skills should improve profit when packing</li><li data-v-c330e9c4>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-c330e9c4>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-c330e9c4><li data-v-c330e9c4>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-c330e9c4>find a consistent fast way to build optimal connections (orderless)</li><li data-v-c330e9c4>workshop support for lodgage</li><li data-v-c330e9c4>on item icon hover: show name and price</li><li data-v-c330e9c4>workerlist: show drops instead of pzname</li><li data-v-c330e9c4>grade towns/workers graphically with bar charts</li><li data-v-c330e9c4>map tweaks <ul data-v-c330e9c4><li data-v-c330e9c4>node hover: highlight potential path to town</li><li data-v-c330e9c4>save zoom too in addition to pos</li><li data-v-c330e9c4>deal with missing tiles</li><li data-v-c330e9c4>a setting to hide all inactive elements</li></ul></li><li data-v-c330e9c4>profit calculation: include feed cost</li><li data-v-c330e9c4>smart worker-job rearrangement within a town</li><ul data-v-c330e9c4><li data-v-c330e9c4>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-c330e9c4>show RegionGroups on the map</li><li data-v-c330e9c4>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-c330e9c4>introduce skill roll chances somehow</li><ul data-v-c330e9c4><li data-v-c330e9c4>help decide which skills should and should not be rerolled?</li><li data-v-c330e9c4>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-c330e9c4>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-c330e9c4><li data-v-c330e9c4>different items have different lifetime though</li></ul><li data-v-c330e9c4>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-c330e9c4>show market fetch timestamp</li><h2 data-v-c330e9c4>Notes</h2><pre class="fsxs" data-v-c330e9c4>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-c330e9c4>Misc</h2>`,97),se=e("House Usage"),de=e("HouseCraft Viewer"),re=e("Droprates"),he=e("All Towns Lodging (deprecated)"),ue={__name:"AboutView",setup(n){return(u,ve)=>{const c=g("RouterLink");return r(),h("div",x,[j,i(l,null,{q:o(()=>[q]),default:o(()=>[C,z,M]),_:1}),i(l,null,{q:o(()=>[W]),default:o(()=>[A,I,S,P]),_:1}),i(l,null,{q:o(()=>[L,$,N]),default:o(()=>[T]),_:1}),i(l,null,{q:o(()=>[E,B,V,H,R,U,Y]),default:o(()=>[D,F,G,O,Q]),_:1}),i(l,null,{q:o(()=>[X]),default:o(()=>[J,Z,K,ee,te,ae,oe,ie,ne,le]),_:1}),ce,t("p",null,[i(c,{to:"/workshops"},{default:o(()=>[se]),_:1})]),t("p",null,[i(c,{to:"/housecraft"},{default:o(()=>[de]),_:1})]),t("p",null,[i(c,{to:"/droprates"},{default:o(()=>[re]),_:1})]),t("p",null,[i(c,{to:"/lodging"},{default:o(()=>[he]),_:1})])])}}},ge=d(ue,[["__scopeId","data-v-c330e9c4"]]);export{ge as default};
