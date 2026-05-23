import https from 'https';
https.get('https://ibb.co/S4QXvQxX', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data.match(/property="og:image" content="([^"]+)"/)?.[1]));
});
