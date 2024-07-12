var s = n(735250);
n(470079);
var o = n(481060),
  r = n(497505),
  a = n(644646),
  i = n(613087),
  l = n(472144),
  c = n(569379),
  d = n(985444);
t.Z = e => {
  let {
quest: t,
progressBarRef: n,
isExpanded: u,
taskDetails: p
  } = e, {
percentComplete: x
  } = p, m = (0, c.eQ)(t), g = (0, c.vf)(t, u), C = u ? 'expanded' : 'collapsed';
  return (0, s.jsxs)('div', {
className: d.questProgressWrapper,
children: [
  (0, s.jsx)(i.l7, {
    inState: C,
    id: 'progress-bar',
    ref: n,
    children: e => (0, s.jsx)(l.Z, {
      ref: e,
      quest: t,
      percentComplete: x,
      size: 42,
      strokeWidth: 3,
      children: (0, s.jsx)(a.Z, {
        className: d.questProgressRewardTile,
        quest: t,
        questContent: r.jn.QUEST_BAR_V2,
        autoplay: !1
      })
    })
  }),
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(i.l7, {
        inState: C,
        id: 'progress-title',
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: d.questProgressHint,
          color: 'header-primary',
          variant: 'text-sm/semibold',
          children: m
        })
      }),
      (0, s.jsx)(i.l7, {
        inState: C,
        id: 'progress-subtitle',
        isTextTransition: !0,
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: d.questProgressHint,
          color: 'text-muted',
          variant: 'text-xs/normal',
          children: g
        })
      })
    ]
  })
]
  });
};