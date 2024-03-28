"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  mentionUser: function() {
    return T
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("442837"),
  u = n("481060"),
  l = n("144144"),
  d = n("592125"),
  r = n("496675"),
  s = n("944486"),
  o = n("585483"),
  c = n("51144"),
  E = n("981631"),
  f = n("689938");

function T(e, t) {
  let {
    id: n
  } = e, i = "@".concat(c.default.getUserTag(e, {
    decoration: "never"
  }));
  o.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(n, ">")
  }), null != t && l.default.startTyping(t)
}

function _(e, t, n) {
  let [l, o] = (0, a.useStateFromStoresArray)([s.default, d.default, r.default], () => {
    let e = s.default.getChannelId(t),
      n = d.default.getChannel(e);
    return [e, null != n && (n.isMultiUserDM() || r.default.can(E.Permissions.SEND_MESSAGES, n))]
  }, [t]), c = n === E.AppContext.POPOUT;
  return !o || c ? null : (0, i.jsx)(u.MenuItem, {
    id: "mention",
    label: f.default.Messages.MENTION,
    action: function() {
      T(e, l)
    }
  })
}