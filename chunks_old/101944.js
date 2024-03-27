"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = function() {
    var e = (0, o.default)({
      default: {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px"
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555"
        },
        left: {
          Extend: "triangleBorder",
          transform: "translate(-13px, -4px)"
        },
        leftInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        },
        right: {
          Extend: "triangleBorder",
          transform: "translate(20px, -14px) rotate(180deg)"
        },
        rightInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        }
      }
    });
    return a.createElement("div", {
      style: e.pointer
    }, a.createElement("div", {
      style: e.left
    }, a.createElement("div", {
      style: e.leftInside
    })), a.createElement("div", {
      style: e.right
    }, a.createElement("div", {
      style: e.rightInside
    })))
  }