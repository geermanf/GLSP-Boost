export function getTitles(pagina: string): {key: string; value: string[]; }[] {
    let titlesList = {
        Botones: [{key: 'Tipos', value: ['Boton', 'Enfasis', 'Animado', 'Etiquetado', 'Icono', 'Icono-etiquetado', 'Basico', 'Invertido']},
            {key: 'Grupos', value: ['Botones', 'Botones-con-icono']},
            {key: 'Estados', value: ['Activo', 'Deshabilitado', 'Cargando']},
            {key: 'Variaciones', value: ['Social', 'Tamaño', 'Flotado', 'Coloreado',
                                                'Compacto', 'Toggle', 'Positivo', 'Negativo',
                                                'Fluido', 'Circular', 'Vertical', 'Horizontal']},
            {key: 'Variaciones en grupo', value: ['Verticales']}
        ],
        Prueba: [{key: 'Tipos', value: ['Boton', 'Enfasis', 'Animado', 'Etiquetado', 'Icono', 'Icono-etiquetado', 'Basico', 'Invertido']},
                {key: 'Grupos', value: ['Botones', 'Botones-con-icono']},
        ],
    };

    return titlesList[pagina];
}
