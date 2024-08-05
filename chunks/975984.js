n.d(t, {
  Lz: function() {
return d;
  },
  MQ: function() {
return o;
  },
  TR: function() {
return h;
  },
  Th: function() {
return u;
  },
  _N: function() {
return c;
  },
  gX: function() {
return p;
  }
}), n(47120);
var i = n(512722),
  a = n.n(i),
  s = n(392711),
  l = n.n(s),
  r = n(486527);

function o(e) {
  var t, n, i, s, l, o, c;
  return a()(e.type === r.C2.GUILD, 'Directory entries must be connected to a guild!'), {
channelId: e.directory_channel_id,
guildId: e.entity_id,
type: e.type,
authorId: e.author_id,
createdAt: e.created_at,
description: e.description,
primaryCategoryId: e.primary_category_id,
name: null === (t = e.guild) || void 0 === t ? void 0 : t.name,
icon: null === (n = e.guild) || void 0 === n ? void 0 : n.icon,
splash: null === (i = e.guild) || void 0 === i ? void 0 : i.splash,
features: new Set(null === (s = e.guild) || void 0 === s ? void 0 : s.features),
approximateMemberCount: null === (l = e.guild) || void 0 === l ? void 0 : l.approximate_member_count,
approximatePresenceCount: null === (o = e.guild) || void 0 === o ? void 0 : o.approximate_presence_count,
featurableInDirectory: null === (c = e.guild) || void 0 === c ? void 0 : c.featurable_in_directory
  };
}
let c = 5;

function u(e) {
  return l().orderBy(e, [e => e.approximateMemberCount], ['desc']);
}

function d(e) {
  var t;
  return (t = e.filter(e => e.featurableInDirectory && p(e)), l().orderBy(t, [e => e.createdAt], ['desc'])).slice(0, c);
}

function h(e) {
  return u(e);
}

function p(e) {
  var t;
  return (null !== (t = e.approximateMemberCount) && void 0 !== t ? t : 0) >= 5;
}