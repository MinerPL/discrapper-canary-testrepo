n.d(t, {
  OH: function() {
return _;
  },
  eE: function() {
return E;
  },
  jZ: function() {
return i;
  }
});
var r, i, a = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  l = n(692547),
  u = n(481060),
  c = n(689938),
  d = n(465970);
(r = i || (i = {})).RED = 'RED', r.GRAY = 'GRAY';
let _ = {
LARGE: d.liveLarge,
SMALL: d.liveSmall
  },
  E = {
[u.BadgeShapes.ROUND]: d.liveShapeRound,
[u.BadgeShapes.ROUND_LEFT]: d.liveShapeRoundLeft,
[u.BadgeShapes.ROUND_RIGHT]: d.liveShapeRoundRight,
[u.BadgeShapes.SQUARE]: ''
  };

function f(e) {
  let {
className: t,
style: n,
shape: r = u.BadgeShapes.ROUND,
look: i = 'RED',
size: s = _.LARGE
  } = e;
  return 'RED' === i ? (0, a.jsx)(u.TextBadge, {
text: c.Z.Messages.LIVE,
className: o()(t, d.live, s),
color: l.Z.unsafe_rawColors.RED_400.css,
shape: E[r],
style: n
  }) : (0, a.jsx)(u.TextBadge, {
text: c.Z.Messages.LIVE,
className: o()(t, d.live, s, d.grey),
disableColor: !0,
shape: E[r],
style: n
  });
}
f.Looks = i, f.Sizes = _, t.ZP = f;