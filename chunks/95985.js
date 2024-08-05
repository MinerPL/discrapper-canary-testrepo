var s = n(735250);
n(470079);
var o = n(481060),
  r = n(497505),
  a = n(644646),
  l = n(613087),
  i = n(472144),
  c = n(569379),
  d = n(46140),
  u = n(985444);
t.Z = e => {
  let {
quest: t,
progressBarRef: n,
isExpanded: p,
taskDetails: m
  } = e, {
percentComplete: x
  } = m, g = (0, c.eQ)(t), f = (0, c.vf)(t, p), C = p ? 'expanded' : 'collapsed';
  return (0, s.jsxs)('div', {
className: u.questProgressWrapper,
children: [
  (0, s.jsx)(l.l7, {
    inState: C,
    id: 'progress-bar',
    ref: n,
    children: e => (0, s.jsx)(i.Z, {
      ref: e,
      quest: t,
      percentComplete: x,
      size: 42,
      strokeWidth: 3,
      children: (0, s.jsx)(a.Z, {
        className: u.questProgressRewardTile,
        quest: t,
        questContent: r.jn.QUEST_BAR_V2,
        autoplay: !1,
        location: d.dr.QUESTS_BAR
      })
    })
  }),
  (0, s.jsxs)('div', {
    className: u.questProgressCopy,
    children: [
      (0, s.jsx)(l.l7, {
        inState: C,
        id: 'progress-title',
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: u.questProgressHint,
          color: 'header-primary',
          variant: 'text-sm/semibold',
          children: g
        })
      }),
      (0, s.jsx)(l.l7, {
        inState: C,
        id: 'progress-subtitle',
        isTextTransition: !0,
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: u.questProgressHint,
          color: 'text-muted',
          variant: 'text-xs/normal',
          children: f
        })
      })
    ]
  })
]
  });
};