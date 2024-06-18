"use strict";
n.d(t, {
  A7: function() {
    return O
  },
  dE: function() {
    return C
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(685501),
  l = n(481060),
  u = n(410030),
  _ = n(541716),
  d = n(752305),
  c = n(893718),
  E = n(931651),
  I = n(131704),
  T = n(401227),
  h = n(142550),
  S = n(981631),
  f = n(689938),
  N = n(370577);
let A = (0, I.kt)({
    id: "1",
    type: S.d4z.DM
  }),
  m = r.forwardRef(function(e, t) {
    let {
      placeholder: n,
      headerText: r,
      onEnter: s,
      showPopout: a,
      children: _,
      hide: d
    } = e, c = (0, u.ZP)();
    return (0, i.jsx)(l.Popout, {
      align: "right",
      position: "bottom",
      shouldShow: a,
      disablePointerEvents: !1,
      renderPopout: () => (0, i.jsx)("div", {
        className: o()([N.reply, "theme-".concat(c)]),
        ref: t,
        children: (0, i.jsx)(l.FocusLock, {
          containerRef: t,
          children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(l.Text, {
              variant: "text-xs/bold",
              className: N.replyHeader,
              children: null != r ? r : f.Z.Messages.CHAT
            }), (0, i.jsx)(O, {
              onEnter: e => {
                s(e), d()
              },
              placeholder: null != n ? n : f.Z.Messages.CHAT
            })]
          })
        })
      }),
      children: () => _
    })
  });

function O(e) {
  let {
    placeholder: t,
    onEnter: n,
    setEditorRef: s,
    showEmojiButton: a = !1,
    renderAttachButton: l,
    autoFocus: u = !0,
    onFocus: E,
    channel: I,
    className: T
  } = e, [S, f] = r.useState(""), [m, O] = r.useState((0, d.JM)("")), R = () => {
    f(""), O((0, d.JM)(""))
  }, C = _.I.ATOMIC_REACTOR_REPLY_INPUT, p = r.useRef(null);
  return (0, i.jsx)(c.Z, {
    ref: p,
    placeholder: t,
    editorClassName: T,
    className: o()(N.replyInput, T),
    showRemainingCharsAfterCount: -1,
    allowNewLines: !1,
    maxCharacterCount: h.z,
    channel: null != I ? I : A,
    onChange: (e, t, n) => {
      f(t), O(n)
    },
    type: a ? {
      ...C,
      emojis: {
        button: !0
      }
    } : C,
    textValue: S,
    richValue: m,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return t.length > h.z ? Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      }) : (n(t), R(), Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !1
      }))
    },
    setEditorRef: s,
    focused: u,
    onFocus: E,
    disableThemedBackground: !0,
    emojiPickerCloseOnModalOuterClick: !0,
    disabled: !1,
    autoCompletePosition: (() => {
      if (null == p.current) return "top";
      let e = p.current.getBoundingClientRect(),
        t = window.innerHeight;
      return e.top < t / 2 ? "bottom" : "top"
    })(),
    renderAttachButton: l
  })
}
let R = (e, t) => {
    r.useEffect(() => {
      let n = t => {
          "Escape" === t.key && e()
        },
        i = n => {
          var i;
          null != n.target && !(null == t ? void 0 : null === (i = t.current) || void 0 === i ? void 0 : i.contains(null == n ? void 0 : n.target)) && e()
        };
      return document.addEventListener("keydown", n), document.addEventListener("mousedown", i), () => {
        document.removeEventListener("keydown", n), document.removeEventListener("mousedown", i)
      }
    }, [e, t])
  },
  C = e => {
    let {
      onSelectEmoji: t,
      onClick: n
    } = e, s = (0, u.ZP)(), [o, a] = r.useState(!1), _ = r.useRef(null);
    return R(() => a(!1), _), (0, i.jsx)(l.Popout, {
      align: "right",
      position: "top",
      shouldShow: o,
      disablePointerEvents: !1,
      renderPopout: () => (0, i.jsx)("div", {
        className: "theme-".concat(s),
        ref: _,
        children: (0, i.jsx)(E.$, {
          messageId: S.lds,
          channel: A,
          closePopout: () => {
            a(!1)
          },
          onSelectEmoji: (e, n, i) => {
            null != e && (t(e, n, i), a(!1))
          }
        })
      }),
      children: () => (0, i.jsx)(l.Tooltip, {
        text: f.Z.Messages.ADD_REACTION,
        children: e => (0, i.jsx)("div", {
          ...e,
          className: N.reaction,
          children: (0, i.jsx)(T.Z, {
            active: !1,
            tabIndex: 0,
            onClick: () => {
              null == n || n(), a(!0)
            }
          })
        })
      })
    })
  };
t.ZP = e => {
  let {
    onInteraction: t,
    replyHeaderText: n,
    replyPlaceholder: s,
    showReact: u = !0,
    showReply: _ = !0
  } = e, [d, c] = r.useState(!1), E = r.useRef(null);
  return R(() => c(!1), E), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: N.reactions,
      children: [u && (0, i.jsx)(C, {
        onSelectEmoji: e => {
          null != e && t({
            interactionType: h.L.ReactSubmit,
            emoji: e,
            reply: null
          })
        },
        onClick: () => {
          t({
            interactionType: h.L.ReactBegin,
            emoji: null,
            reply: null
          }), c(!1)
        }
      }), _ && (0, i.jsx)(m, {
        hide: () => c(!1),
        ref: E,
        headerText: n,
        placeholder: s,
        showPopout: d,
        onEnter: e => {
          t({
            interactionType: h.L.ReplySubmit,
            emoji: null,
            reply: e
          })
        },
        children: (0, i.jsx)(l.Tooltip, {
          text: f.Z.Messages.MESSAGE_ACTION_REPLY,
          children: e => (0, i.jsx)("button", {
            ...e,
            className: o()(N.reaction, N.emojiButton),
            onClick: () => {
              t({
                interactionType: h.L.ReplyBegin,
                emoji: null,
                reply: null
              }), c(!0)
            },
            children: (0, i.jsx)(a.n, {})
          })
        })
      })]
    })
  })
}