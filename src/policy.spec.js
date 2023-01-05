import IncomePolicy from './policy';

describe('IncomePolicy', () => {
  test('should throw error if total is not 100', () => {
    const policy = new IncomePolicy({});

    expect(() => policy.isValid()).toThrow();
  });

  test('should throw error if there is no spends on needs', () => {
    const policy = new IncomePolicy({
      retirement: 0.1,
      emergencyReserve: 0.1,
      education: 0.1,
      shortGoal: 0.1,
      mediumGoal: 0.1,
      longGoal: 0.1,
      free: 0.4,
      need: 0,
    });

    expect(() => policy.isValid()).toThrow();
  });

  test('should throw error if there is no spends on needs', () => {
    const policy = new IncomePolicy({
      retirement: 0.1,
      emergencyReserve: 0.1,
      education: 0.1,
      shortGoal: 0.1,
      mediumGoal: 0.1,
      longGoal: 0.1,
      free: 0.3,
      need: 0.1,
    });

    expect(policy.isValid()).toBe(true);
  });

  test('should apply for an income correctly', () => {
    const policy = new IncomePolicy({
      retirement: 0.1,
      emergencyReserve: 0.1,
      education: 0.1,
      shortGoal: 0.1,
      mediumGoal: 0.1,
      longGoal: 0.1,
      free: 0.3,
      need: 0.1,
    });

    expect(policy.applyFor(1000)).toEqual({
      retirement: 100,
      emergencyReserve: 100,
      education: 100,
      shortGoal: 100,
      mediumGoal: 100,
      longGoal: 100,
      free: 300,
      need: 100,
    });
  });
});
