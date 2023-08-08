import{_ as r,o as c,c as h,a,r as s,F as v,b as e,d as i,w as t,e as p,f as g,p as m,g as w}from"./index.f5c380ad.js";const f={},k={class:"q"},y=e(" Q: "),_=e(" A: ");function b(d,u){return c(),h(v,null,[a("div",k,[y,s(d.$slots,"q",{},void 0,!0)]),a("div",null,[_,s(d.$slots,"default",{},void 0,!0)])],64)}const l=r(f,[["render",b],["__scopeId","data-v-02dd3424"]]),o=d=>(m("data-v-ad40928e"),d=d(),w(),d),x={class:"about"},q=o(()=>a("h2",null,"Q&A",-1)),j=e(" What is the purpose of this project? "),C=e(" Optimise your "),z=o(()=>a("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),A=e(" to bring more silver. "),S=e(" How to use? "),W=e(" First of all go to Settings, select your server and tax. After that, two options are available: "),P=o(()=>a("li",null,"Quick and simple: do nothing and just look at Plantzones page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones if just starting out.",-1)),I=o(()=>a("li",null,"Personalized and nuanced: go to Home page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home if you want to improve or rework an existing empire.",-1)),E=e(" Is there any video or guide? "),U=o(()=>a("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),B=e(", "),M=o(()=>a("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),H=e(" What does "),T=o(()=>a("strong",null,"+efficiency",-1)),L=e(" column mean and why is it always negative for me? "),$=e(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),V=e(" Why are node connections so bad? When building path from town "),N=o(()=>a("strong",null,"A",-1)),F=e(" to node "),Q=o(()=>a("strong",null,"B",-1)),R=e(", it ignores the fact that there is already taken node "),Y=o(()=>a("strong",null,"C",-1)),G=e(" on the way. "),X=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),O=o(()=>a("strong",null,"B",-1)),D=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),K=o(()=>a("strong",null,"C",-1)),J=e(". "),Z=e(" Where does the drop data come from and how old? "),ee=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),ae=o(()=>a("br",null,null,-1)),te=e(" Unlucky drops in Eternal Winter: observed by me in mid 2022. Lucky drops across all regions: observed in june 2023."),oe=o(()=>a("br",null,null,-1)),ie=e(" Morning Land drops: observed in june 2023 - regular nodes are fine, "),de=o(()=>a("span",{class:"warning"},"excavations use tentative values",-1)),le=e(", reasonably accurate measurements are going to take a while."),ne=o(()=>a("br",null,null,-1)),se=e(" Also, it is currently unclear how giant bonus interacts with sacks - giants bring a little bit more sacks than expected (with 99% confidence), reason unknown "),re=p(`<h2 data-v-ad40928e>Tips &amp; tricks</h2><li data-v-ad40928e>Anywhere you see a \u25B6, click to expand. Also hover over <abbr class="tooltip" title="water is wet" data-v-ad40928e>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-ad40928e>dot-underlined</abbr> things to see useful info</li><li data-v-ad40928e>Spend some time on item valuation on Settings page: set <strong data-v-ad40928e>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-ad40928e>Home page Empire pane has useful stats. Get rid of <strong data-v-ad40928e>Worst Taken</strong> and acquire <strong data-v-ad40928e>Best Untaken</strong></li><li data-v-ad40928e>Use <strong data-v-ad40928e>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-ad40928e>revert</strong> back</li><ul data-v-ad40928e><li data-v-ad40928e>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-ad40928e>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-ad40928e>If you have nodes invested for grinding, mark them with <strong data-v-ad40928e>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-ad40928e><li data-v-ad40928e>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-ad40928e>Total CP</strong> pane</li></ul><li data-v-ad40928e>Use <strong data-v-ad40928e>import</strong> and <strong data-v-ad40928e>export</strong> buttons in <strong data-v-ad40928e>All towns/workers list</strong> to: <ul data-v-ad40928e><li data-v-ad40928e>compare different builds</li><li data-v-ad40928e>restore to a known state when messed up</li><li data-v-ad40928e>share your setup with other people</li><li data-v-ad40928e>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-ad40928e><li data-v-ad40928e>download and install <a href="https://www.python.org/" data-v-ad40928e>Python</a> 3.9+</li><li data-v-ad40928e>download the <a href="https://pastebin.com/vQF7a8AB" data-v-ad40928e>Import Script</a>, and run it through Python</li><li data-v-ad40928e>now head back to Workerman Home page &gt; All towns &gt; import the json file you just created by running the script</li></ul></ul></li><li data-v-ad40928e>Workloads (and therefore profits) depend on <strong data-v-ad40928e>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-ad40928e><li data-v-ad40928e>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-ad40928e>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-ad40928e><li data-v-ad40928e>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-ad40928e>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-ad40928e>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-ad40928e>Changelog</h2><li data-v-ad40928e>[2023-05-31 patch] new luck drops (version 9)</li><ul data-v-ad40928e><li data-v-ad40928e>all nodes of kind 4 (plant growing): all luck drops replaced with item 1024</li><li data-v-ad40928e>all nodes of kind 6 (plant gathering): all luck drops replaced with item 1024</li><li data-v-ad40928e>all nodes of kind 7 (mining): all luck drops replaced with item 1025</li><li data-v-ad40928e>all nodes of kind 8 (lumbering): all luck drops replaced with items 5005, 5006, 5007, 5008, 5011</li><li data-v-ad40928e>all nodes of kind 11 (dried fish): all luck drops replaced with items 1027, 6501</li><li data-v-ad40928e>all nodes of kind 15 (excavation): all luck drops replaced with item 1026</li><li data-v-ad40928e>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-ad40928e>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-ad40928e>housing config &gt; items are now sorted exactly as ingame</li><li data-v-ad40928e>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-ad40928e>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-ad40928e>skip unknown (event?) plantzone jobs when importing</li><li data-v-ad40928e>Empire &gt; Best Untaken selects best species automatically</li><li data-v-ad40928e>[2023-06-05 patch] added node 1833</li><li data-v-ad40928e>[2023-05-31 patch] big rework</li><ul data-v-ad40928e><li data-v-ad40928e>level cap 40, +2 skill slots</li><li data-v-ad40928e>humans got +3 luck</li><li data-v-ad40928e>giants got +68.4% yield of <s data-v-ad40928e>all</s> all unlucky drops, rounded down</li></ul><li data-v-ad40928e>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-ad40928e>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-ad40928e>in darkmode, buttons are now actually dark</li><li data-v-ad40928e>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-ad40928e><li data-v-ad40928e>item 1024 = equal chance of 1x any fruit</li><li data-v-ad40928e>item 1025 = equal chance of 1x any gem</li><li data-v-ad40928e>item 1026 = equal chance of 1x any trace</li><li data-v-ad40928e>item 1027 = equal chance of 1x any coral</li></ul><li data-v-ad40928e>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-ad40928e><li data-v-ad40928e>check town <strong data-v-ad40928e>config</strong> to see what houses to buy </li><li data-v-ad40928e>be careful to not exceed the town limits, profits will show <strong data-v-ad40928e>NaN</strong>&#39;s and <strong data-v-ad40928e>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-ad40928e>for easier prototyping, only working workers consume lodging</li></ul><li data-v-ad40928e>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-ad40928e>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-ad40928e><li data-v-ad40928e>each house can be set up in <strong data-v-ad40928e>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-ad40928e>previously assigned <strong data-v-ad40928e>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-ad40928e>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-ad40928e>on town/node click, map pans to its location</li><li data-v-ad40928e>removed 13 nodes that are invisible ingame</li><li data-v-ad40928e>added a ranking of untaken nodes in Empire pane</li><li data-v-ad40928e>[2023-02-21 patch] updated node CP costs</li><li data-v-ad40928e>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-ad40928e><li data-v-ad40928e>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-ad40928e>added more worker types + seamless transition between</li><li data-v-ad40928e>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-ad40928e>individual plantzone efficiency via cashflow</li><ul data-v-ad40928e><li data-v-ad40928e>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-ad40928e>added farming and workshop job types in Send Worker dialog</li><li data-v-ad40928e>/plantzones page tweaks</li><ul data-v-ad40928e><li data-v-ad40928e>node name link navigates to its map location (upd: with permalinks)</li><li data-v-ad40928e>item link navigates to its settings price row</li><li data-v-ad40928e>shows item names to allow in-browser search</li><li data-v-ad40928e>selects nearest town by CP instead of distance</li></ul><li data-v-ad40928e>removed Blue Maned Lion&#39;s Manor</li><li data-v-ad40928e>~floating modifiers support</li><li data-v-ad40928e>selecting a node highlights connection path</li><li data-v-ad40928e>worker job assignment moves to the end of connection queue</li><li data-v-ad40928e>worker editor: added button to suggest best skills for current job</li><li data-v-ad40928e>map: color active/inactive links</li><li data-v-ad40928e>updated connection algorithm to encourage existing paths reuse</li><li data-v-ad40928e>[2022-10-26 patch] updated house CP costs</li><li data-v-ad40928e>worker revert button, plantzone luck effect indicator</li><li data-v-ad40928e>configurable default worker for hire</li><li data-v-ad40928e>send worker dialog: show worker stats</li><li data-v-ad40928e>worker editor: when on job, show profit changes while editing</li><li data-v-ad40928e>node info: show/edit the workload modifier</li><li data-v-ad40928e>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-ad40928e>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-ad40928e>added total daily items summary</li><li data-v-ad40928e>added workers+lodging import/export to json file</li><li data-v-ad40928e>[2022-09-21 patch] updated several node distances</li><li data-v-ad40928e>added worker management</li><li data-v-ad40928e>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-ad40928e>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-ad40928e>Todo</h2><li data-v-ad40928e>Plantzones page &gt; add town filter</li><li data-v-ad40928e>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><li data-v-ad40928e>totals &gt; split out personal items storage CP</li><li data-v-ad40928e>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-ad40928e><li data-v-ad40928e>same idea with connections</li></ul><li data-v-ad40928e>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-ad40928e>smart worker\u2194job rearrangement within a town</li><ul data-v-ad40928e><li data-v-ad40928e>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-ad40928e>on first run, pick server using geoip</li><li data-v-ad40928e>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-ad40928e>[2023-05-31 patch]</li><ul data-v-ad40928e><li data-v-ad40928e>implement species-restricted plantzones and workshops</li><li data-v-ad40928e>implement output redirection (available for any worker at lvl 40)</li></ul><li data-v-ad40928e>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-ad40928e>remote town workshop job should require a connection</li><li data-v-ad40928e>when connection node selected, sort shared jobs list by %</li><li data-v-ad40928e>enforce daily shipbuilding limit</li><li data-v-ad40928e>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-ad40928e><li data-v-ad40928e>add +1 skills</li></ul><li data-v-ad40928e>add intracity distances for workshops (currently all 0) (use notes at bottom)</li><li data-v-ad40928e>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-ad40928e><li data-v-ad40928e>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-ad40928e>find a consistent fast way to build optimal connections (orderless)</li><li data-v-ad40928e>add lodgage support to workshop system</li><li data-v-ad40928e>on item icon hover: show name and price</li><li data-v-ad40928e>workerlist: show drops instead of pzname</li><li data-v-ad40928e>grade towns/workers graphically with bar charts</li><li data-v-ad40928e>map tweaks <ul data-v-ad40928e><li data-v-ad40928e>node hover: highlight potential path to town</li><li data-v-ad40928e>save zoom too in addition to pos</li><li data-v-ad40928e>deal with missing tiles</li><li data-v-ad40928e>a setting to hide all inactive elements</li></ul></li><li data-v-ad40928e>profit calculation: include feed cost</li><li data-v-ad40928e>map: optionally show RegionGroups</li><li data-v-ad40928e>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-ad40928e>introduce skill roll chances somehow</li><ul data-v-ad40928e><li data-v-ad40928e>help decide which skills should and should not be rerolled?</li><li data-v-ad40928e>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-ad40928e>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-ad40928e><li data-v-ad40928e>different items have different lifetime though</li></ul><li data-v-ad40928e>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-ad40928e>show market fetch timestamp</li><h2 data-v-ad40928e>Notes</h2><pre class="fsxs" data-v-ad40928e>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-ad40928e>Misc</h2>`,105),ce=e("House Usage"),he=e("HouseCraft Viewer"),ue=e("Droprates"),ve=e("All Towns Lodging (deprecated)"),pe={__name:"AboutView",setup(d){return(u,ge)=>{const n=g("RouterLink");return c(),h("div",x,[q,i(l,null,{q:t(()=>[j]),default:t(()=>[C,z,A]),_:1}),i(l,null,{q:t(()=>[S]),default:t(()=>[W,P,I]),_:1}),i(l,null,{q:t(()=>[E]),default:t(()=>[U,B,M]),_:1}),i(l,null,{q:t(()=>[H,T,L]),default:t(()=>[$]),_:1}),i(l,null,{q:t(()=>[V,N,F,Q,R,Y,G]),default:t(()=>[X,O,D,K,J]),_:1}),i(l,null,{q:t(()=>[Z]),default:t(()=>[ee,ae,te,oe,ie,de,le,ne,se]),_:1}),re,a("p",null,[i(n,{to:"/workshops"},{default:t(()=>[ce]),_:1})]),a("p",null,[i(n,{to:"/housecraft"},{default:t(()=>[he]),_:1})]),a("p",null,[i(n,{to:"/droprates"},{default:t(()=>[ue]),_:1})]),a("p",null,[i(n,{to:"/lodging"},{default:t(()=>[ve]),_:1})])])}}},we=r(pe,[["__scopeId","data-v-ad40928e"]]);export{we as default};
