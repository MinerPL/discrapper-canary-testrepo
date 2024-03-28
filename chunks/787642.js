"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("212093"),
  r = n("703656"),
  o = n("920440"),
  u = n("430824"),
  d = n("104259"),
  c = n("626135"),
  f = n("768581"),
  E = n("125631"),
  h = n("981631"),
  _ = n("689938"),
  C = n("374307");

function m(e, t, n) {
  return (0, a.jsxs)("button", {
    className: C.container,
    onClick: n,
    children: ["function" == typeof e ? (0, a.jsx)("div", {
      className: C.icon,
      children: (0, a.jsx)(e, {
        className: C.__invalid_iconInner,
        color: l.tokens.colors.WHITE.css
      })
    }) : (0, a.jsx)("img", {
      className: C.icon,
      alt: "",
      src: e
    }), (0, a.jsx)(l.Text, {
      className: C.text,
      variant: "text-md/medium",
      children: t
    }), (0, a.jsx)(E.default, {
      className: C.arrow
    })]
  }, t)
}

function S() {
  let e = Object.values(u.default.getGuilds()).filter(e => e.hasFeature(h.GuildFeatures.HUB)),
    t = e => {
      c.default.track(h.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
        guild_id: e
      }), (0, o.transitionToGuild)(e)
    };
  return (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)("header", {
      className: C.header,
      children: (0, a.jsx)(l.FormTitle, {
        tag: "h2",
        className: C.title,
        children: _.default.Messages.ADD_FRIEND_MAKE_FRIENDS
      })
    }), (0, a.jsxs)("div", {
      className: C.grid,
      children: [e.map(e => m(f.default.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        t(e.id)
      })), m(d.default, _.default.Messages.ADD_FRIEND_EXPLORE_PUBLIC_SERVERS, () => {
        (0, i.clearSearch)(), c.default.track(h.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, r.transitionTo)(h.Routes.GUILD_DISCOVERY)
      })]
    })]
  })
}