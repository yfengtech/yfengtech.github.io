const psn = require('psn-api');

async function main() {
  const accessCode = await psn.exchangeNpssoForCode(process.env.PSN_COOKIE);
  const authorization = await psn.exchangeCodeForAccessToken(accessCode);
  const trophyTitlesResponse = await psn.getUserTitles(
    { accessToken: authorization.accessToken },
    "me"
  );

  console.log(JSON.stringify(trophyTitlesResponse));
}

main();

// const credentials = {
//     email: process.env.PSN_EMAIL,
//     password: process.env.PSN_PASSWORD
// };

// PSN.login(credentials)
//   .then(() => PSN.getTrophies('me', { limit: 5 }))
//   .then(trophies => console.log(JSON.stringify(trophies)))
//   .catch(error => console.error(error));
