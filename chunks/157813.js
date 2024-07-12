n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(475179),
  u = n(871499),
  c = n(689938),
  d = n(444307);

function _(e) {
  let {
className: t,
isVertical: n
  } = e;
  return (0, r.jsxs)('div', {
className: d.iconContainer,
children: [
  (0, r.jsx)(s.ChevronSmallDownIcon, {
    size: 'md',
    color: 'currentColor',
    className: o()(n ? d.upCaret : d.leftCaret, t)
  }),
  (0, r.jsx)(s.GroupIcon, {
    size: 'md',
    color: 'currentColor',
    className: o()(d.members, t)
  })
]
  });
}

function E(e) {
  let {
className: t,
isVertical: n
  } = e;
  return (0, r.jsxs)('div', {
className: d.iconContainer,
children: [
  (0, r.jsx)(s.ChevronSmallDownIcon, {
    size: 'md',
    color: 'currentColor',
    className: o()(n ? d.downCaret : d.rightCaret, t)
  }),
  n && (0, r.jsx)(s.GroupIcon, {
    size: 'md',
    color: 'currentColor',
    className: o()(d.members, t)
  })
]
  });
}

function f(e) {
  let {
channelId: t,
className: n,
isParticipantsOpen: a,
isVertical: s = !1,
hideTooltip: f = !1
  } = e, h = i.useCallback(e => {
let {
  className: t
} = e;
return a ? (0, r.jsx)(E, {
  className: t,
  isVertical: s
}) : (0, r.jsx)(_, {
  className: t,
  isVertical: s
});
  }, [
a,
s
  ]);
  return (0, r.jsx)(u.Z, {
label: a ? c.Z.Messages.VIDEO_CALL_HIDE_MEMBERS : c.Z.Messages.VIDEO_CALL_SHOW_MEMBERS,
className: o()(d.participantsButton, n),
onClick: function() {
  l.Z.toggleParticipants(t, !a);
},
iconComponent: h,
shouldShowTooltip: !f
  });
}