#include <stdio.h>

int factorial(int n)
{
    if(n==1)
    return 1;
    else
    return n*factorial(n-1);
    
}


int main() {
	//code
	
	printf("%d", factorial(10));
	return 0;
}