"use strict";
n.r(t), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("570140"),
  r = n("906732"),
  o = n("451603"),
  u = n("885714"),
  d = n("514611"),
  c = n("127541"),
  f = n("981631"),
  E = n("912625");
let h = [
    [1696, 20],
    [1432, 16],
    [1168, 12],
    [0, 8]
  ],
  _ = [
    [1696, 30],
    [1432, 24],
    [1168, 18],
    [0, 12]
  ];
t.default = e => {
  let t, {
    title: n,
    subtitle: C,
    guildsData: m,
    analyticsContext: S,
    theme: I,
    onViewGuild: p,
    fetchGuilds: T,
    onGuildCardSeen: g,
    currentCategoryId: A,
    loadId: N,
    onTagClick: v,
    showMoreCards: O = !1
  } = e;
  s.useEffect(() => {
    i.default.wait(() => T())
  }, [A]);
  let R = (0, c.default)(O ? _ : h),
    {
      analyticsLocations: L
    } = (0, r.default)();
  if (null == m) return null;
  let {
    guilds: P,
    loading: M
  } = m, y = null == P || 0 === P.length;
  if (!M && y) return null;
  let D = async e => {
    if ((0, o.isAtGuildCapAndNonPremium)())(0, u.default)({
      analyticsSource: {
        page: f.AnalyticsPages.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: f.AnalyticsPages.GUILD_DISCOVERY,
        section: f.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: L
    });
    else {
      let t = P.findIndex(t => t.id === e);
      await p(e, t, S, N)
    }
  };
  if (M || null == P) {
    let e = [];
    for (let t = 0; t < R; t++) e.push((0, a.jsx)(d.default.Placeholder, {}, t));
    t = e
  } else t = P.slice(0, R).map(e => (0, a.jsx)(d.default, {
    className: E.__invalid_guildCard,
    guild: e,
    onView: D,
    theme: I,
    onGuildCardSeen: g,
    onTagClick: v
  }, e.id));
  return (0, a.jsx)("section", {
    className: E.guildListSection,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsx)(l.Heading, {
        className: E.__invalid_title,
        variant: "heading-lg/semibold",
        children: n
      }),
      children: [null != C && (0, a.jsx)(l.Text, {
        className: E.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C
      }), (0, a.jsx)("div", {
        className: E.guildList,
        children: t
      })]
    })
  })
}