- 在脚本内启动工具

  ```bash
  #!/bin/bash
  
  module load tessent/2021_4 ;\
  exec tessent -shell -dofile "$0" -argument MODE=${1} SUBSYS=${2} -log ../log/atpg_${1}_${2}.log -replace
  ```

- 转换ATPG model的方法

  ```bash
  #verilog2atpg.do
  add model -all
  set system mode translation
  run
  write_library pvt_mon_ro.aptg -replace
  exit
  ```

  ```bash
  libcomp pvt_mon_ro.v -dofile verilog2atpg.do
  ```


- DFTBYPASS

  - DFTBYPASS这个信号不要接scan_mode，存在隐形的不可测因素；

  - 如果DFTBYP在MBIST model定义完整的话，tessent MBIST会连接这个pin到tdr

    - ```tcl
      add_dft_signals memory_bypass_en
      ```

  - 正确的MBIST model应该是：

    ```tcl
    port (DFTRAMBYP){
          Function : ScanTest;
          Direction : Input;
          Polarity : ActiveHigh;
    }
    ```

  