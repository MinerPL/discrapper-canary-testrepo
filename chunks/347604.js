"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("392711"),
  i = s.n(n),
  r = s("207561"),
  o = s("442837"),
  d = s("481060"),
  u = s("946314"),
  c = s("938502"),
  E = s("967916"),
  _ = s("68638"),
  I = s("816817"),
  T = s("219369"),
  S = s("650774"),
  f = s("845377"),
  m = s("981631"),
  N = s("689938"),
  g = s("421590"),
  h = s("716455");
let C = ["322850917248663552", "172018499005317120", "414234792121597953", "228406572756369408"],
  R = ["620723483965653003", "662246299369734154", "181970867549503489", "102860784329052160"];
t.default = e => {
  let {
    guild: t,
    onEnableDiscovery: s,
    isGuildAdmin: n
  } = e, [x, L] = (0, r.useStableMemo)(() => [i().sample(C), i().sample(R)], []);
  l.useEffect(() => {
    E.fetchDiscoverableGuilds([x, L])
  }, [x, L]);
  let [O, A] = (0, o.useStateFromStoresArray)([_.default], () => [_.default.getGuild(x), _.default.getGuild(L)], [x, L]), {
    canEnableDiscovery: p,
    isPendingSuccess: M
  } = (0, o.useStateFromStoresObject)([u.default], () => ({
    canEnableDiscovery: u.default.passesChecklist(t.id),
    isPendingSuccess: u.default.isPendingSuccess(t.id)
  }), [t.id]), [D, v] = (0, o.useStateFromStoresArray)([S.default], () => [null, S.default.getMemberCount(t.id)], [t.id]), j = l.useCallback(() => {
    null != s && s()
  }, [s]), G = null;
  return n ? M ? G = N.default.Messages.GUILD_SETTINGS_DISCOVERY_PENDING_HEALTHY : !p && (G = N.default.Messages.GUILD_SETTINGS_DISCOVERY_REQUIREMENTS_NOT_MET) : G = N.default.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY, (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)("img", {
      alt: "",
      src: h,
      className: g.sparkles
    }), (0, a.jsxs)("div", {
      className: g.discoverPreview,
      children: [(0, a.jsx)(I.default, {
        className: g.placeholderCard,
        disabled: !0,
        small: !0,
        loading: null == O,
        guild: O
      }), (0, a.jsx)(I.default, {
        className: g.previewCard,
        guild: t,
        description: N.default.Messages.GUILD_SETTINGS_DISCOVERY_PREVIEW_DESCRIPTION,
        presenceCount: D,
        memberCount: v
      }), (0, a.jsx)(I.default, {
        className: g.placeholderCard,
        disabled: !0,
        small: !0,
        loading: null == A,
        guild: A
      })]
    }), (0, a.jsx)(d.Heading, {
      className: g.header,
      variant: "heading-xl/semibold",
      children: N.default.Messages.GUILD_SETTINGS_DISCOVERY_HEADER
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      className: g.valueProp,
      color: "header-secondary",
      children: N.default.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION.format({
        onLinkClick: () => (0, T.navigateToAndTrackHelpCenterClick)({
          articleId: m.HelpdeskArticles.SERVER_DISCOVERY,
          guildId: t.id,
          pageView: c.DiscoverySettingsViews.INTRO
        })
      })
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      className: g.byline,
      color: "header-secondary",
      children: N.default.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION_SUBHEADING.format({
        onGuidelinesClick: () => (0, T.navigateToAndTrackHelpCenterClick)({
          articleId: m.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
          guildId: t.id,
          pageView: c.DiscoverySettingsViews.INTRO
        })
      })
    }), (0, a.jsx)(d.Tooltip, {
      text: G,
      children: e => (0, a.jsx)(d.Button, {
        ...e,
        className: g.enableButton,
        color: d.Button.Colors.BRAND,
        size: d.Button.Sizes.LARGE,
        disabled: !p || !n,
        onClick: j,
        children: N.default.Messages.GUILD_SETTINGS_SET_UP_DISCOVERY
      })
    }), (0, a.jsx)(f.default, {
      className: g.checklist,
      guild: t,
      guildId: t.id
    })]
  })
}