/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "ww",    "https://www.maimemo.com/share/page?uid=32578856&pid=cf2908aca3f8357f701384ad1678328f&tid=995360cc58946ecdc38d673df29545e0",
    "wjl",
    "fy",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
        "https://www.maimemo.com/share/page?uid=32578856&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=42a601a7a8a81227bd9901f89ef1e134",
        "https://www.maimemo.com/share/page?uid=24220629&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=26b5b30f9c1cc811e6c574f7a902e1e8",
    
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
