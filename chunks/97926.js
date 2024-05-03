"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("844099"),
  i = s("481060"),
  r = s("63063"),
  o = s("686777"),
  d = s("113434"),
  u = s("497505"),
  c = s("918701"),
  S = s("87894"),
  E = s("37303"),
  T = s("46140"),
  f = s("981631"),
  m = s("689938"),
  _ = s("941725");

function g(e) {
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
  }), s = (0, d.useExpiredQuestsMap)(), h = (0, o.useIsEligibleForConcurrentQuests)({
    location: T.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
  }), I = n.useMemo(() => e.filter(e => {
    var t, a;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return !(null !== (a = s.get(e.id)) && void 0 !== a && a) || n
  }), [e, s]), N = n.useMemo(() => new Map(I.map(e => [e.id, e])), [I]), p = n.useRef(!1), C = n.useRef([]), A = n.useMemo(() => {
    if (0 === I.length) return [];
    if (p.current) return C.current;
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
      let m = (0, c.isTargetedForContent)(e, u.QuestContent.QUEST_BAR),
        _ = (0, c.isTargetedForContent)(t, u.QuestContent.QUEST_BAR);
      if (m && _) return 0;
      if (m) return -1;
      if (_) return 1;
      let g = (0, c.isTargetedForContent)(e, u.QuestContent.GIFT_INVENTORY_FOR_YOU),
        h = (0, c.isTargetedForContent)(t, u.QuestContent.GIFT_INVENTORY_FOR_YOU);
      if (g && !T && !o && h && !f && !S) return 0;
      if (g && !T && !o) return -1;
      if (h && !f && !S) return 1;
      let I = o && d,
        N = S && E;
      return I && !N ? 1 : !I && N ? -1 : 0
    }).map(e => e.id);
    return p.current = !0, C.current = e, e
  }, [I]), O = n.useRef(null), x = n.useMemo(() => {
    if (null != O.current) return O.current;
    let e = h ? [{
      section: S.QuestsInventorySection.FOR_YOU,
      title: m.default.Messages.QUESTS_FOR_YOU,
      questIds: A.filter(e => g(N.get(e)))
    }, {
      section: S.QuestsInventorySection.OTHER,
      title: m.default.Messages.QUESTS_OTHER,
      questIds: A.filter(e => !g(N.get(e)))
    }] : [];
    return O.current = e, e
  }, [h, A, N]), R = n.useCallback(e => {
    let {
      questIds: t,
      section: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => {
        let t = N.get(e);
        return null == t ? null : (0, a.jsx)(E.QuestsCard, {
          quest: t,
          giftInventorySection: s,
          location: u.QuestContent.QUEST_INVENTORY_CARD
        }, t.id)
      })
    })
  }, [N]);
  return t ? (0, a.jsx)(i.Spinner, {
    className: _.spinner
  }) : 0 === A.length ? null : (0, a.jsx)(i.FormSection, {
    className: _.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: _.questsHeading,
        children: [h && (0, a.jsx)(l.QuestsIcon, {
          className: _.questsIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: _.questsHeading,
          children: m.default.Messages.QUESTS
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: _.questsHeadingLearnMore,
          children: m.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: r.default.getArticleURL(f.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: _.divider
      }), h ? x.map(e => {
        let {
          section: t,
          questIds: s,
          title: n
        } = e;
        return 0 === s.length ? null : (0, a.jsxs)("section", {
          className: _.questsListContainer,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            className: _.sectionHeader,
            children: n
          }), (0, a.jsx)(R, {
            questIds: s,
            section: t
          })]
        }, t)
      }) : (0, a.jsx)(R, {
        questIds: A
      })]
    })
  })
}