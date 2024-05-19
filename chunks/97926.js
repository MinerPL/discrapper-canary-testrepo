"use strict";
s.r(t), s("47120"), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("844099"),
  i = s("481060"),
  r = s("63063"),
  o = s("686777"),
  d = s("113434"),
  u = s("497505"),
  c = s("918701"),
  S = s("37303"),
  E = s("46140"),
  T = s("981631"),
  f = s("689938"),
  _ = s("201403");

function m(e) {
  if (null == e) return !1;
  let {
    userStatus: t
  } = e, s = (null == t ? void 0 : t.completedAt) != null && (null == t ? void 0 : t.claimedAt) == null, a = (null == t ? void 0 : t.enrolledAt) != null && (null == t ? void 0 : t.completedAt) == null;
  return s || a || (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU)
}
t.default = () => {
  (0, d.useDismissNewQuestBadge)();
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = (0, d.useQuests)({
    fetchPolicy: "cache-and-network"
  }), s = (0, d.useExpiredQuestsMap)(), g = (0, o.useIsEligibleForConcurrentQuests)({
    location: E.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), I = n.useMemo(() => e.filter(e => {
    var t, a;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
  }), [e, s]), h = n.useMemo(() => new Map(I.map(e => [e.id, e])), [I]), N = n.useRef(!1), p = n.useRef([]), C = n.useMemo(() => {
    if (0 === I.length) return [];
    if (N.current) return p.current;
    let e = I.sort((e, t) => {
      var s, a, n, l, i, r;
      let o = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        d = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        S = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        E = (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
      if (o && !d && S && !E) return 0;
      if (o && !d) return -1;
      if (S && !E) return 1;
      let T = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null,
        f = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
      if (T && !o && f && !S) {
        let s = (0, c.calculatePercentComplete)(e);
        return (0, c.calculatePercentComplete)(t) - s
      }
      if (T && !o) return -1;
      if (f && !S) return 1;
      let _ = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
        m = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
      if (_ && m) return 0;
      if (_) return -1;
      if (m) return 1;
      let g = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
        I = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
      if (g && !T && !o && I && !f && !S) return 0;
      if (g && !T && !o) return -1;
      if (I && !f && !S) return 1;
      let h = o && d,
        N = S && E;
      return h && !N ? 1 : !h && N ? -1 : 0
    }).map(e => e.id);
    return N.current = !0, p.current = e, e
  }, [I]), A = n.useRef(null), O = n.useMemo(() => {
    if (null != A.current) return A.current;
    let e = g ? [{
      location: u.QuestContent.GIFT_INVENTORY_FOR_YOU,
      title: f.default.Messages.QUESTS_FOR_YOU,
      questIds: C.filter(e => m(h.get(e)))
    }, {
      location: u.QuestContent.GIFT_INVENTORY_OTHER,
      title: f.default.Messages.QUESTS_OTHER,
      questIds: C.filter(e => !m(h.get(e)))
    }] : [];
    return A.current = e, e
  }, [g, C, h]), x = O.every(e => {
    let {
      questIds: t
    } = e;
    return t.length > 0
  });
  n.useEffect(() => {
    t && (A.current = null, N.current = !1)
  }, [t]);
  let R = n.useCallback(e => {
    let {
      questIds: t,
      location: s,
      contentPositionOffset: n = 0
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map((e, t) => {
        let l = h.get(e);
        return null == l ? null : (0, a.jsx)(S.QuestsCard, {
          quest: l,
          location: s,
          initiallyExpanded: !x,
          contentPosition: t + n
        }, l.id)
      })
    })
  }, [x, h]);
  return t ? (0, a.jsx)(i.Spinner, {
    className: _.spinner
  }) : 0 === C.length ? null : (0, a.jsx)(i.FormSection, {
    className: _.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: _.questsHeading,
        children: [g && (0, a.jsx)(l.QuestsIcon, {
          className: _.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: _.questsHeading,
          children: f.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: _.questsHeadingLearnMore,
          children: f.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(T.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: _.divider
      }), g ? O.map((e, t, s) => {
        let {
          location: n,
          questIds: l,
          title: r
        } = e;
        if (0 === l.length) return null;
        let o = 0 === t ? 0 : s.slice(0, t).reduce((e, t) => {
          let {
            questIds: s
          } = t;
          return e + s.length
        }, 0);
        return (0, a.jsxs)("section", {
          className: _.questsListContainer,
          children: [x && (0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: _.sectionHeader,
            children: r
          }), (0, a.jsx)(R, {
            questIds: l,
            location: n,
            contentPositionOffset: o
          })]
        }, n)
      }) : (0, a.jsx)(R, {
        questIds: C,
        location: u.QuestContent.GIFT_INVENTORY_FOR_YOU
      })]
    })
  })
}