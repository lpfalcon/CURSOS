const Table = "user";
const auth = require("../auth");
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }
  function list() {
    return store.list(Table);
  }
  function get(id) {
    return store.get(Table, id);
  }

  async function upsert(data) {
    const { name, username, id, password } = data;
    const user = {
      name,
      username,
      id: id || crypto.randomUUID(),
    };

    if (username || password) {
      await auth.upsert({
        id: user.id,
        username,
        password,
      });
    }

    return store.upsert({ table: Table, data: user });
  }
  function remove(id) {
    return store.remove(Table, id);
  }
  return { list, get, remove, upsert };
};
