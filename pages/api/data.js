import Cors from 'micro-cors'

const cors = Cors({
  allowedMethods: ['GET'],
})

function Endpoint(req, res) {
  res.json({ message: 'Hello Everyone!' })
}

export default cors(Endpoint)