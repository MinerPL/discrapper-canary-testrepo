t.d(n, {
  Z: function() {
return C;
  }
}), t(653041), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(149765),
  l = t(442837),
  o = t(481060),
  r = t(749210),
  c = t(412899),
  d = t(995648),
  u = t(422559),
  I = t(598077),
  m = t(271383),
  _ = t(430824),
  N = t(467679),
  E = t(285952),
  T = t(823379),
  h = t(700785),
  p = t(689938),
  g = t(988837);

function C(e) {
  var n;
  let {
guild: t,
applicationIntegration: C
  } = e, f = (0, l.e7)([_.Z], () => _.Z.getRoles(t.id)), {
application: x
  } = C, O = null != x.bot ? new I.Z(x.bot) : null, S = (0, l.e7)([m.ZP], () => null != O ? m.ZP.getMember(t.id, O.id) : null, [
O,
t
  ]), A = null == O ? void 0 : O.id;
  a.useEffect(() => {
if (null != A)
  r.Z.requestMembersById(t.id, A);
  }, [
t.id,
A
  ]);
  let R = a.useMemo(() => {
var e, n, i;
let a = f[t.getEveryoneRoleId()],
  l = null !== (n = null == S ? void 0 : null === (e = S.roles) || void 0 === e ? void 0 : e.map(e => f[e]).filter(T.lm)) && void 0 !== n ? n : [],
  o = null !== (i = null == a ? void 0 : a.permissions) && void 0 !== i ? i : h.Hn;
for (let e of l)
  o = s.IH(o, e.permissions);
return o;
  }, [
t,
f,
S
  ]);
  return null == O ? null : (0, i.jsx)(o.Card, {
editable: !0,
className: g.card,
children: (0, i.jsxs)(E.Z, {
  direction: E.Z.Direction.VERTICAL,
  children: [
    (0, i.jsxs)(E.Z, {
      align: E.Z.Align.CENTER,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          src: O.getAvatarURL(t.id, 32),
          className: g.iconWrapper
        }),
        (0, i.jsx)(o.Text, {
          color: 'header-primary',
          variant: 'text-sm/normal',
          children: p.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: O
          })
        }),
        (0, i.jsx)(N.Z, {
          className: g.tag,
          verified: O.isVerifiedBot()
        })
      ]
    }),
    function(e, n, t, a) {
      let l = [],
        r = [];
      for (let e of u.VY)
        s.e$(a, e) ? l.push(e) : r.push(e);
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(o.FormDivider, {
            className: g.divider
          }),
          t.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o.FormTitle, {
                className: g.permissionHeader,
                children: p.Z.Messages.ROLES_LIST.format({
                  numRoles: t.length
                })
              }),
              (0, i.jsx)(c.ZP, {
                className: g.rolePills,
                user: e,
                guild: n,
                userRoles: t,
                wrap: !1,
                readOnly: !0
              })
            ]
          }) : null,
          l.length > 0 || r.length > 0 ? (0, i.jsx)(d.Z, {
            className: g.permissionList,
            grantedPermissions: l,
            grantedPermissionsHeader: p.Z.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: r,
            disabledPermissionsHeader: p.Z.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null
        ]
      });
    }(O, t, null !== (n = null == S ? void 0 : S.roles) && void 0 !== n ? n : [], R)
  ]
})
  });
}