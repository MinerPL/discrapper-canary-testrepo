"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("819689"),
  o = n("850391"),
  u = n("41170"),
  d = n("300322"),
  c = n("26989"),
  E = n("957255"),
  f = n("697218"),
  _ = n("599110"),
  T = n("299039"),
  I = n("718422"),
  m = n("49111"),
  N = n("440178");

function p(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, l = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[l]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: a,
    buttonLabels: d,
    stickers: c,
    event: E,
    eventProperties: f
  } = e, [T, m] = l.useState(!1), S = l.useMemo(() => p({
    assets: c,
    currentUser: t,
    message: a
  }), [c, t, a]), A = l.useMemo(() => p({
    assets: d,
    currentUser: t,
    message: a
  }), [d, t, a]), C = l.useCallback(async () => {
    let {
      valid: e
    } = await (0, I.applyChatRestrictions)({
      type: o.ChatInputTypes.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: s
      } = e;
      r.default.sendGreetMessage(t.id, s.id, r.default.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: !0,
        showMentionToggle: !0
      }))
    }({
      channel: n,
      message: a,
      sticker: S
    }), ! function(e) {
      let {
        sticker: t,
        event: n,
        eventProperties: s
      } = e;
      null != n && _.default.track(n, {
        ...s,
        sticker_id: t.id
      })
    }({
      sticker: S,
      event: E,
      eventProperties: f
    }))
  }, [n, a, S, E, f]);
  return (0, s.jsxs)(i.Button, {
    className: N.CTAMessageButtonOuter,
    innerClassName: N.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onClick: C,
    children: [(0, s.jsx)(u.default, {
      className: N.CTAMessageSticker,
      isInteracting: T,
      sticker: S,
      size: 28
    }), A]
  })
}

function A(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: l,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = f.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, a.useStateFromStores)([E.default, c.default], () => {
      var e;
      let l = t.guild_id;
      if (null == s || null == l) return !1;
      let a = (0, d.computeIsReadOnlyThread)(t),
        i = E.default.can(m.Permissions.SEND_MESSAGES, t),
        r = null === (e = c.default.getMember(l, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !a && !r && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: u
  });
  return null != u && _ ? (0, s.jsx)("div", {
    className: N.CTAMessage,
    children: (0, s.jsx)(S, {
      currentUser: u,
      channel: t,
      message: n,
      buttonLabels: l,
      stickers: i,
      event: r,
      eventProperties: o
    })
  }) : null
}