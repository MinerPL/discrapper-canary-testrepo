"use strict";
n.d(t, {
  Z: function() {
    return Z
  },
  _: function() {
    return A
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(512722),
  i = n.n(a),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  d = n(53281),
  u = n(607070),
  h = n(541716),
  m = n(859235),
  g = n(898463),
  x = n(592125),
  _ = n(703558),
  f = n(117530),
  E = n(180277),
  N = n(585483),
  T = n(127654),
  C = n(228392),
  p = n(981631),
  v = n(518095);
let M = {
    scale: .95,
    opacity: 0
  },
  S = {
    scale: 1,
    opacity: 1
  },
  I = {
    scale: 1,
    opacity: 1
  },
  j = {
    tension: 2400,
    friction: 52
  };

function A(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: a,
    onMouseEnter: r
  } = e, u = l.useRef(null), h = (0, o.e7)([x.Z], () => x.Z.getChannel(t), [t]);
  return i()(null != h, "Forum Channel is null"), (0, s.jsxs)(c.Clickable, {
    className: v.uploadInput,
    onMouseEnter: r,
    onClick: () => {
      (0, C.N3)({
        isMobile: !1
      }), null == n || n()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null === (t = u.current) || void 0 === t || t.activateUploadDialogue(), (0, C.N3)({
          isMobile: !1
        })
      }
    },
    children: [(0, s.jsx)(d.Z, {
      className: v.fileInput,
      ref: u,
      onChange: e => {
        null == a || a(), (0, T.d)(e.currentTarget.files, h, _.d.FirstThreadMessage, {
          requireConfirm: !0
        }), N.S.dispatch(p.CkL.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: h.rateLimitPerUser <= 0,
      tabIndex: -1,
      "aria-hidden": !0
    }), (0, s.jsx)(E.Z, {
      width: 28,
      height: 28,
      className: v.uploadIcon
    })]
  })
}

function R(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [a, i] = l.useState(!1), {
    reducedMotion: d
  } = l.useContext(c.AccessibilityPreferencesContext), x = (0, r.useSpring)({
    from: d.enabled ? S : M,
    to: I,
    config: j
  }), _ = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), E = (0, o.e7)([f.Z], () => f.Z.getUploads(t, h.I.CREATE_FORUM_POST.drafts.type));
  return (0, s.jsx)(r.animated.div, {
    className: v.popoutContainer,
    onMouseLeave: () => {
      !a && n()
    },
    style: x,
    children: (0, s.jsxs)(c.ScrollerThin, {
      orientation: "horizontal",
      className: v.popout,
      paddingFix: !1,
      fade: !0,
      children: [(0, s.jsx)(A, {
        channelId: t,
        onClick: () => {
          i(!0)
        },
        onClose: () => {
          i(!1), n()
        }
      }), (0, s.jsx)("div", {
        className: v.uploads,
        children: E.map(e => (0, s.jsx)(g.Z, {
          channelId: t,
          draftType: h.I.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: _,
          hideFileName: !0,
          size: m.q.SMALL
        }, e.id))
      })]
    })
  })
}

function Z(e) {
  let {
    channelId: t
  } = e, [n, a] = l.useState(!1), i = (0, o.e7)([f.Z], () => f.Z.getUploads(t, h.I.CREATE_FORUM_POST.drafts.type)), r = i.length, c = r > 0;
  l.useEffect(() => {
    n && !c && a(!1)
  }, [n, c]);
  let d = () => {
    c && a(!0)
  };
  return (0, s.jsxs)("div", {
    className: v.container,
    children: [c ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.r, {
        upload: i[0],
        size: m.q.SMALL,
        onMouseEnter: d
      }), !n && (0, s.jsx)("div", {
        className: v.badge,
        children: r
      })]
    }) : (0, s.jsx)(A, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, s.jsx)(R, {
      channelId: t,
      closePopout: () => {
        a(!1)
      }
    })]
  })
}