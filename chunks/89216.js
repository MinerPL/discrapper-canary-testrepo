"use strict";
l.r(a), l.d(a, {
  default: function() {
    return C
  }
}), l("47120");
var s = l("735250"),
  t = l("470079"),
  n = l("392711"),
  i = l.n(n),
  d = l("442837"),
  r = l("481060"),
  o = l("741361"),
  c = l("596454"),
  m = l("447003"),
  x = l("471445"),
  u = l("605436"),
  h = l("633302"),
  E = l("984933"),
  N = l("153124"),
  _ = l("93879"),
  T = l("689938"),
  j = l("644737");

function v(e) {
  var a, t, n;
  let {
    onClose: i,
    handleReviewPermissions: d
  } = e, o = e => (0, s.jsx)(r.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(r.ModalContent, {
      className: j.infoContent,
      children: [(0, s.jsxs)("div", {
        className: j.modalHeader,
        children: [(0, s.jsx)("img", {
          className: j.modalImage,
          "data-accessibility": "desaturate",
          alt: "",
          src: l("592614")
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_MODAL_HEADER
        })]
      }), (0, s.jsxs)("ul", {
        children: [(0, s.jsxs)("li", {
          className: j.infoListItem,
          children: [(0, s.jsx)("div", {
            className: j.iconWrapper,
            children: (0, s.jsx)(c.default, {
              emojiName: null === (a = h.default.getByName("eyes")) || void 0 === a ? void 0 : a.surrogates
            })
          }), (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_1.format({
              emphasisHook: o
            })
          })]
        }), (0, s.jsxs)("li", {
          className: j.infoListItem,
          children: [(0, s.jsx)("div", {
            className: j.iconWrapper,
            children: (0, s.jsx)(c.default, {
              emojiName: null === (t = h.default.getByName("star_struck")) || void 0 === t ? void 0 : t.surrogates
            })
          }), (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_2.format({
              emphasisHook: o
            })
          })]
        }), (0, s.jsxs)("li", {
          className: j.infoListItem,
          children: [(0, s.jsx)("div", {
            className: j.iconWrapper,
            children: (0, s.jsx)(c.default, {
              emojiName: null === (n = h.default.getByName("books")) || void 0 === n ? void 0 : n.surrogates
            })
          }), (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_3.format({
              emphasisHook: o
            })
          })]
        })]
      })]
    }), (0, s.jsxs)(r.ModalFooter, {
      children: [(0, s.jsx)(r.Button, {
        onClick: d,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: T.default.Messages.GUILD_SETTINGS_REVIEW_PERMISSIONS
        })
      }), (0, s.jsx)(r.Button, {
        className: j.__invalid_modalCancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: i,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          children: T.default.Messages.CANCEL
        })
      })]
    })]
  })
}

function I(e) {
  var a;
  let {
    channel: l,
    selected: n,
    onChange: i
  } = e, d = null !== (a = (0, x.getChannelIconComponent)(l)) && void 0 !== a ? a : _.default, o = t.useCallback(() => {
    i(l)
  }, [l, i]);
  return (0, s.jsxs)(r.Clickable, {
    "aria-label": l.name,
    "aria-checked": n,
    className: j.selectableChannelRow,
    onClick: o,
    children: [(0, s.jsxs)("div", {
      className: j.selectableChannelCellFirst,
      children: [(0, s.jsx)(d, {
        className: j.channelIcon,
        width: 16,
        height: 16
      }), (0, s.jsx)(r.Text, {
        className: j.__invalid_channelName,
        variant: "text-md/medium",
        color: "text-normal",
        lineClamp: 1,
        children: l.name
      })]
    }), (0, s.jsx)("div", {
      className: j.selectableChannelCellSecond,
      children: (0, s.jsx)(r.Checkbox, {
        type: r.Checkbox.Types.INVERTED,
        value: n,
        displayOnly: !0
      })
    })]
  })
}

function C(e) {
  let {
    transitionState: a,
    onClose: l,
    guildId: n,
    startingChannelId: c
  } = e, x = (0, d.useStateFromStoresArray)([E.default], () => {
    var e, a;
    let l = E.default.getChannels(n);
    return (null !== (e = l[0, E.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== e ? e : []).concat(null !== (a = l[E.GUILD_VOCAL_CHANNELS_KEY]) && void 0 !== a ? a : []).filter(e => (0, m.default)(e.channel)).map(e => e.channel)
  }), [h, _] = t.useState(0), C = x.find(e => e.id === c), [f, L] = t.useState(null != C ? [C] : []), S = (0, N.useUID)(), g = f.length === x.length, p = t.useCallback(() => {
    _(1)
  }, [_]), b = t.useCallback(e => {
    L(a => a.includes(e) ? [...i().pull(a, e)] : [...a, e])
  }, [L]), A = t.useCallback(() => {
    g ? L([]) : L(x)
  }, [g, x, L]), k = t.useCallback(() => {
    f.forEach(e => {
      let a = (0, u.flipEveryonePermission)(e, e.accessPermissions, !0);
      (0, o.savePermissionUpdates)(e.id, [a]), l()
    })
  }, [f, l]);
  return 0 === h ? (0, s.jsx)(r.ModalRoot, {
    transitionState: a,
    "aria-labelledby": S,
    size: r.ModalSize.SMALL,
    children: (0, s.jsx)(v, {
      handleReviewPermissions: p,
      onClose: l
    })
  }) : (0, s.jsxs)(r.ModalRoot, {
    transitionState: a,
    "aria-labelledby": S,
    size: r.ModalSize.SMALL,
    children: [(0, s.jsxs)(r.ModalContent, {
      className: j.updateContent,
      children: [(0, s.jsxs)("div", {
        className: j.modalHeader,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_TITLE
        }), (0, s.jsx)(r.Text, {
          className: j.__invalid_modalSubheader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_SUBTITLE
        })]
      }), (0, s.jsxs)("div", {
        className: j.selectAllContainer,
        children: [(0, s.jsx)(r.Text, {
          className: j.selectAllTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_CHANNEL_COUNT.format({
            count: x.length
          })
        }), (0, s.jsxs)(r.Clickable, {
          "aria-label": T.default.Messages.SELECT_ALL,
          className: j.selectAllButton,
          onClick: A,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-xs/normal",
            children: T.default.Messages.SELECT_ALL
          }), (0, s.jsx)(r.Checkbox, {
            size: 16,
            type: r.Checkbox.Types.INVERTED,
            value: g,
            displayOnly: !0
          })]
        })]
      }), (0, s.jsx)("div", {
        className: j.deprivateTableBody,
        children: x.map(e => (0, s.jsx)(I, {
          channel: e,
          selected: f.includes(e),
          onChange: b
        }, e.id))
      }), (0, s.jsx)("div", {
        className: j.deprivateExplainer,
        children: (0, s.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_4.format({
            emphasisHook: e => (0, s.jsx)(r.Text, {
              tag: "span",
              variant: "text-xs/medium",
              color: "interactive-active",
              children: e
            }),
            brandHook: e => (0, s.jsx)(r.Text, {
              tag: "span",
              variant: "text-xs/normal",
              color: "text-brand",
              children: e
            })
          })
        })
      })]
    }), (0, s.jsxs)(r.ModalFooter, {
      className: j.modalFooter,
      children: [(0, s.jsx)(r.Button, {
        disabled: 0 === f.length,
        onClick: k,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: T.default.Messages.GUILD_SETTINGS_UPDATE_PERMISSIONS
        })
      }), (0, s.jsx)(r.Button, {
        className: j.__invalid_modalCancel,
        look: r.Button.Looks.LINK,
        borderColor: r.Button.Colors.PRIMARY,
        onClick: l,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          children: T.default.Messages.CANCEL
        })
      })]
    })]
  })
}