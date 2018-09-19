module.exports = {

  presets: [
    ["env", {
      "modules": false
    }],'@vue/app'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

}

// presets: [
//     '@vue/app'
//   ]