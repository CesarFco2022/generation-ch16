import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //SET
        //Hosheet

        //no guardan los valores en el orden en el que se van agregando
        //SETT no permite valores duplicados


        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Daniel");
        miSet.add("Beto");
        miSet.add("Jose");
        miSet.add("Cesar");
        miSet.add("Cesar");

        miSet.remove("Juan");


        System.out.println(miSet.size());
        System.out.println(miSet.contains("Cesar"));


        System.out.println(miSet);

        for (String nombre:miSet){
            System.out.println(nombre);
        }



    }



    }

