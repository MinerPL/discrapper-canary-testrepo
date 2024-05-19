"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("653041"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("149765"),
  i = l("442837"),
  r = l("481060"),
  o = l("749210"),
  d = l("412899"),
  u = l("995648"),
  c = l("422559"),
  f = l("598077"),
  m = l("271383"),
  I = l("430824"),
  T = l("467679"),
  N = l("285952"),
  E = l("823379"),
  S = l("700785"),
  g = l("689938"),
  p = l("69674");

function h(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: h
  } = e, _ = (0, i.useStateFromStores)([I.default], () => I.default.getRoles(l.id)), {
    application: O
  } = h, A = null != O.bot ? new f.default(O.bot) : null, C = (0, i.useStateFromStores)([m.default], () => null != A ? m.default.getMember(l.id, A.id) : null, [A, l]), x = null == A ? void 0 : A.id;
  a.useEffect(() => {
    null != x && o.default.requestMembersById(l.id, x)
  }, [l.id, x]);
  let R = a.useMemo(() => {
    var e, t, n;
    let a = _[l.getEveryoneRoleId()],
      i = null !== (t = null == C ? void 0 : null === (e = C.roles) || void 0 === e ? void 0 : e.map(e => _[e]).filter(E.isNotNullish)) && void 0 !== t ? t : [],
      r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : S.NONE;
    for (let e of i) r = s.add(r, e.permissions);
    return r
  }, [l, _, C]);
  return null == A ? null : (0, n.jsx)(r.Card, {
    editable: !0,
    className: p.card,
    children: (0, n.jsxs)(N.default, {
      direction: N.default.Direction.VERTICAL,
      children: [(0, n.jsxs)(N.default, {
        align: N.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: A.getAvatarURL(l.id, 32),
          className: p.iconWrapper
        }), (0, n.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: g.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: A
          })
        }), (0, n.jsx)(T.default, {
          className: p.tag,
          verified: A.isVerifiedBot()
        })]
      }), function(e, t, l, a) {
        let i = [],
          o = [];
        for (let e of c.OrderedPermissions) s.has(a, e) ? i.push(e) : o.push(e);
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.FormDivider, {
            className: p.divider
          }), l.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(r.FormTitle, {
              className: p.permissionHeader,
              children: g.default.Messages.ROLES_LIST.format({
                numRoles: l.length
              })
            }), (0, n.jsx)(d.default, {
              className: p.rolePills,
              user: e,
              guild: t,
              userRoles: l,
              wrap: !1,
              readOnly: !0
            })]
          }) : null, i.length > 0 || o.length > 0 ? (0, n.jsx)(u.default, {
            className: p.permissionList,
            grantedPermissions: i,
            grantedPermissionsHeader: g.default.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: g.default.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null]
        })
      }(A, l, null !== (t = null == C ? void 0 : C.roles) && void 0 !== t ? t : [], R)]
    })
  })
}