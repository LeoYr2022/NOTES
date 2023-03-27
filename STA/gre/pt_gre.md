# Timing Check

## Clock Gating Check

- 核心思想是在clock active的时候，enable信号要保持稳定

  ![](https://github.com/LeoYr2022/PicForMd/blob/main/image-20230208212917728.png?raw=true)

  所以如上图所示：这是一个与门的clock gating check。enable信号的变化只能在un-acitve的时候。