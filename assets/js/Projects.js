class Projects {
  construct = function(container) {
    $.get("./../../html/projects.html")
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
const projects = new Projects();
