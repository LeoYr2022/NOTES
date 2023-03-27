# Static Timing Analysis for Nanometer Designs
## 1 Introduction



## 2 Concepts



## 3 Standard Cell Library



## 4 Interconnect Parasitics



## 5 Delay Calculation



## 6 Crosstalk and Noise



## 7 Configuring STA Environment



## 8 Timing Verification

> Page 243-332

> Clock Specification:
>
> - create_clock <font color=green>__-waveform__</font>
> - set_clock_uncertainty  <font color=green>__-setup__</font> [^ 记住只针对setup设置]
> - set_clock_transition  <font color=green>__-rise/fall__</font> [^ 更多是在模拟lib中对cell的行为]
> - set_clock_latency <font color=green>__-source__</font> [^ 对于<font color=blue>hierarchy flow SDC</font>是有用处的]
>
> Clock Source Latency:
>
> - 也叫做insertion delay
> - $t = t(clock\_definition\_point) - t(clock\_source)$

### 8.1 Setup Timing Check

> The setup check is from the first active edge of the clock in the launch flip-flop to <font color=green>**the closest following active edge**</font> of the capture flip-flop.

> $t_{launch} + t_{ck2q} +t_{comb} < t_{capture} + T_{period} - (t_{setup} + t_{uncertainty})$
>
> $t_{launch}$ and $t_{capture}$  are clock tree delay included

> $delay_{cell} = f(t_{input\_transition},Cap_{output\_load})$
>
> $t_{input\_transition} \propto input\_port(set\_input\_transition)$

- reg2output timing

  ![image-20230314103547816](D:\GitHub\PicForMd\image-20230314103547816.png)

### 8.2 Hold Timing Check

> $t_{launch} + t_{clk->q} + t_{comb} > t_{capture} +[t_{hold} + t_{uncertainty}]$

#### Reg2Output Timing

> 需要注意的是output external delay是个负数

![image-20230314110258545](D:\GitHub\PicForMd\image-20230314110258545.png)

### 8.3 Multi-cycle Path

### 8.4 False Path

### 8.5 Half-Cycle Paths

### 8.6 Removal Timing Check

### 8.7 Recovery Timing Check

### 8.8 Timing across Clock Domains

### 8.9 Examples

### 8.10 Multiple Clocks

- related clocks
  - 有公共路径，且是同步时钟
- Common period(or extend)
- Clock Phase Shift



## 9 Interface Analysis

### 9.1 IO Interface

- Input Ports
  - Spec：将DUT当成一个macro，其spec就看成setup/hold要求

- Output Ports （ref P.324/340)
  - -max：其应当把外面的电路当成macro，且数值是在capture那一路，其值是≥0的；
  - -min：是在时钟沿之后检查，其数值是≤0的

- 随路时钟接口(<font color=blue>source synchronous interface</font>）（ref P.329/345)
  - 理想情况是同时刻变化，时钟沿和data同时出来
  - 1、**时钟同一时刻检查** ```set_multicycle_path 0 -setup -to [get_port data_s]```
  - 2、卡住timing window
    - -max 是时钟沿之后的数值，是个负数
    - -min 是时钟沿之前的数值，是个正数


### 9.2 SRAM Interface

> 讲的是片外SRAM，所以才有interface timing一说
>
> 这一节更重要说的是从其他IP Timing Spec的角度讲如何约束DUT timing

### 9.3 DDR SDRAM Interface

- 1 bit DQS & 4/8 bits DQ组成一个group，其目的是减少对data skew的要求
- Read Cycle
  - <font color=red> hold timing check different edges </font>
- Write Cycle
  - DQS和DQ之间有1/4cycle的shift
  - DQ的output delay全部用DQS时钟来约束

### 9.4 Video DAC Interface



## 10 Robust Verification



## Appendix A: SDC



## Appendix B: SDF





