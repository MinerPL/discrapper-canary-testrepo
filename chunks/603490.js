n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(873546),
  s = n(481060),
  l = n(373662),
  r = n(689938);

function o(e) {
  let {
channel: t,
message: n,
togglePopout: o,
renderEmojiPicker: c,
shouldShow: u
  } = e;
  return (0, i.jsx)(s.Popout, {
animation: s.Popout.Animation.FADE,
renderPopout: e => {
  let {
    closePopout: i
  } = e;
  return c(t, n, i, !1);
},
shouldShow: u,
onRequestClose: o,
position: a.tq ? 'top' : 'left',
align: a.tq ? 'center' : 'top',
children: () => (0, i.jsx)(l.s, {
  label: r.Z.Messages.ADD_REACTION,
  icon: s.ReactionIcon,
  onClick: o
}, 'add-reaction')
  });
}