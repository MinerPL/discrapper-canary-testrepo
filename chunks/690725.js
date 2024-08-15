n.d(t, {
  f: function() {
return a;
  }
}), n(411104);
var r = n(4646),
  i = n(665672);
async function a(e) {
  let {
assetsToLoad: t,
drawImage: a,
exportConfigs: s
  } = e, o = await (0, r.k2)(t);
  await o.loadFonts();
  {
let e = n(503082).Z,
  t = n(97008).Z,
  r = document.createElement('canvas'),
  l = new e(r, o),
  u = new t(),
  c = new i.Z(l, u);
a(c.canvas);
let d = await c.export(s);
return r.remove(), d;
  }
}