import { test, expect } from '@playwright/test';

test.describe('Authentication Module', () => {

  test('Valid user should login successfully', async ({ page }, testInfo) => {

    // =====================
    // BUSINESS METADATA
    // =====================
    testInfo.annotations.push(
      { type: 'epic', description: 'User Management' },
      { type: 'feature', description: 'Authentication' },
      { type: 'story', description: 'Valid Login' },
      { type: 'severity', description: 'critical' },
      { type: 'owner', description: 'QA Team' },
      { type: 'tag', description: 'smoke' },
      { type: 'tag', description: 'regression' }
    );

    // =====================
    // STEPS (VISIBLE IN ALLURE)
    // =====================
    await test.step('Navigate to application', async () => {
      await page.goto('https://example.com');
    });

    await test.step('Verify login page title', async () => {
      await expect(page).toHaveTitle(/Example/);
    });

    // =====================
    // ATTACHMENT (EVIDENCE)
    // =====================
    await testInfo.attach('Login Page Screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  });

});
