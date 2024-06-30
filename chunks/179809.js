n.d(t, {
    Z: function () {
        return L;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(225857), o = n(920906), c = n(91192), u = n(477690), d = n(153867), h = n(771845), p = n(880080), _ = n(624138), f = n(727258), m = n(199540), g = n(40153), C = n(252686), I = n(682662), E = n(662146), N = n(689938), x = n(248699), S = n(784490);
let Z = (0, _.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION), v = (0, _.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE), T = (0, _.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
function L(e) {
    let {
            folderNode: t,
            setNodeRef: n,
            selected: r,
            expanded: u,
            mediaState: _,
            mentionCount: L = 0,
            unread: A = !1,
            defaultFolderName: b,
            useCircleMask: M = !1,
            draggable: R = !1,
            sorting: y = !1,
            onDragStart: O,
            onDragEnd: P,
            onExpandCollapse: j,
            onContextMenu: D,
            renderChildNode: U,
            folderIconContent: G
        } = e, {
            id: w,
            name: k,
            children: B
        } = t, [V, H] = l.useState(!1), [F, W] = l.useState(!1), Y = V || F;
    l.useEffect(() => {
        y && H(!1);
    }, [y]);
    let [{dragging: z}, K] = (0, s.c)({
            type: f.eD.FOLDER,
            item: () => (null == O || O(), {
                type: f.eD.FOLDER,
                nodeId: t.id
            }),
            end() {
                null == P || P(), (0, d.V1)(h.ZP.getCompatibleGuildFolders());
            },
            collect: e => ({ dragging: e.isDragging() })
        }), q = l.useCallback(e => {
            W(e);
        }, []), Q = l.useCallback(e => {
            ('ArrowRight' === e.key && !u || 'ArrowLeft' === e.key && u) && j();
        }, [
            j,
            u
        ]), J = null != k && '' !== k ? k : null != b && '' !== b ? b : N.Z.Messages.SERVER_FOLDER_PLACEHOLDER, X = (0, c.Ie)(''.concat(w)), $ = 'folder-items-'.concat(w), ee = B.length * (v + T), et = (0, o.useTransition)(!z && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: Z }
        }), en = l.useCallback(e => null == n ? void 0 : n(w, e), [
            n,
            w
        ]), ei = (0, i.jsxs)(I.H, {
            children: [
                (0, i.jsx)(p.Z, {
                    disabled: z || u,
                    hovered: V,
                    selected: r,
                    unread: A,
                    className: S.pill
                }),
                (0, i.jsx)(E.Z, {
                    text: J,
                    disabled: y,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: R ? K : void 0,
                        className: a()({ [S.wobble]: !z && F && !u }),
                        'data-dnd-name': J,
                        children: z ? (0, i.jsx)(C.Z, {}) : (0, i.jsx)(m.Z, {
                            folderNode: t,
                            expanded: u,
                            forceCircular: M,
                            sorting: y,
                            mediaState: _,
                            mentionCount: L,
                            tooltipName: J,
                            folderGroupId: $,
                            onClick: j,
                            onContextMenu: D,
                            onHoverChange: H,
                            onKeyDown: Q,
                            treeItemProps: X,
                            folderIconContent: G
                        })
                    })
                }),
                R ? (0, i.jsx)(g.ZP, {
                    name: J,
                    targetNode: t,
                    onDragOverChanged: q
                }) : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: en,
        className: x.wrapper,
        children: [
            !z && (0, i.jsx)('span', {
                className: a()(x.expandedFolderBackground, {
                    [x.collapsed]: !u,
                    [x.hover]: Y
                })
            }),
            ei,
            et((e, t, n) => {
                let {key: l} = n;
                return t && (0, i.jsx)(o.animated.ul, {
                    id: $,
                    style: { height: e.height.to(e => e * ee) },
                    className: x.__invalid_expandedGuilds,
                    role: 'group',
                    children: B.map(U)
                }, l);
            }),
            R && u ? (0, i.jsx)(g.Zu, {
                name: J,
                targetNode: t
            }) : null
        ]
    });
}
