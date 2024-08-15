a.d(s, {
  Z: function() {
return i;
  }
});
var E = a(735250);
a(470079);
var _ = a(388905),
  t = a(837748),
  n = a(306453),
  r = a(58346),
  L = a(963089);
let l = {
  [r.HQ.CLASSROOM]: a(320440),
  [r.HQ.LOCAL_COMMUNITIES]: a(526916),
  [r.HQ.CREATORS_HOBBIES]: a(419185),
  [r.HQ.GLOBAL_COMMUNITIES]: a(540909),
  [r.HQ.FRIENDS_FAMILY]: a(826806),
  [r.HQ.STUDY_GROUPS]: a(29654),
  [r.HQ.CREATE_FROM_SCRATCH]: a(561030),
  [r.HQ.CAMPUS_CLUBS]: a(494207),
  [r.HQ.LEAGUE_CLUBS]: a(232454),
  [r.HQ.GITHUB_HACKATHON]: a(123013)
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
} = (0, t.Z)(i);
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
    a.state === r.Rj.RESOLVED ? (0, E.jsx)(n.D, {
      className: L.usagePill,
      count: null !== (c = a.usageCount) && void 0 !== c ? c : 0,
      verifiedName: T
    }) : null
  ]
});
  }
  return (0, E.jsx)(n.Z, {
pillClassName: L.usagePill,
guildTemplate: a,
tall: !0
  });
}