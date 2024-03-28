"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("430742"),
  d = n("144144"),
  c = n("738619"),
  f = n("561472"),
  h = n("607070"),
  m = n("100527"),
  p = n("906732"),
  E = n("541716"),
  C = n("752305"),
  g = n("893718"),
  S = n("303628"),
  _ = n("967128"),
  T = n("294218"),
  I = n("913663"),
  A = n("268350"),
  v = n("695346"),
  N = n("592125"),
  x = n("703558"),
  M = n("375954"),
  R = n("496675"),
  L = n("117530"),
  y = n("153124"),
  O = n("465670"),
  j = n("663949"),
  P = n("934458"),
  D = n("502568"),
  b = n("459273"),
  U = n("838440"),
  F = n("127654"),
  w = n("241309"),
  k = n("928477"),
  H = n("456077"),
  B = n("488131"),
  G = n("602034"),
  V = n("981631"),
  W = n("689938"),
  Y = n("562798"),
  z = n("773065");
let Z = E.ChatInputTypes.THREAD_CREATION;

function K(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: l
  } = e, s = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t)), {
    analyticsLocations: i
  } = (0, p.default)(m.default.CREATE_THREAD);
  return null == s ? null : (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: i,
    children: (0, a.jsx)(b.ComponentDispatchGroupProvider, {
      children: (0, a.jsxs)("section", {
        "aria-label": W.default.Messages.CREATE_THREAD,
        className: Y.container,
        children: [(0, a.jsx)(f.default, {
          channel: s,
          draftType: x.DraftType.FirstThreadMessage
        }), (0, a.jsxs)(D.default, {
          toolbar: (0, a.jsx)(D.default.Icon, {
            icon: O.default,
            tooltip: W.default.Messages.CLOSE,
            onClick: () => (0, B.closeAndClearThreadSidebar)(t)
          }),
          children: [(0, a.jsx)(D.default.Icon, {
            icon: P.default,
            disabled: !0,
            "aria-label": W.default.Messages.THREAD
          }), (0, a.jsx)(D.default.Title, {
            children: W.default.Messages.NEW_THREAD
          })]
        }), (0, a.jsx)(X, {
          parentChannel: s,
          parentMessageId: n,
          location: l
        })]
      })
    })
  })
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: s
  } = e, d = (0, r.useStateFromStores)([h.default], () => h.default.messageGroupSpacing), f = function() {
    let e = l.useContext(b.ComponentDispatchGroupContext);
    return l.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: m,
    setThreadSettings: p,
    updateThreadSettings: E
  } = function(e, t) {
    let [n, a] = l.useState({}), s = l.useCallback(n => {
      a(e => ({
        ...e,
        ...n
      })), u.default.changeThreadSettings(e.id, {
        ...n,
        parentMessageId: t
      })
    }, [e.id, t]);
    return {
      threadSettings: n,
      setThreadSettings: a,
      updateThreadSettings: s
    }
  }(t, n), {
    textAreaState: g,
    setTextAreaState: S
  } = function(e, t) {
    let [n, a] = l.useState((0, C.createEmptyState)());
    return l.useEffect(() => {
      function n(n) {
        var l;
        let s = x.default.getDraft(e.id, x.DraftType.FirstThreadMessage);
        (0 === s.length || !0 === n) && a((0, C.createState)(s)), t(null !== (l = x.default.getThreadSettings(e.id)) && void 0 !== l ? l : {})
      }
      return n(!0), x.default.addChangeListener(n), () => {
        x.default.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: a
    }
  }(t, p), T = (0, k.usePrivateThreadMode)(t), {
    nameError: v,
    messageError: N,
    submit: M
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: a,
      privateThreadMode: s,
      textAreaState: i,
      location: r
    } = e, [o, u] = l.useState(null), [d, c] = l.useState(null), f = (0, G.default)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: a,
      privateThreadMode: s,
      location: r,
      onThreadCreated: B.openThreadSidebarForViewing,
      useDefaultThreadName: !0
    });
    return {
      nameError: o,
      messageError: d,
      submit: l.useCallback(async (e, l, s) => {
        var r, o, d;
        null == e && (e = i.textValue), e = e.trim(), (null == l || 0 === l.length) && (l = null === (r = I.default.getStickerPreview(t.id, Z.drafts.type)) || void 0 === r ? void 0 : r.map(e => e.id)), (null == s || 0 === s.length) && (s = L.default.getUploads(t.id, x.DraftType.FirstThreadMessage));
        let h = null !== (o = a.name) && void 0 !== o ? o : "",
          m = null == n && 0 === h.length,
          p = "" === e && (null == l || 0 === l.length) && 0 === s.length;
        if (u(m ? (0, w.makeEmptyTitleError)() : null), c(p ? (0, w.makeEmptyMessageError)() : null), m || p) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null == n) {
          let {
            valid: n
          } = await (0, U.applyChatRestrictions)({
            content: e,
            stickers: l,
            uploads: s,
            type: Z,
            channel: t
          });
          if (!n) return {
            shouldClear: !1,
            shouldRefocus: !0
          }
        }
        try {
          await f(e, l, s)
        } catch (e) {
          return (null === (d = e.body) || void 0 === d ? void 0 : d.code) === V.AbortCodes.AUTOMOD_TITLE_BLOCKED && u((0, w.makeAutomodViolationError)(e.body, t)), {
            shouldClear: !1,
            shouldRefocus: !0
          }
        }
        return (0, A.clearStickerPreview)(t.id, Z.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      }, [f, i.textValue, a.name, n, t])
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: m,
    privateThreadMode: T,
    textAreaState: g,
    location: s
  }), R = (0, k.getIsPrivate)(m, T) ? j.default : P.default;
  return (0, a.jsx)("div", {
    className: Y.chat,
    onMouseDown: f,
    onFocus: f,
    children: (0, a.jsx)("div", {
      className: i()(Y.messagesWrapper, "group-spacing-".concat(d)),
      children: (0, a.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), M()
        },
        className: Y.form,
        children: [(0, a.jsx)(o.Scroller, {
          className: Y.scroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: Y.scrollerInner,
            children: [(0, a.jsxs)(_.default, {
              channelId: "create-thread-null",
              children: [(0, a.jsx)("div", {
                className: z.iconWrapper,
                children: (0, a.jsx)(R, {
                  className: z.icon
                })
              }), (0, a.jsx)(Q, {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: m,
                updateThreadSettings: E,
                error: v
              }), t.type === V.ChannelTypes.GUILD_TEXT ? (0, a.jsx)(q, {
                startedFromMessage: null != n,
                threadSettings: m,
                updateThreadSettings: E,
                privateThreadMode: T
              }) : null]
            }), (0, a.jsx)($, {
              parentChannel: t,
              parentMessageId: n
            })]
          })
        }), (0, a.jsxs)("div", {
          className: Y.submitContainer,
          children: [(0, a.jsx)(J, {
            parentChannel: t,
            textAreaState: g,
            setTextAreaState: S,
            submit: M,
            error: N
          }), (0, a.jsx)(c.default, {
            channel: t,
            isThreadCreation: !0
          })]
        })]
      })
    })
  })
}

function q(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: l,
    privateThreadMode: s
  } = e, r = (0, k.getIsPrivate)(n, s), u = (0, a.jsx)("div", {
    className: Y.privateThreadFormTitle,
    children: (0, a.jsx)("span", {
      className: Y.privateThreadFormTitleText,
      children: W.default.Messages.PRIVATE_THREAD
    })
  }), d = (0, a.jsx)(o.Checkbox, {
    className: i()(Y.checkbox),
    type: o.Checkbox.Types.INVERTED,
    disabled: s === k.PrivateThreadMode.PrivateOnly,
    value: r,
    onChange: (e, t) => l({
      isPrivate: t
    }),
    children: (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "none",
      children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
    })
  });
  return t || s === k.PrivateThreadMode.Disabled ? null : (0, a.jsxs)(o.FormSection, {
    title: u,
    className: Y.formSection,
    children: [d, r ? (0, a.jsx)(o.Text, {
      className: Y.privateThreadDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
    }) : null]
  })
}

function Q(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: l,
    threadSettings: s,
    updateThreadSettings: i,
    error: r
  } = e, u = null !== (t = s.name) && void 0 !== t ? t : "", c = (0, w.renderError)(r, {
    content: u
  }), f = (0, k.getDefaultThreadName)(n, l), h = null != l, m = (0, y.useUID)();
  return (0, a.jsx)(o.FormSection, {
    tag: "label",
    htmlFor: m,
    title: W.default.Messages.THREAD_NAME + (h ? " (Optional)" : ""),
    className: Y.formSection,
    children: (0, a.jsx)(o.TextInput, {
      value: u,
      id: m,
      placeholder: "" !== f ? f : W.default.Messages.FORM_THREAD_NAME_PLACEHOLDER,
      maxLength: V.MAX_CHANNEL_NAME_LENGTH,
      onChange: e => {
        i({
          name: (0, H.default)(e, !1)
        }), "" !== e ? d.default.startTyping(n.id) : d.default.stopTyping(n.id)
      },
      onBlur: () => {
        let e = (0, H.default)(u, !0);
        e !== u && i({
          name: e
        })
      },
      error: c
    })
  })
}

function J(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: s,
    submit: c,
    error: f
  } = e, [h, m] = l.useState(!0), p = l.useCallback(() => m(!0), []), E = l.useCallback(() => m(!1), []), C = l.useCallback((e, n, a) => {
    u.default.saveDraft(t.id, n, x.DraftType.FirstThreadMessage), s(e => ("" !== n && e.textValue !== n ? d.default.startTyping(t.id) : "" === n && d.default.stopTyping(t.id), {
      textValue: n,
      richValue: a
    }))
  }, [t.id, s]), _ = l.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: a
    } = e;
    return c(t, a, n)
  }, [c]);
  (0, b.useComponentAction)({
    event: V.ComponentActions.TEXTAREA_FOCUS,
    handler: p
  }), (0, b.useComponentAction)({
    event: V.ComponentActions.TEXTAREA_BLUR,
    handler: E
  });
  let T = (0, r.useStateFromStores)([R.default], () => R.default.can(V.Permissions.ATTACH_FILES, t)),
    I = (0, w.renderError)(f, {
      content: n.textValue
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      channelId: t.id,
      type: Z,
      canAttachFiles: T
    }), (0, a.jsx)("div", {
      className: Y.starterMessageError,
      children: (0, a.jsx)(o.InputError, {
        error: I
      })
    }), (0, a.jsx)(g.default, {
      type: Z,
      channel: t,
      placeholder: W.default.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
      textValue: n.textValue,
      richValue: n.richValue,
      focused: h,
      className: Y.channelTextArea,
      innerClassName: i()(Y.channelTextAreaInner, {
        [Y.channelTextAreaInnerError]: null != I
      }),
      onFocus: p,
      onBlur: E,
      onChange: C,
      onSubmit: _,
      promptToUpload: F.promptToUpload
    })]
  })
}

function $(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, l = (0, r.useStateFromStores)([M.default], () => null == n ? null : M.default.getMessage(t.id, n)), s = v.MessageDisplayCompact.useSetting();
  return null != l ? (0, a.jsx)(T.default, {
    className: Y.messagePreview,
    message: l,
    channel: t,
    compact: s,
    renderThreadAccessory: !1,
    trackAnnouncementViews: !0
  }) : null
}