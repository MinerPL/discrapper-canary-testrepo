let i;
n(47120);
var a = n(735250);
n(470079);
var s = n(481060),
  r = n(570140),
  l = n(317770),
  o = n(622822),
  c = n(391650),
  d = n(305325),
  u = n(341298),
  _ = n(390885),
  E = n(524329),
  h = n(995532),
  m = n(486472),
  I = n(430824),
  g = n(914010),
  p = n(594174),
  T = n(823379),
  S = n(358085),
  f = n(929809),
  C = n(179645),
  N = n(701476),
  A = n(785997),
  v = n(981631),
  Z = n(188785),
  L = n(630724);

function O() {
  null != i && (0, s.closeModal)(i);
}
class R extends l.Z {
  _initialize() {
r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.subscribe('LOGOUT', O);
  }
  _terminate() {
r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.unsubscribe('LOGOUT', O);
  }
  handleConnectionOpen() {
var e;
let t, r = C.Z.getType();
if (null == r)
  return;
switch (r) {
  case N.M5.INVITE_UNCLAIMED:
    _.Z.flowStart(L.MK.INVITE, L.EW.NUF_STARTED);
    break;
  case N.M5.ORGANIC_REGISTERED:
    _.Z.flowStart(L.MK.ORGANIC, L.EW.NUF_STARTED);
    break;
  case N.M5.MARKETING_UNCLAIMED:
    _.Z.flowStart(L.MK.ORGANIC_MARKETING, L.EW.NUF_STARTED);
}
let l = !1,
  O = g.Z.getGuildId();
if (r === N.M5.INVITE_UNCLAIMED) {
  let e = I.Z.getGuild(O);
  (null == e ? void 0 : e.hasVerificationGate()) && (l = !0, (0, E.RM)(e.id));
}
let R = () => 0 === m.Z.totalGuilds && !S.isPlatformEmbedded,
  x = o.b();
e = [{
    key: 'Unified NUF Modal',
    open: async function e(e) {
      let t = e => {
        switch (e) {
          case A.F.AGE_GATE:
            _.Z.flowStep(L.MK.ANY, L.EW.AGE_GATE);
            break;
          case A.F.CHOOSE_TEMPLATE:
            _.Z.flowStep(L.MK.ANY, L.X2.GUILD_TEMPLATES);
            break;
          case A.F.CUSTOMIZE_GUILD:
            _.Z.flowStep(L.MK.ANY, L.X2.GUILD_CREATE);
            break;
          case A.F.CHANNEL_PROMPT:
            _.Z.flowStep(L.MK.ANY, L.X2.CHANNEL_PROMPT);
            break;
          case A.F.JOIN_GUILD:
            _.Z.flowStep(L.MK.ANY, L.X2.JOIN_GUILD);
            break;
          case A.F.CREATION_INTENT:
            _.Z.flowStep(L.MK.ANY, L.X2.CREATION_INTENT);
            break;
          case A.F.COMPLETE:
            _.Z.flowStep(L.MK.ANY, L.X2.SUCCESS);
            break;
          case null:
            break;
          default:
            T.vE(e);
        }
      };
      i = await (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('96427'),
          n.e('42483'),
          n.e('58566')
        ]).then(n.bind(n, 599219));
        return n => (0, a.jsx)(e, {
          ...n,
          onSlideChange: t
        });
      }, {
        onCloseRequest: v.dG4,
        onCloseCallback: e,
        modalKey: i
      });
    },
    predicate: () => R() && !Z.a
  },
  {
    key: 'New User Age Gate',
    open: c.i,
    predicate: () => x && !R() && !Z.a
  },
  {
    key: 'Claim Account Modal',
    open: e => c.j(S.isPlatformEmbedded, e),
    predicate: () => {
      var e;
      return !l && null != p.default.getCurrentUser() && !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a && !(0, u.g)('new_user_manager');
    }
  },
  {
    key: 'Verification Gate with Claim Account',
    open: e => (0, d.hk)(O, null != e ? e : void 0),
    predicate: () => {
      var e;
      return l && !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a;
    }
  },
  {
    key: 'Guild Welcome Modal',
    open: e => (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('77578').then(n.bind(n, 184782));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: O
      });
    }, {
      onCloseCallback: e
    }),
    predicate: () => null != O && null != h.Z.get(O) && h.Z.get(O) !== h.a
  }
], t = () => {
  f.H(), _.Z.flowStep(L.MK.ANY, L.EW.NUF_COMPLETE, !0);
}, [...e].reverse().forEach(e => {
  let n = t;
  t = () => {
    e.predicate() ? e.open(n) : n();
  };
}), t();
  }
}
t.Z = new R();