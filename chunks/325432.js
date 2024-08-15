n.d(t, {
  RY: function() {
return s;
  },
  Tb: function() {
return l;
  },
  ec: function() {
return o;
  },
  iD: function() {
return r;
  }
}), n(47120);
var i = n(570140),
  a = n(830168);

function s(e) {
  a.Z.queryDirectory(e, (t, n) => {
if (null == t && null != n)
  i.Z.dispatch({
    type: 'INSTALLATION_LOCATION_ADD',
    path: e,
    metadata: n
  });
  });
}

function r(e) {
  i.Z.dispatch({
type: 'INSTALLATION_LOCATION_REMOVE',
path: e
  });
}

function l(e, t) {
  let {
label: n,
isDefault: a
  } = t;
  i.Z.dispatch({
type: 'INSTALLATION_LOCATION_UPDATE',
path: e,
label: n,
isDefault: a
  });
}

function o(e) {
  let t = {},
n = 0;
  for (let s of e) {
if (null != s && 'string' == typeof s)
  a.Z.queryDirectory(s, (a, r) => {
    ++n, null == a && null != r && (t[s] = r), n === e.length && i.Z.dispatch({
      type: 'INSTALLATION_LOCATION_FETCH_METADATA',
      metadataPayload: t
    });
  });
  }
}