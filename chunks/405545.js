var a = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    s = t(186078),
    o = t(137158),
    l = t(944309);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: r, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: _, actionsLocation: f } = e,
        { label: C } = n;
    return (0, a.jsx)(o.Z, {
        field: n,
        index: t,
        isDragEnabled: r,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: C,
        canRemove: _,
        actionsLocation: f,
        children: (0, a.jsx)(s.BO, {
            field: n,
            value: void 0,
            radioItemClassName: i()(l.fieldBackground, l.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
