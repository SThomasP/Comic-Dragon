var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(event){
  browser.tabs.query({active:true, currentWindow:true}).then(function(tabs){
    var currentTab = tabs[0];
    browser.tabs.create({
      active: true,
      openerTabId: currentTab.id,
      url: '/pages/addSeries/index.html'
    });
  });
});