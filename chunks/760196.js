n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(998698),
  u = n(824203),
  c = n(713583),
  d = n(920455),
  _ = n(931981),
  E = n(407661),
  f = n(497471);
t.Z = i.memo(e => {
  let {
channel: t,
type: n,
activeCommand: i,
pendingReply: a
  } = e, {
activeCommandOption: h,
activeCommandOptionStates: p
  } = (0, o.cj)([l.Z], () => ({
activeCommandOption: l.Z.getActiveOption(t.id),
activeCommandOptionStates: l.Z.getOptionStates(t.id)
  })), m = (0, _.e)(t), I = (0, u.__)(i, t, {
location: 'ChannelTextAreaBars'
  }), T = [];
  return (null != i && (I && T.push((0, r.jsx)(d.Z, {
activeCommand: i
  })), T.push((0, r.jsx)(c.Z, {
activeCommand: i,
activeOption: null != h ? h : null,
optionStates: p
  }))), null != a && T.push((0, r.jsx)(E.Z, {
reply: a,
chatInputType: n
  })), m && T.push((0, r.jsx)(_.V, {})), 0 === (T = T.map((e, t) => {
let n = t === T.length - 1;
return (0, r.jsx)('div', {
  className: s()({
    [f.stackedAttachedBar]: !n
  }),
  children: e
}, t);
  })).length) ? null : (0, r.jsx)('div', {
className: f.attachedBars,
children: T
  });
});