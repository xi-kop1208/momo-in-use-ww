/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "ww",    "https://www.maimemo.com/share/page?uid=32578856&pid=cf2908aca3f8357f701384ad1678328f&tid=995360cc58946ecdc38d673df29545e0",
    "wjl",
    "fy",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
        "https://www.maimemo.com/share/page?uid=32578856&pid=ccc24be8120691e092c897bb9fd53f80&tid=c137b112efdb50969cf4fbbe6ca9d561",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
