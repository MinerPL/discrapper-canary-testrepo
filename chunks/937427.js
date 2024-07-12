t.d(n, {
  w: function() {
return d;
  }
}), t(47120), t(653041), t(733860);
var i = t(470079),
  a = t(581364),
  s = t(984933),
  l = t(496675),
  o = t(282923),
  r = t(981631),
  c = t(689938);

function d(e) {
  let n = i.useMemo(() => {
  let n = s.ZP.getChannels(e),
    t = [...n[s.sH]];
  t.push(...n[s.Zb].filter(e => e.channel.isGuildVocal()));
  let i = t.map(e => ({
    id: e.channel.id,
    name: e.channel.name,
    canManage: l.Z.can(r.Plq.MANAGE_ROLES, e.channel)
  }));
  return i.unshift({
    id: (0, a.bD)(e),
    name: c.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
    canManage: !0
  }), i;
}, [e]),
[t, d] = i.useState(''),
I = i.useMemo(() => {
  let e = function(e) {
    return e.startsWith('#') ? e.substr(1) : e;
  }(t);
  return (0, o.B)(n, u, e);
}, [
  n,
  t
]);
  return {
query: t,
results: I,
setQuery: d,
unfilteredCount: n.length
  };
}

function u(e) {
  return {
id: e.id,
names: [e.name]
  };
}