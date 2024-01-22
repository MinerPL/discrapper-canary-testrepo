"use strict";
n.r(t), n.d(t, {
  GuildSelector: function() {
    return _
  },
  WebhookGuildChannelSelector: function() {
    return h
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("316693"),
  a = n("605451"),
  o = n("774811"),
  l = n("577776"),
  u = n("8222"),
  d = n("49111"),
  c = n("782340"),
  f = n("246097");

function _(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: s,
    guilds: u,
    disabled: _ = !1
  } = e, h = u.filter(e => r.default.has(e.permissions, d.Permissions.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, i.jsxs)("div", {
    className: f.selectorGroup,
    children: [(0, i.jsx)(a.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: f.sectionLabel,
      children: c.default.Messages.OAUTH2_ADD_TO_GUILD
    }), null != t && "" !== t ? (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: t
    }) : null, (0, i.jsx)(o.SearchableSelect, {
      wrapperClassName: f.wrapper,
      className: f.select,
      maxVisibleItems: 5,
      value: n,
      placeholder: c.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
      options: h,
      onChange: e => {
        s(e)
      },
      isDisabled: _
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      className: f.label,
      children: c.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
    })]
  })
}

function h(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: n,
    onChannelChange: r,
    error: d
  } = e, [_, h] = s.useState(null);
  s.useEffect(() => {
    (async function e() {
      if (null != t) {
        let e = await (0, u.fetchChannels)(t);
        h(e)
      }
    })()
  }, [t]), s.useEffect(() => {
    null != _ && null != n && null == _.find(e => e.id === n) && r(null)
  }, [_, r, n]);
  let g = (null != _ ? _ : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return null == t ? null : (0, i.jsxs)("div", {
    className: f.selectorGroup,
    children: [(0, i.jsx)(a.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: f.sectionLabel,
      children: c.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
    }), null != d && "" !== d ? (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: d
    }) : null, (0, i.jsx)(o.SearchableSelect, {
      wrapperClassName: f.wrapper,
      className: f.select,
      maxVisibleItems: 5,
      onChange: e => {
        r(e)
      },
      placeholder: c.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
      value: n,
      options: g
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      className: f.label,
      children: c.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
    })]
  })
}