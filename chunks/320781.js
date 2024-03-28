"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("995123"),
  r = n("456269"),
  o = n("660189"),
  u = n("257511"),
  d = n("634648"),
  c = n("967128"),
  f = n("689938"),
  h = n("420000");

function m(e) {
  var t;
  let {
    channel: n
  } = e, m = (0, r.useAppliedTags)(n), {
    firstMessage: p
  } = (0, l.useStateFromStoresObject)([o.default], () => o.default.getMessage(n.id)), E = new Set((0, r.useVisibleAppliedForumTags)(n, m)), C = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : d.default;
  return (0, a.jsxs)(c.default, {
    channelId: n.id,
    className: h.container,
    children: [(0, a.jsx)("div", {
      className: h.iconWrapper,
      children: (0, a.jsx)(C, {
        className: h.icon,
        strokeWidth: 1.75
      })
    }), (0, a.jsx)(c.EmptyMessageHeader, {
      className: h.header,
      children: n.name
    }), null == p && (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: f.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
    }), (0, a.jsx)(u.default, {
      appliedTags: E
    })]
  })
}