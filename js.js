function fetchAndRenderData() {
    fetch('https://api.vvhan.com/api/hotlist/all')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const hotlist = document.getElementById('hotlist');
          hotlist.innerHTML = '';  // 清空原有内容
  
          data.data.forEach(item => {
            const container = document.createElement('div');
            container.classList.add('hotlist-container');
            container.innerHTML = `
              <h3>${item.name} - ${item.subtitle}</h3>
              <p>更新时间: ${item.update_time}</p>
              <ul>
                ${item.data.map(entry => `
                  <li><a href="${entry.url}" target="_blank">${entry.title}</a> <br>本条热度或更新时间:${entry.hot} </li>
                `).join('')}
              </ul>
            `;
            hotlist.appendChild(container);
          });
        } else {
          console.error('API调用失败');
        }
      })
      .catch(error => {
        console.error('ERROR:404', error);
      });
  }

  fetchAndRenderData();  // 确保页面首次加载时就获取并显示热搜数据
  setInterval(fetchAndRenderData, 30 * 60 * 1000);  // 30分钟间隔
  
// 随机选择背景图片
const images = [
  './bg/bg1.jpg',
  './bg/bg2.jpg',
  './bg/bg3.jpg',
  './bg/bg4.jpg',
  './bg/bg5.jpg',
  './bg/bg6.jpg',
  './bg/bg7.jpg',
  './bg/bg8.jpg',
  './bg/bg9.jpg',
  './bg/bg10.jpg',
];
const randomIndex = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = `url(${images[randomIndex]})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat'; 
document.body.style.backgroundPosition = 'center'; 
document.body.style.backgroundAttachment = 'fixed'; 
  function displayTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
    const beijingTime = new Date().toLocaleString('zh-CN', options);
    document.getElementById('datetime').textContent = beijingTime;
  }

  // 每秒更新时间
  setInterval(displayTime, 1000);

  displayTime();


// 显示弹窗
window.onload = function() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<p>温馨提示:本站热榜内容不代表作者本人最终观点,请理性对待这些热榜信息!</p>';
  document.body.appendChild(modal);
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 3500); 
};
