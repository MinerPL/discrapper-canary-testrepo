n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(842146),
  s = n(293177),
  o = n(349407),
  l = n(49012),
  u = n(202120),
  c = n(981631);

function d(e) {
  let {
platformType: t,
location: d,
overrideUrl: _,
successRedirect: E
  } = e;
  if (t === c.ABu.LEAGUE_OF_LEGENDS && (t = c.ABu.RIOT_GAMES), t === c.ABu.CRUNCHYROLL) {
a.K([null != d ? d : 'unknown']);
return;
  }
  if (t === c.ABu.XBOX) {
o.K([null != d ? d : 'unknown']);
return;
  }
  if (t === c.ABu.PLAYSTATION || t === c.ABu.PLAYSTATION_STAGING) {
s.K([null != d ? d : 'unknown'], t);
return;
  }
  if (t === c.ABu.DOMAIN) {
(0, i.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('64941').then(n.bind(n, 907053));
  return t => (0, r.jsx)(e, {
    analyticsLocation: [null != d ? d : 'unknown'],
    ...t
  });
});
return;
  }
  if (null != _) {
(0, l.q)({
  shouldConfirm: !0,
  href: _,
  onConfirm: () => {
    (0, u.H)(t, {
      location: d,
      successRedirect: E
    }, _);
  }
});
return;
  }
  (0, u.H)(t, {
location: d,
successRedirect: E
  });
}