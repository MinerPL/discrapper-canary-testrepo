"use strict";
n.d(t, {
  f: function() {
    return s
  }
}), n(411104);
var i = n(4646),
  r = n(665672);
async function s(e) {
  let {
    assetsToLoad: t,
    drawImage: s,
    exportConfigs: o
  } = e, a = await (0, i.k2)(t);
  await a.loadFonts();
  {
    let e = n(503082).Z,
      t = n(97008).Z,
      i = document.createElement("canvas"),
      l = new e(i, a),
      u = new t,
      _ = new r.Z(l, u);
    s(_.canvas);
    let d = await _.export(o);
    return i.remove(), d
  }
}