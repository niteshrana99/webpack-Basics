module.exports={
    entry:'./src/main.js',
    output:{
        path:__dirname+'/build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query:{
                presets:['es2015','react']
            }
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=70000' //if image is bigger than 50KB's it is going to create direct url to the image asset. The file loader dependency that we installed takes care of this if the img is greater that 50Kb's.
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
                
            },
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
                
            }
        ]
    }
};