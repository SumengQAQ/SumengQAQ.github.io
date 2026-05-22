(function() {
  // 把侧边栏移到启动页内
  var aside = document.getElementById('aside-content');
  var header = document.getElementById('page-header');
  if (aside && header && header.classList.contains('full_page')) {
    aside.classList.add('sm-aside');
    header.appendChild(aside);
  }

  // 拆分文章为两行
  var container = document.querySelector('.recent-post-items');
  if (!container) return;
  var items = Array.prototype.slice.call(container.children);
  if (items.length < 4) return;

  var mid = Math.ceil(items.length / 2);
  container.innerHTML = '';

  function buildRow(start, clsName) {
    var row = document.createElement('div');
    row.className = 'sm-row ' + clsName;
    for (var i = start; i < start + mid && i < items.length; i++) {
      var item = items[i];
      item.className = 'recent-post-item sm-card';
      row.appendChild(item);
    }
    container.appendChild(row);
  }

  buildRow(0, 'sm-top');
  buildRow(mid, 'sm-bottom');
})();
