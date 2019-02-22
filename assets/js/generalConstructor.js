/**
 * This class manage all the complex HTML elements inside the
 * center container, it allow us to manage our
 * logic more easily and empty & append new HTML elements smoothly.
 * @return {function} getInstance
 */
const GeneralConstructor = (function() {
  let instance;
  let constructors;

  const targetContainer = $("#mainContainer");

  function init(classes) {
    constructors = classes;

    function construct(constructorKey) {
      console.log("constructorKey", constructorKey);
      if (
        constructors[constructorKey] &&
        targetContainer.find(constructors[constructorKey]["container"])
          .length === 0
      ) {
        console.log(
          " constructors[constructorKey]",
          constructors[constructorKey]
        );
        constructors[constructorKey]["constructor"].construct(targetContainer);
      }
    //   if (constructorKey === "projects") {
    //     console.log(" window.location.href :", window.location.href);
    //     //location.href="../../index.html" +'/'+ constructorKey;
    //     window.location.replace("/index.html" ,+'/index.html'+ constructorKey);
    //   }
    }

    return {
      constructors,
      construct
    };
  }

  return {
    getInstance: function(classes) {
      if (!instance && classes instanceof Object) {
        instance = init(classes);
      } else {
        throw new Error(
          "GeneralConstructor receive a bad parameter: " + classes
        );
      }
      return instance;
    }
  };
})();

let generalConstructor;

try {
  generalConstructor = GeneralConstructor.getInstance({
    mainPage: { container: "#mainPage", constructor: mainPage },
    projects: { container: "#projects", constructor: projects }
  });
} catch (err) {
  alert(err.name + " " + err.message);
}
