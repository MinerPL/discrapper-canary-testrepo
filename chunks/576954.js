n.d(t, {
  M: function() {
return f;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(286379),
  l = n(481060),
  r = n(194359),
  o = n(797614),
  c = n(378298),
  u = n(359119),
  d = n(473092),
  h = n(177342),
  m = n(134612),
  p = n(981631),
  _ = n(689938);

function f(e) {
  let {
channelId: t,
warningId: f,
senderId: E
  } = e, g = a.useCallback(() => {
(0, c.T)(t, [f]);
  }, [
t,
f
  ]), C = a.useCallback(e => () => {
r.Z.addRelationship({
  userId: E,
  context: {
    location: m.zr
  },
  type: p.OGo.BLOCKED
}), g(), (0, l.showToast)((0, l.createToast)(_.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM, l.ToastType.SUCCESS)), (0, d.qc)({
  channelId: t,
  warningId: f,
  senderId: E,
  warningType: u.pj.STRANGER_DANGER,
  cta: e
});
  }, [
g,
t,
f,
E
  ]);
  a.useEffect(() => {
(0, d.MC)(p.rMx.SAFETY_WARNING_VIEWED, {
  channelId: t,
  warningId: f,
  senderId: E,
  warningType: u.pj.STRANGER_DANGER
}), o.Z.increment({
  name: s.V.SAFETY_WARNING_VIEW
});
  }, [
t,
f,
E
  ]);
  let I = () => {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('95226').then(n.bind(n, 816960));
    return n => {
      let {
        transitionState: a,
        onClose: s
      } = n;
      return (0, i.jsx)(e, {
        transitionState: a,
        onClose: s,
        channelId: t,
        warningId: f,
        senderId: E,
        handleBlock: () => {
          x(d.NM.USER_MODAL_BLOCK_CONFIRM, d.NM.USER_MODAL_BLOCK_CANCEL, I);
        }
      });
    };
  });
},
x = (e, a, s) => {
  (0, l.openModalLazy)(async () => {
    let {
      default: l
    } = await n.e('68747').then(n.bind(n, 744373));
    return n => (0, i.jsx)(l, {
      ...n,
      userId: E,
      confirmBlock: C(e),
      onCancel: () => {
        null == s || s(), (0, d.qc)({
          channelId: t,
          warningId: f,
          senderId: E,
          warningType: u.pj.STRANGER_DANGER,
          cta: a
        });
      }
    });
  });
};
  return (0, i.jsx)(h.Q, {
channelId: t,
warningId: f,
senderId: E,
warningType: u.pj.STRANGER_DANGER,
header: _.Z.Messages.STRANGER_DANGER_BANNER_HEADER,
description: _.Z.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
onDismiss: g,
buttons: [{
    text: _.Z.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
    color: l.Button.Colors.BRAND,
    onclick: () => {
      I(), (0, d.qc)({
        channelId: t,
        warningId: f,
        senderId: E,
        warningType: u.pj.STRANGER_DANGER,
        cta: d.NM.OPEN_MORE_TIPS
      });
    }
  },
  {
    text: _.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
    color: l.Button.Colors.RED,
    onclick: () => x(d.NM.USER_BANNER_BLOCK_CONFIRM, d.NM.USER_BANNER_BLOCK_CANCEL)
  }
]
  });
}