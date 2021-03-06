const rescue = require('express-rescue');
const service = require('../../service');
const { statusCode } = require('../../utils');

module.exports = rescue(async (request, response, next) => {
  const token = request.headers.authorization;

  try {
    if (!token) throw new Error('Token not found');
  
    request.user = await service.JWT.verify(token, (err, decoded) => {
      if (err) { throw new Error('Expired or invalid token'); }
      return decoded.data;
    });
  } catch ({ message }) {
    return response.status(statusCode.UNAUTHORIZED).send({ message });
  }

  next();
});