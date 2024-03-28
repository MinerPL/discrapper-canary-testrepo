"use strict";
a.r(t);
var i = {
    about: "k\xf6r\xfclbel\xfcl",
    over: "t\xf6bb mint",
    almost: "majdnem",
    lessthan: "kevesebb mint"
  },
  n = {
    xseconds: " m\xe1sodperc",
    halfaminute: "f\xe9l perc",
    xminutes: " perc",
    xhours: " \xf3ra",
    xdays: " nap",
    xweeks: " h\xe9t",
    xmonths: " h\xf3nap",
    xyears: " \xe9v"
  },
  r = {
    xseconds: {
      "-1": " m\xe1sodperccel ezelőtt",
      1: " m\xe1sodperc m\xfalva",
      0: " m\xe1sodperce"
    },
    halfaminute: {
      "-1": "f\xe9l perccel ezelőtt",
      1: "f\xe9l perc m\xfalva",
      0: "f\xe9l perce"
    },
    xminutes: {
      "-1": " perccel ezelőtt",
      1: " perc m\xfalva",
      0: " perce"
    },
    xhours: {
      "-1": " \xf3r\xe1val ezelőtt",
      1: " \xf3ra m\xfalva",
      0: " \xf3r\xe1ja"
    },
    xdays: {
      "-1": " nappal ezelőtt",
      1: " nap m\xfalva",
      0: " napja"
    },
    xweeks: {
      "-1": " h\xe9ttel ezelőtt",
      1: " h\xe9t m\xfalva",
      0: " hete"
    },
    xmonths: {
      "-1": " h\xf3nappal ezelőtt",
      1: " h\xf3nap m\xfalva",
      0: " h\xf3napja"
    },
    xyears: {
      "-1": " \xe9vvel ezelőtt",
      1: " \xe9v m\xfalva",
      0: " \xe9ve"
    }
  };
t.default = function(e, t, a) {
  var d = e.match(/about|over|almost|lessthan/i),
    s = d ? e.replace(d[0], "") : e,
    l = (null == a ? void 0 : a.addSuffix) === !0,
    u = s.toLowerCase(),
    o = (null == a ? void 0 : a.comparison) || 0,
    m = l ? r[u][o] : n[u],
    f = "halfaminute" === u ? m : t + m;
  return d && (f = i[d[0].toLowerCase()] + " " + f), f
}