n(47120);
var i = n(735250),
  a = n(470079),
  s = n(990547),
  r = n(442837),
  l = n(780384),
  o = n(481060),
  c = n(230711),
  d = n(410030),
  u = n(213609),
  _ = n(252618),
  h = n(353926),
  E = n(212476),
  I = n(374939),
  m = n(611928),
  g = n(791734),
  p = n(703656),
  T = n(63063),
  S = n(113434),
  f = n(709158),
  C = n(710914),
  N = n(906739),
  A = n(452081),
  v = n(46140),
  Z = n(981631),
  L = n(689938),
  O = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, f.Z)(v.dr.QUEST_HOME_DESKTOP), {
tabs: R,
selectedTab: x,
onSelectTab: b
  } = (0, A.z)(), {
onScroll: P,
scrollPosition: M
  } = (0, E.c)(), D = (0, d.ZP)(), y = (0, l.wj)(D), j = (0, r.e7)([h.Z], () => h.Z.hasLoadedExperiments), {
quests: U,
isFetchingCurrentQuests: G
  } = (0, S.bA)(x), k = (0, N.Z)(), w = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of U)
  if (t.id === e) {
    w = e;
    break;
  }
  }
  a.useEffect(() => {
j && !t && ((0, p.dL)(Z.Z5c.FRIENDS), c.Z.open(Z.oAB.INVENTORY));
  }, [
j,
t
  ]), a.useEffect(() => {
(0, u.h)({
  name: s.ImpressionNames.QUEST_HOME,
  type: s.ImpressionTypes.VIEW
});
  }, []);
  let B = a.useCallback(() => {
window.open(T.Z.getArticleURL(Z.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, _.Tt)({
location: L.Z.Messages.QUESTS
  }), t && j) ? (0, i.jsxs)('div', {
className: O.container,
children: [
  (0, i.jsxs)(m.ZP, {
    children: [
      (0, i.jsx)('div', {
        className: O.dragRegion
      }),
      (0, i.jsx)(m.z6, {
        scrollPosition: M
      }),
      (0, i.jsx)(m.aV, {
        icon: o.QuestsIcon
      }),
      (0, i.jsx)(g.Z, {
        tabs: R,
        selectedTab: x,
        onTabSelect: b
      })
    ]
  }),
  (0, i.jsx)(I.Z, {
    title: L.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: L.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: k,
    onScroll: P,
    bannerContainerClassName: O.bannerContainer,
    bannerImageClassName: O.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: y ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(o.Button, {
      size: 'medium',
      color: y ? o.ButtonColors.TRANSPARENT : o.ButtonColors.WHITE,
      className: O.button,
      onClick: B,
      innerClassName: O.innerButton,
      children: [
        (0, i.jsx)(o.Text, {
          variant: 'text-md/semibold',
          color: y ? 'always-white' : 'text-normal',
          className: O.externalLinkText,
          children: L.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(o.LinkExternalSmallIcon, {
          className: O.icon,
          color: y ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: G && 0 === U.length ? (0, i.jsx)(o.Spinner, {
      className: O.spinner
    }) : 0 === U.length && x === S.e5.CLAIMED ? (0, i.jsxs)(o.EmptyState, {
      theme: D,
      children: [
        (0, i.jsx)(o.EmptyStateImage, {
          lightSrc: n(979770),
          darkSrc: n(138715),
          width: 415,
          height: 200
        }),
        (0, i.jsx)(o.EmptyStateText, {
          note: L.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({
            onClick: () => b(S.e5.UNCLAIMED)
          })
        })
      ]
    }) : (0, i.jsx)('div', {
      className: O.gridContainer,
      children: (0, i.jsx)(C.Z, {
        quests: U,
        selectedQuestId: w
      })
    })
  })
]
  }) : null;
};