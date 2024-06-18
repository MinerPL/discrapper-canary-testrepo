"use strict";
n.d(t, {
  NK: function() {
    return p
  },
  R6: function() {
    return R
  },
  ok: function() {
    return O
  },
  vN: function() {
    return C
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(570140),
  l = n(430742),
  u = n(40851),
  _ = n(367907),
  d = n(727429),
  c = n(703656),
  E = n(359110),
  I = n(695346),
  T = n(703558),
  h = n(944486),
  S = n(979651),
  f = n(585483),
  N = n(124368),
  A = n(981631),
  m = n(176505);

function O(e, t, n) {
  u.UI.dispatch(A.CkL.POPOUT_CLOSE);
  let i = !o().isEmpty(S.Z.getVoiceStatesForChannel(e.id));
  if (t || !I.vF.getSetting() || __OVERLAY__ || i) {
    a.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, E.ad)(e, n) : (0, E.Kh)(e.id);
    return
  }
  r()(null != e.parent_id, "all threads must have parents");
  let s = h.Z.getChannelId();
  e.parent_id !== s && !(0, m.ME)(s) && (0, E.Kh)(e.parent_id), (0, c.uL)(A.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, m.ME)(s) ? m.oC.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? N.on.FORUM : void 0), setTimeout(() => {
    f.S.dispatch(A.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function R(e, t, n) {
  if (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, _.yw)(A.rMx.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), u.UI.dispatch(A.CkL.POPOUT_CLOSE), h.Z.getChannelId() !== e.id && (0, E.Kh)(e.id), "" === T.Z.getDraft(e.id, T.d.FirstThreadMessage)) {
    let t = T.Z.getDraft(e.id, T.d.ChannelMessage);
    l.Z.saveDraft(e.id, "", T.d.ChannelMessage), l.Z.saveDraft(e.id, t, T.d.FirstThreadMessage)
  }
  setTimeout(() => {
    a.Z.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? void 0 : t.id,
      location: n
    })
  }, 0)
}

function C(e, t) {
  (0, c.uL)(A.Z5c.CHANNEL(e, (0, m.ME)(t) ? m.oC.GUILD_HOME : t)), a.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function p(e) {
  a.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), a.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: T.d.FirstThreadMessage
  }), a.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: T.d.ThreadSettings
  })
}