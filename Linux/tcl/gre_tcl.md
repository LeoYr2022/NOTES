## TCL中变量嵌套使用

-  错误的例子

  ```tcl
  set mm_list "0 1"
  set nn_list "2 3"
  set index "mm"
  puts $$(index)_list
  
  results:>> $mm_list
  ```

- 正确的做法是采用<font color=blue>__数组的方式__</font>

  ```tcl
  array set list_ ""
  set list_(mm,test) "0 1"
  set list_(nn,test) "2 3"
  set index "mm"
  puts $list_($index,test)
  
  results>> 0 1
  ```

  