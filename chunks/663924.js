var i = n(735250),
  a = n(470079),
  l = n(374470),
  s = n(952265),
  r = n(481060),
  o = n(40851),
  c = n(153850),
  d = n(585483),
  u = n(5967),
  h = n(499254),
  p = n(827498),
  m = n(421591),
  _ = n(314734),
  f = n(981631),
  E = n(689938),
  C = n(406709);

function g() {
  h.y(p.ti.DISMISSED);
}

function I(e) {
  let {
channel: t,
closeOnModalOuterClick: n = !1,
parentModalKey: c
  } = e, h = a.useRef(null), {
renderWindow: E,
windowDispatch: C
  } = a.useContext(o.ZP), I = null != c, x = (0, s.Jw)(null != c ? c : ''), T = a.useCallback(e => {
var t;
if (!I && (0, s.$s)() || I && !(x && n))
  return;
let {
  target: i
} = e;
if ((0, l.k)(i) && null != i.closest('.' + _.Jh))
  return;
for (;
  (0, l.k)(i);) {
  if (i === h.current)
    return;
  if (i.classList.contains(_.t4)) {
    e.preventDefault();
    return;
  }
  i = i.parentNode;
}
g();
let a = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
(null == a || 'BODY' === a.tagName) && d.S.dispatchToLastSubscribed(f.CkL.TEXTAREA_FOCUS);
  }, [
n,
x,
I
  ]);
  return a.useLayoutEffect(() => (E.addEventListener('mousedown', T), E.addEventListener('contextmenu', T), C.subscribe(f.CkL.POPOUT_CLOSE, g), () => {
E.removeEventListener('mousedown', T), E.removeEventListener('contextmenu', T), C.unsubscribe(f.CkL.POPOUT_CLOSE, g);
  }), [
T,
E,
C
  ]), (0, r.useFocusLock)(h), a.useEffect(() => {
(!I && (0, s.$s)() || I && !x) && g();
  }, [
x,
I
  ]), (0, i.jsx)(m.Z, {
ref: h,
channel: t,
entrypoint: p._b.TEXT
  });
}
t.Z = a.memo(function(e) {
  let {
positionTargetRef: t,
...n
  } = e;
  return (0, i.jsx)('span', {
style: _.u$,
children: (0, i.jsx)(c.W5, {
  className: C.positionLayer,
  targetRef: t,
  position: 'top',
  align: 'right',
  spacing: 8,
  autoInvert: !0,
  children: e => {
    let {
      isPositioned: t
    } = e;
    return (0, i.jsx)('section', {
      className: C.positionContainer,
      role: 'dialog',
      'aria-label': E.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_LAUNCHER_ARIA_LABEL,
      children: t && (0, i.jsx)(I, {
        ...n
      })
    });
  }
})
  });
});