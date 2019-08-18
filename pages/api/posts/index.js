import Cors from 'micro-cors';
import { posts } from '../data/posts';

const cors = Cors({
  allowedMethods: ['GET'],
});

function Endpoint(req, res) {
  res.json(posts);
}

export default cors(Endpoint);
