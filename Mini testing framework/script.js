class TestRunner {
    constructor() {
      this.tests = [];
      this.executionOrder = 'sequential'; // default order
    }
  
    registerTest(name, testFunction) {
      this.tests.push({ name, testFunction });
    }
  
    runTests() {
      console.log('Running tests...');
      this.tests.forEach(test => {
        try {
          test.testFunction();
          console.log(`✔️ Test passed: ${test.name}`);
        } catch (error) {
          console.error(`❌ Test failed: ${test.name}`);
          console.error(error.message);
        }
      });
    }
  
    filterTests(filter) {
      this.tests = this.tests.filter(test => filter(test.name));
    }
  
    setExecutionOrder(order) {
      this.executionOrder = order;
      if (order === 'random') {
        this.tests.sort(() => Math.random() - 0.5);
      }
    }
  }
  
  // Instantiate the TestRunner
  const testRunner = new TestRunner();
  
  // Assert functions
  const assert = {
    assertEqual(actual, expected, message) {
      if (actual !== expected) {
        throw new Error(message || `Expected ${expected} but got ${actual}`);
      }
    },
  
    assertNotEqual(actual, expected, message) {
      if (actual === expected) {
        throw new Error(message || `Did not expect ${expected} but got ${actual}`);
      }
    },
  
    assertTrue(value, message) {
      if (!value) {
        throw new Error(message || `Expected truthy value but got ${value}`);
      }
    },
  
    assertFalse(value, message) {
      if (value) {
        throw new Error(message || `Expected falsy value but got ${value}`);
      }
    },
  
    assertContains(array, item, message) {
      if (!array.includes(item)) {
        throw new Error(message || `Expected array to contain ${item}`);
      }
    }
  };
  
  // Test suite functions
  function describe(description, fn) {
    console.log(`Test Suite: ${description}`);
    fn();
  }
  
  function test(name, fn) {
    testRunner.registerTest(name, fn);
  }
  
  // Example usage:
  describe('Sample Test Suite', () => {
    test('Test 1: equality check', () => {
      assert.assertEqual(1 + 1, 2, '1 + 1 should equal 2');
    });
  
    test('Test 2: array contains item', () => {
      assert.assertContains([1, 2, 3], 2, 'Array should contain 2');
    });
  });
  
  // Run the tests
  testRunner.runTests();
  