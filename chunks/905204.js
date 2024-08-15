t.d(n, {
  Z: function() {
return p;
  }
}), t(536091), t(653041), t(47120), t(724458);
var l = t(470079),
  a = t(392711),
  i = t.n(a),
  r = t(442837),
  s = t(570140),
  o = t(724213),
  c = t(9156),
  d = t(630388),
  u = t(823379),
  h = t(549817),
  m = t(45966),
  _ = t(526761);

function f(e) {
  s.Z.dispatch({
type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
guildId: e
  });
}
let C = {};

function p(e) {
  let n = (0, r.e7)([m.Z], () => {
var n;
return null !== (n = m.Z.getPendingResponseOptions(e)) && void 0 !== n ? n : C;
  }, [e]);
  return l.useEffect(() => (f(e), () => f(e)), [e]), l.useEffect(() => {
null != n && 0 !== Object.keys(n).length && h.Z.updateOnboardingResponses(e);
  }, [
e,
n
  ]), {
handleSelectOption: l.useCallback((n, t, l) => {
  let a = m.Z.getOnboardingResponses(e),
    {
      addedRoleIds: r,
      removedRoleIds: f
    } = function(e, n, t, l) {
      var a, r, s, o, c;
      let d = [],
        h = [];
      if (e.singleSelect && t) {
        let t = e.options.find(e => l.includes(e.id));
        d = i().difference(null !== (a = n.roleIds) && void 0 !== a ? a : [], null !== (r = null == t ? void 0 : t.roleIds) && void 0 !== r ? r : []), h = i().difference(null !== (s = null == t ? void 0 : t.roleIds) && void 0 !== s ? s : [], null !== (o = n.roleIds) && void 0 !== o ? o : []);
      } else if (t)
        d = null !== (c = n.roleIds) && void 0 !== c ? c : [], h = [];
      else {
        let t = e.options.filter(e => l.includes(e.id)),
          a = t.filter(e => n.id !== e.id),
          r = t.map(e => e.roleIds).flat().filter(u.lm),
          s = a.map(e => e.roleIds).flat().filter(u.lm);
        d = [], h = i().difference(r, s);
      }
      return {
        addedRoleIds: d,
        removedRoleIds: h
      };
    }(n, t, l, a),
    {
      addedChannelIds: C,
      removedChannelIds: p
    } = function(e) {
      var n, t, l, a, r;
      let {
        guildId: s,
        prompt: c,
        option: d,
        selected: h,
        responses: _
      } = e, f = [], C = [];
      if (c.singleSelect && h) {
        let e = c.options.find(e => _.includes(e.id));
        f = i().difference(null !== (n = d.channelIds) && void 0 !== n ? n : [], null !== (t = null == e ? void 0 : e.channelIds) && void 0 !== t ? t : []), C = i().difference(null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : [], null !== (a = d.channelIds) && void 0 !== a ? a : []);
      } else if (h)
        f = null !== (r = d.channelIds) && void 0 !== r ? r : [], C = [];
      else {
        let e = c.options.filter(e => _.includes(e.id)),
          n = e.filter(e => d.id !== e.id),
          t = e.map(e => e.channelIds).flat().filter(u.lm),
          l = n.map(e => e.channelIds).flat().filter(u.lm);
        f = [], C = i().difference(t, l);
      }
      return (0, o.hi)(s) && f.push(...m.Z.getDefaultChannelIds(s)), {
        addedChannelIds: f,
        removedChannelIds: C
      };
    }({
      guildId: e,
      prompt: n,
      option: t,
      selected: l,
      responses: a
    }),
    x = C.reduce((n, t) => {
      let l = c.ZP.getChannelIdFlags(e, t);
      return n[t] = {
        flags: (0, d.mB)(l, _.ic.OPT_IN_ENABLED, !0)
      }, n;
    }, {}),
    g = p.reduce((n, t) => {
      let l = c.ZP.getChannelIdFlags(e, t);
      return n[t] = {
        flags: (0, d.mB)(l, _.ic.OPT_IN_ENABLED, !1)
      }, n;
    }, {}),
    N = {
      ...x,
      ...g
    };
  h.Z.selectOption(e, n.id, t.id, l), s.Z.dispatch({
    type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
    guildId: e,
    overrides: N
  }), h.Z.updateRolesLocal(e, r, f);
}, [e])
  };
}