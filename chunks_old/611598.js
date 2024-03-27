"use strict";
a.r(t), a.d(t, {
  default: function() {
    return Z
  }
}), a("222007"), a("424973");
var s = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  d = a("87682"),
  r = a.n(d),
  o = a("759843"),
  u = a("446674"),
  c = a("77078"),
  f = a("450911"),
  m = a("685073"),
  p = a("81594"),
  T = a("783480"),
  g = a("966724"),
  E = a("428958"),
  I = a("442939"),
  S = a("843962"),
  h = a("679653"),
  y = a("884351"),
  _ = a("42203"),
  C = a("474643"),
  N = a("305961"),
  A = a("705955"),
  M = a("957255"),
  v = a("27618"),
  w = a("585722"),
  R = a("697218"),
  D = a("466857"),
  x = a("578706"),
  j = a("413709"),
  U = a("599110"),
  b = a("315102"),
  O = a("354023"),
  k = a("773336"),
  L = a("159885"),
  P = a("253981"),
  F = a("158998"),
  B = a("50885"),
  G = a("191225"),
  H = a("837707"),
  V = a("49111"),
  z = a("91366"),
  Y = a("782340"),
  K = a("863435");
async function W(e) {
  return e.type === O.RowTypes.DM || e.type === O.RowTypes.FRIEND ? await f.default.ensurePrivateChannel(e.item.id) : e.item.id
}

function Z(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    channelId: i,
    onClose: n,
    transitionState: d,
    ...f
  } = e, S = (0, u.useStateFromStores)([G.default], () => G.default.getSelfEmbeddedActivityForChannel(i));
  (0, E.default)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: t,
      activity_session_id: (0, H.default)(S)
    }
  });
  let [h] = (0, I.default)([t]), N = (0, u.useStateFromStores)([R.default], () => R.default.getCurrentUser()), [v, x] = l.useState(""), [j, b] = l.useState([]), [k, L] = l.useState(null), [F, B] = l.useState(null);
  l.useEffect(() => {
    let e = async () => {
      let e = P.default.toURLSafe(a);
      if (null == e) return;
      let t = r.basename(e.pathname),
        s = await fetch(a),
        l = await s.arrayBuffer(),
        i = new File([l], t);
      L(i);
      let n = new FileReader;
      n.onload = () => {
        var e;
        return B(null == n ? void 0 : null === (e = n.result) || void 0 === e ? void 0 : e.toString())
      }, n.readAsDataURL(i)
    };
    e()
  }, [a, L]);
  let Z = (0, u.useStateFromStoresArray)([A.default, M.default], () => A.default.getInviteSuggestionRows().filter(e => e.type === O.RowTypes.FRIEND || e.type === O.RowTypes.DM || M.default.can(V.Permissions.ATTACH_FILES, e.item)));
  l.useEffect(() => {
    (0, m.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t,
      inviteTargetType: z.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t]), l.useEffect(() => (0, m.searchInviteSuggestions)(v), [v]);
  let J = l.useCallback(async () => {
    await Promise.all(j.map(async e => {
      let t = Z.find(t => t.item.id === e);
      if (null != t) {
        let e = await W(t);
        p.default.clearAll(e, C.DraftType.ChannelMessage)
      }
    }))
  }, [j, Z]);
  l.useEffect(() => {
    d === c.ModalTransitionState.EXITING && J()
  }, [J, d]);
  let q = l.useCallback(async () => {
      await J(), n()
    }, [n, J]),
    $ = l.useCallback(async () => {
      let e = 0,
        a = 0,
        s = 0;
      async function l(l) {
        switch (l.type) {
          case O.RowTypes.DM:
          case O.RowTypes.FRIEND:
            e++;
            break;
          case O.RowTypes.GROUP_DM:
            a++;
            break;
          case O.RowTypes.CHANNEL:
            s++
        }
        let i = await W(l),
          n = w.default.getUploads(i, C.DraftType.ChannelMessage),
          d = _.default.getChannel(i);
        T.default.uploadFiles({
          channelId: i,
          uploads: n,
          parsedMessage: null != h ? y.default.parse(d, Y.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
            applicationName: "**".concat(h.name, "**")
          })) : void 0,
          draftType: C.DraftType.ChannelMessage,
          options: {
            applicationId: t
          }
        }), p.default.clearAll(i, C.DraftType.ChannelMessage)
      }
      let i = A.default.getInviteSuggestionRows().filter(e => j.includes(e.item.id)).map(e => l(e));
      U.default.track(V.AnalyticEvents.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == N ? void 0 : N.id,
        application_id: t,
        activity_session_id: (0, H.default)(S),
        n_users: e,
        n_gdms: a,
        n_channels: s
      });
      try {
        await Promise.all(i), null != h && (0, c.showToast)((0, c.createToast)(Y.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
          applicationName: h.name
        }), c.ToastType.SUCCESS))
      } catch (e) {
        throw (0, c.showToast)((0, c.createToast)(Y.default.Messages.UPLOAD_ERROR_TITLE, c.ToastType.FAILURE)), e
      }
      q()
    }, [S, h, t, j, q, N]),
    ee = e => {
      let t = async () => {
        let t = await W(e),
          a = [...j];
        if (a.includes(e.item.id)) p.default.clearAll(t, C.DraftType.ChannelMessage), a = a.filter(t => t !== e.item.id);
        else {
          if (a.length >= 10) return;
          null != k && (p.default.addFile({
            file: {
              file: k,
              platform: g.UploadPlatform.WEB
            },
            channelId: t,
            draftType: C.DraftType.ChannelMessage
          }), a.push(e.item.id))
        }
        b(a)
      };
      return () => t()
    };
  return null == F ? (0, s.jsx)(c.Spinner, {}) : (0, s.jsxs)(c.ModalRoot, {
    transitionState: d,
    ...f,
    className: K.modalRoot,
    children: [(0, s.jsxs)(c.ModalHeader, {
      className: K.header,
      children: [(0, s.jsxs)("div", {
        className: K.headerTitle,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: Y.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
        }), (0, s.jsx)(c.ModalCloseButton, {
          onClick: q
        })]
      }), (0, s.jsx)("div", {
        children: (0, s.jsx)("img", {
          alt: a,
          className: K.img,
          src: F
        })
      })]
    }), (0, s.jsxs)(c.ModalContent, {
      className: K.modalContent,
      children: [(0, s.jsx)(D.default, {
        className: K.searchBar,
        placeholder: Y.default.Messages.SEARCH,
        label: Y.default.Messages.SEARCH,
        searchTerm: v,
        onChange: e => x(e),
        onClear: () => x("")
      }), Z.map((e, t) => (0, s.jsxs)(l.Fragment, {
        children: [0 === t ? null : (0, s.jsx)("div", {
          className: K.rowDivider
        }), (0, s.jsx)(Q, {
          row: e,
          onClick: ee(e),
          checked: j.includes(e.item.id),
          disabled: !j.includes(e.item.id) && j.length >= 10
        })]
      }, e.item.id))]
    }), (0, s.jsx)(c.ModalFooter, {
      className: K.footer,
      children: (0, s.jsxs)("div", {
        className: K.copySendBar,
        children: [(0, s.jsx)(X, {
          applicationId: t,
          activitySessionId: (0, H.default)(S),
          mediaUrl: a
        }), j.length >= 10 ? (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: Y.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
            maxShares: 10
          })
        }) : null, (0, s.jsx)(c.Button, {
          onClick: $,
          disabled: j.length <= 0,
          children: Y.default.Messages.SEND
        })]
      })
    })]
  })
}

function Q(e) {
  let {
    row: t,
    onClick: a,
    checked: l,
    disabled: i
  } = e, d = null, r = null, o = null;
  switch (t.type) {
    case O.RowTypes.DM:
    case O.RowTypes.FRIEND:
      d = (0, s.jsx)(c.Avatar, {
        size: c.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), r = F.default.getName(t.item), o = F.default.getUserTag(t.item);
      break;
    case O.RowTypes.GROUP_DM: {
      let e = (0, S.getChannelIconURL)(t.item),
        a = (0, h.computeChannelName)(t.item, R.default, v.default);
      d = (0, s.jsx)(c.Avatar, {
        src: e,
        "aria-label": a,
        size: c.AvatarSizes.SIZE_40
      }), r = (0, h.computeChannelName)(t.item, R.default, v.default);
      break
    }
    case O.RowTypes.CHANNEL: {
      let e = t.item,
        a = N.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (r = "#".concat((0, h.computeChannelName)(e, R.default, v.default)), o = a.name, null != a.icon) {
        let t = b.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        d = (0, s.jsx)(c.Avatar, {
          src: t,
          "aria-label": r,
          size: c.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, L.getAcronym)(a.name);
        d = (0, s.jsx)("div", {
          className: K.acronym,
          "aria-hidden": !0,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, s.jsxs)(c.Clickable, {
    onClick: a,
    className: n(K.rowContainer, {
      [K.disabled]: i
    }),
    children: [(0, s.jsxs)("div", {
      className: K.rowLeft,
      children: [(0, s.jsx)("div", {
        className: K.rowAvatar,
        children: d
      }), (0, s.jsxs)("div", {
        className: K.rowNameContainer,
        children: [(0, s.jsx)(c.Text, {
          variant: "text-md/semibold",
          className: n(K.rowName, {
            [K.disabled]: i
          }),
          children: r
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/medium",
          className: n(K.rowSubName, {
            [K.disabled]: i
          }),
          children: o
        })]
      })]
    }), (0, s.jsx)(c.Checkbox, {
      disabled: i,
      value: l,
      type: c.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: K.rowRight
    })]
  })
}

function X(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    activitySessionId: i
  } = e, [n, d] = l.useState(!1), r = (0, u.useStateFromStores)([R.default], () => R.default.getCurrentUser());
  async function o() {
    U.default.track(V.AnalyticEvents.ACTIVITY_SHARE_MOMENT_COPY, {
      user_id: null == r ? void 0 : r.id,
      application_id: t,
      activity_session_id: i
    }), await B.default.copyImage(a), d(!0)
  }
  return (l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      d(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), k.isPlatformEmbedded && B.default.canCopyImage(a)) ? (0, s.jsxs)(c.Button, {
    look: c.Button.Looks.LINK,
    color: c.Button.Colors.LINK,
    onClick: o,
    innerClassName: K.copyButton,
    children: [n ? (0, s.jsx)(x.default, {}) : (0, s.jsx)(j.default, {}), n ? Y.default.Messages.COPIED : Y.default.Messages.COPY_IMAGE_MENU_ITEM]
  }) : (0, s.jsx)("div", {})
}