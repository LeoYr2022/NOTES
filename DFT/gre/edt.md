# EDT

## 如何在ATPG中分析EDT结构

```tcl
analyze_compression \
                    -INPut_channels <M> -OUtput_channels <N> \
                    -ENAble_edt_power_controller -min_switching_threshold_percentage 10
```

- 注意事项：
  - M>N & M+N=#GPIO

