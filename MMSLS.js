/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "ww",    "https://www.maimemo.com/share/page?uid=32578856&pid=cf2908aca3f8357f701384ad1678328f&tid=995360cc58946ecdc38d673df29545e0",
    "wjl",
    "fy",
    "https://www.maimemo.com/share/page?uid=32578856&pid=f17f94085b9d7c498e8d2f0cf69dc256&tid=cf4b2dfb9ecce94696f9afc9b1970bfe",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
        "https://www.maimemo.com/share/page?uid=32578856&pid=ca61e29648691a4736dab4b5837e55a4&tid=58efcf8adae13acefce9cad6b90fd7ee",
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
