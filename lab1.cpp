#include <graphics.h>
#include <conio.h>
void main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "C:\\Turboc3\\BGI");
    outtextxy(100, 50, "Line"); line(100, 60, 200, 60);
    outtextxy(100, 80, "Rectangle"); rectangle(100, 90, 200, 130);
    outtextxy(100, 150, "Circle"); circle(150, 180, 30);
    outtextxy(100, 220, "Ellipse"); ellipse(150, 250, 0, 360, 50, 20);
    outtextxy(100, 290, "Bar"); bar(100, 300, 200, 340);
    getch(); closegraph();
}
