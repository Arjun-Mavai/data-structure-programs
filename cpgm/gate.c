#include <stdio.h>
int a, b,c=0;
void printFun(void);


int main() {
	//code
	static int a=1;
	printFun();
	a=a+1;
	printFun();
	printf("%d %d" , a ,b);
	
	return 0;
}

void printFun(void)
{
    static int a=2;
    int b=1;
    a+=++b;
    printf("%d %d", a,b);
    
}