t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(149765),
    a = t(442837),
    o = t(481060),
    s = t(749210),
    d = t(412899),
    c = t(995648),
    u = t(385499),
    m = t(600164),
    h = t(422559),
    p = t(598077),
    g = t(271383),
    f = t(430824),
    x = t(823379),
    b = t(700785),
    v = t(388032),
    C = t(452199);
function I(e) {
    var n;
    let { guild: t, applicationIntegration: I } = e,
        N = (0, a.e7)([f.Z], () => f.Z.getRoles(t.id)),
        { application: T } = I,
        _ = null != T.bot ? new p.Z(T.bot) : null,
        j = (0, a.e7)([g.ZP], () => (null != _ ? g.ZP.getMember(t.id, _.id) : null), [_, t]),
        S = null == _ ? void 0 : _.id;
    l.useEffect(() => {
        if (null != S) s.Z.requestMembersById(t.id, S);
    }, [t.id, S]);
    let E = l.useMemo(() => {
        var e, n, i;
        let l = N[t.getEveryoneRoleId()],
            a = null !== (n = null == j ? void 0 : null === (e = j.roles) || void 0 === e ? void 0 : e.map((e) => N[e]).filter(x.lm)) && void 0 !== n ? n : [],
            o = null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i ? i : b.Hn;
        for (let e of a) o = r.IH(o, e.permissions);
        return o;
    }, [t, N, j]);
    return null == _
        ? null
        : (0, i.jsx)(o.Card, {
              editable: !0,
              className: C.card,
              children: (0, i.jsxs)(m.Z, {
                  direction: m.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(m.Z, {
                          align: m.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: _.getAvatarURL(t.id, 32),
                                  className: C.iconWrapper
                              }),
                              (0, i.jsx)(o.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t.GyhzGx, { user: _.toString() })
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: C.tag,
                                  verified: _.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, n, t, l) {
                          let a = [],
                              s = [];
                          for (let e of h.VY) r.e$(l, e) ? a.push(e) : s.push(e);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.FormDivider, { className: C.divider }),
                                  t.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(o.FormTitle, {
                                                    className: C.permissionHeader,
                                                    children: v.intl.format(v.t.PCs0oq, { numRoles: t.length })
                                                }),
                                                (0, i.jsx)(d.ZP, {
                                                    className: C.rolePills,
                                                    user: e,
                                                    guild: n,
                                                    userRoles: t,
                                                    wrap: !1,
                                                    readOnly: !0
                                                })
                                            ]
                                        })
                                      : null,
                                  a.length > 0 || s.length > 0
                                      ? (0, i.jsx)(c.Z, {
                                            grantedPermissions: a,
                                            grantedPermissionsHeader: v.intl.string(v.t['hA4+sr']),
                                            disabledPermissions: s,
                                            disabledPermissionsHeader: v.intl.string(v.t['/rEZ2t'])
                                        })
                                      : null
                              ]
                          });
                      })(_, t, null !== (n = null == j ? void 0 : j.roles) && void 0 !== n ? n : [], E)
                  ]
              })
          });
}
