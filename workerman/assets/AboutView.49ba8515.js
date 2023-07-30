import{_ as r,o as c,c as h,a as t,r as d,F as v,b as e,d as i,w as a,e as p,f as g,p as m,g as w}from"./index.87c18c97.js";const f={},k={class:"q"},y=e(" Q: "),_=e(" A: ");function b(l,u){return c(),h(v,null,[t("div",k,[y,d(l.$slots,"q",{},void 0,!0)]),t("div",null,[_,d(l.$slots,"default",{},void 0,!0)])],64)}const n=r(f,[["render",b],["__scopeId","data-v-02dd3424"]]),o=l=>(m("data-v-79902897"),l=l(),w(),l),x={class:"about"},j=o(()=>t("h2",null,"Q&A",-1)),q=e(" What is the purpose of this project? "),C=e(" Optimise your "),z=o(()=>t("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),S=e(" to bring more silver. "),A=e(" How to use? "),W=e(" First of all go to Settings, select your server and tax. After that, two options are available: "),I=o(()=>t("li",null,"Personalized and nuanced: go to Home, select a town, hire a worker, send to whatever node gives highest M$/day/CP, repeat",-1)),P=o(()=>t("li",null,"Quick and simple: just look at Plantzones page - nodes at the top are good, nodes at the bottom are bad",-1)),M=e(" Simply put, use Home page if you want to improve an existing empire, and Plantzones if just starting out. "),E=e(" Is there any video or guide? "),B=o(()=>t("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),U=e(", "),$=o(()=>t("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),H=e(" What does "),L=o(()=>t("strong",null,"+efficiency",-1)),N=e(" column say in Send Worker dialog and why is it always negative for me? "),T=e(" It shows the change in total M$/day/CP of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),V=e(" Why are node connections so bad? When building path from town "),R=o(()=>t("strong",null,"A",-1)),F=e(" to node "),Q=o(()=>t("strong",null,"B",-1)),Y=e(", it ignores the fact that there is already taken node "),X=o(()=>t("strong",null,"C",-1)),G=e(" on the way. "),O=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),D=o(()=>t("strong",null,"B",-1)),J=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),K=o(()=>t("strong",null,"C",-1)),Z=e(". "),ee=e(" Where does the drop data come from and how old? "),te=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),ae=o(()=>t("br",null,null,-1)),oe=e(" Unlucky drops in Eternal Winter: observed by me in mid 2022. Lucky drops across all regions: observed by me in june 2023."),ie=o(()=>t("br",null,null,-1)),le=e(" Morning Land drops: observed by me in june 2023 - regular nodes are fine, "),ne=o(()=>t("span",{class:"warning"},"excavations use tentative values",-1)),se=e(", reasonably accurate measurements are going to take a while "),de=p(`<h2 data-v-79902897>Tips &amp; tricks</h2><li data-v-79902897>Anywhere you see a \u25B6, click to expand. Also hover over <abbr title="water is wet" data-v-79902897>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-79902897>dot-underlined</abbr> things to see useful info</li><li data-v-79902897>Spend some time on item valuation on Settings page: set <strong data-v-79902897>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-79902897>Use <strong data-v-79902897>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-79902897>revert</strong> back</li><ul data-v-79902897><li data-v-79902897>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-79902897>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-79902897>If you have nodes invested for grinding, mark them with <strong data-v-79902897>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-79902897><li data-v-79902897>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong data-v-79902897>Total CP</strong> pane</li></ul><li data-v-79902897>Use <strong data-v-79902897>import</strong> and <strong data-v-79902897>export</strong> buttons in <strong data-v-79902897>All towns/workers list</strong> to: <ul data-v-79902897><li data-v-79902897>compare different builds</li><li data-v-79902897>restore to a known state when messed up</li><li data-v-79902897>share your setup with other people</li><li data-v-79902897>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-79902897><li data-v-79902897>download and install <a href="https://www.python.org/" data-v-79902897>Python</a> 3.9+</li><li data-v-79902897>download the <a href="https://pastebin.com/vQF7a8AB" data-v-79902897>Import Script</a>, and run it through Python</li><li data-v-79902897>now head back to Workerman Home page &gt; All towns &gt; import the json file you just created by running the script</li></ul></ul></li><li data-v-79902897>Workloads (and therefore profits) depend on <strong data-v-79902897>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-79902897><li data-v-79902897>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-79902897>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-79902897><li data-v-79902897>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-79902897>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-79902897>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-79902897>Changelog</h2><li data-v-79902897>drop unknown (event?) plantzone jobs when importing</li><li data-v-79902897>Empire &gt; Best Untaken selects best species automatically</li><li data-v-79902897>[2023-05-31 patch] new luck drops (v7 - finally noticed the growing/gathering pattern \u{1F926}\u200D\u2642\uFE0F)</li><ul data-v-79902897><li data-v-79902897>all nodes of kind 4 (plant growing): all luck drops replaced with 0.25x item 1024</li><li data-v-79902897>all nodes of kind 6 (plant gathering): all luck drops replaced with 0.12x item 1024</li><li data-v-79902897>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-79902897>all nodes of kind 8 (lumbering): all luck drops replaced with 0.91x item 5005, 0.5x 5006, 0.13x item 5007, 2.14x item 5008, 0.93x item 5011</li><li data-v-79902897>all nodes of kind 11 (dried fish): all luck drops replaced with 0.17x item 1027, 0.8x item 6501</li><li data-v-79902897>all nodes of kind 15 (excavation): all luck drops replaced with 3.96x item 1026</li><li data-v-79902897>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-79902897>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-79902897>[2023-06-05 patch] added node 1833</li><li data-v-79902897>[2023-05-31 patch] big rework</li><ul data-v-79902897><li data-v-79902897>level cap 40, +2 skill slots</li><li data-v-79902897>humans got +3 luck</li><li data-v-79902897>giants got +68.4% yield of <s data-v-79902897>all</s> all unlucky drops, rounded down</li></ul><li data-v-79902897>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-79902897>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-79902897>in darkmode, buttons are now actually dark</li><li data-v-79902897>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-79902897><li data-v-79902897>item 1024 = equal chance of 1x any fruit</li><li data-v-79902897>item 1025 = equal chance of 1x any gem</li><li data-v-79902897>item 1026 = equal chance of 1x any trace</li><li data-v-79902897>item 1027 = equal chance of 1x any coral</li></ul><li data-v-79902897>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-79902897><li data-v-79902897>check town <strong data-v-79902897>config</strong> to see what houses to buy </li><li data-v-79902897>be careful to not exceed the town limits, profits will show <strong data-v-79902897>NaN</strong>&#39;s and <strong data-v-79902897>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-79902897>for easier prototyping, only working workers consume lodging</li></ul><li data-v-79902897>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-79902897>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-79902897><li data-v-79902897>each house can be set up in <strong data-v-79902897>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-79902897>previously assigned <strong data-v-79902897>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-79902897>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-79902897>on town/node click, map pans to its location</li><li data-v-79902897>removed 13 nodes that are invisible ingame</li><li data-v-79902897>added a ranking of untaken nodes in Empire pane</li><li data-v-79902897>[2023-02-21 patch] updated node CP costs</li><li data-v-79902897>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-79902897><li data-v-79902897>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-79902897>added more worker types + seamless transition between</li><li data-v-79902897>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-79902897>individual plantzone efficiency via cashflow</li><ul data-v-79902897><li data-v-79902897>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-79902897>added farming and workshop job types in Send Worker dialog</li><li data-v-79902897>/plantzones page tweaks</li><ul data-v-79902897><li data-v-79902897>node name link navigates to its map location (upd: with permalinks)</li><li data-v-79902897>item link navigates to its settings price row</li><li data-v-79902897>shows item names to allow in-browser search</li><li data-v-79902897>selects nearest town by CP instead of distance</li></ul><li data-v-79902897>removed Blue Maned Lion&#39;s Manor</li><li data-v-79902897>~floating modifiers support</li><li data-v-79902897>selecting a node highlights connection path</li><li data-v-79902897>worker job assignment moves to the end of connection queue</li><li data-v-79902897>worker editor: added button to suggest best skills for current job</li><li data-v-79902897>map: color active/inactive links</li><li data-v-79902897>updated connection algorithm to encourage existing paths reuse</li><li data-v-79902897>[2022-10-26 patch] updated house CP costs</li><li data-v-79902897>worker revert button, plantzone luck effect indicator</li><li data-v-79902897>configurable default worker for hire</li><li data-v-79902897>send worker dialog: show worker stats</li><li data-v-79902897>worker editor: when on job, show profit changes while editing</li><li data-v-79902897>node info: show/edit the workload modifier</li><li data-v-79902897>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-79902897>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-79902897>added total daily items summary</li><li data-v-79902897>added workers+lodging import/export to json file</li><li data-v-79902897>[2022-09-21 patch] updated several node distances</li><li data-v-79902897>added worker management</li><li data-v-79902897>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-79902897>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-79902897>Todo</h2><li data-v-79902897>split out personal items storage CP in totals</li><li data-v-79902897>add lodgage costs to Empire &gt; Best Untaken</li><li data-v-79902897>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-79902897>on first run, pick server using geoip</li><li data-v-79902897>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-79902897>[2023-05-31 patch]</li><ul data-v-79902897><li data-v-79902897>implement species-restricted plantzones/workshops</li><li data-v-79902897>output redirection (available for any worker at lvl 40)</li></ul><li data-v-79902897>Active Jobs Ranking sorting can get janky when NaNs/Infs are involved</li><li data-v-79902897>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-79902897>remote town workshop job should require connection</li><li data-v-79902897>when connection node selected, sort shared job list by %</li><li data-v-79902897>enforce daily shipbuilding limit</li><li data-v-79902897>+1/+3 pack_xxx skills should improve profit when packing</li><li data-v-79902897>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-79902897>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-79902897><li data-v-79902897>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-79902897>find a consistent fast way to build optimal connections (orderless)</li><li data-v-79902897>workshop support for lodgage</li><li data-v-79902897>on item icon hover: show name and price</li><li data-v-79902897>workerlist: show drops instead of pzname</li><li data-v-79902897>grade towns/workers graphically with bar charts</li><li data-v-79902897>map tweaks <ul data-v-79902897><li data-v-79902897>node hover: highlight potential path to town</li><li data-v-79902897>save zoom too in addition to pos</li><li data-v-79902897>deal with missing tiles</li><li data-v-79902897>a setting to hide all inactive elements</li></ul></li><li data-v-79902897>profit calculation: include feed cost</li><li data-v-79902897>smart worker-job rearrangement within a town</li><ul data-v-79902897><li data-v-79902897>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-79902897>show RegionGroups on the map</li><li data-v-79902897>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-79902897>introduce skill roll chances somehow</li><ul data-v-79902897><li data-v-79902897>help decide which skills should and should not be rerolled?</li><li data-v-79902897>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-79902897>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-79902897><li data-v-79902897>different items have different lifetime though</li></ul><li data-v-79902897>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-79902897>show market fetch timestamp</li><h2 data-v-79902897>Notes</h2><pre class="fsxs" data-v-79902897>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-79902897>Misc</h2>`,98),re=e("House Usage"),ce=e("HouseCraft Viewer"),he=e("Droprates"),ue=e("All Towns Lodging (deprecated)"),ve={__name:"AboutView",setup(l){return(u,pe)=>{const s=g("RouterLink");return c(),h("div",x,[j,i(n,null,{q:a(()=>[q]),default:a(()=>[C,z,S]),_:1}),i(n,null,{q:a(()=>[A]),default:a(()=>[W,I,P,M]),_:1}),i(n,null,{q:a(()=>[E]),default:a(()=>[B,U,$]),_:1}),i(n,null,{q:a(()=>[H,L,N]),default:a(()=>[T]),_:1}),i(n,null,{q:a(()=>[V,R,F,Q,Y,X,G]),default:a(()=>[O,D,J,K,Z]),_:1}),i(n,null,{q:a(()=>[ee]),default:a(()=>[te,ae,oe,ie,le,ne,se]),_:1}),de,t("p",null,[i(s,{to:"/workshops"},{default:a(()=>[re]),_:1})]),t("p",null,[i(s,{to:"/housecraft"},{default:a(()=>[ce]),_:1})]),t("p",null,[i(s,{to:"/droprates"},{default:a(()=>[he]),_:1})]),t("p",null,[i(s,{to:"/lodging"},{default:a(()=>[ue]),_:1})])])}}},me=r(ve,[["__scopeId","data-v-79902897"]]);export{me as default};
