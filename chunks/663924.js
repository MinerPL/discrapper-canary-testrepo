var i = n(735250),
  a = n(470079),
  s = n(374470),
  l = n(952265),
  r = n(481060),
  o = n(40851),
  c = n(314910),
  u = n(585483),
  d = n(5967),
  h = n(499254),
  m = n(827498),
  p = n(421591),
  _ = n(314734),
  f = n(981631),
  E = n(689938),
  g = n(1966);
let C = {
  height: _.lv
};

function I() {
  h.y(m.ti.DISMISSED);
}

function x(e) {
  let {
channel: t,
closeOnModalOuterClick: n = !1,
parentModalKey: c
  } = e, h = a.useRef(null), {
renderWindow: E,
windowDispatch: g
  } = a.useContext(o.ZP), C = null != c, x = (0, l.Jw)(null != c ? c : ''), T = a.useCallback(e => {
var t;
if (!C && (0, l.$s)() || C && !(x && n))
  return;
let {
  target: i
} = e;
if ((0, s.k)(i) && null != i.closest('.' + _.Jh))
  return;
for (;
  (0, s.k)(i);) {
  if (i === h.current)
    return;
  if (i.classList.contains(_.t4)) {
    e.preventDefault();
    return;
  }
  i = i.parentNode;
}
I();
let a = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
(null == a || 'BODY' === a.tagName) && u.S.dispatchToLastSubscribed(f.CkL.TEXTAREA_FOCUS);
  }, [
n,
x,
C
  ]);
  return a.useLayoutEffect(() => (E.addEventListener('mousedown', T), E.addEventListener('contextmenu', T), g.subscribe(f.CkL.POPOUT_CLOSE, I), () => {
E.removeEventListener('mousedown', T), E.removeEventListener('contextmenu', T), g.unsubscribe(f.CkL.POPOUT_CLOSE, I);
  }), [
T,
E,
g
  ]), (0, r.useFocusLock)(h), a.useEffect(() => {
(!C && (0, l.$s)() || C && !x) && I();
  }, [
x,
C
  ]), (0, i.jsx)(p.Z, {
ref: h,
channel: t,
entrypoint: m._b.TEXT
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
  className: g.positionLayer,
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
      className: g.positionContainer,
      role: 'dialog',
      style: C,
      'aria-label': E.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_LAUNCHER_ARIA_LABEL,
      children: t && (0, i.jsx)(x, {
        ...n
      })
    });
  }
})
  });
});