























// =================================================================
// DANIEL'S TRANCE - TRIPLE WORKING SCOPE EDITION
// =================================================================

 // 1. BEAT & RYTM
$: stack(
  s("kick*4"), 
  s("[~ hh]*4").gain(slider(0.8, 0, 1)), 
  s("~ hh:2 ~ ~").gain(0.6), 
  s("claps*2").slow(2).gain(0.5))
  ._scope()
  
  ; // <-- TUTAJ! Scope przypięty do całego stacka

// 2. STRANGER  ARPEGGIO + WIZUALIZACJA
$: s("sawtooth*8")
  .note("<[c3 e3 g3 b3 c4 b3 g3 e3]>")
  .lpf(slider(1800, 400, 4000) + sine.range(0, 1000).slow(4))
  .lpq(slider(3, 1, 8))
  .delay(0.4).delayfb(0.4)
  .room(0.6)
  .gain(slider(0.65, 0, 1))
  

// 3. POTĘŻNA LINIA BASU + WIZUALIZACJA
$: s("sawtooth*16")
  .note("<[~ c3 c3 c3] [~ c3 c3 c3] [~ b2 b2 b2] [~ b2 b2 b2]>")
  .lpf(slider(2500, 500, 4000)) 
  .lpq(4) 
  .shape(0.4) 
  .gain(slider(1.1, 0, 1.5))
  ._scope(); // Skacze ostro i agresywnie w rytm basu

// 4. EMOCJONALNY REFREN + WIZUALIZACJA
$: s("supersaw*16")
  .note("<c5 b4 a4 g4>".slow(8))
  .unison(5) 
  .detune(0.6) 
  .jux(rev)
  .lpf(sine.range(1200, 3500,).slow(8))
  .room(0.8)
  .gain(slider(0.3, 0, 0.6))
  ._scope(); // Szeroka, gęsta fala od brzmienia unisono

// 5. TWOJE WŁASNE SAMPLE Z PULPITU
$: s("wokal*4") 
  .n("<0 1 2 3>") 
  .slow(4) 
  .delay(0.6).delayfb(0.5) 
  .room(0.8) 
  .gain(slider(0.9, 0, 1.5))
._scope()
