const userName = 'EnioSL';

fetch(`https://api.github.com/users/${userName}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.getElementById('avatar').src = json.avatar_url;
        document.getElementById('name').textContent = json.name;
        document.getElementById('login').textContent = `@${json.login}`;
        document.getElementById('rdata').textContent = json.public_repos;
        document.getElementById('followers').textContent = json.followers;
        document.getElementById('following').textContent = json.following;
    })
    .catch(function(error) {
        alert("Ocorreu um erro ao buscar o repositório, tente novamente mais tarde.")
    })
    .finally(function() {
        document.getElementById('loading');
    });