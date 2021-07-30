module.exports = function (app) {
  app.get("/users", (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para obter um usuário.'
    // #swagger.parameters['id'] = { description: 'ID do usuário.' }

    const obj = req.body;

    return res.status(404).send(false);
  });

  app.post("/books", (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para obter um usuário.'

    /*	#swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/definitions/AddUser"
                    }  
                }
            }
    } */

    const obj = req.body;

            /* #swagger.responses[200] = {
                    description: 'User successfully obtained.',
                    schema: { $ref: '#/definitions/User' }
            } */
            return res.status(200).send(data)
  });

  app.delete("/users/:id", (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Delete user api.'

    const filtro = req.query.filtro;

    return res.status(404).send(false);
  });
};
