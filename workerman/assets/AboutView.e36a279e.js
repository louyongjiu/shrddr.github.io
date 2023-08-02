import{_ as r,o as c,c as h,a as e,r as d,F as v,b as a,d as i,w as t,e as p,f as g,p as m,g as w}from"./index.2bb27959.js";const f={},k={class:"q"},y=a(" Q: "),_=a(" A: ");function b(l,u){return c(),h(v,null,[e("div",k,[y,d(l.$slots,"q",{},void 0,!0)]),e("div",null,[_,d(l.$slots,"default",{},void 0,!0)])],64)}const n=r(f,[["render",b],["__scopeId","data-v-02dd3424"]]),o=l=>(m("data-v-c566848a"),l=l(),w(),l),x={class:"about"},q=o(()=>e("h2",null,"Q&A",-1)),j=a(" What is the purpose of this project? "),C=a(" Optimise your "),z=o(()=>e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),S=a(" to bring more silver. "),A=a(" How to use? "),W=a(" First of all go to Settings, select your server and tax. After that, two options are available: "),I=o(()=>e("li",null,"Quick and simple: do nothing and just look at Plantzones page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones if just starting out.",-1)),P=o(()=>e("li",null,"Personalized and nuanced: go to Home page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home if you want to improve or rework an existing empire.",-1)),E=a(" Is there any video or guide? "),U=o(()=>e("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),B=a(", "),M=o(()=>e("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),H=a(" What does "),T=o(()=>e("strong",null,"+efficiency",-1)),L=a(" column mean and why is it always negative for me? "),$=a(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),V=a(" Why are node connections so bad? When building path from town "),N=o(()=>e("strong",null,"A",-1)),F=a(" to node "),Q=o(()=>e("strong",null,"B",-1)),R=a(", it ignores the fact that there is already taken node "),Y=o(()=>e("strong",null,"C",-1)),G=a(" on the way. "),X=a(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),O=o(()=>e("strong",null,"B",-1)),D=a(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),K=o(()=>e("strong",null,"C",-1)),J=a(". "),Z=a(" Where does the drop data come from and how old? "),aa=a(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),ea=o(()=>e("br",null,null,-1)),ta=a(" Unlucky drops in Eternal Winter: observed by me in mid 2022. Lucky drops across all regions: observed by me in june 2023."),oa=o(()=>e("br",null,null,-1)),ia=a(" Morning Land drops: observed by me in june 2023 - regular nodes are fine, "),la=o(()=>e("span",{class:"warning"},"excavations use tentative values",-1)),na=a(", reasonably accurate measurements are going to take a while "),sa=p(`<h2 data-v-c566848a>Tips &amp; tricks</h2><li data-v-c566848a>Anywhere you see a \u25B6, click to expand. Also hover over <abbr class="tooltip" title="water is wet" data-v-c566848a>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-c566848a>dot-underlined</abbr> things to see useful info</li><li data-v-c566848a>Spend some time on item valuation on Settings page: set <strong data-v-c566848a>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-c566848a>Home page Empire pane has useful stats. Get rid of <strong data-v-c566848a>Worst Taken</strong> and acquire <strong data-v-c566848a>Best Untaken</strong></li><li data-v-c566848a>Use <strong data-v-c566848a>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-c566848a>revert</strong> back</li><ul data-v-c566848a><li data-v-c566848a>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-c566848a>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-c566848a>If you have nodes invested for grinding, mark them with <strong data-v-c566848a>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-c566848a><li data-v-c566848a>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-c566848a>Total CP</strong> pane</li></ul><li data-v-c566848a>Use <strong data-v-c566848a>import</strong> and <strong data-v-c566848a>export</strong> buttons in <strong data-v-c566848a>All towns/workers list</strong> to: <ul data-v-c566848a><li data-v-c566848a>compare different builds</li><li data-v-c566848a>restore to a known state when messed up</li><li data-v-c566848a>share your setup with other people</li><li data-v-c566848a>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-c566848a><li data-v-c566848a>download and install <a href="https://www.python.org/" data-v-c566848a>Python</a> 3.9+</li><li data-v-c566848a>download the <a href="https://pastebin.com/vQF7a8AB" data-v-c566848a>Import Script</a>, and run it through Python</li><li data-v-c566848a>now head back to Workerman Home page &gt; All towns &gt; import the json file you just created by running the script</li></ul></ul></li><li data-v-c566848a>Workloads (and therefore profits) depend on <strong data-v-c566848a>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-c566848a><li data-v-c566848a>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-c566848a>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-c566848a><li data-v-c566848a>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-c566848a>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-c566848a>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-c566848a>Changelog</h2><li data-v-c566848a>housing config &gt; items are now sorted as ingame</li><li data-v-c566848a>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-c566848a>[2023-05-31 patch] new luck drops (v8)</li><ul data-v-c566848a><li data-v-c566848a>all nodes of kind 4 (plant growing): all luck drops replaced with 0.25x item 1024</li><li data-v-c566848a>all nodes of kind 6 (plant gathering): all luck drops replaced with 0.12x item 1024</li><li data-v-c566848a>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-c566848a>all nodes of kind 8 (lumbering): all luck drops replaced with 0.91x item 5005, 0.5x 5006, 0.133x item 5007, 2.14x item 5008, 0.93x item 5011</li><li data-v-c566848a>all nodes of kind 11 (dried fish): all luck drops replaced with 0.17x item 1027, 0.8x item 6501</li><li data-v-c566848a>all nodes of kind 15 (excavation): all luck drops replaced with 4x item 1026</li><li data-v-c566848a>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-c566848a>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-c566848a>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-c566848a>skip unknown (event?) plantzone jobs when importing</li><li data-v-c566848a>Empire &gt; Best Untaken selects best species automatically</li><li data-v-c566848a>[2023-06-05 patch] added node 1833</li><li data-v-c566848a>[2023-05-31 patch] big rework</li><ul data-v-c566848a><li data-v-c566848a>level cap 40, +2 skill slots</li><li data-v-c566848a>humans got +3 luck</li><li data-v-c566848a>giants got +68.4% yield of <s data-v-c566848a>all</s> all unlucky drops, rounded down</li></ul><li data-v-c566848a>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-c566848a>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-c566848a>in darkmode, buttons are now actually dark</li><li data-v-c566848a>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-c566848a><li data-v-c566848a>item 1024 = equal chance of 1x any fruit</li><li data-v-c566848a>item 1025 = equal chance of 1x any gem</li><li data-v-c566848a>item 1026 = equal chance of 1x any trace</li><li data-v-c566848a>item 1027 = equal chance of 1x any coral</li></ul><li data-v-c566848a>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-c566848a><li data-v-c566848a>check town <strong data-v-c566848a>config</strong> to see what houses to buy </li><li data-v-c566848a>be careful to not exceed the town limits, profits will show <strong data-v-c566848a>NaN</strong>&#39;s and <strong data-v-c566848a>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-c566848a>for easier prototyping, only working workers consume lodging</li></ul><li data-v-c566848a>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-c566848a>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-c566848a><li data-v-c566848a>each house can be set up in <strong data-v-c566848a>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-c566848a>previously assigned <strong data-v-c566848a>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-c566848a>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-c566848a>on town/node click, map pans to its location</li><li data-v-c566848a>removed 13 nodes that are invisible ingame</li><li data-v-c566848a>added a ranking of untaken nodes in Empire pane</li><li data-v-c566848a>[2023-02-21 patch] updated node CP costs</li><li data-v-c566848a>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-c566848a><li data-v-c566848a>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-c566848a>added more worker types + seamless transition between</li><li data-v-c566848a>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-c566848a>individual plantzone efficiency via cashflow</li><ul data-v-c566848a><li data-v-c566848a>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-c566848a>added farming and workshop job types in Send Worker dialog</li><li data-v-c566848a>/plantzones page tweaks</li><ul data-v-c566848a><li data-v-c566848a>node name link navigates to its map location (upd: with permalinks)</li><li data-v-c566848a>item link navigates to its settings price row</li><li data-v-c566848a>shows item names to allow in-browser search</li><li data-v-c566848a>selects nearest town by CP instead of distance</li></ul><li data-v-c566848a>removed Blue Maned Lion&#39;s Manor</li><li data-v-c566848a>~floating modifiers support</li><li data-v-c566848a>selecting a node highlights connection path</li><li data-v-c566848a>worker job assignment moves to the end of connection queue</li><li data-v-c566848a>worker editor: added button to suggest best skills for current job</li><li data-v-c566848a>map: color active/inactive links</li><li data-v-c566848a>updated connection algorithm to encourage existing paths reuse</li><li data-v-c566848a>[2022-10-26 patch] updated house CP costs</li><li data-v-c566848a>worker revert button, plantzone luck effect indicator</li><li data-v-c566848a>configurable default worker for hire</li><li data-v-c566848a>send worker dialog: show worker stats</li><li data-v-c566848a>worker editor: when on job, show profit changes while editing</li><li data-v-c566848a>node info: show/edit the workload modifier</li><li data-v-c566848a>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-c566848a>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-c566848a>added total daily items summary</li><li data-v-c566848a>added workers+lodging import/export to json file</li><li data-v-c566848a>[2022-09-21 patch] updated several node distances</li><li data-v-c566848a>added worker management</li><li data-v-c566848a>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-c566848a>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-c566848a>Todo</h2><li data-v-c566848a>need to rethink default &quot;random art gob&quot; hire as they gobs not BiS anymore</li><li data-v-c566848a>totals &gt; split out personal items storage CP</li><li data-v-c566848a>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-c566848a>smart worker-job rearrangement within a town</li><ul data-v-c566848a><li data-v-c566848a>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-c566848a>on first run, pick server using geoip</li><li data-v-c566848a>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-c566848a>[2023-05-31 patch]</li><ul data-v-c566848a><li data-v-c566848a>implement species-restricted plantzones/workshops</li><li data-v-c566848a>output redirection (available for any worker at lvl 40)</li></ul><li data-v-c566848a>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-c566848a>remote town workshop job should require a connection</li><li data-v-c566848a>when connection node selected, sort shared jobs list by %</li><li data-v-c566848a>enforce daily shipbuilding limit</li><li data-v-c566848a>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-c566848a><li data-v-c566848a>add +1 skills</li></ul><li data-v-c566848a>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-c566848a>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-c566848a><li data-v-c566848a>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-c566848a>find a consistent fast way to build optimal connections (orderless)</li><li data-v-c566848a>add lodgage support to workshop system</li><li data-v-c566848a>on item icon hover: show name and price</li><li data-v-c566848a>workerlist: show drops instead of pzname</li><li data-v-c566848a>grade towns/workers graphically with bar charts</li><li data-v-c566848a>map tweaks <ul data-v-c566848a><li data-v-c566848a>node hover: highlight potential path to town</li><li data-v-c566848a>save zoom too in addition to pos</li><li data-v-c566848a>deal with missing tiles</li><li data-v-c566848a>a setting to hide all inactive elements</li></ul></li><li data-v-c566848a>profit calculation: include feed cost</li><li data-v-c566848a>map: optionally show RegionGroups</li><li data-v-c566848a>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-c566848a>introduce skill roll chances somehow</li><ul data-v-c566848a><li data-v-c566848a>help decide which skills should and should not be rerolled?</li><li data-v-c566848a>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-c566848a>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-c566848a><li data-v-c566848a>different items have different lifetime though</li></ul><li data-v-c566848a>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-c566848a>show market fetch timestamp</li><h2 data-v-c566848a>Notes</h2><pre class="fsxs" data-v-c566848a>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-c566848a>Misc</h2>`,102),da=a("House Usage"),ra=a("HouseCraft Viewer"),ca=a("Droprates"),ha=a("All Towns Lodging (deprecated)"),ua={__name:"AboutView",setup(l){return(u,va)=>{const s=g("RouterLink");return c(),h("div",x,[q,i(n,null,{q:t(()=>[j]),default:t(()=>[C,z,S]),_:1}),i(n,null,{q:t(()=>[A]),default:t(()=>[W,I,P]),_:1}),i(n,null,{q:t(()=>[E]),default:t(()=>[U,B,M]),_:1}),i(n,null,{q:t(()=>[H,T,L]),default:t(()=>[$]),_:1}),i(n,null,{q:t(()=>[V,N,F,Q,R,Y,G]),default:t(()=>[X,O,D,K,J]),_:1}),i(n,null,{q:t(()=>[Z]),default:t(()=>[aa,ea,ta,oa,ia,la,na]),_:1}),sa,e("p",null,[i(s,{to:"/workshops"},{default:t(()=>[da]),_:1})]),e("p",null,[i(s,{to:"/housecraft"},{default:t(()=>[ra]),_:1})]),e("p",null,[i(s,{to:"/droprates"},{default:t(()=>[ca]),_:1})]),e("p",null,[i(s,{to:"/lodging"},{default:t(()=>[ha]),_:1})])])}}},ga=r(ua,[["__scopeId","data-v-c566848a"]]);export{ga as default};
