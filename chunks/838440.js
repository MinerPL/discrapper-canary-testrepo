"use strict";
n.d(t, {
  v: function() {
    return T
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(468026),
  a = n(673750),
  l = n(300429),
  u = n(594174),
  _ = n(626135),
  d = n(760729),
  c = n(74538),
  E = n(981631),
  I = n(689938);

function T(e) {
  let {
    openWarningPopout: t,
    type: n,
    content: T,
    stickers: h,
    uploads: S,
    channel: f,
    restrictMentions: N = !0,
    respectCooldown: A = !0
  } = e, m = c.ZP.canUseIncreasedMessageLength(u.default.getCurrentUser());
  return new Promise(e => (function(e) {
    var t, n, u;
    let {
      openWarningPopout: c,
      type: T,
      content: h,
      stickers: S,
      uploads: f,
      channel: N,
      restrictMentions: A,
      respectCooldown: m,
      userCanUsePremiumMessageLength: O,
      resolve: R
    } = e;
    if (0 === h.length && !(null === (t = T.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == S || 0 === S.length) && (null == f || 0 === f.length)) {
      R({
        valid: !1,
        failureReason: E.zYc.EMPTY_MESSAGE
      });
      return
    }
    let C = O ? E.en1 : E.J6R;
    if (h.length > C) {
      if (O || null == N) {
        ;
        n = h.length, u = C, (0, r.openModal)(e => (0, i.jsx)(o.default, {
          title: I.Z.Messages.MESSAGE_TOO_LONG_HEADER,
          body: I.Z.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
            currentLength: n,
            maxLength: u
          }),
          confirmText: I.Z.Messages.OKAY,
          ...e
        })), _.default.track(E.rMx.OPEN_MODAL, {
          type: "Message Too Long Alert",
          message_content_length: n
        })
      } else s.Z.dispatch({
        type: "MESSAGE_LENGTH_UPSELL",
        channel: N,
        content: h
      });
      R({
        valid: !1,
        failureReason: E.zYc.MESSAGE_TOO_LONG
      });
      return
    }
    if (null != N) {
      if (null != N.getGuildId() && m && l.Z.getSlowmodeCooldownGuess(N.id) > 0) {
        R({
          valid: !1,
          failureReason: E.zYc.SLOWMODE_COOLDOWN
        });
        return
      }
      if (null != c)
        for (let {
            check: e,
            analyticsType: t,
            animation: n
          }
          of d.$) {
          let i = e(h, N, A);
          if (!1 !== i) {
            c({
              analyticsType: t,
              channel: N,
              onCancel: () => R({
                valid: !1,
                failureReason: E.zYc.SHOUTING_CANCELLED
              }),
              onConfirm: () => R({
                valid: !0
              }),
              popoutText: i,
              animation: n
            });
            return
          }
        }
    }
    if (a.ZP.isFull()) {
      (0, r.openModal)(e => (0, i.jsx)(o.default, {
        title: I.Z.Messages.MESSAGE_RATE_LIMITED_HEADER,
        body: I.Z.Messages.MESSAGE_RATE_LIMITED_BODY,
        confirmText: I.Z.Messages.MESSAGE_RATE_LIMITED_BUTTON,
        ...e
      }), {
        onCloseRequest: E.dG4
      }), R({
        valid: !1,
        failureReason: E.zYc.RATE_LIMITED
      });
      return
    }
    R({
      valid: !0
    })
  })({
    openWarningPopout: t,
    type: n,
    content: T,
    stickers: h,
    uploads: S,
    channel: f,
    restrictMentions: N,
    respectCooldown: A,
    userCanUsePremiumMessageLength: m,
    resolve: e
  }))
}