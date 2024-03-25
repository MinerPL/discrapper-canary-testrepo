"use strict";
n.r(t), n.d(t, {
  mentionUser: function() {
    return p
  },
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("446674"),
  r = n("77078"),
  u = n("352674"),
  i = n("42203"),
  d = n("957255"),
  l = n("18494"),
  o = n("659500"),
  c = n("158998"),
  f = n("49111"),
  m = n("782340");

function p(e, t) {
  let {
    id: n
  } = e, a = "@".concat(c.default.getUserTag(e, {
    decoration: "never"
  }));
  o.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
    plainText: a,
    rawText: "<@".concat(n, ">")
  }), null != t && u.default.startTyping(t)
}

function h(e, t, n) {
  let [u, o] = (0, s.useStateFromStoresArray)([l.default, i.default, d.default], () => {
    let e = l.default.getChannelId(t),
      n = i.default.getChannel(e),
      a = null != n && (n.isMultiUserDM() || d.default.can(f.Permissions.SEND_MESSAGES, n));
    return [e, a]
  }, [t]), c = n === f.AppContext.POPOUT;
  return !o || c ? null : (0, a.jsx)(r.MenuItem, {
    id: "mention",
    label: m.default.Messages.MENTION,
    action: function() {
      p(e, u)
    }
  })
}