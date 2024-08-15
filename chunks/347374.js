n(47120);
var r = n(633302);
t.Z = e => {
  let t = new Map();
  for (let i of e) {
var n;
if (null != i.id) {
  t.set(i.id, i);
  continue;
}
let e = null !== (n = r.ZP.convertSurrogateToBase(i.surrogates)) && void 0 !== n ? n : i;
t.set(e.name, e);
  }
  return t;
};