#include <stdio.h>

int main() {
    static int var =3;
    printf("%d ", var--);
    if(var)
    main();
	//code
	return 0;
}