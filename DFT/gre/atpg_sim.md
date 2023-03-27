# ATPG仿真时遇见的问题

## 需要事先检查的内容

### testbench上：

- 系统reset要在ijtag_reset之后；
- 由于netlist仿真可能缺失初始状态，所以最好对初始状态做规定；
- 时钟相关的内容：
  - 检查时钟源是否有给正确的频率；

  - OCC电路：
    - 可能会报告**no transition**, 这个时候要检查，报告中的时间点处的时钟；如果时间点处不是时钟沿，很有可能是<font color=red>````timescale```</font>的问题，要去检查一下生成的pattern中的timescale。


### 需要force的信号：

- EMA控制信号；
  - 最好不要去force，应该是有TDR来控制，但是有的时候也是没有办法的事情。


### 不需要做force的信号：

- scan clock

### Generate Pattern的时候

- **对于OCC电路**，如果fast clock频率低于slow clock频率，需要将```fast_capture_mode off```
  
  - <font color=red>相应的SDC需不需要提高频率来约束呢?</font>
  
- **对于input ports**，如果其与scan不相干，可以```add_pin_constrains input_portName -CZ```
  - 这个东西好像不是很好用，如果你在dofile中没有加constrains，这个也没用

  - 这样做会掉coverage

- timescale
  - 如何指定AC测试所产生的pattern中的timescale
  
- <font color=blue>**Pattern的默认行为**</font>是先做test_setup（例如对TDR配置），然后在做Test:

  - 不需要标志信号。这是pattern的行为。 你在pattern 里面搜<font color=green>_run_testsetup</font> ，在tb 里面搜<font color=green>_pattern_count</font>，拉<font color=green>scan_en</font>信号的波形都能定位到pattern从哪里开始

    ![](https://github.com/LeoYr2022/PicForMd/blob/main/image-20230129152431152.png?raw=true)


