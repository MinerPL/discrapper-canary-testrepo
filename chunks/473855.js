a.d(s, {
  Z: function() {
return i;
  }
});
var E = a(735250);
a(470079);
var _ = a(388905),
  n = a(837748),
  r = a(306453),
  t = a(58346),
  L = a(804498);
let l = {
  [t.HQ.CLASSROOM]: a(320440),
  [t.HQ.LOCAL_COMMUNITIES]: a(526916),
  [t.HQ.CREATORS_HOBBIES]: a(419185),
  [t.HQ.GLOBAL_COMMUNITIES]: a(540909),
  [t.HQ.FRIENDS_FAMILY]: a(826806),
  [t.HQ.STUDY_GROUPS]: a(29654),
  [t.HQ.CREATE_FROM_SCRATCH]: a(561030),
  [t.HQ.CAMPUS_CLUBS]: a(494207),
  [t.HQ.LEAGUE_CLUBS]: a(232454),
  [t.HQ.GITHUB_HACKATHON]: a(123013)
};

function i(e) {
  let {
headerId: s,
guildTemplate: a
  } = e, i = a.code, M = l[i];
  if (null != M) {
var c;
let {
  header: e,
  description: l,
  author: T
} = (0, n.Z)(i);
return (0, E.jsxs)('div', {
  children: [
    (0, E.jsx)('img', {
      className: L.image,
      src: M,
      alt: ''
    }),
    (0, E.jsx)(_.Dx, {
      className: L.header,
      id: s,
      children: e
    }),
    (0, E.jsx)(_.DK, {
      children: l
    }),
    a.state === t.Rj.RESOLVED ? (0, E.jsx)(r.D, {
      className: L.usagePill,
      count: null !== (c = a.usageCount) && void 0 !== c ? c : 0,
      verifiedName: T
    }) : null
  ]
});
  }
  return (0, E.jsx)(r.Z, {
pillClassName: L.usagePill,
guildTemplate: a,
tall: !0
  });
}