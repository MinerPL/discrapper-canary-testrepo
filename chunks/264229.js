n.d(t, {
  fU: function() {
return l;
  },
  jX: function() {
return u;
  },
  mb: function() {
return s;
  },
  tV: function() {
return o;
  }
}), n(47120);
var r = n(664751),
  i = n(898450);
let a = 'event';

function s(e, t) {
  return null == t ? e : o({
baseCode: e,
guildScheduledEventId: function(e) {
  let t = '?' === e.charAt(0) ? e.substring(1) : e;
  try {
    let e = r.parse(t);
    return (0, i.d)(e[a]);
  } catch (e) {
    return;
  }
}(t)
  });
}

function o(e) {
  let {
baseCode: t,
guildScheduledEventId: n
  } = e;
  return null == n ? t : ''.concat(t, '?').concat(a, '=').concat(n);
}

function l(e) {
  let [t, n] = e.split('?');
  if (null == n)
return {
  baseCode: t
};
  let s = r.parse(n);
  return {
baseCode: t,
guildScheduledEventId: (0, i.d)(s[a])
  };
}

function u(e) {
  let [t] = e.split('?');
  return t;
}