"use strict";
n.r(e), n.d(e, {
  VibingWumpus: function() {
    return m
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("803997"),
  u = n.n(a),
  r = n("399606"),
  c = n("481060"),
  o = n("607070"),
  l = n("301822"),
  d = n("786048"),
  p = n("897353"),
  A = n("626135"),
  I = n("832239"),
  _ = n("407383"),
  N = n("981631"),
  f = n("689938"),
  P = n("535709"),
  S = n("358733"),
  E = n("617921");

function m(t) {
  let {
    onClose: e,
    source: a = _.VibingWumpusSource.INAPPROPRIATE_CONVERSATION
  } = t, m = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [M, V] = s.useState(!1);
  s.useEffect(() => {
    let t = new Date;
    return A.default.track(N.AnalyticEvents.VIBING_WUMPUS_VIEWED, {
      source: a
    }), (0, I.playVibingWumpusMusic)(), () => {
      A.default.track(N.AnalyticEvents.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: a
      }), (0, I.stopVibingWumpusMusic)()
    }
  }, [a]);
  let g = () => {
    M ? ((0, I.playVibingWumpusMusic)(), A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
      action: _.VibingWumpusAction.PLAY
    })) : ((0, I.pauseVibingWumpusMusic)(), A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
      action: _.VibingWumpusAction.PAUSE
    })), V(!M)
  };
  async function U() {
    let {
      default: t
    } = await n.e("29641").then(n.t.bind(n, "937359", 19));
    return t
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: P.ringContainer,
      children: (0, i.jsx)("img", {
        src: E,
        alt: "",
        className: P.__invalid_ringArt
      })
    }), (0, i.jsx)(l.default, {
      importData: U,
      shouldAnimate: !M && !m,
      className: P.wumpus,
      pauseAtFrame: m ? 200 : void 0
    }), (0, i.jsx)(c.Tooltip, {
      text: M ? f.default.Messages.PLAY : f.default.Messages.PAUSE,
      position: "top",
      "aria-label": M ? f.default.Messages.PLAY : f.default.Messages.PAUSE,
      children: t => (0, i.jsx)(c.Clickable, {
        ...t,
        onClick: g,
        className: P.iconButton,
        children: M ? (0, i.jsx)(p.default, {
          className: P.icon
        }) : (0, i.jsx)(d.default, {
          className: P.icon
        })
      })
    }), (0, i.jsxs)(c.ModalContent, {
      className: u()(S.body, P.body),
      children: [(0, i.jsxs)("div", {
        className: u()(S.textContainer, P.textContainer),
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: f.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: f.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, i.jsx)("div", {
        className: P.buttonContainer,
        children: (0, i.jsx)(c.Button, {
          fullWidth: !0,
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.MEDIUM,
          onClick: () => {
            e(), A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
              action: _.VibingWumpusAction.BACK_TO_CONVERSATION
            })
          },
          children: f.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        })
      })]
    })]
  })
}
e.default = t => {
  let {
    onClose: e,
    transitionState: n
  } = t;
  return (0, i.jsx)(c.ModalRoot, {
    transitionState: n,
    children: (0, i.jsx)(m, {
      onClose: e
    })
  })
}