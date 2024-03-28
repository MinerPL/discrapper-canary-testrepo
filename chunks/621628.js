"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120"), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("733860");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("524437"),
  d = s("433517"),
  u = s("481060"),
  c = s("675478"),
  S = s("581883"),
  E = s("285952"),
  T = s("6048"),
  _ = s("154921"),
  f = s("915486"),
  m = s("883904"),
  g = s("68985"),
  h = s("211644"),
  N = s("330676"),
  I = s("794711");

function p(e) {
  let {
    contents: t,
    content: s,
    onChange: n
  } = e, l = (0, f.hasBit)(t, o.DismissibleContent[s]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(u.FormSwitch, {
      value: l,
      onChange: function() {
        n(s), l ? (0, c.removeDismissedContent)(o.DismissibleContent[s]) : (0, c.addDismissedContent)(o.DismissibleContent[s])
      },
      children: (0, a.jsx)(u.FormText, {
        size: _.default.Sizes.SIZE_16,
        className: I.marginTop4,
        children: "".concat(s.toLowerCase(), " (").concat(o.DismissibleContent[s], ")")
      })
    })
  })
}

function C(e) {
  let {
    items: t,
    dismissedContents: s,
    handleChange: n
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(p, {
      contents: s,
      content: e,
      onChange: n
    }, e))
  })
}

function A() {
  var e;
  let t = (0, h.default)(e => e.recentlyShown),
    {
      dailyCapReached: s,
      dailyCapOverridden: l
    } = (0, r.useStateFromStoresObject)([g.default], () => ({
      dailyCapReached: g.default.hasUserHitDCCap(),
      dailyCapOverridden: g.default.dailyCapOverridden
    })),
    [_, f] = n.useState(""),
    p = null !== (e = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null === (e = S.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    })) && void 0 !== e ? e : new Uint8Array,
    [A, O] = function(e, t) {
      let [s, a] = n.useState(() => {
        let s = d.Storage.get(e);
        return null != s ? s : t
      });
      return n.useEffect(() => {
        d.Storage.set(e, s)
      }, [e, s]), [s, a]
    }("RecentDismissibleOverrides", []),
    x = e => {
      O(t => {
        let s = new Set(t);
        s.delete(e);
        let a = Array.from(s).slice(0, 4);
        return a.unshift(e), a
      })
    },
    R = t.map(e => o.DismissibleContent[e]),
    M = A.filter(e => e.toLowerCase().includes(_.toLowerCase())).filter(e => !R.includes(e)),
    v = Object.keys(o.DismissibleContent).filter(e => !R.includes(e)).filter(e => !A.includes(e)).filter(e => e.toLowerCase().includes(_.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormSection, {
      title: "Dismissible Content Fatigue",
      tag: u.FormTitleTags.H1,
      className: I.marginBottom60,
      children: [(0, a.jsx)(u.FormItem, {
        children: (0, a.jsxs)(u.FormText, {
          className: I.marginBottom4,
          children: ["Daily Cap Reached: ", s ? "Yes" : "No"]
        })
      }), (0, a.jsx)(u.FormSwitch, {
        value: l,
        onChange: m.overrideDismissibleContentFramework,
        children: "Override Dismissible Content Daily Cap"
      }), (0, a.jsxs)(u.FormItem, {
        children: [(0, a.jsx)(u.Button, {
          onClick: () => (0, m.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        }), (0, a.jsx)(u.FormText, {
          className: I.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, a.jsxs)(u.FormSection, {
      title: "Dismissible Contents",
      tag: u.FormTitleTags.H1,
      children: [(0, a.jsx)(T.default, {
        className: I.marginBottom20,
        size: T.default.Sizes.LARGE,
        query: _,
        onChange: f,
        onClear: () => f("")
      }), (0, a.jsxs)(u.FormItem, {
        className: N.buttonsContainer,
        children: [(0, a.jsx)(u.Button, {
          onClick: c.clearDismissedContents,
          children: "Clear All Dismissed Contents"
        }), (0, a.jsx)(u.Button, {
          onClick: c.checkAllDismissedContents,
          children: "Check All Dismissed Contents"
        })]
      }), t.length > 0 ? (0, a.jsxs)("div", {
        className: I.marginBottom20,
        children: [(0, a.jsx)("div", {
          className: I.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recently Shown"
          })
        }), (0, a.jsx)(C, {
          items: R,
          dismissedContents: p,
          handleChange: x
        })]
      }) : null, M.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: I.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recent Overrides"
          })
        }), (0, a.jsx)(C, {
          items: M,
          dismissedContents: p,
          handleChange: x
        })]
      }) : null, (0, a.jsx)(E.default, {
        className: i()(I.marginBottom20, I.marginTop20),
        children: (0, a.jsx)(u.FormTitle, {
          children: "Available Dismissible Contents"
        })
      }), (0, a.jsx)(C, {
        items: v,
        dismissedContents: p,
        handleChange: x
      })]
    })]
  })
}