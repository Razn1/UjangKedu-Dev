class StudentController {
    index(req, res) {
        const data = {
            message: "Show all Students",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        res.send("Add new Students");
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Update Students Id ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send(`Delete Students Id ${id}`);
    }
}

const object = new StudentController();

module.exports = object;