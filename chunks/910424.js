"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(572691),
  a = n(287734),
  l = n(872810),
  u = n(40851),
  _ = n(102172),
  d = n(199902),
  c = n(592125),
  E = n(167580),
  I = n(761374),
  T = n(585483),
  h = n(915863),
  S = n(981631),
  f = n(689938),
  N = n(663237);

function A(e) {
  let {
    isCurrentUser: t,
    color: n,
    look: A,
    applicationStream: m,
    onAction: O
  } = e, {
    activeStream: R,
    watchingOtherStream: C
  } = (0, r.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(m),
    watchingOtherStream: null != m && d.Z.getAllActiveStreamsForChannel(m.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== m.ownerId
    }).length > 0
  })), p = (0, r.e7)([c.Z], () => c.Z.getChannel(null == m ? void 0 : m.channelId)), [g, L] = (0, _.wq)(p), v = (0, u.Aq)(), D = null != R && null != m && R.state !== S.jm8.ENDED && R.ownerId === m.ownerId, M = e => {
    if (null != m) null == O || O(), a.default.selectVoiceChannel(m.channelId), !D && (0, l.iV)(m, {
      forceMultiple: e
    }), v.dispatch(S.CkL.POPOUT_CLOSE), T.S.dispatch(S.CkL.MODAL_CLOSE), o.Z.popAll()
  };
  if (null == m) return null;
  let P = (0, _.P9)(L);
  t ? P = f.Z.Messages.WATCH_STREAM_STREAMING : D && (P = f.Z.Messages.WATCH_STREAM_WATCHING);
  let y = {
    color: n,
    look: A
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(h.Z, {
      disabled: t || D || !g,
      onClick: () => M(!1),
      ...y,
      fullWidth: !0,
      children: [(0, i.jsx)(I.Z, {
        className: N.streamIcon
      }), P]
    }, "play"), C && !D ? (0, i.jsx)(s.Tooltip, {
      text: f.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
      children: e => (0, i.jsx)(h.Z, {
        ...e,
        onClick: () => {
          var t;
          null === (t = e.onClick) || void 0 === t || t.call(e), M(!0)
        },
        ...y,
        className: N.iconButton,
        size: N.iconButtonSize,
        children: (0, i.jsx)(E.Z, {
          className: N.iconSize
        })
      })
    }) : null]
  })
}