// 获取所有卡片元素 
const cards = document.querySelectorAll('.card');  
 
// 为每张卡片添加点击事件监听器 
cards.forEach(card  => { 
  card.addEventListener('click',  () => { 
    // 检查卡片是否已经翻转 
    if (!card.classList.contains('flipped'))  { 
      // 如果未翻转，则添加 flipped 类，实现翻转效果 
      card.classList.add('flipped');  
    } 
  }); 
}); 