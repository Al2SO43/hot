function fetchAndRenderType1() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=zhihu')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>知乎热榜</span>
            </div>
            <div class="subtitle">热度</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType1调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType2() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=weibo')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>微博</span>
            </div>
            <div class="subtitle">热搜榜</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType2调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType3() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=baidu')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>百度热点</span>
            </div>
            <div class="subtitle">指数</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType3调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType4() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=history')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>百度百科</span>
            </div>
            <div class="subtitle">历史上的今天</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType4调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType5() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=bilihot')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>哔哩哔哩</span>
            </div>
            <div class="subtitle">热搜榜</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType5调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType6() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=biliall')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>哔哩哔哩</span>
            </div>
            <div class="subtitle">全站日榜</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType6调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType7() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=sspai')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>少数派</span>
            </div>
            <div class="subtitle">热榜</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType7调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

function fetchAndRenderType8() {
  fetch('https://api.cenguigui.cn/api/juhe/hotlist.php?type=douyin')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const hotlist = document.getElementById('hotlist');
        const container = document.createElement('div');
        container.classList.add('hot-list');
        container.innerHTML = `
          <div class="title">
            <div class="name">
              <span>抖音</span>
            </div>
            <div class="subtitle">热搜榜</div>
          </div>
          <div class="message">
            <div class="time">更新时间: ${new Date().toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })}</div>
          </div>
          <div class="lists">
            ${data.data.map((entry, index) => `
              <div class="item">
                <div class="num ${index < 3 ? ['one', 'two', 'three'][index] : ''}">${index + 1}</div>
                <div class="text"><a href="${entry.url}" target="_blank">${entry.title}</a></div>
              </div>
            `).join('')}
          </div>
        `;
        hotlist.appendChild(container);
      } else {
        console.error('fetchAndRenderType8调用失败');
      }
    })
    .catch(error => {
      console.error('ERROR:404', error);
    });
}

fetchAndRenderType1();
fetchAndRenderType2();
fetchAndRenderType3();
fetchAndRenderType4();
fetchAndRenderType5();
fetchAndRenderType6();
fetchAndRenderType7();
fetchAndRenderType8();

setInterval(fetchAndRenderType1, 10 * 60 * 1000);
setInterval(fetchAndRenderType2, 10 * 60 * 1000);
setInterval(fetchAndRenderType3, 10 * 60 * 1000);
setInterval(fetchAndRenderType4, 10 * 60 * 1000);
setInterval(fetchAndRenderType5, 10 * 60 * 1000);
setInterval(fetchAndRenderType6, 10 * 60 * 1000);
setInterval(fetchAndRenderType7, 10 * 60 * 1000);
setInterval(fetchAndRenderType8, 10 * 60 * 1000);

function displayTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
  const beijingTime = new Date().toLocaleString('zh-CN', options);
  document.getElementById('datetime').textContent = beijingTime;
}
setInterval(displayTime, 1000);
displayTime();
