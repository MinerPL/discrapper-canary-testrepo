"use strict";
var r = n(470079),
  i = n(844303),
  a = n(818966);
t.Z = function(e) {
  var t = e.onClick,
    n = e.hsl,
    o = (0, i.default)({
      default: {
        swatches: {
          marginTop: "20px"
        },
        swatch: {
          boxSizing: "border-box",
          width: "20%",
          paddingRight: "1px",
          float: "left"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return r.createElement("div", {
    style: o.swatches
  }, r.createElement("div", {
    style: o.swatch
  }, r.createElement(a.Z, {
    hsl: n,
    offset: ".80",
    active: .1 > Math.abs(n.l - .8) && .1 > Math.abs(n.s - .5),
    onClick: t,
    first: !0
  })), r.createElement("div", {
    style: o.swatch
  }, r.createElement(a.Z, {
    hsl: n,
    offset: ".65",
    active: .1 > Math.abs(n.l - .65) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), r.createElement("div", {
    style: o.swatch
  }, r.createElement(a.Z, {
    hsl: n,
    offset: ".50",
    active: .1 > Math.abs(n.l - .5) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), r.createElement("div", {
    style: o.swatch
  }, r.createElement(a.Z, {
    hsl: n,
    offset: ".35",
    active: .1 > Math.abs(n.l - .35) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), r.createElement("div", {
    style: o.swatch
  }, r.createElement(a.Z, {
    hsl: n,
    offset: ".20",
    active: .1 > Math.abs(n.l - .2) && .1 > Math.abs(n.s - .5),
    onClick: t,
    last: !0
  })), r.createElement("div", {
    style: o.clear
  }))
}