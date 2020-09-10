try {
  setTimeout(() => console.log("A"), 500);
  setTimeout(() => console.log("B"), 0);
  setTimeout(() => console.log("C"), 1000);
  setTimeout(() => console.log("D"), 500);

  console.log("E");
} catch (err) {
  console.log(err);
}

// ????
// A B C D E
// B E A D C
// E B A D C

// pile d'appels
// ^
// |
// |
// |                             lg        lg    lg        lg
// |st - st - st - st - lg ..@.. cbB ..@.. cbA - cbD ..@.. cbC
// +-----0-----------------------8-----------------------------------------------------------------> temps
//                      E        B         A     D         C

// file d'attente (0ms) : cbB
// file d'attente (8ms) :
// file d'attente (10ms) :
// file d'attente (499ms) : cbA cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) :
// file d'attente (999ms) : cbC
// file d'attente (1000ms) :

// Youtube --> Jake Archibald : JSConf Asia 2018 -> In the loop
