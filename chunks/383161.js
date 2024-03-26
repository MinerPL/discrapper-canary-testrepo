"use strict";
t.r(n), t.d(n, {
  mentionUser: function() {
    return _
  },
  default: function() {
    return m
  }
}), t("222007");
var i = t("37983");
t("884691");
var l = t("446674"),
  u = t("77078"),
  r = t("352674"),
  a = t("42203"),
  o = t("957255"),
  d = t("18494"),
  s = t("659500"),
  c = t("158998"),
  f = t("49111"),
  E = t("782340");

function _(e, n) {
  let {
    id: t
  } = e, i = "@".concat(c.default.getUserTag(e, {
    decoration: "never"
  }));
  s.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(t, ">")
  }), null != n && r.default.startTyping(n)
}

function m(e, n, t) {
  let [r, s] = (0, l.useStateFromStoresArray)([d.default, a.default, o.default], () => {
    let e = d.default.getChannelId(n),
      t = a.default.getChannel(e),
      i = null != t && (t.isMultiUserDM() || o.default.can(f.Permissions.SEND_MESSAGES, t));
    return [e, i]
  }, [n]), c = t === f.AppContext.POPOUT;
  return !s || c ? null : (0, i.jsx)(u.MenuItem, {
    id: "mention",
    label: E.default.Messages.MENTION,
    action: function() {
      _(e, r)
    }
  })
}