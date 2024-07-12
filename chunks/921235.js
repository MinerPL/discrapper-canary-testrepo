n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(904245),
  d = n(268350),
  u = n(926491),
  h = n(419922),
  p = n(314897),
  m = n(375954),
  _ = n(594174),
  f = n(626135),
  E = n(51144),
  C = n(901461),
  g = n(981631),
  I = n(689938),
  x = n(383953);
let T = '749054660769218631';

function v(e) {
  var t;
  let {
channel: n
  } = e, [l, v] = a.useState('');
  a.useEffect(() => {
(0, d.FQ)('847199849233514549', !0);
  }, []);
  let N = (0, r.e7)([
  m.Z,
  p.default
], () => !!s()(m.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== p.default.getId() && e.state === g.yb.SENT && !(0, C.Z)(e))),
S = (0, r.e7)([_.default], () => _.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
Z = null !== (t = E.ZP.useName(S)) && void 0 !== t ? t : I.Z.Messages.WAVE_DEFAULT_RECIPIENT,
A = (0, r.e7)([u.Z], () => u.Z.getStickerById(T)),
M = a.useCallback(async () => {
  if (null == l || '' === l)
    try {
      await c.Z.sendGreetMessage(n.id, T), f.default.track(g.rMx.DM_EMPTY_ACTION, {
        channel_id: n.id,
        channel_type: n.type,
        source: 'Wave',
        type: 'Send wave'
      });
    } catch (e) {
      !e.ok && 429 === e.status && v(I.Z.Messages.RATE_LIMITED);
    }
}, [
  n.id,
  n.type,
  l
]),
b = I.Z.Messages.WAVE_TO.format({
  username: Z
}),
R = null != l && '' !== l ? (0, i.jsx)(o.Text, {
  className: x.error,
  color: 'text-danger',
  variant: 'text-sm/normal',
  children: l
}) : null;
  return N ? (0, i.jsxs)('div', {
className: x.containerCompact,
children: [
  (0, i.jsxs)(o.Clickable, {
    className: null != l && '' !== l ? x.compactButtonDisabled : x.compactButton,
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
    disabled: !!l,
    children: b
  }),
  R
]
  });
}