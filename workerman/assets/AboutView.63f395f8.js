import{_ as r,o as c,c as f,a as e,r as d,F as u,b as t,d as i,w as a,e as v,f as p,p as g,g as m}from"./index.a0c9b674.js";const w={},k={class:"q"},y=t(" Q: "),_=t(" A: ");function b(l,h){return c(),f(u,null,[e("div",k,[y,d(l.$slots,"q",{},void 0,!0)]),e("div",null,[_,d(l.$slots,"default",{},void 0,!0)])],64)}const n=r(w,[["render",b],["__scopeId","data-v-02dd3424"]]),o=l=>(g("data-v-94ff77c4"),l=l(),m(),l),x={class:"about"},q=o(()=>e("h2",null,"Q&A",-1)),j=t(" What is the purpose of this project? "),z=t(" Optimise your "),C=o(()=>e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),P=t(" to bring more silver. "),A=t(" How to use? "),W=t(" First of all go to Settings, select your server and tax. After that, two options are available: "),S=o(()=>e("li",null,"Quick and simple: do nothing and just look at Plantzones page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones if just starting out.",-1)),I=o(()=>e("li",null,"Personalized and nuanced: go to Home page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home if you want to improve or rework an existing empire.",-1)),E=t(" Is there any video or guide? "),M=o(()=>e("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),U=t(", "),B=o(()=>e("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),V=t(" What does "),H=o(()=>e("strong",null,"+efficiency",-1)),T=t(" column mean and why is it always negative for me? "),L=t(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),$=t(" Why are node connections so bad? When building path from town "),N=o(()=>e("strong",null,"A",-1)),R=t(" to node "),X=o(()=>e("strong",null,"B",-1)),Y=t(", it ignores the fact that there is already taken node "),F=o(()=>e("strong",null,"C",-1)),G=t(" on the way. "),Q=t(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),D=o(()=>e("strong",null,"B",-1)),O=t(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),K=o(()=>e("strong",null,"C",-1)),J=t(". "),Z=t(" Where does the drop data come from and how old? "),tt=t(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good. Might have changed in the meantime."),et=o(()=>e("br",null,null,-1)),at=t(" Unlucky drops in Eternal Winter: observed near mid 2022."),ot=o(()=>e("br",null,null,-1)),it=t(" Lucky drops across all regions: observed in june 2023."),lt=o(()=>e("br",null,null,-1)),nt=t(" Morning Land drops: observed at summer 2023 - regular nodes are fine, excavations are approximate, since in 2.5 months I only got 1 or even 0 of some crystals "),st=o(()=>e("li",null,[t("circumstantial evidence added in for more volume: "),e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1126036873450631198"},"1"),t(", "),e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1142011540648763403"},"2")],-1)),dt=t(" Also, it is currently unclear how giant bonus interacts with sacks - giants bring stastically more sacks than theoretically expected, reason unknown "),rt=v(`<h2 data-v-94ff77c4>Tips &amp; tricks</h2><li data-v-94ff77c4><details style="display:inline-block;" data-v-94ff77c4><summary data-v-94ff77c4>Anywhere you see a triangle, click to expand</summary> Also hover over <abbr class="tooltip" title="water is wet" data-v-94ff77c4>\u2139\uFE0F</abbr>&#39;s and other <abbr class="tooltip" title="roses are blue" data-v-94ff77c4>dot-underlined</abbr> things to see useful info </details></li><li data-v-94ff77c4>Spend some time on item valuation on Settings page: set <strong data-v-94ff77c4>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-94ff77c4>Home page Empire pane has useful stats. Get rid of <strong data-v-94ff77c4>Worst Taken</strong> and acquire <strong data-v-94ff77c4>Best Untaken</strong></li><li data-v-94ff77c4>Use <strong data-v-94ff77c4>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-94ff77c4>revert</strong> back</li><ul data-v-94ff77c4><li data-v-94ff77c4>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-94ff77c4>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-94ff77c4>If you have nodes invested for grinding, mark them with <strong data-v-94ff77c4>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-94ff77c4><li data-v-94ff77c4>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-94ff77c4>Total CP</strong> pane</li></ul><li data-v-94ff77c4>Use <strong data-v-94ff77c4>import</strong> and <strong data-v-94ff77c4>export</strong> buttons in <strong data-v-94ff77c4>All towns/workers list</strong> to: <ul data-v-94ff77c4><li data-v-94ff77c4>compare different builds</li><li data-v-94ff77c4>restore to a known state when messed up</li><li data-v-94ff77c4>share your setup with other people</li><li data-v-94ff77c4>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-94ff77c4><li data-v-94ff77c4>if the amount of workers you have is outside free to play town limits, enter P2W lodging in town config before importing or the housing will not resolve</li><li data-v-94ff77c4>download and install <a href="https://www.python.org/" data-v-94ff77c4>Python</a> 3.9+</li><li data-v-94ff77c4>download the <a href="https://pastebin.com/PVDRtVXt" data-v-94ff77c4>Import Script</a>, and run it through Python</li><li data-v-94ff77c4>now head back to Workerman Home page &gt; All towns/workers list &gt; import the json file you just created by running the script</li></ul></ul></li><li data-v-94ff77c4>Workloads (and therefore profits) depend on <strong data-v-94ff77c4>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-94ff77c4><li data-v-94ff77c4>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-94ff77c4>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-94ff77c4><li data-v-94ff77c4>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-94ff77c4>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-94ff77c4>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-94ff77c4>Changelog</h2><li data-v-94ff77c4>[2023-08-23 patch] added new region with 0 plantzones</li><li data-v-94ff77c4>added korean language</li><li data-v-94ff77c4>[2023-03-10 patch] item 4206 yields tripled at 3 plantzones</li><li data-v-94ff77c4>[2023-05-31 patch] new luck drops (will update over time) (current version: 10)</li><ul data-v-94ff77c4><li data-v-94ff77c4>all nodes of kind 4 (plant growing): all luck drops replaced with item 1024</li><li data-v-94ff77c4>all nodes of kind 6 (plant gathering): all luck drops replaced with item 1024</li><li data-v-94ff77c4>all nodes of kind 7 (mining): all luck drops replaced with item 1025</li><li data-v-94ff77c4>all nodes of kind 8 (lumbering): all luck drops replaced with items 5005, 5006, 5007, 5008, 5011</li><li data-v-94ff77c4>all nodes of kind 11 (dried fish): all luck drops replaced with items 1027, 6501</li><li data-v-94ff77c4>all nodes of kind 15 (excavation): all luck drops replaced with item 1026</li><li data-v-94ff77c4>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-94ff77c4>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-94ff77c4>housing config &gt; items are now sorted exactly as ingame</li><li data-v-94ff77c4>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-94ff77c4>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-94ff77c4>skip unknown (event?) plantzone jobs when importing</li><li data-v-94ff77c4>Empire &gt; Best Untaken selects best species automatically</li><li data-v-94ff77c4>[2023-06-05 patch] added node 1833</li><li data-v-94ff77c4>[2023-05-31 patch] big rework</li><ul data-v-94ff77c4><li data-v-94ff77c4>level cap 40, +2 skill slots</li><li data-v-94ff77c4>humans got +3 luck</li><li data-v-94ff77c4>giants got +68.4% yield of <s data-v-94ff77c4>all</s> all unlucky drops, rounded down</li></ul><li data-v-94ff77c4>fixed warehouse slot calculations to require lucky items too + 1 slot required to be free</li><li data-v-94ff77c4>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-94ff77c4>in darkmode, buttons are now actually dark</li><li data-v-94ff77c4>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-94ff77c4><li data-v-94ff77c4>item 1024 = equal chance of 1x any fruit</li><li data-v-94ff77c4>item 1025 = equal chance of 1x any gem</li><li data-v-94ff77c4>item 1026 = equal chance of 1x any trace</li><li data-v-94ff77c4>item 1027 = equal chance of 1x any coral</li></ul><li data-v-94ff77c4>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-94ff77c4><li data-v-94ff77c4>check town <strong data-v-94ff77c4>config</strong> to see what houses to buy </li><li data-v-94ff77c4>be careful to not exceed the town limits, profits will show <strong data-v-94ff77c4>NaN</strong>&#39;s and <strong data-v-94ff77c4>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-94ff77c4>for easier prototyping, only working workers consume lodging</li></ul><li data-v-94ff77c4>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-94ff77c4>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-94ff77c4><li data-v-94ff77c4>each house can be set up in <strong data-v-94ff77c4>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-94ff77c4>previously assigned <strong data-v-94ff77c4>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-94ff77c4>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-94ff77c4>on town/node click, map pans to its location</li><li data-v-94ff77c4>removed 13 nodes that are invisible ingame</li><li data-v-94ff77c4>added a ranking of untaken nodes in Empire pane</li><li data-v-94ff77c4>[2023-02-21 patch] updated node CP costs</li><li data-v-94ff77c4>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-94ff77c4><li data-v-94ff77c4>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-94ff77c4>added more worker types + seamless transition between</li><li data-v-94ff77c4>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-94ff77c4>individual plantzone efficiency via cashflow</li><ul data-v-94ff77c4><li data-v-94ff77c4>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-94ff77c4>added farming and workshop job types in Send Worker dialog</li><li data-v-94ff77c4>/plantzones page tweaks</li><ul data-v-94ff77c4><li data-v-94ff77c4>node name link navigates to its map location (upd: with permalinks)</li><li data-v-94ff77c4>item link navigates to its settings price row</li><li data-v-94ff77c4>shows item names to allow in-browser search</li><li data-v-94ff77c4>selects nearest town by CP instead of distance</li></ul><li data-v-94ff77c4>removed Blue Maned Lion&#39;s Manor</li><li data-v-94ff77c4>~floating modifiers support</li><li data-v-94ff77c4>selecting a node highlights connection path</li><li data-v-94ff77c4>worker job assignment moves to the end of connection queue</li><li data-v-94ff77c4>worker editor: added button to suggest best skills for current job</li><li data-v-94ff77c4>map: color active/inactive links</li><li data-v-94ff77c4>updated connection algorithm to encourage existing paths reuse</li><li data-v-94ff77c4>[2022-10-26 patch] updated house CP costs</li><li data-v-94ff77c4>worker revert button, plantzone luck effect indicator</li><li data-v-94ff77c4>configurable default worker for hire</li><li data-v-94ff77c4>send worker dialog: show worker stats</li><li data-v-94ff77c4>worker editor: when on job, show profit changes while editing</li><li data-v-94ff77c4>node info: show/edit the workload modifier</li><li data-v-94ff77c4>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-94ff77c4>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-94ff77c4>added total daily items summary</li><li data-v-94ff77c4>added workers+lodging import/export to json file</li><li data-v-94ff77c4>[2022-09-21 patch] updated several node distances</li><li data-v-94ff77c4>added worker management</li><li data-v-94ff77c4>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-94ff77c4>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-94ff77c4>Todo</h2><li data-v-94ff77c4>Plantzones page &gt; add town filter</li><li data-v-94ff77c4>make (another?) VP setting to add 16 P2W slots to every town</li><li data-v-94ff77c4>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><li data-v-94ff77c4>totals &gt; split out personal items storage CP</li><li data-v-94ff77c4>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-94ff77c4><li data-v-94ff77c4>same idea with connections</li></ul><li data-v-94ff77c4>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-94ff77c4>smart worker\u2194job rearrangement within a town</li><ul data-v-94ff77c4><li data-v-94ff77c4>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-94ff77c4>on first run, pick server using geoip</li><li data-v-94ff77c4>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-94ff77c4>[2023-05-31 patch]</li><ul data-v-94ff77c4><li data-v-94ff77c4>implement species-restricted plantzones and workshops</li><li data-v-94ff77c4>implement output redirection (available for any worker at lvl 40)</li></ul><li data-v-94ff77c4>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-94ff77c4>remote town workshop job should require a connection</li><li data-v-94ff77c4>when connection node selected, sort shared jobs list by %</li><li data-v-94ff77c4>enforce daily shipbuilding limit</li><li data-v-94ff77c4>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-94ff77c4><li data-v-94ff77c4>add +1 skills</li></ul><li data-v-94ff77c4>add intracity distances for workshops (currently all 0) (use notes at bottom)</li><ul data-v-94ff77c4><li data-v-94ff77c4>show real house positions in housecraft viewer</li></ul><li data-v-94ff77c4>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-94ff77c4><li data-v-94ff77c4>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-94ff77c4>find a consistent fast way to build optimal connections (orderless)</li><li data-v-94ff77c4>add lodgage support to workshop system</li><li data-v-94ff77c4>on item icon hover: show name and price</li><li data-v-94ff77c4>workerlist: show drops instead of pzname</li><li data-v-94ff77c4>grade towns/workers graphically with bar charts</li><li data-v-94ff77c4>map tweaks <ul data-v-94ff77c4><li data-v-94ff77c4>node hover: highlight potential path to town</li><li data-v-94ff77c4>save zoom too in addition to pos</li><li data-v-94ff77c4>deal with missing tiles</li><li data-v-94ff77c4>a setting to hide all inactive elements</li></ul></li><li data-v-94ff77c4>profit calculation: include feed cost</li><li data-v-94ff77c4>map: optionally show RegionGroups</li><li data-v-94ff77c4>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-94ff77c4>introduce skill roll chances somehow</li><ul data-v-94ff77c4><li data-v-94ff77c4>help decide which skills should and should not be rerolled?</li><li data-v-94ff77c4>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-94ff77c4>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-94ff77c4><li data-v-94ff77c4>different items have different lifetime though</li></ul><li data-v-94ff77c4>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-94ff77c4>show market fetch timestamp</li><h2 data-v-94ff77c4>Notes</h2><pre class="fsxs" data-v-94ff77c4>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-94ff77c4>Misc</h2>`,110),ct=t("House Usage"),ft=t("HouseCraft Viewer"),ht=t("Droprates"),ut=t("All Towns Lodging (deprecated)"),vt={__name:"AboutView",setup(l){return(h,pt)=>{const s=p("RouterLink");return c(),f("div",x,[q,i(n,null,{q:a(()=>[j]),default:a(()=>[z,C,P]),_:1}),i(n,null,{q:a(()=>[A]),default:a(()=>[W,S,I]),_:1}),i(n,null,{q:a(()=>[E]),default:a(()=>[M,U,B]),_:1}),i(n,null,{q:a(()=>[V,H,T]),default:a(()=>[L]),_:1}),i(n,null,{q:a(()=>[$,N,R,X,Y,F,G]),default:a(()=>[Q,D,O,K,J]),_:1}),i(n,null,{q:a(()=>[Z]),default:a(()=>[tt,et,at,ot,it,lt,nt,st,dt]),_:1}),rt,e("p",null,[i(s,{to:"/workshops"},{default:a(()=>[ct]),_:1})]),e("p",null,[i(s,{to:"/housecraft"},{default:a(()=>[ft]),_:1})]),e("p",null,[i(s,{to:"/droprates"},{default:a(()=>[ht]),_:1})]),e("p",null,[i(s,{to:"/lodging"},{default:a(()=>[ut]),_:1})])])}}},mt=r(vt,[["__scopeId","data-v-94ff77c4"]]);export{mt as default};
