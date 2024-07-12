n.d(t, {
  As: function() {
return A;
  },
  BP: function() {
return g;
  },
  MC: function() {
return v;
  },
  dn: function() {
return T;
  },
  hL: function() {
return N;
  },
  lK: function() {
return S;
  },
  wk: function() {
return r;
  }
}), n(789020), n(627341);
var r, i, a = n(278074),
  o = n(399606),
  s = n(432877),
  l = n(163268),
  u = n(25610),
  c = n(368844),
  d = n(768494),
  _ = n(695346),
  E = n(375954),
  f = n(496675),
  h = n(630388),
  p = n(255269),
  m = n(981631),
  I = n(689938);
(i = r || (r = {})).SPOILER = 'spoiler', i.EXPLICIT_CONTENT = 'explicit_content', i.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content';
let T = (e, t) => {
let {
  spoiler: n,
  flags: r = 0,
  content_scan_version: i
} = e;
if (t) {
  if ((0, l.Sv)(i))
    return 'potential_explicit_content';
  if ((0, h.yE)(r, m.J0y.CONTAINS_EXPLICIT_MEDIA) || s.ZP.get('obscure_blur_effect_enabled'))
    return 'explicit_content';
}
return n || (0, h.yE)(r, m.J0y.IS_SPOILER) ? 'spoiler' : null;
  },
  g = (e, t, n, r, i) => {
let {
  flags: a = 0,
  contentScanVersion: o
} = e, u = E.Z.getMessage(t, n);
if (null == u)
  return null;
if (i) {
  if (!u.author.bot && (0, l.Sv)(o))
    return 'potential_explicit_content';
  if ((0, h.yE)(a, m.xPJ.CONTAINS_EXPLICIT_MEDIA) || s.ZP.get('obscure_blur_effect_enabled'))
    return 'explicit_content';
}
return r ? 'spoiler' : null;
  },
  S = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  {
    contentScanMetadata: r
  } = e;
if (t) {
  if ((0, l.oh)(r))
    return 'potential_explicit_content';
  let {
    contentScanFlags: e
  } = r;
  if ((0, h.yE)(e, d.Cb.EXPLICIT) || s.ZP.get('obscure_blur_effect_enabled'))
    return 'explicit_content';
}
return n ? 'spoiler' : null;
  };

function A(e, t, n) {
  if (null == e)
return [
  !1,
  void 0
];
  if (n && (0, l.Sv)(e.contentScanVersion))
return [
  !0,
  'potential_explicit_content'
];
  let r = function(e) {
switch (e) {
  case c.Ah.EMBED:
    return l.lJ.Embed;
  case c.Ah.ATTACHMENT:
    return l.lJ.Attachment;
  default:
    return;
}
  }(e.type);
  return null != r && (0, l.KP)({
type: r,
media: e
  }, n) ? [
!0,
'explicit_content'
  ] : e.spoiler ? [
t,
'spoiler'
  ] : [
!1,
void 0
  ];
}

function N(e) {
  let {
channel: t,
media: n
  } = e, r = (0, o.e7)([f.Z], () => null != t && f.Z.can(m.Plq.MANAGE_MESSAGES, t)), i = _.cC.useSetting(), a = (0, u.m)();
  return A(n, !(0, p.Z)(i, r), a);
}
let v = e => (0, a.EQ)(e).with('explicit_content', () => I.Z.Messages.EXPLICIT_CONTENT_ALT).with('spoiler', () => I.Z.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0);