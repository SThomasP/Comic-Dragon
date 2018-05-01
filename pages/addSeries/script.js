var addForm = document.getElementById("addNewForm");

addForm.addEventListener('submit', function(event){
  event.preventDefault();

  var title = document.getElementById("seriesTitle").value;
  var currentPage = document.getElementById("currentURL").value;
  var toSave = {};
  toSave[title] = currentPage;
  console.log(toSave);
});

document.addEventListener("DOMContentLoaded", function (event){
  browser.tabs.query({currentWindow: true, active:true}).then(function(tabs){
    browser.tabs.get(tabs[0].openerTabId).then(function(comicTab){
      document.getElementById("seriesTitle").value = comicTab.title;
      document.getElementById("currentURL").value = comicTab.url;
    });
  });
});

