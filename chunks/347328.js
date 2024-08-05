n.d(t, {
  ZP: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(230711),
  o = n(394821),
  l = n(26033),
  u = n(553795),
  c = n(594174),
  d = n(358085),
  _ = n(103479),
  E = n(981631),
  f = n(689938);

function h(e) {
  let {
activity: t,
entry: n,
user: h
  } = e, p = (0, i.e7)([c.default], () => c.default.getCurrentUser()), m = h.id === (null == p ? void 0 : p.id), I = (0, i.e7)([u.Z], () => u.Z.getAccounts()).some(e => e.type === E.ABu.CRUNCHYROLL), T = function(e) {
let {
  activity: t,
  entry: n,
  user: r
} = e;
if (null != n)
  return function(e) {
    if (!(0, l.r5)(e) || null == e.extra.url)
      return null;
    let t = e => {
      let t = null;
      !(0, d.isDesktop)() && (t = window.open('', '_blank')), null != t ? t.location.href = e : window.open(e);
    };
    if (void 0 === e.extra.url)
      return null;
    let n = e.extra.url;
    return () => t(n);
  }(n);
if (null != t) {
  var i, a;
  return i = t, a = r, (0, o.Z)(i) || null == i.buttons || 0 === i.buttons.length ? null : () => (0, _.s)({
    user: a,
    activity: i,
    index: 0
  });
}
return null;
  }({
activity: t,
entry: n,
user: h
  });
  if (m || null == T)
return null;
  let {
action: g,
label: S
  } = I ? {
action: T,
label: f.Z.Messages.WATCH_ON_CRUNCHYROLL
  } : {
action: () => s.Z.open(E.oAB.CONNECTIONS),
label: f.Z.Messages.CONNECT_CRUNCHYROLL
  };
  return (0, r.jsx)(a.MenuItem, {
id: 'connect-crunchyroll',
label: S,
action: g
  });
}