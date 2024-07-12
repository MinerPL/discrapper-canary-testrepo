t.d(n, {
  Es: function() {
return g;
  },
  Eu: function() {
return I;
  },
  Yp: function() {
return N;
  },
  bt: function() {
return h;
  }
}), t(47120), t(653041);
var r = t(470079),
  u = t(392711),
  l = t(259443),
  i = t(286379),
  c = t(442837),
  a = t(413523),
  o = t(797614),
  s = t(314897),
  d = t(878884),
  f = t(19780),
  C = t(979651),
  Z = t(413402);
let E = new l.Y('RTCConnectionDesyncHooks');

function g(e, n) {
  let t = (0, Z.M)(),
l = (0, c.e7)([
  d.Z,
  f.Z
], () => t && e === f.Z.getChannelId() ? d.Z.getDesyncedVoiceStates() : null);
  return r.useMemo(() => function(e, n) {
if (!(0, Z.i)() || null == e || 0 === e.length)
  return n;
let t = [],
  r = new Set();
for (let e of n)
  t.push(e), r.add(e.user.id);
return e.forEach(e => {
  r.has(e.user.id) && (E.info('Found duplicate user voice state: '.concat(e.user.id, '.')), o.Z.increment({
    name: i.V.RTC_CONNECTION_DUPLICATE_USER
  })), t.splice((0, u.sortedIndexBy)(t, e, e => {
    let {
      comparator: n
    } = e;
    return n;
  }), 0, e);
}), t;
  }(l, n), [
l,
n
  ]);
}

function h(e, n) {
  let t = function(e) {
let n = (0, Z.M)();
return (0, c.e7)([
  d.Z,
  f.Z
], () => n && e === f.Z.getChannelId() ? d.Z.getDesyncedParticipants() : null);
  }(e);
  return r.useMemo(() => function(e, n) {
if (!(0, Z.i)() || null == e || 0 === e.length)
  return n;
let t = [...n];
return e.forEach(e => {
  t.splice((0, u.sortedIndexBy)(t, e, e => (0, a.Yr)(e)), 0, e);
}), t;
  }(t, n), [
t,
n
  ]);
}

function N(e, n) {
  let t = (0, Z.M)(),
u = (0, c.e7)([
  d.Z,
  f.Z
], () => t && e === f.Z.getChannelId() ? d.Z.getDesyncedUserIds() : null);
  return r.useMemo(() => {
let e = new Set();
return n.forEach(n => e.add(n)), null == u || u.forEach(n => e.add(n)), e;
  }, [
u,
n
  ]);
}

function I(e, n) {
  let t = (0, Z.M)(),
u = (0, c.e7)([s.default], () => s.default.getId() === n),
l = (0, c.e7)([f.Z], () => f.Z.getChannelId()),
i = r.useRef(null),
[a, o] = r.useState(!1),
[d, E] = r.useState(!1),
g = (0, c.e7)([
  f.Z,
  C.Z
], () => null != n && null != e && f.Z.getChannelId() === e && null != C.Z.isInChannel(e, n) && f.Z.isUserConnected(n)),
h = (0, c.e7)([
  f.Z,
  C.Z
], () => null != n && null != e && f.Z.getChannelId() === e && null != C.Z.isInChannel(e, n) && !f.Z.isUserConnected(n));
  return r.useEffect(() => {
g && E(!0);
  }, [g]), r.useEffect(() => {
l !== e && E(!1);
  }, [
e,
l
  ]), r.useEffect(() => (h && null == i.current ? i.current = setTimeout(() => {
i.current = null, o(!0);
  }, 250) : (clearTimeout(i.current), i.current = null, o(!1)), () => {
clearTimeout(i.current), i.current = null;
  }), [h]), t && !u && d && a;
}