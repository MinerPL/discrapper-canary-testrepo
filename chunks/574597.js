"use strict";
t.r(n), t.d(n, {
  default: function() {
    return y
  }
});
var l = t("735250"),
  a = t("470079"),
  r = t("866442"),
  u = t("481060"),
  s = t("129861"),
  o = t("829883"),
  i = t("518738"),
  d = t("14263"),
  c = t("592125"),
  m = t("430824"),
  p = t("158776"),
  f = t("594174"),
  C = t("964309"),
  S = t("241820"),
  E = t("176278"),
  v = t("970184"),
  N = t("280501"),
  h = t("811654"),
  T = t("344991"),
  g = t("981631"),
  x = t("743002");

function y(e) {
  var n;
  let t = (0, v.useComponentStateContext)(),
    y = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
    O = c.default.getChannel(y),
    I = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
    j = (0, d.default)(null == I ? void 0 : I.id, h.MIN_REREQUEST_TIME),
    _ = a.useMemo(() => (0, h.getSnowflakeSelectDefaultValues)(e.defaultValues, null == I ? void 0 : I.id), [e.defaultValues, I]);
  return (0, l.jsx)(T.default, {
    selectActionComponent: e,
    queryOptions: n => (0, h.queryMentionables)(e.type, n, y),
    renderIcon: (e, n) => {
      let t = n === T.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(u.Avatar, {
          size: t ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == I ? void 0 : I.id, n),
          status: t ? null : p.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.ROLE) {
        var a;
        let t = null != I ? m.default.getRole(I.id, e.value) : void 0;
        if (null == t || null == I) return;
        let u = (0, o.canGuildUseRoleIcons)(I, t) ? (0, i.getRoleIconProps)(t, n) : null;
        return null != u ? (0, l.jsx)(E.default, {
          ...u
        }) : (0, l.jsx)(S.default, {
          color: null !== (a = t.colorString) && void 0 !== a ? a : (0, r.int2hex)(g.DEFAULT_ROLE_COLOR),
          height: n,
          width: n
        })
      }
    },
    renderOptionLabel: e => {
      let n = null;
      if (e.type === N.SelectOptionType.USER) {
        let t = f.default.getUser(e.value);
        null != t && (n = (0, l.jsx)(s.default, {
          className: x.tag,
          usernameClass: x.username,
          discriminatorClass: x.discriminator,
          botClass: x.bot,
          user: t,
          forceUsername: !0
        }))
      } else if (e.type === N.SelectOptionType.ROLE) {
        let t = null != I ? m.default.getRole(I.id, e.value) : void 0,
          a = null == t ? null : null == j ? void 0 : j[t.id];
        null != a && (n = (0, l.jsxs)("div", {
          className: x.roleCountContainer,
          children: [(0, l.jsx)(C.default, {
            className: x.roleCountIcon,
            height: 18,
            width: 18
          }), (0, l.jsx)("span", {
            className: x.roleCountText,
            children: a
          })]
        }))
      }
      return (0, l.jsxs)("span", {
        className: x.label,
        children: [(0, l.jsx)("span", {
          className: x.labelText,
          children: e.label
        }), n]
      })
    },
    defaultValues: _
  })
}