var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,hero;

var tc,tw, tw1,tw2, tr1,tr2,tr3,c1,bu1,bu2,bu3,bu4,mu1,s1,si1;

class Arrange1{
 constructor(){
    t1 =createSprite(600,725,40,40);
    t1.addImage(i1);
    t1.scale =0.6
    tw1= createSprite(475,880,80,40);
    tw1.scale = 1.4;
    tw1.addImage(i18);
    tw2= createSprite(475,830,80,40);
    tw2.addImage(i17);
    tw2.scale = 1.4;
    t3 =createSprite(350,797,40,40);
    t3.addImage(i3);
    t3.scale =0.6;
    
    //t4 =createSprite(400,150,40,40);
    //t4.addImage(i4); 
    
    t6 =createSprite(350,873,40,40);
    t6.addImage(i6);
    t6.scale = 0.6;
   // t7 =createSprite(155,150,40,40);
    //t7.addImage(i7);
    //t8 =createSprite(200,150,40,40);
    //t8.addImage(i8);
   //t9 =createSprite(150,150,40,40);
    //t9.addImage(i9);
    //t10 =createSprite(300,130,40,40);
    //t10.addImage(i10);
    //t11 =createSprite(400,130,40,40);
    //t11.addImage(i11);
   // t12 =createSprite(500,130,40,40);
    //t12.addImage(i12);
    
    t13 =createSprite(330,500,40,40);
    t13.addImage(i13);
    t13.scale = 0.6;
    t14 =createSprite(400,500,40,40);
    t14.addImage(i14);
    t14.scale = 0.6;
    t15 =createSprite(470,500,40,40);
    t15.addImage(i15);
    t15.scale = 0.6;

    tw = createSprite(1175,850,40,40);
    tw.addImage(i17)
    tw.scale = 1.7;

    tc = createSprite(570,400,40,40);
    tc.addImage(i13);
    tc.scale = 0.6;
    tc.depth=10;

    tc = createSprite(640,400,40,40);
    tc.addImage(i15);
    tc.scale = 0.6;
    tc.depth=10;

    tc = createSprite(710,300,40,40);
    tc.addImage(i13);
    tc.scale = 0.6;

    tc = createSprite(710,539,40,40);
    tc.addImage(tree1);
    tc.depth=10;

    tr1 = createSprite(800,597,40,40);
    tr1.addImage(tree2);
    tr1.scale = 0.6;
    tr1.depth = 170;

    tr2 = createSprite(720,620,40,40);
    tr2.addImage(tree3);
    tr2.scale = 0.5;
    tr2.depth = 170;

    tr1 = createSprite(1010,690,40,40);
    tr1.addImage(tree2);
    tr1.scale = 0.5;

    tr1 = createSprite(270,670,40,40);
    tr1.addImage(tree2);
    tr1.scale = 0.6;

    tr2 = createSprite(200,690,40,40);
    tr2.addImage(tree3);
    tr2.scale = 0.5;
    tr2.depth=12;

    tr2 =createSprite(330,705,40,40);
    tr2.addImage(tree3);
    tr2.scale = 0.4;
    tr2.depth=12;

    tr3 = createSprite(590,305,40,40);
    tr3.addImage(tree3);
    tr3.scale = 0.5;

    c1 = createSprite(950,740,40,40);
    c1.addImage(crate);
    c1.scale = 0.6;

    c1 = createSprite(405,450,40,40);
    c1.addImage(crate);
    c1.scale = 0.6;

    c1 = createSprite(450,450,40,40);
    c1.addImage(crate);
    c1.scale = 0.6;

    c1 = createSprite(425,405,40,40);
    c1.addImage(crate);
    c1.scale = 0.6;

    bu1 =createSprite(980,750,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.5;

    bu1 =createSprite(1040,753,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.4;

    bu1 =createSprite(760,675,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.5;

    bu1 =createSprite(300,750,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.45;

    bu1 =createSprite(220,750,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.45;

    bu1 = createSprite(460,460,40,40);
    bu1.addImage(b3);
    bu1.scale = 0.6;

    bu1 = createSprite(560,360,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.5;

    bu1 = createSprite(630,360,40,40);
    bu1.addImage(b1);
    bu1.scale = 0.5;
    
    mu1 = createSprite(700,677,40,40);
    mu1.addImage(mush1);
    mu1.scale = 0.6;

    mu1 = createSprite(200,750,40,40);
    mu1.addImage(mush1);
    mu1.scale = 0.6;

    mu1 = createSprite(350,750,40,40);
    mu1.addImage(mush2);
    mu1.scale = 0.6;

    si1 = createSprite(50,670,40,40);
    si1.addImage(sign2);
    si1.scale = 0.6;
    si1.depth=300;

    s1 = createSprite(600,677,40,40);
    s1.addImage(stone);
    s1.scale = 0.6;
   
    tc = createSprite(780,300,40,40);
    tc.addImage(i15);
    tc.scale = 0.6;
    tc.depth=10;

   //hero - createSprite(200,667,40,40);
   //hero.addImage(m2); 
    //hero.addAnimation("running", m1);
   // hero.scale = 0.5;

    for(var i=37; i<300;i=i+50){
    tc=createSprite(i,797,40,40);
    tc.addImage(i2);
    tc.scale = 0.6;
    tc.depth=10;
    }
    
    for(var i=37; i<300;i=i+30){
        tc=createSprite(i,873,40,40);
        tc.addImage(i5);
        tc.scale = 0.6;
        tc.depth=10;
        }
    for(var i=35; i<200;i=i+50){
       tc=createSprite(i,720,40,40);
       tc.addImage(i2);
       tc.scale=0.6;
       tc.depth=10;
     }

    
     
     for(var i=670; i<950;i=i+70){
        tc=createSprite(i,725,40,40);
        tc.addImage(i2);
        tc.scale = 0.6;
        tc.depth=10;
        }

     
     for(var i=800; i<950;i=i+75){
            tc=createSprite(600,i,40,40);
            tc.addImage(i4);
            tc.scale = 0.6;
            tc.depth=10;
            }
     
      for(var i=670; i<950;i=i+70){
         tc=createSprite(i,800,40,40);
         tc.addImage(i5);
         tc.scale = 0.6;
         tc.depth=10;
                } 
                
      for(var i=676; i<1050;i=i+59){
          tc=createSprite(i,875,40,40);
          tc.addImage(i5);
          tc.scale = 0.6;
          tc.depth=10;
                    }                 

 
      for(var i=956; i<1050;i=i+74){
          tc=createSprite(i,800,40,40);
          tc.addImage(i2);
          tc.scale = 0.6;
          tc.depth=10;
                        }   
                        
                        
      for(var i=35; i<300;i=i+50){
         tc=createSprite(i,200,40,40);
         tc.addImage(i2);
         tc.scale = 0.6;
         tc.depth=10;
                            }
                          
      for(var i=35; i<300;i=i+50){
          tc=createSprite(i,250,40,40);
          tc.addImage(i5);
          tc.scale = 0.6;
          tc.depth=10;
          }

      for(var i=35; i<300;i=i+50){
          tc=createSprite(i,300,40,40);
          tc.addImage(i9);
          tc.scale = 0.6;
          tc.depth=10;
            }       
         
       for(var i=1050; i<2050;i=i+50){
           tc=createSprite(i,200,40,40);
           tc.addImage(i2);
           tc.scale = 0.6;
           tc.depth=10;
                }          
                    

       for(var i=1050; i<2050;i=i+50){
           tc=createSprite(i,250,40,40);
           tc.addImage(i5);
           tc.scale = 0.6;
           tc.depth=10;
                    }          
             
       for(var i=1050; i<2050;i=i+50){
           tc=createSprite(i,300,40,40);
           tc.addImage(i9);
           tc.scale = 0.6;
           tc.depth=10;
                        }
 
       for(var i=650; i<850;i=i+50){
           tc=createSprite(i,600,40,40);
           tc.addImage(i2);
           tc.scale = 0.6;
           tc.depth=10;
           }     

    
                    

           
                  
       for(var i=650; i<850;i=i+50){
           tc=createSprite(i,650,40,40);
           tc.addImage(i5);
           tc.scale = 0.6;
           tc.depth=10;
        }        

        console.log(si1.depth);


                }

 
}