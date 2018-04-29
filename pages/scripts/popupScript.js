var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(event){
  browser.tabs.query({active:true, currentWindow:true}).then(function(tabs){
    var currentTab = tabs[0];
    console.log(currentTab.title);
    browser.tabs.executeScript(currentTab.id, {file:"/changePages.js"});
  });
});