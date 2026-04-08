const db = require("../config/database");

class Komentar {
    static getAll(callback) {
        const sql = "SELECT * FROM komentar";
        db.query(sql, callback);
    }

    static create(data, callback) {
    const sql = "INSERT INTO komentar (komentar, properti_id, user_id, komentar_id) VALUES (?, ?, ?, ?)";
    // Gunakan null jika tidak ada komentar_id
    db.query(sql, [
        data.komentar, 
        data.properti_id, 
        data.user_id, 
        data.komentar_id || null
    ], callback);
}

    static delete(id, callback) {
        const sql = "DELETE FROM komentar WHERE id = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = Komentar;