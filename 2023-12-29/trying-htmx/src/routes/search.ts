import express from 'express';

const router = express.Router();

type SearchResponse = string[];

router.get<{ }, SearchResponse>('/', async (req, res) => {
  const { filter } = req.query;
  const response = await fetch(
    'https://tree-suggestion-api.deno.dev/?filter=' + filter,
  );
  const json = await response.json();
  // await new Promise((resolve) => setTimeout(resolve, Math.random() * 10000));
  if (response.ok) {
    res.render('partials/search-results', {
      filter,
      results: json,
    });
  } else {
    // Error status code will not render in htmx...
    // res.status(response.status);
    res.render('partials/error', {
      message: json.message,
    });
  }
});

export default router;
