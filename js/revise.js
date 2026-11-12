/* Flashcards and glossary. Format: [topic number, term, meaning]. */
const GL=[
[1,"Civics","The study of the rights, duties and responsibilities of citizenship, including how government operates, how laws are created and how citizens take part."],
[1,"Civics education","Helps individuals become informed, responsible citizens who contribute to their communities and society."],
[1,"City-state (polis)","In ancient Greece and Rome, an independent political unit with its own culture, traditions and government; the centre of civilised life."],
[1,"Direct democracy","Citizens take part in decisions directly, e.g. ancient Athens."],
[1,"Significance of civics (7)","Flow of information; understanding rights and responsibilities; political participation; global awareness; comprehension of economic issues; character building; community welfare."],
[1,"Citizenship (key concept)","The rights, responsibilities and duties of individuals within a society."],
[1,"Rule of law","All members of society, including government officials, are subject to the law; ensures fairness, equality and justice."],
[1,"Public participation","The process by which individuals take part in decision-making: voting, policy discussions, community activism."],
[1,"Civic virtue","Habits essential for a democratic society: honesty, responsibility and respect for others."],
[2,"Citizenship","Formal membership of a nation that gives rights (e.g. vote, legal protection) and obligations (obey laws, pay taxes, sometimes military service)."],
[2,"T. H. Marshall","Citizenship is a status given to full members of a community; all who hold it are equal in rights and duties."],
[2,"Ralph Miliband","Citizenship is the bond that unites people with the state, giving rights and duties and making them active participants."],
[2,"David Miller","Citizenship is the set of rights and obligations giving membership in a political community, with protection by the state and a duty to contribute."],
[2,"Will Kymlicka","Citizenship is a relationship between an individual and a political community in which the individual participates actively in democratic governance."],
[2,"Natural-born citizen","Acquires citizenship automatically at birth, by territory or parentage; no legal process needed."],
[2,"Naturalized citizen","Acquires citizenship after birth through naturalization: residency, tests, good character and an oath of allegiance."],
[2,"Active citizenship","Practical participation in community efforts beyond legal duties: volunteering, advocacy, initiative."],
[2,"Digital citizenship","Responsible online behaviour, online activism and staying informed through digital resources."],
[2,"Global citizenship","Responsibility toward the global community: poverty reduction, climate, human rights, peace."],
[2,"Ecological citizenship","Protecting and sustaining the natural environment: recycling, cutting emissions, conservation."],
[2,"Corporate citizenship","Ethical responsibilities of businesses: CSR, transparency, sustainability, philanthropy."],
[2,"Passive citizenship","Only basic legal duties (e.g. paying taxes); minimal voting and little community involvement."],
[2,"Economic citizenship","Participation as employee, consumer or entrepreneur; paying taxes; fair economic policies and labour rights."],
[2,"Informed citizenship","Being well educated on issues and policies; using credible sources; thoughtful discussion."],
[2,"Inclusive citizenship","Equal rights and opportunities for everyone; advocacy for marginalized groups; non-discrimination."],
[2,"Rights of citizenship","Freedom of expression; right to vote; right to a fair trial; freedom of assembly; right to education."],
[2,"Responsibilities of citizenship","Obeying laws; paying taxes; serving on a jury; participating in the democratic process; defending the country."],
[2,"Principles of citizenship","Equality; rule of law; participation; responsibility; liberty."],
[3,"Civic engagement","Involvement in activities that address public concerns: voting, volunteering, public meetings, advocacy; the interactions of citizens with their society and government."],
[3,"Michael Delli Carpini","Civic engagement includes paid and unpaid political activism, environmentalism and national service."],
[3,"Thomas Ehrlich","Making a difference in civic life with knowledge, skills, values and motivation, through political and non-political processes."],
[3,"Van Benshoten","The means by which an individual, through collective action, influences the larger civil society."],
[3,"Community engagement","Collaboration between individuals, organisations and institutions to improve quality of life."],
[3,"Volunteerism","Offering time and services to others without financial gain."],
[3,"Advocacy","Supporting and arguing for a cause, policy or proposal."],
[3,"Importance of civic engagement (7)","Strengthening communities; democratic participation; empowerment; social justice; civic responsibility; social networks; government accountability."],
[3,"Ways to engage (5)","Volunteering; advocacy; attending public meetings; community projects; political involvement."],
[3,"Challenges (4)","Lack of awareness; political apathy; misinformation; barriers to participation."],
[3,"Political apathy","Feeling disconnected from politics and believing participation makes no difference."],
[3,"Misinformation","False or misleading information that can influence opinion and hinder engagement."],
[4,"Democracy","A political system based on the participation and consent of the people; power from the citizens, directly or through elected representatives."],
[4,"Abraham Lincoln","Democracy is the government of the people, by the people, for the people."],
[4,"Robert Dahl","A system that responds fully to all citizens as political equals."],
[4,"Joseph Schumpeter","An institutional arrangement where individuals gain power through a competitive struggle for the people's vote."],
[4,"John Dewey","Democracy is more than a form of government; it is a mode of associated living."],
[4,"Direct democracy (type)","Citizens decide directly, via referendums or assemblies (ancient Athens)."],
[4,"Representative democracy","Citizens elect representatives to decide for them (U.S., Pakistan, India)."],
[4,"Constitutional democracy","Representative democracy where the power of elected officials is limited by a constitution."],
[4,"Liberal democracy","Emphasises individual rights, rule of law and freedoms; majority power balanced by minority rights."],
[4,"Participatory democracy","Broader participation beyond elections: grassroots movements and public consultations."],
[4,"Democracy and citizenship","Mutually reinforcing: citizens make democracy work and democracy protects citizens' rights; health of democracy is measured by citizen involvement."],
[5,"Modern society","Characteristics, structures and dynamics that have developed since the industrial revolution and continue to evolve."],
[5,"Industrialization","Shift from agrarian to industrial and service-based economies."],
[5,"Urbanization","Movement of people from rural areas to cities, with growth of infrastructure."],
[5,"Secularization","Shift away from religious authority; decisions based on rational and scientific principles."],
[5,"Bureaucracy","Organised, rule-based administration focused on efficiency and predictability (Max Weber's rationalization)."],
[5,"Individualism","Personal autonomy and self-expression are highly valued."],
[5,"Social mobility","Improving socioeconomic status through merit, education and achievement."],
[5,"Multiculturalism","Diverse ethnic, religious and linguistic groups coexist with inclusion and equality."],
[5,"Mass media","Digital technology and media that spread information rapidly across borders."],
[5,"Ethical dilemmas","Moral questions from technology and science: data privacy, AI, environmental damage, genetic engineering."],
[5,"Citizenship in modern society","Legal status plus active participation in shaping social, political and economic life, locally and globally."]
];
let fc=[],fi=0,flip=false;
function fcLoad(){const c=$("#fcCh").value;fc=GL.filter(g=>c==="all"||g[0]==+c);fi=0;flip=false;fcDraw()}
function fcDraw(){const g=fc[fi];if(!g)return;const e=$("#fcCard");e.classList.toggle("back",flip);e.innerHTML=flip?`<div>${esc(g[2])}</div>`:`<div><small style="color:var(--muted)">Topic ${g[0]}</small><br><b>${esc(g[1])}</b></div>`;$("#fcInfo").textContent=`Card ${fi+1} of ${fc.length}`}
$("#fcCard").onclick=$("#fcFlip").onclick=()=>{flip=!flip;fcDraw()};
$("#fcNext").onclick=()=>{fi=(fi+1)%fc.length;flip=false;fcDraw()};
$("#fcPrev").onclick=()=>{fi=(fi-1+fc.length)%fc.length;flip=false;fcDraw()};
$("#fcShuf").onclick=()=>{fc=shuffle(fc);fi=0;flip=false;fcDraw()};
$("#fcCh").onchange=fcLoad;
$("#fcCh").innerHTML='<option value="all">All topics</option>'+CHAPTERS.map(([id,n],i)=>`<option value="${i+1}">${i+1}. ${esc(n)}</option>`).join("");
fcLoad();
function glo(){const s=$("#gloSearch").value.toLowerCase();
 $("#gloTable").innerHTML="<tr><th>Topic</th><th>Term</th><th>Meaning</th></tr>"+GL.filter(g=>!s||(g[1]+g[2]).toLowerCase().includes(s)).map(g=>`<tr><td>${g[0]}</td><td><b>${esc(g[1])}</b></td><td>${esc(g[2])}</td></tr>`).join("")}
$("#gloSearch").oninput=glo;glo();
