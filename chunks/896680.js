t.d(n, {
  Z: function() {
return f;
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(239091),
  u = t(154285),
  s = t(369994),
  d = t(666657),
  c = t(533244),
  _ = t(487419),
  I = t(965638),
  A = t(430824),
  E = t(981631),
  T = t(689938);

function f(e, n) {
  let f = n === E.IlC.POPOUT,
N = (0, i.e7)([A.Z], () => A.Z.getGuild(e), [e]),
[h, D] = a.useState(!1),
{
  showAlertMode: S
} = (0, u.sw)(e),
L = (0, i.e7)([_.Z], () => null != N ? _.Z.getGuildIncident(N.id) : null),
C = (null == N ? void 0 : N.hasFeature(E.oNc.INVITES_DISABLED)) || S && (null == L ? void 0 : L.invitesDisabledUntil) != null && new Date(L.invitesDisabledUntil) > new Date(),
[M, R] = a.useState(C),
x = async n => {
  if (!h && null != N) {
    D(!0);
    try {
      if (R(n), S) {
        if (n) {
          let n = {
            source: d.Zu.MESSAGE,
            alertType: (0, c.T1)(L)
          };
          (0, r.openModalLazy)(async () => {
            let {
              default: a
            } = await t.e('61536').then(t.bind(t, 664452));
            return t => (0, l.jsx)(a, {
              ...t,
              guildId: e,
              analyticsData: n
            });
          });
        } else
          await (0, s.n)(N.id, !1, !1);
      } else
        await (0, I.AG)(N, n);
    } catch (e) {
      R(!n);
    } finally {
      D(!1), (0, o.Zy)();
    }
  }
};
  return f ? null : (0, l.jsx)(r.MenuCheckboxItem, {
id: 'pause-invites',
label: T.Z.Messages.DISABLE_INVITES,
action: () => {
  x(!M);
},
checked: M
  });
}