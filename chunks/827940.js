"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("47120"), a("653041");
var i = a("735250"),
  s = a("470079"),
  n = a("990547"),
  l = a("442837"),
  o = a("481060"),
  r = a("493683"),
  d = a("247272"),
  c = a("904245"),
  u = a("100527"),
  f = a("906732"),
  m = a("213609"),
  p = a("43267"),
  I = a("933557"),
  g = a("430824"),
  T = a("751771"),
  h = a("699516"),
  N = a("594174"),
  S = a("408814"),
  y = a("441674"),
  v = a("757698"),
  C = a("626135"),
  A = a("768581"),
  E = a("572004"),
  x = a("971130"),
  _ = a("624138"),
  w = a("51144"),
  R = a("778569"),
  D = a("981631"),
  j = a("245335"),
  M = a("689938"),
  k = a("188506");

function O(e) {
  let {
    activityItem: t,
    analyticsLocations: a,
    ...p
  } = e, I = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, f.default)(a);
  (0, m.default)({
    type: n.ImpressionTypes.MODAL,
    name: n.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: g
    }
  });
  let [h, y] = s.useState(""), [v, A] = s.useState([]), E = (0, R.default)({
    applicationId: t.application.id,
    size: 256
  }), _ = "".concat(window.location.origin).concat(D.Routes.ACTIVITY_DETAILS(t.application.id)), w = (0, l.useStateFromStoresArray)([T.default], () => T.default.getInviteSuggestionRows());
  s.useEffect(() => {
    (0, d.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), s.useEffect(() => (0, d.searchInviteSuggestions)(h), [h]);
  let O = s.useCallback(async () => {
    let e = 0,
      a = 0,
      i = 0,
      s = T.default.getInviteSuggestionRows().filter(e => v.includes(e.item.id)).map(t => (function(t, s) {
        switch (t.type) {
          case x.RowTypes.DM:
          case x.RowTypes.FRIEND:
            e++;
            break;
          case x.RowTypes.GROUP_DM:
            a++;
            break;
          case x.RowTypes.CHANNEL:
            i++
        }
        return t.type === x.RowTypes.GROUP_DM || t.type === x.RowTypes.CHANNEL ? c.default.sendActivityBookmark(t.item.id, s, u.default.ACTIVITY_DETAIL_PAGE, null) : t.type === x.RowTypes.DM || t.type === x.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => c.default.sendActivityBookmark(e, _, u.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, _));
    await s, C.default.track(D.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == I ? void 0 : I.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: a,
      n_channels: i
    }), p.onClose()
  }, [t, v, p, _, I]);
  return (0, i.jsxs)(o.ModalRoot, {
    ...p,
    className: k.modalRoot,
    children: [(0, i.jsxs)(o.ModalHeader, {
      className: k.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: M.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: p.onClose
      })]
    }), (0, i.jsxs)(o.ModalContent, {
      className: k.modalContent,
      children: [(0, i.jsx)(S.default, {
        className: k.searchBar,
        placeholder: M.default.Messages.SEARCH,
        label: M.default.Messages.SEARCH,
        searchTerm: h,
        onChange: e => y(e),
        onClear: () => y("")
      }), w.map((e, t) => (0, i.jsxs)(s.Fragment, {
        children: [0 === t ? null : (0, i.jsx)("div", {
          className: k.rowDivider
        }), (0, i.jsx)(L, {
          row: e,
          onClick: () => {
            let t = [...v];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), A(t)
          },
          checked: v.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, i.jsxs)(o.ModalFooter, {
      className: k.footer,
      children: [(0, i.jsx)("div", {
        className: k.activityInfoOuterContainer,
        children: (0, i.jsxs)("div", {
          className: k.activityInfoInnerContainer,
          children: [(0, i.jsx)("img", {
            src: E.url,
            className: k.activityInfoImage,
            alt: t.application.name
          }), (0, i.jsxs)("div", {
            className: k.activityInfoText,
            children: [(0, i.jsx)(o.Text, {
              variant: "text-md/semibold",
              className: k.ellipsis,
              children: t.application.name
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/medium",
              className: k.ellipsis,
              children: t.application.description
            }), (0, i.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: k.ellipsis,
              children: (0, i.jsx)(o.Anchor, {
                href: _,
                children: _
              })
            })]
          })]
        })
      }), (0, i.jsx)("div", {
        className: k.footerDivider
      }), (0, i.jsxs)("div", {
        className: k.copySendBar,
        children: [(0, i.jsx)(U, {
          link: _,
          applicationId: t.application.id
        }), (0, i.jsx)(o.Button, {
          onClick: O,
          disabled: v.length <= 0,
          children: M.default.Messages.SEND
        })]
      })]
    })]
  })
}

function L(e) {
  let {
    row: t,
    onClick: a,
    checked: s
  } = e, n = null, l = null, r = null;
  switch (t.type) {
    case x.RowTypes.DM:
    case x.RowTypes.FRIEND:
      n = (0, i.jsx)(o.Avatar, {
        size: o.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), l = w.default.getName(t.item), r = w.default.getUserTag(t.item);
      break;
    case x.RowTypes.GROUP_DM: {
      let e = (0, p.getChannelIconURL)(t.item),
        a = (0, I.computeChannelName)(t.item, N.default, h.default);
      n = (0, i.jsx)(o.Avatar, {
        src: e,
        "aria-label": a,
        size: o.AvatarSizes.SIZE_40
      }), l = (0, I.computeChannelName)(t.item, N.default, h.default);
      break
    }
    case x.RowTypes.CHANNEL: {
      let e = t.item,
        a = g.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (l = "#".concat((0, I.computeChannelName)(e, N.default, h.default)), r = a.name, null != a.icon) {
        let t = A.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        n = (0, i.jsx)(o.Avatar, {
          src: t,
          "aria-label": l,
          size: o.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, _.getAcronym)(a.name);
        n = (0, i.jsx)("div", {
          className: k.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, i.jsxs)(o.Clickable, {
    onClick: a,
    className: k.rowContainer,
    children: [(0, i.jsxs)("div", {
      className: k.rowLeft,
      children: [(0, i.jsx)("div", {
        className: k.rowAvatar,
        children: n
      }), (0, i.jsxs)("div", {
        className: k.rowNameContainer,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: k.rowName,
          children: l
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/medium",
          className: k.rowSubName,
          children: r
        })]
      })]
    }), (0, i.jsx)(o.Checkbox, {
      value: s,
      type: o.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: k.rowRight
    })]
  })
}

function U(e) {
  let {
    applicationId: t,
    link: a
  } = e, n = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [r, d] = s.useState(!1);
  return s.useEffect(() => {
    let e;
    return r && (e = setTimeout(() => {
      d(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [r]), (0, i.jsxs)(o.Button, {
    look: o.Button.Looks.LINK,
    color: o.Button.Colors.LINK,
    onClick: function() {
      C.default.track(D.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == n ? void 0 : n.id,
        application_id: t
      }), (0, E.copy)(a), d(!0)
    },
    innerClassName: k.copyButton,
    children: [r ? (0, i.jsx)(y.default, {}) : (0, i.jsx)(v.default, {}), r ? M.default.Messages.COPIED : M.default.Messages.COPY_LINK]
  })
}