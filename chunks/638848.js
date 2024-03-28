"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("442837"),
  i = a("481060"),
  d = a("249842"),
  r = a("838367"),
  u = a("346656"),
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
    children: [(null == a ? void 0 : a.presenceCount) != null ? (0, l.jsxs)("div", {
      className: c.memberCount,
      children: [(0, l.jsx)("div", {
        className: c.dotOnline
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: c.__invalid_memberText,
        children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
          membersOnline: a.presenceCount
        })
      })]
    }) : null, (null == a ? void 0 : a.memberCount) != null ? (0, l.jsxs)("div", {
      className: c.memberCount,
      children: [(0, l.jsx)("div", {
        className: c.dotOffline
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: c.__invalid_memberText,
        children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
          members: a.memberCount
        })
      })]
    }) : null]
  })
}
t.default = n.memo(function(e) {
  let {
    guild: t
  } = e;
  return (0, l.jsxs)("div", {
    className: c.container,
    children: [(0, l.jsx)("div", {
      className: c.iconWrapper,
      children: (0, l.jsx)(u.default, {
        className: c.icon,
        guild: t,
        size: u.default.Sizes.LARGER,
        active: !0
      })
    }), (0, l.jsx)(i.Text, {
      tag: "div",
      className: c.name,
      variant: "heading-xl/semibold",
      children: t.name
    }), null != t.description ? (0, l.jsx)(i.Text, {
      className: c.description,
      variant: "text-md/normal",
      children: t.description
    }) : null, (0, l.jsx)(f, {
      guild: t
    })]
  })
})