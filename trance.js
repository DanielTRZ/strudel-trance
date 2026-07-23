
// =================================================================
// DANIEL'S TRANCE - TRIPLE WORKING SCOPE EDITION (FULL KOMENTARZ)
// =================================================================

// 1. BEAT & RYTM (Fundament perkusyjny: kick, główne hi-haty, akcenty i clap)
$: stack(
  s("kick*4"),  
  s("[~ hh]*4").gain(slider(0.231, 0, 1)),  
  s("~ hh:2 ~ ~").gain(0.6),  
  s("claps*2").slow(5).gain(0.5))
  ._scope()
  ; 

// 2. STRANGER ARPEGGIO + WIZUALIZACJA (Mroczny, serialowy motyw wiodący z filtrem)
$: s("sawtooth*8")
  .note("<[c3 e3 g3 b3 c4 b3 g3 e3]>")
  .lpf(slider(1602.4, 400, 4000) + sine.range(0, 1000).slow(4))
  .lpq(slider(2.204, 1, 8))
  .delay(0.4).delayfb(0.4)
  .room(0.6)
  .gain(slider(0.458, 0, 1))

// 3. POTĘŻNA LINIA BASU + WIZUALIZACJA (Mięsisty, niskotonowy bas budujący groove)
$: s("sawtooth*16")
  .note("< [~ a1 a1 a1] [~ a1 a1 a1] [~ a1 a1 a1]  [~ b1 b1 b1] [~ b2 b2 b2] [~ c3 c3 c3] [~ c3 c3 c3]  >")
  .lpf(slider(3055, 500, 4000))  
  .lpq(4)  
  .shape(0.4)  
  .gain(slider(0.6405, 0, 1.5))
  ._scope(); 

// 4. EMOCJONALNY REFREN + WIZUALIZACJA (Szeroki, gęsty pad supersaw z rozszerzeniem stereo)
$: s("supersaw*16")
  .note("<c5 b4 a4 g4>".slow(8))
  .unison(5)  
  .detune(0.6)  
  .jux(rev)
  .lpf(sine.range(1200, 3500,).slow(8))
  .room(0.8)
  .gain(slider(0.1074, 0, 0.6))
  ._scope(); 

// 5. TWOJE WŁASNE SAMPLE Z PULPITU (Główna, przestrzenna warstwa wokalowa)
$: s("wokal*4")  
  .n("<0 1 2 3>")  
  .slow(4)  
  .delay(0.6).delayfb(0.5)  
  .room(0.8)  
  .gain(slider(1.0215, 0, 1.5))
._scope()

// 6. OFFBEAT HI-HAT (Transowe hi-haty na "i" napędzające tempo w tle)
$: s("[~ hh]*8")
  .gain(slider(0.718, 0, 1))
  .pan(sine.range(0.2, 0.8).slow(2))
._scope()

// 7. SNARE ROLLER / RISER (Efekt narastania i filtracji przed przełomem)
$: s("snare*16")
  .n(run(16))
  .gain(sine.range(0, 0.8).slow(4))
  .lpf(sine.range(500, 8000).slow(4))

// 8. CYBERNETYCZNE TŁO (Wysokie, metaliczne arpeggio dodające przestrzeni)
$: s("triangle*32")
  .note("<[g5 d6 f6 d6]>".slow(4))
  .pan(sine.range(0.1, 0.9).slow(2))
  .delay(0.5).delayfb(0.7)
  .room(0.9)
  .gain(slider(0.108, 0, 0.5))
  ._scope()

// 9. GLITCHOWY WOKAL (Poszatkowane, cyberpunkowe echa głosu)
$: s("wokal*16")
  .n("<0 0 1 1 2 3>".slow(2))
  .struct("x*8")
  .begin(rand.range(0, 0.3))
  .end(0.4)
  .gain(slider(0.495, 0, 1))
  ._scope()

// 10. SYNCOPATOWANY SUB-BASS (Przerywany, gęsty rytm pomagający dołu)
$: s("bd*16")
  .struct("1 ~ 1 2 ~ 3 ~ 1  2 ~ 1 ~  1 1 1 1 ~")
  .cutoff(600)
  .room(0.5)
  .gain(slider(0.123, 0, 1))
  ._scope()

// 11. DELAYED RUMBLE KICK (Stopa z krótkim, potężnym ogonem z delayu)
$: s("bd*8")
  .cutoff(700)
  .delay(0.25)
  .delayfb(0.6)
  .room(0.3)
  .gain(slider(1, 0, 1))
  ._scope()

// 12. EUKLIDESOWY GROOVE (Organiczny, transowy rytm perkusyjny oparty na matematyce)
$: s("bd*32")
  .struct("x(5,16)") 
  .cutoff(900)
  .gain(slider(1, 0, 1))
  ._scope()
