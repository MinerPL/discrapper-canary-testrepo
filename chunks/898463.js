"use strict";
n.d(t, {
  Z: function() {
    return y
  },
  r: function() {
    return P
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(166459),
  _ = n(95152),
  d = n(476326),
  c = n(543651),
  E = n(377171),
  I = n(592125),
  T = n(68588),
  h = n(794358),
  S = n(880008),
  f = n(185403),
  N = n(740727),
  A = n(810090),
  m = n(956664),
  O = n(709054),
  R = n(273031),
  C = n(859235),
  p = n(689938),
  g = n(709982);
let L = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

function v(e) {
  let {
    alt: t,
    spoiler: n,
    renderContent: s,
    size: o
  } = e, [a, l] = r.useState(!1);
  return (0, i.jsx)(T.a.Provider, {
    value: !n,
    children: (0, i.jsx)(T.Z, {
      containerStyles: o === C.q.CLIP ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none"
      } : void 0,
      type: T.Z.Types.ATTACHMENT,
      onReveal: () => l(!0),
      className: g.spoilerContainer,
      children: e => (0, i.jsxs)("div", {
        className: g.spoilerWrapper,
        children: [s(e), (0, i.jsxs)("div", {
          className: g.tags,
          children: [null != t && "" !== t ? (0, i.jsx)("span", {
            className: g.altTag,
            children: p.Z.Messages.IMAGE_ALT
          }) : null, a && n ? (0, i.jsx)("span", {
            className: g.altTag,
            children: p.Z.Messages.SPOILER
          }) : null]
        })]
      })
    })
  })
}

function D(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: a = C.q.MEDIUM,
    onMouseEnter: u
  } = e, [_, d] = r.useState(), [c, E] = r.useState({
    width: 0,
    height: 0
  }), I = a === C.q.SMALL;
  r.useEffect(() => {
    if (null == t || !1 === L.includes(t.type)) return;
    let e = URL.createObjectURL(t);
    d(e);
    let n = new Image;
    return n.onload = () => {
      let {
        width: e,
        height: t
      } = (0, m.zp)(n.width, n.height);
      E({
        width: e,
        height: t
      })
    }, n.src = e, () => {
      d(void 0), E({
        width: 0,
        height: 0
      }), URL.revokeObjectURL(e)
    }
  }, [t]);
  let T = r.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null == _ ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("img", {
        src: _,
        className: o()(g.media, {
          [g.spoiler]: e,
          [g.imageSmall]: I
        }),
        "aria-hidden": !0,
        alt: null != n ? n : "",
        style: t ? c : {}
      })
    }, [_, I, n, c]),
    h = r.useCallback(() => {
      if (null != _)(0, l.openModal)(e => (0, i.jsx)(l.ModalRoot, {
        className: g.__invalid_modal,
        ...e,
        size: l.ModalSize.DYNAMIC,
        "aria-label": p.Z.Messages.IMAGE,
        children: T(!1, !0)
      }))
    }, [_, T]);
  return (0, i.jsx)("div", {
    onMouseEnter: u,
    className: o()(g.mediaContainer, {
      [g.imageSmall]: I
    }),
    children: (0, i.jsx)(l.Clickable, {
      onClick: h,
      className: g.clickableMedia,
      children: (0, i.jsx)(v, {
        size: a,
        alt: n,
        spoiler: s,
        renderContent: T
      })
    })
  })
}

function M(e) {
  let {
    file: t,
    alt: n,
    spoiler: s,
    size: a = C.q.MEDIUM,
    onMouseEnter: l,
    onVideoLoadError: u
  } = e, [_, d] = r.useState(), c = r.useRef(null);
  return r.useEffect(() => {
    if (null == t) return;
    let e = URL.createObjectURL(t);
    return d(e), () => {
      d(void 0), URL.revokeObjectURL(e)
    }
  }, [t]), (0, i.jsx)("div", {
    onMouseEnter: l,
    className: g.mediaContainer,
    children: (0, i.jsx)(v, {
      size: a,
      alt: n,
      spoiler: s,
      renderContent: e => (0, i.jsx)(A.Z, {
        ref: c,
        src: _,
        className: o()(g.media, {
          [g.spoiler]: e,
          [g.sizeClip]: a === C.q.CLIP
        }),
        onError: u,
        preload: "none",
        "aria-hidden": !0
      })
    })
  })
}

function P(e) {
  var t;
  let {
    upload: n,
    size: s = C.q.MEDIUM,
    onMouseEnter: a
  } = e, [l, u] = r.useState(!1), _ = s === C.q.SMALL;
  return n.isImage && n.item.platform === d.ow.WEB ? (0, i.jsx)(D, {
    file: n.item.file,
    alt: n.description,
    spoiler: n.spoiler,
    size: s,
    onMouseEnter: a
  }) : !l && n.isVideo && n.item.platform === d.ow.WEB ? (0, i.jsx)(M, {
    file: n.item.file,
    size: s,
    alt: n.description,
    spoiler: n.spoiler,
    onMouseEnter: a,
    onVideoLoadError: () => u(!0)
  }) : (0, i.jsx)("div", {
    onMouseEnter: a,
    className: o()(g.icon, g.__invalid_imageContainer, {
      [g[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
      [g.imageSmall]: _
    }),
    children: (0, i.jsx)("div", {
      className: g.tags,
      children: n.spoiler ? (0, i.jsx)("span", {
        className: g.altTag,
        children: p.Z.Messages.SPOILER
      }) : null
    })
  })
}

function y(e) {
  let {
    channelId: t,
    draftType: n,
    upload: s,
    keyboardModeEnabled: d,
    label: T,
    size: A = C.q.MEDIUM,
    canEdit: m = !0,
    hideFileName: L = !1,
    clip: v
  } = e, D = null != v, M = (A = D ? C.q.CLIP : A) === C.q.SMALL, y = (0, a.e7)([I.Z], () => {
    var e;
    return null === (e = I.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
  }), U = e => {
    e.stopPropagation(), (0, l.openModal)(e => (0, i.jsx)(_.default, {
      ...e,
      draftType: n,
      upload: s,
      channelId: t,
      onSubmit: e => {
        let {
          name: i,
          description: r,
          spoiler: o
        } = e;
        u.Z.update(t, s.id, n, {
          filename: i,
          description: r,
          spoiler: o
        })
      }
    }))
  };
  return (0, i.jsxs)(C.Z, {
    actions: (0, i.jsxs)(r.Fragment, {
      children: [m ? (0, i.jsx)(R.Z, {
        className: o()({
          [g.action]: M
        }),
        tooltip: D ? p.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : p.Z.Messages.ATTACHMENT_UTILITIES_SPOILER,
        onClick: () => u.Z.update(t, s.id, n, {
          spoiler: !s.spoiler
        }),
        children: s.spoiler ? (0, i.jsx)(S.Z, {
          className: o()({
            [g.actionBarIcon]: M
          })
        }) : (0, i.jsx)(h.Z, {
          className: o()({
            [g.actionBarIcon]: M
          })
        })
      }) : null, m && !D ? (0, i.jsx)(R.Z, {
        className: o()({
          [g.action]: M
        }),
        tooltip: p.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
        onClick: U,
        children: (0, i.jsx)(f.Z, {
          className: o()({
            [g.actionBarIcon]: M
          })
        })
      }) : null, (0, i.jsx)(R.Z, {
        className: o()({
          [g.action]: M
        }),
        tooltip: D ? p.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : p.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
        onClick: () => u.Z.remove(t, s.id, n),
        dangerous: !0,
        children: (0, i.jsx)(N.Z, {
          className: o()({
            [g.actionBarIcon]: M
          })
        })
      })]
    }),
    draftType: n,
    id: s.id,
    channelId: t,
    handleEditModal: U,
    keyboardModeEnabled: d,
    size: A,
    className: o()({
      [g.attachmentItemSmall]: M
    }),
    children: [(0, i.jsx)(P, {
      upload: s,
      size: A
    }), !L && !D && (0, i.jsx)("div", {
      className: g.filenameContainer,
      children: (0, i.jsx)(l.Text, {
        className: g.filename,
        variant: "text-sm/normal",
        children: null != T ? T : s.filename
      })
    }), D && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.Z, {
        className: g.clipsFooter,
        createdAt: O.default.extractTimestamp(v.id),
        participantIds: v.users,
        applicationId: v.applicationId,
        title: v.name,
        guildId: y
      }), (0, i.jsx)(l.TextBadge, {
        color: E.Z.BG_BRAND,
        className: g.clipsBadge,
        text: p.Z.Messages.CLIP_TAG
      })]
    })]
  })
}