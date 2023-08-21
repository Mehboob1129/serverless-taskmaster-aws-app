"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello friends we have successfuly created ci/cd with serverless framework",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
