function sortHeroes(heroes) {
    const heroesCopy = heroes.slice();
    return heroesCopy.sort((a, b) => b.health - a.health);
}

module.exports = sortHeroes;
