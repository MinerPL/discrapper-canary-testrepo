"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("424973"), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("316693"),
  i = l("446674"),
  r = l("77078"),
  o = l("851387"),
  d = l("581583"),
  u = l("549825"),
  c = l("978970"),
  f = l("766274"),
  m = l("26989"),
  I = l("305961"),
  T = l("79798"),
  N = l("145131"),
  E = l("449008"),
  h = l("991170"),
  g = l("782340"),
  p = l("984860");

function S(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: S
  } = e, O = (0, i.useStateFromStores)([I.default], () => I.default.getRoles(l.id)), {
    application: _
  } = S, A = null != _.bot ? new f.default(_.bot) : null, C = (0, i.useStateFromStores)([m.default], () => null != A ? m.default.getMember(l.id, A.id) : null, [A, l]), x = null == A ? void 0 : A.id;
  a.useEffect(() => {
    null != x && o.default.requestMembersById(l.id, x)
  }, [l.id, x]);
  let R = a.useMemo(() => {
    var e, t, n;
    let a = O[l.getEveryoneRoleId()],
      i = null !== (t = null == C ? void 0 : null === (e = C.roles) || void 0 === e ? void 0 : e.map(e => O[e]).filter(E.isNotNullish)) && void 0 !== t ? t : [],
      r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : h.NONE;
    for (let e of i) r = s.add(r, e.permissions);
    return r
  }, [l, O, C]);
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