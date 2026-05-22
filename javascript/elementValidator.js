// Element State Validator for UI Automation (Cypress/Playwright)
// Validates element properties and recommends actions for QA engineers

/**
 * Validates element state and returns recommended action
 * @param {string} elementName - Name of the element being validated
 * @param {boolean} isPresent - Element exists in the DOM
 * @param {boolean} isDisplayed - Element is visible
 * @param {boolean} isEnabled - Element is enabled for interaction
 * @returns {Object} State info with action and severity
 */
function validateElementState(elementName, isPresent, isDisplayed, isEnabled) {
  // Determine element state using strict equality and logical operators
  const state =
    isPresent === true && isDisplayed === true && isEnabled === true
      ? "READY"
      : isPresent === true && isDisplayed === true && isEnabled === false
        ? "DISABLED"
        : isPresent === true && isDisplayed === false
          ? "HIDDEN"
          : isPresent === false
            ? "NOT_FOUND"
            : "UNKNOWN";

  // Determine severity using ternary operator
  const severity =
    isPresent === false
      ? "CRITICAL"
      : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

  // Define recommended actions based on state
  const actionMap = {
    READY: `✓ [${elementName}] Element is ready for interaction. Proceed with test steps.`,
    DISABLED: `⚠ [${elementName}] Element is disabled. Verify if this is expected. Consider waiting for element to enable or check test preconditions.`,
    HIDDEN: `⚠ [${elementName}] Element is not visible on the screen. Try scrolling into view, waiting for visibility, or checking display CSS properties.`,
    NOT_FOUND: `✗ [${elementName}] Element not found in DOM. Verify selector accuracy and wait for element to appear in the DOM.`,
    UNKNOWN: `? [${elementName}] Unknown state. Check element properties.`,
  };

  return {
    elementName,
    state,
    severity,
    isPresent,
    isDisplayed,
    isEnabled,
    action: actionMap[state],
  };
}

/**
 * Formats and prints validation result with color coding
 * @param {Object} result - Result object from validateElementState
 */
function printValidationResult(result) {
  const { elementName, state, severity, isPresent, isDisplayed, isEnabled, action } = result;

  console.log("\n" + "=".repeat(70));
  console.log(`Element: ${elementName}`);
  console.log(`State: ${state} | Severity: ${severity}`);
  console.log("-".repeat(70));
  console.log(`  isPresent:   ${isPresent === true ? "✓ true" : "✗ false"}`);
  console.log(`  isDisplayed: ${isDisplayed === true ? "✓ true" : "✗ false"}`);
  console.log(`  isEnabled:   ${isEnabled === true ? "✓ true" : "✗ false"}`);
  console.log("-".repeat(70));
  console.log(`Action: ${action}`);
  console.log("=".repeat(70));
}

// Test Cases: Demonstrating all element states
console.log("\n📋 UI AUTOMATION ELEMENT STATE VALIDATION\n");
console.log("Testing all possible element states with different property combinations...");

// Test Case 1: READY state (all properties true)
const test1 = validateElementState("Login Button", true, true, true);
printValidationResult(test1);

// Test Case 2: DISABLED state (present & displayed but not enabled)
const test2 = validateElementState("Submit Button", true, true, false);
printValidationResult(test2);

// Test Case 3: HIDDEN state (present but not displayed)
const test3 = validateElementState("Modal Dialog", true, false, true);
printValidationResult(test3);

// Test Case 4: NOT_FOUND state (not present)
const test4 = validateElementState("Search Input", false, true, true);
printValidationResult(test4);

// Test Case 5: Edge case - Not present overrides other properties
const test5 = validateElementState("Confirmation Popup", false, false, false);
printValidationResult(test5);

// Test Case 6: Another READY state example
const test6 = validateElementState("User Email Field", true, true, true);
printValidationResult(test6);

// Summary Report
console.log("\n📊 VALIDATION SUMMARY:");
console.log("-".repeat(70));
const results = [test1, test2, test3, test4, test5, test6];
const bySeverity = {
  OK: results.filter((r) => r.severity === "OK"),
  WARNING: results.filter((r) => r.severity === "WARNING"),
  CRITICAL: results.filter((r) => r.severity === "CRITICAL"),
};

console.log(`✓ OK (${bySeverity.OK.length}): ${bySeverity.OK.map((r) => r.elementName).join(", ") || "None"}`);
console.log(
  `⚠ WARNING (${bySeverity.WARNING.length}): ${bySeverity.WARNING.map((r) => r.elementName).join(", ") || "None"}`
);
console.log(
  `✗ CRITICAL (${bySeverity.CRITICAL.length}): ${bySeverity.CRITICAL.map((r) => r.elementName).join(", ") || "None"}`
);
console.log("-".repeat(70) + "\n");

// Export for use in other modules (if using CommonJS or module systems)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateElementState, printValidationResult };
}
