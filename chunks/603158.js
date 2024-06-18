"use strict";
n.d(t, {
  F: function() {
    return l
  }
});
let i = {
    "|": " "
  },
  r = {
    "[": " ",
    "]": " ",
    "(": " ",
    ")": " ",
    "|": " ",
    "~": " "
  },
  s = {
    "-": "-",
    " ": " "
  },
  o = {
    "​": "",
    "‌": "",
    "‍": "",
    "‎": "",
    "\uFEFF": ""
  },
  a = {
    ...s,
    ...r,
    ...o,
    ...i
  };

function l(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    null != a[i] ? t += a[i] : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(i) ? t += " " : t += i
  }
  return t.toLowerCase()
}