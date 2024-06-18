"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(392711),
  a = t.n(l),
  r = t(792986),
  o = t(442837),
  c = t(481060),
  d = t(946314),
  u = t(938502),
  E = t(967916),
  _ = t(68638),
  I = t(816817),
  T = t(219369),
  N = t(650774),
  m = t(845377),
  S = t(981631),
  h = t(689938),
  g = t(940362),
  x = t(716455);
let C = ["322850917248663552", "172018499005317120", "414234792121597953", "228406572756369408"],
  R = ["620723483965653003", "662246299369734154", "181970867549503489", "102860784329052160"];
s.Z = e => {
  let {
    guild: s,
    onEnableDiscovery: t,
    isGuildAdmin: l
  } = e, [L, O] = (0, r.Z)(() => [a().sample(C), a().sample(R)], []);
  i.useEffect(() => {
    E.z([L, O])
  }, [L, O]);
  let [A, p] = (0, o.Wu)([_.Z], () => [_.Z.getGuild(L), _.Z.getGuild(O)], [L, O]), {
    canEnableDiscovery: M,
    isPendingSuccess: f
  } = (0, o.cj)([d.ZP], () => ({
    canEnableDiscovery: d.ZP.passesChecklist(s.id),
    isPendingSuccess: d.ZP.isPendingSuccess(s.id)
  }), [s.id]), [v, D] = (0, o.Wu)([N.Z], () => [null, N.Z.getMemberCount(s.id)], [s.id]), Z = i.useCallback(() => {
    null != t && t()
  }, [t]), j = null;
  return l ? f ? j = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PENDING_HEALTHY : !M && (j = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_REQUIREMENTS_NOT_MET) : j = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY, (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)("img", {
      alt: "",
      src: x,
      className: g.sparkles
    }), (0, n.jsxs)("div", {
      className: g.discoverPreview,
      children: [(0, n.jsx)(I.Z, {
        className: g.placeholderCard,
        disabled: !0,
        small: !0,
        loading: null == A,
        guild: A
      }), (0, n.jsx)(I.Z, {
        className: g.previewCard,
        guild: s,
        description: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PREVIEW_DESCRIPTION,
        presenceCount: v,
        memberCount: D
      }), (0, n.jsx)(I.Z, {
        className: g.placeholderCard,
        disabled: !0,
        small: !0,
        loading: null == p,
        guild: p
      })]
    }), (0, n.jsx)(c.Heading, {
      className: g.header,
      variant: "heading-xl/semibold",
      children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_HEADER
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      className: g.valueProp,
      color: "header-secondary",
      children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION.format({
        onLinkClick: () => (0, T.lW)({
          articleId: S.BhN.SERVER_DISCOVERY,
          guildId: s.id,
          pageView: u.d5.INTRO
        })
      })
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      className: g.byline,
      color: "header-secondary",
      children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION_SUBHEADING.format({
        onGuidelinesClick: () => (0, T.lW)({
          articleId: S.BhN.SERVER_DISCOVERY_GUIDELINES,
          guildId: s.id,
          pageView: u.d5.INTRO
        })
      })
    }), (0, n.jsx)(c.Tooltip, {
      text: j,
      children: e => (0, n.jsx)(c.Button, {
        ...e,
        className: g.enableButton,
        color: c.Button.Colors.BRAND,
        size: c.Button.Sizes.LARGE,
        disabled: !M || !l,
        onClick: Z,
        children: h.Z.Messages.GUILD_SETTINGS_SET_UP_DISCOVERY
      })
    }), (0, n.jsx)(m.Z, {
      className: g.checklist,
      guild: s,
      guildId: s.id
    })]
  })
}