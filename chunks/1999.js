"use strict";
s.r(t), s.d(t, {
  ComposerUploadButton: function() {
    return j
  },
  default: function() {
    return O
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  r = s.n(l),
  i = s("907002"),
  o = s("446674"),
  u = s("77078"),
  d = s("371642"),
  c = s("206230"),
  m = s("850391"),
  h = s("271972"),
  f = s("761354"),
  g = s("42203"),
  x = s("474643"),
  C = s("585722"),
  T = s("840817"),
  _ = s("659500"),
  S = s("412861"),
  p = s("867965"),
  E = s("49111"),
  N = s("572228");
let M = {
    scale: .95,
    opacity: 0
  },
  A = {
    scale: 1,
    opacity: 1
  },
  v = {
    scale: 1,
    opacity: 1
  },
  I = {
    tension: 2400,
    friction: 52
  };

function j(e) {
  let {
    channelId: t,
    onClick: s,
    onClose: l,
    onMouseEnter: i
  } = e, c = n.useRef(null), m = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]);
  return r(null != m, "Forum Channel is null"), (0, a.jsxs)(u.Clickable, {
    className: N.uploadInput,
    onMouseEnter: i,
    onClick: () => {
      (0, p.trackForumChannelMediaUploaderClicked)({
        isMobile: !1
      }), null == s || s()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null === (t = c.current) || void 0 === t || t.activateUploadDialogue(), (0, p.trackForumChannelMediaUploaderClicked)({
          isMobile: !1
        })
      }
    },
    children: [(0, a.jsx)(d.default, {
      className: N.fileInput,
      ref: c,
      onChange: e => {
        null == l || l(), (0, S.promptToUpload)(e.currentTarget.files, m, x.DraftType.FirstThreadMessage, {
          requireConfirm: !0
        }), _.ComponentDispatch.dispatch(E.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: -1,
      "aria-hidden": !0
    }), (0, a.jsx)(T.default, {
      width: 28,
      height: 28,
      className: N.uploadIcon
    })]
  })
}

function R(e) {
  let {
    channelId: t,
    closePopout: s
  } = e, [l, r] = n.useState(!1), {
    reducedMotion: d
  } = n.useContext(u.AccessibilityPreferencesContext), g = (0, i.useSpring)({
    from: d.enabled ? A : M,
    to: v,
    config: I
  }), x = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), T = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
  return (0, a.jsx)(i.animated.div, {
    className: N.popoutContainer,
    onMouseLeave: () => {
      !l && s()
    },
    style: g,
    children: (0, a.jsxs)(u.ScrollerThin, {
      orientation: "horizontal",
      className: N.popout,
      paddingFix: !1,
      fade: !0,
      children: [(0, a.jsx)(j, {
        channelId: t,
        onClick: () => {
          r(!0)
        },
        onClose: () => {
          r(!1), s()
        }
      }), (0, a.jsx)("div", {
        className: N.uploads,
        children: T.map(e => (0, a.jsx)(f.default, {
          channelId: t,
          draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: x,
          hideFileName: !0,
          size: h.AttachmentListItemSizes.SMALL
        }, e.id))
      })]
    })
  })
}

function O(e) {
  let {
    channelId: t
  } = e, [s, l] = n.useState(!1), r = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
  n.useEffect(() => {
    s && !u && l(!1)
  }, [s, u]);
  let d = () => {
    u && l(!0)
  };
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [u ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.UploadIcon, {
        upload: r[0],
        size: h.AttachmentListItemSizes.SMALL,
        onMouseEnter: d
      }), !s && (0, a.jsx)("div", {
        className: N.badge,
        children: i
      })]
    }) : (0, a.jsx)(j, {
      onMouseEnter: d,
      channelId: t
    }), s && (0, a.jsx)(R, {
      channelId: t,
      closePopout: () => {
        l(!1)
      }
    })]
  })
}