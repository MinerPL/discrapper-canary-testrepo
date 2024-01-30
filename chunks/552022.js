"use strict";
l.r(t), l.d(t, {
  default: function() {
    return w
  }
}), l("222007");
var a, n, i = l("37983"),
  s = l("884691"),
  r = l("414456"),
  o = l.n(r),
  d = l("866227"),
  u = l.n(d),
  c = l("446674"),
  f = l("862337"),
  p = l("185370"),
  m = l("504318"),
  h = l("77078"),
  E = l("812204"),
  v = l("685665"),
  C = l("730859"),
  _ = l("739034"),
  g = l("697218"),
  L = l("944832"),
  x = l("561744"),
  T = l("491920"),
  I = l("826432"),
  S = l("228220"),
  N = l("15165"),
  A = l("58608"),
  M = l("599110"),
  R = l("449008"),
  P = l("299039"),
  j = l("803725"),
  y = l("135284"),
  D = l("49111"),
  O = l("782340"),
  b = l("593262"),
  H = l("339010");
(n = a || (a = {})).DELETE = "delete", n.EDIT = "edit", n.SHARE = "share";
var w = function(e) {
  var t, l, a;
  let {
    clip: n,
    exporting: r,
    actionsDisabled: d,
    isNew: u,
    onDelete: p,
    onEdit: m,
    onShare: _
  } = e, L = (0, c.useStateFromStoresArray)([g.default], () => n.users.map(e => g.default.getUser(e)).filter(R.isNotNullish)), {
    AnalyticsLocationProvider: T
  } = (0, v.default)(E.default.CLIPS_GALLERY_ITEM), [I, S] = s.useState(!1), N = s.useRef(null), A = (0, x.default)(null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), j = s.useRef(new f.DelayedCall(500, () => {
    var e;
    let t = N.current;
    null != t && t.paused && (t.currentTime = A.current, null === (e = N.current) || void 0 === e || e.play())
  })), y = s.useCallback(() => {
    let e = N.current;
    null != e && (e.pause(), e.src = "")
  }, []), H = s.useCallback(() => {
    var e;
    S(!0), null === (e = j.current) || void 0 === e || e.delay()
  }, []), w = s.useCallback(() => {
    var e, t, l;
    S(!1);
    let a = N.current;
    null === (e = j.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
  }, [null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start]), B = s.useCallback(e => {
    var t, l;
    (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w()
  }, [w]), z = new Date(P.default.extractTimestamp(n.id)), F = z.toLocaleDateString(), G = z.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), Y = "".concat(F, " • ").concat(G);
  return (0, i.jsx)(T, {
    children: (0, i.jsxs)(h.ClickableContainer, {
      "aria-disabled": d,
      "aria-label": O.default.Messages.EDIT,
      onClick: d ? void 0 : () => {
        m(n), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
      },
      className: o(b.clipItem, {
        [b.disabled]: d
      }),
      onBlur: B,
      onFocus: H,
      onMouseOver: H,
      onMouseLeave: w,
      children: [(0, i.jsx)(k, {
        clip: n,
        isNew: u,
        videoRef: N
      }), (0, i.jsxs)("div", {
        className: b.clipFooter,
        children: [(0, i.jsx)(U, {
          clip: n,
          focused: I,
          onFocus: H
        }), (0, i.jsx)(h.Text, {
          className: b.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: n.applicationName
        }), (0, i.jsx)(h.Text, {
          className: b.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: Y
        }), (0, i.jsxs)("div", {
          className: b.usersAndDelete,
          children: [(0, i.jsx)(C.default, {
            maxUsers: 4,
            users: L,
            onFocus: e => {
              var t, l, a, n;
              let i = e.relatedTarget,
                s = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
              if ((null == i ? void 0 : i.parentElement) !== s)(null == i ? void 0 : null === (n = i.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== s && H()
            }
          }), I && (0, i.jsx)(V, {
            clip: n,
            actionsDisabled: d,
            exporting: r,
            onBeforeDelete: y,
            onDelete: p,
            onEdit: m,
            onShare: _,
            onBlur: e => {
              var t;
              (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w()
            }
          })]
        })]
      })]
    })
  })
};

function k(e) {
  let {
    clip: t,
    isNew: l,
    videoRef: a
  } = e, n = 0 === t.length, [r, o] = s.useMemo(() => {
    let e = t.length,
      l = !1,
      a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, u.duration(e)]
  }, [t.length, t.editMetadata]), d = "".concat(o.seconds()).padStart(2, "0");
  return (0, i.jsxs)(L.default, {
    aspectRatio: 16 / 9,
    className: b.clipThumbContainer,
    children: [(0, i.jsx)(B, {
      clip: t,
      videoRef: a
    }), (0, i.jsxs)("div", {
      className: b.clipBadges,
      children: [n && (0, i.jsx)("div", {
        className: b.clipProcessingBadge,
        children: (0, i.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: O.default.Messages.CLIPS_PROCESSING_BADGE
        })
      }), !n && l && (0, i.jsxs)(h.Text, {
        className: b.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, i.jsx)(I.default, {
          className: b.newIcon
        }), O.default.Messages.NEW.toUpperCase()]
      }), !n && (0, i.jsxs)("div", {
        className: b.clipDurationBadge,
        children: [r ? (0, i.jsx)(N.default, {
          className: b.clipDurationEditIcon
        }) : null, (0, i.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(o.minutes(), ":").concat(d)
        })]
      })]
    })]
  })
}

function U(e) {
  var t;
  let {
    clip: l,
    focused: a,
    onFocus: n
  } = e, [r, d] = s.useState(l.name), u = !l.name, [c, f] = s.useState(!1), [E, v] = s.useState(null !== (t = l.name) && void 0 !== t ? t : ""), [C, _] = s.useState(!1), g = async () => {
    _(!0), await (0, j.updateClipMetadata)(l.id, {
      name: "" === E ? void 0 : E
    }), _(!1), f(!1)
  };
  return (s.useEffect(() => {
    if (r !== l.name) {
      var e;
      d(l.name), v(null !== (e = l.name) && void 0 !== e ? e : "")
    }
  }, [l.name, r]), c) ? (0, i.jsx)(h.TextInput, {
    inputClassName: o(H["heading-lg/medium"], b.clipTitleInput),
    onClick: e => e.stopPropagation(),
    value: E,
    autoFocus: !0,
    onKeyDown: e => {
      "Enter" === e.key && g()
    },
    disabled: C,
    onChange: v,
    onBlur: g
  }) : (0, i.jsxs)(h.Clickable, {
    className: b.clipTitleInputPlaceholder,
    onFocus: n,
    onClick: e => {
      e.stopPropagation(), f(!0)
    },
    children: [u ? (0, i.jsx)(h.Heading, {
      className: b.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: O.default.Messages.CLIPS_ADD_A_TITLE
    }) : (0, i.jsx)(h.Heading, {
      className: b.clipTitle,
      color: "text-normal",
      variant: "heading-lg/medium",
      children: l.name
    }), a && (0, i.jsx)(m.PencilIcon, {
      "aria-label": O.default.Messages.EDIT,
      color: h.tokens.colors.TEXT_MUTED,
      height: p.ICON_SIZE.sm,
      width: p.ICON_SIZE.sm,
      className: b.clipTitleIcon
    })]
  })
}

function B(e) {
  let {
    clip: t,
    videoRef: l
  } = e, a = (0, y.useClipProtocolURL)(t);
  return 0 === t.length ? (0, i.jsx)(h.Spinner, {
    type: h.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: b.clipThumb
  }) : null != a ? (0, i.jsx)(A.default, {
    preload: "metadata",
    muted: !0,
    poster: t.thumbnail,
    src: a,
    loop: !0,
    className: b.clipThumb,
    ref: l
  }) : (0, i.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: b.clipThumb
  })
}

function V(e) {
  let {
    clip: t,
    exporting: l,
    actionsDisabled: a,
    onBeforeDelete: n,
    onDelete: r,
    onEdit: o,
    onShare: d,
    onBlur: u
  } = e, c = (0, _.default)(), f = s.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (n(), (0, j.deleteClip)(t.filepath)) : r(t, n), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [r, n, t]), p = s.useCallback(e => {
    e.stopPropagation(), o(t), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [o, t]), m = s.useCallback(e => {
    e.stopPropagation(), d(t), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [d, t]);
  return (0, i.jsxs)("div", {
    className: b.buttonContainer,
    children: [null != r && (0, i.jsx)(h.Tooltip, {
      text: O.default.Messages.DELETE,
      children: e => (0, i.jsx)(h.Button, {
        ...e,
        disabled: a,
        color: c ? h.Button.Colors.RED : h.Button.Colors.PRIMARY,
        onClick: f,
        className: b.button,
        size: h.Button.Sizes.NONE,
        look: h.Button.Looks.FILLED,
        children: (0, i.jsx)(S.default, {
          className: b.miniIcon
        })
      })
    }), (0, i.jsx)(h.Tooltip, {
      text: O.default.Messages.EDIT,
      children: e => (0, i.jsx)(h.Button, {
        ...e,
        disabled: a,
        color: h.Button.Colors.PRIMARY,
        onClick: p,
        className: b.button,
        size: h.Button.Sizes.NONE,
        look: h.Button.Looks.FILLED,
        children: (0, i.jsx)(N.default, {
          className: b.miniIcon
        })
      })
    }), (0, i.jsx)(h.Button, {
      disabled: a && !l,
      submitting: l,
      color: h.Button.Colors.BRAND,
      onBlur: u,
      onClick: m,
      className: b.button,
      size: h.Button.Sizes.NONE,
      look: h.Button.Looks.FILLED,
      children: (0, i.jsx)(T.default, {
        className: b.miniIcon
      })
    })]
  })
}