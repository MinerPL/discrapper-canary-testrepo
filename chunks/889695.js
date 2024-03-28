"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("724458"), n("653041");
var r = n("735250"),
  i = n("470079"),
  l = n("658722"),
  s = n.n(l),
  o = n("392711"),
  u = n.n(o),
  a = n("149765"),
  c = n("442837"),
  d = n("481060"),
  f = n("271383"),
  S = n("430824"),
  g = n("594174"),
  h = n("700785"),
  E = n("709054"),
  p = n("962086"),
  _ = n("160404"),
  m = n("225675"),
  C = n("981631"),
  I = n("689938"),
  T = n("591174");

function v(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, c.useStateFromStores)([g.default], () => g.default.getCurrentUser()), l = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t)), o = (0, c.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: N,
    viewingRoles: R
  } = (0, c.useStateFromStoresObject)([_.default], () => ({
    impersonateType: _.default.getImpersonateType(t),
    viewingRoles: _.default.getViewingRoles(t)
  })), M = N === m.ImpersonateType.SERVER_SHOP, b = (0, c.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [A, O] = (0, d.useMultiSelect)(null == R ? [] : E.default.keys(R)), L = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = L.current;
    if (null != t && null != N) {
      for (let t of A) {
        let n = o[t];
        null != n && (e[t] = n)
      }(0, p.updateImpersonating)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [A, N, o]);
  let x = null != l && null != n && null != b ? u()(o).filter(e => -1 !== b.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    P = i.useMemo(() => null != l && null != n ? Object.values(o).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !M || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == x ? void 0 : x.id) === e.id || h.isRoleHigher(l, n.id, x, e)) : [], [l, n, M, x, o]);
  if (null == n || null == l || null == b) return null;
  let y = {};
  return (b.roles.forEach(e => {
    let t = o[e];
    null != t && (y[t.id] = t)
  }), a.has(h.computePermissionsForRoles({
    forceRoles: y,
    context: l
  }), a.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: T.container,
    children: (0, r.jsx)(d.Combobox, {
      placeholder: I.default.Messages.SEARCH_ROLES,
      value: A,
      onChange: O,
      autoFocus: !0,
      children: e => {
        let t = P.reduce((t, n) => (s()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.ComboboxItem, {
            value: n.id,
            children: [(0, r.jsx)(d.ComboboxItem.Label, {
              children: v(n)
            }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = o[l.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.ComboboxItem.Label, {
            children: v(n)
          }), (0, r.jsx)(d.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: I.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}