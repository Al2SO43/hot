function fetchAndRenderData() {
    fetch('https://api.vvhan.com/api/hotlist/all')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const hotlist = document.getElementById('hotlist');
          hotlist.innerHTML = ''; 
  
          data.data.forEach(item => {
            const container = document.createElement('div');
            container.classList.add('hotlist-container');
            container.innerHTML = `
              <h3>${item.name} - ${item.subtitle}</h3>
              <p>更新时间: ${item.update_time}</p>
              <ul>
                ${item.data.map(entry => `
                  <li><a href="${entry.url}" target="_blank">${entry.title}</a> <br />本条热度或更新时间:${entry.hot} </li>
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

  fetchAndRenderData();  
  setInterval(fetchAndRenderData, 30 * 60 * 1000); 
  
  function displayTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
    const beijingTime = new Date().toLocaleString('zh-CN', options);
    document.getElementById('datetime').textContent = beijingTime;
  }

  setInterval(displayTime, 1000);

  displayTime();
