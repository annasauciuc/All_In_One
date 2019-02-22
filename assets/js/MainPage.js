class MainPage {
  construct = function(container) {
    $.get("./../../html/main.html")
      .done(function(data) {
        container.empty().append(data);
      })
      .fail(function(jqXHR) {
        if (jqXHR.statusText !== "OK") {
          console.log("[ERROR]: on loading json.");
        }
      });
  };
}
const mainPage = new MainPage();
