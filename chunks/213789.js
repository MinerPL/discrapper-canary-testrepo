n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
                        other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: `, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
