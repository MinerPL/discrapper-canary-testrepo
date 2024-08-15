n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(904245),
  u = n(268350),
  d = n(926491),
  h = n(419922),
  m = n(314897),
  p = n(375954),
  _ = n(594174),
  f = n(626135),
  E = n(51144),
  g = n(901461),
  C = n(981631),
  I = n(689938),
  x = n(480325);
let T = '749054660769218631';

function N(e) {
  var t;
  let {
channel: n
  } = e, [s, N] = a.useState('');
  a.useEffect(() => {
(0, u.FQ)('847199849233514549', !0);
  }, []);
  let v = (0, r.e7)([
  p.Z,
  m.default
], () => !!l()(p.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== m.default.getId() && e.state === C.yb.SENT && !(0, g.Z)(e))),
S = (0, r.e7)([_.default], () => _.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
Z = null !== (t = E.ZP.useName(S)) && void 0 !== t ? t : I.Z.Messages.WAVE_DEFAULT_RECIPIENT,
A = (0, r.e7)([d.Z], () => d.Z.getStickerById(T)),
M = a.useCallback(async () => {
  if (null == s || '' === s)
    try {
      await c.Z.sendGreetMessage(n.id, T), f.default.track(C.rMx.DM_EMPTY_ACTION, {
        channel_id: n.id,
        channel_type: n.type,
        source: 'Wave',
        type: 'Send wave'
      });
    } catch (e) {
      !e.ok && 429 === e.status && N(I.Z.Messages.RATE_LIMITED);
    }
}, [
  n.id,
  n.type,
  s
]),
b = I.Z.Messages.WAVE_TO.format({
  username: Z
}),
R = null != s && '' !== s ? (0, i.jsx)(o.Text, {
  className: x.error,
  color: 'text-danger',
  variant: 'text-sm/normal',
  children: s
}) : null;
  return v ? (0, i.jsxs)('div', {
className: x.containerCompact,
children: [
  (0, i.jsxs)(o.Clickable, {
    className: null != s && '' !== s ? x.compactButtonDisabled : x.compactButton,
    'aria-label': I.Z.Messages.SEND_WAVE,
    onClick: M,
    children: [
      (0, i.jsx)(h.ZP, {
        sticker: A,
        size: 24
      }),
      (0, i.jsx)(o.Text, {
        className: x.text,
        variant: 'text-md/medium',
        children: b
      })
    ]
  }),
  R
]
  }) : (0, i.jsxs)('div', {
className: x.containerExpanded,
children: [
  (0, i.jsx)(h.ZP, {
    sticker: A,
    size: 160
  }),
  (0, i.jsx)(o.Button, {
    className: x.button,
    onClick: M,
    disabled: !!s,
    children: b
  }),
  R
]
  });
}