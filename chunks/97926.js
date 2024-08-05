s(47120), s(724458);
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(63063),
  o = s(686777),
  l = s(113434),
  c = s(497505),
  d = s(918701),
  _ = s(625252),
  E = s(37303),
  u = s(709158),
  T = s(46140),
  I = s(981631),
  S = s(689938),
  N = s(165549);

function C(e) {
  if (null == e)
return !1;
  let {
userStatus: t
  } = e, s = (null == t ? void 0 : t.completedAt) != null && (null == t ? void 0 : t.claimedAt) == null, n = (null == t ? void 0 : t.enrolledAt) != null && (null == t ? void 0 : t.completedAt) == null;
  return s || n || (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU);
}
t.Z = () => {
  (0, l.jU)();
  let {
quests: e,
isFetchingCurrentQuests: t
  } = (0, l.J2)({
fetchPolicy: 'cache-and-network'
  }), s = (0, l.EH)(), m = (0, o.q)({
location: T.dr.USER_SETTINGS_GIFT_INVENTORY
  }), A = (0, u.Z)(T.dr.USER_SETTINGS_GIFT_INVENTORY), [g, h] = a.useState(!0), [O, p] = a.useState([]), [R, x] = a.useState([]), M = a.useMemo(() => g ? t ? 'unsorted' : 'pending_sort' : 'sorted', [
g,
t
  ]);
  a.useEffect(() => {
h(!0);
  }, [
t,
s
  ]), a.useEffect(() => {
if ('pending_sort' === M) {
  let {
    sortedQuestIds: t,
    sections: n
  } = function(e) {
    let t = new Map(e.map(e => [
        e.id,
        e
      ])),
      s = e.sort((e, t) => {
        var s, n, a, i, r, o;
        let l = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
          _ = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
          E = (null === (a = t.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
          u = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
        if (l && !_ && E && !u)
          return 0;
        if (l && !_)
          return -1;
        if (E && !u)
          return 1;
        let T = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
          I = (null === (o = t.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
        if (T && !l && I && !E) {
          let {
            percentComplete: s
          } = (0, d.il)(e), {
            percentComplete: n
          } = (0, d.il)(t);
          return n - s;
        }
        if (T && !l)
          return -1;
        if (I && !E)
          return 1;
        let S = (0, d.Mi)(e, c.jn.QUEST_BAR),
          N = (0, d.Mi)(t, c.jn.QUEST_BAR);
        if (S && N)
          return 0;
        if (S)
          return -1;
        if (N)
          return 1;
        let C = (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU),
          m = (0, d.Mi)(t, c.jn.GIFT_INVENTORY_FOR_YOU);
        if (C && !T && !l && m && !I && !E)
          return 0;
        if (C && !T && !l)
          return -1;
        if (m && !I && !E)
          return 1;
        let A = l && _,
          g = E && u;
        return A && !g ? 1 : !A && g ? -1 : 0;
      }).map(e => e.id),
      n = [{
          location: c.jn.GIFT_INVENTORY_FOR_YOU,
          title: S.Z.Messages.QUESTS_FOR_YOU,
          questIds: s.filter(e => C(t.get(e)))
        },
        {
          location: c.jn.GIFT_INVENTORY_OTHER,
          title: S.Z.Messages.QUESTS_OTHER,
          questIds: s.filter(e => !C(t.get(e)))
        }
      ];
    return {
      sortedQuestIds: s,
      sections: n
    };
  }(e.filter(e => {
    var t, n;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (n = s.get(e.id)) && void 0 !== n && n) || a;
  }));
  p(t), x(n), h(!1);
}
  }, [
e,
s,
M
  ]);
  let f = R.every(e => {
let {
  questIds: t
} = e;
return t.length > 0;
  });
  return t || 'sorted' !== M ? (0, n.jsx)(i.Spinner, {
className: N.spinner
  }) : 0 === O.length ? null : (0, n.jsxs)(i.FormSection, {
className: N.questsContainer,
children: [
  A ? (0, n.jsx)(_.Z, {}) : null,
  (0, n.jsxs)(i.HeadingLevel, {
    component: (0, n.jsxs)('div', {
      className: N.questsHeading,
      children: [
        m && (0, n.jsx)(i.QuestsIcon, {
          className: N.questsIcon
        }),
        (0, n.jsx)(i.Heading, {
          variant: 'heading-md/semibold',
          className: N.questsHeading,
          children: S.Z.Messages.QUESTS
        }),
        (0, n.jsx)(i.Text, {
          variant: 'text-xs/normal',
          className: N.questsHeadingLearnMore,
          children: S.Z.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.Z.getArticleURL(I.BhN.QUESTS_LEARN_MORE)
          })
        })
      ]
    }),
    children: [
      (0, n.jsx)(i.FormDivider, {
        className: N.divider
      }),
      m ? R.map((e, t, s) => {
        let {
          location: a,
          questIds: r,
          title: o
        } = e;
        if (0 === r.length)
          return null;
        let l = 0 === t ? 0 : s.slice(0, t).reduce((e, t) => {
          let {
            questIds: s
          } = t;
          return e + s.length;
        }, 0);
        return (0, n.jsxs)('section', {
          className: N.questsListContainer,
          children: [
            f && (0, n.jsx)(i.Text, {
              variant: 'text-xs/semibold',
              color: 'header-secondary',
              className: N.sectionHeader,
              children: o
            }),
            r.map((e, t) => (0, n.jsx)(E.D, {
              questId: e,
              location: a,
              contentPosition: t + l,
              initiallyExpanded: !f
            }, e))
          ]
        }, a);
      }) : O.map((e, t) => (0, n.jsx)(E.D, {
        questId: e,
        location: c.jn.GIFT_INVENTORY_FOR_YOU,
        contentPosition: t
      }, e))
    ]
  })
]
  });
};