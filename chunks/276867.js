"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("483366"),
  u = n.n(r),
  o = n("65597"),
  d = n("233676"),
  c = n("77078"),
  f = n("454273"),
  h = n("120027"),
  m = n("412013"),
  p = n("592407"),
  E = n("978970"),
  g = n("26989"),
  S = n("305961"),
  C = n("957255"),
  _ = n("697218"),
  I = n("810567"),
  T = n("465305"),
  v = n("473073"),
  x = n("763225"),
  N = n("914275"),
  A = n("49111"),
  M = n("782340"),
  R = n("865331"),
  j = n("680153");

function L(e) {
  var t, n, s, r;
  let {
    permission: u,
    roleIds: g,
    guild: _,
    specMap: I,
    categoryTitle: T
  } = e, v = (0, o.useStateFromStores)([S.default], () => S.default.getRoles(_.id)), x = A.Permissions[u], R = null !== (s = null === (t = I[x.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, E.getPermissionName)(x), L = null !== (r = null === (n = I[x.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : "", y = N.ELEVATED_PERMISSIONS.has(x), O = N.MOD_PERMISSIONS.includes(u), P = g.length, D = (0, o.useStateFromStores)([C.default], () => C.default.can(A.Permissions.MANAGE_ROLES, _), [_]), b = l.useCallback(async e => {
    D && (await p.default.open(_.id, A.GuildSettingsSections.ROLES), await p.default.selectRole(e))
  }, [D, _.id]);
  return (0, a.jsxs)("div", {
    className: i(j.permissionItemContainer, {
      [j.elevatedPermission]: y
    }),
    children: [(0, a.jsxs)("div", {
      className: i(j.permissionItemHeader),
      children: [(0, a.jsxs)("div", {
        className: j.permissionTitle,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: R
        }), null != T && (0, a.jsxs)("div", {
          className: j.permissionItemSubheader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: T
          }), y && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, a.jsx)(c.Tooltip, {
              text: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
              children: e => (0, a.jsxs)(c.Clickable, {
                className: j.elevatedPermissionContainer,
                ...e,
                children: [(0, a.jsx)(d.ShieldLockIcon, {
                  width: 12,
                  height: 12,
                  color: c.tokens.colors.TEXT_BRAND
                }), (0, a.jsx)(c.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                })]
              })
            })]
          }), !y && O && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, a.jsx)("div", {
              className: j.elevatedPermissionContainer,
              children: (0, a.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
              })
            })]
          })]
        })]
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: P
        })
      })]
    }), null != L && (0, a.jsx)("div", {
      className: j.permissionItemDescription,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: L
      })
    }), (0, a.jsx)("div", {
      className: j.permissionItemRoleContainer,
      children: g.map(e => (0, a.jsx)(c.Clickable, {
        className: i(j.roleTooltipItem, {
          [j.editable]: D && !(0, f.isEveryoneRoleId)(_.id, e) && !(0, N.isOwnerRole)(e, _.id)
        }),
        onClick: () => b(e),
        children: (0, N.isOwnerRole)(e, _.id) ? (0, a.jsx)("div", {
          className: j.roleChiplet,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: M.default.Messages.GUILD_OWNER
          })
        }) : (0, a.jsx)(m.default, {
          role: v[e],
          guildId: _.id,
          className: j.roleChiplet
        })
      }, e))
    })]
  })
}

function y(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function O(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: r,
    onNavigate: d
  } = e, f = (0, o.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), h = (0, o.useStateFromStores)([S.default], () => S.default.getGuild(n), [n]), m = (0, o.useStateFromStores)([g.default], () => g.default.getMember(n, t), [n, t]), p = (0, x.useProfileThemedPanelBackground)(t, n), C = (0, N.useUserPermissionsAndRoles)(t, n, N.ALL_PERMISSIONS), O = Object.keys(C).length, P = l.useMemo(() => null != h ? T.default.getGuildPermissionSpecMap(h) : null, [h]), D = l.useMemo(() => null != h ? T.default.generateGuildPermissionSpec(h) : null, [h]), [b, U] = l.useState(""), [w, F] = l.useState(""), V = l.useCallback(u(F, 300), []), k = l.useCallback(e => {
    U(e), V(e)
  }, [V]), H = l.useCallback(() => {
    U(""), F("")
  }, []), G = l.useMemo(() => {
    if (null == h || null == P || null == m) return null;
    if (0 === O) return (0, a.jsx)("div", {
      className: i(j.permissionChiplet, j.noModPerms),
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == D || D.forEach(t => {
      t.permissions.forEach(n => {
        let l = n.flag,
          s = N.ALL_PERMISSIONS.find(e => A.Permissions[e] === l);
        if (null == s) return;
        let i = C[s];
        if (null != i) {
          if (w.length > 0) {
            var r, u, o, d, c;
            let e = null !== (d = null === (r = P[l.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== d ? d : (0, E.getPermissionName)(l),
              n = null !== (c = null === (o = P[l.toString()]) || void 0 === o ? void 0 : null === (u = o.description) || void 0 === u ? void 0 : u.toString()) && void 0 !== c ? c : "",
              a = t.title,
              i = N.ELEVATED_PERMISSIONS.has(l),
              f = N.MOD_PERMISSIONS.includes(s),
              h = i ? M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : f ? M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
              m = y(w, e),
              p = y(w, n),
              g = y(w, a),
              S = null != h && y(w, h);
            if (!m && !p && !g && !S) return
          }
          e.push((0, a.jsx)(L, {
            permission: s,
            roleIds: i,
            guild: h,
            specMap: P,
            categoryTitle: t.title
          }, s))
        }
      })
    }), e
  }, [h, P, m, O, D, C, w]);
  return null == f || null == m ? null : (0, a.jsxs)("div", {
    className: i(R.container, r),
    style: {
      backgroundColor: p
    },
    children: [(0, a.jsx)(v.default, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, a.jsx)(c.Scroller, {
      className: j.permissionsGroupContainer,
      children: (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: j.infoTitle,
        children: (0, a.jsxs)("div", {
          className: j.permissionsItemContainer,
          children: [(0, a.jsx)(I.default, {
            className: j.searchBar,
            query: b,
            placeholder: M.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: k,
            onClear: H,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), G]
        })
      })
    })]
  })
}