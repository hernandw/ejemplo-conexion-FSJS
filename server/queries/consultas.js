const pool = require("../config/db");

const getProductos = async () => {
  const { rows } = await pool.query("SELECT * FROM productos");
  return rows;
};

module.exports = getProductos;
