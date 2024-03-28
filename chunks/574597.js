"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("866442"),
  u = n("481060"),
  o = n("129861"),
  i = n("829883"),
  r = n("518738"),
  d = n("14263"),
  c = n("592125"),
  m = n("430824"),
  p = n("158776"),
  f = n("594174"),
  E = n("964309"),
  C = n("241820"),
  S = n("176278"),
  T = n("970184"),
  v = n("280501"),
  N = n("811654"),
  h = n("344991"),
  _ = n("981631"),
  I = n("41865");

function g(e) {
  var t;
  let n = (0, T.useComponentStateContext)(),
    g = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
    O = c.default.getChannel(g),
    x = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
    y = (0, d.default)(null == x ? void 0 : x.id, N.MIN_REREQUEST_TIME),
    L = a.useMemo(() => (0, N.getSnowflakeSelectDefaultValues)(e.defaultValues, null == x ? void 0 : x.id), [e.defaultValues, x]);
  return (0, l.jsx)(h.default, {
    selectActionComponent: e,
    queryOptions: t => (0, N.queryMentionables)(e.type, t, g),
    renderIcon: (e, t) => {
      let n = t === h.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === v.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(u.Avatar, {
          size: n ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == x ? void 0 : x.id, t),
          status: n ? null : p.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === v.SelectOptionType.ROLE) {
        var a;
        let n = null != x ? m.default.getRole(x.id, e.value) : void 0;
        if (null == n || null == x) return;
        let u = (0, i.canGuildUseRoleIcons)(x, n) ? (0, r.getRoleIconProps)(n, t) : null;
        return null != u ? (0, l.jsx)(S.default, {
          ...u
        }) : (0, l.jsx)(C.default, {
          color: null !== (a = n.colorString) && void 0 !== a ? a : (0, s.int2hex)(_.DEFAULT_ROLE_COLOR),
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === v.SelectOptionType.USER) {
        let n = f.default.getUser(e.value);
        null != n && (t = (0, l.jsx)(o.default, {
          className: I.tag,
          usernameClass: I.username,
          discriminatorClass: I.discriminator,
          botClass: I.bot,
          user: n,
          forceUsername: !0
        }))
      } else if (e.type === v.SelectOptionType.ROLE) {
        let n = null != x ? m.default.getRole(x.id, e.value) : void 0,
          a = null == n ? null : null == y ? void 0 : y[n.id];
        null != a && (t = (0, l.jsxs)("div", {
          className: I.roleCountContainer,
          children: [(0, l.jsx)(E.default, {
            className: I.roleCountIcon,
            height: 18,
            width: 18
          }), (0, l.jsx)("span", {
            className: I.roleCountText,
            children: a
          })]
        }))
      }
      return (0, l.jsxs)("span", {
        className: I.label,
        children: [(0, l.jsx)("span", {
          className: I.labelText,
          children: e.label
        }), t]
      })
    },
    defaultValues: L
  })
}