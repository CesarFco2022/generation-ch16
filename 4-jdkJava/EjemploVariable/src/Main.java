public class Main {
    public static void main(String[] args) {
        String nombre= "Hugo";
        String saludo="Hello world!";
        char espacio = ' ';
        char caracter = 'a';
        System.out.println(saludo + " " + nombre);
        System.out.println("char corresponde en bytes: "+ Character.BYTES );
        System.out.println("char corresponde en bits: " + Character.SIZE);


        System.out.println("char valor maximo: " + Character.MAX_VALUE);
        System.out.println("char valor minimo: " + Character.MIN_VALUE);


        int numeroEntero=10;

        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en bytes: "+ Integer.BYTES );
        System.out.println("int corresponde en bits: " + Integer.SIZE);


        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);




        System.out.println("FLOAT valor maximo: " + Float.MAX_VALUE);
        System.out.println("FLOAT valor minimo: " + Float.MIN_VALUE);

        System.out.println("FLOAT corresponde en bytes: "+ Float.BYTES );
        System.out.println("FLOAT corresponde en bits: " + Float.SIZE);


        double numeroDouble=3.1111114;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("numeroDouble corresponde en bytes: "+ Double.BYTES );
        System.out.println("numeroDouble corresponde en bits: " + Double.SIZE);


        System.out.println("numeroDouble valor maximo: " + Double.MAX_VALUE);
        System.out.println("numeroDouble valor minimo: " + Double.MIN_VALUE);

        boolean valorBolean= true;

        System.out.println("valorBolean = " + valorBolean);
        System.out.println("Boolean corresponde en bytes: "+  );
        System.out.println("Boolean corresponde en bits: " + Double.SIZE);


        System.out.println("Boolean valor maximo: " + Double.MAX_VALUE);
        System.out.println("Boolean valor minimo: " + Double.MIN_VALUE);


    }
}