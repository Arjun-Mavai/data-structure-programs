#include <stdio.h>
#define MAX 100
int a[MAX];
int top =-1;

void push(int x)
{
    if(top==MAX-1)
    {
        printf("stack overflow :" );
        return;
    }
    a[++top]=x;
}

void pop()
{
    if(top==-1)
    {
        printf("stack underflow no element to pop :");
        return;
    }
    top--;
}
void print()
{
    int i;
    printf("stack : ");
    for(i=0;i<=top;i++)
    {
        printf("%d",a[i]);
    }
    printf("\n");
}


int main() {
    
    push(1);print();
     push(2);
     print();
      push(3);
      print();
            push(4);
            print();
                  push(5);
                  print();
                  pop();
                  print();
                      pop();
                      print();
                          pop();
                          print();
                              pop();
                              print();
    
	//code
	return 0;
}