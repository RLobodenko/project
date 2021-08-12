var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in3');
var radio3 = document.getElementsByName('in5');
var radio4 = document.getElementsByName('in2');
var radio5 = document.getElementsByName('in4');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');
var radio8 = document.getElementsByName('in8');
var radio9 = document.getElementsByName('in9');
var radio10 = document.getElementsByName('in10');
var radio11 = document.getElementsByName('in11');
var but1 = document.getElementById('but1');
var radio12 = document.getElementsByName('in12');
var radio13 = document.getElementsByName('in13');
var radio14 = document.getElementsByName('in14');
var radio15 = document.getElementsByName('in15');
var radio16 = document.getElementsByName('in16');
var radio17 = document.getElementsByName('in17');
var radio18 = document.getElementsByName('in18');
var radio19 = document.getElementsByName('in19');
var radio20 = document.getElementsByName('in20');
var radio21 = document.getElementsByName('in21');
var radio22 = document.getElementsByName('in22');
var radio23 = document.getElementsByName('in23');
var radio24 = document.getElementsByName('in24');
var radio25 = document.getElementsByName('in25');

var ks1=[140, 200, 300];
var pp1=[60, 115, 190];
var pn1=[60, 115, 200];

var ks2=[210, 300, 450];
var pp2=[60, 115, 190];
var pn2=[60, 115, 200];


but.onclick = f2;

function f2() {
   
    for (i=0;i<radio11.length;i++){
        if(radio2[i].selected && radio6[i].selected) {
           document.getElementById('test').innerHTML="10-9, " + ks2[0] + "р";
            document.getElementById('test1').innerHTML="10-1, " + pp2[0] + "р";
            document.getElementById('test2').innerHTML="10-1, " + pn2[0] + "р";
            document.getElementById('out').innerHTML = ks2[0] + pp2[0] + pn2[0] + "р";
            return;
    
}
        else if(radio2[i].selected && radio7[i].selected) {

          document.getElementById('test').innerHTML="15-9, 300р";
            document.getElementById('test1').innerHTML="15-1, 115р";
            document.getElementById('test2').innerHTML="15-1, 115р";
            document.getElementById('out').innerHTML = ks2[1] + pp2[1] + pn2[1] + "р";
         
            return;

        }


            else if(radio2[i].selected && radio8[i].selected) {

          document.getElementById('test').innerHTML="20-9, 450р";
                document.getElementById('test1').innerHTML="20-1, 190р";
                document.getElementById('test2').innerHTML="20-1, 200р";
                document.getElementById('out').innerHTML = ks2[2] + pp2[2] + pn2[2] + "р";
           
                return;

        }
            




            else if(radio4[i].selected && radio6[i].selected && radio9[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 10-9, 140р.";
                document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
                document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
                document.getElementById('out').innerHTML = ks1[0] + ks1[0] + pp1[0] + pp1[0] + pn1[0] + pn1[0] + "р";
         
                return;
            }




            else if(radio4[i].selected && radio6[i].selected  && radio10[i].selected) {

              document.getElementById('test').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 15-9, 200р.";
                
                document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
                document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
                
                document.getElementById('out').innerHTML = ks1[0] + ks1[1] + pp1[0] + pp1[1] + pn1[0] + pn1[1] + "р";
                return;



            }



            else if(radio4[i].selected && radio6[i].selected && radio11[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 20-9, 300р.";
                document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р.";
                document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р.";
                
                document.getElementById('out').innerHTML = ks1[0] + ks1[2] + pp1[0] + pp1[2] + pn1[0] + pn1[2] + "р";
                return;

            }




            else if(radio4[i].selected && radio7[i].selected  && radio9[i].selected) {

              document.getElementById('test').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 10-9, 140р.";
                document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
                document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
                document.getElementById('out').innerHTML = ks1[1] + ks1[0] + pp1[1] + pp1[0] + pn1[1] + pn1[0] + "р";
                return;


            }

            else if(radio4[i].selected && radio7[i].selected && radio10[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 15-9, 200р.";
                document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
                document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
                document.getElementById('out').innerHTML = ks1[1] + ks1[1] + pp1[1] + pp1[1] + pn1[1] + pn1[1] + "р";
                return;
            }




            else if(radio4[i].selected && radio7[i].selected  && radio11[i].selected) {

                document.getElementById('test').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 20-9, 300р.";
                document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р.";
                document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р.";
                document.getElementById('out').innerHTML = ks1[1] + ks1[2] + pp1[1] + pp1[2] + pn1[1] + pn1[2] + "р";
                

                return;

            }
            else if(radio4[i].selected && radio8[i].selected  && radio9[i].selected) {

              document.getElementById('test').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 10-9, 140р.";
                document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р.";
                document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р.";
                document.getElementById('out').innerHTML = ks1[2] + ks1[0] + pp1[2] + pp1[0] + pn1[2] + pn1[0] + "р";
                return;


            }

            else if(radio4[i].selected && radio8[i].selected && radio10[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 15-9, 200р.";
                document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р.";
                
                document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р.";
                document.getElementById('out').innerHTML = ks1[2] + ks1[1] + pp1[2] + pp1[1] + pn1[2] + pn1[1] + "р";
                return;
            }




            else if(radio4[i].selected && radio8[i].selected  && radio11[i].selected) {

              document.getElementById('test').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 20-9, 300р.";
                document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р.";
                document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р.";
                document.getElementById('out').innerHTML = ks1[2] + ks1[2] + pp1[2] + pp1[2] + pn1[2] + pn1[2] + "р";
                return;

            }
        
        



        else if(radio1[i].selected && radio6[i].selected) {

            document.getElementById('test').innerHTML="10-9, 140р";
            document.getElementById('test1').innerHTML="10-1, 60р";
            document.getElementById('test2').innerHTML="10-1, 60р";
            document.getElementById('out').innerHTML = ks1[0] + pp1[0] + pn1[0] + "р";
            return;
        }




        else if(radio1[i].selected && radio7[i].selected) {

            document.getElementById('test').innerHTML="15-9, 200р";
            document.getElementById('test1').innerHTML="15-1, 115р";
            document.getElementById('test2').innerHTML="15-1, 115р";
            document.getElementById('out').innerHTML = ks1[1] + pp1[1] + pn1[1] + "р";

            return;


        }


        else if(radio1[i].selected && radio8[i].selected) {

            document.getElementById('test').innerHTML="20-9, 300р";
            document.getElementById('test1').innerHTML="20-1, 190р";
            document.getElementById('test2').innerHTML="20-1, 200р";
            document.getElementById('out').innerHTML = ks1[2] + pp1[2] + pn1[2] + "р";
            return;

        }


        else if(radio5[i].selected && radio6[i].selected && radio9[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            
            document.getElementById('out').innerHTML = ks2[0] + ks2[0] + pp2[0] + pp2[0] + pn2[0] + pn2[0] + "р";
            return;
        }




        else if(radio5[i].selected && radio6[i].selected  && radio10[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            
            document.getElementById('out').innerHTML = ks2[0] + ks2[1] + pp2[0] + pp2[1] + pn2[0] + pn2[1] + "р";
            return;

        }



        else if(radio5[i].selected && radio6[i].selected && radio11[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р.";
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р.";
            document.getElementById('out').innerHTML = ks2[0] + ks2[2] + pp2[0] + pp2[2] + pn2[0] + pn2[2] + "р";
            return;
        }




        else if(radio5[i].selected && radio7[i].selected  && radio9[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 210р.";
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('out').innerHTML = ks2[1] + ks2[0] + pp2[1] + pp2[0] + pn2[1] + pn2[0] + "р";

            return;

        }

        else if(radio5[i].selected && radio7[i].selected && radio10[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р.";
            
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('out').innerHTML = ks2[1] + ks2[1] + pp2[1] + pp2[1] + pn2[1] + pn2[1] + "р";
            return;
        }




        else if(radio5[i].selected && radio7[i].selected  && radio11[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р.";
            
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р.";
            document.getElementById('out').innerHTML = ks2[1] + ks2[2] + pp2[1] + pp2[2] + pn2[1] + pn2[2] + "р";
            return;


        }
        else if(radio5[i].selected && radio8[i].selected  && radio9[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 210р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р.";
            document.getElementById('out').innerHTML = ks2[2] + ks2[0] + pp2[2] + pp2[0] + pn2[2] + pn2[0] + "р";
            return;


        }

        else if(radio5[i].selected && radio8[i].selected && radio10[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р.";
            
            document.getElementById('out').innerHTML = ks2[2] + ks2[1] + pp2[2] + pp2[1] + pn2[2] + pn2[1] + "р";
            return;
        }




        else if(radio5[i].selected && radio8[i].selected  && radio11[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р.";
            
            document.getElementById('out').innerHTML = ks2[2] + ks2[2] + pp2[2] + pp2[2] + pn2[2] + pn2[2] + "р";
            return;


        }




        else if(radio3[i].selected && radio6[i].selected && radio9[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 140р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            
            document.getElementById('out').innerHTML = ks2[0] + ks1[0] + pp2[0] + pp1[0] + pn2[0] + pn1[0] + "р";
            return;
        }




        else if(radio3[i].selected && radio6[i].selected  && radio10[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 140р.";
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            
            document.getElementById('out').innerHTML = ks2[1] + ks1[0] + pp2[1] + pp1[0] + pn2[1] + pn1[0] + "р";
            return;


        }



        else if(radio3[i].selected && radio6[i].selected && radio11[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 140р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р.";
            
            document.getElementById('out').innerHTML = ks2[2] + ks1[0] + pp2[2] + pp1[0] + pn2[2] + pn1[0] + "р";
            return;
        }




        else if(radio3[i].selected && radio7[i].selected  && radio9[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 200р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            
            document.getElementById('out').innerHTML = ks2[0] + ks1[1] + pp2[0] + pp1[1] + pn2[0] + pn1[1] + "р";
            return;


        }

        else if(radio3[i].selected && radio7[i].selected && radio10[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 200р.";
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            
            document.getElementById('out').innerHTML = ks1[1] + ks2[1] + pp1[1] + pp2[1] + pn1[1] + pn2[1] + "р";
            return;
        }




        else if(radio3[i].selected && radio7[i].selected  && radio11[i].selected) {

            document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 200р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р.";
            
            document.getElementById('out').innerHTML = ks1[1] + ks2[2] + pp1[1] + pp2[2] + pn1[1] + pn2[2] + "р";
            return;


        }
        else if(radio3[i].selected && radio8[i].selected  && radio9[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 300р.";
            document.getElementById('test1').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р.";
            
            document.getElementById('test2').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р.";
            
            document.getElementById('out').innerHTML = ks1[2] + ks2[0] + pp1[2] + pp2[0] + pn1[2] + pn2[0] + "р";
            return;


        }

        else if(radio3[i].selected && radio8[i].selected && radio10[i].selected) {

        document.getElementById('test').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 300р.";
            document.getElementById('test1').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р.";
            document.getElementById('test2').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р.";
            
            document.getElementById('out').innerHTML = ks1[2] + ks2[1] + pp1[2] + pp2[1] + pn1[2] + pn2[1] + "р";
            return;
        }




        else if(radio3[i].selected && radio8[i].selected  && radio11[i].selected) {

          document.getElementById('test').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 300р.";
            document.getElementById('test1').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р.";
            document.getElementById('test2').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р.";
            
            document.getElementById('out').innerHTML = ks1[2] + ks2[2] + pp1[2] + pp2[2] + pn1[2] + pn2[2] + "р";

            return;

        }
        
    }
        
       
    
    

   
}






but1.onclick = f1;

function f1() {
    
    

    
    
   
    for (i=0;i<radio25.length;i++){
        if(radio12[i].selected && radio17[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks1[0] + ks1[0] + pp1[0] + pp1[0] + pn1[0] + pn1[0] + "р";
            return;
    
}
        else if(radio12[i].selected && radio17[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks1[0] + ks1[1] + pp1[0] + pp1[1] + pn1[0] + pn1[1] + "р";
            return;

        }


            else if(radio12[i].selected && radio17[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 20-9, 300р.";
                document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks1[0] + ks1[2] + pp1[0] + pp1[2] + pn1[0] + pn1[2] + "р";
                return;

        }
            




		else if(radio12[i].selected && radio18[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks1[1] + ks1[0] + pp1[1] + pp1[0] + pn1[1] + pn1[0] + "р";
            return;
    
}
        else if(radio12[i].selected && radio18[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks1[1] + ks2[1] + pp1[1] + pp1[1] + pn1[1] + pn1[1] + "р";
            return;

        }


            else if(radio12[i].selected && radio18[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 20-9, 300р.";
                document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks1[1] + ks1[2] + pp1[1] + pp1[2] + pn1[1] + pn1[2] + "р";
                return;

        }
            
   else if(radio12[i].selected && radio19[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks1[2] + ks1[0] + pp1[2] + pp1[0] + pn1[2] + pn1[0] + "р";
            return;
    
}
        else if(radio12[i].selected && radio19[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks1[2] + ks1[1] + pp1[2] + pp1[1] + pn1[2] + pn1[1] + "р";
            return;

        }


            else if(radio12[i].selected && radio19[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 20-9, 300р.";
                document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks1[2] + ks1[2] + pp1[2] + pp1[2] + pn1[2] + pn1[2] + "р";
                return;

        }
            






    else if(radio13[i].selected && radio17[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + pp2[0] + pp2[0] + pn2[0] + pn2[0] + "р";
            return;
    
}
        else if(radio13[i].selected && radio17[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + pp2[0] + pp2[1] + pn2[0] + pn2[1] + "р";
            return;

        }


            else if(radio13[i].selected && radio17[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р.";
                document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + pp2[0] + pp2[2] + pn2[0] + pn2[2] + "р";
                return;

        }
            




		else if(radio13[i].selected && radio18[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[1] + ks2[0] + pp2[1] + pp2[0] + pn2[1] + pn2[0] + "р";
            return;
    
}
        else if(radio13[i].selected && radio18[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + pp2[1] + pp2[1] + pn2[1] + pn2[1] + "р";
            return;

        }


            else if(radio13[i].selected && radio18[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р.";
                document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + pp2[1] + pp2[2] + pn2[1] + pn2[2] + "р";
                return;

        }
            
   else if(radio13[i].selected && radio19[i].selected && radio20[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks2[2] + ks2[0] + pp2[2] + pp2[0] + pn2[2] + pn2[0] + "р";
            return;
    
}
        else if(radio13[i].selected && radio19[i].selected && radio21[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р.";
            document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + pp2[2] + pp2[1] + pn2[2] + pn2[1] + "р";
            return;

        }


            else if(radio13[i].selected && radio19[i].selected && radio22[i].selected) {

          document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р.";
                document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 20-9, 190р.";
                document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р.";
                document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + pp2[2] + pp2[2] + pn2[2] + pn2[2] + "р";
                return;

        }
		
		







        
        
        
        
        
        
        
        
        
        
        
        
        
        
        



        else if(radio16[i].selected && radio17[i].selected && radio20[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks2[0] + pp2[0] + pp2[0] + pp2[0] + pn2[0] + pn2[0] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio17[i].selected && radio20[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
              
              document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks2[1] + pp2[0] + pp2[0] + pp2[1] + pn2[0] + pn2[0] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio17[i].selected && radio20[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
               
               document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks2[2] + pp2[0] + pp2[0] + pp2[2] + pn2[0] + pn2[0] + pn2[2] + "р";
            return;

		  } 





   else if(radio16[i].selected && radio17[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks2[0] + pp2[0] + pp2[1] + pp2[0] + pn2[0] + pn2[1] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio17[i].selected && radio21[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks2[1] + pp2[0] + pp2[1] + pp2[1] + pn2[0] + pn2[1] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio17[i].selected && radio21[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks2[2] + pp2[0] + pp2[1] + pp2[2] + pn2[0] + pn2[1] + pn2[2] + "р";
            return;

		  } 





   else if(radio16[i].selected && radio17[i].selected && radio22[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks2[0] + pp2[0] + pp2[2] + pp2[0] + pn2[0] + pn2[2] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio17[i].selected && radio22[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks2[1] + pp2[0] + pp2[2] + pp2[1] + pn2[0] + pn2[2] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio17[i].selected && radio22[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks2[2] + pp2[0] + pp2[2] + pp2[2] + pn2[0] + pn2[2] + pn2[2] + "р";
            return;

		  } 







		else if(radio16[i].selected && radio18[i].selected && radio22[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks2[0] + pp2[1] + pp2[2] + pp2[0] + pn2[1] + pn2[2] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio18[i].selected && radio22[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks2[1] + pp2[1] + pp2[2] + pp2[1] + pn2[1] + pn2[2] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio18[i].selected && radio22[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks2[2] + pp2[1] + pp2[2] + pp2[2] + pn2[1] + pn2[2] + pn2[2] + "р";
            return;

		  } 







	else if(radio16[i].selected && radio18[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
        document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks2[0] + pp2[1] + pp2[1] + pp2[0] + pn2[1] + pn2[1] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio18[i].selected && radio21[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks2[1] + pp2[1] + pp2[1] + pp2[1] + pn2[1] + pn2[1] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio18[i].selected && radio21[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks2[2] + pp2[1] + pp2[1] + pp2[2] + pn2[1] + pn2[1] + pn2[2] + "р";
            return;

		  } 
		
		
		
		
		
		
			
		else if(radio16[i].selected && radio18[i].selected && radio20[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 210р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[1] + ks2[0] + ks2[0] + pp2[1] + pp2[0] + pp2[0] + pn2[1] + pn2[0] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio18[i].selected && radio20[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 210р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[1] + ks2[0] + ks2[1] + pp2[1] + pp2[0] + pp2[1] + pn2[1] + pn2[0] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio18[i].selected && radio20[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 10-9, 210р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[1] + ks2[0] + ks2[2] + pp2[1] + pp2[0] + pp2[2] + pn2[1] + pn2[0] + pn2[2] + "р";
            return;

		  } 
		





		
		else if(radio16[i].selected && radio19[i].selected && radio22[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks2[0] + pp2[2] + pp2[2] + pp2[0] + pn2[2] + pn2[2] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio19[i].selected && radio22[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks2[1] + pp2[2] + pp2[2] + pp2[1] + pn2[2] + pn2[2] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio19[i].selected && radio22[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks2[2] + pp2[2] + pp2[2] + pp2[2] + pn2[2] + pn2[2] + pn2[2] + "р";
            return;

		  } 
		
		
		
		
		
		
		
		else if(radio16[i].selected && radio19[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks2[0] + pp2[2] + pp2[1] + pp2[0] + pn2[2] + pn2[1] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio19[i].selected && radio21[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks2[1] + pp2[2] + pp2[1] + pp2[1] + pn2[2] + pn2[1] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio19[i].selected && radio21[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks2[2] + pp2[2] + pp2[1] + pp2[2] + pn2[2] + pn2[1] + pn2[2] + "р";
            return;

		  } 
		
		
		
		
		
		
			
		else if(radio16[i].selected && radio19[i].selected && radio20[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 210р; третий колодец: 10-9, 210р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks2[2] + ks2[0] + ks2[0] + pp2[2] + pp2[0] + pp2[0] + pn2[2] + pn2[0] + pn2[0] + "р";
            return;
    
}
          else if(radio16[i].selected && radio19[i].selected && radio20[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 210р; третий колодец: 15-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks2[2] + ks2[0] + ks2[1] + pp2[2] + pp2[0] + pp2[1] + pn2[2] + pn2[0] + pn2[1] + "р";
            return;

		  }
		  
		  
           else if(radio16[i].selected && radio19[i].selected && radio20[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 10-9, 210р; третий колодец: 20-9, 450р.";
            document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks2[2] + ks2[0] + ks2[2] + pp2[2] + pp2[0] + pp2[2] + pn2[2] + pn2[0] + pn2[2] + "р";
            return;

		  } 
		
		
		
		
		
		
		
		
		
	































        else if(radio15[i].selected && radio17[i].selected && radio20[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 10-9, 140р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks1[0] + ks1[0] + ks1[0] + pp1[0] + pp1[0] + pp1[0] + pn1[0] + pn1[0] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio17[i].selected && radio20[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 10-9, 140р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[0] + ks1[0] + ks1[1] + pp1[0] + pp1[0] + pp1[1] + pn1[0] + pn1[0] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio17[i].selected && radio20[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 10-9, 140р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[0] + ks1[0] + ks1[2] + pp1[0] + pp1[0] + pp1[2] + pn1[0] + pn1[0] + pn1[2] + "р";
            return;

		  } 








   else if(radio15[i].selected && radio17[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 15-9, 200р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks1[0] + ks1[1] + ks1[0] + pp1[0] + pp1[1] + pp1[0] + pn1[0] + pn1[1] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio17[i].selected && radio21[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 15-9, 200р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[0] + ks1[1] + ks1[1] + pp1[0] + pp1[1] + pp1[1] + pn1[0] + pn1[1] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio17[i].selected && radio21[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 15-9, 200р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[0] + ks1[1] + ks1[2] + pp1[0] + pp1[1] + pp1[2] + pn1[0] + pn1[1] + pn1[2] + "р";
            return;

		  } 





   else if(radio15[i].selected && radio17[i].selected && radio22[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 20-9, 300р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
       document.getElementById('out1').innerHTML = ks1[0] + ks1[2] + ks1[0] + pp1[0] + pp1[2] + pp1[0] + pn1[0] + pn1[2] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio17[i].selected && radio22[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 20-9, 300р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[0] + ks1[2] + ks1[1] + pp1[0] + pp1[2] + pp1[1] + pn1[0] + pn1[2] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio17[i].selected && radio22[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 10-9, 140р; второй колодец: 20-9, 300р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[0] + ks1[2] + ks1[2] + pp1[0] + pp1[2] + pp1[2] + pn1[0] + pn1[2] + pn1[2] + "р";
            return;

		  } 







		else if(radio15[i].selected && radio18[i].selected && radio22[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 20-9, 300р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks1[1] + ks1[2] + ks1[0] + pp1[1] + pp1[2] + pp1[0] + pn1[1] + pn1[2] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio18[i].selected && radio22[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 20-9, 300р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[1] + ks1[2] + ks1[1] + pp1[1] + pp1[2] + pp1[1] + pn1[1] + pn1[2] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio18[i].selected && radio22[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 20-9, 300р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[1] + ks1[2] + ks1[2] + pp1[1] + pp1[2] + pp1[2] + pn1[1] + pn1[2] + pn2[2] + "р";
            return;

		  } 







	else if(radio15[i].selected && radio18[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 15-9, 200р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
        document.getElementById('out1').innerHTML = ks1[1] + ks1[1] + ks1[0] + pp1[1] + pp1[1] + pp1[0] + pn1[1] + pn1[1] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio18[i].selected && radio21[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 15-9, 200р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[1] + ks1[1] + ks1[1] + pp1[1] + pp1[1] + pp1[1] + pn1[1] + pn1[1] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio18[i].selected && radio21[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 15-9, 200р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[1] + ks1[1] + ks1[2] + pp1[1] + pp1[1] + pp1[2] + pn1[1] + pn1[1] + pn1[2] + "р";
            return;

		  } 
		
		
		
		
		
		
			
		else if(radio15[i].selected && radio18[i].selected && radio20[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 10-9, 140р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
            document.getElementById('out1').innerHTML = ks1[1] + ks1[0] + ks1[0] + pp1[1] + pp1[0] + pp1[0] + pn1[1] + pn1[0] + pn1[0] + "р";
            return;
    
}
          else if(radio15[i].selected && radio18[i].selected && radio20[i].selected && radio24[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 10-9, 140р; третий колодец: 15-9, 200р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
              document.getElementById('out1').innerHTML = ks1[1] + ks1[0] + ks1[1] + pp1[1] + pp1[0] + pp1[1] + pn1[1] + pn1[0] + pn1[1] + "р";
            return;

		  }
		  
		  
           else if(radio15[i].selected && radio18[i].selected && radio20[i].selected && radio25[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 200р; второй колодец: 10-9, 140р; третий колодец: 20-9, 300р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
               document.getElementById('out1').innerHTML = ks1[1] + ks1[0] + ks1[2] + pp1[1] + pp1[0] + pp1[2] + pn1[1] + pn1[0] + pn1[2] + "р";
            return;

		  } 
		


        
        
        
        
        
        
        
           else if(radio15[i].selected && radio19[i].selected && radio22[i].selected && radio23[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 20-9, 300р; третий колодец: 10-9, 140р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks1[2] + ks1[2] + ks1[0] + pp1[2] + pp1[2] + pp1[0] + pn1[2] + pn1[2] + pn1[0] + "р";
               return;
       
   }
             else if(radio15[i].selected && radio19[i].selected && radio22[i].selected && radio24[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 20-9, 300р; третий колодец: 15-9, 200р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks1[2] + ks1[2] + ks1[1] + pp1[2] + pp1[2] + pp1[1] + pn1[2] + pn1[2] + pn1[1] + "р";
               return;

             }
             
             
              else if(radio15[i].selected && radio19[i].selected && radio22[i].selected && radio25[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 20-9, 300р; третий колодец: 20-9, 300р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 20-1, 190р; третий колодец: 20-1, 190р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks1[2] + ks1[2] + ks1[2] + pp1[2] + pp1[2] + pp1[2] + pn1[2] + pn1[2] + pn1[2] + "р";
               return;

             }







       else if(radio15[i].selected && radio19[i].selected && radio21[i].selected && radio23[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 15-9, 200р; третий колодец: 10-9, 140р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
           document.getElementById('out1').innerHTML = ks1[2] + ks1[1] + ks1[0] + pp1[2] + pp1[1] + pp1[0] + pn1[2] + pn1[1] + pn1[0] + "р";
               return;
       
   }
             else if(radio15[i].selected && radio19[i].selected && radio21[i].selected && radio24[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 15-9, 200р; третий колодец: 15-9, 200р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks1[2] + ks1[1] + ks1[1] + pp1[2] + pp1[1] + pp1[1] + pn1[2] + pn1[1] + pn1[1] + "р";
               return;

             }
             
             
              else if(radio15[i].selected && radio19[i].selected && radio21[i].selected && radio25[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 15-9, 200р; третий колодец: 20-9, 300р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 15-1, 115р; третий колодец: 20-1, 190р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks1[2] + ks1[1] + ks1[2] + pp1[2] + pp1[1] + pp1[2] + pn1[2] + pn1[1] + pn1[2] + "р";
               return;

             }
           
           
           
           
           
           
               
           else if(radio15[i].selected && radio19[i].selected && radio20[i].selected && radio23[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 10-9, 140р; третий колодец: 10-9, 140р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks1[0] + ks1[0] + ks1[0] + pp1[0] + pp1[0] + pp1[0] + pn1[0] + pn1[0] + pn1[0] + "р";
               return;
       
   }
             else if(radio15[i].selected && radio19[i].selected && radio20[i].selected && radio24[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 10-9, 140р; третий колодец: 15-9, 200р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks1[2] + ks1[0] + ks1[1] + pp1[2] + pp1[0] + pp1[1] + pn1[2] + pn1[0] + pn1[1] + "р";
               return;

             }
             
             
              else if(radio15[i].selected && radio19[i].selected && radio20[i].selected && radio25[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 300р; второй колодец: 10-9, 140р; третий колодец: 20-9, 300р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-9, 190р; второй колодец: 10-1, 60р; третий колодец: 20-1, 190р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks1[2] + ks1[0] + ks1[2] + pp1[2] + pp1[0] + pp1[2] + pn1[2] + pn1[0] + pn1[2] + "р";
               return;

             }
           












        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
           else if(radio14[i].selected && radio17[i].selected && radio20[i].selected && radio23[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 10-9, 140р.";
               document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
               document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks1[0] + pp2[0] + pp2[0] + pp1[0] + pn2[0] + pn2[0] + pn1[0] + "р";
               return;
       
   }
             else if(radio14[i].selected && radio17[i].selected && radio20[i].selected && radio24[i].selected) {
                 document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks1[1] + pp2[0] + pp2[0] + pp1[1] + pn2[0] + pn2[0] + pn1[1] + "р";
                  return;

             }
             
             
              else if(radio14[i].selected && radio17[i].selected && radio20[i].selected && radio25[i].selected) {
                  document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 10-9, 210р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 10-1, 60р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[0] + ks2[0] + ks1[2] + pp2[0] + pp2[0] + pp1[2] + pn2[0] + pn2[0] + pn1[2] + "р";
               return;

             }








      else if(radio14[i].selected && radio17[i].selected && radio21[i].selected && radio23[i].selected) {
          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 10-9, 140р.";
           document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
           document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
          document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks1[0] + pp2[0] + pp2[1] + pp1[0] + pn2[0] + pn2[1] + pn1[0] + "р";
           return;
       
   }
             else if(radio14[i].selected && radio17[i].selected && radio21[i].selected && radio24[i].selected) {
                 document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks1[1] + pp2[0] + pp2[1] + pp1[1] + pn2[0] + pn2[1] + pn1[1] + "р";
                  return;

             }
             
             
              else if(radio14[i].selected && radio17[i].selected && radio21[i].selected && radio25[i].selected) {
                  document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 15-9, 300р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[0] + ks2[1] + ks1[1] + pp2[0] + pp2[1] + pp1[1] + pn2[0] + pn2[1] + pn1[1] + "р";
                  
                  
                  
                  return;

             }





      else if(radio14[i].selected && radio17[i].selected && radio22[i].selected && radio23[i].selected) {
          document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 10-9, 140р.";
           document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
           document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
          document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks1[0] + pp2[0] + pp2[2] + pp1[0] + pn2[0] + pn2[2] + pn1[0] + "р";
               return;
       
   }
             else if(radio14[i].selected && radio17[i].selected && radio22[i].selected && radio24[i].selected) {
              
                 document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks1[1] + pp2[0] + pp2[2] + pp1[1] + pn2[0] + pn2[2] + pn1[1] + "р";
                 
                 return;

             }
             
             
              else if(radio14[i].selected && radio17[i].selected && radio22[i].selected && radio25[i].selected) {
             
                  
                  document.getElementById('test3').innerHTML=" первый колодец: 10-9, 210р; второй колодец: 20-9, 450р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 190р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 10-1, 60р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[0] + ks2[2] + ks1[2] + pp2[0] + pp2[2] + pp1[2] + pn2[0] + pn2[2] + pn1[2] + "р";
                  
                  
                  return;

             }







           else if(radio14[i].selected && radio18[i].selected && radio22[i].selected && radio23[i].selected) {
               document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 10-9, 140р.";
                document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
                document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks1[0] + pp2[1] + pp2[2] + pp1[0] + pn2[1] + pn2[2] + pn1[0] + "р";
               return;
       
   }
             else if(radio14[i].selected && radio18[i].selected && radio22[i].selected && radio24[i].selected) {
             
                 
                 document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks1[1] + pp2[1] + pp2[2] + pp1[1] + pn2[1] + pn2[2] + pn1[1] + "р";
                 
                 
                 return;

             }
             
             
              else if(radio14[i].selected && radio18[i].selected && radio22[i].selected && radio25[i].selected) {
              
                  
                  
                  document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 20-9, 450р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 190р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[1] + ks2[2] + ks1[2] + pp2[1] + pp2[2] + pp1[2] + pn2[1] + pn2[2] + pn1[2] + "р";
                  
                  
                  
                  
                  return;

             }







       else if(radio14[i].selected && radio18[i].selected && radio21[i].selected && radio23[i].selected) {
           document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 10-9, 140р.";
            document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
            document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
           document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[0] + pp2[1] + pp2[1] + pp1[0] + pn2[1] + pn2[1] + pn1[0] + "р";
               return;
       
   }
             else if(radio14[i].selected && radio18[i].selected && radio21[i].selected && radio24[i].selected) {
                 document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[1] + pp2[1] + pp2[1] + pp1[1] + pn2[1] + pn2[1] + pn1[1] + "р";
                 return;

             }
             
             
              else if(radio14[i].selected && radio18[i].selected && radio21[i].selected && radio25[i].selected) {
                  document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[2] + pp2[1] + pp2[1] + pp1[2] + pn2[1] + pn2[1] + pn1[2] + "р";
                  return;

             }
           
           
           
           
           
           
               
           else if(radio14[i].selected && radio18[i].selected && radio20[i].selected && radio23[i].selected) {
               document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 10-9, 140р.";
                document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
                document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
               document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[0] + pp2[1] + pp2[1] + pp1[0] + pn2[1] + pn2[1] + pn1[0] + "р";
               return;
       
   }
             else if(radio14[i].selected && radio18[i].selected && radio20[i].selected && radio24[i].selected) {
              
                 
                 document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 15-9, 200р.";
                  document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                  document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                 document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[1] + pp2[1] + pp2[1] + pp1[1] + pn2[1] + pn2[1] + pn1[1] + "р";
                 
                 return;

             }
             
             
              else if(radio14[i].selected && radio18[i].selected && radio20[i].selected && radio25[i].selected) {
           
                  document.getElementById('test3').innerHTML=" первый колодец: 15-9, 300р; второй колодец: 15-9, 300р; третий колодец: 20-9, 300р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-9, 190р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 15-1, 115р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                  document.getElementById('out1').innerHTML = ks2[1] + ks2[1] + ks1[2] + pp2[1] + pp2[1] + pp1[2] + pn2[1] + pn2[1] + pn1[2] + "р";
                  
                  
                  return;

             }
           





              else if(radio14[i].selected && radio19[i].selected && radio22[i].selected && radio23[i].selected) {
                  document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 10-9, 140р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 10-1, 60р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 10-1, 60р.";
                  document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks1[0] + pp2[2] + pp2[2] + pp1[0] + pn2[2] + pn2[2] + pn1[0] + "р";
                  return;
          
      }
                else if(radio14[i].selected && radio19[i].selected && radio22[i].selected && radio24[i].selected) {
                
                    
                    document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 15-9, 200р.";
                     document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 15-1, 115р.";
                     document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 15-1, 115р.";
                    document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks1[1] + pp2[2] + pp2[2] + pp1[1] + pn2[2] + pn2[2] + pn1[1] + "р";
                    
                    
                    return;

                }
                
                
                 else if(radio14[i].selected && radio19[i].selected && radio22[i].selected && radio25[i].selected) {
                 
                     
                     
                     document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 20-9, 450р; третий колодец: 20-9, 300р.";
                      document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 20-1, 190р; третий колодец: 20-9, 190р.";
                      document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 20-1, 200р; третий колодец: 20-1, 200р.";
                     document.getElementById('out1').innerHTML = ks2[2] + ks2[2] + ks1[2] + pp2[2] + pp2[2] + pp1[2] + pn2[2] + pn2[2] + pn1[2] + "р";
                     
                     
                     
                     
                     return;

                }







          else if(radio14[i].selected && radio19[i].selected && radio21[i].selected && radio23[i].selected) {
              document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 10-9, 140р.";
               document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
               document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
              document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[0] + pp2[2] + pp2[1] + pp1[0] + pn2[2] + pn2[1] + pn1[0] + "р";
                  return;
          
      }
                else if(radio14[i].selected && radio19[i].selected && radio21[i].selected && radio24[i].selected) {
                    document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 15-9, 200р.";
                     document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                     document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                    document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[1] + pp2[2] + pp2[1] + pp1[1] + pn2[2] + pn2[1] + pn1[1] + "р";
                    return;

                }
                
                
                 else if(radio14[i].selected && radio19[i].selected && radio21[i].selected && radio25[i].selected) {
                     document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 20-9, 300р.";
                      document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 20-9, 190р.";
                      document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                     document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[2] + pp2[2] + pp2[1] + pp1[2] + pn2[2] + pn2[1] + pn1[2] + "р";
                     return;

                }
              
              
              
              
              
              
                  
              else if(radio14[i].selected && radio19[i].selected && radio20[i].selected && radio23[i].selected) {
                  document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 10-9, 140р.";
                   document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
                   document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 10-1, 60р.";
                  document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[0] + pp2[2] + pp2[1] + pp1[0] + pn2[2] + pn2[1] + pn1[0] + "р";
                  return;
          
      }
                else if(radio14[i].selected && radio19[i].selected && radio20[i].selected && radio24[i].selected) {
                 
                    
                    document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 15-9, 200р.";
                     document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                     document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 15-1, 115р.";
                    document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[1] + pp2[2] + pp2[1] + pp1[1] + pn2[2] + pn2[1] + pn1[1] + "р";
                    
                    return;

                }
                
                
                 else if(radio14[i].selected && radio19[i].selected && radio20[i].selected && radio25[i].selected) {
              
                     document.getElementById('test3').innerHTML=" первый колодец: 20-9, 450р; второй колодец: 15-9, 300р; третий колодец: 20-9, 300р.";
                      document.getElementById('test4').innerHTML=" первый колодец: 20-1, 190р; второй колодец: 15-1, 115р; третий колодец: 20-9, 190р.";
                      document.getElementById('test5').innerHTML=" первый колодец: 20-1, 200р; второй колодец: 15-1, 115р; третий колодец: 20-1, 200р.";
                     document.getElementById('out1').innerHTML = ks2[2] + ks2[1] + ks1[2] + pp2[2] + pp2[1] + pp1[2] + pn2[2] + pn2[1] + pn1[2] + "р";
                     
                     
                     return;

                }
              


        
        
        
        
    



	
        
    }
        
       
    
    

   
}

