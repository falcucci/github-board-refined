import OptionsSync from 'webext-options-sync'
import select from 'select-dom'

const cache = new Map();

export const api = async endpoint => {
  if (cache.has(endpoint)) {
    return cache.get(endpoint);
  }
  const headers = {
    Accept: 'application/vnd.github.mockingbird-preview'
  };
  const { personalToken } = await new OptionsSync().getAll();
  if (personalToken) {
    headers.Authorization = `token ${personalToken}`;
  }
  const api = "https://api.github.com/repos"
  const response = await fetch(
    api + endpoint,
    {headers}
  );
  const json = await response.json();


  if (response.ok) {
    cache.set(endpoint, json);
  } else if (json.message.includes('API rate limit exceeded')) {
    console.error(
      'Github Project Board hit GitHub API’s rate limit. Set your token in the options or take a walk! 🍃 🌞'
    );
  } else if (json.message === 'Bad credentials') {
    console.error(
      'Github Project Board couldn’t use GitHub’s API because the token seems to be incorrect or expired. Update it in the options.'
    );
  } else {
    console.error(
      'Github Project Board wasn’t able to fetch GitHub’s API.',
      personalToken ? 'Ensure that your token has access to this repo.' : 'Maybe adding a token in the options will fix this issue.',
      '\n',
      JSON.stringify(json, null, '\t')
    );
  }
  return json;
};

export const fetchHtml = async endpoint => {
  const div = document.createElement('div');
  let a = microAjax(endpoint, function(res) {
    div.innerHTML = res.trim();
    const elementToken = select('.js-suggester-container', div);
    const token = elementToken.attributes.getNamedItem('data-preview-authenticity-token').value
    return token
  })
  console.log('a: ', a);
  return a
}
