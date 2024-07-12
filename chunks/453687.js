n.d(t, {
  Dv: function() {
return u;
  },
  Gq: function() {
return s;
  },
  Gx: function() {
return E;
  },
  XX: function() {
return l;
  },
  bX: function() {
return d;
  },
  bY: function() {
return c;
  },
  iG: function() {
return _;
  },
  ut: function() {
return o;
  }
});
var r = n(446108),
  i = n(901461),
  a = n(981631);

function o(e) {
  return 'message-content-'.concat(e.id);
}

function s(e) {
  return 'message-reply-context-'.concat(e.id);
}

function l(e, t) {
  let n = null != t ? t : e.id;
  return 'message-username-'.concat(n);
}

function u(e) {
  return 'message-timestamp-'.concat(e.id);
}

function c(e) {
  return 'message-reactions-'.concat(e.id);
}

function d(e) {
  return 'message-accessories-'.concat(e.id);
}

function _(e, t, n) {
  let c = e.type === a.uaV.REPLY && null != e.messageReference,
_ = e.embeds.length > 0,
E = e.attachments.length > 0,
f = e.stickerItems.length > 0,
h = e.codedLinks.length > 0,
p = e.hasFlag(a.iLy.HAS_THREAD),
m = _ || E || f || h || p || e.type === a.uaV.THREAD_CREATED,
I = _ && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
T = e.type !== a.uaV.DEFAULT || !I && '' !== e.content,
g = (0, i.Z)(e),
S = !g && (null == n ? void 0 : n.hasTimestamp) !== !1,
A = l(e, t),
N = s(e),
v = g ? '' : ''.concat(c ? N : A, ' ').concat(r.Z0);
  if (T) {
let t = o(e);
v += ' '.concat(t);
  }
  if (m) {
let t = d(e);
v += ' '.concat(t);
  }
  if (S) {
let t = u(e);
v += ' '.concat(r.fy, ' ').concat(t);
  }
  return v.trim();
}

function E(e) {
  if (0 === e.reactions.length)
return;
  let t = c(e);
  return ''.concat(r.Mb, ' ').concat(t);
}