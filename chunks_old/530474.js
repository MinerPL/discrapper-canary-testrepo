"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eh
  }
}), a("222007"), a("843762");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("627445"),
  o = a.n(i),
  u = a("16470"),
  d = a("974667"),
  c = a("942367"),
  m = a("446674"),
  h = a("77078"),
  f = a("295426"),
  g = a("81594"),
  x = a("850391"),
  C = a("740483"),
  S = a("681060"),
  _ = a("830618"),
  T = a("939563"),
  p = a("236003"),
  E = a("549558"),
  N = a("884351"),
  M = a("39331"),
  v = a("82080"),
  A = a("328511"),
  I = a("467094"),
  j = a("24337"),
  R = a("967241"),
  O = a("517141"),
  F = a("719926"),
  b = a("474643"),
  L = a("957255"),
  P = a("401848"),
  y = a("585722"),
  D = a("697218"),
  U = a("837899"),
  w = a("213523"),
  k = a("381546"),
  H = a("462579"),
  B = a("867544"),
  G = a("660074"),
  V = a("987772"),
  z = a("229915"),
  W = a("547896"),
  K = a("378765"),
  Y = a("718422"),
  X = a("412861"),
  Z = a("119161"),
  q = a("404607"),
  Q = a("706065"),
  J = a("680986"),
  $ = a("763245"),
  ee = a("867965"),
  et = a("532308"),
  ea = a("1999"),
  es = a("578198"),
  en = a("90625"),
  el = a("337113"),
  er = a("589455"),
  ei = a("953371"),
  eo = a("49111"),
  eu = a("724210"),
  ed = a("782340"),
  ec = a("528282");
let em = x.ChatInputTypes.CREATE_FORUM_POST;

function eh(e) {
  let {
    parentChannel: t,
    isSearchLoading: a,
    onChange: l,
    canCreatePost: i,
    inputRef: o
  } = e, {
    textAreaState: d,
    formOpen: c,
    previewing: f
  } = (0, es.useForumPostComposerStore)(e => {
    let {
      textAreaState: t,
      formOpen: a,
      previewing: s
    } = e;
    return {
      textAreaState: t,
      formOpen: a,
      previewing: s
    }
  }, u.default), [g, x] = n.useState(null), C = n.useContext(K.ComponentDispatchGroupContext), S = n.useCallback(() => {
    C.bumpDispatchPriority()
  }, [C]), _ = (0, m.useStateFromStores)([L.default], () => L.default.can(eo.Permissions.ATTACH_FILES, t)), T = (0, m.useStateFromStoresArray)([y.default], () => y.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), M = c && _ && i, v = (null == t ? void 0 : t.isMediaChannel()) === !0, j = function(e, t) {
    let a = (0, es.useForumPostComposerStoreApi)(),
      s = (0, J.useChannelTemplate)(e),
      l = n.useCallback(() => {
        let {
          formOpen: n,
          setFormOpenFromUserAction: l,
          name: r,
          textAreaState: i,
          hasClickedForm: o
        } = a.getState();
        !n && (setTimeout(() => {
          if (t.current instanceof h.TextAreaAutosize) {
            var e, a, s, n;
            null === (a = t.current) || void 0 === a || null === (e = a._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (n = t.current) || void 0 === n || null === (s = n._textArea) || void 0 === s || s.focus()
          }
        }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== s || y.default.getUploads(e.id, b.DraftType.FirstThreadMessage).length > 0) && l())
      }, [a, e.id, s, t]);
    return l
  }(t, o), F = function(e) {
    let {
      formOpen: t
    } = (0, es.useForumPostComposerStore)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, u.default), a = (0, es.useForumPostComposerStoreApi)(), s = (0, O.useCreateForumPost)({
      parentChannel: e
    });
    n.useEffect(() => {
      let {
        setNameError: e,
        setMessageError: t
      } = a.getState();
      e(null), t(null)
    }, [t, a]);
    let l = n.useCallback((t, s, n) => {
      let {
        name: l,
        textAreaState: r
      } = a.getState();
      null == t && (t = r.textValue), t = t.trim();
      let {
        content: i
      } = N.default.parse(e, t);
      if (t = i, null == s || 0 === s.length) {
        var o;
        s = null === (o = A.default.getStickerPreview(e.id, em.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
      }
      if ((null == n || 0 === n.length) && (n = y.default.getUploads(e.id, b.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
        let e = n.findIndex(e => !0 === e.isThumbnail);
        if (e > -1) {
          let t = n[e];
          n.splice(e, 1), n.unshift(t)
        }
      }
      let u = 0 === l.length,
        d = (null == t || 0 === t.length) && (null == s || 0 === s.length) && 0 === n.length;
      return {
        content: t,
        stickers: s,
        uploads: n,
        hasNameError: u,
        hasMessageError: d
      }
    }, [e, a]);
    return n.useCallback(async (t, n, r) => {
      let {
        setNameError: i,
        setMessageError: o,
        setSubmitting: u,
        resetFormState: d,
        formOpen: c,
        setFormOpen: m,
        setPreviewing: h,
        setFormOpenFromUserAction: f,
        setGuidelinesOpen: g
      } = a.getState(), x = Q.default.hasSeen(e.id);
      if (!c) return (0, ee.trackForumCreateNewPostClick)({
        guildId: e.guild_id,
        channelId: e.id
      }), !x && a.getState().setGuidelinesOpen(!0), f(), {
        shouldClear: !1,
        shouldRefocus: !1
      };
      let {
        content: C,
        stickers: S,
        uploads: _,
        hasNameError: T,
        hasMessageError: p
      } = l(t, n, r);
      if (i(T ? (0, Z.makeEmptyTitleError)() : null), o(p ? (0, Z.makeEmptyMessageError)() : null), T || p) return {
        shouldClear: !1,
        shouldRefocus: !0
      };
      try {
        u(!0);
        let {
          valid: t
        } = await (0, Y.applyChatRestrictions)({
          content: C,
          stickers: S,
          uploads: _,
          type: em,
          channel: e
        });
        if (!t) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        let a = await s(C, S, _);
        return (0, R.openThreadSidebarForViewing)(a), q.default.resort(e.id), (0, I.clearStickerPreview)(e.id, em.drafts.type), d(), m(!1), h(!1), Q.default.markAsSeen(e.id), g(!1), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch (t) {
        var E, N;
        return (null === (E = t.body) || void 0 === E ? void 0 : E.code) === eo.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, Z.makeAutomodViolationError)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === eo.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, Z.makeAutomodViolationError)(t.body, e)), {
          shouldClear: !1,
          shouldRefocus: !0
        }
      } finally {
        u(!1)
      }
    }, [s, l, e, a])
  }(t);
  return n.useLayoutEffect(l, [c, d, T, l]), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)("div", {
      "aria-label": i ? ed.default.Messages.NEW_FORUM_POST : ed.default.Messages.SEARCH,
      className: r(ec.container, {
        [ec.collapsed]: !c
      }),
      onClick: !c && i ? j : void 0,
      children: (0, s.jsxs)("form", {
        onMouseDown: S,
        onFocus: S,
        onSubmit: e => {
          e.preventDefault(), i && F()
        },
        children: [(0, s.jsxs)("div", {
          className: ec.formContainer,
          children: [(0, s.jsx)(ef, {
            parentChannel: t,
            isSearchLoading: a,
            inputRef: o
          }), (0, s.jsxs)("div", {
            className: f ? ec.previewForm : ec.form,
            children: [(0, s.jsx)(eg, {
              editorRef: g,
              parentChannel: t,
              isSearchLoading: a,
              inputRef: o,
              canCreatePost: i
            }), c && (0, s.jsx)(eS, {
              editorRef: g,
              setEditorRef: x,
              parentChannel: t,
              submit: F,
              disabled: !i
            }), f && (0, s.jsx)(e_, {})]
          }), M && (v ? (0, s.jsx)(E.MediaPostThumbnail, {
            parentChannel: t
          }) : (0, s.jsx)(ea.default, {
            channelId: t.id
          }))]
        }), (0, s.jsxs)("div", {
          className: ec.form,
          children: [M && v && (0, s.jsx)(p.default, {
            parentChannel: t
          }), c && (0, s.jsx)(ep, {
            className: ec.horizontalPadding,
            parentChannel: t,
            canCreatePost: i
          })]
        })]
      })
    })
  })
}
let ef = n.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: a,
      inputRef: l
    } = e, {
      formOpen: r,
      name: i,
      textAreaState: o,
      hasClickedForm: d,
      submitting: c
    } = (0, es.useForumPostComposerStore)(e => {
      let {
        formOpen: t,
        nameError: a,
        name: s,
        previewing: n,
        textAreaState: l,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: a,
        name: s,
        textAreaState: l,
        previewing: n,
        hasClickedForm: r,
        submitting: i
      }
    }, u.default), m = (0, es.useForumPostComposerStoreApi)(), x = (0, J.useChannelTemplate)(t), C = n.useCallback(() => {
      var e;
      m.getState().resetFormState(), f.default.clearDraft(t.id, b.DraftType.ThreadSettings), f.default.clearDraft(t.id, b.DraftType.FirstThreadMessage), g.default.clearAll(t.id, b.DraftType.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, ee.trackForumNewPostCleared)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, l]), S = n.useMemo(() => a && !r ? (0, s.jsx)(ev, {}) : a || r || 0 !== o.textValue.trim().length && o.textValue.trim() !== x ? !r && (i.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== x || y.default.getUploads(t.id, b.DraftType.FirstThreadMessage).length > 0) && d ? (0, s.jsx)(V.default, {
      className: ec.pencilIcon,
      width: 24,
      height: 24
    }) : c ? (0, s.jsx)(k.default, {
      className: ec.closeIconDisabled,
      width: 24,
      height: 24
    }) : (0, s.jsx)(h.Tooltip, {
      text: ed.default.Messages.FORUM_CLEAR_ALL,
      children: e => (0, s.jsx)(h.Clickable, {
        ...e,
        onClick: C,
        children: (0, s.jsx)(k.default, {
          className: ec.closeIcon,
          width: 24,
          height: 24
        })
      })
    }) : (0, s.jsx)(z.default, {
      className: ec.searchIcon,
      width: 24,
      height: 24
    }), [a, r, d, i, o.textValue, C, t.id, x, c]);
    return (0, s.jsx)("div", {
      className: ec.prefixElement,
      children: S
    })
  }),
  eg = n.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: a,
      canCreatePost: l,
      editorRef: r
    } = e, {
      formOpen: i,
      nameError: d,
      name: c,
      textAreaState: f,
      previewing: g
    } = (0, es.useForumPostComposerStore)(e => {
      let {
        formOpen: t,
        nameError: a,
        name: s,
        previewing: n,
        textAreaState: l,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: a,
        name: s,
        textAreaState: l,
        previewing: n,
        hasClickedForm: r,
        submitting: i
      }
    }, u.default), x = (0, es.useForumPostComposerStoreApi)(), C = null != t.topic && 0 !== t.topic.length, S = Q.default.hasSeen(t.id), _ = (0, J.useChannelTemplate)(t), T = (0, m.useStateFromStores)([D.default], () => D.default.getCurrentUser());
    o(null != T, "current user cannot be null");
    (0, K.useComponentAction)({
      event: eo.ComponentActions.FOCUS_COMPOSER_TITLE,
      handler: () => {
        var e;
        let t = a.current instanceof h.TextAreaAutosize ? null === (e = a.current) || void 0 === e ? void 0 : e._textArea : a.current;
        null == t || t.focus(), x.getState().setTitleFocused(!0), x.getState().setFormOpen(!0), x.getState().setHasClickedForm(!0)
      }
    });
    let p = n.useCallback(e => {
        let a = e.clipboardData.files[0];
        null != a && a.type.startsWith("image/") && (e.preventDefault(), (0, X.promptToUpload)([a], t, b.DraftType.FirstThreadMessage), x.getState().setFormOpenFromUserAction())
      }, [t, x]),
      E = (0, Z.renderError)(d, {
        content: c
      });
    return (0, s.jsxs)("div", {
      className: ec.titleContainer,
      onPaste: p,
      children: [i && g ? (0, s.jsx)(h.Heading, {
        variant: "heading-md/semibold",
        className: ec.title,
        children: c
      }) : (0, s.jsx)(h.TextArea, {
        value: c,
        placeholder: l ? i || f.textValue.length > 0 && f.textValue.trim() !== _ ? ed.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : ed.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : ed.default.Messages.SEARCH,
        flex: !0,
        autosize: i,
        rows: 1,
        showCharacterCount: !1,
        showRemainingCharacterCount: !1,
        maxLength: eo.MAX_CHANNEL_NAME_LENGTH,
        onChange: e => {
          let a = (0, j.default)(e, !1);
          x.getState().setName(a);
          let s = 0 === a.trim().length,
            n = 0 === f.textValue.trim().length,
            l = f.textValue.trim() === _;
          s && (n || l) && x.getState().setHasClickedForm(!1), !i && q.default.updateForumSearchQuery(t.id, a)
        },
        onFocus: () => {
          x.getState().setTitleFocused(!0), x.getState().setBodyFocused(!1)
        },
        onBlur: () => {
          x.getState().setTitleFocused(!1);
          let e = (0, j.default)(c, !0);
          e !== c && (x.getState().setName(e), !i && q.default.updateForumSearchQuery(t.id, e))
        },
        onKeyDown: e => {
          var s, n;
          "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), i && c.length > 0 ? null == r || r.focus() : l && e.shiftKey && ((0, ee.trackForumCreateNewPostKeybindUsed)({
            guildId: t.guild_id,
            channelId: t.id
          }), C && !S && x.getState().setGuidelinesOpen(!0), x.getState().setFormOpenFromUserAction(), c.trim().length > 0 && (x.getState().setBodyFocused(!0), null == r || r.focus())));
          let o = a.current instanceof h.TextAreaAutosize ? null === (s = a.current) || void 0 === s ? void 0 : s._textArea : a.current;
          if ("Home" === e.key || "End" === e.key) {
            if (null == o) return;
            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) o.setSelectionRange(0, 0);
            else {
              let e = c.length;
              o.setSelectionRange(e, e)
            }
          }
          "Escape" === e.key && !x.getState().submitting && (null === (n = a.current) || void 0 === n || n.blur(), x.getState().setFormOpen(!1), x.getState().setTitleFocused(!1), x.getState().setBodyFocused(!1), x.getState().setPreviewing(!1))
        },
        error: E,
        className: ec.title,
        inputRef: a
      }), i ? null : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(ex, {
          parentChannel: t
        }), (0, s.jsx)(eE, {
          parentChannel: t,
          canCreatePost: l
        })]
      })]
    })
  });

function ex(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: a
  } = (0, es.useForumPostComposerStore)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), n = (0, es.useForumPostComposerStoreApi)(), l = null != t.topic && 0 !== t.topic.length, i = () => {
    n.getState().setGuidelinesOpen(!a)
  };
  return l ? (0, s.jsx)(h.Tooltip, {
    text: ed.default.Messages.FORUM_POST_GUIDELINES_TITLE,
    children: e => (0, s.jsx)(h.Clickable, {
      ...e,
      onClick: i,
      className: r(ec.forumPostFormButton, {
        [ec.forumPostFormButtonActive]: a
      }),
      children: (0, s.jsx)(w.default, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let eC = n.memo(function(e) {
    let {
      parentChannel: t,
      textValue: a
    } = e, n = new F.default({
      channelId: t.id,
      content: a
    }), {
      content: l
    } = (0, M.default)(n, {
      hideSimpleEmbedContent: !0,
      isInteracting: !1,
      formatInline: !1,
      allowList: !0,
      allowHeading: !0,
      previewLinkTarget: !0
    }), i = (0, v.default)({
      message: n,
      channel: t
    }, l, !1);
    return (0, s.jsx)("div", {
      className: r(ec.channelTextAreaInner, ec.previewTextArea),
      children: i
    })
  }),
  eS = n.memo(function(e) {
    let {
      parentChannel: t,
      submit: a,
      disabled: l = !1,
      editorRef: i,
      setEditorRef: d
    } = e, c = (0, m.useStateFromStores)([D.default], () => D.default.getCurrentUser());
    o(null != c, "current user cannot be null");
    let {
      messageError: f,
      previewing: g,
      textAreaState: x,
      bodyFocused: C,
      formOpen: _
    } = (0, es.useForumPostComposerStore)(e => {
      let {
        messageError: t,
        textAreaState: a,
        previewing: s,
        bodyFocused: n,
        formOpen: l
      } = e;
      return {
        messageError: t,
        textAreaState: a,
        previewing: s,
        bodyFocused: n,
        formOpen: l
      }
    }, u.default), p = (0, es.useForumPostComposerStoreApi)();
    n.useEffect(() => () => (0, ee.maybeTrackForumNewPostDraftCreated)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let E = n.useCallback(() => {
        p.getState().setBodyFocused(!0)
      }, [p]),
      N = n.useCallback(() => {
        p.getState().setBodyFocused(!1)
      }, [p]),
      M = n.useCallback((e, t, a) => {
        let {
          setTextAreaState: s
        } = p.getState();
        s({
          textValue: t,
          richValue: a
        })
      }, [p]),
      v = n.useCallback(e => {
        let {
          value: t,
          uploads: s,
          stickers: n
        } = e;
        return a(t, n, s)
      }, [a]);
    (0, K.useComponentAction)({
      event: eo.ComponentActions.TEXTAREA_FOCUS,
      handler: E
    }), (0, K.useComponentAction)({
      event: eo.ComponentActions.TEXTAREA_BLUR,
      handler: N
    });
    let A = (0, Z.renderError)(f, {
      content: x.textValue
    });
    return (0, s.jsx)("div", {
      className: ec.bodyContainer,
      children: (0, s.jsxs)("div", {
        className: ec.contentContainer,
        children: [g ? (0, s.jsx)(eC, {
          parentChannel: t,
          textValue: x.textValue
        }) : (0, s.jsx)("div", {
          onClick: E,
          children: (0, s.jsx)(S.default, {
            type: em,
            setEditorRef: d,
            channel: t,
            placeholder: ed.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
            textValue: x.textValue,
            richValue: x.richValue,
            focused: C,
            className: ec.channelTextArea,
            innerClassName: r(ec.channelTextAreaInner, {
              [ec.channelTextAreaInnerError]: null != A
            }),
            onChange: M,
            onSubmit: v,
            promptToUpload: X.promptToUpload,
            disabled: l,
            onKeyDown: e => {
              if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                if (null == i) return;
                e.preventDefault(), e.stopPropagation();
                let t = i.getSlateEditor();
                if (null == t) return;
                "Home" === e.key ? T.SlateTransforms.resetSelectionToStart(t) : T.SlateTransforms.resetSelectionToEnd(t)
              }
              _ && "Escape" === e.key && !p.getState().submitting && (null == i || i.blur(), p.getState().setFormOpen(!1), p.getState().setTitleFocused(!1), p.getState().setBodyFocused(!1), p.getState().setPreviewing(!1))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, s.jsx)(h.InputError, {
          error: A
        })]
      })
    })
  });

function e_() {
  return (0, s.jsx)("div", {
    className: ec.previewModeIndicator,
    children: (0, s.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: ed.default.Messages.PREVIEW_MODE
    })
  })
}

function eT() {
  let e = (0, $.useIsForumPostPreviewEnabled)(),
    {
      previewing: t
    } = (0, es.useForumPostComposerStore)(e => {
      let {
        previewing: t
      } = e;
      return {
        previewing: t
      }
    }),
    a = (0, es.useForumPostComposerStoreApi)(),
    l = n.useCallback(() => {
      a.getState().setPreviewing(!t), (0, ee.trackForumPreviewPostClicked)()
    }, [t, a]);
  return e ? (0, s.jsx)(h.Tooltip, {
    text: t ? ed.default.Messages.EXIT_PREVIEW : ed.default.Messages.PREVIEW,
    children: e => (0, s.jsx)(h.Clickable, {
      ...e,
      onClick: l,
      className: r(ec.forumPostFormButton, {
        [ec.forumPostFormButtonActive]: t
      }),
      children: t ? (0, s.jsx)(B.default, {
        ...e,
        width: 24,
        height: 24
      }) : (0, s.jsx)(H.default, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let ep = n.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: a,
    className: l
  } = e, {
    textAreaState: r,
    appliedTags: i,
    name: o
  } = (0, es.useForumPostComposerStore)(e => {
    let {
      textAreaState: t,
      appliedTags: a,
      name: s
    } = e;
    return {
      textAreaState: t,
      appliedTags: a,
      name: s
    }
  }), {
    rateLimitPerUser: u
  } = t, d = u > 0, c = (0, m.useStateFromStores)([P.default], () => P.default.getSlowmodeCooldownGuess(t.id, P.SlowmodeType.CreateThread)), f = (0, m.useStateFromStores)([L.default], () => L.default.can(eo.Permissions.MANAGE_THREADS, t) || L.default.can(eo.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(eu.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, x = (0, es.useForumPostComposerStoreApi)(), S = n.useCallback(() => {
    x.getState().setBodyFocused(!1)
  }, [x]), T = n.useMemo(() => "" !== o.trim() && "" !== r.textValue.trim(), [o, r.textValue]);
  return n.useEffect(() => {
    !T && x.getState().setPreviewing(!1)
  }, [T, x]), (0, s.jsxs)("div", {
    className: l,
    children: [(0, s.jsx)(eM, {
      parentChannel: t
    }), (0, s.jsx)("div", {
      className: ec.tagsDivider
    }), (0, s.jsxs)("div", {
      className: ec.controlsContainer,
      children: [(0, s.jsxs)("div", {
        className: ec.controls,
        children: [(0, s.jsxs)("div", {
          className: ec.wrappedControls,
          children: [g && (0, s.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            children: ed.default.Messages.FORUM_POST_TAG_REQUIRED_ERROR
          }), (0, s.jsx)(_.default, {
            type: em,
            textValue: r.textValue,
            className: ec.characterCount
          }), d && (0, s.jsx)(el.default, {
            rateLimitPerUser: u,
            slowmodeCooldownGuess: c,
            isBypassSlowmode: f,
            leadingIcon: !0
          })]
        }), (0, s.jsx)(ex, {
          parentChannel: t
        }), T && (0, s.jsx)(eT, {}), (0, s.jsx)(eE, {
          parentChannel: t,
          disableIfInvalid: !0,
          canCreatePost: a,
          disabled: d && !f && c > 0
        })]
      }), (0, s.jsx)(C.default, {
        type: em,
        className: ec.expressionPicker,
        onClick: S
      }, "expression")]
    })]
  })
});

function eE(e) {
  let {
    parentChannel: t,
    canCreatePost: a,
    disabled: n,
    disableIfInvalid: l = !1
  } = e, {
    submitting: r,
    textAreaState: i,
    name: o,
    appliedTags: u,
    formOpen: d
  } = (0, es.useForumPostComposerStore)(e => {
    let {
      submitting: t,
      textAreaState: a,
      name: s,
      appliedTags: n,
      formOpen: l
    } = e;
    return {
      submitting: t,
      textAreaState: a,
      name: s,
      appliedTags: n,
      formOpen: l
    }
  }), c = t.hasFlag(eu.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, m.useStateFromStoresArray)([y.default], () => y.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, x = !c && g && o.trim().length > 0;
  if (__OVERLAY__) return null;
  let C = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.jsxs)(h.Button, {
      ...e,
      size: h.Button.Sizes.SMALL,
      className: ec.submitButton,
      innerClassName: ec.submitButtonInner,
      type: "submit",
      submitting: r,
      disabled: l && !x || n || !a,
      children: [(0, s.jsx)(G.default, {
        className: ec.submitIcon,
        width: 16,
        height: 16
      }), (0, s.jsx)(h.Text, {
        variant: "text-md/semibold",
        color: "none",
        children: d ? ed.default.Messages.SUBMIT_POST : ed.default.Messages.NEW_FORUM_POST_NEW
      })]
    })
  };
  return a ? C() : (0, s.jsx)(h.Tooltip, {
    text: ed.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
    children: e => C(e)
  })
}

function eN() {
  return Promise.resolve()
}

function eM(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: a,
    toggleAppliedTag: l,
    setPopoutOpen: i
  } = (0, es.useForumPostComposerStore)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: a,
      setPopoutOpen: s
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: a,
      setPopoutOpen: s
    }
  }, u.default), o = a.size >= ei.MAX_FORUM_POST_TAGS, m = (0, d.default)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: eN,
    scrollToEnd: eN,
    orientation: c.Orientations.HORIZONTAL
  }), {
    containerRef: f,
    containerWidth: g
  } = (0, er.default)(), x = n.useRef(null), [C, S] = n.useState(!0), _ = (0, J.useVisibleForumTags)(t), [T, p] = n.useState(0);
  return (n.useLayoutEffect(() => {
    var e;
    let t = x.current,
      a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
      s = null == t || null == a || a.clientHeight > t.clientHeight;
    if (s !== C && S(s), s && null != f.current && null != a && null != a.children) {
      let {
        left: e,
        top: t
      } = f.current.getBoundingClientRect(), s = 0;
      for (let n of a.children) {
        let {
          right: a,
          top: l,
          height: r
        } = n.getBoundingClientRect();
        if (l - t > r) break;
        a - e > s && (s = a - e)
      }
      p(s)
    }
  }, [_, C, f, g]), 0 === _.length) ? null : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: ec.tagsContainer,
      ref: f,
      children: [(0, s.jsx)(W.default, {
        className: ec.tagsIcon,
        width: 16,
        height: 16
      }), (0, s.jsx)("div", {
        className: ec.tagList,
        ref: x,
        children: (0, s.jsx)(d.ListNavigatorProvider, {
          navigator: m,
          children: (0, s.jsx)(d.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, s.jsx)("div", {
                className: ec.tagListInner,
                ref: t,
                ...n,
                children: _.map(e => (0, s.jsx)(en.default, {
                  ariaLabel: ed.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                    tagName: e.name
                  }),
                  tag: e,
                  onClick: o && !a.has(e.id) ? void 0 : () => l(e.id),
                  disabled: !a.has(e.id) && a.size >= ei.MAX_FORUM_POST_TAGS,
                  selected: a.has(e.id),
                  size: en.default.Sizes.SMALL
                }, e.id))
              })
            }
          })
        })
      }), C && (0, s.jsx)(h.Popout, {
        onRequestOpen: () => i(!0),
        onRequestClose: () => i(!1),
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, s.jsx)(et.default, {
            parentChannel: t,
            appliedTags: a,
            maxTagsApplied: o,
            onSelectTag: l,
            onClose: n
          })
        },
        position: "bottom",
        align: "center",
        children: e => (0, s.jsxs)(h.Button, {
          ...e,
          size: h.Button.Sizes.TINY,
          className: ec.tagsButton,
          innerClassName: ec.tagsButtonInner,
          style: {
            left: T
          },
          look: h.Button.Looks.LINK,
          "aria-label": ed.default.Messages.ADD_TAG_FORUM_POST,
          children: [ed.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(U.default, {
            width: 16
          })]
        })
      }), (0, s.jsxs)(h.Button, {
        size: h.Button.Sizes.TINY,
        className: r(ec.tagsButton, ec.tagsButtonPlaceholder),
        innerClassName: ec.tagsButtonInner,
        look: h.Button.Looks.LINK,
        "aria-label": ed.default.Messages.ADD_TAG_FORUM_POST,
        children: [ed.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(U.default, {
          width: 16
        })]
      })]
    })
  })
}

function ev(e) {
  let {
    style: t,
    className: a
  } = e;
  return (0, s.jsx)("div", {
    className: a,
    style: t,
    children: (0, s.jsx)("div", {
      className: ec.loader
    })
  })
}