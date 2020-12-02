class Start{

   constructor(){
       this.button = createButton('Play');
       this.reset = createButton('Reset');
   }
hide(){
    this.button.hide    
}

display(){

   this.button.position(displayWidth/2 - 40,displayHeight/2 - 80);
   this.reset.position(displayWidth/2 + 30, displayHeight/2);

   this.button.mousePressed(()=>{
       this.button.hide();

   });
   
   


}




}