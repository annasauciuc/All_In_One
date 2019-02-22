class Projects {
  construct = function(container) {
    $.get("./../../html/projects.html")
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
const projects = new Projects();
