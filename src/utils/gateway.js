export async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/drewbolles/repos');
  return response.json();
}
