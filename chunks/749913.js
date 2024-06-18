"use strict";
n.d(t, {
  Z: function() {
    return eg
  }
}), n(47120), n(733860);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  c = n(143927),
  d = n(924826),
  u = n(91192),
  h = n(536895),
  m = n(442837),
  g = n(481060),
  x = n(430742),
  _ = n(166459),
  f = n(541716),
  E = n(67158),
  N = n(893718),
  T = n(472243),
  C = n(436660),
  p = n(284182),
  v = n(795639),
  M = n(957730),
  S = n(25015),
  I = n(252032),
  j = n(913663),
  A = n(268350),
  R = n(456077),
  Z = n(488131),
  O = n(602034),
  b = n(23750),
  L = n(703558),
  P = n(496675),
  D = n(300429),
  y = n(117530),
  H = n(594174),
  w = n(86813),
  F = n(814550),
  U = n(696202),
  k = n(794358),
  B = n(880008),
  G = n(634648),
  V = n(185403),
  z = n(664800),
  W = n(548420),
  q = n(459273),
  K = n(838440),
  Y = n(127654),
  X = n(681154),
  J = n(883429),
  Q = n(945141),
  $ = n(456269),
  ee = n(103921),
  et = n(228392),
  en = n(259637),
  es = n(76451),
  el = n(470623),
  ea = n(479099),
  ei = n(399894),
  er = n(81490),
  eo = n(710352),
  ec = n(981631),
  ed = n(176505),
  eu = n(689938),
  eh = n(730729);
let em = f.I.CREATE_FORUM_POST;

function eg(e) {
  let {
    parentChannel: t,
    isSearchLoading: n,
    onChange: a,
    canCreatePost: r,
    inputRef: o
  } = e, {
    textAreaState: d,
    formOpen: u,
    previewing: h
  } = (0, el.xH)(e => {
    let {
      textAreaState: t,
      formOpen: n,
      previewing: s
    } = e;
    return {
      textAreaState: t,
      formOpen: n,
      previewing: s
    }
  }, c.Z), [x, _] = l.useState(null), f = l.useContext(q.oo), E = l.useCallback(() => {
    f.bumpDispatchPriority()
  }, [f]), N = (0, m.e7)([P.Z], () => P.Z.can(ec.Plq.ATTACH_FILES, t)), T = (0, m.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)), C = u && N && r, S = (null == t ? void 0 : t.isMediaChannel()) === !0, I = function(e, t) {
    let n = (0, el.AF)(),
      s = (0, $.ql)(e);
    return l.useCallback(() => {
      let {
        formOpen: l,
        setFormOpenFromUserAction: a,
        name: i,
        textAreaState: r,
        hasClickedForm: o
      } = n.getState();
      !l && (setTimeout(() => {
        if (t.current instanceof g.TextAreaAutosize) {
          var e, n, s, l;
          null === (n = t.current) || void 0 === n || null === (e = n._textArea) || void 0 === e || e.setSelectionRange(i.length, i.length), null === (l = t.current) || void 0 === l || null === (s = l._textArea) || void 0 === s || s.focus()
        }
      }, 0), (o && i.length > 0 || r.textValue.trim().length > 0 && r.textValue.trim() !== s || y.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) && a())
    }, [n, e.id, s, t])
  }(t, o), R = function(e) {
    let {
      formOpen: t
    } = (0, el.xH)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, c.Z), n = (0, el.AF)(), s = (0, O.r)({
      parentChannel: e
    });
    l.useEffect(() => {
      let {
        setNameError: e,
        setMessageError: t
      } = n.getState();
      e(null), t(null)
    }, [t, n]);
    let a = l.useCallback((t, s, l) => {
      let {
        name: a,
        textAreaState: i
      } = n.getState();
      null == t && (t = i.textValue), t = t.trim();
      let {
        content: r
      } = M.ZP.parse(e, t);
      if (t = r, null == s || 0 === s.length) {
        var o;
        s = null === (o = j.Z.getStickerPreview(e.id, em.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
      }
      if ((null == l || 0 === l.length) && (l = y.Z.getUploads(e.id, L.d.FirstThreadMessage)), null != l && l.length > 0 && e.isMediaChannel()) {
        let e = l.findIndex(e => !0 === e.isThumbnail);
        if (e > -1) {
          let t = l[e];
          l.splice(e, 1), l.unshift(t)
        }
      }
      let c = 0 === a.length,
        d = (null == t || 0 === t.length) && (null == s || 0 === s.length) && 0 === l.length;
      return {
        content: t,
        stickers: s,
        uploads: l,
        hasNameError: c,
        hasMessageError: d
      }
    }, [e, n]);
    return l.useCallback(async (t, l, i) => {
      let {
        setNameError: r,
        setMessageError: o,
        setSubmitting: c,
        resetFormState: d,
        formOpen: u,
        setFormOpen: h,
        setPreviewing: m,
        setFormOpenFromUserAction: g,
        setGuidelinesOpen: x
      } = n.getState(), _ = Q.Z.hasSeen(e.id);
      if (!u) return (0, et.P_)({
        guildId: e.guild_id,
        channelId: e.id
      }), !_ && n.getState().setGuidelinesOpen(!0), g(), {
        shouldClear: !1,
        shouldRefocus: !1
      };
      let {
        content: f,
        stickers: E,
        uploads: N,
        hasNameError: T,
        hasMessageError: C
      } = a(t, l, i);
      if (r(T ? (0, X.V_)() : null), o(C ? (0, X.T4)() : null), T || C) return {
        shouldClear: !1,
        shouldRefocus: !0
      };
      try {
        c(!0);
        let {
          valid: t
        } = await (0, K.v)({
          content: f,
          stickers: E,
          uploads: N,
          type: em,
          channel: e
        });
        if (!t) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        let n = await s(f, E, N);
        return (0, Z.ok)(n), J.Z.resort(e.id), (0, A.qB)(e.id, em.drafts.type), d(), h(!1), m(!1), Q.Z.markAsSeen(e.id), x(!1), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch (t) {
        var p, v;
        return (null === (p = t.body) || void 0 === p ? void 0 : p.code) === ec.evJ.AUTOMOD_TITLE_BLOCKED ? r((0, X.Gx)(t.body, e)) : (null === (v = t.body) || void 0 === v ? void 0 : v.code) === ec.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, X.Gx)(t.body, e)), {
          shouldClear: !1,
          shouldRefocus: !0
        }
      } finally {
        c(!1)
      }
    }, [s, a, e, n])
  }(t);
  return l.useLayoutEffect(a, [u, d, T, a]), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)("div", {
      "aria-label": r ? eu.Z.Messages.NEW_FORUM_POST : eu.Z.Messages.SEARCH,
      className: i()(eh.container, {
        [eh.collapsed]: !u
      }),
      onClick: !u && r ? I : void 0,
      children: (0, s.jsxs)("form", {
        onMouseDown: E,
        onFocus: E,
        onSubmit: e => {
          if (e.preventDefault(), !!r) R()
        },
        children: [(0, s.jsxs)("div", {
          className: eh.formContainer,
          children: [(0, s.jsx)(ex, {
            parentChannel: t,
            isSearchLoading: n,
            inputRef: o
          }), (0, s.jsxs)("div", {
            className: h ? eh.previewForm : eh.form,
            children: [(0, s.jsx)(e_, {
              editorRef: x,
              parentChannel: t,
              isSearchLoading: n,
              inputRef: o,
              canCreatePost: r
            }), u && (0, s.jsx)(eN, {
              editorRef: x,
              setEditorRef: _,
              parentChannel: t,
              submit: R,
              disabled: !r
            }), h && (0, s.jsx)(eT, {})]
          }), C && (S ? (0, s.jsx)(v._, {
            parentChannel: t
          }) : (0, s.jsx)(es.Z, {
            channelId: t.id
          }))]
        }), (0, s.jsxs)("div", {
          className: eh.form,
          children: [C && S && (0, s.jsx)(p.Z, {
            parentChannel: t
          }), u && (0, s.jsx)(ep, {
            className: eh.horizontalPadding,
            parentChannel: t,
            canCreatePost: r
          })]
        })]
      })
    })
  })
}
let ex = l.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: n,
      inputRef: a
    } = e, {
      formOpen: i,
      name: r,
      textAreaState: o,
      hasClickedForm: d,
      submitting: u
    } = (0, el.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: s,
        previewing: l,
        textAreaState: a,
        hasClickedForm: i,
        submitting: r
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: s,
        textAreaState: a,
        previewing: l,
        hasClickedForm: i,
        submitting: r
      }
    }, c.Z), h = (0, el.AF)(), m = (0, $.ql)(t), f = l.useCallback(() => {
      var e;
      h.getState().resetFormState(), x.Z.clearDraft(t.id, L.d.ThreadSettings), x.Z.clearDraft(t.id, L.d.FirstThreadMessage), _.Z.clearAll(t.id, L.d.FirstThreadMessage), h.getState().setFormOpen(!1), h.getState().setBodyFocused(!1), h.getState().setTitleFocused(!1), h.getState().setHasClickedForm(!1), h.getState().setPreviewing(!1), null === (e = a.current) || void 0 === e || e.blur(), (0, et.Oq)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [h, t.id, t.guild_id, a]), E = l.useMemo(() => {
      if (n && !i) return (0, s.jsx)(eI, {});
      if (!n && !i && (0 === o.textValue.trim().length || o.textValue.trim() === m)) return (0, s.jsx)(z.Z, {
        className: eh.searchIcon,
        width: 24,
        height: 24
      });
      if (!i && (r.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== m || y.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) && d) return (0, s.jsx)(V.Z, {
        className: eh.pencilIcon,
        width: 24,
        height: 24
      });
      else return u ? (0, s.jsx)(U.Z, {
        className: eh.closeIconDisabled,
        width: 24,
        height: 24
      }) : (0, s.jsx)(g.Tooltip, {
        text: eu.Z.Messages.FORUM_CLEAR_ALL,
        children: e => (0, s.jsx)(g.Clickable, {
          ...e,
          onClick: f,
          children: (0, s.jsx)(U.Z, {
            className: eh.closeIcon,
            width: 24,
            height: 24
          })
        })
      })
    }, [n, i, d, r, o.textValue, f, t.id, m, u]);
    return (0, s.jsx)("div", {
      className: eh.prefixElement,
      children: E
    })
  }),
  e_ = l.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: n,
      canCreatePost: a,
      editorRef: i
    } = e, {
      formOpen: r,
      nameError: d,
      name: u,
      textAreaState: h,
      previewing: x
    } = (0, el.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: s,
        previewing: l,
        textAreaState: a,
        hasClickedForm: i,
        submitting: r
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: s,
        textAreaState: a,
        previewing: l,
        hasClickedForm: i,
        submitting: r
      }
    }, c.Z), _ = (0, el.AF)(), f = null != t.topic && 0 !== t.topic.length, E = Q.Z.hasSeen(t.id), N = (0, $.ql)(t), T = (0, m.e7)([H.default], () => H.default.getCurrentUser());
    o()(null != T, "current user cannot be null");
    (0, q.yp)({
      event: ec.CkL.FOCUS_COMPOSER_TITLE,
      handler: () => {
        var e;
        let t = n.current instanceof g.TextAreaAutosize ? null === (e = n.current) || void 0 === e ? void 0 : e._textArea : n.current;
        null == t || t.focus(), _.getState().setTitleFocused(!0), _.getState().setFormOpen(!0), _.getState().setHasClickedForm(!0)
      }
    });
    let C = l.useCallback(e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), (0, Y.d)([n], t, L.d.FirstThreadMessage), _.getState().setFormOpenFromUserAction())
      }, [t, _]),
      p = (0, X.Op)(d, {
        content: u
      });
    return (0, s.jsxs)("div", {
      className: eh.titleContainer,
      onPaste: C,
      children: [r && x ? (0, s.jsx)(g.Heading, {
        variant: "heading-md/semibold",
        className: eh.title,
        children: u
      }) : (0, s.jsx)(g.TextArea, {
        value: u,
        placeholder: a ? r || h.textValue.length > 0 && h.textValue.trim() !== N ? eu.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : eu.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : eu.Z.Messages.SEARCH,
        flex: !0,
        autosize: r,
        rows: 1,
        showCharacterCount: !1,
        showRemainingCharacterCount: !1,
        maxLength: ec.HN8,
        onChange: e => {
          let n = (0, R.Z)(e, !1);
          _.getState().setName(n);
          let s = 0 === n.trim().length,
            l = 0 === h.textValue.trim().length,
            a = h.textValue.trim() === N;
          s && (l || a) && _.getState().setHasClickedForm(!1), !r && J.Z.updateForumSearchQuery(t.id, n)
        },
        onFocus: () => {
          _.getState().setTitleFocused(!0), _.getState().setBodyFocused(!1)
        },
        onBlur: () => {
          _.getState().setTitleFocused(!1);
          let e = (0, R.Z)(u, !0);
          e !== u && (_.getState().setName(e), !r && J.Z.updateForumSearchQuery(t.id, e))
        },
        onKeyDown: e => {
          var s, l;
          "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), r && u.length > 0 ? null == i || i.focus() : a && e.shiftKey && ((0, et.nH)({
            guildId: t.guild_id,
            channelId: t.id
          }), f && !E && _.getState().setGuidelinesOpen(!0), _.getState().setFormOpenFromUserAction(), u.trim().length > 0 && (_.getState().setBodyFocused(!0), null == i || i.focus())));
          let o = n.current instanceof g.TextAreaAutosize ? null === (s = n.current) || void 0 === s ? void 0 : s._textArea : n.current;
          if ("Home" === e.key || "End" === e.key) {
            if (null == o) return;
            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) o.setSelectionRange(0, 0);
            else {
              let e = u.length;
              o.setSelectionRange(e, e)
            }
          }
          "Escape" === e.key && !_.getState().submitting && (null === (l = n.current) || void 0 === l || l.blur(), _.getState().setFormOpen(!1), _.getState().setTitleFocused(!1), _.getState().setBodyFocused(!1), _.getState().setPreviewing(!1))
        },
        error: p,
        className: eh.title,
        inputRef: n
      }), r ? null : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(ef, {
          parentChannel: t
        }), (0, s.jsx)(ev, {
          parentChannel: t,
          canCreatePost: a
        })]
      })]
    })
  });

function ef(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: n
  } = (0, el.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), l = (0, el.AF)(), a = null != t.topic && 0 !== t.topic.length, r = () => {
    l.getState().setGuidelinesOpen(!n)
  };
  return a ? (0, s.jsx)(g.Tooltip, {
    text: eu.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
    children: e => (0, s.jsx)(g.Clickable, {
      ...e,
      onClick: r,
      className: i()(eh.forumPostFormButton, {
        [eh.forumPostFormButtonActive]: n
      }),
      children: (0, s.jsx)(F.Z, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let eE = l.memo(function(e) {
    let {
      parentChannel: t,
      textValue: n
    } = e, l = new b.ZP({
      channelId: t.id,
      content: n
    }), {
      content: a
    } = (0, S.Z)(l, {
      hideSimpleEmbedContent: !0,
      isInteracting: !1,
      formatInline: !1,
      allowList: !0,
      allowHeading: !0,
      previewLinkTarget: !0
    }), r = (0, I.Z)({
      message: l,
      channel: t
    }, a, !1);
    return (0, s.jsx)("div", {
      className: i()(eh.channelTextAreaInner, eh.previewTextArea),
      children: r
    })
  }),
  eN = l.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: a = !1,
      editorRef: r,
      setEditorRef: d
    } = e, u = (0, m.e7)([H.default], () => H.default.getCurrentUser());
    o()(null != u, "current user cannot be null");
    let {
      messageError: h,
      previewing: x,
      textAreaState: _,
      bodyFocused: f,
      formOpen: E
    } = (0, el.xH)(e => {
      let {
        messageError: t,
        textAreaState: n,
        previewing: s,
        bodyFocused: l,
        formOpen: a
      } = e;
      return {
        messageError: t,
        textAreaState: n,
        previewing: s,
        bodyFocused: l,
        formOpen: a
      }
    }, c.Z), T = (0, el.AF)();
    l.useEffect(() => () => (0, et.Vn)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let p = l.useCallback(() => {
        T.getState().setBodyFocused(!0)
      }, [T]),
      v = l.useCallback(() => {
        T.getState().setBodyFocused(!1)
      }, [T]),
      M = l.useCallback((e, t, n) => {
        let {
          setTextAreaState: s
        } = T.getState();
        s({
          textValue: t,
          richValue: n
        })
      }, [T]),
      S = l.useCallback(e => {
        let {
          value: t,
          uploads: s,
          stickers: l
        } = e;
        return n(t, l, s)
      }, [n]);
    (0, q.yp)({
      event: ec.CkL.TEXTAREA_FOCUS,
      handler: p
    }), (0, q.yp)({
      event: ec.CkL.TEXTAREA_BLUR,
      handler: v
    });
    let I = (0, X.Op)(h, {
      content: _.textValue
    });
    return (0, s.jsx)("div", {
      className: eh.bodyContainer,
      children: (0, s.jsxs)("div", {
        className: eh.contentContainer,
        children: [x ? (0, s.jsx)(eE, {
          parentChannel: t,
          textValue: _.textValue
        }) : (0, s.jsx)("div", {
          onClick: p,
          children: (0, s.jsx)(N.Z, {
            type: em,
            setEditorRef: d,
            channel: t,
            placeholder: eu.Z.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
            textValue: _.textValue,
            richValue: _.richValue,
            focused: f,
            className: eh.channelTextArea,
            innerClassName: i()(eh.channelTextAreaInner, {
              [eh.channelTextAreaInnerError]: null != I
            }),
            onChange: M,
            onSubmit: S,
            promptToUpload: Y.d,
            disabled: a,
            onKeyDown: e => {
              if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                if (null == r) return;
                e.preventDefault(), e.stopPropagation();
                let t = r.getSlateEditor();
                if (null == t) return;
                "Home" === e.key ? C.Q.resetSelectionToStart(t) : C.Q.resetSelectionToEnd(t)
              }
              E && "Escape" === e.key && !T.getState().submitting && (null == r || r.blur(), T.getState().setFormOpen(!1), T.getState().setTitleFocused(!1), T.getState().setBodyFocused(!1), T.getState().setPreviewing(!1))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, s.jsx)(g.InputError, {
          error: I
        })]
      })
    })
  });

function eT() {
  return (0, s.jsx)("div", {
    className: eh.previewModeIndicator,
    children: (0, s.jsx)(g.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: eu.Z.Messages.PREVIEW_MODE
    })
  })
}

function eC() {
  let e = (0, ee.C)(),
    {
      previewing: t
    } = (0, el.xH)(e => {
      let {
        previewing: t
      } = e;
      return {
        previewing: t
      }
    }),
    n = (0, el.AF)(),
    a = l.useCallback(() => {
      n.getState().setPreviewing(!t), (0, et.nE)()
    }, [t, n]);
  return e ? (0, s.jsx)(g.Tooltip, {
    text: t ? eu.Z.Messages.EXIT_PREVIEW : eu.Z.Messages.PREVIEW,
    children: e => (0, s.jsx)(g.Clickable, {
      ...e,
      onClick: a,
      className: i()(eh.forumPostFormButton, {
        [eh.forumPostFormButtonActive]: t
      }),
      children: t ? (0, s.jsx)(B.Z, {
        ...e,
        width: 24,
        height: 24
      }) : (0, s.jsx)(k.Z, {
        ...e,
        width: 24,
        height: 24
      })
    })
  }) : null
}
let ep = l.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: a
  } = e, {
    textAreaState: i,
    appliedTags: r,
    name: o
  } = (0, el.xH)(e => {
    let {
      textAreaState: t,
      appliedTags: n,
      name: s
    } = e;
    return {
      textAreaState: t,
      appliedTags: n,
      name: s
    }
  }), {
    rateLimitPerUser: c
  } = t, d = c > 0, u = (0, m.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, D.S.CreateThread)), h = (0, m.e7)([P.Z], () => P.Z.can(ec.Plq.MANAGE_THREADS, t) || P.Z.can(ec.Plq.MANAGE_CHANNELS, t)), x = t.hasFlag(ed.zZ.REQUIRE_TAG) && 0 === r.size && o.length > 0 && i.textValue.length > 0, _ = (0, el.AF)(), f = l.useCallback(() => {
    _.getState().setBodyFocused(!1)
  }, [_]), N = l.useMemo(() => "" !== o.trim() && "" !== i.textValue.trim(), [o, i.textValue]);
  return l.useEffect(() => {
    !N && _.getState().setPreviewing(!1)
  }, [N, _]), (0, s.jsxs)("div", {
    className: a,
    children: [(0, s.jsx)(eS, {
      parentChannel: t
    }), (0, s.jsx)("div", {
      className: eh.tagsDivider
    }), (0, s.jsxs)("div", {
      className: eh.controlsContainer,
      children: [(0, s.jsxs)("div", {
        className: eh.controls,
        children: [(0, s.jsxs)("div", {
          className: eh.wrappedControls,
          children: [x && (0, s.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            children: eu.Z.Messages.FORUM_POST_TAG_REQUIRED_ERROR
          }), (0, s.jsx)(T.Z, {
            type: em,
            textValue: i.textValue,
            className: eh.characterCount
          }), d && (0, s.jsx)(ei.Z, {
            rateLimitPerUser: c,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: h,
            leadingIcon: !0
          })]
        }), (0, s.jsx)(ef, {
          parentChannel: t
        }), N && (0, s.jsx)(eC, {}), (0, s.jsx)(ev, {
          parentChannel: t,
          disableIfInvalid: !0,
          canCreatePost: n,
          disabled: d && !h && u > 0
        })]
      }), (0, s.jsx)(E.Z, {
        type: em,
        className: eh.expressionPicker,
        onClick: f
      }, "expression")]
    })]
  })
});

function ev(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: l,
    disableIfInvalid: a = !1
  } = e, {
    submitting: i,
    textAreaState: r,
    name: o,
    appliedTags: c,
    formOpen: d
  } = (0, el.xH)(e => {
    let {
      submitting: t,
      textAreaState: n,
      name: s,
      appliedTags: l,
      formOpen: a
    } = e;
    return {
      submitting: t,
      textAreaState: n,
      name: s,
      appliedTags: l,
      formOpen: a
    }
  }), u = t.hasFlag(ed.zZ.REQUIRE_TAG) && 0 === c.size && o.length > 0 && r.textValue.length > 0, h = (0, m.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)), x = r.textValue.trim().length > 0 || h.length > 0, _ = !u && x && o.trim().length > 0;
  if (__OVERLAY__) return null;
  let f = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.jsxs)(g.Button, {
      ...e,
      size: g.Button.Sizes.SMALL,
      className: eh.submitButton,
      innerClassName: eh.submitButtonInner,
      type: "submit",
      submitting: i,
      disabled: a && !_ || l || !n,
      children: [(0, s.jsx)(G.Z, {
        className: eh.submitIcon,
        width: 16,
        height: 16
      }), (0, s.jsx)(g.Text, {
        variant: "text-md/semibold",
        color: "none",
        children: d ? eu.Z.Messages.SUBMIT_POST : eu.Z.Messages.NEW_FORUM_POST_NEW
      })]
    })
  };
  return n ? f() : (0, s.jsx)(g.Tooltip, {
    text: eu.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
    children: e => f(e)
  })
}

function eM() {
  return Promise.resolve()
}

function eS(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: a,
    setPopoutOpen: r
  } = (0, el.xH)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: s
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: s
    }
  }, c.Z), o = n.size >= eo.Cn, m = (0, d.ZP)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: eM,
    scrollToEnd: eM,
    orientation: h.hy.HORIZONTAL
  }), {
    containerRef: x,
    containerWidth: _
  } = (0, er.Z)(), f = l.useRef(null), [E, N] = l.useState(!0), T = (0, $.Vm)(t), [C, p] = l.useState(0);
  return (l.useLayoutEffect(() => {
    var e;
    let t = f.current,
      n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
      s = null == t || null == n || n.clientHeight > t.clientHeight;
    if (s !== E && N(s), s && null != x.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = x.current.getBoundingClientRect(), s = 0;
      for (let l of n.children) {
        let {
          right: n,
          top: a,
          height: i
        } = l.getBoundingClientRect();
        if (a - t > i) break;
        n - e > s && (s = n - e)
      }
      p(s)
    }
  }, [T, E, x, _]), 0 === T.length) ? null : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: eh.tagsContainer,
      ref: x,
      children: [(0, s.jsx)(W.Z, {
        className: eh.tagsIcon,
        width: 16,
        height: 16
      }), (0, s.jsx)("div", {
        className: eh.tagList,
        ref: f,
        children: (0, s.jsx)(u.bG, {
          navigator: m,
          children: (0, s.jsx)(u.SJ, {
            children: e => {
              let {
                ref: t,
                ...l
              } = e;
              return (0, s.jsx)("div", {
                className: eh.tagListInner,
                ref: t,
                ...l,
                children: T.map(e => (0, s.jsx)(ea.Z, {
                  ariaLabel: eu.Z.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                    tagName: e.name
                  }),
                  tag: e,
                  onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
                  disabled: !n.has(e.id) && n.size >= eo.Cn,
                  selected: n.has(e.id),
                  size: ea.Z.Sizes.SMALL
                }, e.id))
              })
            }
          })
        })
      }), E && (0, s.jsx)(g.Popout, {
        onRequestOpen: () => r(!0),
        onRequestClose: () => r(!1),
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, s.jsx)(en.Z, {
            parentChannel: t,
            appliedTags: n,
            maxTagsApplied: o,
            onSelectTag: a,
            onClose: l
          })
        },
        position: "bottom",
        align: "center",
        children: e => (0, s.jsxs)(g.Button, {
          ...e,
          size: g.Button.Sizes.TINY,
          className: eh.tagsButton,
          innerClassName: eh.tagsButtonInner,
          style: {
            left: C
          },
          look: g.Button.Looks.LINK,
          "aria-label": eu.Z.Messages.ADD_TAG_FORUM_POST,
          children: [eu.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(w.Z, {
            width: 16
          })]
        })
      }), (0, s.jsxs)(g.Button, {
        size: g.Button.Sizes.TINY,
        className: i()(eh.tagsButton, eh.tagsButtonPlaceholder),
        innerClassName: eh.tagsButtonInner,
        look: g.Button.Looks.LINK,
        "aria-label": eu.Z.Messages.ADD_TAG_FORUM_POST,
        children: [eu.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(w.Z, {
          width: 16
        })]
      })]
    })
  })
}

function eI(e) {
  let {
    style: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: n,
    style: t,
    children: (0, s.jsx)("div", {
      className: eh.loader
    })
  })
}