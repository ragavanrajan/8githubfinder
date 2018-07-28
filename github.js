class Github {
    constructor() {

        // *************
        // paste your own client id and secret key here
        this.client_id = '1ce3884ec161f5fa0cf8';
        this.client_secret = '2722eb037fa5d7f742d6e3145280cc98d905f5e2';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // *************
        // https://api.github.com/users/ragavanrajan -sample url replace username with user template literals
        // ?add query string and pass in client_id and client_Secret
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}