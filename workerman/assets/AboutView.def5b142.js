import{_ as r,o as h,c as p,a as o,r as u,F as m,b as e,u as y,d as _,e as w,w as n,t as k,f as t,g as v,p as b,h as K}from"./index.b10d8000.js";const x={},j={class:"q"},q=e(" Q: "),z=e(" A: ");function S(s,f){return h(),p(m,null,[o("div",j,[q,u(s.$slots,"q",{},void 0,!0)]),o("div",null,[z,u(s.$slots,"default",{},void 0,!0)])],64)}const l=r(x,[["render",S],["__scopeId","data-v-02dd3424"]]),C={setup(){return{gameStore:y()}},props:{nodeKey:Number}};function P(s,f,c,d,ta,aa){const g=_("RouterLink");return h(),w(g,{tag:"a",to:{path:"./",hash:"#node"+c.nodeKey}},{default:n(()=>[e(k(d.gameStore.plantzoneName(c.nodeKey)),1)]),_:1},8,["to"])}const a=r(C,[["render",P]]),i=s=>(b("data-v-ac1386f1"),s=s(),K(),s),W={class:"about"},A=i(()=>o("h2",null,"Q&A",-1)),I=e(" What is the purpose of this project? "),M=e(" Optimize your "),U=i(()=>o("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),B=e(" to bring more silver. "),E=e(" How to use? "),$=e(" First of all go to "),L=i(()=>o("strong",{class:"notranslate"},"Settings",-1)),H=e(", select your server and tax. After that, two options are available: "),T=i(()=>o("li",null,[e("Quick and simple: do nothing and just look at "),o("strong",{class:"notranslate"},"Plantzones"),e(" page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones page if just starting out.")],-1)),N=i(()=>o("li",null,[e("Personalized and nuanced: go to "),o("strong",{class:"notranslate"},"Home"),e(" page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home page if you want to improve or rework an existing empire.")],-1)),V=e(" Is there any video or guide? "),R=i(()=>o("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),Y=e(", "),F=i(()=>o("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),Q=e(" How do i make an empire optimized for cooking/alchemy? "),G=e(" Only difference is you don't tax cooking/alchemy mats (mark as Keep on Setings page). You are still going to gather some unwanted mats, just sell them and use that $ to buy whatever you need. If you want to completely avoid some item put in 0 as its Custom Value. "),O=e(" What does "),X=i(()=>o("strong",{class:"notranslate"},"+efficiency",-1)),D=e(" column mean and why is it always negative for me? "),J=e(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),Z=e(" I checked the plantzones page X months ago and it showed Y and now shows Z, why? "),ee=e(" Because prices change over time. "),te=e(" Why are node connections so bad? When building path from town "),ae=i(()=>o("strong",{class:"notranslate"},"A",-1)),oe=e(" to node "),ie=i(()=>o("strong",{class:"notranslate"},"B",-1)),ne=e(", it ignores the fact that there is already taken node "),se=i(()=>o("strong",{class:"notranslate"},"C",-1)),le=e(" on the way. "),de=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),ce=i(()=>o("strong",{class:"notranslate"},"B",-1)),re=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),he=i(()=>o("strong",{class:"notranslate"},"C",-1)),fe=e(". "),ue=e(" Where does the drop data come from and how old? "),pe=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good. Might have changed in the meantime."),_e=i(()=>o("br",null,null,-1)),ve=e(" Unlucky drops in Eternal Winter: observed near mid 2022."),ge=i(()=>o("br",null,null,-1)),me=e(" Lucky drops across all regions: observed in june 2023."),ye=i(()=>o("br",null,null,-1)),we=e(" Morning Land drops: observed at summer 2023 - regular nodes are fine, excavations are approximate, too rare to judge confidently "),ke=i(()=>o("li",null,[e("circumstantial evidence added in for more volume: "),o("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1126036873450631198"},"1"),e(", "),o("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1142011540648763403"},"2")],-1)),be=e(" Also, it is currently unclear how giant bonus interacts with sacks - giants bring just a bit more (but stastically significant) sacks than theoretically expected, reason unknown "),Ke=v('<h2 data-v-ac1386f1>Tips &amp; tricks</h2><ul style="padding-left:16px;" data-v-ac1386f1><li data-v-ac1386f1><details data-v-ac1386f1><summary data-v-ac1386f1>Anywhere you see a right facing triangle, click to expand</summary> click again to hide </details></li><li data-v-ac1386f1>Also hover over <abbr class="tooltip" title="water is wet" data-v-ac1386f1>\u2139\uFE0F</abbr>&#39;s and other <abbr class="tooltip" title="roses are blue" data-v-ac1386f1>dot-underlined</abbr> things to see useful info</li><li data-v-ac1386f1>Spend some time on item valuation on Settings page: set <strong class="notranslate" data-v-ac1386f1>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-ac1386f1>Home page &gt; <strong class="notranslate" data-v-ac1386f1>Empire</strong> pane has some useful stats. Get rid of <strong class="notranslate" data-v-ac1386f1>Worst Taken</strong> and acquire <strong class="notranslate" data-v-ac1386f1>Best Untaken</strong></li><li data-v-ac1386f1>Use <strong class="notranslate" data-v-ac1386f1>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong class="notranslate" data-v-ac1386f1>revert</strong> back</li><ul data-v-ac1386f1><li data-v-ac1386f1>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-ac1386f1>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-ac1386f1>If you have nodes invested for grinding, mark them with <strong class="notranslate" data-v-ac1386f1>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-ac1386f1><li data-v-ac1386f1>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong class="notranslate" data-v-ac1386f1>Total CP</strong> pane</li><li data-v-ac1386f1>if a zero-cost connects to a wrong town, assign a whole chain of zero-costs along the path you want (usually just 1 dummy halfway is enough)</li></ul><li data-v-ac1386f1>Use <strong class="notranslate" data-v-ac1386f1>import</strong> and <strong class="notranslate" data-v-ac1386f1>export</strong> buttons in <strong class="notranslate" data-v-ac1386f1>All towns/workers list</strong> to: <ul data-v-ac1386f1><li data-v-ac1386f1>compare different builds</li><li data-v-ac1386f1>restore to a known state when messed up</li><li data-v-ac1386f1>share your setup with other people</li><li data-v-ac1386f1>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-ac1386f1><li data-v-ac1386f1>download and install <a href="https://www.python.org/" data-v-ac1386f1>Python</a> 3.9+</li><li data-v-ac1386f1>download the <a href="https://pastebin.com/yuQQmFDW" data-v-ac1386f1>Import Script</a>, and run it through Python</li><li data-v-ac1386f1>now head back to Workerman Home page &gt; All towns/workers list &gt; import the json file you just created by running the script</li></ul><li data-v-ac1386f1>warning: if the amount of workers you have ingame is outside the F2P town limits, enter P2W lodging in town config <u data-v-ac1386f1>before</u> importing, or the housing will not resolve</li></ul></li><li data-v-ac1386f1>Workloads (and therefore profits) depend on <strong class="notranslate" data-v-ac1386f1>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-ac1386f1><li data-v-ac1386f1>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-ac1386f1>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-ac1386f1><li data-v-ac1386f1>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-ac1386f1>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-ac1386f1>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li></ul><h2 data-v-ac1386f1>Changelog</h2><li data-v-ac1386f1>[2024-01-31 patch] extended Ulukita region (still 0 plantzones)</li><li data-v-ac1386f1>added JP language</li>',5),xe=e("[2023-11-08 patch] replaced junk yields with ores at "),je=i(()=>o("summary",null,"10 excavation nodes. yields are approximate",-1)),qe=e(", "),ze=e(", "),Se=e(", "),Ce=e(", "),Pe=e(", "),We=e(", "),Ae=e(", "),Ie=e(", "),Me=e(", "),Ue=e("[2023-11-08 patch] increased lumbering byproducts yields by set multipliers at "),Be=i(()=>o("summary",null,"17 lumbering nodes",-1)),Ee=e(", "),$e=e(", "),Le=e(", "),He=e(", "),Te=e(", "),Ne=e(", "),Ve=e(", "),Re=e(", "),Ye=e(", "),Fe=e(", "),Qe=e(", "),Ge=e(", "),Oe=e(", "),Xe=e(", "),De=e(", "),Je=e(", "),Ze=i(()=>o("li",null,"[2023-11-01 patch] increased all trace yields",-1)),et=i(()=>o("summary",null,"Main continent: x2",-1)),tt=e(", "),at=e(", "),ot=e(", "),it=e(", "),nt=e(", "),st=e(", "),lt=e(", "),dt=e(", "),ct=e(", "),rt=e(", "),ht=e(", "),ft=e(", "),ut=e(", "),pt=e(", "),_t=e(", "),vt=i(()=>o("summary",null,"Morningland: x5",-1)),gt=e(", "),mt=e(", "),yt=e(", "),wt=e(", "),kt=i(()=>o("li",null,"[2023-11-01 patch] increased all sap yields",-1)),bt=i(()=>o("summary",null,"Maple & Pine Sap: x1.5",-1)),Kt=e(", "),xt=e(", "),jt=e(", "),qt=i(()=>o("summary",null,"Snowfield Cedar Sap: x5",-1)),zt=e(", "),St=i(()=>o("summary",null,"Other Sap: x2",-1)),Ct=e(", "),Pt=e(", "),Wt=e(", "),At=e(", "),It=e(", "),Mt=e(", "),Ut=e(", "),Bt=e(", "),Et=e(", "),$t=e(", "),Lt=e(", "),Ht=e(", "),Tt=e(", "),Nt=e(", "),Vt=e(", "),Rt=e(", "),Yt=e(", "),Ft=e(", "),Qt=e(", "),Gt=e(", "),Ot=v(`<li data-v-ac1386f1>implemented manual output redirection (available at any worker level for easier prototyping)</li><li data-v-ac1386f1>added separate VP setting to add 16 P2W slots to every town</li><li data-v-ac1386f1>[2023-05-31 patch] new luck drops (current version: 12 aka the final one. data collection stopped)</li><ul data-v-ac1386f1><li data-v-ac1386f1>all nodes of kind 4 (plant growing): all luck drops replaced with item 1024</li><li data-v-ac1386f1>all nodes of kind 6 (plant gathering): all luck drops replaced with item 1024</li><li data-v-ac1386f1>all nodes of kind 7 (mining): all luck drops replaced with item 1025</li><li data-v-ac1386f1>all nodes of kind 8 (lumbering): all luck drops replaced with items 5005, 5006, 5007, 5008, 5011</li><li data-v-ac1386f1>all nodes of kind 11 (dried fish): all luck drops replaced with items 1027, 6501</li><li data-v-ac1386f1>all nodes of kind 15 (excavation): all luck drops replaced with item 1026</li><li data-v-ac1386f1>nodes 1675, 1677, 1776: unlucky drop increased to 8 (maybe happened earlier, didn&#39;t pay attention)</li><li data-v-ac1386f1>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-ac1386f1>[2023-08-23 patch] added new Ulukita region with 0 plantzones</li><li data-v-ac1386f1>added KR language</li><li data-v-ac1386f1>[2023-03-10 patch] item 4206 yields tripled at 3 plantzones</li><li data-v-ac1386f1>housing config &gt; items are now sorted exactly as ingame</li><li data-v-ac1386f1>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-ac1386f1>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-ac1386f1>skip unknown (event?) plantzone jobs when importing - will display as an idle worker instead</li><li data-v-ac1386f1>Empire &gt; Best Untaken selects best species automatically</li><li data-v-ac1386f1>[2023-06-05 patch] added node 1833</li><li data-v-ac1386f1>[2023-05-31 patch] big rework</li><ul data-v-ac1386f1><li data-v-ac1386f1>level cap 40, +2 skill slots</li><li data-v-ac1386f1>humans got +3 luck</li><li data-v-ac1386f1>giants got +68.4% yield of <s data-v-ac1386f1>all</s> all unlucky drops, rounded down</li></ul><li data-v-ac1386f1>fixed warehouse slot calculations to require lucky items too + 1 slot required to be free</li><li data-v-ac1386f1>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-ac1386f1>in darkmode, buttons are now actually dark</li><li data-v-ac1386f1>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-ac1386f1><li data-v-ac1386f1>item 1024 = equal chance of 1x any fruit</li><li data-v-ac1386f1>item 1025 = equal chance of 1x any gem</li><li data-v-ac1386f1>item 1026 = equal chance of 1x any trace</li><li data-v-ac1386f1>item 1027 = equal chance of 1x any coral</li></ul><li data-v-ac1386f1>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-ac1386f1><li data-v-ac1386f1>check town <strong class="notranslate" data-v-ac1386f1>config</strong> to see which houses to buy</li><li data-v-ac1386f1>be careful to not exceed the town limits, profits will show <strong class="notranslate" data-v-ac1386f1>NaN</strong>&#39;s and <strong class="notranslate" data-v-ac1386f1>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-ac1386f1>for easier prototyping, idle workers do not consume lodging</li></ul><li data-v-ac1386f1>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-ac1386f1>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-ac1386f1><li data-v-ac1386f1>each house can be set up in <strong class="notranslate" data-v-ac1386f1>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-ac1386f1>previously assigned <strong class="notranslate" data-v-ac1386f1>\u{1F3ED}Workshop</strong> jobs have been converted into <strong class="notranslate" data-v-ac1386f1>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-ac1386f1>on town/node click, map pans to its location</li><li data-v-ac1386f1>removed 13 nodes that are invisible ingame</li><li data-v-ac1386f1>added a ranking of untaken nodes in Empire pane</li><li data-v-ac1386f1>[2023-02-21 patch] updated node CP costs</li><li data-v-ac1386f1>job efficiency now includes lodging cost: eff = income / (connectionCost + lodgingCost)</li><ul data-v-ac1386f1><li data-v-ac1386f1>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-ac1386f1>added more worker types + seamless transition between</li><li data-v-ac1386f1>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-ac1386f1>individual plantzone efficiency via cashflow</li><ul data-v-ac1386f1><li data-v-ac1386f1>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-ac1386f1>added farming and workshop job types in Send Worker dialog</li><li data-v-ac1386f1>/plantzones page tweaks</li><ul data-v-ac1386f1><li data-v-ac1386f1>node name link navigates to its map location (upd: with permalinks)</li><li data-v-ac1386f1>item link navigates to its settings price row</li><li data-v-ac1386f1>shows item names to allow in-browser search</li><li data-v-ac1386f1>selects nearest town by CP instead of distance</li></ul><li data-v-ac1386f1>removed Blue Maned Lion&#39;s Manor</li><li data-v-ac1386f1>~floating modifiers support</li><li data-v-ac1386f1>selecting a node highlights connection path</li><li data-v-ac1386f1>worker job assignment moves to the end of connection queue</li><li data-v-ac1386f1>worker editor: added button to suggest best skills for current job</li><li data-v-ac1386f1>map: color active/inactive links</li><li data-v-ac1386f1>updated connection algorithm to encourage existing paths reuse</li><li data-v-ac1386f1>[2022-10-26 patch] updated house CP costs</li><li data-v-ac1386f1>worker revert button, plantzone luck effect indicator</li><li data-v-ac1386f1>configurable default worker for hire</li><li data-v-ac1386f1>send worker dialog: show worker stats</li><li data-v-ac1386f1>worker editor: when on job, show profit changes while editing</li><li data-v-ac1386f1>node info: show/edit the workload modifier</li><li data-v-ac1386f1>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-ac1386f1>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-ac1386f1>added total daily items summary</li><li data-v-ac1386f1>added workers+lodging import/export to json file</li><li data-v-ac1386f1>[2022-09-21 patch] updated several node distances</li><li data-v-ac1386f1>added worker management</li><li data-v-ac1386f1>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-ac1386f1>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-ac1386f1>Todo</h2><li data-v-ac1386f1>Plantzones page &gt; add town filter</li><li data-v-ac1386f1>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><ul data-v-ac1386f1><li data-v-ac1386f1>a quick popup would be nice right after clicking <strong data-v-ac1386f1>hire</strong> asking \u{1F47A} or \u{1F422}</li><li data-v-ac1386f1>need to get a list of hireables per town to hire town-specific kind of \u{1F47A}</li></ul><li data-v-ac1386f1>totals &gt; split out personal items storage CP</li><li data-v-ac1386f1>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-ac1386f1><li data-v-ac1386f1>same idea with connections</li></ul><li data-v-ac1386f1>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-ac1386f1>smart worker\u2194job rearrangement within a town</li><ul data-v-ac1386f1><li data-v-ac1386f1>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-ac1386f1>on first run, pick server using geoip</li><li data-v-ac1386f1>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-ac1386f1>[2023-05-31 patch]</li><ul data-v-ac1386f1><li data-v-ac1386f1>implement species-restricted plantzones and workshops</li></ul><li data-v-ac1386f1>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-ac1386f1>remote town workshop job should require a connection</li><li data-v-ac1386f1>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-ac1386f1><li data-v-ac1386f1>add +1 skills</li></ul><li data-v-ac1386f1>add intracity distances for workshops (currently all 0) (use notes at bottom)</li><ul data-v-ac1386f1><li data-v-ac1386f1>show real house positions in housecraft viewer</li></ul><li data-v-ac1386f1>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-ac1386f1><li data-v-ac1386f1>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-ac1386f1>find a consistent fast way to build optimal connections (orderless)</li><li data-v-ac1386f1>add lodgage support to workshop system</li><li data-v-ac1386f1>on item icon hover: show name and price</li><li data-v-ac1386f1>workerlist: show drops instead of pzname</li><li data-v-ac1386f1>grade towns/workers graphically with bar charts</li><li data-v-ac1386f1>map tweaks <ul data-v-ac1386f1><li data-v-ac1386f1>node hover: highlight potential path to town</li><li data-v-ac1386f1>save zoom too in addition to pos</li><li data-v-ac1386f1>deal with missing tiles</li><li data-v-ac1386f1>a setting to hide all inactive elements</li></ul></li><li data-v-ac1386f1>profit calculation: include feed cost</li><li data-v-ac1386f1>map: optionally show RegionGroups</li><li data-v-ac1386f1>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-ac1386f1>introduce skill roll chances somehow</li><ul data-v-ac1386f1><li data-v-ac1386f1>help decide which skills should and should not be rerolled?</li><li data-v-ac1386f1>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-ac1386f1>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-ac1386f1><li data-v-ac1386f1>different items have different lifetime though</li></ul><li data-v-ac1386f1>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-ac1386f1>show market fetch timestamp</li><h2 data-v-ac1386f1>Notes</h2><pre class="fsxs" data-v-ac1386f1>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-ac1386f1>Misc</h2>`,99),Xt=e("House Usage"),Dt=e("HouseCraft Viewer"),Jt=e("Droprates"),Zt=e("All Towns Lodging (deprecated)"),ea={__name:"AboutView",setup(s){return(f,c)=>{const d=_("RouterLink");return h(),p("div",W,[A,t(l,null,{q:n(()=>[I]),default:n(()=>[M,U,B]),_:1}),t(l,null,{q:n(()=>[E]),default:n(()=>[$,L,H,T,N]),_:1}),t(l,null,{q:n(()=>[V]),default:n(()=>[R,Y,F]),_:1}),t(l,null,{q:n(()=>[Q]),default:n(()=>[G]),_:1}),t(l,null,{q:n(()=>[O,X,D]),default:n(()=>[J]),_:1}),t(l,null,{q:n(()=>[Z]),default:n(()=>[ee]),_:1}),t(l,null,{q:n(()=>[te,ae,oe,ie,ne,se,le]),default:n(()=>[de,ce,re,he,fe]),_:1}),t(l,null,{q:n(()=>[ue]),default:n(()=>[pe,_e,ve,ge,me,ye,we,ke,be]),_:1}),Ke,o("li",null,[xe,o("details",null,[je,t(a,{nodeKey:144}),qe,t(a,{nodeKey:480}),ze,t(a,{nodeKey:488}),Se,t(a,{nodeKey:842}),Ce,t(a,{nodeKey:902}),Pe,t(a,{nodeKey:912}),We,t(a,{nodeKey:1220}),Ae,t(a,{nodeKey:1553}),Ie,t(a,{nodeKey:1687}),Me,t(a,{nodeKey:1688})])]),o("li",null,[Ue,o("details",null,[Be,t(a,{nodeKey:142}),Ee,t(a,{nodeKey:167}),$e,t(a,{nodeKey:183}),Le,t(a,{nodeKey:455}),He,t(a,{nodeKey:464}),Te,t(a,{nodeKey:834}),Ne,t(a,{nodeKey:855}),Ve,t(a,{nodeKey:905}),Re,t(a,{nodeKey:908}),Ye,t(a,{nodeKey:952}),Fe,t(a,{nodeKey:1212}),Qe,t(a,{nodeKey:1215}),Ge,t(a,{nodeKey:1216}),Oe,t(a,{nodeKey:1219}),Xe,t(a,{nodeKey:1777}),De,t(a,{nodeKey:1820}),Je,t(a,{nodeKey:1821})])]),Ze,o("ul",null,[o("li",null,[o("details",null,[et,t(a,{nodeKey:144}),tt,t(a,{nodeKey:480}),at,t(a,{nodeKey:488}),ot,t(a,{nodeKey:842}),it,t(a,{nodeKey:902}),nt,t(a,{nodeKey:912}),st,t(a,{nodeKey:1220}),lt,t(a,{nodeKey:1553}),dt,t(a,{nodeKey:1637}),ct,t(a,{nodeKey:1687}),rt,t(a,{nodeKey:1688}),ht,t(a,{nodeKey:1709}),ft,t(a,{nodeKey:1716}),ut,t(a,{nodeKey:1720}),pt,t(a,{nodeKey:1770}),_t,t(a,{nodeKey:1778})])]),o("li",null,[o("details",null,[vt,t(a,{nodeKey:1807}),gt,t(a,{nodeKey:1808}),mt,t(a,{nodeKey:1809}),yt,t(a,{nodeKey:1823}),wt,t(a,{nodeKey:1830})])])]),kt,o("ul",null,[o("li",null,[o("details",null,[bt,t(a,{nodeKey:443}),Kt,t(a,{nodeKey:910}),xt,t(a,{nodeKey:1216}),jt,t(a,{nodeKey:1685})])]),o("li",null,[o("details",null,[qt,t(a,{nodeKey:1771}),zt,t(a,{nodeKey:1780})])]),o("li",null,[o("details",null,[St,t(a,{nodeKey:160}),Ct,t(a,{nodeKey:840}),Pt,t(a,{nodeKey:901}),Wt,t(a,{nodeKey:903}),At,t(a,{nodeKey:907}),It,t(a,{nodeKey:1212}),Mt,t(a,{nodeKey:1215}),Ut,t(a,{nodeKey:1219}),Bt,t(a,{nodeKey:1502}),Et,t(a,{nodeKey:1504}),$t,t(a,{nodeKey:1512}),Lt,t(a,{nodeKey:1516}),Ht,t(a,{nodeKey:1526}),Tt,t(a,{nodeKey:1635}),Nt,t(a,{nodeKey:1638}),Vt,t(a,{nodeKey:1683}),Rt,t(a,{nodeKey:1684}),Yt,t(a,{nodeKey:1686}),Ft,t(a,{nodeKey:1712}),Qt,t(a,{nodeKey:1715}),Gt,t(a,{nodeKey:1560})])])]),Ot,o("p",null,[t(d,{to:"/workshops"},{default:n(()=>[Xt]),_:1})]),o("p",null,[t(d,{to:"/housecraft"},{default:n(()=>[Dt]),_:1})]),o("p",null,[t(d,{to:"/droprates"},{default:n(()=>[Jt]),_:1})]),o("p",null,[t(d,{to:"/lodging"},{default:n(()=>[Zt]),_:1})])])}}},ia=r(ea,[["__scopeId","data-v-ac1386f1"]]);export{ia as default};
