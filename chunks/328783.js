"use strict";
s.r(t), s("47120"), s("724458"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("993413"),
  o = s("594174"),
  d = s("153124"),
  u = s("931240"),
  c = s("353093"),
  S = s("891728"),
  E = s("369077"),
  T = s("689938"),
  f = s("156312");
let m = (0, d.uid)();
t.default = n.memo(function() {
  let e = (0, S.useCurrentUserAvailableClans)(),
    t = n.useMemo(() => new Map(e.map(e => [e.id, e])), [e]),
    s = (0, l.useStateFromStores)([o.default], () => {
      var e;
      return (0, c.getUserClanData)(null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
    }),
    d = n.useMemo(() => e.reduce((e, t) => {
      var s;
      return (null === (s = t.clan) || void 0 === s ? void 0 : s.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [e]),
    _ = n.useCallback(e => {
      var s;
      if (null == e) return null;
      let n = t.get(e.value);
      if (null == n) return null;
      let l = null === (s = n.clan) || void 0 === s ? void 0 : s.tag;
      return null == l ? null : (0, a.jsx)(E.UserProfileClanRow, {
        userClanTag: l,
        guildId: n.id,
        guildName: e.label,
        guildIcon: n.icon,
        guildIconSize: 32
      })
    }, [t]),
    g = n.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, a.jsx)(a.Fragment, {
        children: _(t)
      })
    }, [_]),
    h = n.useCallback(e => (0, u.adoptClanIdentity)(e, !0), []),
    I = n.useCallback(e => e === s, [s]),
    N = n.useCallback(e => e, []),
    p = n.useCallback(() => (0, u.adoptClanIdentity)(null, !0), []);
  return (0, a.jsxs)(r.default, {
    title: T.default.Messages.CLANS,
    titleId: m,
    children: [(0, a.jsx)(i.Text, {
      className: f.subtitle,
      variant: "text-sm/normal",
      children: T.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
    }), (0, a.jsx)(i.Select, {
      className: f.select,
      optionClassName: f.selectPopout,
      isSelected: I,
      options: d,
      select: h,
      renderOptionValue: g,
      renderOptionLabel: _,
      serialize: N,
      clear: p,
      clearable: null != s
    })]
  })
})