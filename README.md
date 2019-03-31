TypeScript React "material-ui" Grid Demo
=========================================

- xs: Extra small
- sm: Small
- md: Medium
- lg: Large
- xl: Extra large

0 <-- xs --> 600 <-- sm --> 960 <-- md --> 1280 <-- lg --> 1920 <-- xl

注意：

1. 每一个container都划分了12列，里面item的值（比如xs），如果为3，就表示当前container的3/12，如果没指定值，就表示自动填充。
2. 每一个Grid可以同时是container和item
3. 当不需要breakpoint，即不需要在不同大小的屏幕下分别布局，则直接使用xs，因为它表示无限大的屏幕

```
npm install
npm run demo
```

