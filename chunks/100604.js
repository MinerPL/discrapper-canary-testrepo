n.d(t, {
  r: function() {
return T;
  }
});
var i = n(933557),
  s = n(356264),
  a = n(592125),
  r = n(430824),
  l = n(496675),
  o = n(699516),
  c = n(594174),
  u = n(768581),
  d = n(55935),
  _ = n(631184);
n(978003);
var E = n(689938);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function m(e, t) {
  return {
originLabel: e.name,
originIconUrl: u.ZP.getGuildIconURL({
  id: e.id,
  size: 16,
  icon: e.icon,
  canAnimate: !1
}),
timestampLabel: t,
accessibilityLabel: E.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
  origin: e.name,
  timestamp: t
})
  };
}
class T {
  getForwardInfo() {
var e, t, n, u, I;
let T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
  h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
  N = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
  C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
  f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
  p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : s.Z,
  {
    snapshotIndex: g,
    parentMessage: S,
    messageSnapshot: A
  } = this,
  {
    showForwardBreadcrumb: R
  } = _.u.getCurrentConfig({
    location: 'MessageForward'
  });
if (!R)
  return {
    snapshotIndex: g
  };
let O = (0, d.Xf)(A.message.timestamp),
  x = T.getChannel(this.parentMessage.channel_id);
if (null != x && x.guild_id === (null === (e = S.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
  let e = T.getChannel(null === (u = S.messageReference) || void 0 === u ? void 0 : u.channel_id);
  if (null == e) {
    let e = f.getGuild(x.guild_id);
    return null == e ? {
      snapshotIndex: g
    } : {
      snapshotIndex: g,
      footerInfo: m(e, O)
    };
  }
  if (!C.can(e.accessPermissions, e))
    return {
      snapshotIndex: g
    };
  let t = (0, i.F6)(e, h, N, !0);
  return {
    snapshotIndex: g,
    footerInfo: {
      originLabel: t,
      timestampLabel: O,
      accessibilityLabel: E.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
        origin: t,
        timestamp: O
      })
    }
  };
}
let M = null === (t = S.messageReference) || void 0 === t ? void 0 : t.guild_id;
if (null == M)
  return {
    snapshotIndex: g
  };
let v = null !== (I = f.getGuild(M)) && void 0 !== I ? I : p.getGuild(M);
if (null == v)
  return {
    snapshotIndex: g
  };
let L = T.getChannel(null === (n = S.messageReference) || void 0 === n ? void 0 : n.channel_id);
return null == L || C.can(L.accessPermissions, L) ? {
  snapshotIndex: g,
  footerInfo: m(v, O)
} : {
  snapshotIndex: g
};
  }
  constructor(e, t, n) {
I(this, 'parentMessage', void 0), I(this, 'messageSnapshot', void 0), I(this, 'snapshotIndex', void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n;
  }
}