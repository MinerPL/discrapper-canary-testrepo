"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  i = n("481060"),
  u = n("434404"),
  d = n("147754"),
  s = n("939863"),
  r = n("430824"),
  o = n("496675"),
  c = n("305878"),
  f = n("981631"),
  E = n("689938"),
  g = n("496751");

function v(e) {
  let {
    guildId: t,
    onClose: n
  } = e, {
    showHubEventsList: v
  } = d.default.useExperiment({
    guildId: t,
    location: "6597ca_1"
  }, {
    autoTrackExposure: !1
  }), h = (0, a.useStateFromStores)([r.default, o.default], () => {
    let e = r.default.getGuild(t);
    return o.default.can(f.Permissions.MANAGE_ROLES, e)
  }, [t]), m = (0, a.useStateFromStores)([r.default], () => {
    let e = r.default.getGuild(t);
    return v && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
  }, [t, v]);
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(s.default, {
      children: (0, l.jsx)("div", {
        className: g.circle,
        children: (0, l.jsx)(c.default, {
          height: 40,
          width: 40,
          className: g.icon
        })
      })
    }), (0, l.jsx)(i.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: g.title,
      children: m ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: g.subtitle,
      children: m ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
    }), h && (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: g.roleTip,
      children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
        onClick: () => {
          u.default.open(t, f.GuildSettingsSections.ROLES), n()
        }
      })
    })]
  })
}