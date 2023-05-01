import {checkReqErrors} from 'src/server/includes/status';
import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  if (req.method === 'GET') {
    checkReqErrors({msg: 'Server alive'}, res);
  } else {
    checkReqErrors({error: 'No End Point to this Request'}, res);
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
