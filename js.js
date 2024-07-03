function fetchAndRenderData() {
  fetch('https://api.vvhan.com/api/hotlist/all')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        hotlist.innerHTML = ''; 

        data.data.forEach(item => {
          const container = document.createElement('div');
          container.classList.add('hot-list');
          container.innerHTML = `
            <div class="title">
              <div class="name">
                <span>${item.name}</span>
              </div>
              <div class="subtitle">${item.subtitle}</div>
            </div>
            <div class="message">
              <div class="time">更新时间: ${item.update_time}</div>
            </div>
            <div class="lists">
              ${item.data.map((entry, index) => `
                <div class="item">
                  <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                  <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
                </div>
              `).join('')}
            </div>
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

fetchAndRenderData();  
setInterval(fetchAndRenderData, 30 * 60 * 1000); 

function displayTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
  const beijingTime = new Date().toLocaleString('zh-CN', options);
  document.getElementById('datetime').textContent = beijingTime;
}

setInterval(displayTime, 1000);

displayTime();
