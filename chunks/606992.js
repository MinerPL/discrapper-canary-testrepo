n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  i = n(40851),
  a = n(590921);

function s(e) {
  let {
editorHeight: t,
type: n,
state: s,
isInPopoutExperiment: o = !1
  } = e, [l, u] = r.useState(void 0), c = null == s ? void 0 : s.query, d = null == s ? void 0 : s.isVisible, {
renderWindow: _
  } = r.useContext(i.ZP), E = r.useCallback(() => {
var e, t, r, i;
if (null != s && (null == c || !d)) {
  u(void 0);
  return;
}
if ((null == c ? void 0 : c.type) === a.eq.GIFS || null != n && !o && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
  u(null);
  return;
}
let l = _.document.getSelection(),
  E = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
if (null == E)
  return;
let f = E.startContainer,
  h = E.startOffset;
for (; null != f;) {
  if (f.nodeType !== Node.TEXT_NODE || null == f.nodeValue) {
    u(null);
    return;
  }
  if ((null === (t = f.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
    h = null !== (i = null == (f = f.previousSibling) ? void 0 : null === (r = f.nodeValue) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0;
    continue;
  }
  null != c && (h >= c.queryText.length ? h -= c.queryText.length : h = 0);
  break;
}
if (null == f)
  return;
let p = _.document.createRange();
p.setStart(f, h), p.setEnd(f, h);
let m = p.getBoundingClientRect();
if ((null == m ? void 0 : m.height) !== 0)
  u(null != m ? m : null);
  }, [
o,
_.document,
s,
d,
c,
n
  ]);
  return r.useEffect(() => (_.document.addEventListener('selectionchange', E), () => _.document.removeEventListener('selectionchange', E)), [
_.document,
E
  ]), r.useEffect(() => {
E();
  }, [
E,
t
  ]), l;
}