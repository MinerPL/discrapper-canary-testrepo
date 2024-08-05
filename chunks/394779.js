n.d(t, {
  s: function() {
return T;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(346610),
  c = n(868643),
  u = n(912332),
  d = n(503349),
  _ = n(689938),
  E = n(691523);

function I() {
  (0, l.closeModal)(d.c);
}

function m(e) {
  let {
className: t,
channelId: n,
messageId: a,
target: o
  } = e, c = s.useCallback(() => {
if ('embed' === o.type) {
  (0, u.l8)({
    messageId: a,
    channelId: n,
    source: 'media-viewer',
    forwardOptions: {
      onlyEmbedIndices: [o.embedIndex]
    },
    onRequestSent: I
  });
  return;
}
(0, u.l8)({
  messageId: a,
  channelId: n,
  source: 'media-viewer',
  forwardOptions: {
    onlyAttachmentIds: [o.attachmentId]
  },
  onRequestSent: I
});
  }, [
n,
a,
o
  ]);
  return (0, i.jsx)(l.Clickable, {
className: r()(E.container, t),
onClick: c,
children: (0, i.jsx)(l.Text, {
  className: E.text,
  variant: 'text-sm/medium',
  color: 'always-white',
  children: _.Z.Messages.MESSAGE_ACTION_FORWARD
})
  });
}

function T(e, t) {
  let {
canForwardMessages: n
  } = (0, o.WT)({
location: 'ForwardLink'
  }, {
autoTrackExposure: !1
  });
  return n && (0, c.h)(e) ? n => {
let {
  className: s
} = n;
return (0, i.jsx)(m, {
  className: s,
  channelId: e.channel_id,
  messageId: e.id,
  target: t
});
  } : () => null;
}