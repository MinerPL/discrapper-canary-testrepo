"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  i = n("759843"),
  s = n("446674"),
  r = n("77078"),
  o = n("450911"),
  c = n("685073"),
  u = n("819689"),
  d = n("812204"),
  f = n("685665"),
  p = n("428958"),
  m = n("843962"),
  h = n("679653"),
  I = n("305961"),
  g = n("705955"),
  v = n("27618"),
  C = n("697218"),
  T = n("466857"),
  y = n("578706"),
  x = n("83900"),
  E = n("599110"),
  N = n("315102"),
  A = n("306160"),
  R = n("354023"),
  S = n("159885"),
  _ = n("158998"),
  w = n("969380"),
  L = n("49111"),
  j = n("91366"),
  D = n("782340"),
  M = n("838352");

function k(e) {
  let {
    activityItem: t,
    analyticsLocations: n,
    ...m
  } = e, h = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: I
  } = (0, f.default)(n);
  (0, p.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: I
    }
  });
  let [v, y] = l.useState(""), [x, N] = l.useState([]), A = (0, w.default)({
    applicationId: t.application.id,
    size: 256
  }), S = "".concat(window.location.origin).concat(L.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, s.useStateFromStoresArray)([g.default], () => g.default.getInviteSuggestionRows());
  l.useEffect(() => {
    (0, c.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), l.useEffect(() => (0, c.searchInviteSuggestions)(v), [v]);
  let k = l.useCallback(async () => {
    let e = 0,
      n = 0,
      a = 0,
      l = g.default.getInviteSuggestionRows().filter(e => x.includes(e.item.id)).map(t => (function(t, l) {
        switch (t.type) {
          case R.RowTypes.DM:
          case R.RowTypes.FRIEND:
            e++;
            break;
          case R.RowTypes.GROUP_DM:
            n++;
            break;
          case R.RowTypes.CHANNEL:
            a++
        }
        return t.type === R.RowTypes.GROUP_DM || t.type === R.RowTypes.CHANNEL ? u.default.sendActivityBookmark(t.item.id, l, d.default.ACTIVITY_DETAIL_PAGE, null) : t.type === R.RowTypes.DM || t.type === R.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => u.default.sendActivityBookmark(e, S, d.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, S));
    await l, E.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == h ? void 0 : h.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: n,
      n_channels: a
    }), m.onClose()
  }, [t, x, m, S, h]);
  return (0, a.jsxs)(r.ModalRoot, {
    ...m,
    className: M.modalRoot,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: M.header,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: D.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: m.onClose
      })]
    }), (0, a.jsxs)(r.ModalContent, {
      className: M.modalContent,
      children: [(0, a.jsx)(T.default, {
        className: M.searchBar,
        placeholder: D.default.Messages.SEARCH,
        label: D.default.Messages.SEARCH,
        searchTerm: v,
        onChange: e => y(e),
        onClear: () => y("")
      }), _.map((e, t) => (0, a.jsxs)(l.Fragment, {
        children: [0 === t ? null : (0, a.jsx)("div", {
          className: M.rowDivider
        }), (0, a.jsx)(U, {
          row: e,
          onClick: () => {
            let t = [...x];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
          },
          checked: x.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, a.jsxs)(r.ModalFooter, {
      className: M.footer,
      children: [(0, a.jsx)("div", {
        className: M.activityInfoOuterContainer,
        children: (0, a.jsxs)("div", {
          className: M.activityInfoInnerContainer,
          children: [(0, a.jsx)("img", {
            src: A.url,
            className: M.activityInfoImage,
            alt: t.application.name
          }), (0, a.jsxs)("div", {
            className: M.activityInfoText,
            children: [(0, a.jsx)(r.Text, {
              variant: "text-md/semibold",
              className: M.ellipsis,
              children: t.application.name
            }), (0, a.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: M.ellipsis,
              children: t.application.description
            }), (0, a.jsx)(r.Text, {
              variant: "text-xs/medium",
              className: M.ellipsis,
              children: (0, a.jsx)(r.Anchor, {
                href: S,
                children: S
              })
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: M.footerDivider
      }), (0, a.jsxs)("div", {
        className: M.copySendBar,
        children: [(0, a.jsx)(b, {
          link: S,
          applicationId: t.application.id
        }), (0, a.jsx)(r.Button, {
          onClick: k,
          disabled: x.length <= 0,
          children: D.default.Messages.SEND
        })]
      })]
    })]
  })
}

function U(e) {
  let {
    row: t,
    onClick: n,
    checked: l
  } = e, i = null, s = null, o = null;
  switch (t.type) {
    case R.RowTypes.DM:
    case R.RowTypes.FRIEND:
      i = (0, a.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), s = _.default.getName(t.item), o = _.default.getUserTag(t.item);
      break;
    case R.RowTypes.GROUP_DM: {
      let e = (0, m.getChannelIconURL)(t.item),
        n = (0, h.computeChannelName)(t.item, C.default, v.default);
      i = (0, a.jsx)(r.Avatar, {
        src: e,
        "aria-label": n,
        size: r.AvatarSizes.SIZE_40
      }), s = (0, h.computeChannelName)(t.item, C.default, v.default);
      break
    }
    case R.RowTypes.CHANNEL: {
      let e = t.item,
        n = I.default.getGuild(e.guild_id);
      if (null == n) return null;
      if (s = "#".concat((0, h.computeChannelName)(e, C.default, v.default)), o = n.name, null != n.icon) {
        let t = N.default.getGuildIconURL({
          id: e.guild_id,
          icon: n.icon,
          size: 40
        });
        i = (0, a.jsx)(r.Avatar, {
          src: t,
          "aria-label": s,
          size: r.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, S.getAcronym)(n.name);
        i = (0, a.jsx)("div", {
          className: M.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, a.jsxs)(r.Clickable, {
    onClick: n,
    className: M.rowContainer,
    children: [(0, a.jsxs)("div", {
      className: M.rowLeft,
      children: [(0, a.jsx)("div", {
        className: M.rowAvatar,
        children: i
      }), (0, a.jsxs)("div", {
        className: M.rowNameContainer,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/semibold",
          className: M.rowName,
          children: s
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          className: M.rowSubName,
          children: o
        })]
      })]
    }), (0, a.jsx)(r.Checkbox, {
      value: l,
      type: r.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: M.rowRight
    })]
  })
}

function b(e) {
  let {
    applicationId: t,
    link: n
  } = e, i = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [o, c] = l.useState(!1);
  return l.useEffect(() => {
    let e;
    return o && (e = setTimeout(() => {
      c(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [o]), (0, a.jsxs)(r.Button, {
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    onClick: function() {
      E.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == i ? void 0 : i.id,
        application_id: t
      }), (0, A.copy)(n), c(!0)
    },
    innerClassName: M.copyButton,
    children: [o ? (0, a.jsx)(y.default, {}) : (0, a.jsx)(x.default, {}), o ? D.default.Messages.COPIED : D.default.Messages.COPY_LINK]
  })
}