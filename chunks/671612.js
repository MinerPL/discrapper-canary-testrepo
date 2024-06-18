"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(399606),
  l = n(481060),
  u = n(596454),
  _ = n(315744),
  d = n(208049),
  c = n(135869),
  E = n(763296),
  I = n(22382),
  T = n(747071),
  h = n(964297),
  S = n(632184),
  f = n(361029);
t.Z = function(e) {
  let {
    soundId: t,
    jumbo: n = !1
  } = e, {
    currentPreviewRef: s
  } = r.useContext(c.Z), N = (0, a.e7)([E.Z], () => E.Z.getSoundById(t)), A = (null == N ? void 0 : N.emojiId) != null || (null == N ? void 0 : N.emojiName) != null, [m, O] = r.useState(!1), R = (0, _.P)("soundmoji_chat_mention"), C = r.useCallback(() => {
    var e;
    null == N && (0, d.w)();
    let n = new Audio((0, I.Z)(t));
    null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, T.Z)(null !== (e = null == N ? void 0 : N.volume) && void 0 !== e ? e : .5), O(!0), n.play(), n.addEventListener("ended", () => {
      O(!1)
    }, {
      once: !0
    })
  }, [t, N, s, O]);
  return R ? null == N ? (0, i.jsxs)(l.Clickable, {
    title: "Risky Click",
    tag: "span",
    onClick: C,
    className: f.container,
    children: [(0, i.jsx)(S.Z, {
      className: f.unknownSound
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-md/normal",
      color: "none",
      className: f.text,
      children: "Unknown"
    })]
  }) : n ? (0, i.jsxs)(l.Clickable, {
    onClick: C,
    className: f.jumboContainer,
    children: [(0, i.jsx)("div", {
      className: o()(f.jumboOverlay, {
        [f.playing]: m
      }),
      children: (0, i.jsx)(h.Z, {
        className: f.__invalid_jumboPlayIcon
      })
    }), A && (0, i.jsx)(u.Z, {
      emojiId: null == N ? void 0 : N.emojiId,
      emojiName: null == N ? void 0 : N.emojiName,
      className: f.jumboEmoji
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-lg/normal",
      color: "none",
      className: f.text,
      children: N.name
    })]
  }) : (0, i.jsxs)(l.Clickable, {
    tag: "span",
    onClick: C,
    className: f.container,
    children: [A && (0, i.jsx)(u.Z, {
      emojiId: null == N ? void 0 : N.emojiId,
      emojiName: null == N ? void 0 : N.emojiName,
      className: f.emoji
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-md/normal",
      color: "none",
      className: f.text,
      children: N.name
    })]
  }) : null
}