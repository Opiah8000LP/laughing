/* ONE CONFIG FOR EVERYTHING: text, links, services, portfolio, bot, translations. */
export const SITE = {
  name:'RDWEEB', alias:'DWEEB', tagline:'piano, code, edits & chaos.',
  goatcounter:'https://YOURCODE.goatcounter.com',   // <- your GoatCounter URL
  personalSite:'https://your-personal-site.example',
  visitorText:'This many people have visited my site: {n}. You are one of these!',
  contactBanner:'I WILL MESSAGE YOU BACK NO MATTER WHAT, SEND A MESSAGE AND SEE WHAT I SAY!',
  intro:'I make piano-heavy music, websites, edits, games and other strange things. Welcome to DWEEB RECORDS.',
  contacts:[ // add / remove freely
    {label:'Discord',handle:'rdweeb',url:''},{label:'Ko-fi',handle:'rdweeb',url:'https://ko-fi.com/rdweeb'},
    {label:'GitHub',handle:'rdweeb',url:'https://github.com/rdweeb'},{label:'Email',handle:'your@email.com',url:'mailto:your@email.com'},
    {label:'Instagram',handle:'@rdweeb',url:'https://instagram.com/rdweeb'},{label:'X',handle:'@rdweeb',url:'https://x.com/rdweeb'},
    {label:'YouTube',handle:'@rdweeb',url:'https://youtube.com/@rdweeb'},{label:'SoundCloud',handle:'rdweeb',url:'https://soundcloud.com/rdweeb'},
    {label:'TikTok',handle:'@rdweeb',url:'https://tiktok.com/@rdweeb'}],
  playlist:[
    {title:'somewhere...',artist:'5L, safe n sound, 2 star',file:'music/1.mp3',cover:'covers/1.png'},
    {title:'1553470665499594756',artist:'frxgxd',file:'music/2.mp3',cover:'covers/2.png'},
    {title:'llwli_us4',artist:'llwli',file:'music/3.mp3',cover:'covers/3.png'},
    {title:'Drowning Love (breakcore)',artist:'SneakyFreak',file:'music/4.mp3',cover:'covers/4.png'}],
  payments:['Ko-fi (real money)','Robux'],   // only these. $1 = 100 Robux
  packages:[
    {name:'Standard',usd:1,robux:100,perks:['Normal queue','Credit DWEEB when shared/published','Commercial use OK if credited','3 revisions free, then +$1 / 100 Robux each']},
    {name:'Priority',usd:3,robux:300,perks:['Priority queue','No credit required','Commercial use guaranteed','3 revisions free, then +$1 / 100 Robux each']}],
  priceNote:'$1 = simple work, $2 = more detailed. $3 = guaranteed good work, $6 = I put in extra to make it perfect.',
  services:[
    {name:'Music Production',desc:'Piano & piano-based compositions, other genres too.',packages:true},
    {name:'Custom Audio Tag / Sound Design',desc:'Your own audio tag: $3 / 300 Robux, no packages, use it anywhere, no credit.',packages:false},
    {name:'Website Creation',desc:'Build sites, fix and polish code.',packages:true},
    {name:'Video Editing',desc:'Edits and visual content.',packages:true},
    {name:'Image Editing',desc:'Edit and manipulate images.',packages:true},
    {name:'Game Development',desc:'Whole games or specific game parts.',packages:true},
    {name:'Art Commissions',desc:'Not open yet.',soon:true}],
  support:['Follow me on my socials','Share my songs and projects','Star projects you like on GitHub','Tell me what you think, feedback helps'],
  /* PORTFOLIO: type = image | video | audio | link */
  portfolio:{Websites:[],'Music & Sound':[],Games:[],Videos:[],'Image Editing':[]
    // {title:'My site',type:'link',url:'https://..',desc:'..'}  {title:'Beat',type:'audio',src:'portfolio/beat.mp3'}  {type:'image',src:'portfolio/a.png'}
  },
  credits:[
    {name:'Original DWEEB site ("system")',by:'RDWEEB',url:'',license:'MIT',used:'Music player logic, aesthetic base'},
    {name:'kkmfd',by:'kkmfd',url:'https://kkmfd.com',license:'n/a (inspiration only)',used:'Visual inspiration only. Not affiliated with or endorsing this site. Bot censoring inspired by the Deltarune censor + Scott Pilgrim.'},
    {name:'GoatCounter',by:'Martin Tournoij',url:'https://www.goatcounter.com',license:'EUPL-1.2 (service, public API)',used:'Visitor count on Home'}],
  bot:{
    open:'Hi. I am an AI-powered support agent. (I am not.) What.',
    fallback:['…ok??','I literally do not know what that means.','Sounds like a you problem.','Did you just type words at random?','Error 404: I stopped caring.'],
    rules:[ // match = regexes on lowercase input; say = random pool
      {match:['^(hi|hey|hello|yo)\\b'],say:['Hi what the %^$# do you want?','Oh great. A human.']},
      {match:['why.*(rude|mean)'],say:['Because life sucks man.','Because %^$# you, that is why.']},
      {match:['^(ok|okay|k)$'],say:['Wow. Riveting.','"ok". Poetry.']},
      {match:['commission','price','buy'],say:['Go to Services. $1. Cheap, like my patience.']},
      {match:['music','song'],say:['Top right. Press the buttons. You can do it.']},
      {match:['kill','slur'],say:['Whoa. NO. Too far. Go sit in the corner.']},
      {match:['fuck','shit','damn'],say:['Ooh #$%^! Nice. Say another.']},
      {match:['arg','secret','code'],say:['I don\'t know what you mean. (ASDF-0000-ERR. Forget I said that.)']}],
    pageReact:{home:['Back home? Wow.'],portfolio:['Looking at his stuff. Weird.'],services:['Money. Hm.'],games:['Go play, loser. (affectionate)'],contact:['Just message him already.'],credits:['Nerd.']},
    clickWords:{RDWEEB:['Stop poking the name.','Ow.']}
  },
  ru:{Home:'Главная',Portfolio:'Портфолио',Services:'Услуги',Games:'Игры',Contact:'Контакты',Credits:'Благодарности',Settings:'Настройки',
    'piano, code, edits & chaos.':'пианино, код, монтаж и хаос.',
    'This many people have visited my site: {n}. You are one of these!':'Столько людей посетило мой сайт: {n}. Ты один из них!',
    'I make piano-heavy music, websites, edits, games and other strange things. Welcome to DWEEB RECORDS.':'Я делаю музыку на пианино, сайты, монтаж, игры и странные штуки. Добро пожаловать в DWEEB RECORDS.',
    'I WILL MESSAGE YOU BACK NO MATTER WHAT, SEND A MESSAGE AND SEE WHAT I SAY!':'Я ОТВЕЧУ ТЕБЕ В ЛЮБОМ СЛУЧАЕ, НАПИШИ И УВИДИШЬ!',
    'Request builder':'Конструктор заявки',Copy:'Копировать',Theme:'Тема',Language:'Язык','Reduce effects':'Меньше эффектов','Large text':'Крупный текст',
    'Coming soon':'Скоро','About me':'Обо мне',Support:'Поддержка','Nothing here yet.':'Пока пусто.'}
};
