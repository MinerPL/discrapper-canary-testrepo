var r = n(735250),
    i = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    l = n(570140),
    u = n(85235),
    c = n(367907),
    d = n(998698),
    _ = n(895924),
    E = n(588468),
    f = n(600164),
    h = n(718745),
    p = n(590921),
    I = n(665692),
    m = n(981631),
    T = n(689938),
    S = n(847602);
let g = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function A(e, t, n) {
    var r, i;
    let a;
    return (
        n.commands === p.L8.OLD_BUILT_INS ? ((a = t.split(' ')[0].substring(I.GI.length)), (t = t.substring((null !== (r = a.length) && void 0 !== r ? r : 0) + I.GI.length))) : (a = null === (i = d.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName),
        {
            command: a,
            query: t.trim()
        }
    );
}
let N = {
    stores: [d.Z, h.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== p.L8.DISABLED && (i.commands === p.L8.OLD_BUILT_INS ? n.startsWith(I.GI + 'gif') || n.startsWith(I.GI + 'tenor') : (null === (a = d.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === m.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, r, i) {
        let { command: a, query: o } = A(e, n, r);
        if (null == a) return g;
        let l = s().findKey(m.nkL, (e) => e.command === a);
        i && null != l && o.length > 0 && u.Z.search(l, o);
        let c = h.Z.getResults(l, o);
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
                onHover: c,
                onClick: _
            } = e,
            { command: h, query: I } = A(s, l, u);
        if (null == h || 0 === I.length) return null;
        if (n)
            return (0, r.jsx)(o.Spinner, {
                className: S.spinner,
                type: o.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var g, N;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === m.q9n.GIF) {
                        var i, s, o;
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                E.ZP.GIFIntegration,
                                {
                                    className: S.horizontalAutocomplete,
                                    onClick: _,
                                    onHover: c,
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
                o = u.commands === p.L8.OLD_BUILT_INS ? h : null !== (N = null === (g = d.Z.getActiveCommand(s.id)) || void 0 === g ? void 0 : g.integrationTitle) && void 0 !== N ? N : h,
                l =
                    I.length > 0 && null != o
                        ? T.Z.Messages.CONTENT_MATCHING.format({
                              query: I,
                              command: o
                          })
                        : null != o
                          ? o
                          : h;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(E.ZP.Title, { title: l }),
                        e
                            ? (0, r.jsx)(f.Z, {
                                  className: S.horizontalAutocompletes,
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
            channel: s,
            guild: o
        } = e;
        if (null == t) return { type: null };
        let u = n[r];
        if (
            (i === p.QB.INSERT
                ? a.replaceText(
                      (function (e) {
                          return e.meta.url;
                      })(u)
                  )
                : a.sendMessage(
                      (function (e) {
                          return e.meta.url;
                      })(u)
                  ),
            c.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_SELECTED, {
                search_type: m.aib.GIF,
                index_num: r,
                source_object: '/'.concat(t)
            }),
            a.commands !== p.L8.OLD_BUILT_INS)
        ) {
            let e = d.Z.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === _.iw.BUILT_IN_INTEGRATION &&
                (l.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: s,
                        guild: o
                    },
                    command: e,
                    commandOrigin: _.bB.CHAT
                }),
                c.ZP.trackWithMetadata(m.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.Z.getSource(s.id)
                }));
        }
        return { type: p.z2.GIF };
    }
};
function O(e) {
    return e.meta.url;
}
t.Z = N;
