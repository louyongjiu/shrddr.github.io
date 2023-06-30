import{_ as r,o as f,c,a as e,r as d,F as u,b as a,d as i,w as o,e as v,f as p,p as g,g as m}from"./index.761bc6d4.js";const w={},k={class:"q"},_=a(" Q: "),y=a(" A: ");function b(n,h){return f(),c(u,null,[e("div",k,[_,d(n.$slots,"q",{},void 0,!0)]),e("div",null,[y,d(n.$slots,"default",{},void 0,!0)])],64)}const l=r(w,[["render",b],["__scopeId","data-v-02dd3424"]]),t=n=>(g("data-v-f4ae2afa"),n=n(),m(),n),x={class:"about"},j=t(()=>e("h2",null,"Q&A",-1)),q=a(" What is the purpose of this project? "),C=a(" Optimise your "),z=t(()=>e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),W=a(" to bring more silver. "),A=a(" Is there any video or guide? "),I=a(" Don't think so, the basic steps are: "),M=t(()=>e("li",null,"go to Settings, select your server and tax, select what items you keep instead of selling",-1)),P=t(()=>e("li",null,"go to Home, select a town, configure lodging, hire a worker, send to whatever node gives highest M$/day/CP, repeat",-1)),S=a(" ...or, if it seems too daunting, forget everything and just look at Plantzones page, it shows what nodes are good with no user input "),$=a(" What does "),N=t(()=>e("strong",null,"+efficiency",-1)),E=a(" column say in Send Worker dialog and why is it always negative for me? "),L=a(" It shows the change in total M$/day/CP of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),T=a(" Why are node connections so bad? When building path from town "),B=t(()=>e("strong",null,"A",-1)),R=a(" to node "),V=t(()=>e("strong",null,"B",-1)),H=a(", it ignores the fact that there is already taken node "),U=t(()=>e("strong",null,"C",-1)),Y=a(" on the way. "),D=a(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),F=t(()=>e("strong",null,"B",-1)),G=a(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),O=t(()=>e("strong",null,"C",-1)),Q=a(". "),X=a(" Where does the drop data come from and how old? "),J=a(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),Z=t(()=>e("br",null,null,-1)),K=a(" Unlucky drops in Eternal Winter: observed by me in mid 2022."),aa=t(()=>e("br",null,null,-1)),ea=a(" Lucky drops: observed by me in june 2023 - "),ta=t(()=>e("span",{class:"note"},"not exact yet, more observations needed",-1)),oa=t(()=>e("br",null,null,-1)),ia=a(" Morning Land drops: observed by me in june 2023 - regular nodes are fine, "),na=t(()=>e("span",{class:"warning"},"excavations use tentative values",-1)),la=a(", reasonably accurate measurements are going to take a while "),sa=v(`<h2 data-v-f4ae2afa>Tips &amp; tricks</h2><li data-v-f4ae2afa>Anywhere you see a \u25B6, click to expand. Also hover over <abbr title="water is wet" data-v-f4ae2afa>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-f4ae2afa>dot-underlined</abbr> things to see useful info</li><li data-v-f4ae2afa>Spend some time on item valuation: set <strong data-v-f4ae2afa>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-f4ae2afa>Use <strong data-v-f4ae2afa>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-f4ae2afa>revert</strong> back</li><li data-v-f4ae2afa>If you have nodes invested for grinding, mark them with <strong data-v-f4ae2afa>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: Olun before Crypt). Order is shown in <strong data-v-f4ae2afa>Total CP</strong> pane</li></ul><li data-v-f4ae2afa>Use <strong data-v-f4ae2afa>import</strong> and <strong data-v-f4ae2afa>export</strong> buttons in <strong data-v-f4ae2afa>All towns/workers list</strong> to: <ul data-v-f4ae2afa><li data-v-f4ae2afa>compare different builds</li><li data-v-f4ae2afa>restore to a known state when messed up</li><li data-v-f4ae2afa>share your setup with other people</li><li data-v-f4ae2afa>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>download and install <a href="https://www.python.org/" data-v-f4ae2afa>Python</a> 3.9+</li><li data-v-f4ae2afa>download the <a href="https://pastebin.com/ZHMC7fkE" data-v-f4ae2afa>Import Script</a>, unzip, run it through Python</li><li data-v-f4ae2afa>now head back to Workerman Home page and import the json file you just created by running the script</li></ul></ul></li><li data-v-f4ae2afa>Workloads (and therefore profits) depend on <strong data-v-f4ae2afa>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-f4ae2afa><li data-v-f4ae2afa>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-f4ae2afa>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-f4ae2afa>Workloads shown in ~XXX format refer to median (50% chance) value</li><li data-v-f4ae2afa>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-f4ae2afa>Changelog</h2><li data-v-f4ae2afa>[2023-05-31 patch] big rework</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>level cap 40, +2 skill slots</li><li data-v-f4ae2afa>humans got +3 luck</li><li data-v-f4ae2afa>giants got +68.4% yield of <s data-v-f4ae2afa>all</s> all unlucky drops, rounded down</li></ul><li data-v-f4ae2afa>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-f4ae2afa>[2023-06-14 patch] new region</li><li data-v-f4ae2afa>in darkmode, buttons are now actually dark</li><li data-v-f4ae2afa>[2023-05-31 patch] new luck drops (v4 - assuming same droprates across a whole node kind; lotml sacks reduced)</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>all nodes of kind 4 (plant growing) and 6 (plant gathering): all luck drops replaced with 0.25x item 1024 (0.17x for LotML)</li><li data-v-f4ae2afa>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-f4ae2afa>all nodes of kind 8 (lumbering): all luck drops replaced with 0.91x item 5005, 0.5x 5006, 0.13x item 5007, 2.14x item 5008, 0.93x item 5011</li><li data-v-f4ae2afa>all nodes of kind 11 (dried fish): all luck drops replaced with 0.24x item 1027, 0.64x item 6501</li><li data-v-f4ae2afa>all nodes of kind 15 (excavation): all luck drops replaced with 3.96x item 1026</li><li data-v-f4ae2afa>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-f4ae2afa>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-f4ae2afa>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>item 1024 = equal chance of 1x any fruit</li><li data-v-f4ae2afa>item 1025 = equal chance of 1x any gem</li><li data-v-f4ae2afa>item 1026 = equal chance of 1x any trace</li><li data-v-f4ae2afa>item 1027 = equal chance of 1x any coral</li></ul><li data-v-f4ae2afa>you don&#39;t buy houses anymore, lodging &amp; storage provided automatically</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>be careful to not exceed the town limits, profits will show NaN&#39;s and ?&#39;s if you do</li><li data-v-f4ae2afa>for easier prototyping, only working workers consume lodging</li></ul><li data-v-f4ae2afa>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-f4ae2afa>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>each house can be set up in <strong data-v-f4ae2afa>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-f4ae2afa>previously assigned <strong data-v-f4ae2afa>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-f4ae2afa>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-f4ae2afa>on town/node click, map pans to its location</li><li data-v-f4ae2afa>removed 13 nodes that are invisible ingame</li><li data-v-f4ae2afa>added a ranking of untaken nodes in Empire pane</li><li data-v-f4ae2afa>[2023-02-21 patch] updated node CP costs</li><li data-v-f4ae2afa>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-f4ae2afa>added more worker types + seamless transition between</li><li data-v-f4ae2afa>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-f4ae2afa>individual plantzone efficiency via cashflow</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-f4ae2afa>added farming and workshop job types in Send Worker dialog</li><li data-v-f4ae2afa>/plantzones page tweaks</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>node name link navigates to its map location (upd: with permalinks)</li><li data-v-f4ae2afa>item link navigates to its settings price row</li><li data-v-f4ae2afa>shows item names to allow in-browser search</li><li data-v-f4ae2afa>selects nearest town by CP instead of distance</li></ul><li data-v-f4ae2afa>removed Blue Maned Lion&#39;s Manor</li><li data-v-f4ae2afa>~floating modifiers support</li><li data-v-f4ae2afa>selecting a node highlights connection path</li><li data-v-f4ae2afa>worker job assignment moves to the end of connection queue</li><li data-v-f4ae2afa>worker editor: added button to suggest best skills for current job</li><li data-v-f4ae2afa>map: color active/inactive links</li><li data-v-f4ae2afa>updated connection algorithm to encourage existing paths reuse</li><li data-v-f4ae2afa>[2022-10-26 patch] updated house CP costs</li><li data-v-f4ae2afa>worker revert button, plantzone luck effect indicator</li><li data-v-f4ae2afa>configurable default worker for hire</li><li data-v-f4ae2afa>send worker dialog: show worker stats</li><li data-v-f4ae2afa>worker editor: when on job, show profit changes while editing</li><li data-v-f4ae2afa>node info: show/edit the workload modifier</li><li data-v-f4ae2afa>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-f4ae2afa>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-f4ae2afa>added total daily items summary</li><li data-v-f4ae2afa>added workers+lodging import/export to json file</li><li data-v-f4ae2afa>[2022-09-21 patch] updated several node distances</li><li data-v-f4ae2afa>added worker management</li><li data-v-f4ae2afa>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-f4ae2afa>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-f4ae2afa>Todo</h2><li data-v-f4ae2afa>Untaken Rating doesn&#39;t update when assigning</li><li data-v-f4ae2afa>on first run, pick server using geoip</li><li data-v-f4ae2afa>morningland has made up worker levelup stats, find correct values</li><li data-v-f4ae2afa>[2023-05-31 patch]</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>implement species-restricted planzones/workshops</li><li data-v-f4ae2afa>output redirection (available for any worker at lvl 40)</li></ul><li data-v-f4ae2afa>Active Jobs Ranking sorting can get janky when NaNs/Infs are involved</li><li data-v-f4ae2afa>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-f4ae2afa>remove mspdBase from export, it&#39;s redundant</li><li data-v-f4ae2afa>remote town workshop job should require connection</li><li data-v-f4ae2afa>when connection node selected, sort shared job list by %</li><li data-v-f4ae2afa>split out personal items storage CP in totals</li><li data-v-f4ae2afa>enforce daily shipbuilding limit</li><li data-v-f4ae2afa>add lodgage cost to untaken ranking</li><li data-v-f4ae2afa>+1/+3 pack_xxx skills should improve profit when packing</li><li data-v-f4ae2afa>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-f4ae2afa>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-f4ae2afa>find a consistent fast way to build optimal connections (orderless)</li><li data-v-f4ae2afa>workshop support for lodgage</li><li data-v-f4ae2afa>on item icon hover: show name and price</li><li data-v-f4ae2afa>workerlist: show drops instead of pzname</li><li data-v-f4ae2afa>grade towns/workers graphically with bar charts</li><li data-v-f4ae2afa>map tweaks <ul data-v-f4ae2afa><li data-v-f4ae2afa>node hover: highlight potential path to town</li><li data-v-f4ae2afa>save zoom too in addition to pos</li><li data-v-f4ae2afa>deal with missing tiles</li><li data-v-f4ae2afa>a setting to hide all inactive elements</li></ul></li><li data-v-f4ae2afa>profit calculation: include feed cost</li><li data-v-f4ae2afa>smart worker-job rearrangement within a town</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-f4ae2afa>show RegionGroups on the map</li><li data-v-f4ae2afa>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-f4ae2afa>introduce skill roll chances somehow</li><ul data-v-f4ae2afa><li data-v-f4ae2afa>help decide which skills should and should not be rerolled?</li><li data-v-f4ae2afa>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-f4ae2afa>do something smart using current market offers divided by lifetime volume</li><li data-v-f4ae2afa>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-f4ae2afa>show market fetch timestamp</li><h2 data-v-f4ae2afa>Notes</h2><pre class="fsxs" data-v-f4ae2afa>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-f4ae2afa>Misc</h2>`,94),da=a("House Usage"),ra=a("HouseCraft Viewer"),fa=a("Droprates"),ca=a("All Towns Lodging (deprecated)"),ha={__name:"AboutView",setup(n){return(h,ua)=>{const s=p("RouterLink");return f(),c("div",x,[j,i(l,null,{q:o(()=>[q]),default:o(()=>[C,z,W]),_:1}),i(l,null,{q:o(()=>[A]),default:o(()=>[I,M,P,S]),_:1}),i(l,null,{q:o(()=>[$,N,E]),default:o(()=>[L]),_:1}),i(l,null,{q:o(()=>[T,B,R,V,H,U,Y]),default:o(()=>[D,F,G,O,Q]),_:1}),i(l,null,{q:o(()=>[X]),default:o(()=>[J,Z,K,aa,ea,ta,oa,ia,na,la]),_:1}),sa,e("p",null,[i(s,{to:"/workshops"},{default:o(()=>[da]),_:1})]),e("p",null,[i(s,{to:"/housecraft"},{default:o(()=>[ra]),_:1})]),e("p",null,[i(s,{to:"/droprates"},{default:o(()=>[fa]),_:1})]),e("p",null,[i(s,{to:"/lodging"},{default:o(()=>[ca]),_:1})])])}}},pa=r(ha,[["__scopeId","data-v-f4ae2afa"]]);export{pa as default};
