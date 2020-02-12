const secrets = {
  dbUri: "mongodb+srv://user2:deQWasWEyH@cluster0-h4bvr.mongodb.net/test?retryWrites=true&w=majority"
};


const getSecret = key => secrets[key];

module.exports = getSecret;
