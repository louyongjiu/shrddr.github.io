import{_ as r,o as c,c as h,a as t,r as d,F as v,b as e,d as i,w as a,e as p,f as g,p as m,g as w}from"./index.61ae5441.js";const f={},k={class:"q"},y=e(" Q: "),_=e(" A: ");function b(l,u){return c(),h(v,null,[t("div",k,[y,d(l.$slots,"q",{},void 0,!0)]),t("div",null,[_,d(l.$slots,"default",{},void 0,!0)])],64)}const n=r(f,[["render",b],["__scopeId","data-v-02dd3424"]]),o=l=>(m("data-v-4628e279"),l=l(),w(),l),x={class:"about"},j=o(()=>t("h2",null,"Q&A",-1)),q=e(" What is the purpose of this project? "),z=e(" Optimise your "),C=o(()=>t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),P=e(" to bring more silver. "),A=e(" How to use? "),W=e(" First of all go to Settings, select your server and tax. After that, two options are available: "),S=o(()=>t("li",null,[e("Quick and simple: do nothing and just look at "),t("strong",null,"Plantzones"),e(" page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones page if just starting out.")],-1)),I=o(()=>t("li",null,[e("Personalized and nuanced: go to "),t("strong",null,"Home"),e(" page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home page if you want to improve or rework an existing empire.")],-1)),E=e(" Is there any video or guide? "),M=o(()=>t("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),U=e(", "),B=o(()=>t("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),V=e(" What does "),H=o(()=>t("strong",null,"+efficiency",-1)),T=e(" column mean and why is it always negative for me? "),L=e(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),$=e(" Why are node connections so bad? When building path from town "),N=o(()=>t("strong",null,"A",-1)),R=e(" to node "),F=o(()=>t("strong",null,"B",-1)),X=e(", it ignores the fact that there is already taken node "),Y=o(()=>t("strong",null,"C",-1)),G=e(" on the way. "),O=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),Q=o(()=>t("strong",null,"B",-1)),D=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),K=o(()=>t("strong",null,"C",-1)),J=e(". "),Z=e(" Where does the drop data come from and how old? "),ee=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good. Might have changed in the meantime."),te=o(()=>t("br",null,null,-1)),ae=e(" Unlucky drops in Eternal Winter: observed near mid 2022."),oe=o(()=>t("br",null,null,-1)),ie=e(" Lucky drops across all regions: observed in june 2023."),le=o(()=>t("br",null,null,-1)),ne=e(" Morning Land drops: observed at summer 2023 - regular nodes are fine, excavations are approximate, too rare to judge confidently "),se=o(()=>t("li",null,[e("circumstantial evidence added in for more volume: "),t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1126036873450631198"},"1"),e(", "),t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1142011540648763403"},"2")],-1)),de=e(" Also, it is currently unclear how giant bonus interacts with sacks - giants bring just a bit more (but stastically significant) sacks than theoretically expected, reason unknown "),re=p(`<h2 data-v-4628e279>Tips &amp; tricks</h2><li data-v-4628e279><details style="display:inline-block;" data-v-4628e279><summary data-v-4628e279>Anywhere you see a right facing triangle, click to expand</summary> Or click again to hide </details></li><li data-v-4628e279>Also hover over <abbr class="tooltip" title="water is wet" data-v-4628e279>\u2139\uFE0F</abbr>&#39;s and other <abbr class="tooltip" title="roses are blue" data-v-4628e279>dot-underlined</abbr> things to see useful info</li><li data-v-4628e279>Spend some time on item valuation on Settings page: set <strong data-v-4628e279>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-4628e279>Home page &gt; <strong data-v-4628e279>Empire</strong> pane has some useful stats. Get rid of <strong data-v-4628e279>Worst Taken</strong> and acquire <strong data-v-4628e279>Best Untaken</strong></li><li data-v-4628e279>Use <strong data-v-4628e279>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-4628e279>revert</strong> back</li><ul data-v-4628e279><li data-v-4628e279>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-4628e279>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-4628e279>If you have nodes invested for grinding, mark them with <strong data-v-4628e279>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-4628e279><li data-v-4628e279>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-4628e279>Total CP</strong> pane</li><li data-v-4628e279>if a zero-cost connects to a wrong town, assign a whole chain of zero-costs along the path you want (usually just 1 dummy halfway is enough)</li></ul><li data-v-4628e279>Use <strong data-v-4628e279>import</strong> and <strong data-v-4628e279>export</strong> buttons in <strong data-v-4628e279>All towns/workers list</strong> to: <ul data-v-4628e279><li data-v-4628e279>compare different builds</li><li data-v-4628e279>restore to a known state when messed up</li><li data-v-4628e279>share your setup with other people</li><li data-v-4628e279>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-4628e279><li data-v-4628e279>download and install <a href="https://www.python.org/" data-v-4628e279>Python</a> 3.9+</li><li data-v-4628e279>download the <a href="https://pastebin.com/PVDRtVXt" data-v-4628e279>Import Script</a>, and run it through Python</li><li data-v-4628e279>now head back to Workerman Home page &gt; All towns/workers list &gt; import the json file you just created by running the script</li></ul><li data-v-4628e279>warning: if the amount of workers you have ingame is outside the F2P town limits, enter P2W lodging in town config <u data-v-4628e279>before</u> importing, or the housing will not resolve</li></ul></li><li data-v-4628e279>Workloads (and therefore profits) depend on <strong data-v-4628e279>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-4628e279><li data-v-4628e279>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-4628e279>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-4628e279><li data-v-4628e279>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-4628e279>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-4628e279>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-4628e279>Changelog</h2><li data-v-4628e279>added separate VP setting to add 16 P2W slots to every town</li><li data-v-4628e279>[2023-05-31 patch] new luck drops (current version: 12 aka the final one. data collection stopped)</li><ul data-v-4628e279><li data-v-4628e279>all nodes of kind 4 (plant growing): all luck drops replaced with item 1024</li><li data-v-4628e279>all nodes of kind 6 (plant gathering): all luck drops replaced with item 1024</li><li data-v-4628e279>all nodes of kind 7 (mining): all luck drops replaced with item 1025</li><li data-v-4628e279>all nodes of kind 8 (lumbering): all luck drops replaced with items 5005, 5006, 5007, 5008, 5011</li><li data-v-4628e279>all nodes of kind 11 (dried fish): all luck drops replaced with items 1027, 6501</li><li data-v-4628e279>all nodes of kind 15 (excavation): all luck drops replaced with item 1026</li><li data-v-4628e279>nodes 1675, 1677, 1776: unlucky drop increased to 8 (maybe happened earlier, didn&#39;t pay attention)</li><li data-v-4628e279>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-4628e279>[2023-08-23 patch] added new region with 0 plantzones</li><li data-v-4628e279>added korean language</li><li data-v-4628e279>[2023-03-10 patch] item 4206 yields tripled at 3 plantzones</li><li data-v-4628e279>housing config &gt; items are now sorted exactly as ingame</li><li data-v-4628e279>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-4628e279>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-4628e279>skip unknown (event?) plantzone jobs when importing - will display as an idle worker instead</li><li data-v-4628e279>Empire &gt; Best Untaken selects best species automatically</li><li data-v-4628e279>[2023-06-05 patch] added node 1833</li><li data-v-4628e279>[2023-05-31 patch] big rework</li><ul data-v-4628e279><li data-v-4628e279>level cap 40, +2 skill slots</li><li data-v-4628e279>humans got +3 luck</li><li data-v-4628e279>giants got +68.4% yield of <s data-v-4628e279>all</s> all unlucky drops, rounded down</li></ul><li data-v-4628e279>fixed warehouse slot calculations to require lucky items too + 1 slot required to be free</li><li data-v-4628e279>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-4628e279>in darkmode, buttons are now actually dark</li><li data-v-4628e279>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-4628e279><li data-v-4628e279>item 1024 = equal chance of 1x any fruit</li><li data-v-4628e279>item 1025 = equal chance of 1x any gem</li><li data-v-4628e279>item 1026 = equal chance of 1x any trace</li><li data-v-4628e279>item 1027 = equal chance of 1x any coral</li></ul><li data-v-4628e279>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-4628e279><li data-v-4628e279>check town <strong data-v-4628e279>config</strong> to see which houses to buy</li><li data-v-4628e279>be careful to not exceed the town limits, profits will show <strong data-v-4628e279>NaN</strong>&#39;s and <strong data-v-4628e279>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-4628e279>for easier prototyping, idle workers do not consume lodging</li></ul><li data-v-4628e279>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-4628e279>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-4628e279><li data-v-4628e279>each house can be set up in <strong data-v-4628e279>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-4628e279>previously assigned <strong data-v-4628e279>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-4628e279>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-4628e279>on town/node click, map pans to its location</li><li data-v-4628e279>removed 13 nodes that are invisible ingame</li><li data-v-4628e279>added a ranking of untaken nodes in Empire pane</li><li data-v-4628e279>[2023-02-21 patch] updated node CP costs</li><li data-v-4628e279>job efficiency now includes lodging cost: eff = income / (connectionCost + lodgingCost)</li><ul data-v-4628e279><li data-v-4628e279>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-4628e279>added more worker types + seamless transition between</li><li data-v-4628e279>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-4628e279>individual plantzone efficiency via cashflow</li><ul data-v-4628e279><li data-v-4628e279>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-4628e279>added farming and workshop job types in Send Worker dialog</li><li data-v-4628e279>/plantzones page tweaks</li><ul data-v-4628e279><li data-v-4628e279>node name link navigates to its map location (upd: with permalinks)</li><li data-v-4628e279>item link navigates to its settings price row</li><li data-v-4628e279>shows item names to allow in-browser search</li><li data-v-4628e279>selects nearest town by CP instead of distance</li></ul><li data-v-4628e279>removed Blue Maned Lion&#39;s Manor</li><li data-v-4628e279>~floating modifiers support</li><li data-v-4628e279>selecting a node highlights connection path</li><li data-v-4628e279>worker job assignment moves to the end of connection queue</li><li data-v-4628e279>worker editor: added button to suggest best skills for current job</li><li data-v-4628e279>map: color active/inactive links</li><li data-v-4628e279>updated connection algorithm to encourage existing paths reuse</li><li data-v-4628e279>[2022-10-26 patch] updated house CP costs</li><li data-v-4628e279>worker revert button, plantzone luck effect indicator</li><li data-v-4628e279>configurable default worker for hire</li><li data-v-4628e279>send worker dialog: show worker stats</li><li data-v-4628e279>worker editor: when on job, show profit changes while editing</li><li data-v-4628e279>node info: show/edit the workload modifier</li><li data-v-4628e279>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-4628e279>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-4628e279>added total daily items summary</li><li data-v-4628e279>added workers+lodging import/export to json file</li><li data-v-4628e279>[2022-09-21 patch] updated several node distances</li><li data-v-4628e279>added worker management</li><li data-v-4628e279>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-4628e279>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-4628e279>Todo</h2><li data-v-4628e279>Plantzones page &gt; add town filter</li><li data-v-4628e279>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><li data-v-4628e279>totals &gt; split out personal items storage CP</li><li data-v-4628e279>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-4628e279><li data-v-4628e279>same idea with connections</li></ul><li data-v-4628e279>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-4628e279>smart worker\u2194job rearrangement within a town</li><ul data-v-4628e279><li data-v-4628e279>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-4628e279>on first run, pick server using geoip</li><li data-v-4628e279>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-4628e279>[2023-05-31 patch]</li><ul data-v-4628e279><li data-v-4628e279>implement species-restricted plantzones and workshops</li><li data-v-4628e279>implement output redirection (available for any worker at lvl 40)</li></ul><li data-v-4628e279>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-4628e279>remote town workshop job should require a connection</li><li data-v-4628e279>when connection node selected, sort shared jobs list by %</li><li data-v-4628e279>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-4628e279><li data-v-4628e279>add +1 skills</li></ul><li data-v-4628e279>add intracity distances for workshops (currently all 0) (use notes at bottom)</li><ul data-v-4628e279><li data-v-4628e279>show real house positions in housecraft viewer</li></ul><li data-v-4628e279>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-4628e279><li data-v-4628e279>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-4628e279>find a consistent fast way to build optimal connections (orderless)</li><li data-v-4628e279>add lodgage support to workshop system</li><li data-v-4628e279>on item icon hover: show name and price</li><li data-v-4628e279>workerlist: show drops instead of pzname</li><li data-v-4628e279>grade towns/workers graphically with bar charts</li><li data-v-4628e279>map tweaks <ul data-v-4628e279><li data-v-4628e279>node hover: highlight potential path to town</li><li data-v-4628e279>save zoom too in addition to pos</li><li data-v-4628e279>deal with missing tiles</li><li data-v-4628e279>a setting to hide all inactive elements</li></ul></li><li data-v-4628e279>profit calculation: include feed cost</li><li data-v-4628e279>map: optionally show RegionGroups</li><li data-v-4628e279>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-4628e279>introduce skill roll chances somehow</li><ul data-v-4628e279><li data-v-4628e279>help decide which skills should and should not be rerolled?</li><li data-v-4628e279>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-4628e279>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-4628e279><li data-v-4628e279>different items have different lifetime though</li></ul><li data-v-4628e279>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-4628e279>show market fetch timestamp</li><h2 data-v-4628e279>Notes</h2><pre class="fsxs" data-v-4628e279>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-4628e279>Misc</h2>`,110),ce=e("House Usage"),he=e("HouseCraft Viewer"),ue=e("Droprates"),ve=e("All Towns Lodging (deprecated)"),pe={__name:"AboutView",setup(l){return(u,ge)=>{const s=g("RouterLink");return c(),h("div",x,[j,i(n,null,{q:a(()=>[q]),default:a(()=>[z,C,P]),_:1}),i(n,null,{q:a(()=>[A]),default:a(()=>[W,S,I]),_:1}),i(n,null,{q:a(()=>[E]),default:a(()=>[M,U,B]),_:1}),i(n,null,{q:a(()=>[V,H,T]),default:a(()=>[L]),_:1}),i(n,null,{q:a(()=>[$,N,R,F,X,Y,G]),default:a(()=>[O,Q,D,K,J]),_:1}),i(n,null,{q:a(()=>[Z]),default:a(()=>[ee,te,ae,oe,ie,le,ne,se,de]),_:1}),re,t("p",null,[i(s,{to:"/workshops"},{default:a(()=>[ce]),_:1})]),t("p",null,[i(s,{to:"/housecraft"},{default:a(()=>[he]),_:1})]),t("p",null,[i(s,{to:"/droprates"},{default:a(()=>[ue]),_:1})]),t("p",null,[i(s,{to:"/lodging"},{default:a(()=>[ve]),_:1})])])}}},we=r(pe,[["__scopeId","data-v-4628e279"]]);export{we as default};
