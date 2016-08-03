#include <stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node* next;
};
struct node* top = NULL;


void push(int x)
{
    struct node* new_Node = (struct node*)malloc(sizeof(struct node));
    new_Node->data = x;
    new_Node->next=top;
    top=new_Node;
}

void pop()
{
    struct node* temp =top;
    if(top==NULL)
    {
        printf("no elements to pop ");
        return;
    }
    top=top->next;
    free(temp);
    
}

void print(struct node* n)
{
    while(n)
    {
     
      printf("linked list : ");
     
        printf("%d\n",n->data);
        n=n->next;
    
    }
}
int main() {
    
    push(1);
     
     push(1);
      
      push(1);
      
       push(1);
        
       pop();
       pop();
       pop();
       print(top);
        
	//code
	return 0;
}