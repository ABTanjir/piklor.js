window.addEventListener("load", function () {
    var pk = new Piklor(".color-picker", [
            "#f44336"
          , "#e91e63"
          , "#3f51b5"
          , "#4caf50"
          , "#ffc107"
          , "#795548"
        ], {
            open: ".picker-wrapper .btn"
          , position: "auto"
        })
      , wrapperEl = document.querySelector(".picker-wrapper")
      ;

    pk.colorChosen(function (col) {
        wrapperEl.style.backgroundColor = col;
    });
});
