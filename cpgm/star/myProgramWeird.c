#include <stdio.h>

int main() {
    int k ,i;
    k='1'; //  we can also put k='A' to print all the alphabets from the a to z
    int count =0;
    
  //  printf("here are the all alphabets from the A to Z\n");
    for(i=1;i<=500;++i)
    {
        
        printf("%c ",k);
        count++;
        k++;
        
    }
    
    printf("the value of count is count = %d\n",count);
	//code
	return 0;
}