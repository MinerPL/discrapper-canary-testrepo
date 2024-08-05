n.d(t, {
  IV: function() {
return o;
  },
  P: function() {
return u;
  },
  fH: function() {
return c;
  },
  sk: function() {
return _;
  },
  xt: function() {
return d;
  }
});
var i = n(166459),
  s = n(966390),
  a = n(476326),
  r = n(703558),
  l = n(398805);
async function o(e, t, n) {
  let i = (0, l.Yk)(t, n),
s = await fetch(n);
  return c(e, t, new File([await s.blob()], i, {
type: 'image/gif'
  })), n;
}

function c(e, t, n) {
  let s = {
id: t,
channelId: e,
file: n,
platform: a.ow.WEB
  };
  i.Z.addFile({
file: s,
channelId: e,
draftType: r.d.Poll
  });
}
async function u(e, t, n) {
  i.Z.remove(e, t, r.d.Poll);
}
async function d(e) {
  i.Z.clearAll(e, r.d.Poll);
}
async function _(e) {
  let {
channel: t,
items: n,
poll: i,
nonce: a,
maxSizeCallback: l
  } = e;
  return s.Z.uploadFiles({
channelId: t.id,
uploads: n,
draftType: r.d.Poll,
parsedMessage: {
  content: '',
  tts: !1,
  invalidEmojis: [],
  validNonShortcutEmojis: []
},
options: {
  nonce: a,
  poll: i
},
raiseEndpointErrors: !0
  });
}