"use strict";
s.r(t), s.d(t, {
  GuildSettingsMembersRow: function() {
    return S
  },
  default: function() {
    return f
  }
});
var a = s("735250");
s("470079");
var l = s("392711"),
  n = s("442837"),
  i = s("481060"),
  r = s("241559"),
  o = s("527379"),
  d = s("313364"),
  u = s("441957"),
  c = s("434404"),
  E = s("999382"),
  _ = s("981631"),
  I = s("689938"),
  T = s("983551");

function S() {
  var e;
  let t = (0, n.useStateFromStores)([E.default], () => E.default.getProps().guild, []),
    s = null !== (e = null == t ? void 0 : t.isCommunity()) && void 0 !== e && e;
  return (0, a.jsxs)(i.Clickable, {
    onClick: e => {
      null != t && (s ? (e.preventDefault(), c.default.close(), (0, o.goToMemberSafetyDashboard)(t.id)) : c.default.open(t.id, _.GuildSettingsSections.MEMBERS))
    },
    className: T.rowContainer,
    children: [(0, a.jsx)("div", {
      children: I.default.Messages.MEMBERS
    }), s && (0, a.jsx)(u.default, {
      className: T.linkIcon,
      width: 16,
      height: 16
    })]
  })
}

function f() {
  var e;
  let {
    guild: t
  } = (0, n.useStateFromStores)([E.default], () => E.default.getProps(), [], l.isEqual), s = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : _.EMPTY_STRING_SNOWFLAKE_ID;
  return (0, r.useCanAccessMemberSafetyPage)(s) ? (0, a.jsx)(d.default, {
    guildId: s
  }) : null
}