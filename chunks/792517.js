n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(481060),
  l = n(872810),
  u = n(199902),
  c = n(314897),
  d = n(685203),
  _ = n(112560),
  E = n(689938),
  f = n(155354);
let h = n(978538);

function p(e) {
  let {
participant: t,
width: n,
noArt: i = !1,
selected: p = !1
  } = e, m = n < 195, I = (0, o.e7)([
u.Z,
c.default
  ], () => u.Z.getAllActiveStreams().some(e => {
let {
  ownerId: t
} = e;
return t !== c.default.getId();
  }));
  return (0, r.jsx)('div', {
className: a()(f.content, f.streamHidden, {
  [f.__invalid_small]: m
}),
children: (0, r.jsx)(_.Z, {
  className: f.streamHiddenEmptyState,
  artURL: h,
  noArt: i,
  selected: p,
  size: (0, _.L)(n),
  header: m ? null : E.Z.Messages.STREAM_HIDDEN,
  description: p ? null : (0, r.jsxs)('div', {
    className: a()(f.streamHiddenCTA, {
      [f.largePaddingTop]: !m
    }),
    children: [
      (0, r.jsx)(d.a, {
        isSmall: m,
        children: (0, r.jsx)(s.Text, {
          variant: m ? 'text-sm/semibold' : 'text-md/semibold',
          color: 'none',
          children: n < 175 ? E.Z.Messages.WATCH : E.Z.Messages.WATCH_STREAM
        })
      }),
      I ? (0, r.jsx)(d.a, {
        className: f.addCTA,
        tooltip: E.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
        onClick: e => {
          e.stopPropagation(), (0, l.rn)(t.stream, {
            forceMultiple: !0
          });
        },
        isSmall: m,
        children: (0, r.jsx)(s.EyePlusIcon, {
          size: 'xs',
          color: 'currentColor',
          className: f.addStreamIcon
        })
      }) : null
    ]
  })
})
  });
}