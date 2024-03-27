"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  a = n("592407"),
  r = n("27978"),
  d = n("119184"),
  s = n("305961"),
  o = n("957255"),
  c = n("943232"),
  f = n("49111"),
  E = n("782340"),
  v = n("801813");

function g(e) {
  let {
    guildId: t,
    onClose: n
  } = e, {
    showHubEventsList: g
  } = r.default.useExperiment({
    guildId: t,
    location: "6597ca_1"
  }, {
    autoTrackExposure: !1
  }), S = (0, u.useStateFromStores)([s.default, o.default], () => {
    let e = s.default.getGuild(t);
    return o.default.can(f.Permissions.MANAGE_ROLES, e)
  }, [t]), h = (0, u.useStateFromStores)([s.default], () => {
    let e = s.default.getGuild(t);
    return g && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
  }, [t, g]);
  return (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: v.circle,
        children: (0, l.jsx)(c.default, {
          height: 40,
          width: 40,
          className: v.icon
        })
      })
    }), (0, l.jsx)(i.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: v.title,
      children: h ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.subtitle,
      children: h ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
    }), S && (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.roleTip,
      children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
        onClick: () => {
          a.default.open(t, f.GuildSettingsSections.ROLES), n()
        }
      })
    })]
  })
}