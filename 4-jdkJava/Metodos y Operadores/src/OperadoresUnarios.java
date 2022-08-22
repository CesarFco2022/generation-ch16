public class OperadoresUnarios {
    public static void main(String[] args){
        int i =-5, j= +i;
        System.out.println("j = " + j);


        //pre incremento


         j = --i; // i = i = + 1
        System.out.println("i = " + i);
        System.out.println("j = " + j);
        //post incremento

        i = 2;

        j = i--;
        System.out.println("i = " + i);
        System.out.println("j = " + j);
    }


}



