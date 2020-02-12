
// Mouse Logic
// age is by week
type Mice = { age: number, isFemale: boolean, haschild: boolean }
let aMice = (isFemale: boolean, age: number = 1) => ({ isFemale, age, haschild: false });
const rules_mice_one_pregnacy = (() => {
    const miceIsMatureForPregnancy = (mice: Mice) => mice.isFemale && mice.age > 6;
    const miceInPregnacy = (mice: Mice) => miceIsMatureForPregnancy(mice) && !mice.haschild;
    const miceGiveBirth = (mice: Mice) => miceInPregnacy(mice) && mice.age > 7 && (mice.age - 6) % 3 == 0 && !mice.haschild;;
    return { miceIsMatureForPregnancy, miceInPregnacy, miceGiveBirth }
})()

const rules_mice_multiple_pregnacy = (() => {
    const miceIsMatureForPregnancy = (mice: Mice) => mice.isFemale && mice.age > 6;
    const miceInPregnacy = (mice: Mice) => miceIsMatureForPregnancy(mice);
    const miceGiveBirth = (mice: Mice) => miceInPregnacy(mice) && mice.age > 7 && (mice.age - 6) % 3 == 0;
    return { miceIsMatureForPregnancy, miceInPregnacy, miceGiveBirth }
})()

type Mouses_Rules = { miceIsMatureForPregnancy: (Mice) => boolean, miceInPregnacy: (Mice) => boolean, miceGiveBirth: (Mice) => boolean }

const babies_Per_Pregnancy = 8;

const start = (mice_rules: Mouses_Rules, mouses: Mice[]) => {
    let week: number = 0;
    let nb_pregnancies = 0;
    while (mouses.length + nb_pregnancies < 550) {
        nb_pregnancies = 0;
        mouses.forEach(mice => {
            if (mice_rules.miceGiveBirth(mice)) {
                let kids = Array.from(Array(8), (_, i) => aMice(i % 2 == 0));
                mice.haschild = true;
                mouses.push(...kids);
            }
            mice.age++;
            nb_pregnancies += mice_rules.miceInPregnacy(mice) ? babies_Per_Pregnancy : 0;

        });
        week++;
        console.log(`|week ${(week + "").padStart(2, " ")} | ${(mouses.length + "").padStart(3, " ")} mice | (${nb_pregnancies}) | ${(nb_pregnancies + mouses.length) >= 550 ? "<- alert" : ""}`);
    }
}

console.log("### mouse one pregnancy :");
console.log("| date   | total    |  pregnancy | comments |")
console.log("|:-------|---------:|:------|:---------|")
start(rules_mice_one_pregnacy, [aMice(true, 6), aMice(false, 6)]);
console.log("### mouse multiple pregnancy :");
console.log("| date   | total    |  pregnancy | comments |")
console.log("|:-------|---------:|:------|:---------|")
start(rules_mice_multiple_pregnacy, [aMice(true, 6), aMice(false, 6)]);