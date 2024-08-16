var r = n(735250),
    i = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    l = n(85235),
    u = n(367907),
    c = n(998698),
    d = n(895924),
    _ = n(588468),
    E = n(600164),
    f = n(718745),
    h = n(590921),
    p = n(665692),
    m = n(981631),
    I = n(689938),
    T = n(847602);
let g = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function S(e, t, n) {
    var r, i;
    let a;
    return (
        n.commands === h.L8.OLD_BUILT_INS ? ((a = t.split(' ')[0].substring(p.GI.length)), (t = t.substring((null !== (r = a.length) && void 0 !== r ? r : 0) + p.GI.length))) : (a = null === (i = c.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name),
        {
            command: a,
            query: t.trim()
        }
    );
}
let A = {
    stores: [c.Z, f.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== h.L8.DISABLED && (i.commands === h.L8.OLD_BUILT_INS ? n.startsWith(p.GI + 'gif') || n.startsWith(p.GI + 'tenor') : (null === (a = c.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === m.q9n.GIF && c.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, r, i) {
        let { command: a, query: o } = S(e, n, r);
        if (null == a) return g;
        let u = s().findKey(m.nkL, (e) => e.command === a);
        i && null != u && o.length > 0 && l.Z.search(u, o);
        let c = f.Z.getResults(u, o);
        return null == c
            ? g
            : {
                  results: {
                      command: a,
                      integrations: c.results,
                      isLoading: c.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: a,
                channel: s,
                query: l,
                options: u,
                onHover: d,
                onClick: f
            } = e,
            { command: p, query: g } = S(s, l, u);
        if (null == p || 0 === g.length) return null;
        if (n)
            return (0, r.jsx)(o.Spinner, {
                className: T.spinner,
                type: o.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var A, N;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === m.q9n.GIF) {
                        var i, s, o;
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                _.ZP.GIFIntegration,
                                {
                                    className: T.horizontalAutocomplete,
                                    onClick: f,
                                    onHover: d,
                                    selected: a === n,
                                    index: n,
                                    width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                    height: null !== (s = t.meta.height) && void 0 !== s ? s : 0,
                                    src: null !== (o = t.meta.src) && void 0 !== o ? o : '',
                                    url: t.meta.url
                                },
                                ''.concat(t.meta.url).concat(t.meta.src)
                            )
                        );
                    }
                }),
                o = u.commands === h.L8.OLD_BUILT_INS ? p : null !== (N = null === (A = c.Z.getActiveCommand(s.id)) || void 0 === A ? void 0 : A.integrationTitle) && void 0 !== N ? N : p,
                l =
                    g.length > 0 && null != o
                        ? I.Z.Messages.CONTENT_MATCHING.format({
                              query: g,
                              command: o
                          })
                        : null != o
                          ? o
                          : p;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.ZP.Title, { title: l }),
                        e
                            ? (0, r.jsx)(E.Z, {
                                  className: T.horizontalAutocompletes,
                                  children: n
                              })
                            : n
                    ]
                },
                'gifs'
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: r,
            type: i,
            options: a,
            channel: s
        } = e;
        if (null == t) return { type: null };
        let o = n[r];
        if (
            (i === h.QB.INSERT
                ? a.replaceText(
                      (function (e) {
                          return e.meta.url;
                      })(o)
                  )
                : a.sendMessage(
                      (function (e) {
                          return e.meta.url;
                      })(o)
                  ),
            u.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_SELECTED, {
                search_type: m.aib.GIF,
                index_num: r,
                source_object: '/'.concat(t)
            }),
            a.commands !== h.L8.OLD_BUILT_INS)
        ) {
            let e = c.Z.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === d.iw.BUILT_IN_INTEGRATION &&
                u.ZP.trackWithMetadata(m.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type
                });
        }
        return { type: h.z2.GIF };
    }
};
function N(e) {
    return e.meta.url;
}
t.Z = A;
