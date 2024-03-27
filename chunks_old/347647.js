"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
}), t("222007"), t("424973");
let a = {
    1: "bold",
    4: "underline"
  },
  r = {
    30: "black",
    31: "red",
    32: "green",
    33: "yellow",
    34: "blue",
    35: "magenta",
    36: "cyan",
    37: "white"
  },
  l = {
    40: "black",
    41: "red",
    42: "green",
    43: "yellow",
    44: "blue",
    45: "magenta",
    46: "cyan",
    47: "white"
  },
  i = /\x1B\[(\d+(?:[:;]\d+)*)m/,
  u = new RegExp("(?=".concat(i.source, ")"));

function c() {
  let e = [...s("foreground", r, ["38", "39"], !0), ...s("background", l, ["48", "49"], !0), ...s("style", a, [], !1), {
    className: "ansi-control-sequence",
    begin: i,
    starts: {
      end: u,
      endsParent: !0
    }
  }];
  return function(e) {
    for (let n = 0; n < e.length; n++) e[n].contains = e.slice(n + 1)
  }(e), {
    contains: [{
      begin: u,
      contains: e
    }]
  }
}

function s(e, n, t, a) {
  let r = ["0", ...t];
  return a && r.push(...Object.keys(n)), Object.entries(n).map(n => {
    var t, a, l, i;
    let [c, s] = n;
    return t = e, a = s, l = c, i = r, {
      className: "ansi-".concat(t, "-").concat(a),
      endsParent: !0,
      begin: u,
      "on:begin": (e, n) => {
        let t = e[1].split(";");
        for (let e of (void 0 === n.data.isOn && (n.data.isOn = !1), t)) e === l ? n.data.isOn = !0 : i.includes(e) && (n.data.isOn = !1);
        !n.data.isOn && n.ignoreMatch()
      }
    }
  })
}