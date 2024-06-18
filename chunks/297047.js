"use strict";
n.d(t, {
  Z: function() {
    return T
  },
  q: function() {
    return I
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(144144),
  a = n(592125),
  l = n(496675),
  u = n(944486),
  _ = n(585483),
  d = n(51144),
  c = n(981631),
  E = n(689938);

function I(e, t) {
  let {
    id: n
  } = e, i = "@".concat(d.ZP.getUserTag(e, {
    decoration: "never"
  }));
  _.S.dispatchToLastSubscribed(c.CkL.INSERT_TEXT, {
    plainText: i,
    rawText: "<@".concat(n, ">")
  }), null != t && o.Z.startTyping(t)
}

function T(e, t, n) {
  let [o, _] = (0, r.Wu)([u.Z, a.Z, l.Z], () => {
    let e = u.Z.getChannelId(t),
      n = a.Z.getChannel(e);
    return [e, null != n && (n.isMultiUserDM() || l.Z.can(c.Plq.SEND_MESSAGES, n))]
  }, [t]), d = n === c.IlC.POPOUT;
  return !_ || d ? null : (0, i.jsx)(s.MenuItem, {
    id: "mention",
    label: E.Z.Messages.MENTION,
    action: function() {
      I(e, o)
    }
  })
}