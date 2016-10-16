#include <stdio.h>

int main() {
    int i , j,k=0, row,n;
    printf("enter the number of rows \n");
    scanf("%d", &row);
    printf("number of rows entered is %d\n",row);
    n=(row+1)/2;
    
    for(j=1;j<=row;++j) // for printing th
    { 
     j<=n?k++:k--;
     
          
    
    for(i=1;i<=row;++i) // for printing the  
    {
        if(i>=n+1-k && i<=n-1+k)
        {
             
            
        
          printf("*");
           
          
          
        }
    else
    {
         printf(" ");
         
    
    }
    
 }
    
    printf("\n");
    
    }
	//code
	return 0;
}