int main(int argc,char *argv[])
{

    printf("you entered in reverse order:\n");

    while(argc--)
    {
        printf("%s\n",argv[argc]);
    }

return 0;
}