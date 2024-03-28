"use strict";
a.r(t), a("47120"), a("789020");
var n = a("735250"),
  l = a("470079"),
  i = a("803997"),
  s = a.n(i),
  r = a("512722"),
  o = a.n(r),
  d = a("392711"),
  c = a.n(d),
  u = a("442837"),
  h = a("543651"),
  m = a("592125"),
  A = a("941797"),
  _ = a("630388"),
  g = a("269675"),
  I = a("768760"),
  M = a("981631"),
  p = a("902920");
let E = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  f = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  C = Math.round((I.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  x = Math.round(2 * (I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  v = x / 2,
  y = e => {
    let {
      mediaAttachments: t,
      getAttachmentKind: a,
      footer: l
    } = e;
    null != l && o()(1 === t.length, "footer only gets applied to single attachments");
    let i = t.length;
    if (1 === i) return (0, n.jsx)(T, {
      attachmentsForLayout: t,
      getAttachmentKind: a,
      isSingleImage: !0,
      footer: l
    });
    if (2 === i) return (0, n.jsx)(S, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    if (3 === i) return (0, n.jsx)(N, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    if (4 === i) return (0, n.jsx)(O, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    let s = i % 3;
    return (0, n.jsxs)(n.Fragment, {
      children: [1 === s && (0, n.jsx)(T, {
        attachmentsForLayout: t.slice(0, s),
        getAttachmentKind: a
      }), 2 === s && (0, n.jsx)(S, {
        attachmentsForLayout: t.slice(0, s),
        getAttachmentKind: a
      }), 0 === s ? (0, n.jsx)(j, {
        attachmentsForLayout: t,
        getAttachmentKind: a
      }) : (0, n.jsx)(j, {
        attachmentsForLayout: t.slice(s),
        getAttachmentKind: a
      })]
    })
  },
  T = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a,
      isSingleImage: l,
      footer: i
    } = e, r = t[0];
    return (0, n.jsx)("div", {
      className: s()(p.oneByOneGrid, {
        [p.oneByOneGridSingle]: l,
        [p.oneByOneGridMosaic]: !l,
        [p.hasFooter]: null != i
      }),
      children: (0, n.jsx)(F, {
        props: r,
        attachmentKind: a(r.attachment.id),
        useFullWidth: !l,
        isSingleItem: !0,
        footer: i
      })
    })
  },
  S = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.oneByTwoGrid,
      children: t.map(e => (0, n.jsx)("div", {
        className: p.oneByTwoGridItem,
        children: (0, n.jsx)(F, {
          props: e,
          attachmentKind: a(e.attachment.id),
          maxWidth: f,
          maxHeight: f
        })
      }, e.attachment.id))
    })
  },
  N = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsxs)("div", {
      className: s()(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
      children: [(0, n.jsx)("div", {
        className: p.oneByTwoSoloItem,
        children: (0, n.jsx)(F, {
          props: t[0],
          attachmentKind: a(t[0].attachment.id),
          maxWidth: x
        })
      }), (0, n.jsx)("div", {
        className: p.oneByTwoDuoItem,
        children: (0, n.jsx)("div", {
          className: p.twoByOneGrid,
          children: t.splice(1).map(e => (0, n.jsx)("div", {
            className: p.twoByOneGridItem,
            children: (0, n.jsx)(F, {
              props: e,
              attachmentKind: a(e.attachment.id),
              maxWidth: v,
              maxHeight: C
            })
          }, e.attachment.id))
        })
      })]
    })
  },
  O = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.twoByTwoGrid,
      children: t.map(e => (0, n.jsx)(F, {
        props: e,
        attachmentKind: a(e.attachment.id),
        maxWidth: f,
        maxHeight: C
      }, e.attachment.id))
    })
  },
  j = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.threeByThreeGrid,
      children: t.map(e => (0, n.jsx)(F, {
        props: e,
        attachmentKind: a(e.attachment.id),
        maxWidth: E,
        maxHeight: E
      }, e.attachment.id))
    })
  },
  D = e => ({
    className: s()(e, p.attachmentContentContainer),
    imgContainerClassName: p.lazyImgContainer,
    imgClassName: p.lazyImg
  }),
  L = e => ({
    className: s()(e, p.lazyImg)
  }),
  F = e => {
    let {
      props: t,
      attachmentKind: a,
      maxWidth: l = I.MEDIA_MOSAIC_MAX_WIDTH,
      maxHeight: i = I.MEDIA_MOSAIC_MAX_HEIGHT,
      useFullWidth: s = !0,
      isSingleItem: r = !1,
      footer: o
    } = e, d = {
      ...t,
      ..."IMAGE" === a && D(t.className),
      ..."VIDEO" === a && L(t.className),
      mediaLayoutType: I.MediaLayoutType.MOSAIC,
      maxWidth: l,
      maxHeight: i,
      useFullWidth: s,
      isSingleMosaicItem: r
    };
    return (0, n.jsx)(A.GIFAccessoryContext.Provider, {
      value: t.gifFavoriteButton,
      children: (0, n.jsx)(g.default, {
        ...d,
        footer: o
      })
    })
  };
t.default = e => {
  let {
    attachments: t
  } = e, a = t[0].message.channel_id, i = (0, u.useStateFromStores)([m.default], () => {
    var e;
    return null === (e = m.default.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id
  }), s = l.useMemo(() => new Map(t.map(e => [e.attachment.id, (0, g.getAttachmentKind)(e.attachment, e.inlineMedia)])), [t]), r = l.useCallback(e => {
    var t;
    return null !== (t = s.get(e)) && void 0 !== t ? t : "INVALID"
  }, [s]), [o, d] = l.useMemo(() => c().partition(t, e => {
    var t;
    return (0, _.hasFlag)(null !== (t = e.attachment.flags) && void 0 !== t ? t : 0, M.MessageAttachmentFlags.IS_CLIP)
  }), [t]), [A, I] = l.useMemo(() => c().partition(d, e => (0, g.isMediaAttachment)(r(e.attachment.id))), [d, r]);
  return (0, n.jsxs)(n.Fragment, {
    children: [A.length > 0 && (0, n.jsx)("div", {
      className: p.mediaAttachmentsContainer,
      children: (0, n.jsx)(y, {
        mediaAttachments: A,
        getAttachmentKind: r
      })
    }), I.length > 0 && (0, n.jsx)("div", {
      className: p.nonMediaAttachmentsContainer,
      children: I.map(e => (0, n.jsx)("div", {
        className: p.nonMediaAttachmentItem,
        children: (0, n.jsx)(F, {
          props: e,
          attachmentKind: r(e.attachment.id)
        })
      }, e.attachment.id))
    }), o.length > 0 && o.map(e => {
      var t;
      let {
        id: a,
        clip_created_at: l,
        clip_participants: s,
        title: o,
        application: d
      } = e.attachment;
      return (0, n.jsx)("div", {
        className: p.mediaAttachmentsContainer,
        children: (0, n.jsx)(y, {
          mediaAttachments: [e],
          getAttachmentKind: r,
          footer: (0, n.jsx)(h.default, {
            createdAt: null != l ? Date.parse(l) : void 0,
            participantIds: null !== (t = null == s ? void 0 : s.map(e => {
              let {
                id: t
              } = e;
              return t
            })) && void 0 !== t ? t : [],
            applicationId: null == d ? void 0 : d.id,
            title: o,
            guildId: i
          })
        })
      }, a)
    })]
  })
}