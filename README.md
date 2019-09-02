TypeScript React "material-ui" Grid Demo
=========================================

- xs: Extra small
- sm: Small
- md: Medium
- lg: Large
- xl: Extra large


0 ------- 600 ------ 960 ----- 1280 ------ 1920 --------------------------
|<- xs ------------------------------------------------------------------>
           |<- sm ------------------------------------------------------->
                      |<- md -------------------------------------------->
                                |<- lg ---------------------------------->
                                            |<- xl ---------------------->

注意：

1. 每一个container都划分了12列，里面item的值（比如xs），如果为3，就表示当前container的3/12
1. 如果没指定值，就表示自动占满剩余空间；如果两个都没有指定值，则它们平分剩余空间
1. 每一个Grid可以同时是container和item
1. 当不需要breakpoint，即不需要在不同大小的屏幕下分别布局，则直接使用xs，因为它表示无限小到无限大的任意屏幕
1. 如果同时指定了多个breakpoint，则以“更精确”的为准。比如指定了`xs=10 sm=5`，
   - 则在大于600px的屏幕中，`sm=5`有效
   - 则小于600px的屏幕中，`xs=10`有效
1. Material中的Grid没有Row的概念，所以如果想让一个item右侧有空白，比较麻烦
   - 要么弄一个空的item，设置好xs的值，用来占满剩余空间
   - 要么用多个Grid container
   - https://stackoverflow.com/questions/50610049/how-to-organize-material-ui-grid-into-rows

```
npm install
npm run demo
```

