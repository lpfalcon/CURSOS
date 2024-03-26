const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const Table = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  async function login(username, password) {
    const data = await store.query(Table, { username });
    const samePasswords = await bcrypt.compare(password, data.password)
    console.log(samePasswords)
    if (samePasswords) {
      delete data.password;
      return auth.sign(data);
    } else {
      throw new Error("Invalid Data");
    }
  }

  async function upsert(data) {
    const { id, username, password } = data;
    const authData = { id };

    if (username) {
      authData.username = username;
    }

    if (password) {
      authData.password = await bcrypt.hash(password, 5);
    }

    return store.upsert({ table: Table, data: authData });
  }

  return { login, upsert };
};
