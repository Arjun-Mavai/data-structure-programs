#include <stdio.h>

int main() {
    int i , j;
     
    for(j=1;j<=7;++j) // for printing the rows
    { 
     
     
          
    
    for(i=1;i<=7;++i) // for printing the   columns
    {
        if( i==j||i==8-j)
        {
            if(i==j) // for printing the forward or backslash using escape sequence property
            {
            
         printf("\\ ");
            }
            else
            {
                printf("/");
            }
           
          
          
        }
    else
    {
         printf("*");
         
    
    }
    
 }
    
    printf("\n");
    
    }
	//code
	return 0;
}