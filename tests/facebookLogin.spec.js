import { test, expect } from '@playwright/test';
import FacebookLoginPage from '../pageObjects/facebookLoginPage';

test.describe('Facebook Login Tests', () => {
    test('should log in with valid credentials', async ({ page }) => {
        const facebookLoginPage = new FacebookLoginPage(page);

        // Navigate to Facebook
        await facebookLoginPage.navigate();

        // Perform login
        await facebookLoginPage.login('your-email@example.com', 'your-password');

        // Verify successful login (example: check for profile icon)
        await expect(page.locator('div[aria-label="Account"]')).toBeVisible();
    });
});
