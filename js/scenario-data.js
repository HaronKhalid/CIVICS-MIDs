/* Scenario content (data only). The UI lives in scenarios.js.
   "chapter" = topic number: 1 Civics, 2 Citizenship, 3 Civic and community engagement, 4 Democracy, 5 Modern society.
   Question types: single, multi (select all, partial credit), match (classify items), written (self-assessed).
   All situations are invented examples that apply the concepts in the notes. */
const qSingle=(prompt,options,a,explain)=>({type:"single",prompt,options,answer:[a],explain,marks:1});
const qMulti=(prompt,options,a,explain)=>({type:"multi",prompt,options,answer:a,explain,marks:2});
const qMatch=(prompt,categories,items,explain)=>({type:"match",prompt,categories,items:items.map(([t,a])=>({t,a})),explain,marks:items.length});
const qWritten=(prompt,model)=>({type:"written",prompt,model,marks:0});
const sol=(problem,concepts,apply,recs,just,mistakes)=>({problem,concepts,apply,recs,just,mistakes});

const SCENARIOS=[
/* ============ TOPIC 1: Civics ============ */
{id:"c1-know-your-rights",title:"A ‘Know Your Rights’ class",chapter:1,category:"identify",difficulty:"easy",minutes:5,
 tags:["civics-def"],related:["c1-1"],
 description:"A university starts a short course where students learn how the government works, how laws are made, what rights they have and what duties they must perform, and how they can take part in elections and public life.",
 hint:"Which subject studies rights, duties and how citizens take part?",
 questions:[
  qSingle("This course is an example of:",["Civics education","A cooking class","A computer repair workshop","A sports training camp"],0,"Civics is the study of the rights, duties and responsibilities of citizenship, including how government operates and how laws are made."),
  qMulti("Select ALL topics that civics covers.",["Rights of citizens","Duties and responsibilities","How government operates and laws are created","How to repair a car engine"],[0,1,2],"Civics covers rights, duties, responsibilities, how government and laws work, and how citizens participate."),
  qSingle("What does civics education aim to produce?",["Informed, responsible citizens","Only skilled engineers","Only government employees","Only voters who never question anything"],0,"It helps individuals become informed, responsible citizens who contribute to their community and society.")],
 solution:sol(["A course on citizens' rights and duties."],["Definition of civics; civics education."],["Rights + duties + how government works = civics."],["Use civics to become informed and responsible."],"Civics prepares people for active citizenship.",["Thinking civics is only about voting."])},

{id:"c1-city-state-modern",title:"Athens then, Pakistan now",chapter:1,category:"identify",difficulty:"medium",minutes:8,
 tags:["history"],related:["c1-2"],
 description:"A teacher compares life in an ancient Greek city-state with life in a modern country. In the city-state, eligible citizens gathered and voted directly on laws. Contact with other city-states was rare because travel and communication were difficult. In a modern country, millions of people elect representatives, and people think about national and global issues too.",
 hint:"Direct decisions and local concerns = ancient. Representatives and wider concerns = modern.",
 questions:[
  qMatch("Does each feature belong to the ancient city-state or the modern country?",["Ancient city-state (polis)","Modern country"],[["Citizens take part in decisions directly",0],["Study of civics limited to concerns inside the city-state",0],["Citizens' responsibilities include national and global concerns",1],["Large political unit of many cities, towns and villages",1],["Little interaction with other city-states because of limited transport and communication",0],["Civics promotes values, norms and understanding of current social and political challenges",1]],"The polis was an independent, small political unit with direct democracy; modern citizens live in larger countries and have wider responsibilities."),
  qSingle("Why can modern societies not use direct democracy for every decision?",["Societies are larger and more complex","Citizens do not have opinions","Governments forbid it","Greek ideas were wrong"],0,"As societies became larger and more complex, representation replaced direct participation for most decisions."),
  qWritten("Briefly describe how the scope of civics changed from ancient to modern times.","In ancient Greek and Roman city-states civics was limited to the immediate concerns of the independent city-state and citizens took part directly. As societies grew into larger countries, citizens' relationships and responsibilities broadened to national and even global concerns, and civics now promotes values, norms and understanding of complex social and political challenges.")],
 solution:sol(["Comparing ancient and modern civic life."],["Origin and development of civics."],["Polis = small, direct, local. Country = large, representative, wider."],["Understand how the scope of civics widened."],"Civics changed as societies became bigger and more connected.",["Mixing up direct and representative democracy."])},

{id:"c1-significance-match",title:"Why does civics matter?",chapter:1,category:"apply",difficulty:"medium",minutes:9,
 tags:["significance"],related:["c1-3"],
 description:"Seven students describe how civics helped them. Match each story to the reason (significance) of civics it shows.",
 hint:"Information, rights/responsibilities, participation, global awareness, economics, character, welfare.",
 questions:[
  qMatch("Which significance of civics does each story show?",["Flow of information","Rights and responsibilities","Political participation","Global awareness","Comprehension of economic issues","Character building","Community welfare"],[["Amna learned about a new law and now understands how it affects her",0],["Bilal knows he may protest peacefully and also must obey the law",1],["Danish studied the parties' policies before voting",2],["Hira realised how her country's actions on climate affect people in other nations",3],["Imran understood how taxes and prices work and avoids unethical business practices",4],["Zoya's class taught her honesty, fairness and tolerance",5],["Farhan organised neighbours to solve a local unemployment and healthcare problem",6]],"These are the seven reasons civics is essential."),
  qSingle("‘Governments cannot address every issue alone; citizens must take responsibility for their communities' well-being.’ Which significance is this?",["Community welfare","Global awareness","Character building","Political participation"],0,"Community welfare stresses volunteerism and social activism.")],
 solution:sol(["Seven examples of civics at work."],["Significance of civics."],["Match each story to its reason."],["Use the memory trick I-R-P-G-E-C-W."],"Civics shapes informed, responsible individuals.",["Confusing political participation with community welfare."])},

{id:"c1-key-concepts",title:"Spot the key concept",chapter:1,category:"identify",difficulty:"easy",minutes:6,
 tags:["key-concepts"],related:["c1-4"],
 description:"Five short situations each illustrate a key concept of civics.",
 hint:"Citizenship, democracy, rule of law, public participation, civic virtue.",
 questions:[
  qMatch("Which key concept does each situation show?",["Citizenship","Democracy","Rule of law","Public participation","Civic virtue"],[["A senior official is questioned by a court like any other person",2],["People choose their representatives in an election",1],["A resident gives feedback in a public consultation on a new road",3],["A shopkeeper is honest, responsible and respectful to customers",4],["A person enjoys rights and also pays taxes and obeys laws in their country",0]],"Rule of law: everyone, including officials, is subject to the law. Democracy: power vested in the people. Public participation: taking part in decisions. Civic virtue: honesty, responsibility, respect. Citizenship: rights, responsibilities, duties.")],
 solution:sol(["Five civic concepts in daily life."],["Key concepts in civics."],["Match each situation to its concept."],["Learn a one-line definition for each."],"These five ideas form the base of civics.",["Mixing up public participation and democracy."])},

/* ============ TOPIC 2: Citizenship ============ */
{id:"c2-natural-naturalized",title:"Born here or became a citizen?",chapter:2,category:"identify",difficulty:"easy",minutes:7,
 tags:["classification"],related:["c2-3"],
 description:"Four people live in the same country. Ayesha was born in the country to parents who are citizens. Mr. Lee moved to the country as an adult, lived there for ten years, passed a language and citizenship test, and took an oath of allegiance. Hamid was born abroad to parents who are both citizens and inherited their citizenship. Sara is a foreign student who is not a citizen.",
 hint:"Automatic at birth = natural-born. Legal process after birth = naturalized.",
 questions:[
  qMatch("Classify each person.",["Natural-born citizen","Naturalized citizen","Not a citizen"],[["Ayesha",0],["Mr. Lee",1],["Hamid (inherited citizenship through his parents)",0],["Sara (foreign student)",2]],"Natural-born citizenship is acquired automatically at birth, by territory or by parentage. Naturalization is a legal process after birth."),
  qMulti("Select ALL requirements that may be part of naturalization.",["Residency for some years","Passing language or citizenship tests","Showing good moral character and taking an oath of allegiance","Being born on the country's territory"],[0,1,2],"Being born in the country makes someone natural-born, so it is not a naturalization requirement."),
  qSingle("In some countries, which citizens may be barred from the highest office (e.g. U.S. presidency)?",["Naturalized citizens","Natural-born citizens","All citizens","No one"],0,"Naturalized citizens usually have the same rights, but some countries restrict certain political offices.")],
 solution:sol(["Different ways of becoming a citizen."],["Natural-born vs naturalized citizen."],["Automatic at birth vs legal process."],["Know both routes and their requirements."],"Citizenship can be acquired at birth or later through law.",["Calling an inherited citizen ‘naturalized’."])},

{id:"c2-types-identify",title:"Which type of citizen?",chapter:2,category:"apply",difficulty:"medium",minutes:12,
 tags:["types"],related:["c2-4"],
 description:"Nine people in one city show different kinds of citizenship. Identify each type.",
 hint:"Use the key words: community projects, online, world, environment, business, minimal, economy, facts, equality.",
 questions:[
  qMatch("Match each person to a type of citizenship.",["Active","Digital","Global","Ecological","Corporate","Passive","Economic","Informed","Inclusive"],[["Rabia leads a neighbourhood clean-up and speaks up for social justice",0],["Hamza avoids cyberbullying and runs an online petition for a local cause",1],["Sana campaigns for poverty reduction and joins international collaborations",2],["A group recycles, reduces carbon emissions and supports policies that protect natural resources",3],["A company runs CSR programmes and publishes transparent business practices",4],["Ali pays his taxes and obeys the law but never votes or joins community matters",5],["A shop owner creates jobs, pays taxes and campaigns for fair labour rights",6],["A student reads credible sources and joins thoughtful debates before forming views",7],["A group campaigns for accessibility and equal opportunities for marginalized people",8]],"Active, digital, global, ecological, corporate, passive, economic, informed and inclusive citizenship each have their own features."),
  qSingle("Which type fulfils only basic legal duties such as paying taxes?",["Passive citizenship","Active citizenship","Global citizenship","Inclusive citizenship"],0,"Passive citizens do not actively take part in civic or political matters.")],
 solution:sol(["Nine examples of citizenship."],["Types of citizenship."],["Match each example to its type."],["Use A-D-G-E-C-P-E-I-I."],"Citizenship has several forms in the modern world.",["Confusing economic and corporate citizenship."])},

{id:"c2-active-passive",title:"Two neighbours, two kinds of citizens",chapter:2,category:"diagnose",difficulty:"medium",minutes:8,
 tags:["types"],related:["c2-4"],
 description:"Kamran and Naila live on the same street. Kamran pays taxes and follows traffic laws but skips most elections, never attends the street's community meetings and says, ‘My own work is enough for me.’ Naila also pays taxes and follows the law, and she coordinates a neighbourhood food drive, attends local meetings and campaigns for a safer road crossing.",
 hint:"Look at who goes beyond basic legal duties.",
 questions:[
  qSingle("Kamran is best described as:",["A passive citizen","An active citizen","A global citizen","A corporate citizen"],0,"He meets basic legal duties but shows minimal or sporadic voting and limited involvement."),
  qSingle("Naila is best described as:",["An active citizen","A passive citizen","An ecological citizen","Not a citizen"],0,"Active citizens go beyond legal duties through community projects and advocacy."),
  qMulti("Select ALL features of passive citizenship.",["Minimal or sporadic voting","Limited involvement in community or public affairs","Focus on personal or private concerns","Taking initiative in community projects"],[0,1,2],"Taking initiative in community projects is a feature of active citizenship."),
  qWritten("Explain how an active citizen differs from a passive citizen, with two points each.","An active citizen goes beyond legal duties: takes initiative in community projects and advocates for social justice or environmental causes; engages in public service and civic discussions. A passive citizen fulfils basic legal duties such as paying taxes but votes only minimally or sporadically, has limited involvement in community or public affairs and focuses on personal concerns.")],
 solution:sol(["Two citizens with different involvement."],["Active vs passive citizenship."],["Both pay taxes; only one participates."],["Encourage participation."],"Active citizens strengthen communities; passive ones meet only minimum duties.",["Thinking tax payment alone makes a citizen active."])},

{id:"c2-rights-duties",title:"Right or responsibility?",chapter:2,category:"identify",difficulty:"easy",minutes:6,
 tags:["rights-resp"],related:["c2-5","c2-6"],
 description:"A class makes two columns on the board: ‘Rights’ (what citizens receive) and ‘Responsibilities’ (what citizens must do). The teacher reads out ten items.",
 hint:"If a citizen receives or may do it, it is a right. If a citizen must do it, it is a responsibility.",
 questions:[
  qMatch("Classify each item.",["Right","Responsibility"],[["Freedom of expression",0],["Paying taxes",1],["Serving on a jury when called",1],["Right to vote",0],["Defending the country when required",1],["Right to a fair trial",0],["Freedom of assembly",0],["Obeying laws",1],["Right to education",0],["Staying informed, voting and joining civic discussions",1]],"Rights: expression, vote, fair trial, assembly, education. Responsibilities: obey laws, pay taxes, jury service, democratic participation, defend the country.")],
 solution:sol(["Sorting rights and responsibilities."],["Rights and responsibilities of citizenship."],["Receive = right; must do = responsibility."],["Learn both lists."],"Citizenship balances rights and responsibilities.",["Treating voting as only a duty (it is a right; participating is a responsibility)."])},

{id:"c2-principles",title:"Which principle is it?",chapter:2,category:"apply",difficulty:"medium",minutes:8,
 tags:["principles"],related:["c2-7"],
 description:"A constitution workshop gives five examples. Each shows one principle of citizenship.",
 hint:"Equality, rule of law, participation, responsibility, liberty.",
 questions:[
  qMatch("Which principle does each example show?",["Equality","Rule of law","Participation","Responsibility","Liberty"],[["All students receive the same chance to apply for a scholarship",0],["A minister is punished for breaking a law just like anyone else",1],["Residents vote and give opinions in public meetings",2],["A citizen volunteers to clean a river bank",3],["A person chooses her career and lifestyle within the limits of the law",4]],"Equality: fair treatment and equal opportunity. Rule of law: no one above the law. Participation: voting and discourse. Responsibility: contributing positively. Liberty: freedom within the law.")],
 solution:sol(["Five principles in examples."],["Principles of citizenship."],["Match example to principle."],["Remember E-R-P-R-L."],"Principles guide citizens' relation with the state.",["Forgetting that liberty has limits."])},

{id:"c2-definitions",title:"Who defined citizenship?",chapter:2,category:"identify",difficulty:"medium",minutes:8,
 tags:["cit-defs"],related:["c2-2"],
 description:"A student collects four definitions of citizenship but forgot the names of the scholars.",
 hint:"Look for key words: status, bond, set of rights and obligations, relationship.",
 questions:[
  qMatch("Match each idea to the scholar.",["T. H. Marshall","Ralph Miliband","David Miller","Will Kymlicka"],[["‘A status bestowed on full members of a community; all who have it are equal in rights and duties.’",0],["‘The bond that unites people with the state, giving them rights and duties.’",1],["‘The set of rights and obligations that gives membership in a political community and protection by the state.’",2],["‘A relationship between an individual and a political community in which the individual participates actively in democratic governance.’",3]],"Marshall: status and equality. Miliband: bond with the state. Miller: rights and obligations. Kymlicka: relationship and active participation in democratic governance.")],
 solution:sol(["Four definitions."],["Definitions of citizenship."],["Match key words to scholars."],["Learn one key idea each."],"Different scholars stress different aspects.",["Mixing up Miliband and Miller."])},

{id:"c2-march",title:"The protest march",chapter:2,category:"integrated",difficulty:"hard",minutes:12,
 tags:["rights-resp","principles"],related:["c2-5","c2-6","c2-7"],
 description:"Students plan a peaceful march to ask the city council to build a safe footbridge near their school. They inform the police, gather to discuss their demand, collect signatures, and also help clean the area afterwards. One student says, ‘We have the right to gather, but we must also obey the law and respect others.’",
 hint:"Find the right, the responsibility and the principle behind each action.",
 questions:[
  qSingle("Gathering peacefully for the march is an example of the right to:",["Freedom of assembly","A fair trial","Education","Vote"],0,"Freedom of assembly is the right to gather peacefully for protests, discussions or social movements."),
  qSingle("Informing the police and following the rules of the march shows:",["Obeying laws (responsibility)","Defending the country","Serving on a jury","Paying taxes"],0,"Adhering to legal frameworks ensures order and security."),
  qSingle("Which principle does ‘rights come with duties’ express?",["Responsibility","Liberty only","Equality only","None"],0,"The principle of responsibility highlights the duty to contribute positively, alongside liberty within the limits of the law."),
  qSingle("Collecting signatures and speaking to the council is best described as:",["Advocacy and public participation","Passive citizenship","Naturalization","Secularization"],0,"They support a cause and take part in a public decision."),
  qWritten("Explain how this march shows the balance between rights and responsibilities.","The students use the right to freedom of assembly and freedom of expression, and take part in public participation and advocacy. At the same time they act responsibly: they obey the law, inform the police, respect others and help clean up. Citizenship means enjoying rights while fulfilling duties.")],
 solution:sol(["A peaceful protest with rights and duties."],["Freedom of assembly, obeying laws, advocacy, principles."],["Right to assemble + duty to obey laws."],["Exercise rights responsibly."],"Rights and responsibilities go together.",["Thinking rights allow ignoring laws."])},

/* ============ TOPIC 3: Civic and community engagement ============ */
{id:"c3-terms",title:"Engagement, participation, volunteering or advocacy?",chapter:3,category:"identify",difficulty:"medium",minutes:8,
 tags:["eng-terms"],related:["c3-3"],
 description:"A town council lists five activities and wants to label each correctly in its annual report.",
 hint:"Volunteerism = no financial gain. Advocacy = supporting a cause. Public participation = joining government decisions.",
 questions:[
  qMatch("Match each activity to its term.",["Community engagement","Public participation","Volunteerism","Advocacy"],[["Giving feedback on a new policy in a public consultation",1],["Mentoring youth without being paid",2],["Writing to elected officials and starting an online campaign for safer roads",3],["Schools, NGOs and the council forming a partnership to improve the neighbourhood",0],["Joining a community clean-up drive for free",2],["Attending a public meeting about the city budget",1]],"Community engagement is collaboration between individuals, organisations and institutions; public participation is joining decision-making; volunteerism is unpaid service; advocacy is supporting a cause."),
  qSingle("Volunteerism is best defined as:",["Offering time and services to others without financial gain","Working only for a salary","Running for office","Paying taxes"],0,"It is a key component of civic engagement.")],
 solution:sol(["Four related terms."],["Community engagement, public participation, volunteerism, advocacy."],["Match each activity."],["Know a one-line definition for each."],"The terms overlap but have different focus.",["Calling any paid job volunteerism."])},

{id:"c3-definitions",title:"Who defined civic engagement?",chapter:3,category:"identify",difficulty:"medium",minutes:7,
 tags:["eng-defs"],related:["c3-2"],
 description:"Three scholars defined civic engagement differently.",
 hint:"Paid and unpaid activism; making a difference with knowledge, skills, values and motivation; individual through collective action.",
 questions:[
  qMatch("Match each idea to the scholar.",["Michael Delli Carpini","Thomas Ehrlich","Van Benshoten"],[["Includes paid and unpaid forms of political activism, environmentalism and national service",0],["Working to make a difference with knowledge, skills, values and motivation, through political and non-political processes",1],["The means by which an individual, through collective action, influences the larger civil society",2]],"Carpini: paid and unpaid activism and interaction with democratic institutions. Ehrlich: making a difference with knowledge, skills, values and motivation. Van Benshoten: individual influence through collective action.")],
 solution:sol(["Three definitions."],["Definitions of civic engagement."],["Match key words."],["Learn one key idea each."],"Civic engagement has no single definition.",["Mixing up Ehrlich and Carpini."])},

{id:"c3-importance-match",title:"Why civic engagement matters",chapter:3,category:"apply",difficulty:"medium",minutes:10,
 tags:["eng-importance"],related:["c3-4"],
 description:"Seven short stories show the importance of civic engagement.",
 hint:"Match each story with the importance point that fits best.",
 questions:[
  qMatch("Which importance does each story show?",["Strengthening the communities","Promotion of democratic participation","Empowerment of citizens","Supporting social justice","Enhancing civic responsibility","Construction of social networks","Government accountability"],[["Neighbours work together to repair a park and help flood victims",0],["Residents vote and attend public forums so officials reflect their will",1],["A volunteer learns leadership, communication and problem-solving skills",2],["Citizens campaign for the rights of marginalized communities",3],["Residents feel a shared commitment to each other's well-being after improving local conditions",4],["Community groups form relationships that help during a crisis",5],["Citizens monitor officials and push for transparency, reducing corruption",6]],"These are the seven reasons given for the importance of civic engagement.")],
 solution:sol(["Seven stories."],["Importance of civic engagement."],["Match story to importance."],["Learn all seven."],"Civic engagement builds a strong, vibrant, cohesive society.",["Confusing social networks with strengthening communities."])},

{id:"c3-ways",title:"How can I take part?",chapter:3,category:"choose",difficulty:"easy",minutes:6,
 tags:["ways"],related:["c3-5"],
 description:"A youth club wants to give new members five ways of taking part in civic life. Match each activity to the way.",
 hint:"Volunteering, advocacy, attending public meetings, community projects, political involvement.",
 questions:[
  qMatch("Which way of engaging is it?",["Volunteering","Advocacy","Attending public meetings","Community projects","Political involvement"],[["Giving weekend time to a charity",0],["Starting a petition for a cleaner river",1],["Joining a discussion on local governance",2],["Joining a food drive or tree-planting project",3],["Supporting a candidate or joining a political party",4]],"Five ways: volunteering, advocacy, attending public meetings, community projects and political involvement.")],
 solution:sol(["Ways of engaging."],["Ways to engage in civic life."],["Match activity to way."],["Pick the way that suits you."],"There are many ways to take part.",["Thinking only voting counts."])},

{id:"c3-challenges",title:"What is stopping them?",chapter:3,category:"diagnose",difficulty:"medium",minutes:8,
 tags:["challenges"],related:["c3-6"],
 description:"A town survey finds four different reasons why residents do not take part in civic life.",
 hint:"Lack of awareness, political apathy, misinformation, barriers to participation.",
 questions:[
  qMatch("Match each reason to the challenge.",["Lack of awareness","Political apathy","Misinformation","Barriers to participation"],[["‘I did not know I could attend council meetings.’",0],["‘My vote makes no difference, so why bother?’",1],["‘I read a rumour online and believed the election was fixed.’",2],["‘The meetings are far away and during my working hours; I cannot afford the travel.’",3]],"Lack of awareness, apathy, misinformation and economic, social or institutional barriers are the main challenges."),
  qMulti("Select ALL sensible ways to reduce these challenges.",["Teach civic rights and responsibilities","Share reliable, fact-checked information","Make meetings accessible and affordable","Tell people that participation never matters"],[0,1,2],"Awareness, trustworthy information and removing barriers all help; discouraging participation makes it worse.")],
 solution:sol(["Four reasons for low participation."],["Challenges to civic engagement."],["Match reason to challenge."],["Increase awareness, remove barriers, counter misinformation."],"Understanding obstacles helps remove them.",["Blaming citizens without looking at barriers."])},

{id:"c3-misinformation",title:"A rumour before the vote",chapter:3,category:"integrated",difficulty:"hard",minutes:12,
 tags:["challenges","types"],related:["c3-6","c2-4"],
 description:"Two days before a local election, a message spreads on social media claiming that polling stations will close early. Many residents believe it and decide not to go. Fatima, who follows credible news sources, checks the official announcement, finds the message is false, shares the correct information and encourages her neighbours to vote.",
 hint:"Which challenge is the rumour, and which type of citizen is Fatima?",
 questions:[
  qSingle("The false message is an example of:",["Misinformation","Political apathy","Lack of awareness only","A civic virtue"],0,"False or misleading information can influence public opinion and hinder civic engagement."),
  qSingle("Fatima's behaviour best shows which types of citizenship?",["Informed and digital citizenship","Passive citizenship","Corporate citizenship","Ecological citizenship"],0,"She engages with credible information sources and uses digital platforms responsibly."),
  qSingle("Her action also supports which importance of civic engagement?",["Promotion of democratic participation","Construction of an industry","Secularization","Urbanization"],0,"Helping people vote supports democratic participation."),
  qWritten("Write four steps a responsible citizen should take when meeting a suspicious message online.","Check the source and compare with credible or official information; do not share until verified; correct the false claim politely with reliable information; encourage others to take part in the democratic process. This reflects informed and digital citizenship and fights misinformation.")],
 solution:sol(["Misinformation threatens participation."],["Misinformation, informed and digital citizenship."],["A false rumour reduces turnout; Fatima counters it."],["Verify, correct, encourage participation."],"Responsible citizens protect the democratic process.",["Sharing before checking."])},

{id:"c3-flood-response",title:"The flood relief project",chapter:3,category:"integrated",difficulty:"hard",minutes:14,
 tags:["eng-terms","ways","eng-importance"],related:["c3-3","c3-4","c3-5"],
 description:"After a flood, students form a relief group. Some collect food and clothes and distribute them for free. Others write to elected officials and post online asking for faster compensation. A third group attends the city's public consultation on rebuilding. The school, a local charity and the district office agree to work together on a plan.",
 hint:"Match each activity to volunteerism, advocacy, public participation and community engagement.",
 questions:[
  qMatch("Classify each part of the response.",["Volunteerism","Advocacy","Public participation","Community engagement"],[["Collecting and distributing food and clothes without payment",0],["Writing to officials and posting online for faster compensation",1],["Attending the public consultation on rebuilding",2],["School, charity and district office forming a partnership",3]],"Volunteerism is unpaid service; advocacy supports a cause; public participation is joining decisions; community engagement is collaboration between organisations."),
  qMulti("Which importance of civic engagement does this response show?",["Strengthening the communities","Government accountability","Construction of social networks","Reducing the need for any laws"],[0,1,2],"It strengthens the community, pushes officials to act and builds networks; civic engagement does not remove the need for laws."),
  qWritten("Explain how civic engagement helped this community recover.","Volunteers helped those in need directly (strengthening the community), advocacy and the public consultation pushed officials to be accountable and made government actions reflect the people's needs, and the partnership between school, charity and district office built social networks for collaboration. Together this made the community more resilient.")],
 solution:sol(["A flood response with several kinds of engagement."],["Volunteerism, advocacy, public participation, community engagement."],["Each group plays a different role."],["Combine different forms of engagement."],"Different forms of engagement work together.",["Seeing volunteering and advocacy as opposites."])},

/* ============ TOPIC 4: Democracy ============ */
{id:"c4-features",title:"Is it democratic?",chapter:4,category:"identify",difficulty:"easy",minutes:6,
 tags:["democracy"],related:["c4-1"],
 description:"A student writes down features of a country's political system and wants to know which are typical of democracy.",
 hint:"Think of consent, equality, free and fair elections, rights and transparency.",
 questions:[
  qMulti("Select ALL features of a democracy.",["Authority of the government comes from the will of the citizens","Regular, free and fair elections","Protection of freedom of speech, religion and association","Citizens may not criticise the government"],[0,1,2],"Democracy upholds equality, freedom and justice, with elections, representation and protected fundamental rights."),
  qSingle("In a democracy, citizens exercise power:",["Directly or through elected representatives","Only through the army","Only through hereditary leaders","Only through religious leaders"],0,"Power is vested in the people, directly or through representatives.")],
 solution:sol(["Features of a democratic system."],["Concept of democracy."],["Consent, elections, rights."],["Check systems against these features."],"Democracy rests on the participation and consent of the people.",["Thinking elections alone make a democracy."])},

{id:"c4-definitions",title:"Who defined democracy?",chapter:4,category:"identify",difficulty:"medium",minutes:7,
 tags:["dem-defs"],related:["c4-2"],
 description:"Four famous definitions of democracy are on a poster, but the names are missing.",
 hint:"Lincoln: of, by, for the people. Schumpeter: competitive struggle for the vote. Dewey: mode of associated living. Dahl: political equals.",
 questions:[
  qMatch("Match each definition to its author.",["Robert Dahl","Joseph Schumpeter","John Dewey","Abraham Lincoln"],[["‘Government of the people, by the people, for the people.’",3],["‘An institutional arrangement … by means of a competitive struggle for the people's vote.’",1],["‘More than a form of government; primarily a mode of associated living.’",2],["‘A system of governance that responds fully to all its citizens as political equals.’",0]],"Each scholar stresses a different side of democracy.")],
 solution:sol(["Four definitions."],["Definitions of democracy."],["Match key words."],["Learn one idea each."],"Democracy can be seen as government, competition and a way of living.",["Mixing up Dewey and Dahl."])},

{id:"c4-types",title:"Which type of democracy?",chapter:4,category:"identify",difficulty:"medium",minutes:9,
 tags:["dem-types"],related:["c4-3"],
 description:"A civics class studies five examples of democratic arrangements.",
 hint:"Direct, representative, constitutional, liberal, participatory.",
 questions:[
  qMatch("Which type does each example show?",["Direct democracy","Representative democracy","Constitutional democracy","Liberal democracy","Participatory democracy"],[["In ancient Athens, eligible citizens voted directly on laws in assemblies",0],["Citizens in Pakistan elect people to make laws on their behalf",1],["The power of elected officials is limited by a constitution that protects human rights",2],["The majority rules, but minority rights and freedoms are safeguarded",3],["A town holds public consultations and supports grassroots movements beyond elections",4]],"Direct: citizens decide themselves. Representative: elected representatives. Constitutional: power limited by a constitution. Liberal: individual rights, majority balanced by minority rights. Participatory: broader participation beyond elections."),
  qSingle("Why is representative democracy common in modern societies?",["Direct participation in every decision would be impractical in large societies","Citizens refuse to vote","Constitutions forbid direct democracy","It was invented in Athens"],0,"Larger societies make direct participation in every decision impractical.")],
 solution:sol(["Five democratic arrangements."],["Types of democracy."],["Match feature to type."],["Use examples to remember."],"Democracies differ in how people take part.",["Calling every democracy ‘direct’."])},

{id:"c4-referendum",title:"A village decides by vote",chapter:4,category:"choose",difficulty:"medium",minutes:8,
 tags:["dem-types"],related:["c4-3"],
 description:"A small village of 300 adults must decide whether to build a new school. All adults meet in the square and vote on the proposal. In the nearby capital city of ten million people, laws are made by elected representatives in parliament, and parliament must follow the constitution.",
 hint:"One method is direct; the other is representative and constitutional.",
 questions:[
  qSingle("The village's method is closest to:",["Direct democracy","Representative democracy","Liberal democracy only","No democracy"],0,"Citizens decide directly in an assembly."),
  qSingle("The capital's law-making is:",["Representative and constitutional democracy","Direct democracy only","Participatory democracy only","Not democratic"],0,"Elected representatives decide and the constitution limits their power."),
  qSingle("Why might the capital not vote on every law as the village does?",["Ten million people cannot practically take part in every decision","Capitals forbid voting","Parliaments dislike citizens","Constitutions forbid elections"],0,"Direct participation in every decision is impractical in large societies."),
  qWritten("Suggest one way the capital could add participatory democracy.","The capital could hold public consultations on important laws, support grassroots movements and community involvement in governance, so participation continues beyond elections.")],
 solution:sol(["Small and large communities decide differently."],["Direct, representative, constitutional, participatory democracy."],["Size matters."],["Add consultations for participation."],"Democratic methods suit different scales.",["Assuming one type fits all."])},

{id:"c4-citizenship-links",title:"Democracy needs citizens",chapter:4,category:"apply",difficulty:"hard",minutes:12,
 tags:["dem-citizen"],related:["c4-4","c4-5"],
 description:"A civics teacher gives six short statements. Each shows one way democracy and citizenship are related.",
 hint:"Foundation, rights and obligations, accountability, education and awareness, empowerment and inclusion, mutual reinforcement.",
 questions:[
  qMatch("Which relationship does each statement show?",["Citizenship as the foundation of democracy","Rights and obligations","Accountability","Education and awareness","Empowerment and inclusion","Mutual reinforcement"],[["Without citizenship, people would lack formal ways to influence laws and policies",0],["Citizens may vote and speak freely, but must also obey laws and pay taxes",1],["People use elections, protests and advocacy when officials misuse authority",2],["Civic education helps voters make informed decisions",3],["Marginalized groups gain a voice and feel they belong",4],["A vibrant democracy encourages active citizens, and active citizens sustain democracy",5]],"These are six of the nine points on how citizenship and democracy relate."),
  qSingle("How is the health of a democracy often measured?",["By the level of citizen involvement in governance","By the number of police","By the size of the capital","By the number of laws"],0,"The health of a democracy is often measured by citizen involvement.")],
 solution:sol(["Six links between citizenship and democracy."],["Democracy–citizenship relationship."],["Match each statement."],["Learn all nine."],"Democracy and citizenship are interdependent.",["Treating democracy as only elections."])},

{id:"c4-accountability",title:"The corrupt official",chapter:4,category:"interpret",difficulty:"medium",minutes:9,
 tags:["dem-citizen"],related:["c4-4"],
 description:"Residents discover that a local official took money for approving building permits. They hold peaceful protests, write to newspapers, ask the courts to look into the case and, at the next election, vote against the official's party.",
 hint:"Which tools do citizens use to make leaders accountable?",
 questions:[
  qMulti("Select ALL tools of citizen accountability shown here.",["Protests","Advocacy (writing to newspapers)","Elections (voting against the party)","Ignoring the matter"],[0,1,2],"Citizens can challenge government actions through elections, protests and advocacy."),
  qSingle("Which idea from the notes does this illustrate?",["Citizenship as a mechanism for accountability","Secularization","Industrialization","Passive citizenship"],0,"Citizens ensure leaders remain accountable, especially when officials are corrupt."),
  qSingle("This citizen behaviour is the opposite of:",["Political apathy","Active citizenship","Informed citizenship","Civic engagement"],0,"Apathy is feeling disconnected and believing participation makes no difference."),
  qWritten("Explain why government accountability is an important result of civic engagement.","Citizens monitor government actions and policies so officials remain accountable. Through discussion, advocacy and activism they push for transparency and reform, which reduces corruption and inefficiency and makes government actions reflect the will of the people.")],
 solution:sol(["Corruption and a citizen response."],["Accountability through citizenship."],["Protest, advocacy, vote."],["Use legal, peaceful tools."],"Active citizens keep power accountable.",["Believing nothing can be done."])},

{id:"c4-election-day",title:"A city election (integrated)",chapter:4,category:"integrated",difficulty:"hard",minutes:14,
 tags:["democracy","dem-types","rights-resp"],related:["c4-1","c4-3","c2-5","c2-6"],
 description:"A city holds its mayoral election. Voters choose the mayor in a free and fair election (representative democracy). The city's constitution limits what the mayor can do. A court ruling protects a minority group's right to hold a peaceful rally. Before the election the city holds public forums where residents give feedback. Some residents do not vote because they think it makes no difference.",
 hint:"Find the democracy types, the rights and responsibilities, and the challenge.",
 questions:[
  qMatch("Which feature or type is shown?",["Representative democracy","Constitutional democracy","Liberal democracy","Participatory democracy","Political apathy"],[["Voters choose a mayor to act on their behalf",0],["The constitution limits what the mayor can do",1],["Minority rights are protected even though the majority wins elections",2],["Public forums where residents give feedback beyond elections",3],["Residents stay home because they feel their vote makes no difference",4]],"Each example matches a type of democracy, or the challenge of political apathy."),
  qSingle("Voting in the election is both:",["A right and part of the responsibility to take part in the democratic process","Only a right","Only a duty to the army","Not related to citizenship"],0,"The right to vote and the responsibility of participating in the democratic process."),
  qWritten("Write a short paragraph explaining how this city shows the link between democracy and citizenship.","Citizenship gives residents the right to vote and the opportunity to take part in public forums, while democracy supplies free and fair elections, a constitution and protection of rights, including minorities. Citizens hold leaders accountable through elections, and their involvement keeps democracy healthy. The apathetic residents show why education and awareness matter, because democracy and citizenship strengthen each other.")],
 solution:sol(["A city election touches many concepts."],["Types of democracy, rights and responsibilities, apathy."],["Match each element."],["Encourage participation."],"Elections show democracy and citizenship working together.",["Treating non-voting as harmless."])},

/* ============ TOPIC 5: Modern society ============ */
{id:"c5-foundations-1",title:"Spot the foundation (1–7)",chapter:5,category:"identify",difficulty:"medium",minutes:10,
 tags:["modern-1"],related:["c5-2"],
 description:"Seven news headlines each illustrate one foundation of modern society.",
 hint:"Rule of law, human rights, industrialization, urbanization, secularization, bureaucracy, democratic governance.",
 questions:[
  qMatch("Which foundation does each headline show?",["Rule of law","Human rights and freedoms","Industrialization","Urbanization","Secularization","Bureaucracy","Democratic governance"],[["Court treats a famous businessman and a labourer by the same law",0],["Law protects people from discrimination and guarantees freedom of speech",1],["Factories use automation and the economy shifts to industry and services",2],["Families move from villages to big cities, and new roads, hospitals and schools are built",3],["Public decisions are made on rational and scientific grounds, not religious doctrine",4],["Offices follow organised, rule-based procedures to be efficient and predictable",5],["Citizens take part in free and fair elections",6]],"These are foundations 1–7 of modern society.")],
 solution:sol(["Seven headlines."],["Foundations of modern society (1–7)."],["Match headline to foundation."],["Learn the list in order."],"Modern society rests on these foundations.",["Mixing up secularization and bureaucracy."])},

{id:"c5-foundations-2",title:"Spot the foundation (8–14)",chapter:5,category:"identify",difficulty:"medium",minutes:10,
 tags:["modern-2"],related:["c5-3"],
 description:"Seven more examples from modern life, each showing one foundation.",
 hint:"Individualism, social mobility, multiculturalism, mass media, science and technology, social change, ethical dilemmas.",
 questions:[
  qMatch("Which foundation does each example show?",["Individualism and personal autonomy","Social mobility","Multiculturalism","Mass media","Scientific knowledge and technology","Social change","Ethical dilemmas"],[["A young woman chooses her own career and lifestyle",0],["A poor student rises to a high position through education and merit",1],["People of many ethnic, religious and linguistic groups live side by side with equal respect",2],["News and ideas cross borders instantly through the internet and social media",3],["Hospitals and industries make decisions on evidence and research",4],["Technology and economic shifts quickly change how people live and work",5],["A country debates how AI and genetic engineering should affect privacy and jobs",6]],"These are foundations 8–14 of modern society.")],
 solution:sol(["Seven examples."],["Foundations of modern society (8–14)."],["Match example to foundation."],["Learn the list in order."],"Modern society is dynamic and diverse.",["Confusing social change with social mobility."])},

{id:"c5-weber",title:"Max Weber and rationalization",chapter:5,category:"identify",difficulty:"easy",minutes:5,
 tags:["modern-1"],related:["c5-2"],
 description:"A student reads that modern societies prefer efficiency, predictability and rule-based administration in both government offices and private companies.",
 questions:[
  qSingle("This idea is linked with which scholar and concept?",["Max Weber: rationalization and bureaucracy","Abraham Lincoln: democracy","T. H. Marshall: citizenship","John Dewey: associated living"],0,"Max Weber's rationalization highlights efficiency, predictability and bureaucracy."),
  qSingle("Bureaucratic institutions focus on:",["Organised, rule-based governance and administration","Random decisions","Religious doctrine","Informal favours"],0,"Order, control and efficiency in decision-making.")],
 solution:sol(["Efficiency and rules."],["Bureaucracy; Max Weber."],["Rationalization = rule-based administration."],["Remember the name Max Weber."],"Bureaucracy is a foundation of modern society.",["Thinking bureaucracy means corruption."])},

{id:"c5-ai-ethics",title:"The AI hiring tool",chapter:5,category:"interpret",difficulty:"hard",minutes:11,
 tags:["modern-2"],related:["c5-3"],
 description:"A company uses an AI system to scan job applications. It saves time but replaces many clerks and collects large amounts of personal data. Some applicants say the system treats them unfairly, and the public debates how much personal data a company should be allowed to collect.",
 hint:"Which foundations are involved: technology, ethics, social change?",
 questions:[
  qMulti("Select ALL foundations of modern society that this case involves.",["Scientific knowledge and technological advancements","Ethical dilemmas in modern society","Social change","Secularization of religious authority"],[0,1,2],"AI is technological progress, raises ethical questions (data privacy, jobs) and drives social change."),
  qSingle("The concern about collecting personal data is an example of:",["An ethical dilemma (data privacy)","Urbanization","Industrialization only","Multiculturalism"],0,"Data privacy and AI are listed among modern ethical dilemmas."),
  qWritten("Explain the key challenge modern society faces in cases like this.","Technological and scientific progress improves life but raises ethical questions about data privacy, artificial intelligence and employment. The key challenge is balancing progress with ethical considerations, so society benefits without harming rights or fairness.")],
 solution:sol(["Technology brings benefits and ethical questions."],["Scientific progress, ethical dilemmas, social change."],["AI + privacy + jobs."],["Balance progress with ethics."],"Progress needs ethical limits.",["Seeing technology as only good or only bad."])},

{id:"c5-modern-citizenship",title:"What does modern society expect from citizens?",chapter:5,category:"apply",difficulty:"medium",minutes:8,
 tags:["modern-citizenship"],related:["c5-4"],
 description:"A speaker says: ‘Citizenship in modern society is not just a passport. It comes with protection and freedoms, and it asks something from us in return.’",
 hint:"Think: what does modern society give, and what does it expect back?",
 questions:[
  qMatch("Does modern society give this to citizens, or expect it from them?",["Gives (protection and freedoms)","Expects (obligations)"],[["Legal protection",0],["Freedom to vote",0],["Freedom of expression",0],["Obeying laws",1],["Paying taxes",1],["Taking part in civic duties",1]],"Modern society ensures legal protection and grants freedoms such as voting and expression; in return citizens are expected to obey laws, pay taxes and take part in civic duties."),
  qSingle("Citizenship in modern society is:",["Legal status and also active participation in shaping social, political and economic life","Only a legal document","Only voting once every five years","Only paying taxes"],0,"It is not only about legal status but also active participation locally and globally.")],
 solution:sol(["Give and take between society and citizens."],["Modern society and citizenship."],["Protection and freedoms vs obligations."],["Participate actively."],"Citizenship is a two-way relationship.",["Thinking citizenship is only a document."])}
];

/* finalise: stable question ids, published flag */
SCENARIOS.forEach(s=>{s.published=s.published!==false;s.questions.forEach((q,i)=>{q.id="q"+(i+1)})});
