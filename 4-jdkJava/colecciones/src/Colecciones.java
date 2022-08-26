import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {

        //List --- ArrayList
        //Los valores se ordenan segun como se vayan agregagndo
        //Permiten tener valores duplicados
        //Es una coleccion de objetos de un mismo tipo


        List<String> meses  = new ArrayList<String>();

        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1,"ENERO Suplantado");

        String mes= meses.remove(3);

        System.out.println(meses);
        System.out.println(mes);
        System.out.println("Se quito " + meses.get(0));
        System.out.println("El tamaño es + "+ meses.size());

        for (String elemento : meses) {
            System.out.println(elemento);}

            //List<int>nuemros=new ArrayList<int>();


        // Clases envolventes o wrapper
            int num1 = 10;
            Integer num2=10;
            System.out.println(num2.getClass().getSimpleName());

        List<Integer>nuemeros=new ArrayList<Integer>();
        nuemeros.add(2);
        nuemeros.add(3);
        nuemeros.add(4);
        nuemeros.add(5);

        System.out.println(nuemeros);











    }

}
