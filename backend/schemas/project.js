export default {
    name:'projects',
    title:'Projects',
    type: 'string',
    fields:[
        { 
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'stack',
            title:'Stacks',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'icon',
            title:'Icon',
            type:'image'
        },
        {
            name:'projecturl',
            title:'ProjectUrl',
            type:'string'
        }
    ]
}