
class MouseWorld {
    week: number = 0;
    nb_pregnancies = 0;
    constructor(public mouses: (MiceOnePregnancy | MiceMultiplePregnancy)[]) { }

    update() {
        this.mouses.forEach(mice => {
            this.mouses.push(...mice.update());
            if (mice.isPregnant) this.nb_pregnancies += 8;
        });
        this.week++;
    }

    start() {
        while (this.nb_pregnancies + this.mouses.length < 550) {
            this.nb_pregnancies = 0;
            this.update();
            console.log(`|week ${(this.week + "").padStart(2, " ")} | ${(this.mouses.length + "").padStart(3, " ")} mice | (${this.nb_pregnancies}) | ${(this.nb_pregnancies + this.mouses.length) >= 550 ? "<- alert" : ""}`);
        }
    }
}


class MiceMultiplePregnancy {
    constructor(public isFemale = false, public age = 1) { }
    get isPregnant() { return this.isFemale && this.age > 6 }
    update(): MiceMultiplePregnancy[] {
        let kids = []
        if (this.isFemale && this.age > 7 && (this.age - 6) % 3 == 0) {
            kids = Array.from(Array(8), (_, i) => new MiceMultiplePregnancy(i % 2 == 0))
        }
        this.age++
        return kids
    }
}

class MiceOnePregnancy {
    constructor(public isFemale = false, public age = 1) { }
    get isPregnant() { return this.isFemale && this.age > 6 && this.age < 10 }
    update(): MiceOnePregnancy[] {
        let kids = []
        if (this.isFemale && this.age > 7 && (this.age - 6) % 3 == 0 && this.age < 11) {
            kids = Array.from(Array(8), (_, i) => new MiceOnePregnancy(i % 2 == 0))
        }
        this.age++
        return kids
    }
}

console.log("### mouse one pregnancy :");
console.log("| date   | total    |  pregnancy | comments |")
console.log("|:-------|---------:|:------|:---------|")
const mouses = [new MiceOnePregnancy(true, 6), new MiceOnePregnancy(false, 6)];
new MouseWorld(mouses).start();
console.log("### mouse multiple pregnancy :");
console.log("| date   | total    |  pregnancy | comments |")
console.log("|:-------|---------:|:------|:---------|")
const mouses2 = [new MiceMultiplePregnancy(true, 6), new MiceMultiplePregnancy(false, 6)]
new MouseWorld(mouses2).start();



