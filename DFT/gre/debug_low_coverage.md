- 设置模式

  ```tcl
  set_context patterns -scan
  ```

- 读flatten model

  ```tcl
  read_flat_model
  read_faults
  read_patterns
  ```

- ATPG做仿真

  ```tcl
  simulate_patterns -source external -store_patterns all
  ```

- 报告

  ```tcl
  report_statistics
  report_faults -class AU > au.rpt
  analyze_fault <FaultSite> -stuck_at 0/1 -display
  ```

  

