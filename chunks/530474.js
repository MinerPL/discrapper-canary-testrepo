"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ef
  }
}), s("222007"), s("843762");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("627445"),
  o = s.n(i),
  u = s("16470"),
  d = s("974667"),
  c = s("942367"),
  m = s("446674"),
  h = s("77078"),
  f = s("295426"),
  g = s("81594"),
  x = s("193865"),
  C = s("850391"),
  T = s("740483"),
  _ = s("681060"),
  S = s("830618"),
  p = s("939563"),
  E = s("236003"),
  N = s("549558"),
  M = s("884351"),
  A = s("39331"),
  v = s("82080"),
  I = s("328511"),
  j = s("467094"),
  R = s("24337"),
  O = s("967241"),
  F = s("517141"),
  L = s("719926"),
  b = s("474643"),
  P = s("957255"),
  y = s("401848"),
  D = s("585722"),
  w = s("697218"),
  U = s("837899"),
  k = s("213523"),
  H = s("381546"),
  B = s("462579"),
  G = s("867544"),
  V = s("660074"),
  z = s("987772"),
  W = s("229915"),
  K = s("547896"),
  Y = s("378765"),
  X = s("718422"),
  Z = s("412861"),
  q = s("119161"),
  Q = s("404607"),
  J = s("706065"),
  $ = s("680986"),
  ee = s("763245"),
  et = s("867965"),
  es = s("532308"),
  ea = s("1999"),
  en = s("578198"),
  el = s("90625"),
  er = s("337113"),
  ei = s("589455"),
  eo = s("953371"),
  eu = s("49111"),
  ed = s("724210"),
  ec = s("782340"),
  em = s("842875");
let eh = C.ChatInputTypes.CREATE_FORUM_POST;

function ef(e) {
  let {
    parentChannel: t,
    isSearchLoading: s,
    onChange: l,
    canCreatePost: i,
    inputRef: o
  } = e, {
    textAreaState: d,
    formOpen: c,
    previewing: f
  } = (0, en.useForumPostComposerStore)(e => {
    let {
      textAreaState: t,
      formOpen: s,
      previewing: a
    } = e;
    return {
      textAreaState: t,
      formOpen: s,
      previewing: a
    }
  }, u.default), [g, x] = n.useState(null), C = n.useContext(Y.ComponentDispatchGroupContext), T = n.useCallback(() => {
    C.bumpDispatchPriority()
  }, [C]), _ = (0, m.useStateFromStores)([P.default], () => P.default.can(eu.Permissions.ATTACH_FILES, t)), S = (0, m.useStateFromStoresArray)([D.default], () => D.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), p = c && _ && i, A = (null == t ? void 0 : t.isMediaChannel()) === !0, v = function(e, t) {
    let s = (0, en.useForumPostComposerStoreApi)(),
      a = (0, $.useChannelTemplate)(e),
      l = n.useCallback(() => {
        let {
          formOpen: n,
          setFormOpenFromUserAction: l,
          name: r,
          textAreaState: i,
          hasClickedForm: o
        } = s.getState();
        !n && (setTimeout(() => {
          if (t.current instanceof h.TextAreaAutosize) {
            var e, s, a, n;
            null === (s = t.current) || void 0 === s || null === (e = s._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (n = t.current) || void 0 === n || null === (a = n._textArea) || void 0 === a || a.focus()
          }
        }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== a || D.default.getUploads(e.id, b.DraftType.FirstThreadMessage).length > 0) && l())
      }, [s, e.id, a, t]);
    return l
  }(t, o), R = function(e) {
    let {
      formOpen: t
    } = (0, en.useForumPostComposerStore)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, u.default), s = (0, en.useForumPostComposerStoreApi)(), a = (0, F.useCreateForumPost)({
      parentChannel: e
    });
    n.useEffect(() => {
      let {
        setNameError: e,
        setMessageError: t
      } = s.getState();
      e(null), t(null)
    }, [t, s]);
    let l = n.useCallback((t, a, n) => {
      let {
        name: l,
        textAreaState: r
      } = s.getState();
      null == t && (t = r.textValue), t = t.trim();
      let {
        content: i
      } = M.default.parse(e, t);
      if (t = i, null == a || 0 === a.length) {
        var o;
        a = null === (o = I.default.getStickerPreview(e.id, eh.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
      }
      if ((null == n || 0 === n.length) && (n = D.default.getUploads(e.id, b.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
        let e = n.findIndex(e => !0 === e.isThumbnail);
        if (e > -1) {
          let t = n[e];
          n.splice(e, 1), n.unshift(t)
        }
      }
      let u = 0 === l.length,
        d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === n.length;
      return {
        content: t,
        stickers: a,
        uploads: n,
        hasNameError: u,
        hasMessageError: d
      }
    }, [e, s]);
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
      } = s.getState(), x = J.default.hasSeen(e.id);
      if (!c) return (0, et.trackForumCreateNewPostClick)({
        guildId: e.guild_id,
        channelId: e.id
      }), !x && s.getState().setGuidelinesOpen(!0), f(), {
        shouldClear: !1,
        shouldRefocus: !1
      };
      let {
        content: C,
        stickers: T,
        uploads: _,
        hasNameError: S,
        hasMessageError: p
      } = l(t, n, r);
      if (i(S ? (0, q.makeEmptyTitleError)() : null), o(p ? (0, q.makeEmptyMessageError)() : null), S || p) return {
        shouldClear: !1,
        shouldRefocus: !0
      };
      try {
        u(!0);
        let {
          valid: t
        } = await (0, X.applyChatRestrictions)({
          content: C,
          stickers: T,
          uploads: _,
          type: eh,
          channel: e
        });
        if (!t) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        let s = await a(C, T, _);
        return (0, O.openThreadSidebarForViewing)(s), Q.default.resort(e.id), (0, j.clearStickerPreview)(e.id, eh.drafts.type), d(), m(!1), h(!1), J.default.markAsSeen(e.id), g(!1), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch (t) {
        var E, N;
        return (null === (E = t.body) || void 0 === E ? void 0 : E.code) === eu.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, q.makeAutomodViolationError)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === eu.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, q.makeAutomodViolationError)(t.body, e)), {
          shouldClear: !1,
          shouldRefocus: !0
        }
      } finally {
        u(!1)
      }
    }, [a, l, e, s])
  }(t);
  return n.useLayoutEffect(l, [c, d, S, l]), (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)("div", {
      "aria-label": i ? ec.default.Messages.NEW_FORUM_POST : ec.default.Messages.SEARCH,
      className: r(em.container, {
        [em.collapsed]: !c
      }),
      onClick: !c && i ? v : void 0,
      children: (0, a.jsxs)("form", {
        onMouseDown: T,
        onFocus: T,
        onSubmit: e => {
          e.preventDefault(), i && R()
        },
        children: [(0, a.jsxs)("div", {
          className: em.formContainer,
          children: [(0, a.jsx)(eg, {
            parentChannel: t,
            isSearchLoading: s,
            inputRef: o
          }), (0, a.jsxs)("div", {
            className: f ? em.previewForm : em.form,
            children: [(0, a.jsx)(ex, {
              editorRef: g,
              parentChannel: t,
              isSearchLoading: s,
              inputRef: o,
              canCreatePost: i
            }), c && (0, a.jsx)(e_, {
              editorRef: g,
              setEditorRef: x,
              parentChannel: t,
              submit: R,
              disabled: !i
            }), f && (0, a.jsx)(eS, {})]
          }), p && (A ? (0, a.jsx)(N.MediaPostThumbnail, {
            parentChannel: t
          }) : (0, a.jsx)(ea.default, {
            channelId: t.id
          }))]
        }), (0, a.jsxs)("div", {
          className: em.form,
          children: [p && A && (0, a.jsx)(E.default, {
            parentChannel: t
          }), c && (0, a.jsx)(eE, {
            className: em.horizontalPadding,
            parentChannel: t,
            canCreatePost: i
          })]
        })]
      })
    })
  })
}
let eg = n.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: s,
      inputRef: l
    } = e, {
      formOpen: r,
      name: i,
      textAreaState: o,
      hasClickedForm: d,
      submitting: c
    } = (0, en.useForumPostComposerStore)(e => {
      let {
        formOpen: t,
        nameError: s,
        name: a,
        previewing: n,
        textAreaState: l,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: s,
        name: a,
        textAreaState: l,
        previewing: n,
        hasClickedForm: r,
        submitting: i
      }
    }, u.default), m = (0, en.useForumPostComposerStoreApi)(), x = (0, $.useChannelTemplate)(t), C = n.useCallback(() => {
      var e;
      m.getState().resetFormState(), f.default.clearDraft(t.id, b.DraftType.ThreadSettings), f.default.clearDraft(t.id, b.DraftType.FirstThreadMessage), g.default.clearAll(t.id, b.DraftType.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, et.trackForumNewPostCleared)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, l]), T = n.useMemo(() => s && !r ? (0, a.jsx)(ev, {}) : s || r || 0 !== o.textValue.trim().length && o.textValue.trim() !== x ? !r && (i.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== x || D.default.getUploads(t.id, b.DraftType.FirstThreadMessage).length > 0) && d ? (0, a.jsx)(z.default, {
      className: em.pencilIcon,
      width: 24,
      height: 24
    }) : c ? (0, a.jsx)(H.default, {
      className: em.closeIconDisabled,
      width: 24,
      height: 24
    }) : (0, a.jsx)(h.Tooltip, {
      text: ec.default.Messages.FORUM_CLEAR_ALL,
      children: e => (0, a.jsx)(h.Clickable, {
        ...e,
        onClick: C,
        children: (0, a.jsx)(H.default, {
          className: em.closeIcon,
          width: 24,
          height: 24
        })
      })
    }) : (0, a.jsx)(W.default, {
      className: em.searchIcon,
      width: 24,
      height: 24
    }), [s, r, d, i, o.textValue, C, t.id, x, c]);
    return (0, a.jsx)("div", {
      className: em.prefixElement,
      children: T
    })
  }),
  ex = n.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: s,
      canCreatePost: l,
      editorRef: r
    } = e, {
      formOpen: i,
      nameError: d,
      name: c,
      textAreaState: f,
      previewing: g
    } = (0, en.useForumPostComposerStore)(e => {
      let {
        formOpen: t,
        nameError: s,
        name: a,
        previewing: n,
        textAreaState: l,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: s,
        name: a,
        textAreaState: l,
        previewing: n,
        hasClickedForm: r,
        submitting: i
      }
    }, u.default), x = (0, en.useForumPostComposerStoreApi)(), C = null != t.topic && 0 !== t.topic.length, T = J.default.hasSeen(t.id), _ = (0, $.useChannelTemplate)(t), S = (0, m.useStateFromStores)([w.default], () => w.default.getCurrentUser());
    o(null != S, "current user cannot be null");
    (0, Y.useComponentAction)({
      event: eu.ComponentActions.FOCUS_COMPOSER_TITLE,
      handler: () => {
        var e;
        let t = s.current instanceof h.TextAreaAutosize ? null === (e = s.current) || void 0 === e ? void 0 : e._textArea : s.current;
        null == t || t.focus(), x.getState().setTitleFocused(!0), x.getState().setFormOpen(!0), x.getState().setHasClickedForm(!0)
      }
    });
    let p = n.useCallback(e => {
        let s = e.clipboardData.files[0];
        null != s && s.type.startsWith("image/") && (e.preventDefault(), (0, Z.promptToUpload)([s], t, b.DraftType.FirstThreadMessage), x.getState().setFormOpenFromUserAction())
      }, [t, x]),
      E = (0, q.renderError)(d, {
        content: c
      });
    return (0, a.jsxs)("div", {
      className: em.titleContainer,
      onPaste: p,
      children: [i && g ? (0, a.jsx)(h.Heading, {
        variant: "heading-md/semibold",
        className: em.title,
        children: c
      }) : (0, a.jsx)(h.TextArea, {
        value: c,
        placeholder: l ? i || f.textValue.length > 0 && f.textValue.trim() !== _ ? ec.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : ec.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : ec.default.Messages.SEARCH,
        flex: !0,
        autosize: i,
        rows: 1,
        showCharacterCount: !1,
        showRemainingCharacterCount: !1,
        maxLength: eu.MAX_CHANNEL_NAME_LENGTH,
        onChange: e => {
          let s = (0, R.default)(e, !1);
          x.getState().setName(s);
          let a = 0 === s.trim().length,
            n = 0 === f.textValue.trim().length,
            l = f.textValue.trim() === _;
          a && (n || l) && x.getState().setHasClickedForm(!1), !i && Q.default.updateForumSearchQuery(t.id, s)
        },
        onFocus: () => {
          x.getState().setTitleFocused(!0), x.getState().setBodyFocused(!1)
        },
        onBlur: () => {
          x.getState().setTitleFocused(!1);
          let e = (0, R.default)(c, !0);
          e !== c && (x.getState().setName(e), !i && Q.default.updateForumSearchQuery(t.id, e))
        },
        onKeyDown: e => {
          var a, n;
          "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), i && c.length > 0 ? null == r || r.focus() : l && e.shiftKey && ((0, et.trackForumCreateNewPostKeybindUsed)({
            guildId: t.guild_id,
            channelId: t.id
          }), C && !T && x.getState().setGuidelinesOpen(!0), x.getState().setFormOpenFromUserAction(), c.trim().length > 0 && (x.getState().setBodyFocused(!0), null == r || r.focus())));
          let o = s.current instanceof h.TextAreaAutosize ? null === (a = s.current) || void 0 === a ? void 0 : a._textArea : s.current;
          if ("Home" === e.key || "End" === e.key) {
            if (null == o) return;
            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) o.setSelectionRange(0, 0);
            else {
              let e = c.length;
              o.setSelectionRange(e, e)
            }
          }
          "Escape" === e.key && !x.getState().submitting && (null === (n = s.current) || void 0 === n || n.blur(), x.getState().setFormOpen(!1), x.getState().setTitleFocused(!1), x.getState().setBodyFocused(!1), x.getState().setPreviewing(!1))
        },
        error: E,
        className: em.title,
        inputRef: s
      }), i ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(eC, {
          parentChannel: t
        }), (0, a.jsx)(eN, {
          parentChannel: t,
          canCreatePost: l
        })]
      })]
    })
  });

function eC(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: s
  } = (0, en.useForumPostComposerStore)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), n = (0, en.useForumPostComposerStoreApi)(), l = null != t.topic && 0 !== t.topic.length, i = () => {
    n.getState().setGuidelinesOpen(!s)
  };
  return l ? (0, a.jsx)(h.Tooltip, {
    text: ec.default.Messages.FORUM_POST_GUIDELINES_TITLE,
    children: e => (0, a.jsx)(h.Clickable, {
      ...e,
      onClick: i,
      className: r(em.forumPostFormButton, {
        [em.forumPostFormButtonActive]: s
      }),
      children: (0, a.jsx)(k.default, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let eT = n.memo(function(e) {
    let {
      parentChannel: t,
      textValue: s
    } = e, n = new L.default({
      channelId: t.id,
      content: s
    }), l = (0, x.useShowImprovedMarkdownUserExperimentConfig)(new Date().valueOf()), i = (0, x.useShowImprovedMarkdownGuildExperimentConfig)(t.guild_id, new Date().valueOf()), {
      content: o
    } = (0, A.default)(n, {
      hideSimpleEmbedContent: !0,
      isInteracting: !1,
      formatInline: !1,
      allowList: !0,
      allowHeading: !0,
      allowLinks: l.showMaskedLinks || i.showMaskedLinks,
      previewLinkTarget: l.showMaskedLinks || i.showMaskedLinks
    }), u = (0, v.default)({
      message: n,
      channel: t
    }, o, !1);
    return (0, a.jsx)("div", {
      className: r(em.channelTextAreaInner, em.previewTextArea),
      children: u
    })
  }),
  e_ = n.memo(function(e) {
    let {
      parentChannel: t,
      submit: s,
      disabled: l = !1,
      editorRef: i,
      setEditorRef: d
    } = e, c = (0, m.useStateFromStores)([w.default], () => w.default.getCurrentUser());
    o(null != c, "current user cannot be null");
    let {
      messageError: f,
      previewing: g,
      textAreaState: x,
      bodyFocused: C,
      formOpen: T
    } = (0, en.useForumPostComposerStore)(e => {
      let {
        messageError: t,
        textAreaState: s,
        previewing: a,
        bodyFocused: n,
        formOpen: l
      } = e;
      return {
        messageError: t,
        textAreaState: s,
        previewing: a,
        bodyFocused: n,
        formOpen: l
      }
    }, u.default), S = (0, en.useForumPostComposerStoreApi)();
    n.useEffect(() => () => (0, et.maybeTrackForumNewPostDraftCreated)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let E = n.useCallback(() => {
        S.getState().setBodyFocused(!0)
      }, [S]),
      N = n.useCallback(() => {
        S.getState().setBodyFocused(!1)
      }, [S]),
      M = n.useCallback((e, t, s) => {
        let {
          setTextAreaState: a
        } = S.getState();
        a({
          textValue: t,
          richValue: s
        })
      }, [S]),
      A = n.useCallback(e => {
        let {
          value: t,
          uploads: a,
          stickers: n
        } = e;
        return s(t, n, a)
      }, [s]);
    (0, Y.useComponentAction)({
      event: eu.ComponentActions.TEXTAREA_FOCUS,
      handler: E
    }), (0, Y.useComponentAction)({
      event: eu.ComponentActions.TEXTAREA_BLUR,
      handler: N
    });
    let v = (0, q.renderError)(f, {
      content: x.textValue
    });
    return (0, a.jsx)("div", {
      className: em.bodyContainer,
      children: (0, a.jsxs)("div", {
        className: em.contentContainer,
        children: [g ? (0, a.jsx)(eT, {
          parentChannel: t,
          textValue: x.textValue
        }) : (0, a.jsx)("div", {
          onClick: E,
          children: (0, a.jsx)(_.default, {
            type: eh,
            setEditorRef: d,
            channel: t,
            placeholder: ec.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
            textValue: x.textValue,
            richValue: x.richValue,
            focused: C,
            className: em.channelTextArea,
            innerClassName: r(em.channelTextAreaInner, {
              [em.channelTextAreaInnerError]: null != v
            }),
            onChange: M,
            onSubmit: A,
            promptToUpload: Z.promptToUpload,
            disabled: l,
            onKeyDown: e => {
              if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                if (null == i) return;
                e.preventDefault(), e.stopPropagation();
                let t = i.getSlateEditor();
                if (null == t) return;
                "Home" === e.key ? p.SlateTransforms.resetSelectionToStart(t) : p.SlateTransforms.resetSelectionToEnd(t)
              }
              T && "Escape" === e.key && !S.getState().submitting && (null == i || i.blur(), S.getState().setFormOpen(!1), S.getState().setTitleFocused(!1), S.getState().setBodyFocused(!1), S.getState().setPreviewing(!1))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, a.jsx)(h.InputError, {
          error: v
        })]
      })
    })
  });

function eS() {
  return (0, a.jsx)("div", {
    className: em.previewModeIndicator,
    children: (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: ec.default.Messages.PREVIEW_MODE
    })
  })
}

function ep() {
  let e = (0, ee.useIsForumPostPreviewEnabled)(),
    {
      previewing: t
    } = (0, en.useForumPostComposerStore)(e => {
      let {
        previewing: t
      } = e;
      return {
        previewing: t
      }
    }),
    s = (0, en.useForumPostComposerStoreApi)(),
    l = n.useCallback(() => {
      s.getState().setPreviewing(!t), (0, et.trackForumPreviewPostClicked)()
    }, [t, s]);
  return e ? (0, a.jsx)(h.Tooltip, {
    text: t ? ec.default.Messages.EXIT_PREVIEW : ec.default.Messages.PREVIEW,
    children: e => (0, a.jsx)(h.Clickable, {
      ...e,
      onClick: l,
      className: r(em.forumPostFormButton, {
        [em.forumPostFormButtonActive]: t
      }),
      children: t ? (0, a.jsx)(G.default, {
        ...e,
        width: 24,
        height: 24
      }) : (0, a.jsx)(B.default, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let eE = n.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: s,
    className: l
  } = e, {
    textAreaState: r,
    appliedTags: i,
    name: o
  } = (0, en.useForumPostComposerStore)(e => {
    let {
      textAreaState: t,
      appliedTags: s,
      name: a
    } = e;
    return {
      textAreaState: t,
      appliedTags: s,
      name: a
    }
  }), {
    rateLimitPerUser: u
  } = t, d = u > 0, c = (0, m.useStateFromStores)([y.default], () => y.default.getSlowmodeCooldownGuess(t.id, y.SlowmodeType.CreateThread)), f = (0, m.useStateFromStores)([P.default], () => P.default.can(eu.Permissions.MANAGE_THREADS, t) || P.default.can(eu.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(ed.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, x = (0, en.useForumPostComposerStoreApi)(), C = n.useCallback(() => {
    x.getState().setBodyFocused(!1)
  }, [x]), _ = n.useMemo(() => "" !== o.trim() && "" !== r.textValue.trim(), [o, r.textValue]);
  return n.useEffect(() => {
    !_ && x.getState().setPreviewing(!1)
  }, [_, x]), (0, a.jsxs)("div", {
    className: l,
    children: [(0, a.jsx)(eA, {
      parentChannel: t
    }), (0, a.jsx)("div", {
      className: em.tagsDivider
    }), (0, a.jsxs)("div", {
      className: em.controlsContainer,
      children: [(0, a.jsxs)("div", {
        className: em.controls,
        children: [(0, a.jsxs)("div", {
          className: em.wrappedControls,
          children: [g && (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            children: ec.default.Messages.FORUM_POST_TAG_REQUIRED_ERROR
          }), (0, a.jsx)(S.default, {
            type: eh,
            textValue: r.textValue,
            className: em.characterCount
          }), d && (0, a.jsx)(er.default, {
            rateLimitPerUser: u,
            slowmodeCooldownGuess: c,
            isBypassSlowmode: f,
            leadingIcon: !0
          })]
        }), (0, a.jsx)(eC, {
          parentChannel: t
        }), _ && (0, a.jsx)(ep, {}), (0, a.jsx)(eN, {
          parentChannel: t,
          disableIfInvalid: !0,
          canCreatePost: s,
          disabled: d && !f && c > 0
        })]
      }), (0, a.jsx)(T.default, {
        type: eh,
        className: em.expressionPicker,
        onClick: C
      }, "expression")]
    })]
  })
});

function eN(e) {
  let {
    parentChannel: t,
    canCreatePost: s,
    disabled: n,
    disableIfInvalid: l = !1
  } = e, {
    submitting: r,
    textAreaState: i,
    name: o,
    appliedTags: u,
    formOpen: d
  } = (0, en.useForumPostComposerStore)(e => {
    let {
      submitting: t,
      textAreaState: s,
      name: a,
      appliedTags: n,
      formOpen: l
    } = e;
    return {
      submitting: t,
      textAreaState: s,
      name: a,
      appliedTags: n,
      formOpen: l
    }
  }), c = t.hasFlag(ed.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, m.useStateFromStoresArray)([D.default], () => D.default.getUploads(t.id, b.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, x = !c && g && o.trim().length > 0;
  if (__OVERLAY__) return null;
  let C = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.jsxs)(h.Button, {
      ...e,
      size: h.Button.Sizes.SMALL,
      className: em.submitButton,
      innerClassName: em.submitButtonInner,
      type: "submit",
      submitting: r,
      disabled: l && !x || n || !s,
      children: [(0, a.jsx)(V.default, {
        className: em.submitIcon,
        width: 16,
        height: 16
      }), (0, a.jsx)(h.Text, {
        variant: "text-md/semibold",
        color: "none",
        children: d ? ec.default.Messages.SUBMIT_POST : ec.default.Messages.NEW_FORUM_POST_NEW
      })]
    })
  };
  return s ? C() : (0, a.jsx)(h.Tooltip, {
    text: ec.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
    children: e => C(e)
  })
}

function eM() {
  return Promise.resolve()
}

function eA(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: s,
    toggleAppliedTag: l,
    setPopoutOpen: i
  } = (0, en.useForumPostComposerStore)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: s,
      setPopoutOpen: a
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: s,
      setPopoutOpen: a
    }
  }, u.default), o = s.size >= eo.MAX_FORUM_POST_TAGS, m = (0, d.default)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: eM,
    scrollToEnd: eM,
    orientation: c.Orientations.HORIZONTAL
  }), {
    containerRef: f,
    containerWidth: g
  } = (0, ei.default)(), x = n.useRef(null), [C, T] = n.useState(!0), _ = (0, $.useVisibleForumTags)(t), [S, p] = n.useState(0);
  return (n.useLayoutEffect(() => {
    var e;
    let t = x.current,
      s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
      a = null == t || null == s || s.clientHeight > t.clientHeight;
    if (a !== C && T(a), a && null != f.current && null != s && null != s.children) {
      let {
        left: e,
        top: t
      } = f.current.getBoundingClientRect(), a = 0;
      for (let n of s.children) {
        let {
          right: s,
          top: l,
          height: r
        } = n.getBoundingClientRect();
        if (l - t > r) break;
        s - e > a && (a = s - e)
      }
      p(a)
    }
  }, [_, C, f, g]), 0 === _.length) ? null : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: em.tagsContainer,
      ref: f,
      children: [(0, a.jsx)(K.default, {
        className: em.tagsIcon,
        width: 16,
        height: 16
      }), (0, a.jsx)("div", {
        className: em.tagList,
        ref: x,
        children: (0, a.jsx)(d.ListNavigatorProvider, {
          navigator: m,
          children: (0, a.jsx)(d.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, a.jsx)("div", {
                className: em.tagListInner,
                ref: t,
                ...n,
                children: _.map(e => (0, a.jsx)(el.default, {
                  ariaLabel: ec.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                    tagName: e.name
                  }),
                  tag: e,
                  onClick: o && !s.has(e.id) ? void 0 : () => l(e.id),
                  disabled: !s.has(e.id) && s.size >= eo.MAX_FORUM_POST_TAGS,
                  selected: s.has(e.id),
                  size: el.default.Sizes.SMALL
                }, e.id))
              })
            }
          })
        })
      }), C && (0, a.jsx)(h.Popout, {
        onRequestOpen: () => i(!0),
        onRequestClose: () => i(!1),
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, a.jsx)(es.default, {
            parentChannel: t,
            appliedTags: s,
            maxTagsApplied: o,
            onSelectTag: l,
            onClose: n
          })
        },
        position: "bottom",
        align: "center",
        children: e => (0, a.jsxs)(h.Button, {
          ...e,
          size: h.Button.Sizes.TINY,
          className: em.tagsButton,
          innerClassName: em.tagsButtonInner,
          style: {
            left: S
          },
          look: h.Button.Looks.LINK,
          "aria-label": ec.default.Messages.ADD_TAG_FORUM_POST,
          children: [ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(U.default, {
            width: 16
          })]
        })
      }), (0, a.jsxs)(h.Button, {
        size: h.Button.Sizes.TINY,
        className: r(em.tagsButton, em.tagsButtonPlaceholder),
        innerClassName: em.tagsButtonInner,
        look: h.Button.Looks.LINK,
        "aria-label": ec.default.Messages.ADD_TAG_FORUM_POST,
        children: [ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(U.default, {
          width: 16
        })]
      })]
    })
  })
}

function ev(e) {
  let {
    style: t,
    className: s
  } = e;
  return (0, a.jsx)("div", {
    className: s,
    style: t,
    children: (0, a.jsx)("div", {
      className: em.loader
    })
  })
}