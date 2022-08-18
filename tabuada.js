var x,y,total;

function tabuada(){

var num = prompt("Digite até que número deseja que a tabuada tenha:")

document.writeln("<link rel='stylesheet' href='style.css'> <style> table, th, td { text-align:center; } </style>");
document.writeln("<main><div id='boxtabuada'><table>");

    for(x=1;x<=num;x++){

        document.writeln("<td><table style='width:110%; border: solid rgb(255, 255, 255)'>");

        for(
            cor=0,
            y=0;

            cor<=360,
            y<=30;

            cor+= 12,
            y++
            ){
            total=x*y;
            
            if(cor >= 200 && cor <= 280 || cor >= 330){
            document.writeln
            ("<tr style='color:white;'><td style='background-color:hsl("+cor+",100%,50%)'>"+x+
            "X"+y+
            "="+total+
            "</td></tr>"
            )}
            else{
            document.writeln
            ("<tr><td style='background-color:hsl("+cor+",100%,50%)'>"+x+
            "X"+y+
            "="+total+
            "</td></tr>"
            )}
        }
        document.writeln("</table></td>");
    }
    document.writeln(
    "</table>"+
    "<br>"+
    "<a href='index.html'> Voltar </a>"+
    "</div></main>"
    );

}



function tabuadateste(){
    var num = prompt("Digite até que número deseja que a tabuada tenha:")
        var red = prompt("Cor RED:");
        var green = prompt("Cor GREEN:");
        var blue = prompt("Cor BLUE:");
        document.writeln("<table>");
        for(x=1;x<=num;x++){
            document.writeln("<td><table border='1'>");
    
            for(
                         r=255,g=255,b=255,
                y=0;
    
                         r<255,g<255,b<255,
    
                y<=20;
    
               r -= (Math.random() * red), g -= (Math.random() * green), b -= (Math.random() * blue), //  r-=red, g-=green, b-=blue, 
    
                y++
                )
                {
    
                total=x*y;
    
                document.writeln
                ("<tr><td style='background-color:rgb("+r+","+g+","+b+")'>"+x+
                "X"+y+
                "="+total+
                "</td></tr>"
                )
            }
            document.writeln("</table></td>");
        }
        document.writeln("</table></main>");
        document.writeln("<br>")
        document.writeln("<a href='index.html'> Voltar </a>")
    }