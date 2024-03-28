"use strict";
n.r(t), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("399606"),
  o = n("465270"),
  u = n("836957"),
  d = n("481060"),
  c = n("285173"),
  f = n("422559"),
  h = n("430824"),
  m = n("233608"),
  p = n("776767"),
  E = n("351127"),
  C = n("50493"),
  g = n("981631"),
  S = n("689938"),
  _ = n("754542");

function T(e) {
  var t, n;
  let {
    permission: l,
    roleIds: s,
    guild: o,
    specMap: m
  } = e, p = g.Permissions[l], C = null !== (n = null === (t = m[p.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, f.getPermissionName)(p), T = E.ELEVATED_PERMISSIONS.has(p), I = (0, r.useStateFromStores)([h.default], () => h.default.getRoles(o.id));
  return (0, a.jsx)(d.Tooltip, {
    "aria-label": S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
    tooltipClassName: _.roleTooltipContainer,
    tooltipContentClassName: _.roleTooltipContentContainer,
    allowOverflow: !0,
    text: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: T ? S.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
      }), s.map(e => (0, a.jsx)("div", {
        className: i()(_.roleTooltipItem),
        children: (0, a.jsx)(c.default, {
          role: I[e],
          guildId: o.id
        })
      }, e))]
    }),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, a.jsxs)(d.Clickable, {
        className: i()(_.permissionChiplet, {
          [_.elevatedPermission]: T
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: [T && (0, a.jsx)(u.ShieldLockIcon, {
          width: 16,
          height: 16,
          color: d.tokens.colors.TEXT_BRAND
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C
        })]
      })
    }
  })
}
t.default = l.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.guildId), [t.guildId]), u = (0, E.useUserPermissionsAndRoles)(t.userId, t.guildId, E.MOD_PERMISSIONS), c = (0, E.useUserPermissionsAndRoles)(t.userId, t.guildId, E.ALL_PERMISSIONS), f = Object.keys(u).length, I = Object.keys(c).length, A = l.useMemo(() => null != s ? m.default.getGuildPermissionSpecMap(s) : null, [s]), v = l.useMemo(() => null != s ? m.default.generateGuildPermissionSpec(s) : null, [s]), N = l.useMemo(() => {
    if (null == s || null == A) return null;
    if (0 === f) return (0, a.jsx)("div", {
      className: i()(_.permissionChiplet, _.noModPerms),
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == v || v.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = E.ALL_PERMISSIONS.find(e => g.Permissions[e] === n);
        if (null == l) return;
        let i = u[l];
        null != i && e.push((0, a.jsx)(T, {
          permission: l,
          roleIds: i,
          guild: s,
          specMap: A
        }, l))
      })
    }), e
  }, [s, f, u, v, A]);
  return null == s ? null : (0, a.jsx)(d.FormItem, {
    title: (0, a.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
      }), (0, a.jsxs)(d.Clickable, {
        className: _.viewAllPermissions,
        onClick: () => n(C.ModViewPanel.PERMISSIONS),
        children: [(0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({
            count: I
          })
        }), (0, a.jsx)(o.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })]
    }),
    titleClassName: _.__invalid_infoTitle,
    children: (0, a.jsx)(p.UserModInfoItemContainer, {
      children: (0, a.jsx)(p.UserModInfoItem, {
        description: (0, a.jsx)("div", {
          className: _.permissionsContainer,
          children: N
        })
      })
    })
  })
})