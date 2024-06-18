"use strict";
n.d(t, {
  KZ: function() {
    return _
  },
  Mt: function() {
    return l
  },
  Q1: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(906732),
  o = n(221292);
let a = r.createContext({}),
  l = e => {
    let {
      children: t,
      layout: n,
      userId: l,
      guildId: u,
      channelId: _,
      messageId: d,
      roleId: c,
      showGuildProfile: E = !0,
      shouldTrackViewOnMount: I = !0
    } = e, {
      analyticsLocations: T
    } = (0, s.ZP)(), h = r.useMemo(() => ({
      layout: n,
      userId: l,
      guildId: u,
      channelId: _,
      messageId: d,
      roleId: c,
      showGuildProfile: E
    }), [n, l, u, _, d, c, E]);
    return r.useEffect(() => {
      if (!!I && null != n && null != l)(0, o.pQ)({
        action: "VIEW",
        layout: n,
        userId: l,
        guildId: u,
        channelId: _,
        messageId: d,
        roleId: c,
        showGuildProfile: E,
        analyticsLocations: T
      })
    }, [I]), (0, i.jsx)(a.Provider, {
      value: h,
      children: t
    })
  },
  u = e => {
    let {
      analyticsLocations: t
    } = (0, s.ZP)();
    return r.useCallback(n => {
      let {
        layout: i,
        userId: r
      } = e;
      if (null != i && null != r)(0, o.pQ)({
        analyticsLocations: t,
        layout: i,
        userId: r,
        ...e,
        ...n
      })
    }, [e, t])
  },
  _ = () => {
    let e = r.useContext(a);
    return {
      trackUserProfileAction: u(e),
      ...e
    }
  }