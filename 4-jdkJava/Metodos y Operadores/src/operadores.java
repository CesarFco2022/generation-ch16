import java.util.Scanner;

public class operadores {
    public static void main (String[] args){



        int i=5, j=3, suma=i+j;
        System.out.println("Suma = "+ suma);
        System.out.println("i + j= "+ (i+j));


        int multi=i*j;
        System.out.println("multipicacion = " + multi);
        System.out.println("multiplicacion = " + (i * j));

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i - j));

        int div = i / j;
        System.out.println("div = " + div);
        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);

        int resto = i%j;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);
        System.out.println("Cual es tu nombre");
        String dato  = scanner.next();
        System.out.println("Mi nombre es : " + dato);

        Scanner scanner1 = new Scanner(System.in);
        System.out.println("Cual es tu edad");
        String dato1  = scanner.next();
        int edad=Integer.parseInt(dato1);
        System.out.println("Mi edad es : " + edad);
    }

}
