export default class IncomePolicy {
  #retirement = 0;
  #emergencyReserve = 0;
  #education = 0;
  #shortGoal = 0;
  #mediumGoal = 0;
  #longGoal = 0;
  #need = 0;
  #free = 0;

  constructor({
    retirement = 0,
    emergencyReserve = 0,
    education = 0,
    shortGoal = 0,
    mediumGoal = 0,
    longGoal = 0,
    need = 0,
    free = 0,
  }) {
    this.#retirement = retirement;
    this.#emergencyReserve = emergencyReserve;
    this.#education = education;
    this.#shortGoal = shortGoal;
    this.#mediumGoal = mediumGoal;
    this.#longGoal = longGoal;
    this.#need = need;
    this.#free = free;
  }

  isValid() {
    const total = (
      this.#retirement +
        this.#emergencyReserve +
        this.#education +
        this.#shortGoal +
        this.#mediumGoal +
        this.#longGoal +
        this.#need +
        this.#free
    );

    if (total !== 1) {
      throw new Error('Policy is not valid. Total is not 1');
    }
    if (this.#need === 0) {
      throw new Error('You must have some value with needs');
    }
    return true;
  }

  applyFor(income) {
    return {
      need: income * this.#need,
      free: income * this.#free,
      retirement: income * this.#retirement,
      emergencyReserve: income * this.#emergencyReserve,
      education: income * this.#education,
      shortGoal: income * this.#shortGoal,
      mediumGoal: income * this.#mediumGoal,
      longGoal: income * this.#longGoal,
    }
  }
}
