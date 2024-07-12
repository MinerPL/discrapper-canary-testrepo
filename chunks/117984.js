n.d(t, {
  CM: function() {
return N;
  },
  UT: function() {
return _;
  },
  _Z: function() {
return h;
  },
  kj: function() {
return E;
  },
  oC: function() {
return f;
  },
  s3: function() {
return S;
  },
  uA: function() {
return C;
  },
  xh: function() {
return T;
  }
}), n(47120);
var i = n(524437),
  l = n(675478),
  r = n(592125),
  a = n(496675),
  u = n(709054),
  o = n(853856),
  s = n(231338);

function d() {
  let e = o.Z.getFavoriteChannels(),
t = 1;
  for (let n in e)
t = Math.max(t, e[n].order);
  return t + 1;
}

function c(e) {
  for (let t in e) {
let n = e[t];
if (null == n) {
  delete e[t];
  continue;
}
if (n.type === i.Dd.CATEGORY)
  continue;
let l = r.Z.getChannel(t);
if (null == l) {
  delete e[t];
  continue;
}
if (!l.isPrivate()) {
  if (!a.Z.can(s.Pl.VIEW_CHANNEL, l)) {
    delete e[t];
    continue;
  }
}
  }
}

function E(e, t) {
  if (!o.Z.isFavorite(e))
l.hW.updateAsync('favorites', n => {
  n.favoriteChannels[e] = i.aV.create({
    nickname: '',
    type: i.Dd.REFERENCE_ORIGINAL,
    position: d(),
    parentId: null != t ? t : '0'
  }), c(n.favoriteChannels);
}, l.fy.FREQUENT_USER_ACTION);
}

function f(e) {
  let t = o.Z.getFavorite(e);
  if (null != t)
l.hW.updateAsync('favorites', n => {
  if (delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)
    for (let t in n.favoriteChannels)
      n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
  c(n.favoriteChannels);
}, l.fy.INFREQUENT_USER_ACTION);
}

function _(e, t) {
  if (!!o.Z.isFavorite(e))
l.hW.updateAsync('favorites', n => {
  n.favoriteChannels[e].nickname = null != t ? t : '';
}, l.fy.INFREQUENT_USER_ACTION);
}

function N(e) {
  let t = u.default.fromTimestamp(Date.now());
  l.hW.updateAsync('favorites', n => {
n.favoriteChannels[t] = i.aV.create({
  nickname: e,
  type: i.Dd.CATEGORY,
  position: d(),
  parentId: '0'
});
  }, l.fy.FREQUENT_USER_ACTION);
}

function T(e) {
  f(e);
}

function S(e) {
  l.hW.updateAsync('favorites', t => {
for (let i of e)
  if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
    var n;
    t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : '0';
  }
  }, l.fy.FREQUENT_USER_ACTION);
}

function C(e, t) {
  l.hW.updateAsync('favorites', n => {
n.favoriteChannels[e].parentId = null != t ? t : '0';
  }, l.fy.FREQUENT_USER_ACTION);
}

function h() {
  l.hW.updateAsync('favorites', e => {
e.muted = !e.muted;
  }, l.fy.INFREQUENT_USER_ACTION);
}