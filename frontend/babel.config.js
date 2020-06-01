// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }


module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      { 
        polyfills: [
          'es.promise', 
          'es.promise.finally',
          'es.symbol',  
          'es.object.entries',
          'es.object.assign',
          'es.object.key',
          'es.array.includes',
          'es.array.iterator',
        ],
        "useBuiltIns": "usage"
      }
    ]
  ]
}