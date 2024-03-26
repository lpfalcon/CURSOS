const db = {
  user: [
    {
      id: "1",
      name: "User1",
    },
  ],
};

async function list(table) {
  return db[table] || [];
}


async function get(table, id) {
  const col = await list(table);
  return col.find((item) => item.id === id);
}

async function query (table, q){
  const col = await list(table);
  const [key] = Object.keys(q) || [];
  return col?.find((item) => item[key] === q[key]);

}

async function upsert(upsertObject) {
  const { table, data } = upsertObject;
  db[table] = db[table] || [];
  const col = (await list(table));
  const index = col.findIndex((item) => item.id === data.id);
  if (index === -1) {
    db[table].push(data);
  } else {
    db[table][index] = data;
  }
  return data;
}
async function remove(table, id) {
  const col = await list(table);
  const index = col.findIndex((item) => item.id === id);
  if (index !== -1) {
    db[table].splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  query,
  list,
  get,
  upsert,
  remove,
};
