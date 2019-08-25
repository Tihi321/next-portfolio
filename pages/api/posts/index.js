import corsModule from 'micro-cors';
import posts from '../data/posts';

const cors = corsModule({
  allowedMethods: ['GET'],
});

function Endpoint(req, res) {
  res.json(posts);
}

export default cors(Endpoint);
