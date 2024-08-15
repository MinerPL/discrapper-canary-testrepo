n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n(442837),
  s = n(208826),
  o = n(40851),
  l = n(607070),
  u = n(585483),
  c = n(981631);
let d = (0, i.debounce)(e => {
  setTimeout(() => {
var t;
null === (t = e.current) || void 0 === t || t.focus();
  }, 0);
}, 50);

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
i = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
_ = (0, s.Z)(),
[E, f] = r.useState(!1),
h = (0, o.Aq)();
  return r.useEffect(() => {
if (t)
  return n.addEventListener('blur', e), () => n.removeEventListener('blur', e);

function e() {
  _ && (h.dispatch(c.CkL.POPOUT_CLOSE), u.S.dispatch(c.CkL.CONTEXT_MENU_CLOSE));
}
  }, [
n,
_,
t,
h
  ]), r.useEffect(() => {
var r, a, s;
if (i || !E || !t)
  return;
let o = _;

function l(t) {
  let n = t.relatedTarget;
  setTimeout(() => {
    (null == n || 'BUTTON' === n.tagName) && !o && d(e);
  }, 100);
}
return null === (r = e.current) || void 0 === r || r.addEventListener('focusout', l), (null === (a = n.document.activeElement) || void 0 === a ? void 0 : a.tagName) !== 'IFRAME' && !o && (null === (s = e.current) || void 0 === s || s.focus()), () => {
  var t;
  null === (t = e.current) || void 0 === t || t.removeEventListener('focusout', l), o = !0;
};
  }, [
t,
E,
i,
e,
n,
_
  ]), f;
}