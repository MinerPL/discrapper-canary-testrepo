n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(492435),
    d = n(353926),
    u = n(430824),
    m = n(499533),
    h = n(878209),
    g = n(987338),
    p = n(891742);
function x(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : m.Z.getExperimentBucketName(e),
        value: e
    }));
}
function S() {
    let e = (0, a.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
        t = (0, a.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
        [n, r] = s.useState(''),
        l = (0, h.Ro)((0, h.Tc)((0, h.Cg)(t), e), n);
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(o.SearchBar, {
                size: o.SearchBar.Sizes.LARGE,
                query: n,
                onChange: r,
                onClear: () => r('')
            }),
            l.length > 0
                ? l.map((t) => {
                      let n = t.experiment.type === g.xY.GUILD ? C : T;
                      return (0, i.jsx)(
                          n,
                          {
                              experiment: t.experiment,
                              experimentId: t.id,
                              overrideDescriptor: e[t.id]
                          },
                          t.id
                      );
                  })
                : (0, i.jsx)('div', {
                      className: p.emptyState,
                      children: (0, i.jsx)(o.Heading, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function T(e) {
    var t;
    let { experiment: n, experimentId: r, overrideDescriptor: u } = e,
        [m, h] = s.useState(null != u),
        [S, T] = s.useState(!1),
        C = s.useCallback(() => {
            h((e) => !e);
        }, []),
        _ = (0, a.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(r)),
        E = (0, a.e7)([d.Z], () => d.Z.getLoadedUserExperiment(r)),
        f = (0, a.Wu)([d.Z], () =>
            l()
                .sortBy(d.Z.getRecentExposures(g.xY.USER, r), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        I = (0, i.jsx)(o.Clickable, {
            onClick: C,
            children: (0, i.jsxs)(o.FormTitle, {
                tag: o.FormTitleTags.H3,
                className: p.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: n.title }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: r
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: p.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: p.group,
              children: [
                  (0, i.jsxs)(o.FormSection, {
                      children: [
                          I,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.SingleSelect, {
                                          value: null != u ? u.bucket : null,
                                          clearable: null != u,
                                          options: x(n.buckets, n.description),
                                          onChange: (e) => {
                                              (0, c.rX)(r, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, i.jsx)('div', {
                                            className: p.description,
                                            children: (0, i.jsx)(o.FormText, {
                                                type: o.FormTextTypes.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: p.description,
                              children: [
                                  (0, i.jsxs)(o.FormText, {
                                      type: o.FormTextTypes.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null !== (t = null == _ ? void 0 : _.bucket) && void 0 !== t ? t : g.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == E
                                      ? (0, i.jsx)(o.FormText, {
                                            type: o.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          S
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == E ? 'None' : JSON.stringify(E, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == u ? 'None' : JSON.stringify(u, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: 0 === f.length ? 'None' : f.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.Button, {
                                    className: p.debugButton,
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => T(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.FormDivider, { className: p.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: p.group,
              children: (0, i.jsx)(o.FormSection, { children: I })
          });
}
function C(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: r } = e,
        [m, h] = s.useState(null != r),
        [S, T] = s.useState(!1),
        C = s.useCallback(() => {
            h((e) => !e);
        }, []),
        _ = (0, a.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(n)),
        E = (0, a.Wu)([d.Z], () =>
            l()
                .sortBy(d.Z.getRecentExposures(g.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [f, I] = (0, a.Wu)([u.Z, d.Z], () => {
            let e = l().sortBy(l().values(u.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let r of e) {
                var s;
                let e = d.Z.getGuildExperimentDescriptor(n, r.id),
                    l = null !== (s = null == e ? void 0 : e.bucket) && void 0 !== s ? s : g.NZ.NOT_ELIGIBLE;
                !(l in t) && (t[l] = 0), t[l]++, i.push(''.concat(r.name, ': ').concat(l));
            }
            let r = l()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), r];
        }),
        N = (0, i.jsx)(o.Clickable, {
            onClick: C,
            children: (0, i.jsxs)(o.FormTitle, {
                tag: o.FormTitleTags.H3,
                className: p.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: t.title }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: p.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: p.group,
              children: [
                  (0, i.jsxs)(o.FormSection, {
                      children: [
                          N,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.SingleSelect, {
                                          value: null != r ? r.bucket : null,
                                          clearable: null != r,
                                          options: x(t.buckets, t.description),
                                          onChange: (e) => {
                                              (0, c.rX)(n, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, i.jsx)('div', {
                                            className: p.description,
                                            children: (0, i.jsx)(o.FormText, {
                                                type: o.FormTextTypes.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: p.description,
                              children: [
                                  (0, i.jsxs)(o.FormText, {
                                      type: o.FormTextTypes.DESCRIPTION,
                                      children: ['Current Assignments: ', I]
                                  }),
                                  null == _
                                      ? (0, i.jsx)(o.FormText, {
                                            type: o.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          S
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: f
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == _ ? 'None' : JSON.stringify(_, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == r ? 'None' : JSON.stringify(r, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: 0 === E.length ? 'None' : E.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.Button, {
                                    className: p.debugButton,
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => T(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.FormDivider, { className: p.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: p.group,
              children: (0, i.jsx)(o.FormSection, { children: N })
          });
}
