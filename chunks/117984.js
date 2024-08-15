t.d(n, {
  CM: function() {
return T;
  },
  UT: function() {
return I;
  },
  _Z: function() {
return A;
  },
  kj: function() {
return c;
  },
  oC: function() {
return _;
  },
  s3: function() {
return f;
  },
  uA: function() {
return S;
  },
  xh: function() {
return N;
  }
}), t(47120);
var i = t(524437),
  r = t(675478),
  u = t(592125),
  a = t(496675),
  o = t(709054),
  l = t(853856),
  s = t(231338);

function d() {
  let e = l.Z.getFavoriteChannels(),
n = 1;
  for (let t in e)
n = Math.max(n, e[t].order);
  return n + 1;
}

function E(e) {
  for (let n in e) {
let t = e[n];
if (null == t) {
  delete e[n];
  continue;
}
if (t.type === i.Dd.CATEGORY)
  continue;
let r = u.Z.getChannel(n);
if (null == r) {
  delete e[n];
  continue;
}
if (!r.isPrivate()) {
  if (!a.Z.can(s.Pl.VIEW_CHANNEL, r)) {
    delete e[n];
    continue;
  }
}
  }
}

function c(e, n) {
  if (!l.Z.isFavorite(e))
r.hW.updateAsync('favorites', t => {
  t.favoriteChannels[e] = i.aV.create({
    nickname: '',
    type: i.Dd.REFERENCE_ORIGINAL,
    position: d(),
    parentId: null != n ? n : '0'
  }), E(t.favoriteChannels);
}, r.fy.FREQUENT_USER_ACTION);
}

function _(e) {
  let n = l.Z.getFavorite(e);
  if (null != n)
r.hW.updateAsync('favorites', t => {
  if (delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY)
    for (let n in t.favoriteChannels)
      t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = '0');
  E(t.favoriteChannels);
}, r.fy.INFREQUENT_USER_ACTION);
}

function I(e, n) {
  if (!!l.Z.isFavorite(e))
r.hW.updateAsync('favorites', t => {
  t.favoriteChannels[e].nickname = null != n ? n : '';
}, r.fy.INFREQUENT_USER_ACTION);
}

function T(e) {
  let n = o.default.fromTimestamp(Date.now());
  r.hW.updateAsync('favorites', t => {
t.favoriteChannels[n] = i.aV.create({
  nickname: e,
  type: i.Dd.CATEGORY,
  position: d(),
  parentId: '0'
});
  }, r.fy.FREQUENT_USER_ACTION);
}

function N(e) {
  _(e);
}

function f(e) {
  r.hW.updateAsync('favorites', n => {
for (let i of e)
  if (null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
    var t;
    n.favoriteChannels[i.id].parentId = null !== (t = i.parent_id) && void 0 !== t ? t : '0';
  }
  }, r.fy.FREQUENT_USER_ACTION);
}

function S(e, n) {
  r.hW.updateAsync('favorites', t => {
t.favoriteChannels[e].parentId = null != n ? n : '0';
  }, r.fy.FREQUENT_USER_ACTION);
}

function A() {
  r.hW.updateAsync('favorites', e => {
e.muted = !e.muted;
  }, r.fy.INFREQUENT_USER_ACTION);
}