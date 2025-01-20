const {initConnection, Schema, sutando} = require('./sutando')
const modelMig = require('./migrations/2025_01_20_105840_create_model_table')


async function main() {
    initConnection()

    try {
        await new modelMig().up(Schema)
    } catch (error) {}
}

main()
    .then(_ => console.info('Start model migration'))
    .catch((err) => console.error(err))
    .finally(async () => {
        await sutando.destroyAll()
        return process.exit(0)
    })