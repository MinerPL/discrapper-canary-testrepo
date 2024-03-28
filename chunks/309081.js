"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return j
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  r = a.n(s),
  o = a("263568"),
  i = a("442837"),
  u = a("481060"),
  d = a("166459"),
  c = a("596454"),
  E = a("273031"),
  _ = a("907040"),
  A = a("906411"),
  m = a("592125"),
  f = a("703558"),
  L = a("117530"),
  R = a("153124"),
  C = a("586791"),
  N = a("642113"),
  T = a("740727"),
  h = a("358085"),
  O = a("79390"),
  P = a("885001"),
  I = a("35463"),
  g = a("489887"),
  x = a("185923"),
  p = a("957825"),
  M = a("689938"),
  S = a("387785");
let v = {
  offset: {
    top: -4,
    bottom: -4,
    left: 0,
    right: -8
  }
};

function j(e) {
  let {
    hasUpload: t,
    mediaUrl: a,
    mediaFilename: n,
    imageClassName: s,
    emoji: r,
    emojiClassName: o,
    fallback: i
  } = e;
  return t ? (0, l.jsx)("img", {
    src: a,
    alt: n,
    className: s
  }) : null != r ? (0, l.jsx)(c.default, {
    className: o,
    emojiId: r.id,
    emojiName: r.type === A.EmojiTypes.UNICODE ? r.surrogates : r.name,
    animated: r.animated
  }) : (0, l.jsx)(l.Fragment, {
    children: i
  })
}

function D(e) {
  let {
    onSelect: t,
    onEditMedia: a,
    onDeleteMedia: n,
    closePopout: s
  } = e;
  return (0, l.jsx)("div", {
    className: S.menuContainer,
    children: (0, l.jsx)(u.Menu, {
      navId: "poll-media-edit-menu",
      onClose: s,
      "aria-label": M.default.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
      onSelect: t,
      children: (0, l.jsxs)(u.MenuGroup, {
        children: [(0, l.jsx)(u.MenuItem, {
          id: "poll-media-replace",
          label: M.default.Messages.CREATE_POLL_REPLACE_EMOJI,
          action: a
        }), (0, l.jsx)(u.MenuItem, {
          id: "poll-media-delete",
          label: M.default.Messages.CREATE_POLL_REMOVE_EMOJI,
          action: n,
          color: "danger"
        })]
      })
    })
  })
}

function b(e) {
  let {
    channelId: t,
    localCreationAnswerId: a,
    buttonImage: s,
    layout: d,
    onEmojiSelect: c,
    onEmojiRemove: E,
    answerIndex: A,
    shouldShowEmojiPicker: f,
    toggleEmojiPicker: L
  } = e, R = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(t)), {
    emoji: T,
    isLoadingMedia: h,
    hasUpload: P,
    mediaUrl: g,
    mediaFilename: v
  } = (0, I.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: s
  }), b = d === o.PollLayoutTypes.DEFAULT, w = P || null != T, U = n.useCallback(() => {
    E(A)
  }, [E, A]), y = n.useMemo(() => P ? M.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, O.filterOutUUID)(v),
    answerNumber: A + 1
  }) : null != T ? M.default.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
    emojiName: T.name,
    answerNumber: A + 1
  }) : M.default.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({
    answerNumber: A + 1
  }), [P, T, A, v]), k = n.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)("div", {
      className: S.emojiPicker,
      children: (0, l.jsx)(_.default, {
        channel: R,
        pickerIntention: x.EmojiIntention.POLLS,
        closePopout: t,
        onNavigateAway: t,
        onSelectEmoji: (e, a) => {
          null != e && c(e, A), a && t()
        }
      })
    })
  }, [R, c, A]), B = n.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)(D, {
      onSelect: t,
      onEditMedia: L,
      onDeleteMedia: U,
      closePopout: t
    })
  }, [U, L]), F = h ? (0, l.jsx)(u.Spinner, {
    className: b ? S.spinnerWrapperDefault : S.spinnerWrapperImageOnly
  }) : (0, l.jsx)(j, {
    hasUpload: P,
    mediaUrl: g,
    mediaFilename: v,
    imageClassName: r()(S.media, b ? S.gifDefault : S.gifJumbo),
    emoji: T,
    emojiClassName: r()(S.media, b ? S.emojiDefault : S.emojiJumbo),
    fallback: (0, l.jsx)(N.default, {
      className: b ? S.expressionPickerIconDefault : S.expressionPickerIconImageOnly
    })
  }), H = r()(p.CHAT_INPUT_BUTTON_CLASSNAME, d === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? S.expressionPickerButtonImageOnly : S.expressionPickerButtonDefault, {
    [S.canEditMedia]: w
  });
  return (0, l.jsx)(u.Popout, {
    renderPopout: k,
    shouldShow: f,
    onRequestClose: L,
    animation: u.Popout.Animation.NONE,
    position: "bottom",
    spacing: 2,
    children: e => {
      let {
        "aria-controls": t,
        "aria-expanded": a,
        ...n
      } = e;
      return (0, l.jsx)(u.Popout, {
        animation: u.Popout.Animation.NONE,
        position: "bottom",
        renderPopout: B,
        children: e => {
          let {
            onClick: n,
            "aria-controls": s,
            "aria-expanded": r,
            ...o
          } = e;
          return (0, l.jsxs)(u.Clickable, {
            ...o,
            className: H,
            onClick: w && !f ? n : L,
            "aria-label": y,
            "aria-controls": null != t ? t : s,
            "aria-expanded": a || r,
            children: [F, w && (0, l.jsx)(C.default, {
              className: S.editIcon,
              "aria-hidden": !0
            })]
          })
        }
      })
    }
  })
}

function w(e) {
  var t;
  let {
    value: a,
    id: n
  } = e, s = (() => {
    var e;
    let t = null !== (e = null == a ? void 0 : a.length) && void 0 !== e ? e : 0;
    return g.MAX_POLL_ANSWER_LENGTH - t
  })();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: r()(S.characterCount),
      "aria-hidden": "true",
      children: [null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0, " / ", g.MAX_POLL_ANSWER_LENGTH]
    }), (0, l.jsxs)(u.HiddenVisually, {
      id: n,
      children: [M.default.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
        remainingCharacters: s
      }), " ", M.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: g.MAX_POLL_ANSWER_LENGTH
      })]
    })]
  })
}
t.default = n.forwardRef(function(e, t) {
  let {
    channelId: s,
    answer: c,
    index: _,
    layout: A,
    isLastAnswer: m,
    onAnswerTextChange: C,
    onEmojiSelect: N,
    onEmojiRemove: I,
    canRemoveAnswer: x,
    onRemoveAnswer: p,
    addAnswer: j,
    submitPoll: D,
    answerTextInputRefs: U,
    error: y,
    inputRef: k,
    deleteButtonRef: B
  } = e, F = (0, R.useUID)(), H = (0, R.useUID)(), G = null != y && y.length > 0, W = (0, i.useStateFromStores)([L.default], () => L.default.getUpload(s, c.localCreationAnswerId, f.DraftType.Poll)), [K, Y] = n.useState(!1), V = () => {
    function e(e) {
      d.default.update(s, c.localCreationAnswerId, f.DraftType.Poll, {
        description: e
      })
    }(0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("2538")]).then(a.bind(a, "92254"));
      return a => (0, l.jsx)(t, {
        channelId: s,
        answer: c,
        onSave: e,
        ...a
      })
    })
  }, z = n.useCallback(() => {
    Y(e => !e)
  }, []), X = n.useCallback(e => {
    let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
    switch (e.key.toLowerCase()) {
      case "enter":
        var l;
        m && (e.preventDefault(), ((0, O.isAnswerFilled)(c, A) || "macos" !== (0, h.getOS)() ? t : a) ? (e.stopPropagation(), D()) : j()), null === (l = U.current[_ + 1]) || void 0 === l || l.focus();
        break;
      case "e":
        ("macos" === (0, h.getOS)() ? a : t) && (e.preventDefault(), e.stopPropagation(), z())
    }
  }, [j, c, U, _, m, A, D, z]), q = (0, l.jsx)(b, {
    channelId: s,
    buttonImage: c.image,
    layout: A,
    onEmojiSelect: N,
    onEmojiRemove: I,
    localCreationAnswerId: c.localCreationAnswerId,
    answerIndex: _,
    shouldShowEmojiPicker: K,
    toggleEmojiPicker: z
  }), J = null != W && null != W.description && W.description.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: A === o.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: r()(S.answerRow, {
        [S.hasDeleteButton]: x
      }),
      children: [(0, l.jsxs)("div", {
        className: r()(S.defaultTextInputWrapper, {
          [S.hasError]: G
        }),
        ref: t,
        children: [q, (0, l.jsx)(u.TextInput, {
          "aria-label": M.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: _ + 1
          }),
          placeholder: M.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: c.text,
          className: S.defaultTextInput,
          inputClassName: S.defaultTextInput,
          onChange: e => C({
            text: e,
            index: _,
            localCreationAnswerId: c.localCreationAnswerId
          }),
          onKeyDown: X,
          maxLength: g.MAX_POLL_ANSWER_LENGTH,
          "aria-invalid": G,
          "aria-describedby": G ? F : H,
          focusProps: v,
          inputRef: k
        }), (0, l.jsx)(w, {
          value: c.text,
          id: H
        })]
      }), x && (0, l.jsx)(u.Clickable, {
        onClick: () => p(_),
        className: S.removeAnswerButtonDefault,
        "aria-label": M.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: _ + 1
        }),
        ref: B,
        children: (0, l.jsx)(T.default, {
          className: S.trashIcon,
          "aria-hidden": !0
        })
      }), G && (0, l.jsx)(u.Text, {
        id: F,
        variant: "text-xs/medium",
        color: "text-danger",
        className: S.__invalid_errorText,
        children: y
      })]
    }) : (0, l.jsxs)("div", {
      className: S.imageOnlyContainer,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: S.imagePreviewContainer,
        children: [q, J && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.Text, {
            variant: "text-xs/semibold",
            className: S.altBadge,
            "aria-hidden": !0,
            children: M.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: V,
            children: [(0, l.jsx)(u.HiddenVisually, {
              children: M.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(u.Text, {
              variant: "text-xxs/medium",
              className: S.altTextPreview,
              children: W.description
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: S.imageOnlyAnswerActionBar,
        children: [null != W ? (0, l.jsx)(E.default, {
          tooltip: M.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": J ? M.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: _ + 1
          }) : M.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: _ + 1
          }),
          onClick: V,
          children: (0, l.jsx)(P.ImageAltIcon, {
            "aria-hidden": !0
          })
        }) : null, (0, l.jsx)(E.default, {
          tooltip: M.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": M.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: _ + 1
          }),
          onClick: () => p(_),
          dangerous: !0,
          children: (0, l.jsx)(T.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})