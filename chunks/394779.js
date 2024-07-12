i.d(n, {
  s: function() {
return h;
  }
});
var t = i(735250),
  o = i(470079),
  a = i(120356),
  c = i.n(a),
  r = i(481060),
  l = i(346610),
  s = i(868643),
  d = i(912332),
  u = i(503349),
  _ = i(689938),
  f = i(691523);

function m() {
  (0, r.closeModal)(u.c);
}

function I(e) {
  let {
className: n,
channelId: i,
messageId: a,
target: l
  } = e, s = o.useCallback(() => {
if ('embed' === l.type) {
  (0, d.l8)({
    messageId: a,
    channelId: i,
    source: 'media-viewer',
    forwardOptions: {
      onlyEmbedIndices: [l.embedIndex]
    },
    onRequestSent: m
  });
  return;
}
(0, d.l8)({
  messageId: a,
  channelId: i,
  source: 'media-viewer',
  forwardOptions: {
    onlyAttachmentIds: [l.attachmentId]
  },
  onRequestSent: m
});
  }, [
i,
a,
l
  ]);
  return (0, t.jsx)(r.Clickable, {
className: c()(f.container, n),
onClick: s,
children: (0, t.jsx)(r.Text, {
  className: f.text,
  variant: 'text-sm/medium',
  color: 'always-white',
  children: _.Z.Messages.MESSAGE_ACTION_FORWARD
})
  });
}

function h(e, n) {
  let {
canForwardMessages: i
  } = l.w.getCurrentConfig({
location: 'ForwardLink'
  }, {
autoTrackExposure: !1
  });
  return i && (0, s.h)(e) ? i => {
let {
  className: o
} = i;
return (0, t.jsx)(I, {
  className: o,
  channelId: e.channel_id,
  messageId: e.id,
  target: n
});
  } : () => null;
}