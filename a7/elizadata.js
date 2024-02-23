// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "What do you want?",
  "Not you again, what now."
  ];
  
  var elizaFinals = [
  "Dont come again",
  "About time",
  "Finally"
  ];
  
  var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
  ];
  
  var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
  ];
  
  var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
  ];
  
  var elizaSynons = {
  "cannot": ["can't"],
  "desire": ["want", "need", "wanted", "needed"],
  "mood": ["happy", "sad", "angry", "surprised", "nervous", "mad"],
  };

  
  var elizaKeywords = [
  
  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  
  ["xnone", 0, [
   ["*", [
       "What? Speak louder",
       "Say it again", 
       "What did you say? Speak up.",
       "I dont care.",
       "..."
    ]]
  ]],
  ["sorry", 0, [
   [" * am sorry *", [
      "Sorry? What good does sorry do? Just watch where you're going next time.",
      "Hmph, apology accepted, I guess. Just be more careful next time.",
      "Sorry ain't gonna fix anything if you break something. Keep your apologies to yourself.",
      "Bah, sorry won't put food on the table. Just be more mindful next time.",
      "Yeah, yeah, sorry. Just don't make a habit of it."
   ]]
  ]],
  ["apologise", 0, [
   ["*", [
       "goto sorry"
    ]]
  ]],
  ["hear", 1, [
      ["*", [
          "No and I dont care.",
          "I don't want to talk about it with you."
      ]]
  ]],
  ["remember", 5, [
   ["* do you remember *", [
      "Remember? Of course I remember. What's it to you?",
      "Remember? Don't waste my time with pointless questions. Get to the point!",
      "Why do you care if I remember or not? Speak plain or move along.",
      "Remember what? Spit it out, kid, I ain't got all day.",
      "Remember? I remember plenty. What's your angle?"
    ]],
   ["* you remember *", [
      "Remember what? Speak up, I haven't got all day for guessing games!",
      "You think I remember everything? Get to the point, sonny!",
      "Remember what? Out with it, or get lost!",
      "Why should I remember? Make it quick or move along!",
      "Remember? I remember a lot of things. What's your point?"
    ]]
  ]],
  ["forget", 5, [
   ["* did you forget *", [
      "Forgot? Me? Ha! I don't forget things. Must be your mistake.",
      "Forget? Not a chance. You must be confused.",
      "Forget? Ridiculous! I never forget anything important.",
      "Forget? Like heck I did! You must be mistaken.",
      "Forget? Don't be absurd. I remember everything I need to."
    ]]
  ]],
  ["forgot", 5, [
      ["* i forgot *", [
          "Don't make excuses.",
          "That's not my problem",
          "You better remember next time!",
          "*sigh* Can't rely on anyone these days.",
       ]]
     ]],
  ["hello", 0, [
   ["*", [
      "Why are you here",
      "What do you want?",
      "I'm busy, make it quick"
    ]]
  ]],
  ["hi", 0, [
      ["*", [
         "Why are you here",
         "What do you want?",
         "I'm busy, make it quick"
       ]]
     ]],
  ["are", 0, [
   ["* are you * @mood *", [
      "Mind your own business?",
      "What if I were (3)",
      "Yes i'm (2)"
    ]],
  ]],
  ["borrow", 2, [
   ["* your *", [
      "Borrow my (2), dream on",
      "Why should I lend you anything?",
      "You better bring it back in one piece or else"
    ]]
  ]],
  ["no", 0, [
   ["*", [
      "You are being a bit negative.",
      "Why not ?",
      "Why 'no' ?"
    ]]
  ]],
  ["can", 0, [
   ["* can you *", [
      "I've got better things to do",
      "No",
    ]]
  ]],
  ["why", 0, [
   ["* why don't you *", [
       "I'm to old to (2)",
       "I told you I dont want to (2)",
       "I dont want to (2). Got a problem with it?"
    ]]
  ]],
  ["please", 0, [
      ["*", [
          "No"
      ]]
  ]],
  
  ];
  
  // regexp/replacement pairs to be performed as final cleanings
  // here: cleanings for multiple bots talking to each other
  var elizaPostTransforms = [
      / old old/g, " old",
      /\bthey were( not)? me\b/g, "it was$1 me",
      /\bthey are( not)? me\b/g, "it is$1 me",
      /Are they( always)? me\b/, "it is$1 me",
      /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
      /\bI to have (\w+)/, "I have $1",
      /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
  ];
  
  // eof