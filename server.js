const express = require('express');

const app = express();
app.get('/api/hashtags', (req, res) => {
  const hashtags = [
    {id: 1, tag: 'travel'},
    {id: 2, tag: 'travelling'},
    {id: 3, tag: 'nationalgeographic'},
    {id: 4, tag: 'tltravel'},
    {id: 5, tag: 'beautifuldestinations'},
  ];
  res.json(hashtags);
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
