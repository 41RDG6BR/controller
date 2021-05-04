import User from '../models/User'

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }

    //Index
    async index(req, res) {
        try {
            const users = await User.findAll();
            //Você precisa retornar um valor no metodo async
            return res.json(users);
        } catch (e) {
            //Se cair no catch o prog quebrou    
            return res.json(null);
        }
    }

    //Show
    async show (req, res) {
        try {
            const users = await User.findByPk(req.params.id);
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

}

export default new UserController();