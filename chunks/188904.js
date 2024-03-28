"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("442837"),
  i = a("481060"),
  d = a("249842"),
  r = a("838367"),
  u = a("752916"),
  o = a("689938"),
  c = a("314422");

function f(e) {
  let {
    guild: t
  } = e;
  n.useEffect(() => {
    (0, d.fetchGuildForPopout)(t.id)
  }, [t.id]);
  let a = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.id), [t]);
  return (0, l.jsxs)("div", {
    className: c.memberInfo,
    children: [t.hasCommunityInfoSubheader() && (0, l.jsxs)("div", {
      className: c.memberCount,
      children: [(0, l.jsx)(u.default, {
        width: 14,
        height: 14
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
      })]
    }), (null == a ? void 0 : a.presenceCount) != null && (0, l.jsxs)("div", {
      className: c.memberCount,
      children: [(0, l.jsx)("div", {
        className: c.dotOnline
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
          membersOnline: a.presenceCount
        })
      })]
    }), (null == a ? void 0 : a.memberCount) != null && (0, l.jsxs)("div", {
      className: c.memberCount,
      children: [(0, l.jsx)("div", {
        className: c.dotOffline
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
          members: a.memberCount
        })
      })]
    })]
  })
}
t.default = n.memo(function(e) {
  let {
    guild: t
  } = e;
  return (0, l.jsx)("div", {
    className: c.container,
    children: (0, l.jsxs)(i.HeadingLevel, {
      component: (0, l.jsx)("div", {
        className: c.__invalid_header,
        children: (0, l.jsx)(i.Heading, {
          variant: "heading-md/bold",
          children: o.default.Messages.GUILD_HOME_ABOUT
        })
      }),
      children: [null != t.description ? (0, l.jsx)(i.Text, {
        className: c.description,
        variant: "text-md/normal",
        children: t.description
      }) : null, (0, l.jsx)(f, {
        guild: t
      })]
    })
  })
})