"use strict";
t.d(s, {
  Z: function() {
    return _
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(399606),
  a = t(481060),
  r = t(279542),
  o = t(496675),
  c = t(140031),
  d = t(981631),
  u = t(689938),
  E = t(740637);

function _(e) {
  let {
    guild: s
  } = e, t = i.useId(), _ = (0, l.e7)([o.Z], () => null != s && o.Z.can(d.Plq.MANAGE_GUILD, s), [s]), I = s.hasFeature(d.oNc.COMMUNITY), [T, N] = i.useState(s.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), m = i.useCallback(async e => {
    N(e), await (0, r.fp)(s, e)
  }, [s]);
  return I ? null : (0, n.jsxs)("div", {
    className: E.bannerContainer,
    children: [(0, n.jsx)(c.Z, {
      width: 64,
      height: 64
    }), (0, n.jsxs)("div", {
      className: E.headingContainer,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: u.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: u.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
      })]
    }), (0, n.jsx)("div", {
      className: E.buttonContainer,
      children: (0, n.jsx)(a.Switch, {
        id: t,
        checked: T,
        onChange: m,
        disabled: !_
      })
    })]
  })
}