const Hapi = require('@hapi/hapi');


(async () => {
    const server = Hapi.server({host: 'localhost', port: 3000});

    server.route([
        {
            method: 'GET',
            path: '/halo-febe-06',
            handler: (req, h) => {
                return h.response({
                    'statusCode': 200,
                    'message': 'Halo teman-teman FEBE-06'
                })
            }
        }
    ]);
    
    await server.start();
    console.log('Server start at', server.info.uri)
})();

