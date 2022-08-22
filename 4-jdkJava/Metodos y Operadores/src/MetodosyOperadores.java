public class MetodosyOperadores {
    public static void main(String[] args) {
        String curso = "Curso en Java";
        //Esta es literal
        System.out.println("Curso = " + curso);
        String nombre = "Victor Hugo";
        String resultado = new String("Curso en Java");
        //esta es por referencia
        System.out.println("resultado = " + resultado);

        //Se compara un valor con un objeto referenciado
        //Se comparan las referencias

        boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);

        Number numero1 = 23;
        System.out.println(nombre + " tiene " + numero1 );
}
}
