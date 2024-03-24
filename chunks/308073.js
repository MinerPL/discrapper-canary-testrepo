"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("65597"),
  i = s("77078"),
  r = s("817674"),
  o = s("957255"),
  d = s("841803"),
  u = s("49111"),
  c = s("782340"),
  E = s("413631");

function _(e) {
  let {
    guild: t
  } = e, s = l.useId(), _ = (0, n.useStateFromStores)([o.default], () => null != t && o.default.can(u.Permissions.MANAGE_GUILD, t), [t]), I = t.hasFeature(u.GuildFeatures.COMMUNITY), [T, S] = l.useState(t.hasFeature(u.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), f = l.useCallback(async e => {
    S(e), await (0, r.toggleModerationExperienceGuildFeature)(t, e)
  }, [t]);
  return I ? null : (0, a.jsxs)("div", {
    className: E.bannerContainer,
    children: [(0, a.jsx)(d.default, {
      width: 64,
      height: 64
    }), (0, a.jsxs)("div", {
      className: E.headingContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: c.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: c.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
      })]
    }), (0, a.jsx)("div", {
      className: E.buttonContainer,
      children: (0, a.jsx)(i.Switch, {
        id: s,
        checked: T,
        onChange: f,
        disabled: !_
      })
    })]
  })
}