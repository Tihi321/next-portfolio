import corsModule from 'micro-cors';
import posts from '../data/posts';

const cors = corsModule({
  allowedMethods: ['GET'],
});

function Endpoint(req, res) {
  const {
    query: {pid},
  } = req;

  const post = posts.filter((item) => `${item.id}` === pid);
  const output = (post.length > 0) ? post : {
    error: 'Post not found',
  };

  res.json(output);
}

export default cors(Endpoint);
