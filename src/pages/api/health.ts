import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // You can add any other logic like database connectivity checks here
  res.status(200).json({ status: 'OK' });
}