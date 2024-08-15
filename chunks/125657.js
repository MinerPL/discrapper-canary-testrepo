t.d(n, {
  Z: function() {
return f;
  }
}), t(653041), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(149765),
  l = t(442837),
  r = t(481060),
  o = t(749210),
  d = t(412899),
  c = t(995648),
  u = t(385499),
  I = t(600164),
  m = t(422559),
  _ = t(598077),
  N = t(271383),
  E = t(430824),
  T = t(823379),
  h = t(700785),
  g = t(689938),
  p = t(276118);

function f(e) {
  var n;
  let {
guild: t,
applicationIntegration: f
  } = e, C = (0, l.e7)([E.Z], () => E.Z.getRoles(t.id)), {
application: O
  } = f, x = null != O.bot ? new _.Z(O.bot) : null, S = (0, l.e7)([N.ZP], () => null != x ? N.ZP.getMember(t.id, x.id) : null, [
x,
t
  ]), A = null == x ? void 0 : x.id;
  a.useEffect(() => {
if (null != A)
  o.Z.requestMembersById(t.id, A);
  }, [
t.id,
A
  ]);
  let R = a.useMemo(() => {
var e, n, i;
let a = C[t.getEveryoneRoleId()],
  l = null !== (n = null == S ? void 0 : null === (e = S.roles) || void 0 === e ? void 0 : e.map(e => C[e]).filter(T.lm)) && void 0 !== n ? n : [],
  r = null !== (i = null == a ? void 0 : a.permissions) && void 0 !== i ? i : h.Hn;
for (let e of l)
  r = s.IH(r, e.permissions);
return r;
  }, [
t,
C,
S
  ]);
  return null == x ? null : (0, i.jsx)(r.Card, {
editable: !0,
className: p.card,
children: (0, i.jsxs)(I.Z, {
  direction: I.Z.Direction.VERTICAL,
  children: [
    (0, i.jsxs)(I.Z, {
      align: I.Z.Align.CENTER,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          src: x.getAvatarURL(t.id, 32),
          className: p.iconWrapper
        }),
        (0, i.jsx)(r.Text, {
          color: 'header-primary',
          variant: 'text-sm/normal',
          children: g.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: x
          })
        }),
        (0, i.jsx)(u.Z, {
          className: p.tag,
          verified: x.isVerifiedBot()
        })
      ]
    }),
    function(e, n, t, a) {
      let l = [],
        o = [];
      for (let e of m.VY)
        s.e$(a, e) ? l.push(e) : o.push(e);
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(r.FormDivider, {
            className: p.divider
          }),
          t.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(r.FormTitle, {
                className: p.permissionHeader,
                children: g.Z.Messages.ROLES_LIST.format({
                  numRoles: t.length
                })
              }),
              (0, i.jsx)(d.ZP, {
                className: p.rolePills,
                user: e,
                guild: n,
                userRoles: t,
                wrap: !1,
                readOnly: !0
              })
            ]
          }) : null,
          l.length > 0 || o.length > 0 ? (0, i.jsx)(c.Z, {
            className: p.permissionList,
            grantedPermissions: l,
            grantedPermissionsHeader: g.Z.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: g.Z.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null
        ]
      });
    }(x, t, null !== (n = null == S ? void 0 : S.roles) && void 0 !== n ? n : [], R)
  ]
})
  });
}