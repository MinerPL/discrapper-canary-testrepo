var a = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
default: e
  };
};
Object.defineProperty(t, '__esModule', {
  value: !0
});
let n = a(r(919565)),
  s = a(r(537978)),
  o = a(r(158965)),
  i = 'twhZNwxI1aFG3r4';

function c(e, ...t) {
  let r = '';
  for (let a = 0; a < e.length; a++)
if (r += e[a], a < t.length) {
  let e = t[a],
    n = !1;
  if (o.default(e).value && (e = o.default(e).value, n = !0), e && e[i] || n) {
    let t = r.split('\n'),
      a = t[t.length - 1].search(/\S/),
      s = a > 0 ? ' '.repeat(a) : '';
    (n ? JSON.stringify(e, null, 2) : e[i]).split('\n').forEach((e, t) => {
      t > 0 ? r += '\n' + s + e : r += e;
    });
  } else if ('string' == typeof e && e.includes('\n')) {
    let t = r.match(/(?:^|\n)( *)$/);
    if ('string' == typeof e) {
      let a = t ? t[1] : '';
      r += e.split('\n').map((e, t) => (e = i + e, 0 === t ? e : `${ a }${ e }`)).join('\n');
    } else
      r += e;
  } else
    r += e;
}
  return (r = n.default(r)).split(i).join('');
}
c.pretty = e => s.default(e) ? {
  [i]: JSON.stringify(e, null, 2)
} : e, t.default = c;