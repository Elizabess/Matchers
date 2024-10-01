const sortHeroes = require('../sortHeroes');

describe('sortHeroes', () => {
    it('should sort heroes by health in descending order', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];

        const sortedHeroes = sortHeroes(heroes);

        expect(sortedHeroes).toEqual([
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ]);
    });

    it('should return an empty array when input is empty', () => {
        expect(sortHeroes([])).toEqual([]);
    });

    it('should handle a single hero', () => {
        const heroes = [{ name: 'воин', health: 50 }];
        expect(sortHeroes(heroes)).toEqual([{ name: 'воин', health: 50 }]);
    });

    it('should not mutate the original array', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];

        const originalHeroes = [...heroes];
        sortHeroes(heroes);

        expect(heroes).toEqual(originalHeroes);
    });
});
