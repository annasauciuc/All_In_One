class MainPage {
  construct = function(container) {
    $.get("./../../html/main.html")
      .then(data => {
        container.empty().append(data);
      })
      .catch(jqXHR => {
        if (jqXHR.statusText !== "OK") {
          console.log("[ERROR]: on loading json.");
        }
      });
  };
}
const mainPage = new MainPage();
