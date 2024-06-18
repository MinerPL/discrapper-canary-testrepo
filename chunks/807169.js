"use strict";
n.d(t, {
  Hs: function() {
    return S
  },
  Vh: function() {
    return A
  },
  k: function() {
    return h
  },
  ny: function() {
    return m
  }
});
var i = n(470079),
  r = n(149765),
  s = n(442837),
  o = n(911969),
  a = n(160404),
  l = n(695346),
  u = n(131704),
  _ = n(314897),
  d = n(592125),
  c = n(271383),
  E = n(496675),
  I = n(594174),
  T = n(981631);

function h(e, t) {
  var n, i, r, s, o;
  let E;
  let T = m(E = e instanceof u.Sf && e.isThread() ? null !== (r = d.Z.getChannel(e.parent_id)) && void 0 !== r ? r : e : e),
    h = l.xM.getSetting(),
    S = _.default.getId(),
    A = null !== (s = null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== s && s,
    O = null != T && null !== (o = null === (i = c.ZP.getMember(T, S)) || void 0 === i ? void 0 : i.roles) && void 0 !== o ? o : [],
    R = a.Z.isViewingRoles(T),
    {
      computedPermissions: C,
      hasBaseAccessPermissions: p,
      hasSendMessagesPermission: g
    } = N(E, e instanceof u.Sf && e.isThread());
  return {
    context: E,
    userId: S,
    roleIds: O,
    isImpersonating: R,
    commandType: t,
    computedPermissions: C,
    hasBaseAccessPermissions: p,
    hasSendMessagesPermission: g,
    allowNsfw: f(E, A, h)
  }
}

function S(e, t) {
  let n = i.useMemo(() => {
      if (e instanceof u.Sf && e.isThread()) {
        var t;
        return null !== (t = d.Z.getChannel(e.parent_id)) && void 0 !== t ? t : e
      }
      return e
    }, [e]),
    r = m(n),
    o = l.xM.useSetting(),
    E = (0, s.e7)([_.default], () => _.default.getId()),
    T = (0, s.e7)([I.default], () => {
      var e, t;
      return null !== (t = null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
    }),
    h = (0, s.Wu)([c.ZP], () => {
      var e, t;
      return null != r && null !== (t = null === (e = c.ZP.getMember(r, E)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
    }),
    S = (0, s.e7)([a.Z], () => a.Z.isViewingRoles(r));
  return i.useMemo(() => {
    let {
      computedPermissions: i,
      hasBaseAccessPermissions: r,
      hasSendMessagesPermission: s
    } = N(n, e instanceof u.Sf && e.isThread());
    return {
      context: n,
      userId: E,
      roleIds: h,
      commandType: t,
      isImpersonating: S,
      computedPermissions: i,
      hasBaseAccessPermissions: r,
      hasSendMessagesPermission: s,
      allowNsfw: f(n, T, o)
    }
  }, [t, n, S, h, E, T, o, e])
}

function f(e, t, n) {
  return !!t && (!(e instanceof u.Sf) || (null != e.guild_id ? e.nsfw : n))
}

function N(e, t) {
  let n, i;
  if (e instanceof u.Sf && e.isPrivate()) return {
    computedPermissions: r.vB(0),
    hasBaseAccessPermissions: !0,
    hasSendMessagesPermission: !0
  };
  let s = E.Z.computePermissions(e);
  return r.e$(s, T.Plq.ADMINISTRATOR) ? (n = !0, i = !0) : e instanceof u.Sf ? (n = r.e$(s, T.Plq.VIEW_CHANNEL) && r.e$(s, T.Plq.USE_APPLICATION_COMMANDS), i = t ? r.e$(s, T.Plq.SEND_MESSAGES_IN_THREADS) : r.e$(s, T.Plq.SEND_MESSAGES)) : (n = r.e$(s, T.Plq.VIEW_CHANNEL), i = !0), {
    computedPermissions: s,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: i
  }
}

function A(e, t) {
  return e instanceof u.Sf && null == e.guild_id ? e.type === T.d4z.DM && e.getRecipientId() === t ? o.D.BOT_DM : o.D.PRIVATE_CHANNEL : o.D.GUILD
}

function m(e) {
  return e instanceof u.Sf ? e.guild_id : e.id
}