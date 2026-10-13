/* ============ くるみちゃん — site content ============
   Everything written for this site. Nothing mirrored from anywhere. */

/* ---------- the clips ---------- */
window.KURUMI_VIDEO = [
  { src:'assets/video/v08.mp4', poster:'assets/video/v08.jpg', ratio:'9/16', tag:'desk',
    title:'Introductions',
    note:'The monitor behind me is doing something. I have decided not to turn around.' },
  { src:'assets/video/v07.mp4', poster:'assets/video/v07.jpg', ratio:'16/9', tag:'outside',
    title:'The cat at the burger place',
    note:'He sits on the table. Nobody asks him to move. I have never had that kind of confidence.' },
  { src:'assets/video/v06.mp4', poster:'assets/video/v06.jpg', ratio:'9/16', tag:'night',
    title:'Vending machine, 1am',
    note:'Hot can, cold street, no reason to be out here. Best part of the shift.' },
  { src:'assets/video/v05.mp4', poster:'assets/video/v05.jpg', ratio:'16/9', tag:'room',
    title:'Room tour, no furniture',
    note:'I keep saying I will decorate. So far the sunlight is doing all of the work.' },
  { src:'assets/video/v04.mp4', poster:'assets/video/v04.jpg', ratio:'9/16', tag:'bread',
    title:'Second dinner',
    note:'Melon pan at eleven at night is not a meal, it is a decision, and I made it twice.' },
  { src:'assets/video/v03.mp4', poster:'assets/video/v03.jpg', ratio:'9/16', tag:'outside',
    title:'Outside, briefly',
    note:'Went for one thing. Came back with three. The street was orange and I was happy.' },
  { src:'assets/video/v02.mp4', poster:'assets/video/v02.jpg', ratio:'9/16', tag:'kitchen',
    title:'Before the open',
    note:'Kitchen is clean, bread is out, nothing has gone wrong yet. This is my favourite hour.' },
  { src:'assets/video/v01.mp4', poster:'assets/video/v01.jpg', ratio:'9/16', tag:'desk',
    title:'At the desk, not looking at the desk',
    note:'Four screens of information behind me and I am pointing a camera the other way.' },
  { src:'assets/video/v00.mp4', poster:'assets/video/v00.jpg', ratio:'9/16', tag:'night',
    title:'The slow way up',
    note:'The fast way home has a phone in it. The slow way has a tram and a paper bag.' }
];

/* ---------- the pictures ---------- */
window.KURUMI_IMAGE = [
  { src:'assets/gallery/m07.jpg', ratio:'1/1', title:'Green day',
    note:'Not handling it well. Nobody warns you that up is also loud.' },
  { src:'assets/gallery/p01.jpg', ratio:'864/1528', title:'Konbini, 02:40',
    note:'Last one on the shelf. The shelf has opinions about my night.' },
  { src:'assets/gallery/m06.jpg', ratio:'1/1', title:'Tea is hot, coins are not',
    note:'Something is burning on the right side of the desk. I am facing left.' },
  { src:'assets/gallery/m05.jpg', ratio:'1/1', title:'The jar is the strategy',
    note:'Phone in glass, lid on, key somewhere else. Soup does the rest.' },
  { src:'assets/gallery/p00.jpg', ratio:'864/1528', title:'Ramen outranks everything',
    note:'The phone gets its own plate and no attention whatsoever.' },
  { src:'assets/gallery/m04.jpg', ratio:'1/1', title:'Down only, bread up',
    note:'A red arrow that big is not information, it is just a mood with a graph around it.' },
  { src:'assets/gallery/m03.jpg', ratio:'1/1', title:'Something with no prices in it',
    note:'Window is screaming. Magazine is not. I am reading the magazine.' },
  { src:'assets/gallery/m02.jpg', ratio:'1/1', title:'Two monitors, one opinion',
    note:'Both screens agree with each other, which is how I know to go and make tea.' },
  { src:'assets/gallery/m01.jpg', ratio:'1/1', title:'Drawer closed',
    note:'The chart carries on perfectly well without supervision. Rude, honestly.' },
  { src:'assets/gallery/m00.jpg', ratio:'1/1', title:'Caption not included',
    note:'Blank sign, blank thought, red candles. Fill in whichever part you relate to.' }
];

/* ---------- the bunny index: six indicators, none admissible ---------- */
window.KURUMI_INDEX = [
  { code:'MPS', name:'Melon Pan Supply', read:'two left', mood:'warn',
    note:'Shelf count at the 2am konbini. Four or more and the night is calm. One left and something is about to happen, probably to me.' },
  { code:'PO',  name:'Plushie Orientation', read:'facing the wall', mood:'warn',
    note:'Usagi-san faces the monitor on nights I am allowed to look at it. I did not turn him round. He turned himself.' },
  { code:'TT',  name:'Tea Temperature', read:'cold', mood:'good',
    note:'Measured in forgetting. Hot tea means I am watching the screen. Cold tea means I did something right an hour ago.' },
  { code:'PP',  name:'Phone Position', read:'face down', mood:'good',
    note:'Face down is a position. Face up is a confession. There is no third state, whatever my hands claim.' },
  { code:'VML', name:'Vending Machine Luck', read:'corn soup in stock', mood:'good',
    note:'The machine by the stairs decides the mood of the shift. Hot corn soup is a green candle in a can.' },
  { code:'ED',  name:'Ear Droop', read:'slight', mood:'warn',
    note:'The clip ears sit up when I have slept. They do not sit up often. This is the only indicator that measures me and not the market.' }
];

/* ---------- notebook: the margins of a night shift ---------- */
window.KURUMI_NOTES = [
  { t:'01:52', s:'Konbini had two melon pan left. Bought both. I am calling this position sizing.' },
  { t:'02:14', s:'Refreshed four times in a minute, learned nothing four times.' },
  { t:'02:40', s:'The guy on nights has started warming the bread without asking. I have a regular’s face now.' },
  { t:'03:05', s:'Put the phone face down and immediately felt like I had gotten away with something.' },
  { t:'03:33', s:'A cat walked the whole length of the station wall and did not check anything once.' },
  { t:'04:10', s:'Nothing I decide at this hour is a strategy. Writing it down so I believe it tomorrow.' },
  { t:'04:48', s:'Tea has gone cold again, which by my own rules means the night is going well.' },
  { t:'05:20', s:'Sky doing the orange thing over the tracks. Charts cannot do that.' },
  { t:'05:55', s:'Usagi-san is still facing the wall. I respect his read and I am going to bed.' },
  { t:'11:30', s:'Woke up, checked nothing for eleven whole minutes. New personal best.' }
];

/* ---------- ask the melon pan ---------- */
window.KURUMI_ORACLE = [
  'Put it face down. The candle will still be there, and so will you.',
  'The bread is warm. That is the whole signal.',
  'You have already read this chart. You are just reading it louder.',
  'Usagi-san says no. Usagi-san has said no for three days. Usagi-san is undefeated.',
  'Go outside. The street has no opinion about your entry.',
  'Not now. Soup first.',
  'Yes, but only because you waited long enough to ask properly.',
  'Refreshing is not research. It is a nervous habit with a login.',
  'Cold tea detected. You are doing better than you think.',
  'Whatever it is, it will look stupid or obvious tomorrow. Both are fine.',
  'The konbini is open. The market is also open. Only one of them is pleased to see you.',
  'Ask again when you are not holding the phone like that.',
  'Two melon pan left on the shelf. Take one. Leave one. That is the lesson.',
  'No. Go to sleep. This is the oracle, not your friend.'
];

/* the strip that drifts under the hero — every frame on the site, once */
window.KURUMI_STRIP = window.KURUMI_VIDEO.map(function (v) { return v.poster; })
  .concat(window.KURUMI_IMAGE.map(function (i) { return i.src; }));
