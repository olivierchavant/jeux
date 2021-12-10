
class Joueur {
    constructor(nom, points, tour,valeurDe,score) {
        this.nom = nom
        this.points = 0
        this.tour = tour
        this.valeurDe = valeurDe
        this.score = score
    }
        rand() {
            return Math.floor(Math.random() * (7 - 1) + 1);
            }
        jouer() { 
                  this.valeurDe = this.rand();
                  if (this.valeurDe > 1) {
                  this.points += this.valeurDe
                   } else { console.log("vous avez perdu");
                   this.points = 0;
                    }
                return this.points }
                  
        tourchange() { if ( this.tour === 0) { this.tour = 1} else { this.tour = 0}}
}

let joueur01 = new Joueur("joueur01",0,1,0,0)
let joueur02 = new Joueur("joueur02",0,0,0,0)
clear()
let Go1 = document.getElementById("go1")
let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')
let hold = document.getElementById("jouer")
let tour1 = document.getElementById("tour1")
let tour2 = document.getElementById("tour2")  
let global1 = document.getElementById("global1")
let global2 = document.getElementById("global2")
let newgame = document.getElementById("newgame")
let J1 = document.getElementById("J1")
let J2 = document.getElementById("J2")
let main = document.getElementById("hide")
J1.innerHTML = "<h2 id ='J1' style = 'background-color: aliceblue;'> Joueur 1 c'est à vous  </h2>"
J2.innerHTML = "<h2 id ='J2' > Joueur 2 </h2>"


newgame.addEventListener("click", (event)=>  { reload() })

Go1.addEventListener("click", (event)=>  { 
        if (joueur01.tour === 1 ){ 
            
            if ( joueur01.jouer() === 0 ) { 
                joueur01.tourchange()
                joueur02.tourchange()
                result1.textContent = joueur01.points
                affichagedé(joueur01.valeurDe)
                J2.innerHTML = "<h2 id ='J2' style = 'background-color: aliceblue;'> Joueur 2 c'est à vous  </h2>" 
                J1.innerHTML = "<h2 id ='J1' > Joueur 1  </h2>"
            } else {
                affichagedé(joueur01.valeurDe)
                result1.textContent = joueur01.points 
            }
       
        } else {  if (joueur02.jouer() === 0 ) { 
            joueur01.tourchange()
            joueur02.tourchange()
            result2.textContent = joueur02.points
            affichagedé(joueur02.valeurDe)
            J1.innerHTML = "<h2 id ='J1' style = 'background-color: aliceblue;'> Joueur 1 c'est à vous  </h2>"
            J2.innerHTML = "<h2 id ='J2' > Joueur 2  </h2>"
        } else { affichagedé(joueur02.valeurDe)
            result2.textContent = joueur02.points }
        }
  })

hold.addEventListener("click", (event)=> { 
    
    if (joueur01.tour === 1 ) { 
      joueur01.score += joueur01.points 
        if ( joueur01.score < 100 ) { 
            joueur01.points = 0 
            result1.textContent = joueur01.points
            J2.innerHTML = "<h2 id ='J2' style = 'background-color: aliceblue;'> Joueur 2 c'est à vous  </h2>" 
            J1.innerHTML = "<h2 id ='J1' > Joueur 1  </h2>"
            clear()
        } else { 
            main.innerHTML = "<main id = 'hide' >  </main>" 
            main.textContent = 'Le joueur 1 a Gagné   !!! avec ' +  joueur01.score + ' points'
         }

    } else { joueur02.score += joueur02.points

        if ( joueur02.score < 100 ) { 
        joueur02.points = 0 ;
        result2.textContent = joueur02.points
        J1.innerHTML = "<h2 id ='J1' style = 'background-color: aliceblue;'> Joueur 1 c'est à vous  </h2>"
        J2.innerHTML = "<h2 id ='J2' > Joueur 2  </h2>"
        clear()
        } else { 
            main.innerHTML = "<main id = 'hide' >  </main>" 
            main.textContent = 'Le joueur 2 a Gagné   !!! avec ' +  joueur02.score + ' points'
         }}

        global1.textContent = joueur01.score
        global2.textContent = joueur02.score
      joueur01.tourchange()
      joueur02.tourchange()
  })
  

function six () { 
  const mycanvas = document.getElementById("mycanevas")
  // déclaration du canvas
  let ctx;
  if (mycanvas.getContext) {
     ctx = mycanvas.getContext('2d') ;
     ctx.fillStyle = 'white'
     ctx.fillRect(0,0,125,130)
     ctx.strokeRect(0,0,125,130)
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(25, 25, 10, 0, Math.PI * 2);
    ctx.moveTo( 25, 25)
    ctx.arc(100, 25, 10, 0, Math.PI * 2);
    ctx.moveTo( 25, 25)
    ctx.arc(100, 65, 10, 0, Math.PI * 2);
    ctx.moveTo( 25, 25)
    ctx.arc(25, 65, 10, 0, Math.PI * 2);
    ctx.moveTo( 25, 25)
    ctx.arc(25, 105, 10, 0, Math.PI * 2);
    ctx.moveTo( 25, 25)
    ctx.arc(100, 105, 10, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.closePath();

  } else {
     console.log('canevas non supporté')
   } }
function un () { 
    const mycanvas = document.getElementById("mycanevas")
    // déclaration du canvas
    let ctx;
    if (mycanvas.getContext) {
       ctx = mycanvas.getContext('2d') ;
       ctx.fillStyle = 'white'
       ctx.fillRect(0,0,125,130)
       ctx.strokeRect(0,0,125,130)
      ctx.fillStyle = 'red'
      ctx.beginPath();
      ctx.arc(62.5 , 65, 10, 0, Math.PI * 2);
      ctx.fill(); 
      ctx.closePath();
  
    } else {
       console.log('canevas non supporté')
     } }
function deux () { 
    const mycanvas = document.getElementById("mycanevas")
    // déclaration du canvas
    let ctx;
    if (mycanvas.getContext) {
      ctx = mycanvas.getContext('2d') ;
      ctx.fillStyle = 'white'
      ctx.fillRect(0,0,125,130)
      ctx.strokeRect(0,0,125,130)
      ctx.fillStyle = 'red'
      ctx.beginPath();
      
      ctx.arc(100, 65, 10, 0, Math.PI * 2);
      ctx.moveTo( 25, 25)
      ctx.arc(25, 65, 10, 0, Math.PI * 2);
      ctx.moveTo( 25, 25)
    
      ctx.fill(); 
      ctx.closePath();
  
    } else {
      console.log('canevas non supporté')
    } }
 function trois () { 
        const mycanvas = document.getElementById("mycanevas")
        // déclaration du canvas
        let ctx;
        if (mycanvas.getContext) {
           ctx = mycanvas.getContext('2d') ;
           ctx.fillStyle = 'white'
           ctx.fillRect(0,0,125,130)
           ctx.strokeRect(0,0,125,130)
          ctx.fillStyle = 'red'
          ctx.beginPath();
          ctx.arc(100, 25, 10, 0, Math.PI * 2);
          ctx.moveTo( 25, 25)
          ctx.arc(62.5 , 65, 10, 0, Math.PI * 2);
          ctx.moveTo( 25, 25)
          ctx.arc(25, 105, 10, 0, Math.PI * 2);
          ctx.fill(); 
          ctx.closePath();
      
        } else {
           console.log('canevas non supporté')
         } }
function quatre () { 
    const mycanvas = document.getElementById("mycanevas")
    // déclaration du canvas
    let ctx;
    if (mycanvas.getContext) {
       ctx = mycanvas.getContext('2d') ;
       ctx.fillStyle = 'white'
     ctx.fillRect(0,0,125,130)
     ctx.strokeRect(0,0,125,130)
      ctx.fillStyle = 'red'
      ctx.beginPath();
      ctx.arc(25, 25, 10, 0, Math.PI * 2);
      ctx.moveTo( 25, 25)
      ctx.arc(100, 25, 10, 0, Math.PI * 2);
      ctx.moveTo( 25, 25)
      ctx.arc(25, 105, 10, 0, Math.PI * 2);
      ctx.moveTo( 25, 25)
      ctx.arc(100, 105, 10, 0, Math.PI * 2);
      ctx.fill(); 
      ctx.closePath();
  
    } else {
       console.log('canevas non supporté')
     } }
function cinq () { 
    const mycanvas = document.getElementById("mycanevas")
    // déclaration du canvas
    let ctx;
    if (mycanvas.getContext) {
        ctx = mycanvas.getContext('2d') ;
        ctx.fillStyle = 'white'
        ctx.fillRect(0,0,125,130)
        ctx.strokeRect(0,0,125,130)
        ctx.fillStyle = 'red'
        ctx.beginPath();
        ctx.arc(25, 25, 10, 0, Math.PI * 2);
        ctx.moveTo( 25, 25)
        ctx.arc(100, 25, 10, 0, Math.PI * 2);
        ctx.moveTo( 25, 25)
        ctx.arc(62.5 , 65, 10, 0, Math.PI * 2);
        ctx.moveTo( 25, 25)
        ctx.arc(25, 105, 10, 0, Math.PI * 2);
        ctx.moveTo( 25, 25)
        ctx.arc(100, 105, 10, 0, Math.PI * 2);
        ctx.fill(); 
        ctx.closePath();

    } else {
        console.log('canevas non supporté')
        } }
  function clear () { 
    const mycanvas = document.getElementById("mycanevas")
    // déclaration du canvas
    let ctx;
    if (mycanvas.getContext) {
       ctx = mycanvas.getContext('2d') ;
       ctx.fillStyle = 'white'
       ctx.fillRect(0,0,125,130)
       ctx.strokeRect(0,0,125,130)
      ctx.fill(); 
      
  
    } else {
       console.log('canevas non supporté')
     } }
function affichagedé (nombre) { 
    ctx = mycanevas.getContext('2d') ;
    ctx.clearRect(0, 0, mycanevas.width, mycanevas.height);
    if ( nombre === 1) { un()}
    if (nombre === 2) { deux()}
    if (nombre === 3) { trois()}
    if (nombre === 4) { quatre()}
    if (nombre === 5) { cinq()}
    if (nombre === 6) {six()} 
}
function reload() {
  location.reload(true)
  ;
}