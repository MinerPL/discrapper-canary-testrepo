t.d(n, {
  F: function() {
return f;
  }
});
var l = t(735250);
t(470079);
var r = t(442837),
  a = t(438139),
  o = t(706454),
  i = t(594174),
  u = t(81063),
  s = t(162461),
  c = t(561308),
  d = t(701488);

function E(e) {
  let {
message: n
  } = e;
  return (0, l.jsx)('div', {
children: n
  });
}
let _ = (0, a.Z)(E),
  f = e => {
var n, t, a, f, T, v;
let m = (0, r.e7)([o.default], () => o.default.locale),
  N = (0, r.e7)([i.default], () => i.default.getUser(e.author_id)),
  {
    activity: x,
    activityApplication: g,
    fallbackApplication: h
  } = (0, c.qy)(e),
  I = (0, s.wh)('useGamingContentData'),
  M = null !== (f = null === (n = null != h ? h : g) || void 0 === n ? void 0 : n.getIconURL(d.Si.LARGE)) && void 0 !== f ? f : void 0;
if (!I || null == x)
  return {
    iconUrl: M,
    gameTitle: e.extra.game_name,
    user: N,
    inExperiment: I
  };
let A = null != g && (null === (t = x.assets) || void 0 === t ? void 0 : t.large_image) != null ? (0, u.getAssetImage)(g.id, x.assets.large_image, [
    d.Si.LARGE,
    d.Si.LARGE
  ]) : void 0,
  C = null !== (T = null === (a = x.assets) || void 0 === a ? void 0 : a.large_text) && void 0 !== T ? T : void 0,
  R = null !== (v = x.name) && void 0 !== v ? v : e.extra.game_name,
  Z = x.details,
  S = x.state,
  p = x.party,
  O = null != x.timestamps ? (0, l.jsx)(_, {
    timestamps: x.timestamps
  }) : (0, l.jsx)(E, {
    message: (0, c.yh)(e, m)
  });
return {
  iconUrl: null != A ? A : M,
  iconFallbackUrl: null != A ? M : void 0,
  iconTitle: C,
  user: N,
  activity: x,
  state: S,
  details: Z,
  party: p,
  gameTitle: R,
  gameTime: O,
  inExperiment: I
};
  };