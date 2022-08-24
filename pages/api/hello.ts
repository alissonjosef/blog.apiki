import type { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Alisson" },
    { id: 2, name: "Alisson" },
    { id: 3, name: "Alisson" },
  ];

  return response.json(users);
};
