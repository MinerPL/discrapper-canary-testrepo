"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("818966");
t.default = function(e) {
  var t = e.onClick,
    r = e.hsl,
    n = (0, o.default)({
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
  return a().createElement("div", {
    style: n.swatches
  }, a().createElement("div", {
    style: n.swatch
  }, a().createElement(i.default, {
    hsl: r,
    offset: ".80",
    active: .1 > Math.abs(r.l - .8) && .1 > Math.abs(r.s - .5),
    onClick: t,
    first: !0
  })), a().createElement("div", {
    style: n.swatch
  }, a().createElement(i.default, {
    hsl: r,
    offset: ".65",
    active: .1 > Math.abs(r.l - .65) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), a().createElement("div", {
    style: n.swatch
  }, a().createElement(i.default, {
    hsl: r,
    offset: ".50",
    active: .1 > Math.abs(r.l - .5) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), a().createElement("div", {
    style: n.swatch
  }, a().createElement(i.default, {
    hsl: r,
    offset: ".35",
    active: .1 > Math.abs(r.l - .35) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), a().createElement("div", {
    style: n.swatch
  }, a().createElement(i.default, {
    hsl: r,
    offset: ".20",
    active: .1 > Math.abs(r.l - .2) && .1 > Math.abs(r.s - .5),
    onClick: t,
    last: !0
  })), a().createElement("div", {
    style: n.clear
  }))
}