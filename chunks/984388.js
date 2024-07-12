t.r(s), t(47120);
var n = t(735250),
  i = t(470079),
  r = t(593473),
  a = t(478677),
  o = t(457330),
  l = t(417663),
  c = t(981631);

function d(e) {
  let {
platformType: s
  } = e, [t, a] = i.useState('verifying');
  return i.useEffect(() => {
let {
  code: e,
  state: t
} = r.parse(window.location.search);
if (null == e || null == t) {
  a('error');
  return;
}
o.Z.linkDispatchAuthCallback(s, {
  code: e,
  state: t
}).then(e => {
  let {
    status: s
  } = e;
  a(204 === s ? 'verified' : 'error');
}, () => {
  a('error');
});
  }, [s]), (0, n.jsx)(l.AccountConnectionResult, {
platformType: s,
verifying: 'verifying' === t,
verified: 'verified' === t
  });
}
s.default = function(e) {
  let {
match: s
  } = e, t = s.params.type, {
two_way_link_type: i
  } = r.parse(window.location.search);
  return [
c.ABu.XBOX,
c.ABu.PLAYSTATION_STAGING,
c.ABu.PLAYSTATION,
c.ABu.CRUNCHYROLL
  ].includes(t) && i === a.g.DESKTOP ? (0, n.jsx)(d, {
platformType: t
  }) : null;
};