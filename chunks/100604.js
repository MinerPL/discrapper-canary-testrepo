n.d(t, {
  r: function() {
return T;
  }
});
var i = n(933557),
  a = n(356264),
  s = n(592125),
  r = n(430824),
  l = n(496675),
  o = n(699516),
  c = n(594174),
  d = n(768581),
  u = n(55935),
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
originIconUrl: d.ZP.getGuildIconURL({
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
var e, t, n, d, I;
let T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Z,
  h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
  N = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
  f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
  p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
  C = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.Z,
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
let x = (0, u.Xf)(A.message.timestamp),
  O = T.getChannel(this.parentMessage.channel_id);
if (null != O && O.guild_id === (null === (e = S.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
  let e = T.getChannel(null === (d = S.messageReference) || void 0 === d ? void 0 : d.channel_id);
  if (null == e) {
    let e = p.getGuild(O.guild_id);
    return null == e ? {
      snapshotIndex: g
    } : {
      snapshotIndex: g,
      footerInfo: m(e, x)
    };
  }
  if (!f.can(e.accessPermissions, e))
    return {
      snapshotIndex: g
    };
  let t = (0, i.F6)(e, h, N, !0);
  return {
    snapshotIndex: g,
    footerInfo: {
      originLabel: t,
      timestampLabel: x,
      accessibilityLabel: E.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
        origin: t,
        timestamp: x
      })
    }
  };
}
let M = null === (t = S.messageReference) || void 0 === t ? void 0 : t.guild_id;
if (null == M)
  return {
    snapshotIndex: g
  };
let v = null !== (I = p.getGuild(M)) && void 0 !== I ? I : C.getGuild(M);
if (null == v)
  return {
    snapshotIndex: g
  };
let L = T.getChannel(null === (n = S.messageReference) || void 0 === n ? void 0 : n.channel_id);
return null == L || f.can(L.accessPermissions, L) ? {
  snapshotIndex: g,
  footerInfo: m(v, x)
} : {
  snapshotIndex: g
};
  }
  constructor(e, t, n) {
I(this, 'parentMessage', void 0), I(this, 'messageSnapshot', void 0), I(this, 'snapshotIndex', void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n;
  }
}