"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("808653"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("448105"),
  s = n.n(l),
  u = n("917351"),
  o = n.n(u),
  a = n("316693"),
  d = n("446674"),
  c = n("77078"),
  f = n("26989"),
  S = n("305961"),
  E = n("697218"),
  h = n("991170"),
  _ = n("299039"),
  g = n("479756"),
  p = n("38654"),
  C = n("507950"),
  I = n("49111"),
  m = n("782340"),
  T = n("29124");

function v(e) {
  var t;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function R(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), l = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), u = (0, d.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: R,
    viewingRoles: N
  } = (0, d.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), M = R === C.ImpersonateType.SERVER_SHOP, O = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [A, L] = (0, c.useMultiSelect)(null == N ? [] : _.default.keys(N)), b = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      t = b.current;
    if (null != t && null != R) {
      for (let t of A) {
        let n = u[t];
        null != n && (e[t] = n)
      }(0, g.updateImpersonating)(t.id, {
        type: R,
        roles: e
      })
    }
  }, [A, R, u]);
  let x = null != l && null != n && null != O ? o(u).filter(e => -1 !== O.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    P = r.useMemo(() => null != l && null != n ? Object.values(u).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !M || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == x ? void 0 : x.id) === e.id || h.isRoleHigher(l, n.id, x, e)) : [], [l, n, M, x, u]);
  if (null == n || null == l || null == O) return null;
  let D = {};
  O.roles.forEach(e => {
    let t = u[e];
    null != t && (D[t.id] = t)
  });
  let G = a.has(h.computePermissionsForRoles({
    forceRoles: D,
    context: l
  }), a.combine(I.Permissions.MANAGE_GUILD, I.Permissions.MANAGE_ROLES));
  return G || l.isOwner(n.id) ? (0, i.jsx)("div", {
    className: T.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: m.default.Messages.SEARCH_ROLES,
      value: A,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = P.reduce((t, n) => (s(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, i.jsx)(c.ComboboxItem.Label, {
              children: v(n)
            }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = u[l.getEveryoneRoleId()];
        return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, i.jsx)(c.ComboboxItem.Label, {
            children: v(n)
          }), (0, i.jsx)(c.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, i.jsx)(c.Text, {
    variant: "text-md/medium",
    children: m.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}