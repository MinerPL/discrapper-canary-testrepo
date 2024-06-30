n.d(t, {
    Z: function () {
        return f;
    },
    _: function () {
        return R;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(512722), r = n.n(i), l = n(442837), o = n(749210), c = n(852860), d = n(605436), u = n(650774), _ = n(823379), E = n(434404), I = n(764260), T = n(946724), m = n(999382), N = n(130341), S = n(853813), h = n(163249), g = n(150689), C = n(203377), x = n(981631);
function p(e) {
    E.Z.selectRole(e);
}
let R = () => {
    let {guild: e} = (0, l.cj)([m.Z], () => m.Z.getProps()), t = (0, l.e7)([T.Z], () => T.Z.formState), n = (0, l.e7)([T.Z], () => T.Z.errorMessage);
    return (0, s.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e)
                return;
            let {id: t} = e, n = T.Z.editedRoleIds.map(e => T.Z.getRole(e)).filter(_.lm), s = T.Z.getSortDeltas(), a = null, i = null;
            T.Z.hasRoleConfigurationChanges && (i = T.Z.editedRoleIdsForConfigurations, a = T.Z.getEditedRoleConnectionConfigurationsMap()), (0, I.Gf)(t, n, s, i, a);
        },
        submitting: t === x.QZA.SUBMITTING,
        onReset: I.S1
    });
};
function f(e) {
    let {refToScroller: t} = e, {
            guild: n,
            roles: i
        } = (0, l.cj)([T.Z], () => ({
            guild: T.Z.guild,
            roles: T.Z.roles
        }), []);
    r()(null != n, 'Guild cannot be null here');
    let c = a.useMemo(() => i.find(e => (0, d.pM)(n.id, e.id)), [
        i,
        n
    ]);
    r()(null != c, 'Guild must have an everyone role');
    let _ = a.useMemo(() => i.filter(e => !(0, d.pM)(n.id, e.id)), [
            i,
            n
        ]), E = (0, l.e7)([m.Z], () => m.Z.getSelectedRoleId()), [I, x] = a.useState(_.length > 0);
    a.useEffect(() => {
        x(I || _.length > 0);
    }, [
        I,
        _.length
    ]), a.useEffect(() => {
        let e = u.Z.getMemberCount(n.id);
        null != e && e <= N.cm && o.Z.requestMembers(n.id, '', 0, !1);
    }, []);
    let [R, f] = a.useState(C.ZI.DISPLAY);
    return (a.useEffect(() => {
        null == E && f(C.ZI.DISPLAY);
    }, [E]), null != E) ? (0, s.jsx)(S.Z, {
        editRoleId: E,
        setEditRoleId: p,
        selectedSection: R,
        setSelectedSection: f
    }) : I ? (0, s.jsx)(g.Z, {
        setEditRoleId: p,
        guild: n,
        everyoneRole: c,
        otherRoles: _,
        setSelectedSection: f,
        refToScroller: t
    }) : (0, s.jsx)(h.Z, {
        guild: n,
        everyoneRole: c,
        setEditRoleId: p
    });
}
