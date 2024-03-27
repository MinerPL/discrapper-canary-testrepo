"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("917351"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("211470"),
  u = s("789563"),
  c = s("305961"),
  S = s("810567"),
  E = s("843039"),
  T = s("327350"),
  f = s("565034"),
  _ = s("889245");

function m(e, t) {
  return e.map((e, s) => {
    let a = "object" == typeof t ? t[s] : E.default.getExperimentBucketName(e);
    return {
      label: a,
      value: e
    }
  })
}

function g() {
  let e = (0, r.useStateFromStoresObject)([u.default], () => u.default.getAllExperimentOverrideDescriptors()),
    t = (0, r.useStateFromStoresObject)([u.default], () => u.default.getRegisteredExperiments()),
    [s, l] = n.useState(""),
    i = (0, T.getBestMatches)((0, T.sortEntries)((0, T.getEntries)(t), e), s);
  return (0, a.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: "Experiments",
    children: [(0, a.jsx)(S.default, {
      size: S.default.Sizes.LARGE,
      query: s,
      onChange: l,
      onClear: () => l("")
    }), i.length > 0 ? i.map(t => {
      let s = t.experiment.type === f.ExperimentTypes.GUILD ? N : h;
      return (0, a.jsx)(s, {
        experiment: t.experiment,
        experimentId: t.id,
        overrideDescriptor: e[t.id]
      }, t.id)
    }) : (0, a.jsx)("div", {
      className: _.emptyState,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function h(e) {
  var t;
  let {
    experiment: s,
    experimentId: l,
    overrideDescriptor: c
  } = e, [S, E] = n.useState(null != c), [T, g] = n.useState(!1), h = n.useCallback(() => {
    E(e => !e)
  }, []), N = (0, r.useStateFromStores)([u.default], () => u.default.getUserExperimentDescriptor(l)), I = (0, r.useStateFromStores)([u.default], () => u.default.getLoadedUserExperiment(l)), p = (0, r.useStateFromStores)([u.default], () => i.sortBy(u.default.getRecentExposures(f.ExperimentTypes.USER, l), e => {
    let [t, s] = e;
    return -s
  }).map(e => {
    let [t, s] = e;
    return "".concat(new Date(s).toLocaleString(), " (").concat(t, ")")
  })), C = (0, a.jsx)(o.Clickable, {
    onClick: h,
    children: (0, a.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: _.title,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("span", {
          children: s.title
        }), (0, a.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: l
        })]
      }), (0, a.jsx)("span", {
        className: _.experimentDate,
        children: "User"
      })]
    })
  });
  return S ? (0, a.jsxs)("div", {
    className: _.group,
    children: [(0, a.jsxs)(o.FormSection, {
      children: [C, (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, a.jsx)(o.SingleSelect, {
            value: null != c ? c.bucket : null,
            clearable: null != c,
            options: m(s.buckets, s.description),
            onChange: e => {
              (0, d.overrideBucket)(l, e)
            }
          })
        }), "string" == typeof s.description ? (0, a.jsx)("div", {
          className: _.description,
          children: (0, a.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: s.description
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: _.description,
        children: [(0, a.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current assigned to bucket ", null !== (t = null == N ? void 0 : N.bucket) && void 0 !== t ? t : f.ExperimentBuckets.NOT_ELIGIBLE]
        }), null == I ? (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), T ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Server Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: null == I ? "None" : JSON.stringify(I, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Override Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: null == c ? "None" : JSON.stringify(c, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Recent Exposures"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: 0 === p.length ? "None" : p.join("\n")
        })]
      }) : (0, a.jsx)(o.Button, {
        className: _.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => g(!0),
        children: "More Details \xbb"
      })]
    }), (0, a.jsx)(o.FormDivider, {
      className: _.divider
    })]
  }) : (0, a.jsx)("div", {
    className: _.group,
    children: (0, a.jsx)(o.FormSection, {
      children: C
    })
  })
}

function N(e) {
  let {
    experiment: t,
    experimentId: s,
    overrideDescriptor: l
  } = e, [S, E] = n.useState(null != l), [T, g] = n.useState(!1), h = n.useCallback(() => {
    E(e => !e)
  }, []), N = (0, r.useStateFromStores)([u.default], () => u.default.getLoadedGuildExperiment(s)), I = (0, r.useStateFromStores)([u.default], () => i.sortBy(u.default.getRecentExposures(f.ExperimentTypes.GUILD, s), e => {
    let [t, s] = e;
    return -s
  }).map(e => {
    let [t, s] = e;
    return "".concat(new Date(s).toLocaleString(), " (").concat(t, ")")
  })), [p, C] = (0, r.useStateFromStoresArray)([c.default, u.default], () => {
    let e = i.sortBy(i.values(c.default.getGuilds()), e => e.name.toLowerCase()),
      t = {},
      a = [];
    for (let l of e) {
      var n;
      let e = u.default.getGuildExperimentDescriptor(s, l.id),
        i = null !== (n = null == e ? void 0 : e.bucket) && void 0 !== n ? n : f.ExperimentBuckets.NOT_ELIGIBLE;
      !(i in t) && (t[i] = 0), t[i]++, a.push("".concat(l.name, ": ").concat(i))
    }
    let l = i(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [a, l]
  }), A = (0, a.jsx)(o.Clickable, {
    onClick: h,
    children: (0, a.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: _.title,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("span", {
          children: t.title
        }), (0, a.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: s
        })]
      }), (0, a.jsx)("span", {
        className: _.experimentDate,
        children: "Guild"
      })]
    })
  });
  return S ? (0, a.jsxs)("div", {
    className: _.group,
    children: [(0, a.jsxs)(o.FormSection, {
      children: [A, (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, a.jsx)(o.SingleSelect, {
            value: null != l ? l.bucket : null,
            clearable: null != l,
            options: m(t.buckets, t.description),
            onChange: e => {
              (0, d.overrideBucket)(s, e)
            }
          })
        }), "string" == typeof t.description ? (0, a.jsx)("div", {
          className: _.description,
          children: (0, a.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: t.description
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: _.description,
        children: [(0, a.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current Assignments: ", C]
        }), null == N ? (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), T ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Guild Assignments"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: p.join("\n")
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Server Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: null == N ? "None" : JSON.stringify(N, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Override Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: null == l ? "None" : JSON.stringify(l, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: _.debugTitle,
          children: "Recent Exposures"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: _.pre,
          children: 0 === I.length ? "None" : I.join("\n")
        })]
      }) : (0, a.jsx)(o.Button, {
        className: _.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => g(!0),
        children: "More Details \xbb"
      })]
    }), (0, a.jsx)(o.FormDivider, {
      className: _.divider
    })]
  }) : (0, a.jsx)("div", {
    className: _.group,
    children: (0, a.jsx)(o.FormSection, {
      children: A
    })
  })
}