import React, { useEffect } from "react";
const CoolTool = () => {
  function addMargins() {
    //add aoutline to all elements in document
    const allElements = document.querySelectorAll(
      "*"
    ) as NodeListOf<HTMLElement>;

    allElements.forEach((element) => {
      if (element.id === "CoolToolbarButton") return;
      if (element.style.outline.length > 0) {
        return (element.style.outline = "");
      }

      element.style.outline = "1px solid red";
    });
  }

  function displayWidth() {
    //add aoutline to all elements in document
    const allElements = document.querySelectorAll(
      "*"
    ) as NodeListOf<HTMLElement>;

    const insertedPixels = document.querySelectorAll(".insertedContent");

    if (insertedPixels.length > 0) {
      return insertedPixels.forEach((element) => {
        element.remove();
      });
    }

    allElements.forEach((element) => {
      if (
        element.clientWidth === 0 ||
        !element.parentElement ||
        element.id === "CoolToolbarButton"
      )
        return;

      element.insertAdjacentHTML(
        "afterend",
        `<div class='insertedContent' style="background-color: yellow; position: absolute;" >${element.clientWidth}px</div>`
      );
    });
  }

  function mouseRuler() {
    let mX,
      mY,
      distance = 0;
    const elem = document.querySelector(".CoolToolbarClicked");

    /* if (!elem) return */
    /* elem.style.backgroundColor = "red" */
    /**/
    /* function calculateDistance(elem, mouseX, mouseY) { */
    /*     return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2))); */
    /* } */
    /**/
    /* document.onmousemove(function(e) { */
    /*     mX = e.pageX; */
    /*     mY = e.pageY; */
    /*     distance = calculateDistance(elem, mX, mY); */
    /*     console.log(distance); */
    /**/
    /* }); */
  }

  function measureDistance() {
    //add aoutline to all elements in document
    const allElements = document.querySelectorAll(
      "*"
    ) as NodeListOf<HTMLElement>;
    const insertedPixels = document.querySelectorAll(".insertedContent");

    if (insertedPixels.length > 0) {
      return insertedPixels.forEach((element) => {
        element.remove();
      });
    }

    function getPositionAtCenter(element: any) {
      const { top, left, width, height } = element.getBoundingClientRect();
      return {
        x: left + width / 2,
        y: top + height / 2,
      };
    }

    function getDistanceBetweenElements(a: any, b: any) {
      const aPosition = getPositionAtCenter(a);
      const bPosition = getPositionAtCenter(b);

      return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    }

    for (let i = 1; i < allElements.length; i++) {
      let previousElement = allElements[i - 1];
      let element = allElements[i];

      if (
        element.clientWidth === 0 ||
        !element.parentElement ||
        element.id === "CoolToolbarButton"
      )
        continue;

      const distance = Math.floor(
        getDistanceBetweenElements(element, previousElement)
      );

      element.insertAdjacentHTML(
        "afterend",
        `<div class='insertedContent' style="background-color: yellow; position: absolute;" >EL:${i}; ${distance}px</div>`
      );
    }
  }

  useEffect(() => {
    const toolbar = document.getElementById("CoolToolbar");
    if (!toolbar) return;

    /* toolbar.addEventListener('mousedown', e => { */
    /*     e.target.classList.add('moving') */
    /* }) */
    /**/
    /* toolbar.addEventListener('mouseup', e => { */
    /*     e.target.classList.remove('moving') */
    /* }) */
    /**/
    /* addEventListener('mouseup', e => { */
    /*     if (toolbar.classList.contains('moving')) { */
    /*         toolbar.style.left = e.clientX + 'px' */
    /*         toolbar.style.top = e.clientY + 'px' */
    /*     } */
    /*     toolbar.classList.remove('moving') */
    /* }) */
    /**/
    /* addEventListener('mousemove', e => { */
    /*     if (toolbar.classList.contains('moving')) { */
    /*         toolbar.style.left = e.clientX + 'px' */
    /*         toolbar.style.top = e.clientY + 'px' */
    /*     } */
    /* }) */

    toolbar.onmousedown = function (event) {
      let shiftX = event.clientX - toolbar.getBoundingClientRect().left;
      let shiftY = event.clientY - toolbar.getBoundingClientRect().top;

      function moveAt(pageX: MouseEvent["pageX"], pageY: MouseEvent["pageY"]) {
        if (!toolbar) return;
        toolbar.style.left = pageX - shiftX + "px";
        toolbar.style.top = pageY - shiftY + "px";
      }
      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY);
      }

      moveAt(event.pageX, event.pageY);

      document.addEventListener("mousemove", onMouseMove);

      toolbar.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        toolbar.onmouseup = null;
      };
    };

    toolbar.ondragstart = function () {
      return false;
    };

    document.addEventListener("click", function (event) {
      console.log(event);
      if (!event.target) return;
      /* if (event.target.id === "CoolToolbarButton") return; */
      /* const elements = document.querySelectorAll(".CoolToolbarClicked"); */
      /* elements.forEach((element) => { */
      /*   element.classList.remove("CoolToolbarClicked"); */
      /* }); */

      /* event.target.classList.add("CoolToolbarClicked"); */
    });

    return () => {};
  }, []);

  /* events fired on the draggable target */

  return (
    <div
    /* style={{ position: "fixed", top: 30, right: 30 }} */
    >
      <div
        id="CoolToolbar"
        style={{
          right: 30,
          top: 30,
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100px",
          height: "300px",
          border: "2px solid black",
          position: "absolute",
          zIndex: 1000,
        }}
      >
        <button id="CoolToolbarButton" onClick={addMargins}>
          {" "}
          Margin debugger
        </button>
        <button id="CoolToolbarButton" onClick={displayWidth}>
          Display Width
        </button>
        <button id="CoolToolbarButton" onClick={measureDistance}>
          Measure Distance
        </button>
        <button id="CoolToolbarButton" onClick={mouseRuler}>
          Mouse ruler
        </button>
      </div>
    </div>
  );
};

export default CoolTool;
