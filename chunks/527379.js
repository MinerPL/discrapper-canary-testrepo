t.d(n, {
  Dr: function() {
return E;
  },
  YO: function() {
return _;
  },
  _X: function() {
return I;
  },
  _o: function() {
return f;
  },
  nb: function() {
return g;
  },
  zO: function() {
return d;
  }
});
var i = t(570140),
  r = t(434404),
  o = t(703656),
  l = t(430824),
  u = t(241559),
  s = t(327999),
  a = t(981631),
  c = t(176505);
async function d(e) {
  await i.Z.dispatch({
type: 'INITIALIZE_MEMBER_SAFETY_STORE',
guildId: e
  });
}

function _(e) {
  i.Z.dispatch({
type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
guildId: e
  });
}

function f(e, n) {
  let {
continuationToken: t,
...r
  } = n;
  i.Z.dispatch({
type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
guildId: e,
pagination: r
  });
}
async function E(e, n) {
  await i.Z.dispatch({
type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
guildId: e,
searchState: n
  });
}

function I(e) {
  let n = (0, u.lv)(e),
t = l.Z.getGuild(e);
  return !!n && null != t && (t.hasFeature(a.oNc.COMMUNITY) || t.hasFeature(a.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(a.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (r.Z.open(t.id, a.pNK.MEMBERS), !0));
}
async function g(e, n) {
  let t = await (0, s._2)(e, n);
  return 0 === t.length ? [] : (await i.Z.dispatch({
type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
guildId: e,
memberSupplementals: t
  }), t);
}