n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`,
            other: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`
        })} \u{53EF}\u{7528}\u{3002}`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`,
                        other: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: `, \u{5DF2}\u{9078}\u{53D6}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{5EFA}\u{8B70}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};
