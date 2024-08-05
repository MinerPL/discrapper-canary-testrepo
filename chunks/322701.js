var i = n(735250);
n(470079);
var a = n(924826),
  s = n(91192),
  r = n(442837),
  l = n(215569),
  o = n(481060),
  c = n(607070),
  d = n(981631),
  u = n(493367);
t.Z = function(e) {
  let {
statusSections: t,
renderRow: n,
searchQuery: _,
sectionFilter: h,
useReducedMotion: E
  } = e, I = (0, r.e7)([c.Z], () => c.Z.keyboardModeEnabled), m = (0, a.ZP)({
id: 'people',
isEnabled: I,
async scrollToStart() {},
async scrollToEnd() {}
  }), g = h !== d.pJs.ONLINE && h !== d.pJs.ALL, p = E || '' !== _ || g, T = t.map((e, t) => p ? (0, i.jsx)('div', {
children: e.map(n)
  }, t) : (0, i.jsx)(l.W, {
transitionAppear: !1,
component: 'div',
children: e.map(n)
  }, t));
  return (0, i.jsx)(s.bG, {
navigator: m,
children: (0, i.jsx)(s.SJ, {
  children: e => {
    let {
      ref: t,
      ...n
    } = e;
    return (0, i.jsx)(o.ScrollerAuto, {
      ref: t,
      className: u.peopleList,
      ...n,
      children: T
    });
  }
})
  });
};