"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
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
  } = e, a = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[a]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: d,
    stickers: c,
    event: E,
    eventProperties: f
  } = e, [T, m] = a.useState(!1), S = a.useMemo(() => p({
    assets: c,
    currentUser: t,
    message: l
  }), [c, t, l]), C = a.useMemo(() => p({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), A = a.useCallback(async () => {
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
      message: l,
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
  }, [n, l, S, E, f]);
  return (0, s.jsxs)(i.Button, {
    className: N.CTAMessageButtonOuter,
    innerClassName: N.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onClick: A,
    children: [(0, s.jsx)(u.default, {
      className: N.CTAMessageSticker,
      isInteracting: T,
      sticker: S,
      size: 28
    }), C]
  })
}

function C(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: a,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = f.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, l.useStateFromStores)([E.default, c.default], () => {
      var e;
      let a = t.guild_id;
      if (null == s || null == a) return !1;
      let l = (0, d.computeIsReadOnlyThread)(t),
        i = E.default.can(m.Permissions.SEND_MESSAGES, t),
        r = null === (e = c.default.getMember(a, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !l && !r && !o
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
      buttonLabels: a,
      stickers: i,
      event: r,
      eventProperties: o
    })
  }) : null
}