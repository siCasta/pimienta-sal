const menu = [
    {
        id: 1,
        nombre: 'Carpaccio fresco',
        img: 'Carpaccio-de-salmon.jpg',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        precio: 'U$S 65.50',
    },
    {
        id: 2,
        nombre: 'Risotto de berenjena',
        img: 'Risotto-berenjena-queso-cabra.jpg',
        descripcion: 'Risotto de berenjena y queso de cabra',
        precio: 'U$S 47.00',
    },
    {
        id: 3,
        nombre: 'Mousse de arroz',
        img: 'Mousse-de-arroz-con-leche.jpg',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        precio: 'U$S 27.50',
    },
    {
        id: 4,
        nombre: 'Espárragos blancos',
        img: 'esparragos.png',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 'U$S 37.50',
    },
]

const detalleMenuController = {
    renderDetalleMenu: (req, res) => {
        menu.forEach(element => {
            if (element.id == req.params.id) {
                res.render('detalleMenu', { menu: element })
            }
        });
    }
}

module.exports = detalleMenuController;