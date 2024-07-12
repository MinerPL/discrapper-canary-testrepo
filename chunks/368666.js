n.d(t, {
  eE: function() {
return E;
  },
  jZ: function() {
return a;
  }
});
var i, a, s = n(735250);
n(470079);
var r = n(120356),
  l = n.n(r),
  o = n(692547),
  c = n(481060),
  d = n(689938),
  u = n(404422);
(i = a || (a = {})).RED = 'RED', i.GRAY = 'GRAY';
let _ = {
LARGE: u.liveLarge,
SMALL: u.liveSmall
  },
  E = {
[c.BadgeShapes.ROUND]: u.liveShapeRound,
[c.BadgeShapes.ROUND_LEFT]: u.liveShapeRoundLeft,
[c.BadgeShapes.ROUND_RIGHT]: u.liveShapeRoundRight,
[c.BadgeShapes.SQUARE]: ''
  };

function I(e) {
  let {
className: t,
style: n,
shape: i = c.BadgeShapes.ROUND,
look: a = 'RED',
size: r = _.LARGE
  } = e;
  return 'RED' === a ? (0, s.jsx)(c.TextBadge, {
text: d.Z.Messages.LIVE,
className: l()(t, u.live, r),
color: o.Z.unsafe_rawColors.RED_400.css,
shape: E[i],
style: n
  }) : (0, s.jsx)(c.TextBadge, {
text: d.Z.Messages.LIVE,
className: l()(t, u.live, r, u.grey),
disableColor: !0,
shape: E[i],
style: n
  });
}
I.Looks = a, I.Sizes = _, t.ZP = I;