class FacebookLoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = 'input#email';
        this.passwordInput = 'input#pass';
        this.loginButton = 'button[name="login"]';
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

export default FacebookLoginPage;
