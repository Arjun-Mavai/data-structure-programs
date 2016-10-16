#include <stdio.h>

int main() {
    int k ,i;
     
    int count =0;
    k='a' ;
    
  //  printf("here are the all alphabets from the A to Z\n");
    for(i=1;i<=26;++i)
    {
         
        
        printf("%c ",k);
        count++;
        k++;
        
    }
    printf("\n");
    
    k='A';
    
    for(i=1;i<=26;++i)
    {
         
        
        printf("%c ",k);
        count++;
        k++;
        
    }
    
   // printf("the value of count is count = %d\n\n",count);
	//code
	return 0;
}